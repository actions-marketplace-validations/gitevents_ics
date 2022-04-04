import { readFile } from 'fs/promises'
import { join } from 'path'
import bodyParser from '@zentered/issue-forms-body-parser'

export async function fetchIssues(octokit, locationsFile) {
  let locations = []
  if (locationsFile) {
    const file = await readFile(join(process.cwd(), locationsFile), 'utf8')
    locations = JSON.parse(file)
  }

  const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
  // const [owner, repo] = ['cyprus-developer-community', 'events']

  const response = await octokit.graphql(
    `
    query lastIssues($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        issues(
          filterBy: {labels: "Approved :white_check_mark:"}
          orderBy: {field: CREATED_AT, direction: ASC}
          first: 100
        ) {
          edges {
            node {
              id
              url
              title
              body
              createdAt
              updatedAt
              labels(first:10) {
                nodes {
                  name
                }
              }
              author {
                ... on User {
                  name
                  url
                }
              }
              reactions(first: 100, content: THUMBS_UP) {
                edges {
                  node {
                    user {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          totalCount
        }
      }
    }
  `,
    {
      owner: owner,
      repo: repo
    }
  )
  // console.log(JSON.stringify(response, null, 2))

  const events = []
  for (const edge of response.repository.issues.edges) {
    const issue = edge.node
    const parsedBody = await bodyParser(issue.body)

    if (parsedBody && parsedBody.length > 0) {
      const startTime = parsedBody.find((i) => i.id === 'time')
      const startDate = parsedBody.find((i) => i.id === 'date')
      const duration = parsedBody.find((i) => i.id === 'duration')
      const content = parsedBody.find((i) => i.id === 'event-description')
      const location = parsedBody.find((i) => i.id === 'location')

      let fullDate = ''
      if (startDate && startDate.date && startTime.time) {
        const dateParts = startDate.date.split('-')
        const timeParts = startTime.time.split(':')
        fullDate = dateParts.concat(timeParts).map((d) => parseInt(d))

        const event = {
          productId: 'gitevents/ics',
          start: fullDate,
          duration: duration.duration,
          title: issue.title,
          description: content.text,
          url: issue.url,
          categories: issue.labels.nodes.map((l) => l.name),
          status: 'CONFIRMED',
          busyStatus: 'BUSY',
          organizer: { name: issue.author.name },
          attendees: issue.reactions.edges.map((r) => {
            return {
              name: r.node.user.name,
              rsvp: true,
              partstat: 'ACCEPTED',
              dir: r.node.user.url
            }
          })
        }

        if (locations && locations.length > 0) {
          const locationLookup = locations.find((l) => l.id === location.id)
          if (!locationLookup) {
            event.location = location.text
          } else {
            event.location = locationLookup.name
            if (locationLookup.geo) {
              const [lat, lon] = locationLookup.geo
              event.geo = { lat, lon }
            }
          }
        } else {
          event.location = location
        }

        events.push(event)
      }
    } else {
      console.log('there was an error parsing date and time')
    }
  }

  return events
}
