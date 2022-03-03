import { createRequire as __WEBPACK_EXTERNAL_createRequire } from 'module'
/******/ var __webpack_modules__ = {
  /***/ 7351: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.issue = exports.issueCommand = void 0
    const os = __importStar(__nccwpck_require__(2037))
    const utils_1 = __nccwpck_require__(5278)
    /**
     * Commands
     *
     * Command Format:
     *   ::name key=value,key=value::message
     *
     * Examples:
     *   ::warning::This is the message
     *   ::set-env name=MY_VAR::some value
     */
    function issueCommand(command, properties, message) {
      const cmd = new Command(command, properties, message)
      process.stdout.write(cmd.toString() + os.EOL)
    }
    exports.issueCommand = issueCommand
    function issue(name, message = '') {
      issueCommand(name, {}, message)
    }
    exports.issue = issue
    const CMD_STRING = '::'
    class Command {
      constructor(command, properties, message) {
        if (!command) {
          command = 'missing.command'
        }
        this.command = command
        this.properties = properties
        this.message = message
      }
      toString() {
        let cmdStr = CMD_STRING + this.command
        if (this.properties && Object.keys(this.properties).length > 0) {
          cmdStr += ' '
          let first = true
          for (const key in this.properties) {
            if (this.properties.hasOwnProperty(key)) {
              const val = this.properties[key]
              if (val) {
                if (first) {
                  first = false
                } else {
                  cmdStr += ','
                }
                cmdStr += `${key}=${escapeProperty(val)}`
              }
            }
          }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`
        return cmdStr
      }
    }
    function escapeData(s) {
      return utils_1
        .toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
    }
    function escapeProperty(s) {
      return utils_1
        .toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C')
    }
    //# sourceMappingURL=command.js.map

    /***/
  },

  /***/ 2186: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getIDToken =
      exports.getState =
      exports.saveState =
      exports.group =
      exports.endGroup =
      exports.startGroup =
      exports.info =
      exports.notice =
      exports.warning =
      exports.error =
      exports.debug =
      exports.isDebug =
      exports.setFailed =
      exports.setCommandEcho =
      exports.setOutput =
      exports.getBooleanInput =
      exports.getMultilineInput =
      exports.getInput =
      exports.addPath =
      exports.setSecret =
      exports.exportVariable =
      exports.ExitCode =
        void 0
    const command_1 = __nccwpck_require__(7351)
    const file_command_1 = __nccwpck_require__(717)
    const utils_1 = __nccwpck_require__(5278)
    const os = __importStar(__nccwpck_require__(2037))
    const path = __importStar(__nccwpck_require__(1017))
    const oidc_utils_1 = __nccwpck_require__(8041)
    /**
     * The code to exit an action
     */
    var ExitCode
    ;(function (ExitCode) {
      /**
       * A code indicating that the action was successful
       */
      ExitCode[(ExitCode['Success'] = 0)] = 'Success'
      /**
       * A code indicating that the action was a failure
       */
      ExitCode[(ExitCode['Failure'] = 1)] = 'Failure'
    })((ExitCode = exports.ExitCode || (exports.ExitCode = {})))
    //-----------------------------------------------------------------------
    // Variables
    //-----------------------------------------------------------------------
    /**
     * Sets env variable for this action and future actions in the job
     * @param name the name of the variable to set
     * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function exportVariable(name, val) {
      const convertedVal = utils_1.toCommandValue(val)
      process.env[name] = convertedVal
      const filePath = process.env['GITHUB_ENV'] || ''
      if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_'
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`
        file_command_1.issueCommand('ENV', commandValue)
      } else {
        command_1.issueCommand('set-env', { name }, convertedVal)
      }
    }
    exports.exportVariable = exportVariable
    /**
     * Registers a secret which will get masked from logs
     * @param secret value of the secret
     */
    function setSecret(secret) {
      command_1.issueCommand('add-mask', {}, secret)
    }
    exports.setSecret = setSecret
    /**
     * Prepends inputPath to the PATH (for this action and future actions)
     * @param inputPath
     */
    function addPath(inputPath) {
      const filePath = process.env['GITHUB_PATH'] || ''
      if (filePath) {
        file_command_1.issueCommand('PATH', inputPath)
      } else {
        command_1.issueCommand('add-path', {}, inputPath)
      }
      process.env[
        'PATH'
      ] = `${inputPath}${path.delimiter}${process.env['PATH']}`
    }
    exports.addPath = addPath
    /**
     * Gets the value of an input.
     * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
     * Returns an empty string if the value is not defined.
     *
     * @param     name     name of the input to get
     * @param     options  optional. See InputOptions.
     * @returns   string
     */
    function getInput(name, options) {
      const val =
        process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || ''
      if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`)
      }
      if (options && options.trimWhitespace === false) {
        return val
      }
      return val.trim()
    }
    exports.getInput = getInput
    /**
     * Gets the values of an multiline input.  Each value is also trimmed.
     *
     * @param     name     name of the input to get
     * @param     options  optional. See InputOptions.
     * @returns   string[]
     *
     */
    function getMultilineInput(name, options) {
      const inputs = getInput(name, options)
        .split('\n')
        .filter((x) => x !== '')
      return inputs
    }
    exports.getMultilineInput = getMultilineInput
    /**
     * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
     * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
     * The return value is also in boolean type.
     * ref: https://yaml.org/spec/1.2/spec.html#id2804923
     *
     * @param     name     name of the input to get
     * @param     options  optional. See InputOptions.
     * @returns   boolean
     */
    function getBooleanInput(name, options) {
      const trueValue = ['true', 'True', 'TRUE']
      const falseValue = ['false', 'False', 'FALSE']
      const val = getInput(name, options)
      if (trueValue.includes(val)) return true
      if (falseValue.includes(val)) return false
      throw new TypeError(
        `Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
          `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
      )
    }
    exports.getBooleanInput = getBooleanInput
    /**
     * Sets the value of an output.
     *
     * @param     name     name of the output to set
     * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setOutput(name, value) {
      process.stdout.write(os.EOL)
      command_1.issueCommand('set-output', { name }, value)
    }
    exports.setOutput = setOutput
    /**
     * Enables or disables the echoing of commands into stdout for the rest of the step.
     * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
     *
     */
    function setCommandEcho(enabled) {
      command_1.issue('echo', enabled ? 'on' : 'off')
    }
    exports.setCommandEcho = setCommandEcho
    //-----------------------------------------------------------------------
    // Results
    //-----------------------------------------------------------------------
    /**
     * Sets the action status to failed.
     * When the action exits it will be with an exit code of 1
     * @param message add error issue message
     */
    function setFailed(message) {
      process.exitCode = ExitCode.Failure
      error(message)
    }
    exports.setFailed = setFailed
    //-----------------------------------------------------------------------
    // Logging Commands
    //-----------------------------------------------------------------------
    /**
     * Gets whether Actions Step Debug is on or not
     */
    function isDebug() {
      return process.env['RUNNER_DEBUG'] === '1'
    }
    exports.isDebug = isDebug
    /**
     * Writes debug message to user log
     * @param message debug message
     */
    function debug(message) {
      command_1.issueCommand('debug', {}, message)
    }
    exports.debug = debug
    /**
     * Adds an error issue
     * @param message error issue message. Errors will be converted to string via toString()
     * @param properties optional properties to add to the annotation.
     */
    function error(message, properties = {}) {
      command_1.issueCommand(
        'error',
        utils_1.toCommandProperties(properties),
        message instanceof Error ? message.toString() : message
      )
    }
    exports.error = error
    /**
     * Adds a warning issue
     * @param message warning issue message. Errors will be converted to string via toString()
     * @param properties optional properties to add to the annotation.
     */
    function warning(message, properties = {}) {
      command_1.issueCommand(
        'warning',
        utils_1.toCommandProperties(properties),
        message instanceof Error ? message.toString() : message
      )
    }
    exports.warning = warning
    /**
     * Adds a notice issue
     * @param message notice issue message. Errors will be converted to string via toString()
     * @param properties optional properties to add to the annotation.
     */
    function notice(message, properties = {}) {
      command_1.issueCommand(
        'notice',
        utils_1.toCommandProperties(properties),
        message instanceof Error ? message.toString() : message
      )
    }
    exports.notice = notice
    /**
     * Writes info to log with console.log.
     * @param message info message
     */
    function info(message) {
      process.stdout.write(message + os.EOL)
    }
    exports.info = info
    /**
     * Begin an output group.
     *
     * Output until the next `groupEnd` will be foldable in this group
     *
     * @param name The name of the output group
     */
    function startGroup(name) {
      command_1.issue('group', name)
    }
    exports.startGroup = startGroup
    /**
     * End an output group.
     */
    function endGroup() {
      command_1.issue('endgroup')
    }
    exports.endGroup = endGroup
    /**
     * Wrap an asynchronous function call in a group.
     *
     * Returns the same type as the function itself.
     *
     * @param name The name of the group
     * @param fn The function to wrap in the group
     */
    function group(name, fn) {
      return __awaiter(this, void 0, void 0, function* () {
        startGroup(name)
        let result
        try {
          result = yield fn()
        } finally {
          endGroup()
        }
        return result
      })
    }
    exports.group = group
    //-----------------------------------------------------------------------
    // Wrapper action state
    //-----------------------------------------------------------------------
    /**
     * Saves state for current action, the state can only be retrieved by this action's post job execution.
     *
     * @param     name     name of the state to store
     * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function saveState(name, value) {
      command_1.issueCommand('save-state', { name }, value)
    }
    exports.saveState = saveState
    /**
     * Gets the value of an state set by this action's main execution.
     *
     * @param     name     name of the state to get
     * @returns   string
     */
    function getState(name) {
      return process.env[`STATE_${name}`] || ''
    }
    exports.getState = getState
    function getIDToken(aud) {
      return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud)
      })
    }
    exports.getIDToken = getIDToken
    //# sourceMappingURL=core.js.map

    /***/
  },

  /***/ 717: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    // For internal use, subject to change.
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.issueCommand = void 0
    // We use any as a valid input type
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const fs = __importStar(__nccwpck_require__(7147))
    const os = __importStar(__nccwpck_require__(2037))
    const utils_1 = __nccwpck_require__(5278)
    function issueCommand(command, message) {
      const filePath = process.env[`GITHUB_${command}`]
      if (!filePath) {
        throw new Error(
          `Unable to find environment variable for file command ${command}`
        )
      }
      if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`)
      }
      fs.appendFileSync(
        filePath,
        `${utils_1.toCommandValue(message)}${os.EOL}`,
        {
          encoding: 'utf8'
        }
      )
    }
    exports.issueCommand = issueCommand
    //# sourceMappingURL=file-command.js.map

    /***/
  },

  /***/ 8041: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.OidcClient = void 0
    const http_client_1 = __nccwpck_require__(9925)
    const auth_1 = __nccwpck_require__(3702)
    const core_1 = __nccwpck_require__(2186)
    class OidcClient {
      static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
          allowRetries: allowRetry,
          maxRetries: maxRetry
        }
        return new http_client_1.HttpClient(
          'actions/oidc-client',
          [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())],
          requestOptions
        )
      }
      static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN']
        if (!token) {
          throw new Error(
            'Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable'
          )
        }
        return token
      }
      static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
        if (!runtimeUrl) {
          throw new Error(
            'Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable'
          )
        }
        return runtimeUrl
      }
      static getCall(id_token_url) {
        var _a
        return __awaiter(this, void 0, void 0, function* () {
          const httpclient = OidcClient.createHttpClient()
          const res = yield httpclient.getJson(id_token_url).catch((error) => {
            throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`)
          })
          const id_token =
            (_a = res.result) === null || _a === void 0 ? void 0 : _a.value
          if (!id_token) {
            throw new Error('Response json body do not have ID Token field')
          }
          return id_token
        })
      }
      static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            // New ID Token is requested from action service
            let id_token_url = OidcClient.getIDTokenUrl()
            if (audience) {
              const encodedAudience = encodeURIComponent(audience)
              id_token_url = `${id_token_url}&audience=${encodedAudience}`
            }
            core_1.debug(`ID token url is ${id_token_url}`)
            const id_token = yield OidcClient.getCall(id_token_url)
            core_1.setSecret(id_token)
            return id_token
          } catch (error) {
            throw new Error(`Error message: ${error.message}`)
          }
        })
      }
    }
    exports.OidcClient = OidcClient
    //# sourceMappingURL=oidc-utils.js.map

    /***/
  },

  /***/ 5278: /***/ (__unused_webpack_module, exports) => {
    // We use any as a valid input type
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.toCommandProperties = exports.toCommandValue = void 0
    /**
     * Sanitizes an input into a string so it can be passed into issueCommand safely
     * @param input input to sanitize into a string
     */
    function toCommandValue(input) {
      if (input === null || input === undefined) {
        return ''
      } else if (typeof input === 'string' || input instanceof String) {
        return input
      }
      return JSON.stringify(input)
    }
    exports.toCommandValue = toCommandValue
    /**
     *
     * @param annotationProperties
     * @returns The command properties to send with the actual annotation command
     * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
     */
    function toCommandProperties(annotationProperties) {
      if (!Object.keys(annotationProperties).length) {
        return {}
      }
      return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
      }
    }
    exports.toCommandProperties = toCommandProperties
    //# sourceMappingURL=utils.js.map

    /***/
  },

  /***/ 4087: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.Context = void 0
    const fs_1 = __nccwpck_require__(7147)
    const os_1 = __nccwpck_require__(2037)
    class Context {
      /**
       * Hydrate the context from the environment
       */
      constructor() {
        var _a, _b, _c
        this.payload = {}
        if (process.env.GITHUB_EVENT_PATH) {
          if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
            this.payload = JSON.parse(
              fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, {
                encoding: 'utf8'
              })
            )
          } else {
            const path = process.env.GITHUB_EVENT_PATH
            process.stdout.write(
              `GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`
            )
          }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME
        this.sha = process.env.GITHUB_SHA
        this.ref = process.env.GITHUB_REF
        this.workflow = process.env.GITHUB_WORKFLOW
        this.action = process.env.GITHUB_ACTION
        this.actor = process.env.GITHUB_ACTOR
        this.job = process.env.GITHUB_JOB
        this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10)
        this.runId = parseInt(process.env.GITHUB_RUN_ID, 10)
        this.apiUrl =
          (_a = process.env.GITHUB_API_URL) !== null && _a !== void 0
            ? _a
            : `https://api.github.com`
        this.serverUrl =
          (_b = process.env.GITHUB_SERVER_URL) !== null && _b !== void 0
            ? _b
            : `https://github.com`
        this.graphqlUrl =
          (_c = process.env.GITHUB_GRAPHQL_URL) !== null && _c !== void 0
            ? _c
            : `https://api.github.com/graphql`
      }
      get issue() {
        const payload = this.payload
        return Object.assign(Object.assign({}, this.repo), {
          number: (payload.issue || payload.pull_request || payload).number
        })
      }
      get repo() {
        if (process.env.GITHUB_REPOSITORY) {
          const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
          return { owner, repo }
        }
        if (this.payload.repository) {
          return {
            owner: this.payload.repository.owner.login,
            repo: this.payload.repository.name
          }
        }
        throw new Error(
          "context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'"
        )
      }
    }
    exports.Context = Context
    //# sourceMappingURL=context.js.map

    /***/
  },

  /***/ 5438: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getOctokit = exports.context = void 0
    const Context = __importStar(__nccwpck_require__(4087))
    const utils_1 = __nccwpck_require__(3030)
    exports.context = new Context.Context()
    /**
     * Returns a hydrated octokit ready to use for GitHub Actions
     *
     * @param     token    the repo PAT or GITHUB_TOKEN
     * @param     options  other options to set
     */
    function getOctokit(token, options) {
      return new utils_1.GitHub(utils_1.getOctokitOptions(token, options))
    }
    exports.getOctokit = getOctokit
    //# sourceMappingURL=github.js.map

    /***/
  },

  /***/ 7914: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getApiBaseUrl =
      exports.getProxyAgent =
      exports.getAuthString =
        void 0
    const httpClient = __importStar(__nccwpck_require__(9925))
    function getAuthString(token, options) {
      if (!token && !options.auth) {
        throw new Error('Parameter token or opts.auth is required')
      } else if (token && options.auth) {
        throw new Error(
          'Parameters token and opts.auth may not both be specified'
        )
      }
      return typeof options.auth === 'string' ? options.auth : `token ${token}`
    }
    exports.getAuthString = getAuthString
    function getProxyAgent(destinationUrl) {
      const hc = new httpClient.HttpClient()
      return hc.getAgent(destinationUrl)
    }
    exports.getProxyAgent = getProxyAgent
    function getApiBaseUrl() {
      return process.env['GITHUB_API_URL'] || 'https://api.github.com'
    }
    exports.getApiBaseUrl = getApiBaseUrl
    //# sourceMappingURL=utils.js.map

    /***/
  },

  /***/ 3030: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getOctokitOptions = exports.GitHub = exports.context = void 0
    const Context = __importStar(__nccwpck_require__(4087))
    const Utils = __importStar(__nccwpck_require__(7914))
    // octokit + plugins
    const core_1 = __nccwpck_require__(6762)
    const plugin_rest_endpoint_methods_1 = __nccwpck_require__(3044)
    const plugin_paginate_rest_1 = __nccwpck_require__(4193)
    exports.context = new Context.Context()
    const baseUrl = Utils.getApiBaseUrl()
    const defaults = {
      baseUrl,
      request: {
        agent: Utils.getProxyAgent(baseUrl)
      }
    }
    exports.GitHub = core_1.Octokit.plugin(
      plugin_rest_endpoint_methods_1.restEndpointMethods,
      plugin_paginate_rest_1.paginateRest
    ).defaults(defaults)
    /**
     * Convience function to correctly format Octokit Options to pass into the constructor.
     *
     * @param     token    the repo PAT or GITHUB_TOKEN
     * @param     options  other options to set
     */
    function getOctokitOptions(token, options) {
      const opts = Object.assign({}, options || {}) // Shallow clone - don't mutate the object provided by the caller
      // Auth
      const auth = Utils.getAuthString(token, opts)
      if (auth) {
        opts.auth = auth
      }
      return opts
    }
    exports.getOctokitOptions = getOctokitOptions
    //# sourceMappingURL=utils.js.map

    /***/
  },

  /***/ 3702: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })
    class BasicCredentialHandler {
      constructor(username, password) {
        this.username = username
        this.password = password
      }
      prepareRequest(options) {
        options.headers['Authorization'] =
          'Basic ' +
          Buffer.from(this.username + ':' + this.password).toString('base64')
      }
      // This handler cannot handle 401
      canHandleAuthentication(response) {
        return false
      }
      handleAuthentication(httpClient, requestInfo, objs) {
        return null
      }
    }
    exports.BasicCredentialHandler = BasicCredentialHandler
    class BearerCredentialHandler {
      constructor(token) {
        this.token = token
      }
      // currently implements pre-authorization
      // TODO: support preAuth = false where it hooks on 401
      prepareRequest(options) {
        options.headers['Authorization'] = 'Bearer ' + this.token
      }
      // This handler cannot handle 401
      canHandleAuthentication(response) {
        return false
      }
      handleAuthentication(httpClient, requestInfo, objs) {
        return null
      }
    }
    exports.BearerCredentialHandler = BearerCredentialHandler
    class PersonalAccessTokenCredentialHandler {
      constructor(token) {
        this.token = token
      }
      // currently implements pre-authorization
      // TODO: support preAuth = false where it hooks on 401
      prepareRequest(options) {
        options.headers['Authorization'] =
          'Basic ' + Buffer.from('PAT:' + this.token).toString('base64')
      }
      // This handler cannot handle 401
      canHandleAuthentication(response) {
        return false
      }
      handleAuthentication(httpClient, requestInfo, objs) {
        return null
      }
    }
    exports.PersonalAccessTokenCredentialHandler =
      PersonalAccessTokenCredentialHandler

    /***/
  },

  /***/ 9925: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })
    const http = __nccwpck_require__(3685)
    const https = __nccwpck_require__(5687)
    const pm = __nccwpck_require__(6443)
    let tunnel
    var HttpCodes
    ;(function (HttpCodes) {
      HttpCodes[(HttpCodes['OK'] = 200)] = 'OK'
      HttpCodes[(HttpCodes['MultipleChoices'] = 300)] = 'MultipleChoices'
      HttpCodes[(HttpCodes['MovedPermanently'] = 301)] = 'MovedPermanently'
      HttpCodes[(HttpCodes['ResourceMoved'] = 302)] = 'ResourceMoved'
      HttpCodes[(HttpCodes['SeeOther'] = 303)] = 'SeeOther'
      HttpCodes[(HttpCodes['NotModified'] = 304)] = 'NotModified'
      HttpCodes[(HttpCodes['UseProxy'] = 305)] = 'UseProxy'
      HttpCodes[(HttpCodes['SwitchProxy'] = 306)] = 'SwitchProxy'
      HttpCodes[(HttpCodes['TemporaryRedirect'] = 307)] = 'TemporaryRedirect'
      HttpCodes[(HttpCodes['PermanentRedirect'] = 308)] = 'PermanentRedirect'
      HttpCodes[(HttpCodes['BadRequest'] = 400)] = 'BadRequest'
      HttpCodes[(HttpCodes['Unauthorized'] = 401)] = 'Unauthorized'
      HttpCodes[(HttpCodes['PaymentRequired'] = 402)] = 'PaymentRequired'
      HttpCodes[(HttpCodes['Forbidden'] = 403)] = 'Forbidden'
      HttpCodes[(HttpCodes['NotFound'] = 404)] = 'NotFound'
      HttpCodes[(HttpCodes['MethodNotAllowed'] = 405)] = 'MethodNotAllowed'
      HttpCodes[(HttpCodes['NotAcceptable'] = 406)] = 'NotAcceptable'
      HttpCodes[(HttpCodes['ProxyAuthenticationRequired'] = 407)] =
        'ProxyAuthenticationRequired'
      HttpCodes[(HttpCodes['RequestTimeout'] = 408)] = 'RequestTimeout'
      HttpCodes[(HttpCodes['Conflict'] = 409)] = 'Conflict'
      HttpCodes[(HttpCodes['Gone'] = 410)] = 'Gone'
      HttpCodes[(HttpCodes['TooManyRequests'] = 429)] = 'TooManyRequests'
      HttpCodes[(HttpCodes['InternalServerError'] = 500)] =
        'InternalServerError'
      HttpCodes[(HttpCodes['NotImplemented'] = 501)] = 'NotImplemented'
      HttpCodes[(HttpCodes['BadGateway'] = 502)] = 'BadGateway'
      HttpCodes[(HttpCodes['ServiceUnavailable'] = 503)] = 'ServiceUnavailable'
      HttpCodes[(HttpCodes['GatewayTimeout'] = 504)] = 'GatewayTimeout'
    })((HttpCodes = exports.HttpCodes || (exports.HttpCodes = {})))
    var Headers
    ;(function (Headers) {
      Headers['Accept'] = 'accept'
      Headers['ContentType'] = 'content-type'
    })((Headers = exports.Headers || (exports.Headers = {})))
    var MediaTypes
    ;(function (MediaTypes) {
      MediaTypes['ApplicationJson'] = 'application/json'
    })((MediaTypes = exports.MediaTypes || (exports.MediaTypes = {})))
    /**
     * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    function getProxyUrl(serverUrl) {
      let proxyUrl = pm.getProxyUrl(new URL(serverUrl))
      return proxyUrl ? proxyUrl.href : ''
    }
    exports.getProxyUrl = getProxyUrl
    const HttpRedirectCodes = [
      HttpCodes.MovedPermanently,
      HttpCodes.ResourceMoved,
      HttpCodes.SeeOther,
      HttpCodes.TemporaryRedirect,
      HttpCodes.PermanentRedirect
    ]
    const HttpResponseRetryCodes = [
      HttpCodes.BadGateway,
      HttpCodes.ServiceUnavailable,
      HttpCodes.GatewayTimeout
    ]
    const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD']
    const ExponentialBackoffCeiling = 10
    const ExponentialBackoffTimeSlice = 5
    class HttpClientError extends Error {
      constructor(message, statusCode) {
        super(message)
        this.name = 'HttpClientError'
        this.statusCode = statusCode
        Object.setPrototypeOf(this, HttpClientError.prototype)
      }
    }
    exports.HttpClientError = HttpClientError
    class HttpClientResponse {
      constructor(message) {
        this.message = message
      }
      readBody() {
        return new Promise(async (resolve, reject) => {
          let output = Buffer.alloc(0)
          this.message.on('data', (chunk) => {
            output = Buffer.concat([output, chunk])
          })
          this.message.on('end', () => {
            resolve(output.toString())
          })
        })
      }
    }
    exports.HttpClientResponse = HttpClientResponse
    function isHttps(requestUrl) {
      let parsedUrl = new URL(requestUrl)
      return parsedUrl.protocol === 'https:'
    }
    exports.isHttps = isHttps
    class HttpClient {
      constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false
        this._allowRedirects = true
        this._allowRedirectDowngrade = false
        this._maxRedirects = 50
        this._allowRetries = false
        this._maxRetries = 1
        this._keepAlive = false
        this._disposed = false
        this.userAgent = userAgent
        this.handlers = handlers || []
        this.requestOptions = requestOptions
        if (requestOptions) {
          if (requestOptions.ignoreSslError != null) {
            this._ignoreSslError = requestOptions.ignoreSslError
          }
          this._socketTimeout = requestOptions.socketTimeout
          if (requestOptions.allowRedirects != null) {
            this._allowRedirects = requestOptions.allowRedirects
          }
          if (requestOptions.allowRedirectDowngrade != null) {
            this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade
          }
          if (requestOptions.maxRedirects != null) {
            this._maxRedirects = Math.max(requestOptions.maxRedirects, 0)
          }
          if (requestOptions.keepAlive != null) {
            this._keepAlive = requestOptions.keepAlive
          }
          if (requestOptions.allowRetries != null) {
            this._allowRetries = requestOptions.allowRetries
          }
          if (requestOptions.maxRetries != null) {
            this._maxRetries = requestOptions.maxRetries
          }
        }
      }
      options(requestUrl, additionalHeaders) {
        return this.request(
          'OPTIONS',
          requestUrl,
          null,
          additionalHeaders || {}
        )
      }
      get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {})
      }
      del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {})
      }
      post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {})
      }
      patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {})
      }
      put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {})
      }
      head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {})
      }
      sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders)
      }
      /**
       * Gets a typed object from an endpoint
       * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
       */
      async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
          additionalHeaders,
          Headers.Accept,
          MediaTypes.ApplicationJson
        )
        let res = await this.get(requestUrl, additionalHeaders)
        return this._processResponse(res, this.requestOptions)
      }
      async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2)
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
          additionalHeaders,
          Headers.Accept,
          MediaTypes.ApplicationJson
        )
        additionalHeaders[Headers.ContentType] =
          this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.ContentType,
            MediaTypes.ApplicationJson
          )
        let res = await this.post(requestUrl, data, additionalHeaders)
        return this._processResponse(res, this.requestOptions)
      }
      async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2)
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
          additionalHeaders,
          Headers.Accept,
          MediaTypes.ApplicationJson
        )
        additionalHeaders[Headers.ContentType] =
          this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.ContentType,
            MediaTypes.ApplicationJson
          )
        let res = await this.put(requestUrl, data, additionalHeaders)
        return this._processResponse(res, this.requestOptions)
      }
      async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2)
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
          additionalHeaders,
          Headers.Accept,
          MediaTypes.ApplicationJson
        )
        additionalHeaders[Headers.ContentType] =
          this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.ContentType,
            MediaTypes.ApplicationJson
          )
        let res = await this.patch(requestUrl, data, additionalHeaders)
        return this._processResponse(res, this.requestOptions)
      }
      /**
       * Makes a raw http request.
       * All other methods such as get, post, patch, and request ultimately call this.
       * Prefer get, del, post and patch
       */
      async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
          throw new Error('Client has already been disposed.')
        }
        let parsedUrl = new URL(requestUrl)
        let info = this._prepareRequest(verb, parsedUrl, headers)
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries =
          this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1
        let numTries = 0
        let response
        while (numTries < maxTries) {
          response = await this.requestRaw(info, data)
          // Check if it's an authentication challenge
          if (
            response &&
            response.message &&
            response.message.statusCode === HttpCodes.Unauthorized
          ) {
            let authenticationHandler
            for (let i = 0; i < this.handlers.length; i++) {
              if (this.handlers[i].canHandleAuthentication(response)) {
                authenticationHandler = this.handlers[i]
                break
              }
            }
            if (authenticationHandler) {
              return authenticationHandler.handleAuthentication(
                this,
                info,
                data
              )
            } else {
              // We have received an unauthorized response but have no handlers to handle it.
              // Let the response return to the caller.
              return response
            }
          }
          let redirectsRemaining = this._maxRedirects
          while (
            HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
            this._allowRedirects &&
            redirectsRemaining > 0
          ) {
            const redirectUrl = response.message.headers['location']
            if (!redirectUrl) {
              // if there's no location to redirect to, we won't
              break
            }
            let parsedRedirectUrl = new URL(redirectUrl)
            if (
              parsedUrl.protocol == 'https:' &&
              parsedUrl.protocol != parsedRedirectUrl.protocol &&
              !this._allowRedirectDowngrade
            ) {
              throw new Error(
                'Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.'
              )
            }
            // we need to finish reading the response before reassigning response
            // which will leak the open socket.
            await response.readBody()
            // strip authorization header if redirected to a different hostname
            if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
              for (let header in headers) {
                // header names are case insensitive
                if (header.toLowerCase() === 'authorization') {
                  delete headers[header]
                }
              }
            }
            // let's make the request with the new redirectUrl
            info = this._prepareRequest(verb, parsedRedirectUrl, headers)
            response = await this.requestRaw(info, data)
            redirectsRemaining--
          }
          if (
            HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1
          ) {
            // If not a retry code, return immediately instead of retrying
            return response
          }
          numTries += 1
          if (numTries < maxTries) {
            await response.readBody()
            await this._performExponentialBackoff(numTries)
          }
        }
        return response
      }
      /**
       * Needs to be called if keepAlive is set to true in request options.
       */
      dispose() {
        if (this._agent) {
          this._agent.destroy()
        }
        this._disposed = true
      }
      /**
       * Raw request.
       * @param info
       * @param data
       */
      requestRaw(info, data) {
        return new Promise((resolve, reject) => {
          let callbackForResult = function (err, res) {
            if (err) {
              reject(err)
            }
            resolve(res)
          }
          this.requestRawWithCallback(info, data, callbackForResult)
        })
      }
      /**
       * Raw request with callback.
       * @param info
       * @param data
       * @param onResult
       */
      requestRawWithCallback(info, data, onResult) {
        let socket
        if (typeof data === 'string') {
          info.options.headers['Content-Length'] = Buffer.byteLength(
            data,
            'utf8'
          )
        }
        let callbackCalled = false
        let handleResult = (err, res) => {
          if (!callbackCalled) {
            callbackCalled = true
            onResult(err, res)
          }
        }
        let req = info.httpModule.request(info.options, (msg) => {
          let res = new HttpClientResponse(msg)
          handleResult(null, res)
        })
        req.on('socket', (sock) => {
          socket = sock
        })
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
          if (socket) {
            socket.end()
          }
          handleResult(new Error('Request timeout: ' + info.options.path), null)
        })
        req.on('error', function (err) {
          // err has statusCode property
          // res should have headers
          handleResult(err, null)
        })
        if (data && typeof data === 'string') {
          req.write(data, 'utf8')
        }
        if (data && typeof data !== 'string') {
          data.on('close', function () {
            req.end()
          })
          data.pipe(req)
        } else {
          req.end()
        }
      }
      /**
       * Gets an http agent. This function is useful when you need an http agent that handles
       * routing through a proxy server - depending upon the url and proxy environment variables.
       * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
       */
      getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl)
        return this._getAgent(parsedUrl)
      }
      _prepareRequest(method, requestUrl, headers) {
        const info = {}
        info.parsedUrl = requestUrl
        const usingSsl = info.parsedUrl.protocol === 'https:'
        info.httpModule = usingSsl ? https : http
        const defaultPort = usingSsl ? 443 : 80
        info.options = {}
        info.options.host = info.parsedUrl.hostname
        info.options.port = info.parsedUrl.port
          ? parseInt(info.parsedUrl.port)
          : defaultPort
        info.options.path =
          (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '')
        info.options.method = method
        info.options.headers = this._mergeHeaders(headers)
        if (this.userAgent != null) {
          info.options.headers['user-agent'] = this.userAgent
        }
        info.options.agent = this._getAgent(info.parsedUrl)
        // gives handlers an opportunity to participate
        if (this.handlers) {
          this.handlers.forEach((handler) => {
            handler.prepareRequest(info.options)
          })
        }
        return info
      }
      _mergeHeaders(headers) {
        const lowercaseKeys = (obj) =>
          Object.keys(obj).reduce(
            (c, k) => ((c[k.toLowerCase()] = obj[k]), c),
            {}
          )
        if (this.requestOptions && this.requestOptions.headers) {
          return Object.assign(
            {},
            lowercaseKeys(this.requestOptions.headers),
            lowercaseKeys(headers)
          )
        }
        return lowercaseKeys(headers || {})
      }
      _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = (obj) =>
          Object.keys(obj).reduce(
            (c, k) => ((c[k.toLowerCase()] = obj[k]), c),
            {}
          )
        let clientHeader
        if (this.requestOptions && this.requestOptions.headers) {
          clientHeader = lowercaseKeys(this.requestOptions.headers)[header]
        }
        return additionalHeaders[header] || clientHeader || _default
      }
      _getAgent(parsedUrl) {
        let agent
        let proxyUrl = pm.getProxyUrl(parsedUrl)
        let useProxy = proxyUrl && proxyUrl.hostname
        if (this._keepAlive && useProxy) {
          agent = this._proxyAgent
        }
        if (this._keepAlive && !useProxy) {
          agent = this._agent
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
          return agent
        }
        const usingSsl = parsedUrl.protocol === 'https:'
        let maxSockets = 100
        if (!!this.requestOptions) {
          maxSockets =
            this.requestOptions.maxSockets || http.globalAgent.maxSockets
        }
        if (useProxy) {
          // If using proxy, need tunnel
          if (!tunnel) {
            tunnel = __nccwpck_require__(4294)
          }
          const agentOptions = {
            maxSockets: maxSockets,
            keepAlive: this._keepAlive,
            proxy: {
              ...((proxyUrl.username || proxyUrl.password) && {
                proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
              }),
              host: proxyUrl.hostname,
              port: proxyUrl.port
            }
          }
          let tunnelAgent
          const overHttps = proxyUrl.protocol === 'https:'
          if (usingSsl) {
            tunnelAgent = overHttps
              ? tunnel.httpsOverHttps
              : tunnel.httpsOverHttp
          } else {
            tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp
          }
          agent = tunnelAgent(agentOptions)
          this._proxyAgent = agent
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
          const options = { keepAlive: this._keepAlive, maxSockets: maxSockets }
          agent = usingSsl ? new https.Agent(options) : new http.Agent(options)
          this._agent = agent
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
          agent = usingSsl ? https.globalAgent : http.globalAgent
        }
        if (usingSsl && this._ignoreSslError) {
          // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
          // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
          // we have to cast it to any and change it directly
          agent.options = Object.assign(agent.options || {}, {
            rejectUnauthorized: false
          })
        }
        return agent
      }
      _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber)
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber)
        return new Promise((resolve) => setTimeout(() => resolve(), ms))
      }
      static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
          let a = new Date(value)
          if (!isNaN(a.valueOf())) {
            return a
          }
        }
        return value
      }
      async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
          const statusCode = res.message.statusCode
          const response = {
            statusCode: statusCode,
            result: null,
            headers: {}
          }
          // not found leads to null obj returned
          if (statusCode == HttpCodes.NotFound) {
            resolve(response)
          }
          let obj
          let contents
          // get the result from the body
          try {
            contents = await res.readBody()
            if (contents && contents.length > 0) {
              if (options && options.deserializeDates) {
                obj = JSON.parse(contents, HttpClient.dateTimeDeserializer)
              } else {
                obj = JSON.parse(contents)
              }
              response.result = obj
            }
            response.headers = res.message.headers
          } catch (err) {
            // Invalid resource (contents not json);  leaving result obj null
          }
          // note that 3xx redirects are handled by the http layer.
          if (statusCode > 299) {
            let msg
            // if exception/error in body, attempt to get better error
            if (obj && obj.message) {
              msg = obj.message
            } else if (contents && contents.length > 0) {
              // it may be the case that the exception is in the body message as string
              msg = contents
            } else {
              msg = 'Failed request: (' + statusCode + ')'
            }
            let err = new HttpClientError(msg, statusCode)
            err.result = response.result
            reject(err)
          } else {
            resolve(response)
          }
        })
      }
    }
    exports.HttpClient = HttpClient

    /***/
  },

  /***/ 6443: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })
    function getProxyUrl(reqUrl) {
      let usingSsl = reqUrl.protocol === 'https:'
      let proxyUrl
      if (checkBypass(reqUrl)) {
        return proxyUrl
      }
      let proxyVar
      if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY']
      } else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY']
      }
      if (proxyVar) {
        proxyUrl = new URL(proxyVar)
      }
      return proxyUrl
    }
    exports.getProxyUrl = getProxyUrl
    function checkBypass(reqUrl) {
      if (!reqUrl.hostname) {
        return false
      }
      let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || ''
      if (!noProxy) {
        return false
      }
      // Determine the request port
      let reqPort
      if (reqUrl.port) {
        reqPort = Number(reqUrl.port)
      } else if (reqUrl.protocol === 'http:') {
        reqPort = 80
      } else if (reqUrl.protocol === 'https:') {
        reqPort = 443
      }
      // Format the request hostname and hostname with port
      let upperReqHosts = [reqUrl.hostname.toUpperCase()]
      if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`)
      }
      // Compare request host against noproxy
      for (let upperNoProxyItem of noProxy
        .split(',')
        .map((x) => x.trim().toUpperCase())
        .filter((x) => x)) {
        if (upperReqHosts.some((x) => x === upperNoProxyItem)) {
          return true
        }
      }
      return false
    }
    exports.checkBypass = checkBypass

    /***/
  },

  /***/ 334: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const REGEX_IS_INSTALLATION_LEGACY = /^v1\./
    const REGEX_IS_INSTALLATION = /^ghs_/
    const REGEX_IS_USER_TO_SERVER = /^ghu_/
    async function auth(token) {
      const isApp = token.split(/\./).length === 3
      const isInstallation =
        REGEX_IS_INSTALLATION_LEGACY.test(token) ||
        REGEX_IS_INSTALLATION.test(token)
      const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token)
      const tokenType = isApp
        ? 'app'
        : isInstallation
        ? 'installation'
        : isUserToServer
        ? 'user-to-server'
        : 'oauth'
      return {
        type: 'token',
        token: token,
        tokenType
      }
    }

    /**
     * Prefix token for usage in the Authorization header
     *
     * @param token OAuth token or JSON Web Token
     */
    function withAuthorizationPrefix(token) {
      if (token.split(/\./).length === 3) {
        return `bearer ${token}`
      }

      return `token ${token}`
    }

    async function hook(token, request, route, parameters) {
      const endpoint = request.endpoint.merge(route, parameters)
      endpoint.headers.authorization = withAuthorizationPrefix(token)
      return request(endpoint)
    }

    const createTokenAuth = function createTokenAuth(token) {
      if (!token) {
        throw new Error(
          '[@octokit/auth-token] No token passed to createTokenAuth'
        )
      }

      if (typeof token !== 'string') {
        throw new Error(
          '[@octokit/auth-token] Token passed to createTokenAuth is not a string'
        )
      }

      token = token.replace(/^(token|bearer) +/i, '')
      return Object.assign(auth.bind(null, token), {
        hook: hook.bind(null, token)
      })
    }

    exports.createTokenAuth = createTokenAuth
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6762: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var universalUserAgent = __nccwpck_require__(5030)
    var beforeAfterHook = __nccwpck_require__(3682)
    var request = __nccwpck_require__(6234)
    var graphql = __nccwpck_require__(8467)
    var authToken = __nccwpck_require__(334)

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {}
      var target = {}
      var sourceKeys = Object.keys(source)
      var key, i

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
      }

      return target
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {}

      var target = _objectWithoutPropertiesLoose(source, excluded)

      var key, i

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i]
          if (excluded.indexOf(key) >= 0) continue
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
          target[key] = source[key]
        }
      }

      return target
    }

    const VERSION = '3.5.1'

    const _excluded = ['authStrategy']
    class Octokit {
      constructor(options = {}) {
        const hook = new beforeAfterHook.Collection()
        const requestDefaults = {
          baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
          headers: {},
          request: Object.assign({}, options.request, {
            // @ts-ignore internal usage only, no need to type
            hook: hook.bind(null, 'request')
          }),
          mediaType: {
            previews: [],
            format: ''
          }
        } // prepend default user agent with `options.userAgent` if set

        requestDefaults.headers['user-agent'] = [
          options.userAgent,
          `octokit-core.js/${VERSION} ${universalUserAgent.getUserAgent()}`
        ]
          .filter(Boolean)
          .join(' ')

        if (options.baseUrl) {
          requestDefaults.baseUrl = options.baseUrl
        }

        if (options.previews) {
          requestDefaults.mediaType.previews = options.previews
        }

        if (options.timeZone) {
          requestDefaults.headers['time-zone'] = options.timeZone
        }

        this.request = request.request.defaults(requestDefaults)
        this.graphql = graphql
          .withCustomRequest(this.request)
          .defaults(requestDefaults)
        this.log = Object.assign(
          {
            debug: () => {},
            info: () => {},
            warn: console.warn.bind(console),
            error: console.error.bind(console)
          },
          options.log
        )
        this.hook = hook // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
        //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
        // (2) If only `options.auth` is set, use the default token authentication strategy.
        // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
        // TODO: type `options.auth` based on `options.authStrategy`.

        if (!options.authStrategy) {
          if (!options.auth) {
            // (1)
            this.auth = async () => ({
              type: 'unauthenticated'
            })
          } else {
            // (2)
            const auth = authToken.createTokenAuth(options.auth) // @ts-ignore  ¯\_(ツ)_/¯

            hook.wrap('request', auth.hook)
            this.auth = auth
          }
        } else {
          const { authStrategy } = options,
            otherOptions = _objectWithoutProperties(options, _excluded)

          const auth = authStrategy(
            Object.assign(
              {
                request: this.request,
                log: this.log,
                // we pass the current octokit instance as well as its constructor options
                // to allow for authentication strategies that return a new octokit instance
                // that shares the same internal state as the current one. The original
                // requirement for this was the "event-octokit" authentication strategy
                // of https://github.com/probot/octokit-auth-probot.
                octokit: this,
                octokitOptions: otherOptions
              },
              options.auth
            )
          ) // @ts-ignore  ¯\_(ツ)_/¯

          hook.wrap('request', auth.hook)
          this.auth = auth
        } // apply plugins
        // https://stackoverflow.com/a/16345172

        const classConstructor = this.constructor
        classConstructor.plugins.forEach((plugin) => {
          Object.assign(this, plugin(this, options))
        })
      }

      static defaults(defaults) {
        const OctokitWithDefaults = class extends this {
          constructor(...args) {
            const options = args[0] || {}

            if (typeof defaults === 'function') {
              super(defaults(options))
              return
            }

            super(
              Object.assign(
                {},
                defaults,
                options,
                options.userAgent && defaults.userAgent
                  ? {
                      userAgent: `${options.userAgent} ${defaults.userAgent}`
                    }
                  : null
              )
            )
          }
        }
        return OctokitWithDefaults
      }
      /**
       * Attach a plugin (or many) to your Octokit instance.
       *
       * @example
       * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
       */

      static plugin(...newPlugins) {
        var _a

        const currentPlugins = this.plugins
        const NewOctokit =
          ((_a = class extends this {}),
          (_a.plugins = currentPlugins.concat(
            newPlugins.filter((plugin) => !currentPlugins.includes(plugin))
          )),
          _a)
        return NewOctokit
      }
    }
    Octokit.VERSION = VERSION
    Octokit.plugins = []

    exports.Octokit = Octokit
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 9440: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var isPlainObject = __nccwpck_require__(3287)
    var universalUserAgent = __nccwpck_require__(5030)

    function lowercaseKeys(object) {
      if (!object) {
        return {}
      }

      return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key]
        return newObj
      }, {})
    }

    function mergeDeep(defaults, options) {
      const result = Object.assign({}, defaults)
      Object.keys(options).forEach((key) => {
        if (isPlainObject.isPlainObject(options[key])) {
          if (!(key in defaults))
            Object.assign(result, {
              [key]: options[key]
            })
          else result[key] = mergeDeep(defaults[key], options[key])
        } else {
          Object.assign(result, {
            [key]: options[key]
          })
        }
      })
      return result
    }

    function removeUndefinedProperties(obj) {
      for (const key in obj) {
        if (obj[key] === undefined) {
          delete obj[key]
        }
      }

      return obj
    }

    function merge(defaults, route, options) {
      if (typeof route === 'string') {
        let [method, url] = route.split(' ')
        options = Object.assign(
          url
            ? {
                method,
                url
              }
            : {
                url: method
              },
          options
        )
      } else {
        options = Object.assign({}, route)
      } // lowercase header names before merging with defaults to avoid duplicates

      options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

      removeUndefinedProperties(options)
      removeUndefinedProperties(options.headers)
      const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

      if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
          .filter(
            (preview) => !mergedOptions.mediaType.previews.includes(preview)
          )
          .concat(mergedOptions.mediaType.previews)
      }

      mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
        (preview) => preview.replace(/-preview/, '')
      )
      return mergedOptions
    }

    function addQueryParameters(url, parameters) {
      const separator = /\?/.test(url) ? '&' : '?'
      const names = Object.keys(parameters)

      if (names.length === 0) {
        return url
      }

      return (
        url +
        separator +
        names
          .map((name) => {
            if (name === 'q') {
              return (
                'q=' + parameters.q.split('+').map(encodeURIComponent).join('+')
              )
            }

            return `${name}=${encodeURIComponent(parameters[name])}`
          })
          .join('&')
      )
    }

    const urlVariableRegex = /\{[^}]+\}/g

    function removeNonChars(variableName) {
      return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
    }

    function extractUrlVariableNames(url) {
      const matches = url.match(urlVariableRegex)

      if (!matches) {
        return []
      }

      return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
    }

    function omit(object, keysToOmit) {
      return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
          obj[key] = object[key]
          return obj
        }, {})
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    /* istanbul ignore file */
    function encodeReserved(str) {
      return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
          if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
          }

          return part
        })
        .join('')
    }

    function encodeUnreserved(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    function encodeValue(operator, value, key) {
      value =
        operator === '+' || operator === '#'
          ? encodeReserved(value)
          : encodeUnreserved(value)

      if (key) {
        return encodeUnreserved(key) + '=' + value
      } else {
        return value
      }
    }

    function isDefined(value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator(operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function getValues(context, operator, key, modifier) {
      var value = context[key],
        result = []

      if (isDefined(value) && value !== '') {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(
            encodeValue(operator, value, isKeyOperator(operator) ? key : '')
          )
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(
                  encodeValue(
                    operator,
                    value,
                    isKeyOperator(operator) ? key : ''
                  )
                )
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            const tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeUnreserved(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeUnreserved(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          if (isDefined(value)) {
            result.push(encodeUnreserved(key))
          }
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeUnreserved(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function parseUrl(template) {
      return {
        expand: expand.bind(null, template)
      }
    }

    function expand(template, context) {
      var operators = ['+', '#', '.', '/', ';', '?', '&']
      return template.replace(
        /\{([^\{\}]+)\}|([^\{\}]+)/g,
        function (_, expression, literal) {
          if (expression) {
            let operator = ''
            const values = []

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0)
              expression = expression.substr(1)
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
              values.push(
                getValues(context, operator, tmp[1], tmp[2] || tmp[3])
              )
            })

            if (operator && operator !== '+') {
              var separator = ','

              if (operator === '?') {
                separator = '&'
              } else if (operator !== '#') {
                separator = operator
              }

              return (
                (values.length !== 0 ? operator : '') + values.join(separator)
              )
            } else {
              return values.join(',')
            }
          } else {
            return encodeReserved(literal)
          }
        }
      )
    }

    function parse(options) {
      // https://fetch.spec.whatwg.org/#methods
      let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

      let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
      let headers = Object.assign({}, options.headers)
      let body
      let parameters = omit(options, [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'mediaType'
      ]) // extract variable names from URL to calculate remaining variables later

      const urlVariableNames = extractUrlVariableNames(url)
      url = parseUrl(url).expand(parameters)

      if (!/^http/.test(url)) {
        url = options.baseUrl + url
      }

      const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat('baseUrl')
      const remainingParameters = omit(parameters, omittedParameters)
      const isBinaryRequest = /application\/octet-stream/i.test(headers.accept)

      if (!isBinaryRequest) {
        if (options.mediaType.format) {
          // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
          headers.accept = headers.accept
            .split(/,/)
            .map((preview) =>
              preview.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${options.mediaType.format}`
              )
            )
            .join(',')
        }

        if (options.mediaType.previews.length) {
          const previewsFromAcceptHeader =
            headers.accept.match(/[\w-]+(?=-preview)/g) || []
          headers.accept = previewsFromAcceptHeader
            .concat(options.mediaType.previews)
            .map((preview) => {
              const format = options.mediaType.format
                ? `.${options.mediaType.format}`
                : '+json'
              return `application/vnd.github.${preview}-preview${format}`
            })
            .join(',')
        }
      } // for GET/HEAD requests, set URL query parameters from remaining parameters
      // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

      if (['GET', 'HEAD'].includes(method)) {
        url = addQueryParameters(url, remainingParameters)
      } else {
        if ('data' in remainingParameters) {
          body = remainingParameters.data
        } else {
          if (Object.keys(remainingParameters).length) {
            body = remainingParameters
          } else {
            headers['content-length'] = 0
          }
        }
      } // default content-type for JSON if body is set

      if (!headers['content-type'] && typeof body !== 'undefined') {
        headers['content-type'] = 'application/json; charset=utf-8'
      } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
      // fetch does not allow to set `content-length` header, but we can set body to an empty string

      if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
        body = ''
      } // Only return body/request keys if present

      return Object.assign(
        {
          method,
          url,
          headers
        },
        typeof body !== 'undefined'
          ? {
              body
            }
          : null,
        options.request
          ? {
              request: options.request
            }
          : null
      )
    }

    function endpointWithDefaults(defaults, route, options) {
      return parse(merge(defaults, route, options))
    }

    function withDefaults(oldDefaults, newDefaults) {
      const DEFAULTS = merge(oldDefaults, newDefaults)
      const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
      return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
      })
    }

    const VERSION = '6.0.12'

    const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.

    const DEFAULTS = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': userAgent
      },
      mediaType: {
        format: '',
        previews: []
      }
    }

    const endpoint = withDefaults(null, DEFAULTS)

    exports.endpoint = endpoint
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 8467: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var request = __nccwpck_require__(6234)
    var universalUserAgent = __nccwpck_require__(5030)

    const VERSION = '4.8.0'

    function _buildMessageForResponseErrors(data) {
      return (
        `Request failed due to following response errors:\n` +
        data.errors.map((e) => ` - ${e.message}`).join('\n')
      )
    }

    class GraphqlResponseError extends Error {
      constructor(request, headers, response) {
        super(_buildMessageForResponseErrors(response))
        this.request = request
        this.headers = headers
        this.response = response
        this.name = 'GraphqlResponseError' // Expose the errors and response data in their shorthand properties.

        this.errors = response.errors
        this.data = response.data // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
      }
    }

    const NON_VARIABLE_OPTIONS = [
      'method',
      'baseUrl',
      'url',
      'headers',
      'request',
      'query',
      'mediaType'
    ]
    const FORBIDDEN_VARIABLE_OPTIONS = ['query', 'method', 'url']
    const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/
    function graphql(request, query, options) {
      if (options) {
        if (typeof query === 'string' && 'query' in options) {
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "query" cannot be used as variable name`
            )
          )
        }

        for (const key in options) {
          if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "${key}" cannot be used as variable name`
            )
          )
        }
      }

      const parsedOptions =
        typeof query === 'string'
          ? Object.assign(
              {
                query
              },
              options
            )
          : query
      const requestOptions = Object.keys(parsedOptions).reduce(
        (result, key) => {
          if (NON_VARIABLE_OPTIONS.includes(key)) {
            result[key] = parsedOptions[key]
            return result
          }

          if (!result.variables) {
            result.variables = {}
          }

          result.variables[key] = parsedOptions[key]
          return result
        },
        {}
      ) // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
      // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

      const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl

      if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
        requestOptions.url = baseUrl.replace(
          GHES_V3_SUFFIX_REGEX,
          '/api/graphql'
        )
      }

      return request(requestOptions).then((response) => {
        if (response.data.errors) {
          const headers = {}

          for (const key of Object.keys(response.headers)) {
            headers[key] = response.headers[key]
          }

          throw new GraphqlResponseError(requestOptions, headers, response.data)
        }

        return response.data.data
      })
    }

    function withDefaults(request$1, newDefaults) {
      const newRequest = request$1.defaults(newDefaults)

      const newApi = (query, options) => {
        return graphql(newRequest, query, options)
      }

      return Object.assign(newApi, {
        defaults: withDefaults.bind(null, newRequest),
        endpoint: request.request.endpoint
      })
    }

    const graphql$1 = withDefaults(request.request, {
      headers: {
        'user-agent': `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      },
      method: 'POST',
      url: '/graphql'
    })
    function withCustomRequest(customRequest) {
      return withDefaults(customRequest, {
        method: 'POST',
        url: '/graphql'
      })
    }

    exports.GraphqlResponseError = GraphqlResponseError
    exports.graphql = graphql$1
    exports.withCustomRequest = withCustomRequest
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 4193: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const VERSION = '2.17.0'

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        }

        keys.push.apply(keys, symbols)
      }

      return keys
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
        }
      }

      return target
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        })
      } else {
        obj[key] = value
      }

      return obj
    }

    /**
     * Some “list” response that can be paginated have a different response structure
     *
     * They have a `total_count` key in the response (search also has `incomplete_results`,
     * /installation/repositories also has `repository_selection`), as well as a key with
     * the list of the items which name varies from endpoint to endpoint.
     *
     * Octokit normalizes these responses so that paginated results are always returned following
     * the same structure. One challenge is that if the list response has only one page, no Link
     * header is provided, so this header alone is not sufficient to check wether a response is
     * paginated or not.
     *
     * We check if a "total_count" key is present in the response data, but also make sure that
     * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
     * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
     */
    function normalizePaginatedListResponse(response) {
      // endpoints can respond with 204 if repository is empty
      if (!response.data) {
        return _objectSpread2(
          _objectSpread2({}, response),
          {},
          {
            data: []
          }
        )
      }

      const responseNeedsNormalization =
        'total_count' in response.data && !('url' in response.data)
      if (!responseNeedsNormalization) return response // keep the additional properties intact as there is currently no other way
      // to retrieve the same information.

      const incompleteResults = response.data.incomplete_results
      const repositorySelection = response.data.repository_selection
      const totalCount = response.data.total_count
      delete response.data.incomplete_results
      delete response.data.repository_selection
      delete response.data.total_count
      const namespaceKey = Object.keys(response.data)[0]
      const data = response.data[namespaceKey]
      response.data = data

      if (typeof incompleteResults !== 'undefined') {
        response.data.incomplete_results = incompleteResults
      }

      if (typeof repositorySelection !== 'undefined') {
        response.data.repository_selection = repositorySelection
      }

      response.data.total_count = totalCount
      return response
    }

    function iterator(octokit, route, parameters) {
      const options =
        typeof route === 'function'
          ? route.endpoint(parameters)
          : octokit.request.endpoint(route, parameters)
      const requestMethod =
        typeof route === 'function' ? route : octokit.request
      const method = options.method
      const headers = options.headers
      let url = options.url
      return {
        [Symbol.asyncIterator]: () => ({
          async next() {
            if (!url)
              return {
                done: true
              }

            try {
              const response = await requestMethod({
                method,
                url,
                headers
              })
              const normalizedResponse =
                normalizePaginatedListResponse(response) // `response.headers.link` format:
              // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
              // sets `url` to undefined if "next" URL is not present or `link` header is not set

              url = ((normalizedResponse.headers.link || '').match(
                /<([^>]+)>;\s*rel="next"/
              ) || [])[1]
              return {
                value: normalizedResponse
              }
            } catch (error) {
              if (error.status !== 409) throw error
              url = ''
              return {
                value: {
                  status: 200,
                  headers: {},
                  data: []
                }
              }
            }
          }
        })
      }
    }

    function paginate(octokit, route, parameters, mapFn) {
      if (typeof parameters === 'function') {
        mapFn = parameters
        parameters = undefined
      }

      return gather(
        octokit,
        [],
        iterator(octokit, route, parameters)[Symbol.asyncIterator](),
        mapFn
      )
    }

    function gather(octokit, results, iterator, mapFn) {
      return iterator.next().then((result) => {
        if (result.done) {
          return results
        }

        let earlyExit = false

        function done() {
          earlyExit = true
        }

        results = results.concat(
          mapFn ? mapFn(result.value, done) : result.value.data
        )

        if (earlyExit) {
          return results
        }

        return gather(octokit, results, iterator, mapFn)
      })
    }

    const composePaginateRest = Object.assign(paginate, {
      iterator
    })

    const paginatingEndpoints = [
      'GET /app/hook/deliveries',
      'GET /app/installations',
      'GET /applications/grants',
      'GET /authorizations',
      'GET /enterprises/{enterprise}/actions/permissions/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners',
      'GET /enterprises/{enterprise}/actions/runners',
      'GET /enterprises/{enterprise}/actions/runners/downloads',
      'GET /events',
      'GET /gists',
      'GET /gists/public',
      'GET /gists/starred',
      'GET /gists/{gist_id}/comments',
      'GET /gists/{gist_id}/commits',
      'GET /gists/{gist_id}/forks',
      'GET /installation/repositories',
      'GET /issues',
      'GET /marketplace_listing/plans',
      'GET /marketplace_listing/plans/{plan_id}/accounts',
      'GET /marketplace_listing/stubbed/plans',
      'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts',
      'GET /networks/{owner}/{repo}/events',
      'GET /notifications',
      'GET /organizations',
      'GET /orgs/{org}/actions/permissions/repositories',
      'GET /orgs/{org}/actions/runner-groups',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners',
      'GET /orgs/{org}/actions/runners',
      'GET /orgs/{org}/actions/runners/downloads',
      'GET /orgs/{org}/actions/secrets',
      'GET /orgs/{org}/actions/secrets/{secret_name}/repositories',
      'GET /orgs/{org}/blocks',
      'GET /orgs/{org}/credential-authorizations',
      'GET /orgs/{org}/events',
      'GET /orgs/{org}/failed_invitations',
      'GET /orgs/{org}/hooks',
      'GET /orgs/{org}/hooks/{hook_id}/deliveries',
      'GET /orgs/{org}/installations',
      'GET /orgs/{org}/invitations',
      'GET /orgs/{org}/invitations/{invitation_id}/teams',
      'GET /orgs/{org}/issues',
      'GET /orgs/{org}/members',
      'GET /orgs/{org}/migrations',
      'GET /orgs/{org}/migrations/{migration_id}/repositories',
      'GET /orgs/{org}/outside_collaborators',
      'GET /orgs/{org}/packages',
      'GET /orgs/{org}/projects',
      'GET /orgs/{org}/public_members',
      'GET /orgs/{org}/repos',
      'GET /orgs/{org}/secret-scanning/alerts',
      'GET /orgs/{org}/team-sync/groups',
      'GET /orgs/{org}/teams',
      'GET /orgs/{org}/teams/{team_slug}/discussions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/invitations',
      'GET /orgs/{org}/teams/{team_slug}/members',
      'GET /orgs/{org}/teams/{team_slug}/projects',
      'GET /orgs/{org}/teams/{team_slug}/repos',
      'GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings',
      'GET /orgs/{org}/teams/{team_slug}/teams',
      'GET /projects/columns/{column_id}/cards',
      'GET /projects/{project_id}/collaborators',
      'GET /projects/{project_id}/columns',
      'GET /repos/{owner}/{repo}/actions/artifacts',
      'GET /repos/{owner}/{repo}/actions/runners',
      'GET /repos/{owner}/{repo}/actions/runners/downloads',
      'GET /repos/{owner}/{repo}/actions/runs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs',
      'GET /repos/{owner}/{repo}/actions/secrets',
      'GET /repos/{owner}/{repo}/actions/workflows',
      'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
      'GET /repos/{owner}/{repo}/assignees',
      'GET /repos/{owner}/{repo}/autolinks',
      'GET /repos/{owner}/{repo}/branches',
      'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations',
      'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs',
      'GET /repos/{owner}/{repo}/code-scanning/alerts',
      'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
      'GET /repos/{owner}/{repo}/code-scanning/analyses',
      'GET /repos/{owner}/{repo}/collaborators',
      'GET /repos/{owner}/{repo}/comments',
      'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/commits',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-runs',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-suites',
      'GET /repos/{owner}/{repo}/commits/{ref}/statuses',
      'GET /repos/{owner}/{repo}/contributors',
      'GET /repos/{owner}/{repo}/deployments',
      'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
      'GET /repos/{owner}/{repo}/events',
      'GET /repos/{owner}/{repo}/forks',
      'GET /repos/{owner}/{repo}/git/matching-refs/{ref}',
      'GET /repos/{owner}/{repo}/hooks',
      'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries',
      'GET /repos/{owner}/{repo}/invitations',
      'GET /repos/{owner}/{repo}/issues',
      'GET /repos/{owner}/{repo}/issues/comments',
      'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/issues/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/comments',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/labels',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline',
      'GET /repos/{owner}/{repo}/keys',
      'GET /repos/{owner}/{repo}/labels',
      'GET /repos/{owner}/{repo}/milestones',
      'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels',
      'GET /repos/{owner}/{repo}/notifications',
      'GET /repos/{owner}/{repo}/pages/builds',
      'GET /repos/{owner}/{repo}/projects',
      'GET /repos/{owner}/{repo}/pulls',
      'GET /repos/{owner}/{repo}/pulls/comments',
      'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/commits',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/files',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
      'GET /repos/{owner}/{repo}/releases',
      'GET /repos/{owner}/{repo}/releases/{release_id}/assets',
      'GET /repos/{owner}/{repo}/secret-scanning/alerts',
      'GET /repos/{owner}/{repo}/stargazers',
      'GET /repos/{owner}/{repo}/subscribers',
      'GET /repos/{owner}/{repo}/tags',
      'GET /repos/{owner}/{repo}/teams',
      'GET /repositories',
      'GET /repositories/{repository_id}/environments/{environment_name}/secrets',
      'GET /scim/v2/enterprises/{enterprise}/Groups',
      'GET /scim/v2/enterprises/{enterprise}/Users',
      'GET /scim/v2/organizations/{org}/Users',
      'GET /search/code',
      'GET /search/commits',
      'GET /search/issues',
      'GET /search/labels',
      'GET /search/repositories',
      'GET /search/topics',
      'GET /search/users',
      'GET /teams/{team_id}/discussions',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /teams/{team_id}/discussions/{discussion_number}/reactions',
      'GET /teams/{team_id}/invitations',
      'GET /teams/{team_id}/members',
      'GET /teams/{team_id}/projects',
      'GET /teams/{team_id}/repos',
      'GET /teams/{team_id}/team-sync/group-mappings',
      'GET /teams/{team_id}/teams',
      'GET /user/blocks',
      'GET /user/emails',
      'GET /user/followers',
      'GET /user/following',
      'GET /user/gpg_keys',
      'GET /user/installations',
      'GET /user/installations/{installation_id}/repositories',
      'GET /user/issues',
      'GET /user/keys',
      'GET /user/marketplace_purchases',
      'GET /user/marketplace_purchases/stubbed',
      'GET /user/memberships/orgs',
      'GET /user/migrations',
      'GET /user/migrations/{migration_id}/repositories',
      'GET /user/orgs',
      'GET /user/packages',
      'GET /user/public_emails',
      'GET /user/repos',
      'GET /user/repository_invitations',
      'GET /user/starred',
      'GET /user/subscriptions',
      'GET /user/teams',
      'GET /users',
      'GET /users/{username}/events',
      'GET /users/{username}/events/orgs/{org}',
      'GET /users/{username}/events/public',
      'GET /users/{username}/followers',
      'GET /users/{username}/following',
      'GET /users/{username}/gists',
      'GET /users/{username}/gpg_keys',
      'GET /users/{username}/keys',
      'GET /users/{username}/orgs',
      'GET /users/{username}/packages',
      'GET /users/{username}/projects',
      'GET /users/{username}/received_events',
      'GET /users/{username}/received_events/public',
      'GET /users/{username}/repos',
      'GET /users/{username}/starred',
      'GET /users/{username}/subscriptions'
    ]

    function isPaginatingEndpoint(arg) {
      if (typeof arg === 'string') {
        return paginatingEndpoints.includes(arg)
      } else {
        return false
      }
    }

    /**
     * @param octokit Octokit instance
     * @param options Options passed to Octokit constructor
     */

    function paginateRest(octokit) {
      return {
        paginate: Object.assign(paginate.bind(null, octokit), {
          iterator: iterator.bind(null, octokit)
        })
      }
    }
    paginateRest.VERSION = VERSION

    exports.composePaginateRest = composePaginateRest
    exports.isPaginatingEndpoint = isPaginatingEndpoint
    exports.paginateRest = paginateRest
    exports.paginatingEndpoints = paginatingEndpoints
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 3044: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        }

        keys.push.apply(keys, symbols)
      }

      return keys
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
        }
      }

      return target
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        })
      } else {
        obj[key] = value
      }

      return obj
    }

    const Endpoints = {
      actions: {
        addSelectedRepoToOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
        ],
        approveWorkflowRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve'
        ],
        cancelWorkflowRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel'
        ],
        createOrUpdateEnvironmentSecret: [
          'PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        createOrUpdateOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}'
        ],
        createOrUpdateRepoSecret: [
          'PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        createRegistrationTokenForOrg: [
          'POST /orgs/{org}/actions/runners/registration-token'
        ],
        createRegistrationTokenForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/registration-token'
        ],
        createRemoveTokenForOrg: [
          'POST /orgs/{org}/actions/runners/remove-token'
        ],
        createRemoveTokenForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/remove-token'
        ],
        createWorkflowDispatch: [
          'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches'
        ],
        deleteArtifact: [
          'DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
        ],
        deleteEnvironmentSecret: [
          'DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        deleteOrgSecret: ['DELETE /orgs/{org}/actions/secrets/{secret_name}'],
        deleteRepoSecret: [
          'DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        deleteSelfHostedRunnerFromOrg: [
          'DELETE /orgs/{org}/actions/runners/{runner_id}'
        ],
        deleteSelfHostedRunnerFromRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}'
        ],
        deleteWorkflowRun: [
          'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}'
        ],
        deleteWorkflowRunLogs: [
          'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
        ],
        disableSelectedRepositoryGithubActionsOrganization: [
          'DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}'
        ],
        disableWorkflow: [
          'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable'
        ],
        downloadArtifact: [
          'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}'
        ],
        downloadJobLogsForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs'
        ],
        downloadWorkflowRunAttemptLogs: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs'
        ],
        downloadWorkflowRunLogs: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
        ],
        enableSelectedRepositoryGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories/{repository_id}'
        ],
        enableWorkflow: [
          'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable'
        ],
        getAllowedActionsOrganization: [
          'GET /orgs/{org}/actions/permissions/selected-actions'
        ],
        getAllowedActionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions/selected-actions'
        ],
        getArtifact: [
          'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
        ],
        getEnvironmentPublicKey: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key'
        ],
        getEnvironmentSecret: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        getGithubActionsPermissionsOrganization: [
          'GET /orgs/{org}/actions/permissions'
        ],
        getGithubActionsPermissionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions'
        ],
        getJobForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/jobs/{job_id}'
        ],
        getOrgPublicKey: ['GET /orgs/{org}/actions/secrets/public-key'],
        getOrgSecret: ['GET /orgs/{org}/actions/secrets/{secret_name}'],
        getPendingDeploymentsForRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
        ],
        getRepoPermissions: [
          'GET /repos/{owner}/{repo}/actions/permissions',
          {},
          {
            renamed: ['actions', 'getGithubActionsPermissionsRepository']
          }
        ],
        getRepoPublicKey: [
          'GET /repos/{owner}/{repo}/actions/secrets/public-key'
        ],
        getRepoSecret: [
          'GET /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        getReviewsForRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals'
        ],
        getSelfHostedRunnerForOrg: [
          'GET /orgs/{org}/actions/runners/{runner_id}'
        ],
        getSelfHostedRunnerForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/{runner_id}'
        ],
        getWorkflow: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}'
        ],
        getWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}'],
        getWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}'
        ],
        getWorkflowRunUsage: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing'
        ],
        getWorkflowUsage: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing'
        ],
        listArtifactsForRepo: ['GET /repos/{owner}/{repo}/actions/artifacts'],
        listEnvironmentSecrets: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets'
        ],
        listJobsForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs'
        ],
        listJobsForWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs'
        ],
        listOrgSecrets: ['GET /orgs/{org}/actions/secrets'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/actions/secrets'],
        listRepoWorkflows: ['GET /repos/{owner}/{repo}/actions/workflows'],
        listRunnerApplicationsForOrg: [
          'GET /orgs/{org}/actions/runners/downloads'
        ],
        listRunnerApplicationsForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/downloads'
        ],
        listSelectedReposForOrgSecret: [
          'GET /orgs/{org}/actions/secrets/{secret_name}/repositories'
        ],
        listSelectedRepositoriesEnabledGithubActionsOrganization: [
          'GET /orgs/{org}/actions/permissions/repositories'
        ],
        listSelfHostedRunnersForOrg: ['GET /orgs/{org}/actions/runners'],
        listSelfHostedRunnersForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners'
        ],
        listWorkflowRunArtifacts: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts'
        ],
        listWorkflowRuns: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs'
        ],
        listWorkflowRunsForRepo: ['GET /repos/{owner}/{repo}/actions/runs'],
        removeSelectedRepoFromOrgSecret: [
          'DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
        ],
        reviewPendingDeploymentsForRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
        ],
        setAllowedActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/selected-actions'
        ],
        setAllowedActionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions/selected-actions'
        ],
        setGithubActionsPermissionsOrganization: [
          'PUT /orgs/{org}/actions/permissions'
        ],
        setGithubActionsPermissionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions'
        ],
        setSelectedReposForOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories'
        ],
        setSelectedRepositoriesEnabledGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories'
        ]
      },
      activity: {
        checkRepoIsStarredByAuthenticatedUser: [
          'GET /user/starred/{owner}/{repo}'
        ],
        deleteRepoSubscription: ['DELETE /repos/{owner}/{repo}/subscription'],
        deleteThreadSubscription: [
          'DELETE /notifications/threads/{thread_id}/subscription'
        ],
        getFeeds: ['GET /feeds'],
        getRepoSubscription: ['GET /repos/{owner}/{repo}/subscription'],
        getThread: ['GET /notifications/threads/{thread_id}'],
        getThreadSubscriptionForAuthenticatedUser: [
          'GET /notifications/threads/{thread_id}/subscription'
        ],
        listEventsForAuthenticatedUser: ['GET /users/{username}/events'],
        listNotificationsForAuthenticatedUser: ['GET /notifications'],
        listOrgEventsForAuthenticatedUser: [
          'GET /users/{username}/events/orgs/{org}'
        ],
        listPublicEvents: ['GET /events'],
        listPublicEventsForRepoNetwork: ['GET /networks/{owner}/{repo}/events'],
        listPublicEventsForUser: ['GET /users/{username}/events/public'],
        listPublicOrgEvents: ['GET /orgs/{org}/events'],
        listReceivedEventsForUser: ['GET /users/{username}/received_events'],
        listReceivedPublicEventsForUser: [
          'GET /users/{username}/received_events/public'
        ],
        listRepoEvents: ['GET /repos/{owner}/{repo}/events'],
        listRepoNotificationsForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/notifications'
        ],
        listReposStarredByAuthenticatedUser: ['GET /user/starred'],
        listReposStarredByUser: ['GET /users/{username}/starred'],
        listReposWatchedByUser: ['GET /users/{username}/subscriptions'],
        listStargazersForRepo: ['GET /repos/{owner}/{repo}/stargazers'],
        listWatchedReposForAuthenticatedUser: ['GET /user/subscriptions'],
        listWatchersForRepo: ['GET /repos/{owner}/{repo}/subscribers'],
        markNotificationsAsRead: ['PUT /notifications'],
        markRepoNotificationsAsRead: [
          'PUT /repos/{owner}/{repo}/notifications'
        ],
        markThreadAsRead: ['PATCH /notifications/threads/{thread_id}'],
        setRepoSubscription: ['PUT /repos/{owner}/{repo}/subscription'],
        setThreadSubscription: [
          'PUT /notifications/threads/{thread_id}/subscription'
        ],
        starRepoForAuthenticatedUser: ['PUT /user/starred/{owner}/{repo}'],
        unstarRepoForAuthenticatedUser: ['DELETE /user/starred/{owner}/{repo}']
      },
      apps: {
        addRepoToInstallation: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          {
            renamed: ['apps', 'addRepoToInstallationForAuthenticatedUser']
          }
        ],
        addRepoToInstallationForAuthenticatedUser: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}'
        ],
        checkToken: ['POST /applications/{client_id}/token'],
        createContentAttachment: [
          'POST /content_references/{content_reference_id}/attachments',
          {
            mediaType: {
              previews: ['corsair']
            }
          }
        ],
        createContentAttachmentForRepo: [
          'POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments',
          {
            mediaType: {
              previews: ['corsair']
            }
          }
        ],
        createFromManifest: ['POST /app-manifests/{code}/conversions'],
        createInstallationAccessToken: [
          'POST /app/installations/{installation_id}/access_tokens'
        ],
        deleteAuthorization: ['DELETE /applications/{client_id}/grant'],
        deleteInstallation: ['DELETE /app/installations/{installation_id}'],
        deleteToken: ['DELETE /applications/{client_id}/token'],
        getAuthenticated: ['GET /app'],
        getBySlug: ['GET /apps/{app_slug}'],
        getInstallation: ['GET /app/installations/{installation_id}'],
        getOrgInstallation: ['GET /orgs/{org}/installation'],
        getRepoInstallation: ['GET /repos/{owner}/{repo}/installation'],
        getSubscriptionPlanForAccount: [
          'GET /marketplace_listing/accounts/{account_id}'
        ],
        getSubscriptionPlanForAccountStubbed: [
          'GET /marketplace_listing/stubbed/accounts/{account_id}'
        ],
        getUserInstallation: ['GET /users/{username}/installation'],
        getWebhookConfigForApp: ['GET /app/hook/config'],
        getWebhookDelivery: ['GET /app/hook/deliveries/{delivery_id}'],
        listAccountsForPlan: [
          'GET /marketplace_listing/plans/{plan_id}/accounts'
        ],
        listAccountsForPlanStubbed: [
          'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts'
        ],
        listInstallationReposForAuthenticatedUser: [
          'GET /user/installations/{installation_id}/repositories'
        ],
        listInstallations: ['GET /app/installations'],
        listInstallationsForAuthenticatedUser: ['GET /user/installations'],
        listPlans: ['GET /marketplace_listing/plans'],
        listPlansStubbed: ['GET /marketplace_listing/stubbed/plans'],
        listReposAccessibleToInstallation: ['GET /installation/repositories'],
        listSubscriptionsForAuthenticatedUser: [
          'GET /user/marketplace_purchases'
        ],
        listSubscriptionsForAuthenticatedUserStubbed: [
          'GET /user/marketplace_purchases/stubbed'
        ],
        listWebhookDeliveries: ['GET /app/hook/deliveries'],
        redeliverWebhookDelivery: [
          'POST /app/hook/deliveries/{delivery_id}/attempts'
        ],
        removeRepoFromInstallation: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          {
            renamed: ['apps', 'removeRepoFromInstallationForAuthenticatedUser']
          }
        ],
        removeRepoFromInstallationForAuthenticatedUser: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}'
        ],
        resetToken: ['PATCH /applications/{client_id}/token'],
        revokeInstallationAccessToken: ['DELETE /installation/token'],
        scopeToken: ['POST /applications/{client_id}/token/scoped'],
        suspendInstallation: [
          'PUT /app/installations/{installation_id}/suspended'
        ],
        unsuspendInstallation: [
          'DELETE /app/installations/{installation_id}/suspended'
        ],
        updateWebhookConfigForApp: ['PATCH /app/hook/config']
      },
      billing: {
        getGithubActionsBillingOrg: [
          'GET /orgs/{org}/settings/billing/actions'
        ],
        getGithubActionsBillingUser: [
          'GET /users/{username}/settings/billing/actions'
        ],
        getGithubPackagesBillingOrg: [
          'GET /orgs/{org}/settings/billing/packages'
        ],
        getGithubPackagesBillingUser: [
          'GET /users/{username}/settings/billing/packages'
        ],
        getSharedStorageBillingOrg: [
          'GET /orgs/{org}/settings/billing/shared-storage'
        ],
        getSharedStorageBillingUser: [
          'GET /users/{username}/settings/billing/shared-storage'
        ]
      },
      checks: {
        create: ['POST /repos/{owner}/{repo}/check-runs'],
        createSuite: ['POST /repos/{owner}/{repo}/check-suites'],
        get: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}'],
        getSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}'],
        listAnnotations: [
          'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations'
        ],
        listForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-runs'],
        listForSuite: [
          'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs'
        ],
        listSuitesForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/check-suites'
        ],
        rerequestRun: [
          'POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest'
        ],
        rerequestSuite: [
          'POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest'
        ],
        setSuitesPreferences: [
          'PATCH /repos/{owner}/{repo}/check-suites/preferences'
        ],
        update: ['PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}']
      },
      codeScanning: {
        deleteAnalysis: [
          'DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}'
        ],
        getAlert: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
          {},
          {
            renamedParameters: {
              alert_id: 'alert_number'
            }
          }
        ],
        getAnalysis: [
          'GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}'
        ],
        getSarif: ['GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}'],
        listAlertInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances'
        ],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/code-scanning/alerts'],
        listAlertsInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
          {},
          {
            renamed: ['codeScanning', 'listAlertInstances']
          }
        ],
        listRecentAnalyses: [
          'GET /repos/{owner}/{repo}/code-scanning/analyses'
        ],
        updateAlert: [
          'PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}'
        ],
        uploadSarif: ['POST /repos/{owner}/{repo}/code-scanning/sarifs']
      },
      codesOfConduct: {
        getAllCodesOfConduct: ['GET /codes_of_conduct'],
        getConductCode: ['GET /codes_of_conduct/{key}']
      },
      emojis: {
        get: ['GET /emojis']
      },
      enterpriseAdmin: {
        disableSelectedOrganizationGithubActionsEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
        ],
        enableSelectedOrganizationGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
        ],
        getAllowedActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/selected-actions'
        ],
        getGithubActionsPermissionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions'
        ],
        listSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/organizations'
        ],
        setAllowedActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/selected-actions'
        ],
        setGithubActionsPermissionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions'
        ],
        setSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations'
        ]
      },
      gists: {
        checkIsStarred: ['GET /gists/{gist_id}/star'],
        create: ['POST /gists'],
        createComment: ['POST /gists/{gist_id}/comments'],
        delete: ['DELETE /gists/{gist_id}'],
        deleteComment: ['DELETE /gists/{gist_id}/comments/{comment_id}'],
        fork: ['POST /gists/{gist_id}/forks'],
        get: ['GET /gists/{gist_id}'],
        getComment: ['GET /gists/{gist_id}/comments/{comment_id}'],
        getRevision: ['GET /gists/{gist_id}/{sha}'],
        list: ['GET /gists'],
        listComments: ['GET /gists/{gist_id}/comments'],
        listCommits: ['GET /gists/{gist_id}/commits'],
        listForUser: ['GET /users/{username}/gists'],
        listForks: ['GET /gists/{gist_id}/forks'],
        listPublic: ['GET /gists/public'],
        listStarred: ['GET /gists/starred'],
        star: ['PUT /gists/{gist_id}/star'],
        unstar: ['DELETE /gists/{gist_id}/star'],
        update: ['PATCH /gists/{gist_id}'],
        updateComment: ['PATCH /gists/{gist_id}/comments/{comment_id}']
      },
      git: {
        createBlob: ['POST /repos/{owner}/{repo}/git/blobs'],
        createCommit: ['POST /repos/{owner}/{repo}/git/commits'],
        createRef: ['POST /repos/{owner}/{repo}/git/refs'],
        createTag: ['POST /repos/{owner}/{repo}/git/tags'],
        createTree: ['POST /repos/{owner}/{repo}/git/trees'],
        deleteRef: ['DELETE /repos/{owner}/{repo}/git/refs/{ref}'],
        getBlob: ['GET /repos/{owner}/{repo}/git/blobs/{file_sha}'],
        getCommit: ['GET /repos/{owner}/{repo}/git/commits/{commit_sha}'],
        getRef: ['GET /repos/{owner}/{repo}/git/ref/{ref}'],
        getTag: ['GET /repos/{owner}/{repo}/git/tags/{tag_sha}'],
        getTree: ['GET /repos/{owner}/{repo}/git/trees/{tree_sha}'],
        listMatchingRefs: ['GET /repos/{owner}/{repo}/git/matching-refs/{ref}'],
        updateRef: ['PATCH /repos/{owner}/{repo}/git/refs/{ref}']
      },
      gitignore: {
        getAllTemplates: ['GET /gitignore/templates'],
        getTemplate: ['GET /gitignore/templates/{name}']
      },
      interactions: {
        getRestrictionsForAuthenticatedUser: ['GET /user/interaction-limits'],
        getRestrictionsForOrg: ['GET /orgs/{org}/interaction-limits'],
        getRestrictionsForRepo: [
          'GET /repos/{owner}/{repo}/interaction-limits'
        ],
        getRestrictionsForYourPublicRepos: [
          'GET /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'getRestrictionsForAuthenticatedUser']
          }
        ],
        removeRestrictionsForAuthenticatedUser: [
          'DELETE /user/interaction-limits'
        ],
        removeRestrictionsForOrg: ['DELETE /orgs/{org}/interaction-limits'],
        removeRestrictionsForRepo: [
          'DELETE /repos/{owner}/{repo}/interaction-limits'
        ],
        removeRestrictionsForYourPublicRepos: [
          'DELETE /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'removeRestrictionsForAuthenticatedUser']
          }
        ],
        setRestrictionsForAuthenticatedUser: ['PUT /user/interaction-limits'],
        setRestrictionsForOrg: ['PUT /orgs/{org}/interaction-limits'],
        setRestrictionsForRepo: [
          'PUT /repos/{owner}/{repo}/interaction-limits'
        ],
        setRestrictionsForYourPublicRepos: [
          'PUT /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'setRestrictionsForAuthenticatedUser']
          }
        ]
      },
      issues: {
        addAssignees: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/assignees'
        ],
        addLabels: ['POST /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        checkUserCanBeAssigned: [
          'GET /repos/{owner}/{repo}/assignees/{assignee}'
        ],
        create: ['POST /repos/{owner}/{repo}/issues'],
        createComment: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/comments'
        ],
        createLabel: ['POST /repos/{owner}/{repo}/labels'],
        createMilestone: ['POST /repos/{owner}/{repo}/milestones'],
        deleteComment: [
          'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}'
        ],
        deleteLabel: ['DELETE /repos/{owner}/{repo}/labels/{name}'],
        deleteMilestone: [
          'DELETE /repos/{owner}/{repo}/milestones/{milestone_number}'
        ],
        get: ['GET /repos/{owner}/{repo}/issues/{issue_number}'],
        getComment: ['GET /repos/{owner}/{repo}/issues/comments/{comment_id}'],
        getEvent: ['GET /repos/{owner}/{repo}/issues/events/{event_id}'],
        getLabel: ['GET /repos/{owner}/{repo}/labels/{name}'],
        getMilestone: [
          'GET /repos/{owner}/{repo}/milestones/{milestone_number}'
        ],
        list: ['GET /issues'],
        listAssignees: ['GET /repos/{owner}/{repo}/assignees'],
        listComments: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/comments'
        ],
        listCommentsForRepo: ['GET /repos/{owner}/{repo}/issues/comments'],
        listEvents: ['GET /repos/{owner}/{repo}/issues/{issue_number}/events'],
        listEventsForRepo: ['GET /repos/{owner}/{repo}/issues/events'],
        listEventsForTimeline: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline'
        ],
        listForAuthenticatedUser: ['GET /user/issues'],
        listForOrg: ['GET /orgs/{org}/issues'],
        listForRepo: ['GET /repos/{owner}/{repo}/issues'],
        listLabelsForMilestone: [
          'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels'
        ],
        listLabelsForRepo: ['GET /repos/{owner}/{repo}/labels'],
        listLabelsOnIssue: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/labels'
        ],
        listMilestones: ['GET /repos/{owner}/{repo}/milestones'],
        lock: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        removeAllLabels: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels'
        ],
        removeAssignees: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees'
        ],
        removeLabel: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}'
        ],
        setLabels: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        unlock: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        update: ['PATCH /repos/{owner}/{repo}/issues/{issue_number}'],
        updateComment: [
          'PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}'
        ],
        updateLabel: ['PATCH /repos/{owner}/{repo}/labels/{name}'],
        updateMilestone: [
          'PATCH /repos/{owner}/{repo}/milestones/{milestone_number}'
        ]
      },
      licenses: {
        get: ['GET /licenses/{license}'],
        getAllCommonlyUsed: ['GET /licenses'],
        getForRepo: ['GET /repos/{owner}/{repo}/license']
      },
      markdown: {
        render: ['POST /markdown'],
        renderRaw: [
          'POST /markdown/raw',
          {
            headers: {
              'content-type': 'text/plain; charset=utf-8'
            }
          }
        ]
      },
      meta: {
        get: ['GET /meta'],
        getOctocat: ['GET /octocat'],
        getZen: ['GET /zen'],
        root: ['GET /']
      },
      migrations: {
        cancelImport: ['DELETE /repos/{owner}/{repo}/import'],
        deleteArchiveForAuthenticatedUser: [
          'DELETE /user/migrations/{migration_id}/archive'
        ],
        deleteArchiveForOrg: [
          'DELETE /orgs/{org}/migrations/{migration_id}/archive'
        ],
        downloadArchiveForOrg: [
          'GET /orgs/{org}/migrations/{migration_id}/archive'
        ],
        getArchiveForAuthenticatedUser: [
          'GET /user/migrations/{migration_id}/archive'
        ],
        getCommitAuthors: ['GET /repos/{owner}/{repo}/import/authors'],
        getImportStatus: ['GET /repos/{owner}/{repo}/import'],
        getLargeFiles: ['GET /repos/{owner}/{repo}/import/large_files'],
        getStatusForAuthenticatedUser: ['GET /user/migrations/{migration_id}'],
        getStatusForOrg: ['GET /orgs/{org}/migrations/{migration_id}'],
        listForAuthenticatedUser: ['GET /user/migrations'],
        listForOrg: ['GET /orgs/{org}/migrations'],
        listReposForAuthenticatedUser: [
          'GET /user/migrations/{migration_id}/repositories'
        ],
        listReposForOrg: [
          'GET /orgs/{org}/migrations/{migration_id}/repositories'
        ],
        listReposForUser: [
          'GET /user/migrations/{migration_id}/repositories',
          {},
          {
            renamed: ['migrations', 'listReposForAuthenticatedUser']
          }
        ],
        mapCommitAuthor: [
          'PATCH /repos/{owner}/{repo}/import/authors/{author_id}'
        ],
        setLfsPreference: ['PATCH /repos/{owner}/{repo}/import/lfs'],
        startForAuthenticatedUser: ['POST /user/migrations'],
        startForOrg: ['POST /orgs/{org}/migrations'],
        startImport: ['PUT /repos/{owner}/{repo}/import'],
        unlockRepoForAuthenticatedUser: [
          'DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock'
        ],
        unlockRepoForOrg: [
          'DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock'
        ],
        updateImport: ['PATCH /repos/{owner}/{repo}/import']
      },
      orgs: {
        blockUser: ['PUT /orgs/{org}/blocks/{username}'],
        cancelInvitation: ['DELETE /orgs/{org}/invitations/{invitation_id}'],
        checkBlockedUser: ['GET /orgs/{org}/blocks/{username}'],
        checkMembershipForUser: ['GET /orgs/{org}/members/{username}'],
        checkPublicMembershipForUser: [
          'GET /orgs/{org}/public_members/{username}'
        ],
        convertMemberToOutsideCollaborator: [
          'PUT /orgs/{org}/outside_collaborators/{username}'
        ],
        createInvitation: ['POST /orgs/{org}/invitations'],
        createWebhook: ['POST /orgs/{org}/hooks'],
        deleteWebhook: ['DELETE /orgs/{org}/hooks/{hook_id}'],
        get: ['GET /orgs/{org}'],
        getMembershipForAuthenticatedUser: ['GET /user/memberships/orgs/{org}'],
        getMembershipForUser: ['GET /orgs/{org}/memberships/{username}'],
        getWebhook: ['GET /orgs/{org}/hooks/{hook_id}'],
        getWebhookConfigForOrg: ['GET /orgs/{org}/hooks/{hook_id}/config'],
        getWebhookDelivery: [
          'GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}'
        ],
        list: ['GET /organizations'],
        listAppInstallations: ['GET /orgs/{org}/installations'],
        listBlockedUsers: ['GET /orgs/{org}/blocks'],
        listFailedInvitations: ['GET /orgs/{org}/failed_invitations'],
        listForAuthenticatedUser: ['GET /user/orgs'],
        listForUser: ['GET /users/{username}/orgs'],
        listInvitationTeams: [
          'GET /orgs/{org}/invitations/{invitation_id}/teams'
        ],
        listMembers: ['GET /orgs/{org}/members'],
        listMembershipsForAuthenticatedUser: ['GET /user/memberships/orgs'],
        listOutsideCollaborators: ['GET /orgs/{org}/outside_collaborators'],
        listPendingInvitations: ['GET /orgs/{org}/invitations'],
        listPublicMembers: ['GET /orgs/{org}/public_members'],
        listWebhookDeliveries: ['GET /orgs/{org}/hooks/{hook_id}/deliveries'],
        listWebhooks: ['GET /orgs/{org}/hooks'],
        pingWebhook: ['POST /orgs/{org}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
        ],
        removeMember: ['DELETE /orgs/{org}/members/{username}'],
        removeMembershipForUser: ['DELETE /orgs/{org}/memberships/{username}'],
        removeOutsideCollaborator: [
          'DELETE /orgs/{org}/outside_collaborators/{username}'
        ],
        removePublicMembershipForAuthenticatedUser: [
          'DELETE /orgs/{org}/public_members/{username}'
        ],
        setMembershipForUser: ['PUT /orgs/{org}/memberships/{username}'],
        setPublicMembershipForAuthenticatedUser: [
          'PUT /orgs/{org}/public_members/{username}'
        ],
        unblockUser: ['DELETE /orgs/{org}/blocks/{username}'],
        update: ['PATCH /orgs/{org}'],
        updateMembershipForAuthenticatedUser: [
          'PATCH /user/memberships/orgs/{org}'
        ],
        updateWebhook: ['PATCH /orgs/{org}/hooks/{hook_id}'],
        updateWebhookConfigForOrg: ['PATCH /orgs/{org}/hooks/{hook_id}/config']
      },
      packages: {
        deletePackageForAuthenticatedUser: [
          'DELETE /user/packages/{package_type}/{package_name}'
        ],
        deletePackageForOrg: [
          'DELETE /orgs/{org}/packages/{package_type}/{package_name}'
        ],
        deletePackageForUser: [
          'DELETE /users/{username}/packages/{package_type}/{package_name}'
        ],
        deletePackageVersionForAuthenticatedUser: [
          'DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        deletePackageVersionForOrg: [
          'DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        deletePackageVersionForUser: [
          'DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getAllPackageVersionsForAPackageOwnedByAnOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
          {},
          {
            renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByOrg']
          }
        ],
        getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions',
          {},
          {
            renamed: [
              'packages',
              'getAllPackageVersionsForPackageOwnedByAuthenticatedUser'
            ]
          }
        ],
        getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions'
        ],
        getAllPackageVersionsForPackageOwnedByOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions'
        ],
        getAllPackageVersionsForPackageOwnedByUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions'
        ],
        getPackageForAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}'
        ],
        getPackageForOrganization: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}'
        ],
        getPackageForUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}'
        ],
        getPackageVersionForAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getPackageVersionForOrganization: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getPackageVersionForUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        listPackagesForAuthenticatedUser: ['GET /user/packages'],
        listPackagesForOrganization: ['GET /orgs/{org}/packages'],
        listPackagesForUser: ['GET /users/{username}/packages'],
        restorePackageForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageVersionForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ],
        restorePackageVersionForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ],
        restorePackageVersionForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ]
      },
      projects: {
        addCollaborator: [
          'PUT /projects/{project_id}/collaborators/{username}'
        ],
        createCard: ['POST /projects/columns/{column_id}/cards'],
        createColumn: ['POST /projects/{project_id}/columns'],
        createForAuthenticatedUser: ['POST /user/projects'],
        createForOrg: ['POST /orgs/{org}/projects'],
        createForRepo: ['POST /repos/{owner}/{repo}/projects'],
        delete: ['DELETE /projects/{project_id}'],
        deleteCard: ['DELETE /projects/columns/cards/{card_id}'],
        deleteColumn: ['DELETE /projects/columns/{column_id}'],
        get: ['GET /projects/{project_id}'],
        getCard: ['GET /projects/columns/cards/{card_id}'],
        getColumn: ['GET /projects/columns/{column_id}'],
        getPermissionForUser: [
          'GET /projects/{project_id}/collaborators/{username}/permission'
        ],
        listCards: ['GET /projects/columns/{column_id}/cards'],
        listCollaborators: ['GET /projects/{project_id}/collaborators'],
        listColumns: ['GET /projects/{project_id}/columns'],
        listForOrg: ['GET /orgs/{org}/projects'],
        listForRepo: ['GET /repos/{owner}/{repo}/projects'],
        listForUser: ['GET /users/{username}/projects'],
        moveCard: ['POST /projects/columns/cards/{card_id}/moves'],
        moveColumn: ['POST /projects/columns/{column_id}/moves'],
        removeCollaborator: [
          'DELETE /projects/{project_id}/collaborators/{username}'
        ],
        update: ['PATCH /projects/{project_id}'],
        updateCard: ['PATCH /projects/columns/cards/{card_id}'],
        updateColumn: ['PATCH /projects/columns/{column_id}']
      },
      pulls: {
        checkIfMerged: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        create: ['POST /repos/{owner}/{repo}/pulls'],
        createReplyForReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies'
        ],
        createReview: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews'
        ],
        createReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments'
        ],
        deletePendingReview: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        deleteReviewComment: [
          'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ],
        dismissReview: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals'
        ],
        get: ['GET /repos/{owner}/{repo}/pulls/{pull_number}'],
        getReview: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        getReviewComment: [
          'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ],
        list: ['GET /repos/{owner}/{repo}/pulls'],
        listCommentsForReview: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments'
        ],
        listCommits: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/commits'],
        listFiles: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/files'],
        listRequestedReviewers: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        listReviewComments: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments'
        ],
        listReviewCommentsForRepo: ['GET /repos/{owner}/{repo}/pulls/comments'],
        listReviews: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews'],
        merge: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        removeRequestedReviewers: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        requestReviewers: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        submitReview: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events'
        ],
        update: ['PATCH /repos/{owner}/{repo}/pulls/{pull_number}'],
        updateBranch: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch'
        ],
        updateReview: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        updateReviewComment: [
          'PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ]
      },
      rateLimit: {
        get: ['GET /rate_limit']
      },
      reactions: {
        createForCommitComment: [
          'POST /repos/{owner}/{repo}/comments/{comment_id}/reactions'
        ],
        createForIssue: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/reactions'
        ],
        createForIssueComment: [
          'POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'
        ],
        createForPullRequestReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions'
        ],
        createForRelease: [
          'POST /repos/{owner}/{repo}/releases/{release_id}/reactions'
        ],
        createForTeamDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions'
        ],
        createForTeamDiscussionInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions'
        ],
        deleteForCommitComment: [
          'DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForIssue: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}'
        ],
        deleteForIssueComment: [
          'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForPullRequestComment: [
          'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForTeamDiscussion: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}'
        ],
        deleteForTeamDiscussionComment: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}'
        ],
        listForCommitComment: [
          'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions'
        ],
        listForIssue: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions'
        ],
        listForIssueComment: [
          'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'
        ],
        listForPullRequestReviewComment: [
          'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions'
        ],
        listForTeamDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions'
        ],
        listForTeamDiscussionInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions'
        ]
      },
      repos: {
        acceptInvitation: [
          'PATCH /user/repository_invitations/{invitation_id}',
          {},
          {
            renamed: ['repos', 'acceptInvitationForAuthenticatedUser']
          }
        ],
        acceptInvitationForAuthenticatedUser: [
          'PATCH /user/repository_invitations/{invitation_id}'
        ],
        addAppAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        addCollaborator: ['PUT /repos/{owner}/{repo}/collaborators/{username}'],
        addStatusCheckContexts: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        addTeamAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        addUserAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        checkCollaborator: [
          'GET /repos/{owner}/{repo}/collaborators/{username}'
        ],
        checkVulnerabilityAlerts: [
          'GET /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        compareCommits: ['GET /repos/{owner}/{repo}/compare/{base}...{head}'],
        compareCommitsWithBasehead: [
          'GET /repos/{owner}/{repo}/compare/{basehead}'
        ],
        createAutolink: ['POST /repos/{owner}/{repo}/autolinks'],
        createCommitComment: [
          'POST /repos/{owner}/{repo}/commits/{commit_sha}/comments'
        ],
        createCommitSignatureProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        createCommitStatus: ['POST /repos/{owner}/{repo}/statuses/{sha}'],
        createDeployKey: ['POST /repos/{owner}/{repo}/keys'],
        createDeployment: ['POST /repos/{owner}/{repo}/deployments'],
        createDeploymentStatus: [
          'POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
        ],
        createDispatchEvent: ['POST /repos/{owner}/{repo}/dispatches'],
        createForAuthenticatedUser: ['POST /user/repos'],
        createFork: ['POST /repos/{owner}/{repo}/forks'],
        createInOrg: ['POST /orgs/{org}/repos'],
        createOrUpdateEnvironment: [
          'PUT /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        createOrUpdateFileContents: [
          'PUT /repos/{owner}/{repo}/contents/{path}'
        ],
        createPagesSite: ['POST /repos/{owner}/{repo}/pages'],
        createRelease: ['POST /repos/{owner}/{repo}/releases'],
        createUsingTemplate: [
          'POST /repos/{template_owner}/{template_repo}/generate'
        ],
        createWebhook: ['POST /repos/{owner}/{repo}/hooks'],
        declineInvitation: [
          'DELETE /user/repository_invitations/{invitation_id}',
          {},
          {
            renamed: ['repos', 'declineInvitationForAuthenticatedUser']
          }
        ],
        declineInvitationForAuthenticatedUser: [
          'DELETE /user/repository_invitations/{invitation_id}'
        ],
        delete: ['DELETE /repos/{owner}/{repo}'],
        deleteAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
        ],
        deleteAdminBranchProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        deleteAnEnvironment: [
          'DELETE /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        deleteAutolink: [
          'DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}'
        ],
        deleteBranchProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        deleteCommitComment: [
          'DELETE /repos/{owner}/{repo}/comments/{comment_id}'
        ],
        deleteCommitSignatureProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        deleteDeployKey: ['DELETE /repos/{owner}/{repo}/keys/{key_id}'],
        deleteDeployment: [
          'DELETE /repos/{owner}/{repo}/deployments/{deployment_id}'
        ],
        deleteFile: ['DELETE /repos/{owner}/{repo}/contents/{path}'],
        deleteInvitation: [
          'DELETE /repos/{owner}/{repo}/invitations/{invitation_id}'
        ],
        deletePagesSite: ['DELETE /repos/{owner}/{repo}/pages'],
        deletePullRequestReviewProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        deleteRelease: ['DELETE /repos/{owner}/{repo}/releases/{release_id}'],
        deleteReleaseAsset: [
          'DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        deleteWebhook: ['DELETE /repos/{owner}/{repo}/hooks/{hook_id}'],
        disableAutomatedSecurityFixes: [
          'DELETE /repos/{owner}/{repo}/automated-security-fixes'
        ],
        disableLfsForRepo: ['DELETE /repos/{owner}/{repo}/lfs'],
        disableVulnerabilityAlerts: [
          'DELETE /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        downloadArchive: [
          'GET /repos/{owner}/{repo}/zipball/{ref}',
          {},
          {
            renamed: ['repos', 'downloadZipballArchive']
          }
        ],
        downloadTarballArchive: ['GET /repos/{owner}/{repo}/tarball/{ref}'],
        downloadZipballArchive: ['GET /repos/{owner}/{repo}/zipball/{ref}'],
        enableAutomatedSecurityFixes: [
          'PUT /repos/{owner}/{repo}/automated-security-fixes'
        ],
        enableLfsForRepo: ['PUT /repos/{owner}/{repo}/lfs'],
        enableVulnerabilityAlerts: [
          'PUT /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        generateReleaseNotes: [
          'POST /repos/{owner}/{repo}/releases/generate-notes'
        ],
        get: ['GET /repos/{owner}/{repo}'],
        getAccessRestrictions: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
        ],
        getAdminBranchProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        getAllEnvironments: ['GET /repos/{owner}/{repo}/environments'],
        getAllStatusCheckContexts: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts'
        ],
        getAllTopics: [
          'GET /repos/{owner}/{repo}/topics',
          {
            mediaType: {
              previews: ['mercy']
            }
          }
        ],
        getAppsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps'
        ],
        getAutolink: ['GET /repos/{owner}/{repo}/autolinks/{autolink_id}'],
        getBranch: ['GET /repos/{owner}/{repo}/branches/{branch}'],
        getBranchProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        getClones: ['GET /repos/{owner}/{repo}/traffic/clones'],
        getCodeFrequencyStats: [
          'GET /repos/{owner}/{repo}/stats/code_frequency'
        ],
        getCollaboratorPermissionLevel: [
          'GET /repos/{owner}/{repo}/collaborators/{username}/permission'
        ],
        getCombinedStatusForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/status'
        ],
        getCommit: ['GET /repos/{owner}/{repo}/commits/{ref}'],
        getCommitActivityStats: [
          'GET /repos/{owner}/{repo}/stats/commit_activity'
        ],
        getCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}'],
        getCommitSignatureProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        getCommunityProfileMetrics: [
          'GET /repos/{owner}/{repo}/community/profile'
        ],
        getContent: ['GET /repos/{owner}/{repo}/contents/{path}'],
        getContributorsStats: ['GET /repos/{owner}/{repo}/stats/contributors'],
        getDeployKey: ['GET /repos/{owner}/{repo}/keys/{key_id}'],
        getDeployment: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}'
        ],
        getDeploymentStatus: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}'
        ],
        getEnvironment: [
          'GET /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        getLatestPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/latest'],
        getLatestRelease: ['GET /repos/{owner}/{repo}/releases/latest'],
        getPages: ['GET /repos/{owner}/{repo}/pages'],
        getPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/{build_id}'],
        getPagesHealthCheck: ['GET /repos/{owner}/{repo}/pages/health'],
        getParticipationStats: [
          'GET /repos/{owner}/{repo}/stats/participation'
        ],
        getPullRequestReviewProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        getPunchCardStats: ['GET /repos/{owner}/{repo}/stats/punch_card'],
        getReadme: ['GET /repos/{owner}/{repo}/readme'],
        getReadmeInDirectory: ['GET /repos/{owner}/{repo}/readme/{dir}'],
        getRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}'],
        getReleaseAsset: [
          'GET /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        getReleaseByTag: ['GET /repos/{owner}/{repo}/releases/tags/{tag}'],
        getStatusChecksProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        getTeamsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams'
        ],
        getTopPaths: ['GET /repos/{owner}/{repo}/traffic/popular/paths'],
        getTopReferrers: [
          'GET /repos/{owner}/{repo}/traffic/popular/referrers'
        ],
        getUsersWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users'
        ],
        getViews: ['GET /repos/{owner}/{repo}/traffic/views'],
        getWebhook: ['GET /repos/{owner}/{repo}/hooks/{hook_id}'],
        getWebhookConfigForRepo: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/config'
        ],
        getWebhookDelivery: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}'
        ],
        listAutolinks: ['GET /repos/{owner}/{repo}/autolinks'],
        listBranches: ['GET /repos/{owner}/{repo}/branches'],
        listBranchesForHeadCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head'
        ],
        listCollaborators: ['GET /repos/{owner}/{repo}/collaborators'],
        listCommentsForCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments'
        ],
        listCommitCommentsForRepo: ['GET /repos/{owner}/{repo}/comments'],
        listCommitStatusesForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/statuses'
        ],
        listCommits: ['GET /repos/{owner}/{repo}/commits'],
        listContributors: ['GET /repos/{owner}/{repo}/contributors'],
        listDeployKeys: ['GET /repos/{owner}/{repo}/keys'],
        listDeploymentStatuses: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
        ],
        listDeployments: ['GET /repos/{owner}/{repo}/deployments'],
        listForAuthenticatedUser: ['GET /user/repos'],
        listForOrg: ['GET /orgs/{org}/repos'],
        listForUser: ['GET /users/{username}/repos'],
        listForks: ['GET /repos/{owner}/{repo}/forks'],
        listInvitations: ['GET /repos/{owner}/{repo}/invitations'],
        listInvitationsForAuthenticatedUser: [
          'GET /user/repository_invitations'
        ],
        listLanguages: ['GET /repos/{owner}/{repo}/languages'],
        listPagesBuilds: ['GET /repos/{owner}/{repo}/pages/builds'],
        listPublic: ['GET /repositories'],
        listPullRequestsAssociatedWithCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls'
        ],
        listReleaseAssets: [
          'GET /repos/{owner}/{repo}/releases/{release_id}/assets'
        ],
        listReleases: ['GET /repos/{owner}/{repo}/releases'],
        listTags: ['GET /repos/{owner}/{repo}/tags'],
        listTeams: ['GET /repos/{owner}/{repo}/teams'],
        listWebhookDeliveries: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries'
        ],
        listWebhooks: ['GET /repos/{owner}/{repo}/hooks'],
        merge: ['POST /repos/{owner}/{repo}/merges'],
        mergeUpstream: ['POST /repos/{owner}/{repo}/merge-upstream'],
        pingWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
        ],
        removeAppAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        removeCollaborator: [
          'DELETE /repos/{owner}/{repo}/collaborators/{username}'
        ],
        removeStatusCheckContexts: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        removeStatusCheckProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        removeTeamAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        removeUserAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        renameBranch: ['POST /repos/{owner}/{repo}/branches/{branch}/rename'],
        replaceAllTopics: [
          'PUT /repos/{owner}/{repo}/topics',
          {
            mediaType: {
              previews: ['mercy']
            }
          }
        ],
        requestPagesBuild: ['POST /repos/{owner}/{repo}/pages/builds'],
        setAdminBranchProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        setAppAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        setStatusCheckContexts: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        setTeamAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        setUserAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        testPushWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/tests'],
        transfer: ['POST /repos/{owner}/{repo}/transfer'],
        update: ['PATCH /repos/{owner}/{repo}'],
        updateBranchProtection: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        updateCommitComment: [
          'PATCH /repos/{owner}/{repo}/comments/{comment_id}'
        ],
        updateInformationAboutPagesSite: ['PUT /repos/{owner}/{repo}/pages'],
        updateInvitation: [
          'PATCH /repos/{owner}/{repo}/invitations/{invitation_id}'
        ],
        updatePullRequestReviewProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        updateRelease: ['PATCH /repos/{owner}/{repo}/releases/{release_id}'],
        updateReleaseAsset: [
          'PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        updateStatusCheckPotection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
          {},
          {
            renamed: ['repos', 'updateStatusCheckProtection']
          }
        ],
        updateStatusCheckProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        updateWebhook: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}'],
        updateWebhookConfigForRepo: [
          'PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config'
        ],
        uploadReleaseAsset: [
          'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}',
          {
            baseUrl: 'https://uploads.github.com'
          }
        ]
      },
      search: {
        code: ['GET /search/code'],
        commits: ['GET /search/commits'],
        issuesAndPullRequests: ['GET /search/issues'],
        labels: ['GET /search/labels'],
        repos: ['GET /search/repositories'],
        topics: [
          'GET /search/topics',
          {
            mediaType: {
              previews: ['mercy']
            }
          }
        ],
        users: ['GET /search/users']
      },
      secretScanning: {
        getAlert: [
          'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
        ],
        listAlertsForOrg: ['GET /orgs/{org}/secret-scanning/alerts'],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/secret-scanning/alerts'],
        updateAlert: [
          'PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
        ]
      },
      teams: {
        addOrUpdateMembershipForUserInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        addOrUpdateProjectPermissionsInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        addOrUpdateRepoPermissionsInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        checkPermissionsForProjectInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        checkPermissionsForRepoInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        create: ['POST /orgs/{org}/teams'],
        createDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
        ],
        createDiscussionInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions'
        ],
        deleteDiscussionCommentInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        deleteDiscussionInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        deleteInOrg: ['DELETE /orgs/{org}/teams/{team_slug}'],
        getByName: ['GET /orgs/{org}/teams/{team_slug}'],
        getDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        getDiscussionInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        getMembershipForUserInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        list: ['GET /orgs/{org}/teams'],
        listChildInOrg: ['GET /orgs/{org}/teams/{team_slug}/teams'],
        listDiscussionCommentsInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
        ],
        listDiscussionsInOrg: ['GET /orgs/{org}/teams/{team_slug}/discussions'],
        listForAuthenticatedUser: ['GET /user/teams'],
        listMembersInOrg: ['GET /orgs/{org}/teams/{team_slug}/members'],
        listPendingInvitationsInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/invitations'
        ],
        listProjectsInOrg: ['GET /orgs/{org}/teams/{team_slug}/projects'],
        listReposInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos'],
        removeMembershipForUserInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        removeProjectInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        removeRepoInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        updateDiscussionCommentInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        updateDiscussionInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        updateInOrg: ['PATCH /orgs/{org}/teams/{team_slug}']
      },
      users: {
        addEmailForAuthenticated: [
          'POST /user/emails',
          {},
          {
            renamed: ['users', 'addEmailForAuthenticatedUser']
          }
        ],
        addEmailForAuthenticatedUser: ['POST /user/emails'],
        block: ['PUT /user/blocks/{username}'],
        checkBlocked: ['GET /user/blocks/{username}'],
        checkFollowingForUser: [
          'GET /users/{username}/following/{target_user}'
        ],
        checkPersonIsFollowedByAuthenticated: [
          'GET /user/following/{username}'
        ],
        createGpgKeyForAuthenticated: [
          'POST /user/gpg_keys',
          {},
          {
            renamed: ['users', 'createGpgKeyForAuthenticatedUser']
          }
        ],
        createGpgKeyForAuthenticatedUser: ['POST /user/gpg_keys'],
        createPublicSshKeyForAuthenticated: [
          'POST /user/keys',
          {},
          {
            renamed: ['users', 'createPublicSshKeyForAuthenticatedUser']
          }
        ],
        createPublicSshKeyForAuthenticatedUser: ['POST /user/keys'],
        deleteEmailForAuthenticated: [
          'DELETE /user/emails',
          {},
          {
            renamed: ['users', 'deleteEmailForAuthenticatedUser']
          }
        ],
        deleteEmailForAuthenticatedUser: ['DELETE /user/emails'],
        deleteGpgKeyForAuthenticated: [
          'DELETE /user/gpg_keys/{gpg_key_id}',
          {},
          {
            renamed: ['users', 'deleteGpgKeyForAuthenticatedUser']
          }
        ],
        deleteGpgKeyForAuthenticatedUser: [
          'DELETE /user/gpg_keys/{gpg_key_id}'
        ],
        deletePublicSshKeyForAuthenticated: [
          'DELETE /user/keys/{key_id}',
          {},
          {
            renamed: ['users', 'deletePublicSshKeyForAuthenticatedUser']
          }
        ],
        deletePublicSshKeyForAuthenticatedUser: ['DELETE /user/keys/{key_id}'],
        follow: ['PUT /user/following/{username}'],
        getAuthenticated: ['GET /user'],
        getByUsername: ['GET /users/{username}'],
        getContextForUser: ['GET /users/{username}/hovercard'],
        getGpgKeyForAuthenticated: [
          'GET /user/gpg_keys/{gpg_key_id}',
          {},
          {
            renamed: ['users', 'getGpgKeyForAuthenticatedUser']
          }
        ],
        getGpgKeyForAuthenticatedUser: ['GET /user/gpg_keys/{gpg_key_id}'],
        getPublicSshKeyForAuthenticated: [
          'GET /user/keys/{key_id}',
          {},
          {
            renamed: ['users', 'getPublicSshKeyForAuthenticatedUser']
          }
        ],
        getPublicSshKeyForAuthenticatedUser: ['GET /user/keys/{key_id}'],
        list: ['GET /users'],
        listBlockedByAuthenticated: [
          'GET /user/blocks',
          {},
          {
            renamed: ['users', 'listBlockedByAuthenticatedUser']
          }
        ],
        listBlockedByAuthenticatedUser: ['GET /user/blocks'],
        listEmailsForAuthenticated: [
          'GET /user/emails',
          {},
          {
            renamed: ['users', 'listEmailsForAuthenticatedUser']
          }
        ],
        listEmailsForAuthenticatedUser: ['GET /user/emails'],
        listFollowedByAuthenticated: [
          'GET /user/following',
          {},
          {
            renamed: ['users', 'listFollowedByAuthenticatedUser']
          }
        ],
        listFollowedByAuthenticatedUser: ['GET /user/following'],
        listFollowersForAuthenticatedUser: ['GET /user/followers'],
        listFollowersForUser: ['GET /users/{username}/followers'],
        listFollowingForUser: ['GET /users/{username}/following'],
        listGpgKeysForAuthenticated: [
          'GET /user/gpg_keys',
          {},
          {
            renamed: ['users', 'listGpgKeysForAuthenticatedUser']
          }
        ],
        listGpgKeysForAuthenticatedUser: ['GET /user/gpg_keys'],
        listGpgKeysForUser: ['GET /users/{username}/gpg_keys'],
        listPublicEmailsForAuthenticated: [
          'GET /user/public_emails',
          {},
          {
            renamed: ['users', 'listPublicEmailsForAuthenticatedUser']
          }
        ],
        listPublicEmailsForAuthenticatedUser: ['GET /user/public_emails'],
        listPublicKeysForUser: ['GET /users/{username}/keys'],
        listPublicSshKeysForAuthenticated: [
          'GET /user/keys',
          {},
          {
            renamed: ['users', 'listPublicSshKeysForAuthenticatedUser']
          }
        ],
        listPublicSshKeysForAuthenticatedUser: ['GET /user/keys'],
        setPrimaryEmailVisibilityForAuthenticated: [
          'PATCH /user/email/visibility',
          {},
          {
            renamed: ['users', 'setPrimaryEmailVisibilityForAuthenticatedUser']
          }
        ],
        setPrimaryEmailVisibilityForAuthenticatedUser: [
          'PATCH /user/email/visibility'
        ],
        unblock: ['DELETE /user/blocks/{username}'],
        unfollow: ['DELETE /user/following/{username}'],
        updateAuthenticated: ['PATCH /user']
      }
    }

    const VERSION = '5.13.0'

    function endpointsToMethods(octokit, endpointsMap) {
      const newMethods = {}

      for (const [scope, endpoints] of Object.entries(endpointsMap)) {
        for (const [methodName, endpoint] of Object.entries(endpoints)) {
          const [route, defaults, decorations] = endpoint
          const [method, url] = route.split(/ /)
          const endpointDefaults = Object.assign(
            {
              method,
              url
            },
            defaults
          )

          if (!newMethods[scope]) {
            newMethods[scope] = {}
          }

          const scopeMethods = newMethods[scope]

          if (decorations) {
            scopeMethods[methodName] = decorate(
              octokit,
              scope,
              methodName,
              endpointDefaults,
              decorations
            )
            continue
          }

          scopeMethods[methodName] = octokit.request.defaults(endpointDefaults)
        }
      }

      return newMethods
    }

    function decorate(octokit, scope, methodName, defaults, decorations) {
      const requestWithDefaults = octokit.request.defaults(defaults)
      /* istanbul ignore next */

      function withDecorations(...args) {
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        let options = requestWithDefaults.endpoint.merge(...args) // There are currently no other decorations than `.mapToData`

        if (decorations.mapToData) {
          options = Object.assign({}, options, {
            data: options[decorations.mapToData],
            [decorations.mapToData]: undefined
          })
          return requestWithDefaults(options)
        }

        if (decorations.renamed) {
          const [newScope, newMethodName] = decorations.renamed
          octokit.log.warn(
            `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`
          )
        }

        if (decorations.deprecated) {
          octokit.log.warn(decorations.deprecated)
        }

        if (decorations.renamedParameters) {
          // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
          const options = requestWithDefaults.endpoint.merge(...args)

          for (const [name, alias] of Object.entries(
            decorations.renamedParameters
          )) {
            if (name in options) {
              octokit.log.warn(
                `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
              )

              if (!(alias in options)) {
                options[alias] = options[name]
              }

              delete options[name]
            }
          }

          return requestWithDefaults(options)
        } // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488

        return requestWithDefaults(...args)
      }

      return Object.assign(withDecorations, requestWithDefaults)
    }

    function restEndpointMethods(octokit) {
      const api = endpointsToMethods(octokit, Endpoints)
      return {
        rest: api
      }
    }
    restEndpointMethods.VERSION = VERSION
    function legacyRestEndpointMethods(octokit) {
      const api = endpointsToMethods(octokit, Endpoints)
      return _objectSpread2(
        _objectSpread2({}, api),
        {},
        {
          rest: api
        }
      )
    }
    legacyRestEndpointMethods.VERSION = VERSION

    exports.legacyRestEndpointMethods = legacyRestEndpointMethods
    exports.restEndpointMethods = restEndpointMethods
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 537: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var deprecation = __nccwpck_require__(8932)
    var once = _interopDefault(__nccwpck_require__(1223))

    const logOnceCode = once((deprecation) => console.warn(deprecation))
    const logOnceHeaders = once((deprecation) => console.warn(deprecation))
    /**
     * Error with extra properties to help with debugging
     */

    class RequestError extends Error {
      constructor(message, statusCode, options) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'HttpError'
        this.status = statusCode
        let headers

        if ('headers' in options && typeof options.headers !== 'undefined') {
          headers = options.headers
        }

        if ('response' in options) {
          this.response = options.response
          headers = options.response.headers
        } // redact request credentials without mutating original request options

        const requestCopy = Object.assign({}, options.request)

        if (options.request.headers.authorization) {
          requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(
              / .*$/,
              ' [REDACTED]'
            )
          })
        }

        requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
          // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
          // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = requestCopy // deprecations

        Object.defineProperty(this, 'code', {
          get() {
            logOnceCode(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return statusCode
          }
        })
        Object.defineProperty(this, 'headers', {
          get() {
            logOnceHeaders(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.'
              )
            )
            return headers || {}
          }
        })
      }
    }

    exports.RequestError = RequestError
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6234: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var endpoint = __nccwpck_require__(9440)
    var universalUserAgent = __nccwpck_require__(5030)
    var isPlainObject = __nccwpck_require__(3287)
    var nodeFetch = _interopDefault(__nccwpck_require__(467))
    var requestError = __nccwpck_require__(537)

    const VERSION = '5.6.3'

    function getBufferResponse(response) {
      return response.arrayBuffer()
    }

    function fetchWrapper(requestOptions) {
      const log =
        requestOptions.request && requestOptions.request.log
          ? requestOptions.request.log
          : console

      if (
        isPlainObject.isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)
      ) {
        requestOptions.body = JSON.stringify(requestOptions.body)
      }

      let headers = {}
      let status
      let url
      const fetch =
        (requestOptions.request && requestOptions.request.fetch) || nodeFetch
      return fetch(
        requestOptions.url,
        Object.assign(
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect
          }, // `requestOptions.request.agent` type is incompatible
          // see https://github.com/octokit/types.ts/pull/264
          requestOptions.request
        )
      )
        .then(async (response) => {
          url = response.url
          status = response.status

          for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1]
          }

          if ('deprecation' in headers) {
            const matches =
              headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/)
            const deprecationLink = matches && matches.pop()
            log.warn(
              `[@octokit/request] "${requestOptions.method} ${
                requestOptions.url
              }" is deprecated. It is scheduled to be removed on ${
                headers.sunset
              }${deprecationLink ? `. See ${deprecationLink}` : ''}`
            )
          }

          if (status === 204 || status === 205) {
            return
          } // GitHub API returns 200 for HEAD requests

          if (requestOptions.method === 'HEAD') {
            if (status < 400) {
              return
            }

            throw new requestError.RequestError(response.statusText, status, {
              response: {
                url,
                status,
                headers,
                data: undefined
              },
              request: requestOptions
            })
          }

          if (status === 304) {
            throw new requestError.RequestError('Not modified', status, {
              response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
              },
              request: requestOptions
            })
          }

          if (status >= 400) {
            const data = await getResponseData(response)
            const error = new requestError.RequestError(
              toErrorMessage(data),
              status,
              {
                response: {
                  url,
                  status,
                  headers,
                  data
                },
                request: requestOptions
              }
            )
            throw error
          }

          return getResponseData(response)
        })
        .then((data) => {
          return {
            status,
            url,
            headers,
            data
          }
        })
        .catch((error) => {
          if (error instanceof requestError.RequestError) throw error
          throw new requestError.RequestError(error.message, 500, {
            request: requestOptions
          })
        })
    }

    async function getResponseData(response) {
      const contentType = response.headers.get('content-type')

      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBufferResponse(response)
    }

    function toErrorMessage(data) {
      if (typeof data === 'string') return data // istanbul ignore else - just in case

      if ('message' in data) {
        if (Array.isArray(data.errors)) {
          return `${data.message}: ${data.errors
            .map(JSON.stringify)
            .join(', ')}`
        }

        return data.message
      } // istanbul ignore next - just in case

      return `Unknown error: ${JSON.stringify(data)}`
    }

    function withDefaults(oldEndpoint, newDefaults) {
      const endpoint = oldEndpoint.defaults(newDefaults)

      const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters)

        if (!endpointOptions.request || !endpointOptions.request.hook) {
          return fetchWrapper(endpoint.parse(endpointOptions))
        }

        const request = (route, parameters) => {
          return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)))
        }

        Object.assign(request, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
        return endpointOptions.request.hook(request, endpointOptions)
      }

      return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
      })
    }

    const request = withDefaults(endpoint.endpoint, {
      headers: {
        'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      }
    })

    exports.request = request
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 3682: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var register = __nccwpck_require__(4670)
    var addHook = __nccwpck_require__(5549)
    var removeHook = __nccwpck_require__(6819)

    // bind with array of arguments: https://stackoverflow.com/a/21792913
    var bind = Function.bind
    var bindable = bind.bind(bind)

    function bindApi(hook, state, name) {
      var removeHookRef = bindable(removeHook, null).apply(
        null,
        name ? [state, name] : [state]
      )
      hook.api = { remove: removeHookRef }
      hook.remove = removeHookRef
      ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
        var args = name ? [state, kind, name] : [state, kind]
        hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
      })
    }

    function HookSingular() {
      var singularHookName = 'h'
      var singularHookState = {
        registry: {}
      }
      var singularHook = register.bind(
        null,
        singularHookState,
        singularHookName
      )
      bindApi(singularHook, singularHookState, singularHookName)
      return singularHook
    }

    function HookCollection() {
      var state = {
        registry: {}
      }

      var hook = register.bind(null, state)
      bindApi(hook, state)

      return hook
    }

    var collectionHookDeprecationMessageDisplayed = false
    function Hook() {
      if (!collectionHookDeprecationMessageDisplayed) {
        console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
        )
        collectionHookDeprecationMessageDisplayed = true
      }
      return HookCollection()
    }

    Hook.Singular = HookSingular.bind()
    Hook.Collection = HookCollection.bind()

    module.exports = Hook
    // expose constructors as a named property for TypeScript
    module.exports.Hook = Hook
    module.exports.Singular = Hook.Singular
    module.exports.Collection = Hook.Collection

    /***/
  },

  /***/ 5549: /***/ (module) => {
    module.exports = addHook

    function addHook(state, kind, name, hook) {
      var orig = hook
      if (!state.registry[name]) {
        state.registry[name] = []
      }

      if (kind === 'before') {
        hook = function (method, options) {
          return Promise.resolve()
            .then(orig.bind(null, options))
            .then(method.bind(null, options))
        }
      }

      if (kind === 'after') {
        hook = function (method, options) {
          var result
          return Promise.resolve()
            .then(method.bind(null, options))
            .then(function (result_) {
              result = result_
              return orig(result, options)
            })
            .then(function () {
              return result
            })
        }
      }

      if (kind === 'error') {
        hook = function (method, options) {
          return Promise.resolve()
            .then(method.bind(null, options))
            .catch(function (error) {
              return orig(error, options)
            })
        }
      }

      state.registry[name].push({
        hook: hook,
        orig: orig
      })
    }

    /***/
  },

  /***/ 4670: /***/ (module) => {
    module.exports = register

    function register(state, name, method, options) {
      if (typeof method !== 'function') {
        throw new Error('method for before hook must be a function')
      }

      if (!options) {
        options = {}
      }

      if (Array.isArray(name)) {
        return name.reverse().reduce(function (callback, name) {
          return register.bind(null, state, name, callback, options)
        }, method)()
      }

      return Promise.resolve().then(function () {
        if (!state.registry[name]) {
          return method(options)
        }

        return state.registry[name].reduce(function (method, registered) {
          return registered.hook.bind(null, method, options)
        }, method)()
      })
    }

    /***/
  },

  /***/ 6819: /***/ (module) => {
    module.exports = removeHook

    function removeHook(state, name, method) {
      if (!state.registry[name]) {
        return
      }

      var index = state.registry[name]
        .map(function (registered) {
          return registered.orig
        })
        .indexOf(method)

      if (index === -1) {
        return
      }

      state.registry[name].splice(index, 1)
    }

    /***/
  },

  /***/ 8932: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    class Deprecation extends Error {
      constructor(message) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'Deprecation'
      }
    }

    exports.Deprecation = Deprecation

    /***/
  },

  /***/ 7512: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isObject = __nccwpck_require__(429)

    module.exports = function extend(o /*, objects*/) {
      if (!isObject(o)) {
        o = {}
      }

      var len = arguments.length
      for (var i = 1; i < len; i++) {
        var obj = arguments[i]

        if (isObject(obj)) {
          assign(o, obj)
        }
      }
      return o
    }

    function assign(a, b) {
      for (var key in b) {
        if (hasOwn(b, key)) {
          a[key] = b[key]
        }
      }
    }

    /**
     * Returns true if the given `key` is an own property of `obj`.
     */

    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key)
    }

    /***/
  },

  /***/ 5382: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const fs = __nccwpck_require__(7147)
    const sections = __nccwpck_require__(1762)
    const defaults = __nccwpck_require__(5256)
    const stringify = __nccwpck_require__(905)
    const excerpt = __nccwpck_require__(3919)
    const engines = __nccwpck_require__(3190)
    const toFile = __nccwpck_require__(9652)
    const parse = __nccwpck_require__(9368)
    const utils = __nccwpck_require__(7405)

    /**
     * Takes a string or object with `content` property, extracts
     * and parses front-matter from the string, then returns an object
     * with `data`, `content` and other [useful properties](#returned-object).
     *
     * ```js
     * const matter = require('gray-matter');
     * console.log(matter('---\ntitle: Home\n---\nOther stuff'));
     * //=> { data: { title: 'Home'}, content: 'Other stuff' }
     * ```
     * @param {Object|String} `input` String, or object with `content` string
     * @param {Object} `options`
     * @return {Object}
     * @api public
     */

    function matter(input, options) {
      if (input === '') {
        return { data: {}, content: input, excerpt: '', orig: input }
      }

      let file = toFile(input)
      const cached = matter.cache[file.content]

      if (!options) {
        if (cached) {
          file = Object.assign({}, cached)
          file.orig = cached.orig
          return file
        }

        // only cache if there are no options passed. if we cache when options
        // are passed, we would need to also cache options values, which would
        // negate any performance benefits of caching
        matter.cache[file.content] = file
      }

      return parseMatter(file, options)
    }

    /**
     * Parse front matter
     */

    function parseMatter(file, options) {
      const opts = defaults(options)
      const open = opts.delimiters[0]
      const close = '\n' + opts.delimiters[1]
      let str = file.content

      if (opts.language) {
        file.language = opts.language
      }

      // get the length of the opening delimiter
      const openLen = open.length
      if (!utils.startsWith(str, open, openLen)) {
        excerpt(file, opts)
        return file
      }

      // if the next character after the opening delimiter is
      // a character from the delimiter, then it's not a front-
      // matter delimiter
      if (str.charAt(openLen) === open.slice(-1)) {
        return file
      }

      // strip the opening delimiter
      str = str.slice(openLen)
      const len = str.length

      // use the language defined after first delimiter, if it exists
      const language = matter.language(str, opts)
      if (language.name) {
        file.language = language.name
        str = str.slice(language.raw.length)
      }

      // get the index of the closing delimiter
      let closeIndex = str.indexOf(close)
      if (closeIndex === -1) {
        closeIndex = len
      }

      // get the raw front-matter block
      file.matter = str.slice(0, closeIndex)

      const block = file.matter.replace(/^\s*#[^\n]+/gm, '').trim()
      if (block === '') {
        file.isEmpty = true
        file.empty = file.content
        file.data = {}
      } else {
        // create file.data by parsing the raw file.matter block
        file.data = parse(file.language, file.matter, opts)
      }

      // update file.content
      if (closeIndex === len) {
        file.content = ''
      } else {
        file.content = str.slice(closeIndex + close.length)
        if (file.content[0] === '\r') {
          file.content = file.content.slice(1)
        }
        if (file.content[0] === '\n') {
          file.content = file.content.slice(1)
        }
      }

      excerpt(file, opts)

      if (opts.sections === true || typeof opts.section === 'function') {
        sections(file, opts.section)
      }
      return file
    }

    /**
     * Expose engines
     */

    matter.engines = engines

    /**
     * Stringify an object to YAML or the specified language, and
     * append it to the given string. By default, only YAML and JSON
     * can be stringified. See the [engines](#engines) section to learn
     * how to stringify other languages.
     *
     * ```js
     * console.log(matter.stringify('foo bar baz', {title: 'Home'}));
     * // results in:
     * // ---
     * // title: Home
     * // ---
     * // foo bar baz
     * ```
     * @param {String|Object} `file` The content string to append to stringified front-matter, or a file object with `file.content` string.
     * @param {Object} `data` Front matter to stringify.
     * @param {Object} `options` [Options](#options) to pass to gray-matter and [js-yaml].
     * @return {String} Returns a string created by wrapping stringified yaml with delimiters, and appending that to the given string.
     * @api public
     */

    matter.stringify = function (file, data, options) {
      if (typeof file === 'string') file = matter(file, options)
      return stringify(file, data, options)
    }

    /**
     * Synchronously read a file from the file system and parse
     * front matter. Returns the same object as the [main function](#matter).
     *
     * ```js
     * const file = matter.read('./content/blog-post.md');
     * ```
     * @param {String} `filepath` file path of the file to read.
     * @param {Object} `options` [Options](#options) to pass to gray-matter.
     * @return {Object} Returns [an object](#returned-object) with `data` and `content`
     * @api public
     */

    matter.read = function (filepath, options) {
      const str = fs.readFileSync(filepath, 'utf8')
      const file = matter(str, options)
      file.path = filepath
      return file
    }

    /**
     * Returns true if the given `string` has front matter.
     * @param  {String} `string`
     * @param  {Object} `options`
     * @return {Boolean} True if front matter exists.
     * @api public
     */

    matter.test = function (str, options) {
      return utils.startsWith(str, defaults(options).delimiters[0])
    }

    /**
     * Detect the language to use, if one is defined after the
     * first front-matter delimiter.
     * @param  {String} `string`
     * @param  {Object} `options`
     * @return {Object} Object with `raw` (actual language string), and `name`, the language with whitespace trimmed
     */

    matter.language = function (str, options) {
      const opts = defaults(options)
      const open = opts.delimiters[0]

      if (matter.test(str)) {
        str = str.slice(open.length)
      }

      const language = str.slice(0, str.search(/\r?\n/))
      return {
        raw: language,
        name: language ? language.trim() : ''
      }
    }

    /**
     * Expose `matter`
     */

    matter.cache = {}
    matter.clearCache = function () {
      matter.cache = {}
    }
    module.exports = matter

    /***/
  },

  /***/ 5256: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const engines = __nccwpck_require__(3190)
    const utils = __nccwpck_require__(7405)

    module.exports = function (options) {
      const opts = Object.assign({}, options)

      // ensure that delimiters are an array
      opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || '---')
      if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0])
      }

      opts.language = (opts.language || opts.lang || 'yaml').toLowerCase()
      opts.engines = Object.assign({}, engines, opts.parsers, opts.engines)
      return opts
    }

    /***/
  },

  /***/ 7669: /***/ (module) => {
    module.exports = function (name, options) {
      let engine = options.engines[name] || options.engines[aliase(name)]
      if (typeof engine === 'undefined') {
        throw new Error('gray-matter engine "' + name + '" is not registered')
      }
      if (typeof engine === 'function') {
        engine = { parse: engine }
      }
      return engine
    }

    function aliase(name) {
      switch (name.toLowerCase()) {
        case 'js':
        case 'javascript':
          return 'javascript'
        case 'coffee':
        case 'coffeescript':
        case 'cson':
          return 'coffee'
        case 'yaml':
        case 'yml':
          return 'yaml'
        default: {
          return name
        }
      }
    }

    /***/
  },

  /***/ 3190: /***/ (module, exports, __nccwpck_require__) => {
    const yaml = __nccwpck_require__(1917)

    /**
     * Default engines
     */

    const engines = (exports = module.exports)

    /**
     * YAML
     */

    engines.yaml = {
      parse: yaml.safeLoad.bind(yaml),
      stringify: yaml.safeDump.bind(yaml)
    }

    /**
     * JSON
     */

    engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function (obj, options) {
        const opts = Object.assign({ replacer: null, space: 2 }, options)
        return JSON.stringify(obj, opts.replacer, opts.space)
      }
    }

    /**
     * JavaScript
     */

    engines.javascript = {
      parse: function parse(str, options, wrap) {
        /* eslint no-eval: 0 */
        try {
          if (wrap !== false) {
            str = '(function() {\nreturn ' + str.trim() + ';\n}());'
          }
          return eval(str) || {}
        } catch (err) {
          if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
            return parse(str, options, false)
          }
          throw new SyntaxError(err)
        }
      },
      stringify: function () {
        throw new Error('stringifying JavaScript is not supported')
      }
    }

    /***/
  },

  /***/ 3919: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const defaults = __nccwpck_require__(5256)

    module.exports = function (file, options) {
      const opts = defaults(options)

      if (file.data == null) {
        file.data = {}
      }

      if (typeof opts.excerpt === 'function') {
        return opts.excerpt(file, opts)
      }

      const sep = file.data.excerpt_separator || opts.excerpt_separator
      if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file
      }

      const delimiter =
        typeof opts.excerpt === 'string'
          ? opts.excerpt
          : sep || opts.delimiters[0]

      // if enabled, get the excerpt defined after front-matter
      const idx = file.content.indexOf(delimiter)
      if (idx !== -1) {
        file.excerpt = file.content.slice(0, idx)
      }

      return file
    }

    /***/
  },

  /***/ 9368: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const getEngine = __nccwpck_require__(7669)
    const defaults = __nccwpck_require__(5256)

    module.exports = function (language, str, options) {
      const opts = defaults(options)
      const engine = getEngine(language, opts)
      if (typeof engine.parse !== 'function') {
        throw new TypeError(
          'expected "' + language + '.parse" to be a function'
        )
      }
      return engine.parse(str, opts)
    }

    /***/
  },

  /***/ 905: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const typeOf = __nccwpck_require__(6961)
    const getEngine = __nccwpck_require__(7669)
    const defaults = __nccwpck_require__(5256)

    module.exports = function (file, data, options) {
      if (data == null && options == null) {
        switch (typeOf(file)) {
          case 'object':
            data = file.data
            options = {}
            break
          case 'string':
            return file
          default: {
            throw new TypeError('expected file to be a string or object')
          }
        }
      }

      const str = file.content
      const opts = defaults(options)
      if (data == null) {
        if (!opts.data) return file
        data = opts.data
      }

      const language = file.language || opts.language
      const engine = getEngine(language, opts)
      if (typeof engine.stringify !== 'function') {
        throw new TypeError(
          'expected "' + language + '.stringify" to be a function'
        )
      }

      data = Object.assign({}, file.data, data)
      const open = opts.delimiters[0]
      const close = opts.delimiters[1]
      const matter = engine.stringify(data, options).trim()
      let buf = ''

      if (matter !== '{}') {
        buf = newline(open) + newline(matter) + newline(close)
      }

      if (typeof file.excerpt === 'string' && file.excerpt !== '') {
        if (str.indexOf(file.excerpt.trim()) === -1) {
          buf += newline(file.excerpt) + newline(close)
        }
      }

      return buf + newline(str)
    }

    function newline(str) {
      return str.slice(-1) !== '\n' ? str + '\n' : str
    }

    /***/
  },

  /***/ 9652: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const typeOf = __nccwpck_require__(6961)
    const stringify = __nccwpck_require__(905)
    const utils = __nccwpck_require__(7405)

    /**
     * Normalize the given value to ensure an object is returned
     * with the expected properties.
     */

    module.exports = function (file) {
      if (typeOf(file) !== 'object') {
        file = { content: file }
      }

      if (typeOf(file.data) !== 'object') {
        file.data = {}
      }

      // if file was passed as an object, ensure that
      // "file.content" is set
      if (file.contents && file.content == null) {
        file.content = file.contents
      }

      // set non-enumerable properties on the file object
      utils.define(file, 'orig', utils.toBuffer(file.content))
      utils.define(file, 'language', file.language || '')
      utils.define(file, 'matter', file.matter || '')
      utils.define(file, 'stringify', function (data, options) {
        if (options && options.language) {
          file.language = options.language
        }
        return stringify(file, data, options)
      })

      // strip BOM and ensure that "file.content" is a string
      file.content = utils.toString(file.content)
      file.isEmpty = false
      file.excerpt = ''
      return file
    }

    /***/
  },

  /***/ 7405: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    const stripBom = __nccwpck_require__(6550)
    const typeOf = __nccwpck_require__(6961)

    exports.define = function (obj, key, val) {
      Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
      })
    }

    /**
     * Returns true if `val` is a buffer
     */

    exports.isBuffer = function (val) {
      return typeOf(val) === 'buffer'
    }

    /**
     * Returns true if `val` is an object
     */

    exports.isObject = function (val) {
      return typeOf(val) === 'object'
    }

    /**
     * Cast `input` to a buffer
     */

    exports.toBuffer = function (input) {
      return typeof input === 'string' ? Buffer.from(input) : input
    }

    /**
     * Cast `val` to a string.
     */

    exports.toString = function (input) {
      if (exports.isBuffer(input)) return stripBom(String(input))
      if (typeof input !== 'string') {
        throw new TypeError('expected input to be a string or buffer')
      }
      return stripBom(input)
    }

    /**
     * Cast `val` to an array.
     */

    exports.arrayify = function (val) {
      return val ? (Array.isArray(val) ? val : [val]) : []
    }

    /**
     * Returns true if `str` starts with `substr`.
     */

    exports.startsWith = function (str, substr, len) {
      if (typeof len !== 'number') len = substr.length
      return str.slice(0, len) === substr
    }

    /***/
  },

  /***/ 868: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _nanoid = __nccwpck_require__(7592)

    var _utils = __nccwpck_require__(6584)

    var defaults = {
      title: 'Untitled event',
      productId: 'adamgibbons/ics',
      method: 'PUBLISH',
      uid: (0, _nanoid.nanoid)(),
      timestamp: (0, _utils.formatDate)(null, 'utc'),
      start: (0, _utils.formatDate)(null, 'utc')
    }
    var _default = defaults
    exports['default'] = _default

    /***/
  },

  /***/ 8725: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.convertTimestampToArray = convertTimestampToArray
    exports.createEvent = createEvent
    exports.createEvents = createEvents

    var _nanoid = __nccwpck_require__(7592)

    var _pipeline = __nccwpck_require__(6095)

    function assignUniqueId(event) {
      event.uid = event.uid || (0, _nanoid.nanoid)()
      return event
    }

    function validateAndBuildEvent(event) {
      return (0, _pipeline.validateEvent)((0, _pipeline.buildEvent)(event))
    }

    function applyInitialFormatting(_ref) {
      var error = _ref.error,
        value = _ref.value

      if (error) {
        return {
          error: error,
          value: null
        }
      }

      return {
        error: null,
        value: (0, _pipeline.formatEvent)(value)
      }
    }

    function reformatEventsByPosition(_ref2, idx, list) {
      var error = _ref2.error,
        value = _ref2.value
      if (error)
        return {
          error: error,
          value: value
        }

      if (idx === 0) {
        // beginning of list
        return {
          value: value.slice(0, value.indexOf('END:VCALENDAR')),
          error: null
        }
      }

      if (idx === list.length - 1) {
        // end of list
        return {
          value: value.slice(value.indexOf('BEGIN:VEVENT')),
          error: null
        }
      }

      return {
        error: null,
        value: value.slice(
          value.indexOf('BEGIN:VEVENT'),
          value.indexOf('END:VEVENT') + 12
        )
      }
    }

    function catenateEvents(accumulator, _ref3, idx) {
      var error = _ref3.error,
        value = _ref3.value

      if (error) {
        accumulator.error = error
        accumulator.value = null
        return accumulator
      }

      if (accumulator.value) {
        accumulator.value = accumulator.value.concat(value)
        return accumulator
      }

      accumulator.value = value
      return accumulator
    }

    function convertTimestampToArray(timestamp) {
      var inputType =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : 'local'
      var dateArray = []
      var d = new Date(timestamp)
      dateArray.push(
        inputType === 'local' ? d.getFullYear() : d.getUTCFullYear()
      )
      dateArray.push(
        (inputType === 'local' ? d.getMonth() : d.getUTCMonth()) + 1
      )
      dateArray.push(inputType === 'local' ? d.getDate() : d.getUTCDate())
      dateArray.push(inputType === 'local' ? d.getHours() : d.getUTCHours())
      dateArray.push(inputType === 'local' ? d.getMinutes() : d.getUTCMinutes())
      return dateArray
    }

    function createEvent(attributes, cb) {
      if (!attributes) {
        Error('Attributes argument is required')
      }

      assignUniqueId(attributes)

      if (!cb) {
        // No callback, so return error or value in an object
        var _validateAndBuildEven = validateAndBuildEvent(attributes),
          _error = _validateAndBuildEven.error,
          _value = _validateAndBuildEven.value

        if (_error)
          return {
            error: _error,
            value: _value
          }
        var event = ''

        try {
          event = (0, _pipeline.formatEvent)(_value)
        } catch (error) {
          return {
            error: error,
            value: null
          }
        }

        return {
          error: null,
          value: event
        }
      } // Return a node-style callback

      var _validateAndBuildEven2 = validateAndBuildEvent(attributes),
        error = _validateAndBuildEven2.error,
        value = _validateAndBuildEven2.value

      if (error) return cb(error)
      return cb(null, (0, _pipeline.formatEvent)(value))
    }

    function createEvents(events, cb) {
      if (!events) {
        return {
          error: Error('one argument is required'),
          value: null
        }
      }

      if (events.length === 1) {
        return createEvent(events[0], cb)
      }

      var _events$map$map$map$m = events
          .map(assignUniqueId)
          .map(validateAndBuildEvent)
          .map(applyInitialFormatting)
          .map(reformatEventsByPosition)
          .reduce(catenateEvents, {
            error: null,
            value: null
          }),
        error = _events$map$map$map$m.error,
        value = _events$map$map$map$m.value

      if (!cb) {
        return {
          error: error,
          value: value
        }
      }

      return cb(error, value)
    }

    /***/
  },

  /***/ 1042: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = buildEvent

    var _defaults = _interopRequireDefault(__nccwpck_require__(868))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        })
      } else {
        obj[key] = value
      }
      return obj
    }

    function buildEvent() {
      var attributes =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      var title = attributes.title,
        productId = attributes.productId,
        method = attributes.method,
        uid = attributes.uid,
        sequence = attributes.sequence,
        start = attributes.start,
        startType = attributes.startType,
        duration = attributes.duration,
        end = attributes.end,
        description = attributes.description,
        url = attributes.url,
        geo = attributes.geo,
        location = attributes.location,
        status = attributes.status,
        categories = attributes.categories,
        organizer = attributes.organizer,
        attendees = attributes.attendees,
        alarms = attributes.alarms,
        recurrenceRule = attributes.recurrenceRule,
        created = attributes.created,
        lastModified = attributes.lastModified,
        calName = attributes.calName,
        htmlContent = attributes.htmlContent // fill in default values where necessary

      var output = Object.assign({}, _defaults['default'], attributes) // remove falsey values

      return Object.entries(output).reduce(function (clean, entry) {
        return entry[1]
          ? Object.assign(clean, _defineProperty({}, entry[0], entry[1]))
          : clean
      }, {})
    }

    /***/
  },

  /***/ 3772: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = formatEvent

    var _utils = __nccwpck_require__(6584)

    function formatEvent() {
      var attributes =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      var title = attributes.title,
        productId = attributes.productId,
        method = attributes.method,
        uid = attributes.uid,
        sequence = attributes.sequence,
        timestamp = attributes.timestamp,
        start = attributes.start,
        startType = attributes.startType,
        startInputType = attributes.startInputType,
        startOutputType = attributes.startOutputType,
        duration = attributes.duration,
        end = attributes.end,
        endInputType = attributes.endInputType,
        endOutputType = attributes.endOutputType,
        description = attributes.description,
        url = attributes.url,
        geo = attributes.geo,
        location = attributes.location,
        status = attributes.status,
        categories = attributes.categories,
        organizer = attributes.organizer,
        attendees = attributes.attendees,
        alarms = attributes.alarms,
        recurrenceRule = attributes.recurrenceRule,
        busyStatus = attributes.busyStatus,
        classification = attributes.classification,
        created = attributes.created,
        lastModified = attributes.lastModified,
        calName = attributes.calName,
        htmlContent = attributes.htmlContent
      var icsFormat = ''
      icsFormat += 'BEGIN:VCALENDAR\r\n'
      icsFormat += 'VERSION:2.0\r\n'
      icsFormat += 'CALSCALE:GREGORIAN\r\n'
      icsFormat += (0, _utils.foldLine)('PRODID:'.concat(productId)) + '\r\n'
      icsFormat += (0, _utils.foldLine)('METHOD:'.concat(method)) + '\r\n'
      icsFormat += calName
        ? (0, _utils.foldLine)('X-WR-CALNAME:'.concat(calName)) + '\r\n'
        : ''
      icsFormat += 'X-PUBLISHED-TTL:PT1H\r\n'
      icsFormat += 'BEGIN:VEVENT\r\n'
      icsFormat += 'UID:'.concat(uid, '\r\n')
      icsFormat +=
        (0, _utils.foldLine)(
          'SUMMARY:'.concat(title ? (0, _utils.setSummary)(title) : title)
        ) + '\r\n'
      icsFormat += 'DTSTAMP:'.concat(timestamp, '\r\n') // All day events like anniversaries must be specified as VALUE type DATE

      icsFormat += 'DTSTART'
        .concat(start && start.length == 3 ? ';VALUE=DATE' : '', ':')
        .concat(
          (0, _utils.formatDate)(
            start,
            startOutputType || startType,
            startInputType
          ),
          '\r\n'
        ) // End is not required for all day events on single days (like anniversaries)

      if (
        !end ||
        end.length !== 3 ||
        start.length !== end.length ||
        start.some(function (val, i) {
          return val !== end[i]
        })
      ) {
        if (end) {
          icsFormat += 'DTEND'
            .concat(end.length === 3 ? ';VALUE=DATE' : '', ':')
            .concat(
              (0, _utils.formatDate)(
                end,
                endOutputType || startOutputType || startType,
                endInputType || startInputType
              ),
              '\r\n'
            )
        }
      }

      icsFormat += sequence ? 'SEQUENCE:'.concat(sequence, '\r\n') : ''
      icsFormat += description
        ? (0, _utils.foldLine)(
            'DESCRIPTION:'.concat((0, _utils.setDescription)(description))
          ) + '\r\n'
        : ''
      icsFormat += url ? (0, _utils.foldLine)('URL:'.concat(url)) + '\r\n' : ''
      icsFormat += geo
        ? (0, _utils.foldLine)('GEO:'.concat((0, _utils.setGeolocation)(geo))) +
          '\r\n'
        : ''
      icsFormat += location
        ? (0, _utils.foldLine)(
            'LOCATION:'.concat((0, _utils.setLocation)(location))
          ) + '\r\n'
        : ''
      icsFormat += status
        ? (0, _utils.foldLine)('STATUS:'.concat(status)) + '\r\n'
        : ''
      icsFormat += categories
        ? (0, _utils.foldLine)('CATEGORIES:'.concat(categories)) + '\r\n'
        : ''
      icsFormat += organizer
        ? (0, _utils.foldLine)(
            'ORGANIZER;'.concat((0, _utils.setOrganizer)(organizer))
          ) + '\r\n'
        : ''
      icsFormat += busyStatus
        ? (0, _utils.foldLine)(
            'X-MICROSOFT-CDO-BUSYSTATUS:'.concat(busyStatus)
          ) + '\r\n'
        : ''
      icsFormat += classification
        ? (0, _utils.foldLine)('CLASS:'.concat(classification)) + '\r\n'
        : ''
      icsFormat += created
        ? 'CREATED:' + (0, _utils.formatDate)(created) + '\r\n'
        : ''
      icsFormat += lastModified
        ? 'LAST-MODIFIED:' + (0, _utils.formatDate)(lastModified) + '\r\n'
        : ''
      icsFormat += htmlContent
        ? (0, _utils.foldLine)(
            'X-ALT-DESC;FMTTYPE=text/html:'.concat(htmlContent)
          ) + '\r\n'
        : ''

      if (attendees) {
        attendees.map(function (attendee) {
          icsFormat +=
            (0, _utils.foldLine)(
              'ATTENDEE;'.concat((0, _utils.setContact)(attendee))
            ) + '\r\n'
        })
      }

      if (alarms) {
        alarms.map(function (alarm) {
          icsFormat += (0, _utils.setAlarm)(alarm)
        })
      }

      icsFormat += recurrenceRule ? 'RRULE:'.concat(recurrenceRule, '\r\n') : ''
      icsFormat += duration
        ? 'DURATION:'.concat((0, _utils.formatDuration)(duration), '\r\n')
        : ''
      icsFormat += 'END:VEVENT\r\n'
      icsFormat += 'END:VCALENDAR\r\n'
      return icsFormat
    }

    /***/
  },

  /***/ 6095: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    Object.defineProperty(exports, 'buildEvent', {
      enumerable: true,
      get: function get() {
        return _build['default']
      }
    })
    Object.defineProperty(exports, 'formatEvent', {
      enumerable: true,
      get: function get() {
        return _format['default']
      }
    })
    Object.defineProperty(exports, 'validateEvent', {
      enumerable: true,
      get: function get() {
        return _validate['default']
      }
    })

    var _build = _interopRequireDefault(__nccwpck_require__(1042))

    var _format = _interopRequireDefault(__nccwpck_require__(3772))

    var _validate = _interopRequireDefault(__nccwpck_require__(3180))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    /***/
  },

  /***/ 3180: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _schema = _interopRequireDefault(__nccwpck_require__(998))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    var _default = _schema['default']
    exports['default'] = _default

    /***/
  },

  /***/ 998: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    function _typeof(obj) {
      '@babel/helpers - typeof'
      if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        _typeof = function _typeof(obj) {
          return typeof obj
        }
      } else {
        _typeof = function _typeof(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj
        }
      }
      return _typeof(obj)
    }

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = validateEvent

    var yup = _interopRequireWildcard(__nccwpck_require__(7001))

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null
      var cache = new WeakMap()
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache
      }
      return cache
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj
      }
      if (
        obj === null ||
        (_typeof(obj) !== 'object' && typeof obj !== 'function')
      ) {
        return { default: obj }
      }
      var cache = _getRequireWildcardCache()
      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }
      var newObj = {}
      var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor
            ? Object.getOwnPropertyDescriptor(obj, key)
            : null
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }
      newObj['default'] = obj
      if (cache) {
        cache.set(obj, newObj)
      }
      return newObj
    }

    // yup url validation blocks localhost, so use a more flexible regex instead
    // taken from https://github.com/jquense/yup/issues/224#issuecomment-417172609
    // This does mean that the url validation error is
    // "url must match the following: ...." as opposed to "url must be a valid URL"
    var urlRegex =
      /^(?:([a-z0-9+.-]+):\/\/)(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/
    var dateTimeSchema = yup
      .array()
      .min(3)
      .max(7)
      .of(
        yup.lazy(function (item, options) {
          var itemIndex = parseInt(options.path.match(/.*\[(\d+)]/)[1])
          return [
            yup.number().integer(),
            yup.number().integer().min(1).max(12),
            yup.number().integer().min(1).max(31),
            yup.number().integer().min(0).max(23),
            yup.number().integer().min(0).max(60),
            yup.number().integer().min(0).max(60)
          ][itemIndex]
        })
      )
    var durationSchema = yup
      .object()
      .shape({
        before: yup['boolean'](),
        //option to set before alaram
        weeks: yup.number(),
        days: yup.number(),
        hours: yup.number(),
        minutes: yup.number(),
        seconds: yup.number()
      })
      .noUnknown()
    var contactSchema = yup
      .object()
      .shape({
        name: yup.string(),
        email: yup.string().email(),
        rsvp: yup['boolean'](),
        dir: yup.string().matches(urlRegex),
        partstat: yup.string(),
        role: yup.string()
      })
      .noUnknown()
    var organizerSchema = yup
      .object()
      .shape({
        name: yup.string(),
        email: yup.string().email()
      })
      .noUnknown()
    var alarmSchema = yup
      .object()
      .shape({
        action: yup
          .string()
          .matches(/audio|display|email/)
          .required(),
        trigger: yup.mixed().required(),
        description: yup.string(),
        duration: durationSchema,
        repeat: yup.number(),
        attach: yup.string(),
        attachType: yup.string(),
        summary: yup.string(),
        attendee: contactSchema,
        'x-prop': yup.mixed(),
        'iana-prop': yup.mixed()
      })
      .noUnknown()
    var schema = yup
      .object()
      .shape({
        summary: yup.string(),
        timestamp: yup.mixed(),
        title: yup.string(),
        productId: yup.string(),
        method: yup.string(),
        uid: yup.string().required(),
        sequence: yup.number(),
        start: dateTimeSchema.required(),
        duration: durationSchema,
        startType: yup.string().matches(/utc|local/),
        startInputType: yup.string().matches(/utc|local/),
        startOutputType: yup.string().matches(/utc|local/),
        end: dateTimeSchema,
        endInputType: yup.string().matches(/utc|local/),
        endOutputType: yup.string().matches(/utc|local/),
        description: yup.string(),
        url: yup.string().matches(urlRegex),
        geo: yup.object().shape({
          lat: yup.number(),
          lon: yup.number()
        }),
        location: yup.string(),
        status: yup.string().matches(/TENTATIVE|CANCELLED|CONFIRMED/i),
        categories: yup.array().of(yup.string()),
        organizer: organizerSchema,
        attendees: yup.array().of(contactSchema),
        alarms: yup.array().of(alarmSchema),
        recurrenceRule: yup.string(),
        busyStatus: yup.string().matches(/TENTATIVE|FREE|BUSY|OOF/i),
        classification: yup.string(),
        created: dateTimeSchema,
        lastModified: dateTimeSchema,
        calName: yup.string(),
        htmlContent: yup.string()
      })
      .test('xor', 'object should have end or duration', function (val) {
        var hasEnd = !!val.end
        var hasDuration = !!val.duration
        return (
          (hasEnd && !hasDuration) ||
          (!hasEnd && hasDuration) ||
          (!hasEnd && !hasDuration)
        )
      })
      .noUnknown()

    function validateEvent(candidate) {
      try {
        var value = schema.validateSync(candidate, {
          abortEarly: false,
          strict: true
        })
        return {
          error: null,
          value: value
        }
      } catch (error) {
        return {
          error: Object.assign({}, error),
          value: undefined
        }
      }
    }

    /***/
  },

  /***/ 7527: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = foldLine

    function foldLine(line) {
      var parts = []
      var length = 75

      while (line.length > length) {
        parts.push(line.slice(0, length))
        line = line.slice(length)
        length = 74
      }

      parts.push(line)
      return parts.join('\r\n\t')
    }

    /***/
  },

  /***/ 3986: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = formatDate

    function _slicedToArray(arr, i) {
      return (
        _arrayWithHoles(arr) ||
        _iterableToArrayLimit(arr, i) ||
        _unsupportedIterableToArray(arr, i) ||
        _nonIterableRest()
      )
    }

    function _nonIterableRest() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return
      if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
      var n = Object.prototype.toString.call(o).slice(8, -1)
      if (n === 'Object' && o.constructor) n = o.constructor.name
      if (n === 'Map' || n === 'Set') return Array.from(o)
      if (
        n === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return _arrayLikeToArray(o, minLen)
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i]
      }
      return arr2
    }

    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
        return
      var _arr = []
      var _n = true
      var _d = false
      var _e = undefined
      try {
        for (
          var _i = arr[Symbol.iterator](), _s;
          !(_n = (_s = _i.next()).done);
          _n = true
        ) {
          _arr.push(_s.value)
          if (i && _arr.length === i) break
        }
      } catch (err) {
        _d = true
        _e = err
      } finally {
        try {
          if (!_n && _i['return'] != null) _i['return']()
        } finally {
          if (_d) throw _e
        }
      }
      return _arr
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr
    }

    var pad = function pad(n) {
      return n < 10 ? '0'.concat(n) : ''.concat(n)
    }

    function formatDate() {
      var args =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      var outputType =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : 'utc'
      var inputType =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : 'local'

      if (Array.isArray(args) && args.length === 3) {
        var _args = _slicedToArray(args, 3),
          year = _args[0],
          month = _args[1],
          date = _args[2]

        return ''.concat(year).concat(pad(month)).concat(pad(date))
      }

      var outDate = new Date(new Date().setUTCSeconds(0, 0))

      if (Array.isArray(args) && args.length > 0 && args[0]) {
        var _args2 = _slicedToArray(args, 6),
          _year = _args2[0],
          _month = _args2[1],
          _date = _args2[2],
          _args2$ = _args2[3],
          hours = _args2$ === void 0 ? 0 : _args2$,
          _args2$2 = _args2[4],
          minutes = _args2$2 === void 0 ? 0 : _args2$2,
          _args2$3 = _args2[5],
          seconds = _args2$3 === void 0 ? 0 : _args2$3

        if (inputType === 'local') {
          outDate = new Date(_year, _month - 1, _date, hours, minutes, seconds)
        } else {
          outDate = new Date(
            Date.UTC(_year, _month - 1, _date, hours, minutes, seconds)
          )
        }
      }

      if (outputType === 'local') {
        return [
          outDate.getFullYear(),
          pad(outDate.getMonth() + 1),
          pad(outDate.getDate()),
          'T',
          pad(outDate.getHours()),
          pad(outDate.getMinutes()),
          pad(outDate.getSeconds())
        ].join('')
      }

      return [
        outDate.getUTCFullYear(),
        pad(outDate.getUTCMonth() + 1),
        pad(outDate.getUTCDate()),
        'T',
        pad(outDate.getUTCHours()),
        pad(outDate.getUTCMinutes()),
        pad(outDate.getUTCSeconds()),
        'Z'
      ].join('')
    }

    /***/
  },

  /***/ 3712: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = formatDuration

    function formatDuration() {
      var attributes =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      var weeks = attributes.weeks,
        days = attributes.days,
        hours = attributes.hours,
        minutes = attributes.minutes,
        seconds = attributes.seconds
      var formattedDuration = 'P'
      formattedDuration += weeks ? ''.concat(weeks, 'W') : ''
      formattedDuration += days ? ''.concat(days, 'D') : ''
      formattedDuration += 'T'
      formattedDuration += hours ? ''.concat(hours, 'H') : ''
      formattedDuration += minutes ? ''.concat(minutes, 'M') : ''
      formattedDuration += seconds ? ''.concat(seconds, 'S') : ''
      return formattedDuration
    }

    /***/
  },

  /***/ 4788: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = formatText

    function formatText(text) {
      return text
        .replace(/\\/gm, '\\\\')
        .replace(/\r?\n/gm, '\\n')
        .replace(/;/gm, '\\;')
        .replace(/,/gm, '\\,')
    }

    /***/
  },

  /***/ 6584: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    Object.defineProperty(exports, 'formatDate', {
      enumerable: true,
      get: function get() {
        return _formatDate['default']
      }
    })
    Object.defineProperty(exports, 'setGeolocation', {
      enumerable: true,
      get: function get() {
        return _setGeolocation['default']
      }
    })
    Object.defineProperty(exports, 'setContact', {
      enumerable: true,
      get: function get() {
        return _setContact['default']
      }
    })
    Object.defineProperty(exports, 'setOrganizer', {
      enumerable: true,
      get: function get() {
        return _setOrganizer['default']
      }
    })
    Object.defineProperty(exports, 'setAlarm', {
      enumerable: true,
      get: function get() {
        return _setAlarm['default']
      }
    })
    Object.defineProperty(exports, 'setDescription', {
      enumerable: true,
      get: function get() {
        return _setDescription['default']
      }
    })
    Object.defineProperty(exports, 'setSummary', {
      enumerable: true,
      get: function get() {
        return _setSummary['default']
      }
    })
    Object.defineProperty(exports, 'formatDuration', {
      enumerable: true,
      get: function get() {
        return _formatDuration['default']
      }
    })
    Object.defineProperty(exports, 'foldLine', {
      enumerable: true,
      get: function get() {
        return _foldLine['default']
      }
    })
    Object.defineProperty(exports, 'setLocation', {
      enumerable: true,
      get: function get() {
        return _setLocation['default']
      }
    })

    var _formatDate = _interopRequireDefault(__nccwpck_require__(3986))

    var _setGeolocation = _interopRequireDefault(__nccwpck_require__(1063))

    var _setContact = _interopRequireDefault(__nccwpck_require__(5776))

    var _setOrganizer = _interopRequireDefault(__nccwpck_require__(9250))

    var _setAlarm = _interopRequireDefault(__nccwpck_require__(3237))

    var _setDescription = _interopRequireDefault(__nccwpck_require__(7551))

    var _setSummary = _interopRequireDefault(__nccwpck_require__(2527))

    var _formatDuration = _interopRequireDefault(__nccwpck_require__(3712))

    var _foldLine = _interopRequireDefault(__nccwpck_require__(7527))

    var _setLocation = _interopRequireDefault(__nccwpck_require__(5808))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    /***/
  },

  /***/ 3237: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setAlarm

    var _formatDate = _interopRequireDefault(__nccwpck_require__(3986))

    var _foldLine = _interopRequireDefault(__nccwpck_require__(7527))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function setDuration(_ref) {
      var weeks = _ref.weeks,
        days = _ref.days,
        hours = _ref.hours,
        minutes = _ref.minutes,
        seconds = _ref.seconds
      var formattedString = 'P'
      formattedString += weeks ? ''.concat(weeks, 'W') : ''
      formattedString += days ? ''.concat(days, 'D') : ''
      formattedString += 'T'
      formattedString += hours ? ''.concat(hours, 'H') : ''
      formattedString += minutes ? ''.concat(minutes, 'M') : ''
      formattedString += seconds ? ''.concat(seconds, 'S') : ''
      return formattedString
    }

    function setTrigger(trigger) {
      var formattedString = ''

      if (Array.isArray(trigger)) {
        formattedString = 'TRIGGER;VALUE=DATE-TIME:'.concat(
          (0, _formatDate['default'])(trigger),
          '\r\n'
        )
      } else {
        var alert = trigger.before ? '-' : ''
        formattedString = 'TRIGGER:'.concat(
          alert + setDuration(trigger),
          '\r\n'
        )
      }

      return formattedString
    }

    function setAction(action) {
      return action.toUpperCase()
    }

    function setAlarm() {
      var attributes =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      var action = attributes.action,
        repeat = attributes.repeat,
        description = attributes.description,
        duration = attributes.duration,
        attach = attributes.attach,
        attachType = attributes.attachType,
        trigger = attributes.trigger,
        summary = attributes.summary
      var formattedString = 'BEGIN:VALARM\r\n'
      formattedString +=
        (0, _foldLine['default'])('ACTION:'.concat(setAction(action))) + '\r\n'
      formattedString += repeat
        ? (0, _foldLine['default'])('REPEAT:'.concat(repeat)) + '\r\n'
        : ''
      formattedString += description
        ? (0, _foldLine['default'])('DESCRIPTION:'.concat(description)) + '\r\n'
        : ''
      formattedString += duration
        ? (0, _foldLine['default'])('DURATION:'.concat(setDuration(duration))) +
          '\r\n'
        : ''
      var attachInfo = attachType ? attachType : 'FMTTYPE=audio/basic'
      formattedString += attach
        ? (0, _foldLine['default'])(
            'ATTACH;'.concat(attachInfo, ':').concat(attach)
          ) + '\r\n'
        : ''
      formattedString += trigger ? setTrigger(trigger) : ''
      formattedString += summary
        ? (0, _foldLine['default'])('SUMMARY:'.concat(summary)) + '\r\n'
        : ''
      formattedString += 'END:VALARM\r\n'
      return formattedString
    } // Example:  A duration of 15 days, 5 hours, and 20 seconds would be:
    // P15DT5H0M20S
    // A duration of 7 weeks would be:
    // P7W

    /***/
  },

  /***/ 5776: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setContact

    function setContact(_ref) {
      var name = _ref.name,
        email = _ref.email,
        rsvp = _ref.rsvp,
        dir = _ref.dir,
        partstat = _ref.partstat,
        role = _ref.role
      var formattedAttendee = ''
      formattedAttendee += rsvp ? 'RSVP=TRUE;' : 'RSVP=FALSE;'
      formattedAttendee += role ? 'ROLE='.concat(role, ';') : ''
      formattedAttendee += partstat ? 'PARTSTAT='.concat(partstat, ';') : ''
      formattedAttendee += dir ? 'DIR='.concat(dir, ';') : ''
      formattedAttendee += 'CN='
      formattedAttendee += name || 'Unnamed attendee'
      formattedAttendee += email ? ':mailto:'.concat(email) : ''
      return formattedAttendee
    }

    /***/
  },

  /***/ 7551: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setDescription

    var _formatText = _interopRequireDefault(__nccwpck_require__(4788))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function setDescription(description) {
      return (0, _formatText['default'])(description)
    }

    /***/
  },

  /***/ 1063: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setGeolocation

    function setGeolocation(_ref) {
      var lat = _ref.lat,
        lon = _ref.lon
      return ''.concat(lat, ';').concat(lon)
    }

    /***/
  },

  /***/ 5808: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setLocation

    var _formatText = _interopRequireDefault(__nccwpck_require__(4788))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function setLocation(location) {
      return (0, _formatText['default'])(location)
    }

    /***/
  },

  /***/ 9250: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setOrganizer

    function setOrganizer(_ref) {
      var name = _ref.name,
        email = _ref.email,
        dir = _ref.dir
      var formattedOrganizer = ''
      formattedOrganizer += dir ? 'DIR='.concat(dir, ';') : ''
      formattedOrganizer += 'CN='
      formattedOrganizer += name || 'Organizer'
      formattedOrganizer += email ? ':mailto:'.concat(email) : ''
      return formattedOrganizer
    }

    /***/
  },

  /***/ 2527: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setSummary

    var _formatText = _interopRequireDefault(__nccwpck_require__(4788))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function setSummary(summary) {
      return (0, _formatText['default'])(summary)
    }

    /***/
  },

  /***/ 6532: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var ics = __nccwpck_require__(8725)

    module.exports = ics

    /***/
  },

  /***/ 429: /***/ (module) => {
    /*!
     * is-extendable <https://github.com/jonschlinkert/is-extendable>
     *
     * Copyright (c) 2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */

    module.exports = function isExtendable(val) {
      return (
        typeof val !== 'undefined' &&
        val !== null &&
        (typeof val === 'object' || typeof val === 'function')
      )
    }

    /***/
  },

  /***/ 3287: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    function isObject(o) {
      return Object.prototype.toString.call(o) === '[object Object]'
    }

    function isPlainObject(o) {
      var ctor, prot

      if (isObject(o) === false) return false

      // If has modified constructor
      ctor = o.constructor
      if (ctor === undefined) return true

      // If has modified prototype
      prot = ctor.prototype
      if (isObject(prot) === false) return false

      // If constructor does not have an Object-specific method
      if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false
      }

      // Most likely a plain Object
      return true
    }

    exports.isPlainObject = isPlainObject

    /***/
  },

  /***/ 1917: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var yaml = __nccwpck_require__(916)

    module.exports = yaml

    /***/
  },

  /***/ 916: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var loader = __nccwpck_require__(5190)
    var dumper = __nccwpck_require__(3034)

    function deprecated(name) {
      return function () {
        throw new Error(
          'Function ' + name + ' is deprecated and cannot be used.'
        )
      }
    }

    module.exports.Type = __nccwpck_require__(967)
    module.exports.Schema = __nccwpck_require__(6514)
    module.exports.FAILSAFE_SCHEMA = __nccwpck_require__(6037)
    module.exports.JSON_SCHEMA = __nccwpck_require__(1571)
    module.exports.CORE_SCHEMA = __nccwpck_require__(2183)
    module.exports.DEFAULT_SAFE_SCHEMA = __nccwpck_require__(8949)
    module.exports.DEFAULT_FULL_SCHEMA = __nccwpck_require__(6874)
    module.exports.load = loader.load
    module.exports.loadAll = loader.loadAll
    module.exports.safeLoad = loader.safeLoad
    module.exports.safeLoadAll = loader.safeLoadAll
    module.exports.dump = dumper.dump
    module.exports.safeDump = dumper.safeDump
    module.exports.YAMLException = __nccwpck_require__(5199)

    // Deprecated schema names from JS-YAML 2.0.x
    module.exports.MINIMAL_SCHEMA = __nccwpck_require__(6037)
    module.exports.SAFE_SCHEMA = __nccwpck_require__(8949)
    module.exports.DEFAULT_SCHEMA = __nccwpck_require__(6874)

    // Deprecated functions from JS-YAML 1.x.x
    module.exports.scan = deprecated('scan')
    module.exports.parse = deprecated('parse')
    module.exports.compose = deprecated('compose')
    module.exports.addConstructor = deprecated('addConstructor')

    /***/
  },

  /***/ 9136: /***/ (module) => {
    function isNothing(subject) {
      return typeof subject === 'undefined' || subject === null
    }

    function isObject(subject) {
      return typeof subject === 'object' && subject !== null
    }

    function toArray(sequence) {
      if (Array.isArray(sequence)) return sequence
      else if (isNothing(sequence)) return []

      return [sequence]
    }

    function extend(target, source) {
      var index, length, key, sourceKeys

      if (source) {
        sourceKeys = Object.keys(source)

        for (
          index = 0, length = sourceKeys.length;
          index < length;
          index += 1
        ) {
          key = sourceKeys[index]
          target[key] = source[key]
        }
      }

      return target
    }

    function repeat(string, count) {
      var result = '',
        cycle

      for (cycle = 0; cycle < count; cycle += 1) {
        result += string
      }

      return result
    }

    function isNegativeZero(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number
    }

    module.exports.isNothing = isNothing
    module.exports.isObject = isObject
    module.exports.toArray = toArray
    module.exports.repeat = repeat
    module.exports.isNegativeZero = isNegativeZero
    module.exports.extend = extend

    /***/
  },

  /***/ 3034: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*eslint-disable no-use-before-define*/

    var common = __nccwpck_require__(9136)
    var YAMLException = __nccwpck_require__(5199)
    var DEFAULT_FULL_SCHEMA = __nccwpck_require__(6874)
    var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(8949)

    var _toString = Object.prototype.toString
    var _hasOwnProperty = Object.prototype.hasOwnProperty

    var CHAR_TAB = 0x09 /* Tab */
    var CHAR_LINE_FEED = 0x0a /* LF */
    var CHAR_CARRIAGE_RETURN = 0x0d /* CR */
    var CHAR_SPACE = 0x20 /* Space */
    var CHAR_EXCLAMATION = 0x21 /* ! */
    var CHAR_DOUBLE_QUOTE = 0x22 /* " */
    var CHAR_SHARP = 0x23 /* # */
    var CHAR_PERCENT = 0x25 /* % */
    var CHAR_AMPERSAND = 0x26 /* & */
    var CHAR_SINGLE_QUOTE = 0x27 /* ' */
    var CHAR_ASTERISK = 0x2a /* * */
    var CHAR_COMMA = 0x2c /* , */
    var CHAR_MINUS = 0x2d /* - */
    var CHAR_COLON = 0x3a /* : */
    var CHAR_EQUALS = 0x3d /* = */
    var CHAR_GREATER_THAN = 0x3e /* > */
    var CHAR_QUESTION = 0x3f /* ? */
    var CHAR_COMMERCIAL_AT = 0x40 /* @ */
    var CHAR_LEFT_SQUARE_BRACKET = 0x5b /* [ */
    var CHAR_RIGHT_SQUARE_BRACKET = 0x5d /* ] */
    var CHAR_GRAVE_ACCENT = 0x60 /* ` */
    var CHAR_LEFT_CURLY_BRACKET = 0x7b /* { */
    var CHAR_VERTICAL_LINE = 0x7c /* | */
    var CHAR_RIGHT_CURLY_BRACKET = 0x7d /* } */

    var ESCAPE_SEQUENCES = {}

    ESCAPE_SEQUENCES[0x00] = '\\0'
    ESCAPE_SEQUENCES[0x07] = '\\a'
    ESCAPE_SEQUENCES[0x08] = '\\b'
    ESCAPE_SEQUENCES[0x09] = '\\t'
    ESCAPE_SEQUENCES[0x0a] = '\\n'
    ESCAPE_SEQUENCES[0x0b] = '\\v'
    ESCAPE_SEQUENCES[0x0c] = '\\f'
    ESCAPE_SEQUENCES[0x0d] = '\\r'
    ESCAPE_SEQUENCES[0x1b] = '\\e'
    ESCAPE_SEQUENCES[0x22] = '\\"'
    ESCAPE_SEQUENCES[0x5c] = '\\\\'
    ESCAPE_SEQUENCES[0x85] = '\\N'
    ESCAPE_SEQUENCES[0xa0] = '\\_'
    ESCAPE_SEQUENCES[0x2028] = '\\L'
    ESCAPE_SEQUENCES[0x2029] = '\\P'

    var DEPRECATED_BOOLEANS_SYNTAX = [
      'y',
      'Y',
      'yes',
      'Yes',
      'YES',
      'on',
      'On',
      'ON',
      'n',
      'N',
      'no',
      'No',
      'NO',
      'off',
      'Off',
      'OFF'
    ]

    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type

      if (map === null) return {}

      result = {}
      keys = Object.keys(map)

      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index]
        style = String(map[tag])

        if (tag.slice(0, 2) === '!!') {
          tag = 'tag:yaml.org,2002:' + tag.slice(2)
        }
        type = schema.compiledTypeMap['fallback'][tag]

        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style]
        }

        result[tag] = style
      }

      return result
    }

    function encodeHex(character) {
      var string, handle, length

      string = character.toString(16).toUpperCase()

      if (character <= 0xff) {
        handle = 'x'
        length = 2
      } else if (character <= 0xffff) {
        handle = 'u'
        length = 4
      } else if (character <= 0xffffffff) {
        handle = 'U'
        length = 8
      } else {
        throw new YAMLException(
          'code point within a string may not be greater than 0xFFFFFFFF'
        )
      }

      return '\\' + handle + common.repeat('0', length - string.length) + string
    }

    function State(options) {
      this.schema = options['schema'] || DEFAULT_FULL_SCHEMA
      this.indent = Math.max(1, options['indent'] || 2)
      this.noArrayIndent = options['noArrayIndent'] || false
      this.skipInvalid = options['skipInvalid'] || false
      this.flowLevel = common.isNothing(options['flowLevel'])
        ? -1
        : options['flowLevel']
      this.styleMap = compileStyleMap(this.schema, options['styles'] || null)
      this.sortKeys = options['sortKeys'] || false
      this.lineWidth = options['lineWidth'] || 80
      this.noRefs = options['noRefs'] || false
      this.noCompatMode = options['noCompatMode'] || false
      this.condenseFlow = options['condenseFlow'] || false

      this.implicitTypes = this.schema.compiledImplicit
      this.explicitTypes = this.schema.compiledExplicit

      this.tag = null
      this.result = ''

      this.duplicates = []
      this.usedDuplicates = null
    }

    // Indents every line in a string. Empty lines (\n only) are not indented.
    function indentString(string, spaces) {
      var ind = common.repeat(' ', spaces),
        position = 0,
        next = -1,
        result = '',
        line,
        length = string.length

      while (position < length) {
        next = string.indexOf('\n', position)
        if (next === -1) {
          line = string.slice(position)
          position = length
        } else {
          line = string.slice(position, next + 1)
          position = next + 1
        }

        if (line.length && line !== '\n') result += ind

        result += line
      }

      return result
    }

    function generateNextLine(state, level) {
      return '\n' + common.repeat(' ', state.indent * level)
    }

    function testImplicitResolving(state, str) {
      var index, length, type

      for (
        index = 0, length = state.implicitTypes.length;
        index < length;
        index += 1
      ) {
        type = state.implicitTypes[index]

        if (type.resolve(str)) {
          return true
        }
      }

      return false
    }

    // [33] s-white ::= s-space | s-tab
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB
    }

    // Returns true if the character can be printed without escaping.
    // From YAML 1.2: "any allowed characters known to be non-printable
    // should also be escaped. [However,] This isn’t mandatory"
    // Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
    function isPrintable(c) {
      return (
        (0x00020 <= c && c <= 0x00007e) ||
        (0x000a1 <= c && c <= 0x00d7ff && c !== 0x2028 && c !== 0x2029) ||
        (0x0e000 <= c && c <= 0x00fffd && c !== 0xfeff) /* BOM */ ||
        (0x10000 <= c && c <= 0x10ffff)
      )
    }

    // [34] ns-char ::= nb-char - s-white
    // [27] nb-char ::= c-printable - b-char - c-byte-order-mark
    // [26] b-char  ::= b-line-feed | b-carriage-return
    // [24] b-line-feed       ::=     #xA    /* LF */
    // [25] b-carriage-return ::=     #xD    /* CR */
    // [3]  c-byte-order-mark ::=     #xFEFF
    function isNsChar(c) {
      return (
        isPrintable(c) &&
        !isWhitespace(c) &&
        // byte-order-mark
        c !== 0xfeff &&
        // b-char
        c !== CHAR_CARRIAGE_RETURN &&
        c !== CHAR_LINE_FEED
      )
    }

    // Simplified test for values allowed after the first character in plain style.
    function isPlainSafe(c, prev) {
      // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
      // where nb-char ::= c-printable - b-char - c-byte-order-mark.
      return (
        isPrintable(c) &&
        c !== 0xfeff &&
        // - c-flow-indicator
        c !== CHAR_COMMA &&
        c !== CHAR_LEFT_SQUARE_BRACKET &&
        c !== CHAR_RIGHT_SQUARE_BRACKET &&
        c !== CHAR_LEFT_CURLY_BRACKET &&
        c !== CHAR_RIGHT_CURLY_BRACKET &&
        // - ":" - "#"
        // /* An ns-char preceding */ "#"
        c !== CHAR_COLON &&
        (c !== CHAR_SHARP || (prev && isNsChar(prev)))
      )
    }

    // Simplified test for values allowed as the first character in plain style.
    function isPlainSafeFirst(c) {
      // Uses a subset of ns-char - c-indicator
      // where ns-char = nb-char - s-white.
      return (
        isPrintable(c) &&
        c !== 0xfeff &&
        !isWhitespace(c) && // - s-white
        // - (c-indicator ::=
        // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
        c !== CHAR_MINUS &&
        c !== CHAR_QUESTION &&
        c !== CHAR_COLON &&
        c !== CHAR_COMMA &&
        c !== CHAR_LEFT_SQUARE_BRACKET &&
        c !== CHAR_RIGHT_SQUARE_BRACKET &&
        c !== CHAR_LEFT_CURLY_BRACKET &&
        c !== CHAR_RIGHT_CURLY_BRACKET &&
        // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
        c !== CHAR_SHARP &&
        c !== CHAR_AMPERSAND &&
        c !== CHAR_ASTERISK &&
        c !== CHAR_EXCLAMATION &&
        c !== CHAR_VERTICAL_LINE &&
        c !== CHAR_EQUALS &&
        c !== CHAR_GREATER_THAN &&
        c !== CHAR_SINGLE_QUOTE &&
        c !== CHAR_DOUBLE_QUOTE &&
        // | “%” | “@” | “`”)
        c !== CHAR_PERCENT &&
        c !== CHAR_COMMERCIAL_AT &&
        c !== CHAR_GRAVE_ACCENT
      )
    }

    // Determines whether block indentation indicator is required.
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /
      return leadingSpaceRe.test(string)
    }

    var STYLE_PLAIN = 1,
      STYLE_SINGLE = 2,
      STYLE_LITERAL = 3,
      STYLE_FOLDED = 4,
      STYLE_DOUBLE = 5

    // Determines which scalar styles are possible and returns the preferred style.
    // lineWidth = -1 => no limit.
    // Pre-conditions: str.length > 0.
    // Post-conditions:
    //    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
    //    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
    //    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
    function chooseScalarStyle(
      string,
      singleLineOnly,
      indentPerLevel,
      lineWidth,
      testAmbiguousType
    ) {
      var i
      var char, prev_char
      var hasLineBreak = false
      var hasFoldableLine = false // only checked if shouldTrackWidth
      var shouldTrackWidth = lineWidth !== -1
      var previousLineBreak = -1 // count the first line correctly
      var plain =
        isPlainSafeFirst(string.charCodeAt(0)) &&
        !isWhitespace(string.charCodeAt(string.length - 1))

      if (singleLineOnly) {
        // Case: no block styles.
        // Check for disallowed characters to rule out plain and single.
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i)
          if (!isPrintable(char)) {
            return STYLE_DOUBLE
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null
          plain = plain && isPlainSafe(char, prev_char)
        }
      } else {
        // Case: block styles permitted.
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i)
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true
            // Check if any line can be folded.
            if (shouldTrackWidth) {
              hasFoldableLine =
                hasFoldableLine ||
                // Foldable line = too long, and not more-indented.
                (i - previousLineBreak - 1 > lineWidth &&
                  string[previousLineBreak + 1] !== ' ')
              previousLineBreak = i
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null
          plain = plain && isPlainSafe(char, prev_char)
        }
        // in case the end is missing a \n
        hasFoldableLine =
          hasFoldableLine ||
          (shouldTrackWidth &&
            i - previousLineBreak - 1 > lineWidth &&
            string[previousLineBreak + 1] !== ' ')
      }
      // Although every style can represent \n without escaping, prefer block styles
      // for multiline, since they're more readable and they don't add empty lines.
      // Also prefer folding a super-long line.
      if (!hasLineBreak && !hasFoldableLine) {
        // Strings interpretable as another type have to be quoted;
        // e.g. the string 'true' vs. the boolean true.
        return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE
      }
      // Edge case: block indentation indicator can only have one digit.
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE
      }
      // At this point we know block styles are valid.
      // Prefer literal style unless we want to fold.
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL
    }

    // Note: line breaking/folding is implemented for only the folded style.
    // NB. We drop the last trailing newline (if any) of a returned block scalar
    //  since the dumper adds its own newline. This always works:
    //    • No ending newline => unaffected; already using strip "-" chomping.
    //    • Ending newline    => removed then restored.
    //  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
    function writeScalar(state, string, level, iskey) {
      state.dump = (function () {
        if (string.length === 0) {
          return "''"
        }
        if (
          !state.noCompatMode &&
          DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1
        ) {
          return "'" + string + "'"
        }

        var indent = state.indent * Math.max(1, level) // no 0-indent scalars
        // As indentation gets deeper, let the width decrease monotonically
        // to the lower bound min(state.lineWidth, 40).
        // Note that this implies
        //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
        //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
        // This behaves better than a constant minimum width which disallows narrower options,
        // or an indent threshold which causes the width to suddenly increase.
        var lineWidth =
          state.lineWidth === -1
            ? -1
            : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent)

        // Without knowing if keys are implicit/explicit, assume implicit for safety.
        var singleLineOnly =
          iskey ||
          // No block styles in flow mode.
          (state.flowLevel > -1 && level >= state.flowLevel)
        function testAmbiguity(string) {
          return testImplicitResolving(state, string)
        }

        switch (
          chooseScalarStyle(
            string,
            singleLineOnly,
            state.indent,
            lineWidth,
            testAmbiguity
          )
        ) {
          case STYLE_PLAIN:
            return string
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'"
          case STYLE_LITERAL:
            return (
              '|' +
              blockHeader(string, state.indent) +
              dropEndingNewline(indentString(string, indent))
            )
          case STYLE_FOLDED:
            return (
              '>' +
              blockHeader(string, state.indent) +
              dropEndingNewline(
                indentString(foldString(string, lineWidth), indent)
              )
            )
          case STYLE_DOUBLE:
            return '"' + escapeString(string, lineWidth) + '"'
          default:
            throw new YAMLException('impossible error: invalid scalar style')
        }
      })()
    }

    // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string)
        ? String(indentPerLevel)
        : ''

      // note the special case: the string '\n' counts as a "trailing" empty line.
      var clip = string[string.length - 1] === '\n'
      var keep = clip && (string[string.length - 2] === '\n' || string === '\n')
      var chomp = keep ? '+' : clip ? '' : '-'

      return indentIndicator + chomp + '\n'
    }

    // (See the note for writeScalar.)
    function dropEndingNewline(string) {
      return string[string.length - 1] === '\n' ? string.slice(0, -1) : string
    }

    // Note: a long line without a suitable break point will exceed the width limit.
    // Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
    function foldString(string, width) {
      // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
      // unless they're before or after a more-indented line, or at the very
      // beginning or end, in which case $k$ maps to $k$.
      // Therefore, parse each chunk as newline(s) followed by a content line.
      var lineRe = /(\n+)([^\n]*)/g

      // first line (possibly an empty line)
      var result = (function () {
        var nextLF = string.indexOf('\n')
        nextLF = nextLF !== -1 ? nextLF : string.length
        lineRe.lastIndex = nextLF
        return foldLine(string.slice(0, nextLF), width)
      })()
      // If we haven't reached the first content line yet, don't add an extra \n.
      var prevMoreIndented = string[0] === '\n' || string[0] === ' '
      var moreIndented

      // rest of the lines
      var match
      while ((match = lineRe.exec(string))) {
        var prefix = match[1],
          line = match[2]
        moreIndented = line[0] === ' '
        result +=
          prefix +
          (!prevMoreIndented && !moreIndented && line !== '' ? '\n' : '') +
          foldLine(line, width)
        prevMoreIndented = moreIndented
      }

      return result
    }

    // Greedy line breaking.
    // Picks the longest line under the limit each time,
    // otherwise settles for the shortest line over the limit.
    // NB. More-indented lines *cannot* be folded, as that would add an extra \n.
    function foldLine(line, width) {
      if (line === '' || line[0] === ' ') return line

      // Since a more-indented line adds a \n, breaks can't be followed by a space.
      var breakRe = / [^ ]/g // note: the match index will always be <= length-2.
      var match
      // start is an inclusive index. end, curr, and next are exclusive.
      var start = 0,
        end,
        curr = 0,
        next = 0
      var result = ''

      // Invariants: 0 <= start <= length-1.
      //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
      // Inside the loop:
      //   A match implies length >= 2, so curr and next are <= length-2.
      while ((match = breakRe.exec(line))) {
        next = match.index
        // maintain invariant: curr - start <= width
        if (next - start > width) {
          end = curr > start ? curr : next // derive end <= length-2
          result += '\n' + line.slice(start, end)
          // skip the space that was output as \n
          start = end + 1 // derive start <= length-1
        }
        curr = next
      }

      // By the invariants, start <= length-1, so there is something left over.
      // It is either the whole string or a part starting from non-whitespace.
      result += '\n'
      // Insert a break if the remainder is too long and there is a break available.
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + '\n' + line.slice(curr + 1)
      } else {
        result += line.slice(start)
      }

      return result.slice(1) // drop extra \n joiner
    }

    // Escapes a double-quoted string.
    function escapeString(string) {
      var result = ''
      var char, nextChar
      var escapeSeq

      for (var i = 0; i < string.length; i++) {
        char = string.charCodeAt(i)
        // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
        if (char >= 0xd800 && char <= 0xdbff /* high surrogate */) {
          nextChar = string.charCodeAt(i + 1)
          if (nextChar >= 0xdc00 && nextChar <= 0xdfff /* low surrogate */) {
            // Combine the surrogate pair and store it escaped.
            result += encodeHex(
              (char - 0xd800) * 0x400 + nextChar - 0xdc00 + 0x10000
            )
            // Advance index one extra since we already used that char here.
            i++
            continue
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char]
        result +=
          !escapeSeq && isPrintable(char)
            ? string[i]
            : escapeSeq || encodeHex(char)
      }

      return result
    }

    function writeFlowSequence(state, level, object) {
      var _result = '',
        _tag = state.tag,
        index,
        length

      for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level, object[index], false, false)) {
          if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '')
          _result += state.dump
        }
      }

      state.tag = _tag
      state.dump = '[' + _result + ']'
    }

    function writeBlockSequence(state, level, object, compact) {
      var _result = '',
        _tag = state.tag,
        index,
        length

      for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level + 1, object[index], true, true)) {
          if (!compact || index !== 0) {
            _result += generateNextLine(state, level)
          }

          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += '-'
          } else {
            _result += '- '
          }

          _result += state.dump
        }
      }

      state.tag = _tag
      state.dump = _result || '[]' // Empty sequence if no valid values.
    }

    function writeFlowMapping(state, level, object) {
      var _result = '',
        _tag = state.tag,
        objectKeyList = Object.keys(object),
        index,
        length,
        objectKey,
        objectValue,
        pairBuffer

      for (
        index = 0, length = objectKeyList.length;
        index < length;
        index += 1
      ) {
        pairBuffer = ''
        if (index !== 0) pairBuffer += ', '

        if (state.condenseFlow) pairBuffer += '"'

        objectKey = objectKeyList[index]
        objectValue = object[objectKey]

        if (!writeNode(state, level, objectKey, false, false)) {
          continue // Skip this pair because of invalid key;
        }

        if (state.dump.length > 1024) pairBuffer += '? '

        pairBuffer +=
          state.dump +
          (state.condenseFlow ? '"' : '') +
          ':' +
          (state.condenseFlow ? '' : ' ')

        if (!writeNode(state, level, objectValue, false, false)) {
          continue // Skip this pair because of invalid value.
        }

        pairBuffer += state.dump

        // Both key and value are valid.
        _result += pairBuffer
      }

      state.tag = _tag
      state.dump = '{' + _result + '}'
    }

    function writeBlockMapping(state, level, object, compact) {
      var _result = '',
        _tag = state.tag,
        objectKeyList = Object.keys(object),
        index,
        length,
        objectKey,
        objectValue,
        explicitPair,
        pairBuffer

      // Allow sorting keys so that the output file is deterministic
      if (state.sortKeys === true) {
        // Default sorting
        objectKeyList.sort()
      } else if (typeof state.sortKeys === 'function') {
        // Custom sort function
        objectKeyList.sort(state.sortKeys)
      } else if (state.sortKeys) {
        // Something is wrong
        throw new YAMLException('sortKeys must be a boolean or a function')
      }

      for (
        index = 0, length = objectKeyList.length;
        index < length;
        index += 1
      ) {
        pairBuffer = ''

        if (!compact || index !== 0) {
          pairBuffer += generateNextLine(state, level)
        }

        objectKey = objectKeyList[index]
        objectValue = object[objectKey]

        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue // Skip this pair because of invalid key.
        }

        explicitPair =
          (state.tag !== null && state.tag !== '?') ||
          (state.dump && state.dump.length > 1024)

        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += '?'
          } else {
            pairBuffer += '? '
          }
        }

        pairBuffer += state.dump

        if (explicitPair) {
          pairBuffer += generateNextLine(state, level)
        }

        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue // Skip this pair because of invalid value.
        }

        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ':'
        } else {
          pairBuffer += ': '
        }

        pairBuffer += state.dump

        // Both key and value are valid.
        _result += pairBuffer
      }

      state.tag = _tag
      state.dump = _result || '{}' // Empty mapping if no valid pairs.
    }

    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style

      typeList = explicit ? state.explicitTypes : state.implicitTypes

      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index]

        if (
          (type.instanceOf || type.predicate) &&
          (!type.instanceOf ||
            (typeof object === 'object' &&
              object instanceof type.instanceOf)) &&
          (!type.predicate || type.predicate(object))
        ) {
          state.tag = explicit ? type.tag : '?'

          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle

            if (_toString.call(type.represent) === '[object Function]') {
              _result = type.represent(object, style)
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style)
            } else {
              throw new YAMLException(
                '!<' +
                  type.tag +
                  '> tag resolver accepts not "' +
                  style +
                  '" style'
              )
            }

            state.dump = _result
          }

          return true
        }
      }

      return false
    }

    // Serializes `object` and writes it to global `result`.
    // Returns true on success, or false on invalid object.
    //
    function writeNode(state, level, object, block, compact, iskey) {
      state.tag = null
      state.dump = object

      if (!detectType(state, object, false)) {
        detectType(state, object, true)
      }

      var type = _toString.call(state.dump)

      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level
      }

      var objectOrArray =
          type === '[object Object]' || type === '[object Array]',
        duplicateIndex,
        duplicate

      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object)
        duplicate = duplicateIndex !== -1
      }

      if (
        (state.tag !== null && state.tag !== '?') ||
        duplicate ||
        (state.indent !== 2 && level > 0)
      ) {
        compact = false
      }

      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = '*ref_' + duplicateIndex
      } else {
        if (
          objectOrArray &&
          duplicate &&
          !state.usedDuplicates[duplicateIndex]
        ) {
          state.usedDuplicates[duplicateIndex] = true
        }
        if (type === '[object Object]') {
          if (block && Object.keys(state.dump).length !== 0) {
            writeBlockMapping(state, level, state.dump, compact)
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + state.dump
            }
          } else {
            writeFlowMapping(state, level, state.dump)
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + ' ' + state.dump
            }
          }
        } else if (type === '[object Array]') {
          var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level
          if (block && state.dump.length !== 0) {
            writeBlockSequence(state, arrayLevel, state.dump, compact)
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + state.dump
            }
          } else {
            writeFlowSequence(state, arrayLevel, state.dump)
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + ' ' + state.dump
            }
          }
        } else if (type === '[object String]') {
          if (state.tag !== '?') {
            writeScalar(state, state.dump, level, iskey)
          }
        } else {
          if (state.skipInvalid) return false
          throw new YAMLException(
            'unacceptable kind of an object to dump ' + type
          )
        }

        if (state.tag !== null && state.tag !== '?') {
          state.dump = '!<' + state.tag + '> ' + state.dump
        }
      }

      return true
    }

    function getDuplicateReferences(object, state) {
      var objects = [],
        duplicatesIndexes = [],
        index,
        length

      inspectNode(object, objects, duplicatesIndexes)

      for (
        index = 0, length = duplicatesIndexes.length;
        index < length;
        index += 1
      ) {
        state.duplicates.push(objects[duplicatesIndexes[index]])
      }
      state.usedDuplicates = new Array(length)
    }

    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList, index, length

      if (object !== null && typeof object === 'object') {
        index = objects.indexOf(object)
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index)
          }
        } else {
          objects.push(object)

          if (Array.isArray(object)) {
            for (
              index = 0, length = object.length;
              index < length;
              index += 1
            ) {
              inspectNode(object[index], objects, duplicatesIndexes)
            }
          } else {
            objectKeyList = Object.keys(object)

            for (
              index = 0, length = objectKeyList.length;
              index < length;
              index += 1
            ) {
              inspectNode(
                object[objectKeyList[index]],
                objects,
                duplicatesIndexes
              )
            }
          }
        }
      }
    }

    function dump(input, options) {
      options = options || {}

      var state = new State(options)

      if (!state.noRefs) getDuplicateReferences(input, state)

      if (writeNode(state, 0, input, true, true)) return state.dump + '\n'

      return ''
    }

    function safeDump(input, options) {
      return dump(
        input,
        common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
      )
    }

    module.exports.dump = dump
    module.exports.safeDump = safeDump

    /***/
  },

  /***/ 5199: /***/ (module) => {
    // YAML error class. http://stackoverflow.com/questions/8458984
    //

    function YAMLException(reason, mark) {
      // Super constructor
      Error.call(this)

      this.name = 'YAMLException'
      this.reason = reason
      this.mark = mark
      this.message =
        (this.reason || '(unknown reason)') +
        (this.mark ? ' ' + this.mark.toString() : '')

      // Include stack trace in error object
      if (Error.captureStackTrace) {
        // Chrome and NodeJS
        Error.captureStackTrace(this, this.constructor)
      } else {
        // FF, IE 10+ and Safari 6+. Fallback for others
        this.stack = new Error().stack || ''
      }
    }

    // Inherit from Error
    YAMLException.prototype = Object.create(Error.prototype)
    YAMLException.prototype.constructor = YAMLException

    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ': '

      result += this.reason || '(unknown reason)'

      if (!compact && this.mark) {
        result += ' ' + this.mark.toString()
      }

      return result
    }

    module.exports = YAMLException

    /***/
  },

  /***/ 5190: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*eslint-disable max-len,no-use-before-define*/

    var common = __nccwpck_require__(9136)
    var YAMLException = __nccwpck_require__(5199)
    var Mark = __nccwpck_require__(5426)
    var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(8949)
    var DEFAULT_FULL_SCHEMA = __nccwpck_require__(6874)

    var _hasOwnProperty = Object.prototype.hasOwnProperty

    var CONTEXT_FLOW_IN = 1
    var CONTEXT_FLOW_OUT = 2
    var CONTEXT_BLOCK_IN = 3
    var CONTEXT_BLOCK_OUT = 4

    var CHOMPING_CLIP = 1
    var CHOMPING_STRIP = 2
    var CHOMPING_KEEP = 3

    var PATTERN_NON_PRINTABLE =
      /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i
    var PATTERN_TAG_URI =
      /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i

    function _class(obj) {
      return Object.prototype.toString.call(obj)
    }

    function is_EOL(c) {
      return c === 0x0a /* LF */ || c === 0x0d /* CR */
    }

    function is_WHITE_SPACE(c) {
      return c === 0x09 /* Tab */ || c === 0x20 /* Space */
    }

    function is_WS_OR_EOL(c) {
      return (
        c === 0x09 /* Tab */ ||
        c === 0x20 /* Space */ ||
        c === 0x0a /* LF */ ||
        c === 0x0d /* CR */
      )
    }

    function is_FLOW_INDICATOR(c) {
      return (
        c === 0x2c /* , */ ||
        c === 0x5b /* [ */ ||
        c === 0x5d /* ] */ ||
        c === 0x7b /* { */ ||
        c === 0x7d /* } */
      )
    }

    function fromHexCode(c) {
      var lc

      if (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) {
        return c - 0x30
      }

      /*eslint-disable no-bitwise*/
      lc = c | 0x20

      if (0x61 /* a */ <= lc && lc <= 0x66 /* f */) {
        return lc - 0x61 + 10
      }

      return -1
    }

    function escapedHexLen(c) {
      if (c === 0x78 /* x */) {
        return 2
      }
      if (c === 0x75 /* u */) {
        return 4
      }
      if (c === 0x55 /* U */) {
        return 8
      }
      return 0
    }

    function fromDecimalCode(c) {
      if (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) {
        return c - 0x30
      }

      return -1
    }

    function simpleEscapeSequence(c) {
      /* eslint-disable indent */
      return c === 0x30 /* 0 */
        ? '\x00'
        : c === 0x61 /* a */
        ? '\x07'
        : c === 0x62 /* b */
        ? '\x08'
        : c === 0x74 /* t */
        ? '\x09'
        : c === 0x09 /* Tab */
        ? '\x09'
        : c === 0x6e /* n */
        ? '\x0A'
        : c === 0x76 /* v */
        ? '\x0B'
        : c === 0x66 /* f */
        ? '\x0C'
        : c === 0x72 /* r */
        ? '\x0D'
        : c === 0x65 /* e */
        ? '\x1B'
        : c === 0x20 /* Space */
        ? ' '
        : c === 0x22 /* " */
        ? '\x22'
        : c === 0x2f /* / */
        ? '/'
        : c === 0x5c /* \ */
        ? '\x5C'
        : c === 0x4e /* N */
        ? '\x85'
        : c === 0x5f /* _ */
        ? '\xA0'
        : c === 0x4c /* L */
        ? '\u2028'
        : c === 0x50 /* P */
        ? '\u2029'
        : ''
    }

    function charFromCodepoint(c) {
      if (c <= 0xffff) {
        return String.fromCharCode(c)
      }
      // Encode UTF-16 surrogate pair
      // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
      return String.fromCharCode(
        ((c - 0x010000) >> 10) + 0xd800,
        ((c - 0x010000) & 0x03ff) + 0xdc00
      )
    }

    var simpleEscapeCheck = new Array(256) // integer, for fast access
    var simpleEscapeMap = new Array(256)
    for (var i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0
      simpleEscapeMap[i] = simpleEscapeSequence(i)
    }

    function State(input, options) {
      this.input = input

      this.filename = options['filename'] || null
      this.schema = options['schema'] || DEFAULT_FULL_SCHEMA
      this.onWarning = options['onWarning'] || null
      this.legacy = options['legacy'] || false
      this.json = options['json'] || false
      this.listener = options['listener'] || null

      this.implicitTypes = this.schema.compiledImplicit
      this.typeMap = this.schema.compiledTypeMap

      this.length = input.length
      this.position = 0
      this.line = 0
      this.lineStart = 0
      this.lineIndent = 0

      this.documents = []

      /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/
    }

    function generateError(state, message) {
      return new YAMLException(
        message,
        new Mark(
          state.filename,
          state.input,
          state.position,
          state.line,
          state.position - state.lineStart
        )
      )
    }

    function throwError(state, message) {
      throw generateError(state, message)
    }

    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message))
      }
    }

    var directiveHandlers = {
      YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor

        if (state.version !== null) {
          throwError(state, 'duplication of %YAML directive')
        }

        if (args.length !== 1) {
          throwError(state, 'YAML directive accepts exactly one argument')
        }

        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0])

        if (match === null) {
          throwError(state, 'ill-formed argument of the YAML directive')
        }

        major = parseInt(match[1], 10)
        minor = parseInt(match[2], 10)

        if (major !== 1) {
          throwError(state, 'unacceptable YAML version of the document')
        }

        state.version = args[0]
        state.checkLineBreaks = minor < 2

        if (minor !== 1 && minor !== 2) {
          throwWarning(state, 'unsupported YAML version of the document')
        }
      },

      TAG: function handleTagDirective(state, name, args) {
        var handle, prefix

        if (args.length !== 2) {
          throwError(state, 'TAG directive accepts exactly two arguments')
        }

        handle = args[0]
        prefix = args[1]

        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(
            state,
            'ill-formed tag handle (first argument) of the TAG directive'
          )
        }

        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(
            state,
            'there is a previously declared suffix for "' +
              handle +
              '" tag handle'
          )
        }

        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(
            state,
            'ill-formed tag prefix (second argument) of the TAG directive'
          )
        }

        state.tagMap[handle] = prefix
      }
    }

    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result

      if (start < end) {
        _result = state.input.slice(start, end)

        if (checkJson) {
          for (
            _position = 0, _length = _result.length;
            _position < _length;
            _position += 1
          ) {
            _character = _result.charCodeAt(_position)
            if (
              !(
                _character === 0x09 ||
                (0x20 <= _character && _character <= 0x10ffff)
              )
            ) {
              throwError(state, 'expected valid JSON character')
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, 'the stream contains non-printable characters')
        }

        state.result += _result
      }
    }

    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity

      if (!common.isObject(source)) {
        throwError(
          state,
          'cannot merge mappings; the provided source object is unacceptable'
        )
      }

      sourceKeys = Object.keys(source)

      for (
        index = 0, quantity = sourceKeys.length;
        index < quantity;
        index += 1
      ) {
        key = sourceKeys[index]

        if (!_hasOwnProperty.call(destination, key)) {
          destination[key] = source[key]
          overridableKeys[key] = true
        }
      }
    }

    function storeMappingPair(
      state,
      _result,
      overridableKeys,
      keyTag,
      keyNode,
      valueNode,
      startLine,
      startPos
    ) {
      var index, quantity

      // The output is a plain object here, so keys can only be strings.
      // We need to convert keyNode to a string, but doing so can hang the process
      // (deeply nested arrays that explode exponentially using aliases).
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode)

        for (
          index = 0, quantity = keyNode.length;
          index < quantity;
          index += 1
        ) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, 'nested arrays are not supported inside keys')
          }

          if (
            typeof keyNode === 'object' &&
            _class(keyNode[index]) === '[object Object]'
          ) {
            keyNode[index] = '[object Object]'
          }
        }
      }

      // Avoid code execution in load() via toString property
      // (still use its own toString for arrays, timestamps,
      // and whatever user schema extensions happen to have @@toStringTag)
      if (
        typeof keyNode === 'object' &&
        _class(keyNode) === '[object Object]'
      ) {
        keyNode = '[object Object]'
      }

      keyNode = String(keyNode)

      if (_result === null) {
        _result = {}
      }

      if (keyTag === 'tag:yaml.org,2002:merge') {
        if (Array.isArray(valueNode)) {
          for (
            index = 0, quantity = valueNode.length;
            index < quantity;
            index += 1
          ) {
            mergeMappings(state, _result, valueNode[index], overridableKeys)
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys)
        }
      } else {
        if (
          !state.json &&
          !_hasOwnProperty.call(overridableKeys, keyNode) &&
          _hasOwnProperty.call(_result, keyNode)
        ) {
          state.line = startLine || state.line
          state.position = startPos || state.position
          throwError(state, 'duplicated mapping key')
        }
        _result[keyNode] = valueNode
        delete overridableKeys[keyNode]
      }

      return _result
    }

    function readLineBreak(state) {
      var ch

      ch = state.input.charCodeAt(state.position)

      if (ch === 0x0a /* LF */) {
        state.position++
      } else if (ch === 0x0d /* CR */) {
        state.position++
        if (state.input.charCodeAt(state.position) === 0x0a /* LF */) {
          state.position++
        }
      } else {
        throwError(state, 'a line break is expected')
      }

      state.line += 1
      state.lineStart = state.position
    }

    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0,
        ch = state.input.charCodeAt(state.position)

      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position)
        }

        if (allowComments && ch === 0x23 /* # */) {
          do {
            ch = state.input.charCodeAt(++state.position)
          } while (ch !== 0x0a /* LF */ && ch !== 0x0d /* CR */ && ch !== 0)
        }

        if (is_EOL(ch)) {
          readLineBreak(state)

          ch = state.input.charCodeAt(state.position)
          lineBreaks++
          state.lineIndent = 0

          while (ch === 0x20 /* Space */) {
            state.lineIndent++
            ch = state.input.charCodeAt(++state.position)
          }
        } else {
          break
        }
      }

      if (
        checkIndent !== -1 &&
        lineBreaks !== 0 &&
        state.lineIndent < checkIndent
      ) {
        throwWarning(state, 'deficient indentation')
      }

      return lineBreaks
    }

    function testDocumentSeparator(state) {
      var _position = state.position,
        ch

      ch = state.input.charCodeAt(_position)

      // Condition state.position === state.lineStart is tested
      // in parent on each call, for efficiency. No needs to test here again.
      if (
        (ch === 0x2d /* - */ || ch === 0x2e) /* . */ &&
        ch === state.input.charCodeAt(_position + 1) &&
        ch === state.input.charCodeAt(_position + 2)
      ) {
        _position += 3

        ch = state.input.charCodeAt(_position)

        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true
        }
      }

      return false
    }

    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += ' '
      } else if (count > 1) {
        state.result += common.repeat('\n', count - 1)
      }
    }

    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding,
        following,
        captureStart,
        captureEnd,
        hasPendingContent,
        _line,
        _lineStart,
        _lineIndent,
        _kind = state.kind,
        _result = state.result,
        ch

      ch = state.input.charCodeAt(state.position)

      if (
        is_WS_OR_EOL(ch) ||
        is_FLOW_INDICATOR(ch) ||
        ch === 0x23 /* # */ ||
        ch === 0x26 /* & */ ||
        ch === 0x2a /* * */ ||
        ch === 0x21 /* ! */ ||
        ch === 0x7c /* | */ ||
        ch === 0x3e /* > */ ||
        ch === 0x27 /* ' */ ||
        ch === 0x22 /* " */ ||
        ch === 0x25 /* % */ ||
        ch === 0x40 /* @ */ ||
        ch === 0x60 /* ` */
      ) {
        return false
      }

      if (ch === 0x3f /* ? */ || ch === 0x2d /* - */) {
        following = state.input.charCodeAt(state.position + 1)

        if (
          is_WS_OR_EOL(following) ||
          (withinFlowCollection && is_FLOW_INDICATOR(following))
        ) {
          return false
        }
      }

      state.kind = 'scalar'
      state.result = ''
      captureStart = captureEnd = state.position
      hasPendingContent = false

      while (ch !== 0) {
        if (ch === 0x3a /* : */) {
          following = state.input.charCodeAt(state.position + 1)

          if (
            is_WS_OR_EOL(following) ||
            (withinFlowCollection && is_FLOW_INDICATOR(following))
          ) {
            break
          }
        } else if (ch === 0x23 /* # */) {
          preceding = state.input.charCodeAt(state.position - 1)

          if (is_WS_OR_EOL(preceding)) {
            break
          }
        } else if (
          (state.position === state.lineStart &&
            testDocumentSeparator(state)) ||
          (withinFlowCollection && is_FLOW_INDICATOR(ch))
        ) {
          break
        } else if (is_EOL(ch)) {
          _line = state.line
          _lineStart = state.lineStart
          _lineIndent = state.lineIndent
          skipSeparationSpace(state, false, -1)

          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true
            ch = state.input.charCodeAt(state.position)
            continue
          } else {
            state.position = captureEnd
            state.line = _line
            state.lineStart = _lineStart
            state.lineIndent = _lineIndent
            break
          }
        }

        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false)
          writeFoldedLines(state, state.line - _line)
          captureStart = captureEnd = state.position
          hasPendingContent = false
        }

        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1
        }

        ch = state.input.charCodeAt(++state.position)
      }

      captureSegment(state, captureStart, captureEnd, false)

      if (state.result) {
        return true
      }

      state.kind = _kind
      state.result = _result
      return false
    }

    function readSingleQuotedScalar(state, nodeIndent) {
      var ch, captureStart, captureEnd

      ch = state.input.charCodeAt(state.position)

      if (ch !== 0x27 /* ' */) {
        return false
      }

      state.kind = 'scalar'
      state.result = ''
      state.position++
      captureStart = captureEnd = state.position

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x27 /* ' */) {
          captureSegment(state, captureStart, state.position, true)
          ch = state.input.charCodeAt(++state.position)

          if (ch === 0x27 /* ' */) {
            captureStart = state.position
            state.position++
            captureEnd = state.position
          } else {
            return true
          }
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true)
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent))
          captureStart = captureEnd = state.position
        } else if (
          state.position === state.lineStart &&
          testDocumentSeparator(state)
        ) {
          throwError(
            state,
            'unexpected end of the document within a single quoted scalar'
          )
        } else {
          state.position++
          captureEnd = state.position
        }
      }

      throwError(
        state,
        'unexpected end of the stream within a single quoted scalar'
      )
    }

    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch

      ch = state.input.charCodeAt(state.position)

      if (ch !== 0x22 /* " */) {
        return false
      }

      state.kind = 'scalar'
      state.result = ''
      state.position++
      captureStart = captureEnd = state.position

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x22 /* " */) {
          captureSegment(state, captureStart, state.position, true)
          state.position++
          return true
        } else if (ch === 0x5c /* \ */) {
          captureSegment(state, captureStart, state.position, true)
          ch = state.input.charCodeAt(++state.position)

          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent)

            // TODO: rework to inline fn with no type cast?
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch]
            state.position++
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp
            hexResult = 0

            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position)

              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp
              } else {
                throwError(state, 'expected hexadecimal character')
              }
            }

            state.result += charFromCodepoint(hexResult)

            state.position++
          } else {
            throwError(state, 'unknown escape sequence')
          }

          captureStart = captureEnd = state.position
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true)
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent))
          captureStart = captureEnd = state.position
        } else if (
          state.position === state.lineStart &&
          testDocumentSeparator(state)
        ) {
          throwError(
            state,
            'unexpected end of the document within a double quoted scalar'
          )
        } else {
          state.position++
          captureEnd = state.position
        }
      }

      throwError(
        state,
        'unexpected end of the stream within a double quoted scalar'
      )
    }

    function readFlowCollection(state, nodeIndent) {
      var readNext = true,
        _line,
        _tag = state.tag,
        _result,
        _anchor = state.anchor,
        following,
        terminator,
        isPair,
        isExplicitPair,
        isMapping,
        overridableKeys = {},
        keyNode,
        keyTag,
        valueNode,
        ch

      ch = state.input.charCodeAt(state.position)

      if (ch === 0x5b /* [ */) {
        terminator = 0x5d /* ] */
        isMapping = false
        _result = []
      } else if (ch === 0x7b /* { */) {
        terminator = 0x7d /* } */
        isMapping = true
        _result = {}
      } else {
        return false
      }

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result
      }

      ch = state.input.charCodeAt(++state.position)

      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent)

        ch = state.input.charCodeAt(state.position)

        if (ch === terminator) {
          state.position++
          state.tag = _tag
          state.anchor = _anchor
          state.kind = isMapping ? 'mapping' : 'sequence'
          state.result = _result
          return true
        } else if (!readNext) {
          throwError(state, 'missed comma between flow collection entries')
        }

        keyTag = keyNode = valueNode = null
        isPair = isExplicitPair = false

        if (ch === 0x3f /* ? */) {
          following = state.input.charCodeAt(state.position + 1)

          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true
            state.position++
            skipSeparationSpace(state, true, nodeIndent)
          }
        }

        _line = state.line
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true)
        keyTag = state.tag
        keyNode = state.result
        skipSeparationSpace(state, true, nodeIndent)

        ch = state.input.charCodeAt(state.position)

        if ((isExplicitPair || state.line === _line) && ch === 0x3a /* : */) {
          isPair = true
          ch = state.input.charCodeAt(++state.position)
          skipSeparationSpace(state, true, nodeIndent)
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true)
          valueNode = state.result
        }

        if (isMapping) {
          storeMappingPair(
            state,
            _result,
            overridableKeys,
            keyTag,
            keyNode,
            valueNode
          )
        } else if (isPair) {
          _result.push(
            storeMappingPair(
              state,
              null,
              overridableKeys,
              keyTag,
              keyNode,
              valueNode
            )
          )
        } else {
          _result.push(keyNode)
        }

        skipSeparationSpace(state, true, nodeIndent)

        ch = state.input.charCodeAt(state.position)

        if (ch === 0x2c /* , */) {
          readNext = true
          ch = state.input.charCodeAt(++state.position)
        } else {
          readNext = false
        }
      }

      throwError(state, 'unexpected end of the stream within a flow collection')
    }

    function readBlockScalar(state, nodeIndent) {
      var captureStart,
        folding,
        chomping = CHOMPING_CLIP,
        didReadContent = false,
        detectedIndent = false,
        textIndent = nodeIndent,
        emptyLines = 0,
        atMoreIndented = false,
        tmp,
        ch

      ch = state.input.charCodeAt(state.position)

      if (ch === 0x7c /* | */) {
        folding = false
      } else if (ch === 0x3e /* > */) {
        folding = true
      } else {
        return false
      }

      state.kind = 'scalar'
      state.result = ''

      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position)

        if (ch === 0x2b /* + */ || ch === 0x2d /* - */) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 0x2b /* + */ ? CHOMPING_KEEP : CHOMPING_STRIP
          } else {
            throwError(state, 'repeat of a chomping mode identifier')
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(
              state,
              'bad explicit indentation width of a block scalar; it cannot be less than one'
            )
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1
            detectedIndent = true
          } else {
            throwError(state, 'repeat of an indentation width identifier')
          }
        } else {
          break
        }
      }

      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position)
        } while (is_WHITE_SPACE(ch))

        if (ch === 0x23 /* # */) {
          do {
            ch = state.input.charCodeAt(++state.position)
          } while (!is_EOL(ch) && ch !== 0)
        }
      }

      while (ch !== 0) {
        readLineBreak(state)
        state.lineIndent = 0

        ch = state.input.charCodeAt(state.position)

        while (
          (!detectedIndent || state.lineIndent < textIndent) &&
          ch === 0x20 /* Space */
        ) {
          state.lineIndent++
          ch = state.input.charCodeAt(++state.position)
        }

        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent
        }

        if (is_EOL(ch)) {
          emptyLines++
          continue
        }

        // End of the scalar.
        if (state.lineIndent < textIndent) {
          // Perform the chomping.
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat(
              '\n',
              didReadContent ? 1 + emptyLines : emptyLines
            )
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              // i.e. only if the scalar is not empty.
              state.result += '\n'
            }
          }

          // Break this `while` cycle and go to the funciton's epilogue.
          break
        }

        // Folded style: use fancy rules to handle line breaks.
        if (folding) {
          // Lines starting with white space characters (more-indented lines) are not folded.
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true
            // except for the first content line (cf. Example 8.1)
            state.result += common.repeat(
              '\n',
              didReadContent ? 1 + emptyLines : emptyLines
            )

            // End of more-indented block.
          } else if (atMoreIndented) {
            atMoreIndented = false
            state.result += common.repeat('\n', emptyLines + 1)

            // Just one line break - perceive as the same line.
          } else if (emptyLines === 0) {
            if (didReadContent) {
              // i.e. only if we have already read some scalar content.
              state.result += ' '
            }

            // Several line breaks - perceive as different lines.
          } else {
            state.result += common.repeat('\n', emptyLines)
          }

          // Literal style: just add exact number of line breaks between content lines.
        } else {
          // Keep all line breaks except the header line break.
          state.result += common.repeat(
            '\n',
            didReadContent ? 1 + emptyLines : emptyLines
          )
        }

        didReadContent = true
        detectedIndent = true
        emptyLines = 0
        captureStart = state.position

        while (!is_EOL(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position)
        }

        captureSegment(state, captureStart, state.position, false)
      }

      return true
    }

    function readBlockSequence(state, nodeIndent) {
      var _line,
        _tag = state.tag,
        _anchor = state.anchor,
        _result = [],
        following,
        detected = false,
        ch

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result
      }

      ch = state.input.charCodeAt(state.position)

      while (ch !== 0) {
        if (ch !== 0x2d /* - */) {
          break
        }

        following = state.input.charCodeAt(state.position + 1)

        if (!is_WS_OR_EOL(following)) {
          break
        }

        detected = true
        state.position++

        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null)
            ch = state.input.charCodeAt(state.position)
            continue
          }
        }

        _line = state.line
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true)
        _result.push(state.result)
        skipSeparationSpace(state, true, -1)

        ch = state.input.charCodeAt(state.position)

        if (
          (state.line === _line || state.lineIndent > nodeIndent) &&
          ch !== 0
        ) {
          throwError(state, 'bad indentation of a sequence entry')
        } else if (state.lineIndent < nodeIndent) {
          break
        }
      }

      if (detected) {
        state.tag = _tag
        state.anchor = _anchor
        state.kind = 'sequence'
        state.result = _result
        return true
      }
      return false
    }

    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following,
        allowCompact,
        _line,
        _pos,
        _tag = state.tag,
        _anchor = state.anchor,
        _result = {},
        overridableKeys = {},
        keyTag = null,
        keyNode = null,
        valueNode = null,
        atExplicitKey = false,
        detected = false,
        ch

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result
      }

      ch = state.input.charCodeAt(state.position)

      while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1)
        _line = state.line // Save the current line.
        _pos = state.position

        //
        // Explicit notation case. There are two separate blocks:
        // first for the key (denoted by "?") and second for the value (denoted by ":")
        //
        if (
          (ch === 0x3f /* ? */ || ch === 0x3a /*: */) &&
          is_WS_OR_EOL(following)
        ) {
          if (ch === 0x3f /* ? */) {
            if (atExplicitKey) {
              storeMappingPair(
                state,
                _result,
                overridableKeys,
                keyTag,
                keyNode,
                null
              )
              keyTag = keyNode = valueNode = null
            }

            detected = true
            atExplicitKey = true
            allowCompact = true
          } else if (atExplicitKey) {
            // i.e. 0x3A/* : */ === character after the explicit key.
            atExplicitKey = false
            allowCompact = true
          } else {
            throwError(
              state,
              'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line'
            )
          }

          state.position += 1
          ch = following

          //
          // Implicit notation case. Flow-style node as the key first, then ":", and the value.
          //
        } else if (
          composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)
        ) {
          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position)

            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position)
            }

            if (ch === 0x3a /* : */) {
              ch = state.input.charCodeAt(++state.position)

              if (!is_WS_OR_EOL(ch)) {
                throwError(
                  state,
                  'a whitespace character is expected after the key-value separator within a block mapping'
                )
              }

              if (atExplicitKey) {
                storeMappingPair(
                  state,
                  _result,
                  overridableKeys,
                  keyTag,
                  keyNode,
                  null
                )
                keyTag = keyNode = valueNode = null
              }

              detected = true
              atExplicitKey = false
              allowCompact = false
              keyTag = state.tag
              keyNode = state.result
            } else if (detected) {
              throwError(
                state,
                'can not read an implicit mapping pair; a colon is missed'
              )
            } else {
              state.tag = _tag
              state.anchor = _anchor
              return true // Keep the result of `composeNode`.
            }
          } else if (detected) {
            throwError(
              state,
              'can not read a block mapping entry; a multiline key may not be an implicit key'
            )
          } else {
            state.tag = _tag
            state.anchor = _anchor
            return true // Keep the result of `composeNode`.
          }
        } else {
          break // Reading is done. Go to the epilogue.
        }

        //
        // Common reading code for both explicit and implicit notations.
        //
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (
            composeNode(
              state,
              nodeIndent,
              CONTEXT_BLOCK_OUT,
              true,
              allowCompact
            )
          ) {
            if (atExplicitKey) {
              keyNode = state.result
            } else {
              valueNode = state.result
            }
          }

          if (!atExplicitKey) {
            storeMappingPair(
              state,
              _result,
              overridableKeys,
              keyTag,
              keyNode,
              valueNode,
              _line,
              _pos
            )
            keyTag = keyNode = valueNode = null
          }

          skipSeparationSpace(state, true, -1)
          ch = state.input.charCodeAt(state.position)
        }

        if (state.lineIndent > nodeIndent && ch !== 0) {
          throwError(state, 'bad indentation of a mapping entry')
        } else if (state.lineIndent < nodeIndent) {
          break
        }
      }

      //
      // Epilogue.
      //

      // Special case: last mapping's node contains only the key in explicit notation.
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null)
      }

      // Expose the resulting mapping.
      if (detected) {
        state.tag = _tag
        state.anchor = _anchor
        state.kind = 'mapping'
        state.result = _result
      }

      return detected
    }

    function readTagProperty(state) {
      var _position,
        isVerbatim = false,
        isNamed = false,
        tagHandle,
        tagName,
        ch

      ch = state.input.charCodeAt(state.position)

      if (ch !== 0x21 /* ! */) return false

      if (state.tag !== null) {
        throwError(state, 'duplication of a tag property')
      }

      ch = state.input.charCodeAt(++state.position)

      if (ch === 0x3c /* < */) {
        isVerbatim = true
        ch = state.input.charCodeAt(++state.position)
      } else if (ch === 0x21 /* ! */) {
        isNamed = true
        tagHandle = '!!'
        ch = state.input.charCodeAt(++state.position)
      } else {
        tagHandle = '!'
      }

      _position = state.position

      if (isVerbatim) {
        do {
          ch = state.input.charCodeAt(++state.position)
        } while (ch !== 0 && ch !== 0x3e /* > */)

        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position)
          ch = state.input.charCodeAt(++state.position)
        } else {
          throwError(
            state,
            'unexpected end of the stream within a verbatim tag'
          )
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 0x21 /* ! */) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1)

              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(
                  state,
                  'named tag handle cannot contain such characters'
                )
              }

              isNamed = true
              _position = state.position + 1
            } else {
              throwError(state, 'tag suffix cannot contain exclamation marks')
            }
          }

          ch = state.input.charCodeAt(++state.position)
        }

        tagName = state.input.slice(_position, state.position)

        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(
            state,
            'tag suffix cannot contain flow indicator characters'
          )
        }
      }

      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, 'tag name cannot contain such characters: ' + tagName)
      }

      if (isVerbatim) {
        state.tag = tagName
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName
      } else if (tagHandle === '!') {
        state.tag = '!' + tagName
      } else if (tagHandle === '!!') {
        state.tag = 'tag:yaml.org,2002:' + tagName
      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"')
      }

      return true
    }

    function readAnchorProperty(state) {
      var _position, ch

      ch = state.input.charCodeAt(state.position)

      if (ch !== 0x26 /* & */) return false

      if (state.anchor !== null) {
        throwError(state, 'duplication of an anchor property')
      }

      ch = state.input.charCodeAt(++state.position)
      _position = state.position

      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position)
      }

      if (state.position === _position) {
        throwError(
          state,
          'name of an anchor node must contain at least one character'
        )
      }

      state.anchor = state.input.slice(_position, state.position)
      return true
    }

    function readAlias(state) {
      var _position, alias, ch

      ch = state.input.charCodeAt(state.position)

      if (ch !== 0x2a /* * */) return false

      ch = state.input.charCodeAt(++state.position)
      _position = state.position

      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position)
      }

      if (state.position === _position) {
        throwError(
          state,
          'name of an alias node must contain at least one character'
        )
      }

      alias = state.input.slice(_position, state.position)

      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"')
      }

      state.result = state.anchorMap[alias]
      skipSeparationSpace(state, true, -1)
      return true
    }

    function composeNode(
      state,
      parentIndent,
      nodeContext,
      allowToSeek,
      allowCompact
    ) {
      var allowBlockStyles,
        allowBlockScalars,
        allowBlockCollections,
        indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
        atNewLine = false,
        hasContent = false,
        typeIndex,
        typeQuantity,
        type,
        flowIndent,
        blockIndent

      if (state.listener !== null) {
        state.listener('open', state)
      }

      state.tag = null
      state.anchor = null
      state.kind = null
      state.result = null

      allowBlockStyles =
        allowBlockScalars =
        allowBlockCollections =
          CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext

      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true

          if (state.lineIndent > parentIndent) {
            indentStatus = 1
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1
          }
        }
      }

      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true
            allowBlockCollections = allowBlockStyles

            if (state.lineIndent > parentIndent) {
              indentStatus = 1
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1
            }
          } else {
            allowBlockCollections = false
          }
        }
      }

      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact
      }

      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (
          CONTEXT_FLOW_IN === nodeContext ||
          CONTEXT_FLOW_OUT === nodeContext
        ) {
          flowIndent = parentIndent
        } else {
          flowIndent = parentIndent + 1
        }

        blockIndent = state.position - state.lineStart

        if (indentStatus === 1) {
          if (
            (allowBlockCollections &&
              (readBlockSequence(state, blockIndent) ||
                readBlockMapping(state, blockIndent, flowIndent))) ||
            readFlowCollection(state, flowIndent)
          ) {
            hasContent = true
          } else {
            if (
              (allowBlockScalars && readBlockScalar(state, flowIndent)) ||
              readSingleQuotedScalar(state, flowIndent) ||
              readDoubleQuotedScalar(state, flowIndent)
            ) {
              hasContent = true
            } else if (readAlias(state)) {
              hasContent = true

              if (state.tag !== null || state.anchor !== null) {
                throwError(state, 'alias node should not have any properties')
              }
            } else if (
              readPlainScalar(
                state,
                flowIndent,
                CONTEXT_FLOW_IN === nodeContext
              )
            ) {
              hasContent = true

              if (state.tag === null) {
                state.tag = '?'
              }
            }

            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result
            }
          }
        } else if (indentStatus === 0) {
          // Special case: block sequences are allowed to have same indentation level as the parent.
          // http://www.yaml.org/spec/1.2/spec.html#id2799784
          hasContent =
            allowBlockCollections && readBlockSequence(state, blockIndent)
        }
      }

      if (state.tag !== null && state.tag !== '!') {
        if (state.tag === '?') {
          // Implicit resolving is not allowed for non-scalar types, and '?'
          // non-specific tag is only automatically assigned to plain scalars.
          //
          // We only need to check kind conformity in case user explicitly assigns '?'
          // tag, for example like this: "!<?> [0]"
          //
          if (state.result !== null && state.kind !== 'scalar') {
            throwError(
              state,
              'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
                state.kind +
                '"'
            )
          }

          for (
            typeIndex = 0, typeQuantity = state.implicitTypes.length;
            typeIndex < typeQuantity;
            typeIndex += 1
          ) {
            type = state.implicitTypes[typeIndex]

            if (type.resolve(state.result)) {
              // `state.result` updated in resolver if matched
              state.result = type.construct(state.result)
              state.tag = type.tag
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result
              }
              break
            }
          }
        } else if (
          _hasOwnProperty.call(
            state.typeMap[state.kind || 'fallback'],
            state.tag
          )
        ) {
          type = state.typeMap[state.kind || 'fallback'][state.tag]

          if (state.result !== null && type.kind !== state.kind) {
            throwError(
              state,
              'unacceptable node kind for !<' +
                state.tag +
                '> tag; it should be "' +
                type.kind +
                '", not "' +
                state.kind +
                '"'
            )
          }

          if (!type.resolve(state.result)) {
            // `state.result` updated in resolver if matched
            throwError(
              state,
              'cannot resolve a node with !<' + state.tag + '> explicit tag'
            )
          } else {
            state.result = type.construct(state.result)
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result
            }
          }
        } else {
          throwError(state, 'unknown tag !<' + state.tag + '>')
        }
      }

      if (state.listener !== null) {
        state.listener('close', state)
      }
      return state.tag !== null || state.anchor !== null || hasContent
    }

    function readDocument(state) {
      var documentStart = state.position,
        _position,
        directiveName,
        directiveArgs,
        hasDirectives = false,
        ch

      state.version = null
      state.checkLineBreaks = state.legacy
      state.tagMap = {}
      state.anchorMap = {}

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1)

        ch = state.input.charCodeAt(state.position)

        if (state.lineIndent > 0 || ch !== 0x25 /* % */) {
          break
        }

        hasDirectives = true
        ch = state.input.charCodeAt(++state.position)
        _position = state.position

        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position)
        }

        directiveName = state.input.slice(_position, state.position)
        directiveArgs = []

        if (directiveName.length < 1) {
          throwError(
            state,
            'directive name must not be less than one character in length'
          )
        }

        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position)
          }

          if (ch === 0x23 /* # */) {
            do {
              ch = state.input.charCodeAt(++state.position)
            } while (ch !== 0 && !is_EOL(ch))
            break
          }

          if (is_EOL(ch)) break

          _position = state.position

          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position)
          }

          directiveArgs.push(state.input.slice(_position, state.position))
        }

        if (ch !== 0) readLineBreak(state)

        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs)
        } else {
          throwWarning(
            state,
            'unknown document directive "' + directiveName + '"'
          )
        }
      }

      skipSeparationSpace(state, true, -1)

      if (
        state.lineIndent === 0 &&
        state.input.charCodeAt(state.position) === 0x2d /* - */ &&
        state.input.charCodeAt(state.position + 1) === 0x2d /* - */ &&
        state.input.charCodeAt(state.position + 2) === 0x2d /* - */
      ) {
        state.position += 3
        skipSeparationSpace(state, true, -1)
      } else if (hasDirectives) {
        throwError(state, 'directives end mark is expected')
      }

      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true)
      skipSeparationSpace(state, true, -1)

      if (
        state.checkLineBreaks &&
        PATTERN_NON_ASCII_LINE_BREAKS.test(
          state.input.slice(documentStart, state.position)
        )
      ) {
        throwWarning(state, 'non-ASCII line breaks are interpreted as content')
      }

      state.documents.push(state.result)

      if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 0x2e /* . */) {
          state.position += 3
          skipSeparationSpace(state, true, -1)
        }
        return
      }

      if (state.position < state.length - 1) {
        throwError(
          state,
          'end of the stream or a document separator is expected'
        )
      } else {
        return
      }
    }

    function loadDocuments(input, options) {
      input = String(input)
      options = options || {}

      if (input.length !== 0) {
        // Add tailing `\n` if not exists
        if (
          input.charCodeAt(input.length - 1) !== 0x0a /* LF */ &&
          input.charCodeAt(input.length - 1) !== 0x0d /* CR */
        ) {
          input += '\n'
        }

        // Strip BOM
        if (input.charCodeAt(0) === 0xfeff) {
          input = input.slice(1)
        }
      }

      var state = new State(input, options)

      var nullpos = input.indexOf('\0')

      if (nullpos !== -1) {
        state.position = nullpos
        throwError(state, 'null byte is not allowed in input')
      }

      // Use 0 as string terminator. That significantly simplifies bounds check.
      state.input += '\0'

      while (state.input.charCodeAt(state.position) === 0x20 /* Space */) {
        state.lineIndent += 1
        state.position += 1
      }

      while (state.position < state.length - 1) {
        readDocument(state)
      }

      return state.documents
    }

    function loadAll(input, iterator, options) {
      if (
        iterator !== null &&
        typeof iterator === 'object' &&
        typeof options === 'undefined'
      ) {
        options = iterator
        iterator = null
      }

      var documents = loadDocuments(input, options)

      if (typeof iterator !== 'function') {
        return documents
      }

      for (
        var index = 0, length = documents.length;
        index < length;
        index += 1
      ) {
        iterator(documents[index])
      }
    }

    function load(input, options) {
      var documents = loadDocuments(input, options)

      if (documents.length === 0) {
        /*eslint-disable no-undefined*/
        return undefined
      } else if (documents.length === 1) {
        return documents[0]
      }
      throw new YAMLException(
        'expected a single document in the stream, but found more'
      )
    }

    function safeLoadAll(input, iterator, options) {
      if (
        typeof iterator === 'object' &&
        iterator !== null &&
        typeof options === 'undefined'
      ) {
        options = iterator
        iterator = null
      }

      return loadAll(
        input,
        iterator,
        common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
      )
    }

    function safeLoad(input, options) {
      return load(
        input,
        common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
      )
    }

    module.exports.loadAll = loadAll
    module.exports.load = load
    module.exports.safeLoadAll = safeLoadAll
    module.exports.safeLoad = safeLoad

    /***/
  },

  /***/ 5426: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var common = __nccwpck_require__(9136)

    function Mark(name, buffer, position, line, column) {
      this.name = name
      this.buffer = buffer
      this.position = position
      this.line = line
      this.column = column
    }

    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet

      if (!this.buffer) return null

      indent = indent || 4
      maxLength = maxLength || 75

      head = ''
      start = this.position

      while (
        start > 0 &&
        '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1
      ) {
        start -= 1
        if (this.position - start > maxLength / 2 - 1) {
          head = ' ... '
          start += 5
          break
        }
      }

      tail = ''
      end = this.position

      while (
        end < this.buffer.length &&
        '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1
      ) {
        end += 1
        if (end - this.position > maxLength / 2 - 1) {
          tail = ' ... '
          end -= 5
          break
        }
      }

      snippet = this.buffer.slice(start, end)

      return (
        common.repeat(' ', indent) +
        head +
        snippet +
        tail +
        '\n' +
        common.repeat(' ', indent + this.position - start + head.length) +
        '^'
      )
    }

    Mark.prototype.toString = function toString(compact) {
      var snippet,
        where = ''

      if (this.name) {
        where += 'in "' + this.name + '" '
      }

      where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1)

      if (!compact) {
        snippet = this.getSnippet()

        if (snippet) {
          where += ':\n' + snippet
        }
      }

      return where
    }

    module.exports = Mark

    /***/
  },

  /***/ 6514: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*eslint-disable max-len*/

    var common = __nccwpck_require__(9136)
    var YAMLException = __nccwpck_require__(5199)
    var Type = __nccwpck_require__(967)

    function compileList(schema, name, result) {
      var exclude = []

      schema.include.forEach(function (includedSchema) {
        result = compileList(includedSchema, name, result)
      })

      schema[name].forEach(function (currentType) {
        result.forEach(function (previousType, previousIndex) {
          if (
            previousType.tag === currentType.tag &&
            previousType.kind === currentType.kind
          ) {
            exclude.push(previousIndex)
          }
        })

        result.push(currentType)
      })

      return result.filter(function (type, index) {
        return exclude.indexOf(index) === -1
      })
    }

    function compileMap(/* lists... */) {
      var result = {
          scalar: {},
          sequence: {},
          mapping: {},
          fallback: {}
        },
        index,
        length

      function collectType(type) {
        result[type.kind][type.tag] = result['fallback'][type.tag] = type
      }

      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType)
      }
      return result
    }

    function Schema(definition) {
      this.include = definition.include || []
      this.implicit = definition.implicit || []
      this.explicit = definition.explicit || []

      this.implicit.forEach(function (type) {
        if (type.loadKind && type.loadKind !== 'scalar') {
          throw new YAMLException(
            'There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.'
          )
        }
      })

      this.compiledImplicit = compileList(this, 'implicit', [])
      this.compiledExplicit = compileList(this, 'explicit', [])
      this.compiledTypeMap = compileMap(
        this.compiledImplicit,
        this.compiledExplicit
      )
    }

    Schema.DEFAULT = null

    Schema.create = function createSchema() {
      var schemas, types

      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT
          types = arguments[0]
          break

        case 2:
          schemas = arguments[0]
          types = arguments[1]
          break

        default:
          throw new YAMLException(
            'Wrong number of arguments for Schema.create function'
          )
      }

      schemas = common.toArray(schemas)
      types = common.toArray(types)

      if (
        !schemas.every(function (schema) {
          return schema instanceof Schema
        })
      ) {
        throw new YAMLException(
          'Specified list of super schemas (or a single Schema object) contains a non-Schema object.'
        )
      }

      if (
        !types.every(function (type) {
          return type instanceof Type
        })
      ) {
        throw new YAMLException(
          'Specified list of YAML types (or a single Type object) contains a non-Type object.'
        )
      }

      return new Schema({
        include: schemas,
        explicit: types
      })
    }

    module.exports = Schema

    /***/
  },

  /***/ 2183: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    // Standard YAML's Core schema.
    // http://www.yaml.org/spec/1.2/spec.html#id2804923
    //
    // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
    // So, Core schema has no distinctions from JSON schema is JS-YAML.

    var Schema = __nccwpck_require__(6514)

    module.exports = new Schema({
      include: [__nccwpck_require__(1571)]
    })

    /***/
  },

  /***/ 6874: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    // JS-YAML's default schema for `load` function.
    // It is not described in the YAML specification.
    //
    // This schema is based on JS-YAML's default safe schema and includes
    // JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
    //
    // Also this schema is used as default base schema at `Schema.create` function.

    var Schema = __nccwpck_require__(6514)

    module.exports = Schema.DEFAULT = new Schema({
      include: [__nccwpck_require__(8949)],
      explicit: [
        __nccwpck_require__(5914),
        __nccwpck_require__(9242),
        __nccwpck_require__(7278)
      ]
    })

    /***/
  },

  /***/ 8949: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    // JS-YAML's default schema for `safeLoad` function.
    // It is not described in the YAML specification.
    //
    // This schema is based on standard YAML's Core schema and includes most of
    // extra types described at YAML tag repository. (http://yaml.org/type/)

    var Schema = __nccwpck_require__(6514)

    module.exports = new Schema({
      include: [__nccwpck_require__(2183)],
      implicit: [__nccwpck_require__(3714), __nccwpck_require__(1393)],
      explicit: [
        __nccwpck_require__(2551),
        __nccwpck_require__(6668),
        __nccwpck_require__(6039),
        __nccwpck_require__(9237)
      ]
    })

    /***/
  },

  /***/ 6037: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    // Standard YAML's Failsafe schema.
    // http://www.yaml.org/spec/1.2/spec.html#id2802346

    var Schema = __nccwpck_require__(6514)

    module.exports = new Schema({
      explicit: [
        __nccwpck_require__(2672),
        __nccwpck_require__(5490),
        __nccwpck_require__(1173)
      ]
    })

    /***/
  },

  /***/ 1571: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    // Standard YAML's JSON schema.
    // http://www.yaml.org/spec/1.2/spec.html#id2803231
    //
    // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
    // So, this schema is not such strict as defined in the YAML specification.
    // It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.

    var Schema = __nccwpck_require__(6514)

    module.exports = new Schema({
      include: [__nccwpck_require__(6037)],
      implicit: [
        __nccwpck_require__(2671),
        __nccwpck_require__(4675),
        __nccwpck_require__(9963),
        __nccwpck_require__(5564)
      ]
    })

    /***/
  },

  /***/ 967: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var YAMLException = __nccwpck_require__(5199)

    var TYPE_CONSTRUCTOR_OPTIONS = [
      'kind',
      'resolve',
      'construct',
      'instanceOf',
      'predicate',
      'represent',
      'defaultStyle',
      'styleAliases'
    ]

    var YAML_NODE_KINDS = ['scalar', 'sequence', 'mapping']

    function compileStyleAliases(map) {
      var result = {}

      if (map !== null) {
        Object.keys(map).forEach(function (style) {
          map[style].forEach(function (alias) {
            result[String(alias)] = style
          })
        })
      }

      return result
    }

    function Type(tag, options) {
      options = options || {}

      Object.keys(options).forEach(function (name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException(
            'Unknown option "' +
              name +
              '" is met in definition of "' +
              tag +
              '" YAML type.'
          )
        }
      })

      // TODO: Add tag format check.
      this.tag = tag
      this.kind = options['kind'] || null
      this.resolve =
        options['resolve'] ||
        function () {
          return true
        }
      this.construct =
        options['construct'] ||
        function (data) {
          return data
        }
      this.instanceOf = options['instanceOf'] || null
      this.predicate = options['predicate'] || null
      this.represent = options['represent'] || null
      this.defaultStyle = options['defaultStyle'] || null
      this.styleAliases = compileStyleAliases(options['styleAliases'] || null)

      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException(
          'Unknown kind "' +
            this.kind +
            '" is specified for "' +
            tag +
            '" YAML type.'
        )
      }
    }

    module.exports = Type

    /***/
  },

  /***/ 2551: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*eslint-disable no-bitwise*/

    var NodeBuffer

    try {
      // A trick for browserified version, to not include `Buffer` shim
      var _require = require
      NodeBuffer = _require('buffer').Buffer
    } catch (__) {}

    var Type = __nccwpck_require__(967)

    // [ 64, 65, 66 ] -> [ padding, CR, LF ]
    var BASE64_MAP =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r'

    function resolveYamlBinary(data) {
      if (data === null) return false

      var code,
        idx,
        bitlen = 0,
        max = data.length,
        map = BASE64_MAP

      // Convert one by one.
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx))

        // Skip CR/LF
        if (code > 64) continue

        // Fail on illegal characters
        if (code < 0) return false

        bitlen += 6
      }

      // If there are any bits left, source was corrupted
      return bitlen % 8 === 0
    }

    function constructYamlBinary(data) {
      var idx,
        tailbits,
        input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
        max = input.length,
        map = BASE64_MAP,
        bits = 0,
        result = []

      // Collect by 6*4 bits (3 bytes)

      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push((bits >> 16) & 0xff)
          result.push((bits >> 8) & 0xff)
          result.push(bits & 0xff)
        }

        bits = (bits << 6) | map.indexOf(input.charAt(idx))
      }

      // Dump tail

      tailbits = (max % 4) * 6

      if (tailbits === 0) {
        result.push((bits >> 16) & 0xff)
        result.push((bits >> 8) & 0xff)
        result.push(bits & 0xff)
      } else if (tailbits === 18) {
        result.push((bits >> 10) & 0xff)
        result.push((bits >> 2) & 0xff)
      } else if (tailbits === 12) {
        result.push((bits >> 4) & 0xff)
      }

      // Wrap into Buffer for NodeJS and leave Array for browser
      if (NodeBuffer) {
        // Support node 6.+ Buffer API when available
        return NodeBuffer.from
          ? NodeBuffer.from(result)
          : new NodeBuffer(result)
      }

      return result
    }

    function representYamlBinary(object /*, style*/) {
      var result = '',
        bits = 0,
        idx,
        tail,
        max = object.length,
        map = BASE64_MAP

      // Convert every three bytes to 4 ASCII characters.

      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[(bits >> 18) & 0x3f]
          result += map[(bits >> 12) & 0x3f]
          result += map[(bits >> 6) & 0x3f]
          result += map[bits & 0x3f]
        }

        bits = (bits << 8) + object[idx]
      }

      // Dump tail

      tail = max % 3

      if (tail === 0) {
        result += map[(bits >> 18) & 0x3f]
        result += map[(bits >> 12) & 0x3f]
        result += map[(bits >> 6) & 0x3f]
        result += map[bits & 0x3f]
      } else if (tail === 2) {
        result += map[(bits >> 10) & 0x3f]
        result += map[(bits >> 4) & 0x3f]
        result += map[(bits << 2) & 0x3f]
        result += map[64]
      } else if (tail === 1) {
        result += map[(bits >> 2) & 0x3f]
        result += map[(bits << 4) & 0x3f]
        result += map[64]
        result += map[64]
      }

      return result
    }

    function isBinary(object) {
      return NodeBuffer && NodeBuffer.isBuffer(object)
    }

    module.exports = new Type('tag:yaml.org,2002:binary', {
      kind: 'scalar',
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    })

    /***/
  },

  /***/ 4675: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    function resolveYamlBoolean(data) {
      if (data === null) return false

      var max = data.length

      return (
        (max === 4 &&
          (data === 'true' || data === 'True' || data === 'TRUE')) ||
        (max === 5 &&
          (data === 'false' || data === 'False' || data === 'FALSE'))
      )
    }

    function constructYamlBoolean(data) {
      return data === 'true' || data === 'True' || data === 'TRUE'
    }

    function isBoolean(object) {
      return Object.prototype.toString.call(object) === '[object Boolean]'
    }

    module.exports = new Type('tag:yaml.org,2002:bool', {
      kind: 'scalar',
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function (object) {
          return object ? 'true' : 'false'
        },
        uppercase: function (object) {
          return object ? 'TRUE' : 'FALSE'
        },
        camelcase: function (object) {
          return object ? 'True' : 'False'
        }
      },
      defaultStyle: 'lowercase'
    })

    /***/
  },

  /***/ 5564: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var common = __nccwpck_require__(9136)
    var Type = __nccwpck_require__(967)

    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
        // .2e4, .2
        // special case, seems not from spec
        '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
        // 20:59
        '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
        // .inf
        '|[-+]?\\.(?:inf|Inf|INF)' +
        // .nan
        '|\\.(?:nan|NaN|NAN))$'
    )

    function resolveYamlFloat(data) {
      if (data === null) return false

      if (
        !YAML_FLOAT_PATTERN.test(data) ||
        // Quick hack to not allow integers end with `_`
        // Probably should update regexp & check speed
        data[data.length - 1] === '_'
      ) {
        return false
      }

      return true
    }

    function constructYamlFloat(data) {
      var value, sign, base, digits

      value = data.replace(/_/g, '').toLowerCase()
      sign = value[0] === '-' ? -1 : 1
      digits = []

      if ('+-'.indexOf(value[0]) >= 0) {
        value = value.slice(1)
      }

      if (value === '.inf') {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY
      } else if (value === '.nan') {
        return NaN
      } else if (value.indexOf(':') >= 0) {
        value.split(':').forEach(function (v) {
          digits.unshift(parseFloat(v, 10))
        })

        value = 0.0
        base = 1

        digits.forEach(function (d) {
          value += d * base
          base *= 60
        })

        return sign * value
      }
      return sign * parseFloat(value, 10)
    }

    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/

    function representYamlFloat(object, style) {
      var res

      if (isNaN(object)) {
        switch (style) {
          case 'lowercase':
            return '.nan'
          case 'uppercase':
            return '.NAN'
          case 'camelcase':
            return '.NaN'
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case 'lowercase':
            return '.inf'
          case 'uppercase':
            return '.INF'
          case 'camelcase':
            return '.Inf'
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case 'lowercase':
            return '-.inf'
          case 'uppercase':
            return '-.INF'
          case 'camelcase':
            return '-.Inf'
        }
      } else if (common.isNegativeZero(object)) {
        return '-0.0'
      }

      res = object.toString(10)

      // JS stringifier can build scientific format without dots: 5e-100,
      // while YAML requres dot: 5.e-100. Fix it with simple hack

      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res
    }

    function isFloat(object) {
      return (
        Object.prototype.toString.call(object) === '[object Number]' &&
        (object % 1 !== 0 || common.isNegativeZero(object))
      )
    }

    module.exports = new Type('tag:yaml.org,2002:float', {
      kind: 'scalar',
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: 'lowercase'
    })

    /***/
  },

  /***/ 9963: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var common = __nccwpck_require__(9136)
    var Type = __nccwpck_require__(967)

    function isHexCode(c) {
      return (
        (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) ||
        (0x41 /* A */ <= c && c <= 0x46 /* F */) ||
        (0x61 /* a */ <= c && c <= 0x66 /* f */)
      )
    }

    function isOctCode(c) {
      return 0x30 /* 0 */ <= c && c <= 0x37 /* 7 */
    }

    function isDecCode(c) {
      return 0x30 /* 0 */ <= c && c <= 0x39 /* 9 */
    }

    function resolveYamlInteger(data) {
      if (data === null) return false

      var max = data.length,
        index = 0,
        hasDigits = false,
        ch

      if (!max) return false

      ch = data[index]

      // sign
      if (ch === '-' || ch === '+') {
        ch = data[++index]
      }

      if (ch === '0') {
        // 0
        if (index + 1 === max) return true
        ch = data[++index]

        // base 2, base 8, base 16

        if (ch === 'b') {
          // base 2
          index++

          for (; index < max; index++) {
            ch = data[index]
            if (ch === '_') continue
            if (ch !== '0' && ch !== '1') return false
            hasDigits = true
          }
          return hasDigits && ch !== '_'
        }

        if (ch === 'x') {
          // base 16
          index++

          for (; index < max; index++) {
            ch = data[index]
            if (ch === '_') continue
            if (!isHexCode(data.charCodeAt(index))) return false
            hasDigits = true
          }
          return hasDigits && ch !== '_'
        }

        // base 8
        for (; index < max; index++) {
          ch = data[index]
          if (ch === '_') continue
          if (!isOctCode(data.charCodeAt(index))) return false
          hasDigits = true
        }
        return hasDigits && ch !== '_'
      }

      // base 10 (except 0) or base 60

      // value should not start with `_`;
      if (ch === '_') return false

      for (; index < max; index++) {
        ch = data[index]
        if (ch === '_') continue
        if (ch === ':') break
        if (!isDecCode(data.charCodeAt(index))) {
          return false
        }
        hasDigits = true
      }

      // Should have digits and should not end with `_`
      if (!hasDigits || ch === '_') return false

      // if !base60 - done;
      if (ch !== ':') return true

      // base60 almost not used, no needs to optimize
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index))
    }

    function constructYamlInteger(data) {
      var value = data,
        sign = 1,
        ch,
        base,
        digits = []

      if (value.indexOf('_') !== -1) {
        value = value.replace(/_/g, '')
      }

      ch = value[0]

      if (ch === '-' || ch === '+') {
        if (ch === '-') sign = -1
        value = value.slice(1)
        ch = value[0]
      }

      if (value === '0') return 0

      if (ch === '0') {
        if (value[1] === 'b') return sign * parseInt(value.slice(2), 2)
        if (value[1] === 'x') return sign * parseInt(value, 16)
        return sign * parseInt(value, 8)
      }

      if (value.indexOf(':') !== -1) {
        value.split(':').forEach(function (v) {
          digits.unshift(parseInt(v, 10))
        })

        value = 0
        base = 1

        digits.forEach(function (d) {
          value += d * base
          base *= 60
        })

        return sign * value
      }

      return sign * parseInt(value, 10)
    }

    function isInteger(object) {
      return (
        Object.prototype.toString.call(object) === '[object Number]' &&
        object % 1 === 0 &&
        !common.isNegativeZero(object)
      )
    }

    module.exports = new Type('tag:yaml.org,2002:int', {
      kind: 'scalar',
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function (obj) {
          return obj >= 0
            ? '0b' + obj.toString(2)
            : '-0b' + obj.toString(2).slice(1)
        },
        octal: function (obj) {
          return obj >= 0
            ? '0' + obj.toString(8)
            : '-0' + obj.toString(8).slice(1)
        },
        decimal: function (obj) {
          return obj.toString(10)
        },
        /* eslint-disable max-len */
        hexadecimal: function (obj) {
          return obj >= 0
            ? '0x' + obj.toString(16).toUpperCase()
            : '-0x' + obj.toString(16).toUpperCase().slice(1)
        }
      },
      defaultStyle: 'decimal',
      styleAliases: {
        binary: [2, 'bin'],
        octal: [8, 'oct'],
        decimal: [10, 'dec'],
        hexadecimal: [16, 'hex']
      }
    })

    /***/
  },

  /***/ 7278: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var esprima

    // Browserified version does not have esprima
    //
    // 1. For node.js just require module as deps
    // 2. For browser try to require mudule via external AMD system.
    //    If not found - try to fallback to window.esprima. If not
    //    found too - then fail to parse.
    //
    try {
      // workaround to exclude package from browserify list.
      var _require = require
      esprima = _require('esprima')
    } catch (_) {
      /* eslint-disable no-redeclare */
      /* global window */
      if (typeof window !== 'undefined') esprima = window.esprima
    }

    var Type = __nccwpck_require__(967)

    function resolveJavascriptFunction(data) {
      if (data === null) return false

      try {
        var source = '(' + data + ')',
          ast = esprima.parse(source, { range: true })

        if (
          ast.type !== 'Program' ||
          ast.body.length !== 1 ||
          ast.body[0].type !== 'ExpressionStatement' ||
          (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
            ast.body[0].expression.type !== 'FunctionExpression')
        ) {
          return false
        }

        return true
      } catch (err) {
        return false
      }
    }

    function constructJavascriptFunction(data) {
      /*jslint evil:true*/

      var source = '(' + data + ')',
        ast = esprima.parse(source, { range: true }),
        params = [],
        body

      if (
        ast.type !== 'Program' ||
        ast.body.length !== 1 ||
        ast.body[0].type !== 'ExpressionStatement' ||
        (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
          ast.body[0].expression.type !== 'FunctionExpression')
      ) {
        throw new Error('Failed to resolve function')
      }

      ast.body[0].expression.params.forEach(function (param) {
        params.push(param.name)
      })

      body = ast.body[0].expression.body.range

      // Esprima's ranges include the first '{' and the last '}' characters on
      // function expressions. So cut them out.
      if (ast.body[0].expression.body.type === 'BlockStatement') {
        /*eslint-disable no-new-func*/
        return new Function(params, source.slice(body[0] + 1, body[1] - 1))
      }
      // ES6 arrow functions can omit the BlockStatement. In that case, just return
      // the body.
      /*eslint-disable no-new-func*/
      return new Function(params, 'return ' + source.slice(body[0], body[1]))
    }

    function representJavascriptFunction(object /*, style*/) {
      return object.toString()
    }

    function isFunction(object) {
      return Object.prototype.toString.call(object) === '[object Function]'
    }

    module.exports = new Type('tag:yaml.org,2002:js/function', {
      kind: 'scalar',
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    })

    /***/
  },

  /***/ 9242: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    function resolveJavascriptRegExp(data) {
      if (data === null) return false
      if (data.length === 0) return false

      var regexp = data,
        tail = /\/([gim]*)$/.exec(data),
        modifiers = ''

      // if regexp starts with '/' it can have modifiers and must be properly closed
      // `/foo/gim` - modifiers tail can be maximum 3 chars
      if (regexp[0] === '/') {
        if (tail) modifiers = tail[1]

        if (modifiers.length > 3) return false
        // if expression starts with /, is should be properly terminated
        if (regexp[regexp.length - modifiers.length - 1] !== '/') return false
      }

      return true
    }

    function constructJavascriptRegExp(data) {
      var regexp = data,
        tail = /\/([gim]*)$/.exec(data),
        modifiers = ''

      // `/foo/gim` - tail can be maximum 4 chars
      if (regexp[0] === '/') {
        if (tail) modifiers = tail[1]
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1)
      }

      return new RegExp(regexp, modifiers)
    }

    function representJavascriptRegExp(object /*, style*/) {
      var result = '/' + object.source + '/'

      if (object.global) result += 'g'
      if (object.multiline) result += 'm'
      if (object.ignoreCase) result += 'i'

      return result
    }

    function isRegExp(object) {
      return Object.prototype.toString.call(object) === '[object RegExp]'
    }

    module.exports = new Type('tag:yaml.org,2002:js/regexp', {
      kind: 'scalar',
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    })

    /***/
  },

  /***/ 5914: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    function resolveJavascriptUndefined() {
      return true
    }

    function constructJavascriptUndefined() {
      /*eslint-disable no-undefined*/
      return undefined
    }

    function representJavascriptUndefined() {
      return ''
    }

    function isUndefined(object) {
      return typeof object === 'undefined'
    }

    module.exports = new Type('tag:yaml.org,2002:js/undefined', {
      kind: 'scalar',
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    })

    /***/
  },

  /***/ 1173: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    module.exports = new Type('tag:yaml.org,2002:map', {
      kind: 'mapping',
      construct: function (data) {
        return data !== null ? data : {}
      }
    })

    /***/
  },

  /***/ 1393: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    function resolveYamlMerge(data) {
      return data === '<<' || data === null
    }

    module.exports = new Type('tag:yaml.org,2002:merge', {
      kind: 'scalar',
      resolve: resolveYamlMerge
    })

    /***/
  },

  /***/ 2671: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    function resolveYamlNull(data) {
      if (data === null) return true

      var max = data.length

      return (
        (max === 1 && data === '~') ||
        (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'))
      )
    }

    function constructYamlNull() {
      return null
    }

    function isNull(object) {
      return object === null
    }

    module.exports = new Type('tag:yaml.org,2002:null', {
      kind: 'scalar',
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function () {
          return '~'
        },
        lowercase: function () {
          return 'null'
        },
        uppercase: function () {
          return 'NULL'
        },
        camelcase: function () {
          return 'Null'
        }
      },
      defaultStyle: 'lowercase'
    })

    /***/
  },

  /***/ 6668: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    var _hasOwnProperty = Object.prototype.hasOwnProperty
    var _toString = Object.prototype.toString

    function resolveYamlOmap(data) {
      if (data === null) return true

      var objectKeys = [],
        index,
        length,
        pair,
        pairKey,
        pairHasKey,
        object = data

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index]
        pairHasKey = false

        if (_toString.call(pair) !== '[object Object]') return false

        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey) pairHasKey = true
            else return false
          }
        }

        if (!pairHasKey) return false

        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey)
        else return false
      }

      return true
    }

    function constructYamlOmap(data) {
      return data !== null ? data : []
    }

    module.exports = new Type('tag:yaml.org,2002:omap', {
      kind: 'sequence',
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    })

    /***/
  },

  /***/ 6039: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    var _toString = Object.prototype.toString

    function resolveYamlPairs(data) {
      if (data === null) return true

      var index,
        length,
        pair,
        keys,
        result,
        object = data

      result = new Array(object.length)

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index]

        if (_toString.call(pair) !== '[object Object]') return false

        keys = Object.keys(pair)

        if (keys.length !== 1) return false

        result[index] = [keys[0], pair[keys[0]]]
      }

      return true
    }

    function constructYamlPairs(data) {
      if (data === null) return []

      var index,
        length,
        pair,
        keys,
        result,
        object = data

      result = new Array(object.length)

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index]

        keys = Object.keys(pair)

        result[index] = [keys[0], pair[keys[0]]]
      }

      return result
    }

    module.exports = new Type('tag:yaml.org,2002:pairs', {
      kind: 'sequence',
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    })

    /***/
  },

  /***/ 5490: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    module.exports = new Type('tag:yaml.org,2002:seq', {
      kind: 'sequence',
      construct: function (data) {
        return data !== null ? data : []
      }
    })

    /***/
  },

  /***/ 9237: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    var _hasOwnProperty = Object.prototype.hasOwnProperty

    function resolveYamlSet(data) {
      if (data === null) return true

      var key,
        object = data

      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null) return false
        }
      }

      return true
    }

    function constructYamlSet(data) {
      return data !== null ? data : {}
    }

    module.exports = new Type('tag:yaml.org,2002:set', {
      kind: 'mapping',
      resolve: resolveYamlSet,
      construct: constructYamlSet
    })

    /***/
  },

  /***/ 2672: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    module.exports = new Type('tag:yaml.org,2002:str', {
      kind: 'scalar',
      construct: function (data) {
        return data !== null ? data : ''
      }
    })

    /***/
  },

  /***/ 3714: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Type = __nccwpck_require__(967)

    var YAML_DATE_REGEXP = new RegExp(
      '^([0-9][0-9][0-9][0-9])' + // [1] year
        '-([0-9][0-9])' + // [2] month
        '-([0-9][0-9])$'
    ) // [3] day

    var YAML_TIMESTAMP_REGEXP = new RegExp(
      '^([0-9][0-9][0-9][0-9])' + // [1] year
        '-([0-9][0-9]?)' + // [2] month
        '-([0-9][0-9]?)' + // [3] day
        '(?:[Tt]|[ \\t]+)' + // ...
        '([0-9][0-9]?)' + // [4] hour
        ':([0-9][0-9])' + // [5] minute
        ':([0-9][0-9])' + // [6] second
        '(?:\\.([0-9]*))?' + // [7] fraction
        '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
        '(?::([0-9][0-9]))?))?$'
    ) // [11] tz_minute

    function resolveYamlTimestamp(data) {
      if (data === null) return false
      if (YAML_DATE_REGEXP.exec(data) !== null) return true
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true
      return false
    }

    function constructYamlTimestamp(data) {
      var match,
        year,
        month,
        day,
        hour,
        minute,
        second,
        fraction = 0,
        delta = null,
        tz_hour,
        tz_minute,
        date

      match = YAML_DATE_REGEXP.exec(data)
      if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data)

      if (match === null) throw new Error('Date resolve error')

      // match: [1] year [2] month [3] day

      year = +match[1]
      month = +match[2] - 1 // JS month starts with 0
      day = +match[3]

      if (!match[4]) {
        // no hour
        return new Date(Date.UTC(year, month, day))
      }

      // match: [4] hour [5] minute [6] second [7] fraction

      hour = +match[4]
      minute = +match[5]
      second = +match[6]

      if (match[7]) {
        fraction = match[7].slice(0, 3)
        while (fraction.length < 3) {
          // milli-seconds
          fraction += '0'
        }
        fraction = +fraction
      }

      // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

      if (match[9]) {
        tz_hour = +match[10]
        tz_minute = +(match[11] || 0)
        delta = (tz_hour * 60 + tz_minute) * 60000 // delta in mili-seconds
        if (match[9] === '-') delta = -delta
      }

      date = new Date(
        Date.UTC(year, month, day, hour, minute, second, fraction)
      )

      if (delta) date.setTime(date.getTime() - delta)

      return date
    }

    function representYamlTimestamp(object /*, style*/) {
      return object.toISOString()
    }

    module.exports = new Type('tag:yaml.org,2002:timestamp', {
      kind: 'scalar',
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    })

    /***/
  },

  /***/ 6961: /***/ (module) => {
    var toString = Object.prototype.toString

    module.exports = function kindOf(val) {
      if (val === void 0) return 'undefined'
      if (val === null) return 'null'

      var type = typeof val
      if (type === 'boolean') return 'boolean'
      if (type === 'string') return 'string'
      if (type === 'number') return 'number'
      if (type === 'symbol') return 'symbol'
      if (type === 'function') {
        return isGeneratorFn(val) ? 'generatorfunction' : 'function'
      }

      if (isArray(val)) return 'array'
      if (isBuffer(val)) return 'buffer'
      if (isArguments(val)) return 'arguments'
      if (isDate(val)) return 'date'
      if (isError(val)) return 'error'
      if (isRegexp(val)) return 'regexp'

      switch (ctorName(val)) {
        case 'Symbol':
          return 'symbol'
        case 'Promise':
          return 'promise'

        // Set, Map, WeakSet, WeakMap
        case 'WeakMap':
          return 'weakmap'
        case 'WeakSet':
          return 'weakset'
        case 'Map':
          return 'map'
        case 'Set':
          return 'set'

        // 8-bit typed arrays
        case 'Int8Array':
          return 'int8array'
        case 'Uint8Array':
          return 'uint8array'
        case 'Uint8ClampedArray':
          return 'uint8clampedarray'

        // 16-bit typed arrays
        case 'Int16Array':
          return 'int16array'
        case 'Uint16Array':
          return 'uint16array'

        // 32-bit typed arrays
        case 'Int32Array':
          return 'int32array'
        case 'Uint32Array':
          return 'uint32array'
        case 'Float32Array':
          return 'float32array'
        case 'Float64Array':
          return 'float64array'
      }

      if (isGeneratorObj(val)) {
        return 'generator'
      }

      // Non-plain objects
      type = toString.call(val)
      switch (type) {
        case '[object Object]':
          return 'object'
        // iterators
        case '[object Map Iterator]':
          return 'mapiterator'
        case '[object Set Iterator]':
          return 'setiterator'
        case '[object String Iterator]':
          return 'stringiterator'
        case '[object Array Iterator]':
          return 'arrayiterator'
      }

      // other
      return type.slice(8, -1).toLowerCase().replace(/\s/g, '')
    }

    function ctorName(val) {
      return typeof val.constructor === 'function' ? val.constructor.name : null
    }

    function isArray(val) {
      if (Array.isArray) return Array.isArray(val)
      return val instanceof Array
    }

    function isError(val) {
      return (
        val instanceof Error ||
        (typeof val.message === 'string' &&
          val.constructor &&
          typeof val.constructor.stackTraceLimit === 'number')
      )
    }

    function isDate(val) {
      if (val instanceof Date) return true
      return (
        typeof val.toDateString === 'function' &&
        typeof val.getDate === 'function' &&
        typeof val.setDate === 'function'
      )
    }

    function isRegexp(val) {
      if (val instanceof RegExp) return true
      return (
        typeof val.flags === 'string' &&
        typeof val.ignoreCase === 'boolean' &&
        typeof val.multiline === 'boolean' &&
        typeof val.global === 'boolean'
      )
    }

    function isGeneratorFn(name, val) {
      return ctorName(name) === 'GeneratorFunction'
    }

    function isGeneratorObj(val) {
      return (
        typeof val.throw === 'function' &&
        typeof val.return === 'function' &&
        typeof val.next === 'function'
      )
    }

    function isArguments(val) {
      try {
        if (
          typeof val.length === 'number' &&
          typeof val.callee === 'function'
        ) {
          return true
        }
      } catch (err) {
        if (err.message.indexOf('callee') !== -1) {
          return true
        }
      }
      return false
    }

    /**
     * If you need to support Safari 5-7 (8-10 yr-old browser),
     * take a look at https://github.com/feross/is-buffer
     */

    function isBuffer(val) {
      if (val.constructor && typeof val.constructor.isBuffer === 'function') {
        return val.constructor.isBuffer(val)
      }
      return false
    }

    /***/
  },

  /***/ 1857: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getNative = __nccwpck_require__(4479),
      root = __nccwpck_require__(9882)

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(root, 'DataView')

    module.exports = DataView

    /***/
  },

  /***/ 5902: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var hashClear = __nccwpck_require__(1789),
      hashDelete = __nccwpck_require__(712),
      hashGet = __nccwpck_require__(5395),
      hashHas = __nccwpck_require__(5232),
      hashSet = __nccwpck_require__(7320)

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length

      this.clear()
      while (++index < length) {
        var entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet

    module.exports = Hash

    /***/
  },

  /***/ 6608: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var listCacheClear = __nccwpck_require__(9792),
      listCacheDelete = __nccwpck_require__(7716),
      listCacheGet = __nccwpck_require__(5789),
      listCacheHas = __nccwpck_require__(9386),
      listCacheSet = __nccwpck_require__(7399)

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length

      this.clear()
      while (++index < length) {
        var entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet

    module.exports = ListCache

    /***/
  },

  /***/ 881: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getNative = __nccwpck_require__(4479),
      root = __nccwpck_require__(9882)

    /* Built-in method references that are verified to be native. */
    var Map = getNative(root, 'Map')

    module.exports = Map

    /***/
  },

  /***/ 938: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var mapCacheClear = __nccwpck_require__(1610),
      mapCacheDelete = __nccwpck_require__(6657),
      mapCacheGet = __nccwpck_require__(1372),
      mapCacheHas = __nccwpck_require__(609),
      mapCacheSet = __nccwpck_require__(5582)

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length

      this.clear()
      while (++index < length) {
        var entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet

    module.exports = MapCache

    /***/
  },

  /***/ 4671: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getNative = __nccwpck_require__(4479),
      root = __nccwpck_require__(9882)

    /* Built-in method references that are verified to be native. */
    var Promise = getNative(root, 'Promise')

    module.exports = Promise

    /***/
  },

  /***/ 5793: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getNative = __nccwpck_require__(4479),
      root = __nccwpck_require__(9882)

    /* Built-in method references that are verified to be native. */
    var Set = getNative(root, 'Set')

    module.exports = Set

    /***/
  },

  /***/ 2158: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var MapCache = __nccwpck_require__(938),
      setCacheAdd = __nccwpck_require__(6895),
      setCacheHas = __nccwpck_require__(804)

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
        length = values == null ? 0 : values.length

      this.__data__ = new MapCache()
      while (++index < length) {
        this.add(values[index])
      }
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd
    SetCache.prototype.has = setCacheHas

    module.exports = SetCache

    /***/
  },

  /***/ 5323: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var ListCache = __nccwpck_require__(6608),
      stackClear = __nccwpck_require__(2843),
      stackDelete = __nccwpck_require__(4717),
      stackGet = __nccwpck_require__(21),
      stackHas = __nccwpck_require__(3910),
      stackSet = __nccwpck_require__(9955)

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = (this.__data__ = new ListCache(entries))
      this.size = data.size
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear
    Stack.prototype['delete'] = stackDelete
    Stack.prototype.get = stackGet
    Stack.prototype.has = stackHas
    Stack.prototype.set = stackSet

    module.exports = Stack

    /***/
  },

  /***/ 9213: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var root = __nccwpck_require__(9882)

    /** Built-in value references. */
    var Symbol = root.Symbol

    module.exports = Symbol

    /***/
  },

  /***/ 3261: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var root = __nccwpck_require__(9882)

    /** Built-in value references. */
    var Uint8Array = root.Uint8Array

    module.exports = Uint8Array

    /***/
  },

  /***/ 3915: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getNative = __nccwpck_require__(4479),
      root = __nccwpck_require__(9882)

    /* Built-in method references that are verified to be native. */
    var WeakMap = getNative(root, 'WeakMap')

    module.exports = WeakMap

    /***/
  },

  /***/ 8388: /***/ (module) => {
    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = []

      while (++index < length) {
        var value = array[index]
        if (predicate(value, index, array)) {
          result[resIndex++] = value
        }
      }
      return result
    }

    module.exports = arrayFilter

    /***/
  },

  /***/ 2237: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseTimes = __nccwpck_require__(7765),
      isArguments = __nccwpck_require__(8495),
      isArray = __nccwpck_require__(4869),
      isBuffer = __nccwpck_require__(4190),
      isIndex = __nccwpck_require__(2936),
      isTypedArray = __nccwpck_require__(2496)

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length

      for (var key in value) {
        if (
          (inherited || hasOwnProperty.call(value, key)) &&
          !(
            skipIndexes &&
            // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == 'length' ||
              // Node.js 0.10 has enumerable non-index properties on buffers.
              (isBuff && (key == 'offset' || key == 'parent')) ||
              // PhantomJS 2 has enumerable non-index properties on typed arrays.
              (isType &&
                (key == 'buffer' ||
                  key == 'byteLength' ||
                  key == 'byteOffset')) ||
              // Skip index properties.
              isIndex(key, length))
          )
        ) {
          result.push(key)
        }
      }
      return result
    }

    module.exports = arrayLikeKeys

    /***/
  },

  /***/ 4356: /***/ (module) => {
    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length)

      while (++index < length) {
        result[index] = iteratee(array[index], index, array)
      }
      return result
    }

    module.exports = arrayMap

    /***/
  },

  /***/ 82: /***/ (module) => {
    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
        length = values.length,
        offset = array.length

      while (++index < length) {
        array[offset + index] = values[index]
      }
      return array
    }

    module.exports = arrayPush

    /***/
  },

  /***/ 8018: /***/ (module) => {
    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
        length = array == null ? 0 : array.length

      if (initAccum && length) {
        accumulator = array[++index]
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array)
      }
      return accumulator
    }

    module.exports = arrayReduce

    /***/
  },

  /***/ 9410: /***/ (module) => {
    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
        length = array == null ? 0 : array.length

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true
        }
      }
      return false
    }

    module.exports = arraySome

    /***/
  },

  /***/ 2187: /***/ (module) => {
    /**
     * Converts an ASCII `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function asciiToArray(string) {
      return string.split('')
    }

    module.exports = asciiToArray

    /***/
  },

  /***/ 2560: /***/ (module) => {
    /** Used to match words composed of alphanumeric characters. */
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

    /**
     * Splits an ASCII `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */
    function asciiWords(string) {
      return string.match(reAsciiWord) || []
    }

    module.exports = asciiWords

    /***/
  },

  /***/ 6752: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var eq = __nccwpck_require__(1901)

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length
      while (length--) {
        if (eq(array[length][0], key)) {
          return length
        }
      }
      return -1
    }

    module.exports = assocIndexOf

    /***/
  },

  /***/ 3868: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var defineProperty = __nccwpck_require__(416)

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          configurable: true,
          enumerable: true,
          value: value,
          writable: true
        })
      } else {
        object[key] = value
      }
    }

    module.exports = baseAssignValue

    /***/
  },

  /***/ 6588: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var createBaseFor = __nccwpck_require__(5709)

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor()

    module.exports = baseFor

    /***/
  },

  /***/ 5712: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseFor = __nccwpck_require__(6588),
      keys = __nccwpck_require__(7645)

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys)
    }

    module.exports = baseForOwn

    /***/
  },

  /***/ 5758: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var castPath = __nccwpck_require__(2688),
      toKey = __nccwpck_require__(9071)

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object)

      var index = 0,
        length = path.length

      while (object != null && index < length) {
        object = object[toKey(path[index++])]
      }
      return index && index == length ? object : undefined
    }

    module.exports = baseGet

    /***/
  },

  /***/ 5951: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var arrayPush = __nccwpck_require__(82),
      isArray = __nccwpck_require__(4869)

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object)
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
    }

    module.exports = baseGetAllKeys

    /***/
  },

  /***/ 7497: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Symbol = __nccwpck_require__(9213),
      getRawTag = __nccwpck_require__(923),
      objectToString = __nccwpck_require__(4200)

    /** `Object#toString` result references. */
    var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]'

    /** Built-in value references. */
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag
      }
      return symToStringTag && symToStringTag in Object(value)
        ? getRawTag(value)
        : objectToString(value)
    }

    module.exports = baseGetTag

    /***/
  },

  /***/ 351: /***/ (module) => {
    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key)
    }

    module.exports = baseHas

    /***/
  },

  /***/ 4129: /***/ (module) => {
    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object)
    }

    module.exports = baseHasIn

    /***/
  },

  /***/ 2177: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseGetTag = __nccwpck_require__(7497),
      isObjectLike = __nccwpck_require__(5926)

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]'

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag
    }

    module.exports = baseIsArguments

    /***/
  },

  /***/ 8494: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseIsEqualDeep = __nccwpck_require__(3987),
      isObjectLike = __nccwpck_require__(5926)

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true
      }
      if (
        value == null ||
        other == null ||
        (!isObjectLike(value) && !isObjectLike(other))
      ) {
        return value !== value && other !== other
      }
      return baseIsEqualDeep(
        value,
        other,
        bitmask,
        customizer,
        baseIsEqual,
        stack
      )
    }

    module.exports = baseIsEqual

    /***/
  },

  /***/ 3987: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Stack = __nccwpck_require__(5323),
      equalArrays = __nccwpck_require__(6305),
      equalByTag = __nccwpck_require__(9106),
      equalObjects = __nccwpck_require__(101),
      getTag = __nccwpck_require__(941),
      isArray = __nccwpck_require__(4869),
      isBuffer = __nccwpck_require__(4190),
      isTypedArray = __nccwpck_require__(2496)

    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]'

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(
      object,
      other,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other)

      objTag = objTag == argsTag ? objectTag : objTag
      othTag = othTag == argsTag ? objectTag : othTag

      var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false
        }
        objIsArr = true
        objIsObj = false
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack())
        return objIsArr || isTypedArray(object)
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(
              object,
              other,
              objTag,
              bitmask,
              customizer,
              equalFunc,
              stack
            )
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped =
            objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__')

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other

          stack || (stack = new Stack())
          return equalFunc(
            objUnwrapped,
            othUnwrapped,
            bitmask,
            customizer,
            stack
          )
        }
      }
      if (!isSameTag) {
        return false
      }
      stack || (stack = new Stack())
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack)
    }

    module.exports = baseIsEqualDeep

    /***/
  },

  /***/ 9124: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Stack = __nccwpck_require__(5323),
      baseIsEqual = __nccwpck_require__(8494)

    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
        length = index,
        noCustomizer = !customizer

      if (object == null) {
        return !length
      }
      object = Object(object)
      while (index--) {
        var data = matchData[index]
        if (
          noCustomizer && data[2]
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
        ) {
          return false
        }
      }
      while (++index < length) {
        data = matchData[index]
        var key = data[0],
          objValue = object[key],
          srcValue = data[1]

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false
          }
        } else {
          var stack = new Stack()
          if (customizer) {
            var result = customizer(
              objValue,
              srcValue,
              key,
              object,
              source,
              stack
            )
          }
          if (
            !(result === undefined
              ? baseIsEqual(
                  srcValue,
                  objValue,
                  COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
                  customizer,
                  stack
                )
              : result)
          ) {
            return false
          }
        }
      }
      return true
    }

    module.exports = baseIsMatch

    /***/
  },

  /***/ 411: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isFunction = __nccwpck_require__(7799),
      isMasked = __nccwpck_require__(9058),
      isObject = __nccwpck_require__(3334),
      toSource = __nccwpck_require__(6928)

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/

    /** Used for built-in method references. */
    var funcProto = Function.prototype,
      objectProto = Object.prototype

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /** Used to detect if a method is native. */
    var reIsNative = RegExp(
      '^' +
        funcToString
          .call(hasOwnProperty)
          .replace(reRegExpChar, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    )

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor
      return pattern.test(toSource(value))
    }

    module.exports = baseIsNative

    /***/
  },

  /***/ 1528: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseGetTag = __nccwpck_require__(7497),
      isLength = __nccwpck_require__(4530),
      isObjectLike = __nccwpck_require__(5926)

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]'

    var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]'

    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {}
    typedArrayTags[float32Tag] =
      typedArrayTags[float64Tag] =
      typedArrayTags[int8Tag] =
      typedArrayTags[int16Tag] =
      typedArrayTags[int32Tag] =
      typedArrayTags[uint8Tag] =
      typedArrayTags[uint8ClampedTag] =
      typedArrayTags[uint16Tag] =
      typedArrayTags[uint32Tag] =
        true
    typedArrayTags[argsTag] =
      typedArrayTags[arrayTag] =
      typedArrayTags[arrayBufferTag] =
      typedArrayTags[boolTag] =
      typedArrayTags[dataViewTag] =
      typedArrayTags[dateTag] =
      typedArrayTags[errorTag] =
      typedArrayTags[funcTag] =
      typedArrayTags[mapTag] =
      typedArrayTags[numberTag] =
      typedArrayTags[objectTag] =
      typedArrayTags[regexpTag] =
      typedArrayTags[setTag] =
      typedArrayTags[stringTag] =
      typedArrayTags[weakMapTag] =
        false

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return (
        isObjectLike(value) &&
        isLength(value.length) &&
        !!typedArrayTags[baseGetTag(value)]
      )
    }

    module.exports = baseIsTypedArray

    /***/
  },

  /***/ 427: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseMatches = __nccwpck_require__(599),
      baseMatchesProperty = __nccwpck_require__(7591),
      identity = __nccwpck_require__(9561),
      isArray = __nccwpck_require__(4869),
      property = __nccwpck_require__(7261)

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value
      }
      if (value == null) {
        return identity
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value)
      }
      return property(value)
    }

    module.exports = baseIteratee

    /***/
  },

  /***/ 7164: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isPrototype = __nccwpck_require__(10),
      nativeKeys = __nccwpck_require__(5778)

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object)
      }
      var result = []
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key)
        }
      }
      return result
    }

    module.exports = baseKeys

    /***/
  },

  /***/ 599: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseIsMatch = __nccwpck_require__(9124),
      getMatchData = __nccwpck_require__(2458),
      matchesStrictComparable = __nccwpck_require__(3509)

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source)
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1])
      }
      return function (object) {
        return object === source || baseIsMatch(object, source, matchData)
      }
    }

    module.exports = baseMatches

    /***/
  },

  /***/ 7591: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseIsEqual = __nccwpck_require__(8494),
      get = __nccwpck_require__(6908),
      hasIn = __nccwpck_require__(9409),
      isKey = __nccwpck_require__(9084),
      isStrictComparable = __nccwpck_require__(9789),
      matchesStrictComparable = __nccwpck_require__(3509),
      toKey = __nccwpck_require__(9071)

    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue)
      }
      return function (object) {
        var objValue = get(object, path)
        return objValue === undefined && objValue === srcValue
          ? hasIn(object, path)
          : baseIsEqual(
              srcValue,
              objValue,
              COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
            )
      }
    }

    module.exports = baseMatchesProperty

    /***/
  },

  /***/ 6829: /***/ (module) => {
    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function baseProperty(key) {
      return function (object) {
        return object == null ? undefined : object[key]
      }
    }

    module.exports = baseProperty

    /***/
  },

  /***/ 974: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseGet = __nccwpck_require__(5758)

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function (object) {
        return baseGet(object, path)
      }
    }

    module.exports = basePropertyDeep

    /***/
  },

  /***/ 6610: /***/ (module) => {
    /**
     * The base implementation of `_.propertyOf` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyOf(object) {
      return function (key) {
        return object == null ? undefined : object[key]
      }
    }

    module.exports = basePropertyOf

    /***/
  },

  /***/ 8758: /***/ (module) => {
    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
        length = array.length

      if (start < 0) {
        start = -start > length ? 0 : length + start
      }
      end = end > length ? length : end
      if (end < 0) {
        end += length
      }
      length = start > end ? 0 : (end - start) >>> 0
      start >>>= 0

      var result = Array(length)
      while (++index < length) {
        result[index] = array[index + start]
      }
      return result
    }

    module.exports = baseSlice

    /***/
  },

  /***/ 7765: /***/ (module) => {
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
        result = Array(n)

      while (++index < n) {
        result[index] = iteratee(index)
      }
      return result
    }

    module.exports = baseTimes

    /***/
  },

  /***/ 6792: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Symbol = __nccwpck_require__(9213),
      arrayMap = __nccwpck_require__(4356),
      isArray = __nccwpck_require__(4869),
      isSymbol = __nccwpck_require__(6403)

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + ''
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : ''
      }
      var result = value + ''
      return result == '0' && 1 / value == -INFINITY ? '-0' : result
    }

    module.exports = baseToString

    /***/
  },

  /***/ 9258: /***/ (module) => {
    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
      return function (value) {
        return func(value)
      }
    }

    module.exports = baseUnary

    /***/
  },

  /***/ 2675: /***/ (module) => {
    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
      return cache.has(key)
    }

    module.exports = cacheHas

    /***/
  },

  /***/ 2688: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isArray = __nccwpck_require__(4869),
      isKey = __nccwpck_require__(9084),
      stringToPath = __nccwpck_require__(1853),
      toString = __nccwpck_require__(2931)

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value))
    }

    module.exports = castPath

    /***/
  },

  /***/ 5557: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseSlice = __nccwpck_require__(8758)

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length
      end = end === undefined ? length : end
      return !start && end >= length ? array : baseSlice(array, start, end)
    }

    module.exports = castSlice

    /***/
  },

  /***/ 8380: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var root = __nccwpck_require__(9882)

    /** Used to detect overreaching core-js shims. */
    var coreJsData = root['__core-js_shared__']

    module.exports = coreJsData

    /***/
  },

  /***/ 5709: /***/ (module) => {
    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function (object, iteratee, keysFunc) {
        var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length

        while (length--) {
          var key = props[fromRight ? length : ++index]
          if (iteratee(iterable[key], key, iterable) === false) {
            break
          }
        }
        return object
      }
    }

    module.exports = createBaseFor

    /***/
  },

  /***/ 5898: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var castSlice = __nccwpck_require__(5557),
      hasUnicode = __nccwpck_require__(9489),
      stringToArray = __nccwpck_require__(1296),
      toString = __nccwpck_require__(2931)

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function (string) {
        string = toString(string)

        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined

        var chr = strSymbols ? strSymbols[0] : string.charAt(0)

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1)

        return chr[methodName]() + trailing
      }
    }

    module.exports = createCaseFirst

    /***/
  },

  /***/ 1543: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var arrayReduce = __nccwpck_require__(8018),
      deburr = __nccwpck_require__(833),
      words = __nccwpck_require__(6454)

    /** Used to compose unicode capture groups. */
    var rsApos = "['\u2019]"

    /** Used to match apostrophes. */
    var reApos = RegExp(rsApos, 'g')

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function (string) {
        return arrayReduce(
          words(deburr(string).replace(reApos, '')),
          callback,
          ''
        )
      }
    }

    module.exports = createCompounder

    /***/
  },

  /***/ 1683: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var basePropertyOf = __nccwpck_require__(6610)

    /** Used to map Latin Unicode letters to basic Latin letters. */
    var deburredLetters = {
      // Latin-1 Supplement block.
      '\xc0': 'A',
      '\xc1': 'A',
      '\xc2': 'A',
      '\xc3': 'A',
      '\xc4': 'A',
      '\xc5': 'A',
      '\xe0': 'a',
      '\xe1': 'a',
      '\xe2': 'a',
      '\xe3': 'a',
      '\xe4': 'a',
      '\xe5': 'a',
      '\xc7': 'C',
      '\xe7': 'c',
      '\xd0': 'D',
      '\xf0': 'd',
      '\xc8': 'E',
      '\xc9': 'E',
      '\xca': 'E',
      '\xcb': 'E',
      '\xe8': 'e',
      '\xe9': 'e',
      '\xea': 'e',
      '\xeb': 'e',
      '\xcc': 'I',
      '\xcd': 'I',
      '\xce': 'I',
      '\xcf': 'I',
      '\xec': 'i',
      '\xed': 'i',
      '\xee': 'i',
      '\xef': 'i',
      '\xd1': 'N',
      '\xf1': 'n',
      '\xd2': 'O',
      '\xd3': 'O',
      '\xd4': 'O',
      '\xd5': 'O',
      '\xd6': 'O',
      '\xd8': 'O',
      '\xf2': 'o',
      '\xf3': 'o',
      '\xf4': 'o',
      '\xf5': 'o',
      '\xf6': 'o',
      '\xf8': 'o',
      '\xd9': 'U',
      '\xda': 'U',
      '\xdb': 'U',
      '\xdc': 'U',
      '\xf9': 'u',
      '\xfa': 'u',
      '\xfb': 'u',
      '\xfc': 'u',
      '\xdd': 'Y',
      '\xfd': 'y',
      '\xff': 'y',
      '\xc6': 'Ae',
      '\xe6': 'ae',
      '\xde': 'Th',
      '\xfe': 'th',
      '\xdf': 'ss',
      // Latin Extended-A block.
      '\u0100': 'A',
      '\u0102': 'A',
      '\u0104': 'A',
      '\u0101': 'a',
      '\u0103': 'a',
      '\u0105': 'a',
      '\u0106': 'C',
      '\u0108': 'C',
      '\u010a': 'C',
      '\u010c': 'C',
      '\u0107': 'c',
      '\u0109': 'c',
      '\u010b': 'c',
      '\u010d': 'c',
      '\u010e': 'D',
      '\u0110': 'D',
      '\u010f': 'd',
      '\u0111': 'd',
      '\u0112': 'E',
      '\u0114': 'E',
      '\u0116': 'E',
      '\u0118': 'E',
      '\u011a': 'E',
      '\u0113': 'e',
      '\u0115': 'e',
      '\u0117': 'e',
      '\u0119': 'e',
      '\u011b': 'e',
      '\u011c': 'G',
      '\u011e': 'G',
      '\u0120': 'G',
      '\u0122': 'G',
      '\u011d': 'g',
      '\u011f': 'g',
      '\u0121': 'g',
      '\u0123': 'g',
      '\u0124': 'H',
      '\u0126': 'H',
      '\u0125': 'h',
      '\u0127': 'h',
      '\u0128': 'I',
      '\u012a': 'I',
      '\u012c': 'I',
      '\u012e': 'I',
      '\u0130': 'I',
      '\u0129': 'i',
      '\u012b': 'i',
      '\u012d': 'i',
      '\u012f': 'i',
      '\u0131': 'i',
      '\u0134': 'J',
      '\u0135': 'j',
      '\u0136': 'K',
      '\u0137': 'k',
      '\u0138': 'k',
      '\u0139': 'L',
      '\u013b': 'L',
      '\u013d': 'L',
      '\u013f': 'L',
      '\u0141': 'L',
      '\u013a': 'l',
      '\u013c': 'l',
      '\u013e': 'l',
      '\u0140': 'l',
      '\u0142': 'l',
      '\u0143': 'N',
      '\u0145': 'N',
      '\u0147': 'N',
      '\u014a': 'N',
      '\u0144': 'n',
      '\u0146': 'n',
      '\u0148': 'n',
      '\u014b': 'n',
      '\u014c': 'O',
      '\u014e': 'O',
      '\u0150': 'O',
      '\u014d': 'o',
      '\u014f': 'o',
      '\u0151': 'o',
      '\u0154': 'R',
      '\u0156': 'R',
      '\u0158': 'R',
      '\u0155': 'r',
      '\u0157': 'r',
      '\u0159': 'r',
      '\u015a': 'S',
      '\u015c': 'S',
      '\u015e': 'S',
      '\u0160': 'S',
      '\u015b': 's',
      '\u015d': 's',
      '\u015f': 's',
      '\u0161': 's',
      '\u0162': 'T',
      '\u0164': 'T',
      '\u0166': 'T',
      '\u0163': 't',
      '\u0165': 't',
      '\u0167': 't',
      '\u0168': 'U',
      '\u016a': 'U',
      '\u016c': 'U',
      '\u016e': 'U',
      '\u0170': 'U',
      '\u0172': 'U',
      '\u0169': 'u',
      '\u016b': 'u',
      '\u016d': 'u',
      '\u016f': 'u',
      '\u0171': 'u',
      '\u0173': 'u',
      '\u0174': 'W',
      '\u0175': 'w',
      '\u0176': 'Y',
      '\u0177': 'y',
      '\u0178': 'Y',
      '\u0179': 'Z',
      '\u017b': 'Z',
      '\u017d': 'Z',
      '\u017a': 'z',
      '\u017c': 'z',
      '\u017e': 'z',
      '\u0132': 'IJ',
      '\u0133': 'ij',
      '\u0152': 'Oe',
      '\u0153': 'oe',
      '\u0149': "'n",
      '\u017f': 's'
    }

    /**
     * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
     * letters to basic Latin letters.
     *
     * @private
     * @param {string} letter The matched letter to deburr.
     * @returns {string} Returns the deburred letter.
     */
    var deburrLetter = basePropertyOf(deburredLetters)

    module.exports = deburrLetter

    /***/
  },

  /***/ 416: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getNative = __nccwpck_require__(4479)

    var defineProperty = (function () {
      try {
        var func = getNative(Object, 'defineProperty')
        func({}, '', {})
        return func
      } catch (e) {}
    })()

    module.exports = defineProperty

    /***/
  },

  /***/ 6305: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var SetCache = __nccwpck_require__(2158),
      arraySome = __nccwpck_require__(9410),
      cacheHas = __nccwpck_require__(2675)

    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array)
      var othStacked = stack.get(other)
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array
      }
      var index = -1,
        result = true,
        seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined

      stack.set(array, other)
      stack.set(other, array)

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
          othValue = other[index]

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack)
        }
        if (compared !== undefined) {
          if (compared) {
            continue
          }
          result = false
          break
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (
            !arraySome(other, function (othValue, othIndex) {
              if (
                !cacheHas(seen, othIndex) &&
                (arrValue === othValue ||
                  equalFunc(arrValue, othValue, bitmask, customizer, stack))
              ) {
                return seen.push(othIndex)
              }
            })
          ) {
            result = false
            break
          }
        } else if (
          !(
            arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )
        ) {
          result = false
          break
        }
      }
      stack['delete'](array)
      stack['delete'](other)
      return result
    }

    module.exports = equalArrays

    /***/
  },

  /***/ 9106: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Symbol = __nccwpck_require__(9213),
      Uint8Array = __nccwpck_require__(3261),
      eq = __nccwpck_require__(1901),
      equalArrays = __nccwpck_require__(6305),
      mapToArray = __nccwpck_require__(5853),
      setToArray = __nccwpck_require__(9553)

    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2

    /** `Object#toString` result references. */
    var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]'

    var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]'

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(
      object,
      other,
      tag,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      switch (tag) {
        case dataViewTag:
          if (
            object.byteLength != other.byteLength ||
            object.byteOffset != other.byteOffset
          ) {
            return false
          }
          object = object.buffer
          other = other.buffer

        case arrayBufferTag:
          if (
            object.byteLength != other.byteLength ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))
          ) {
            return false
          }
          return true

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other)

        case errorTag:
          return object.name == other.name && object.message == other.message

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == other + ''

        case mapTag:
          var convert = mapToArray

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG
          convert || (convert = setToArray)

          if (object.size != other.size && !isPartial) {
            return false
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object)
          if (stacked) {
            return stacked == other
          }
          bitmask |= COMPARE_UNORDERED_FLAG

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other)
          var result = equalArrays(
            convert(object),
            convert(other),
            bitmask,
            customizer,
            equalFunc,
            stack
          )
          stack['delete'](object)
          return result

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other)
          }
      }
      return false
    }

    module.exports = equalByTag

    /***/
  },

  /***/ 101: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getAllKeys = __nccwpck_require__(8009)

    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(
      object,
      other,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length

      if (objLength != othLength && !isPartial) {
        return false
      }
      var index = objLength
      while (index--) {
        var key = objProps[index]
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object)
      var othStacked = stack.get(other)
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object
      }
      var result = true
      stack.set(object, other)
      stack.set(other, object)

      var skipCtor = isPartial
      while (++index < objLength) {
        key = objProps[index]
        var objValue = object[key],
          othValue = other[key]

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack)
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (
          !(compared === undefined
            ? objValue === othValue ||
              equalFunc(objValue, othValue, bitmask, customizer, stack)
            : compared)
        ) {
          result = false
          break
        }
        skipCtor || (skipCtor = key == 'constructor')
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
          othCtor = other.constructor

        // Non `Object` object instances with different constructors are not equal.
        if (
          objCtor != othCtor &&
          'constructor' in object &&
          'constructor' in other &&
          !(
            typeof objCtor == 'function' &&
            objCtor instanceof objCtor &&
            typeof othCtor == 'function' &&
            othCtor instanceof othCtor
          )
        ) {
          result = false
        }
      }
      stack['delete'](object)
      stack['delete'](other)
      return result
    }

    module.exports = equalObjects

    /***/
  },

  /***/ 2085: /***/ (module) => {
    /** Detect free variable `global` from Node.js. */
    var freeGlobal =
      typeof global == 'object' && global && global.Object === Object && global

    module.exports = freeGlobal

    /***/
  },

  /***/ 8009: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseGetAllKeys = __nccwpck_require__(5951),
      getSymbols = __nccwpck_require__(6802),
      keys = __nccwpck_require__(7645)

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols)
    }

    module.exports = getAllKeys

    /***/
  },

  /***/ 9980: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isKeyable = __nccwpck_require__(3308)

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map
    }

    module.exports = getMapData

    /***/
  },

  /***/ 2458: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isStrictComparable = __nccwpck_require__(9789),
      keys = __nccwpck_require__(7645)

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
        length = result.length

      while (length--) {
        var key = result[length],
          value = object[key]

        result[length] = [key, value, isStrictComparable(value)]
      }
      return result
    }

    module.exports = getMatchData

    /***/
  },

  /***/ 4479: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseIsNative = __nccwpck_require__(411),
      getValue = __nccwpck_require__(3542)

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key)
      return baseIsNative(value) ? value : undefined
    }

    module.exports = getNative

    /***/
  },

  /***/ 923: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Symbol = __nccwpck_require__(9213)

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString

    /** Built-in value references. */
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag]

      try {
        value[symToStringTag] = undefined
        var unmasked = true
      } catch (e) {}

      var result = nativeObjectToString.call(value)
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag
        } else {
          delete value[symToStringTag]
        }
      }
      return result
    }

    module.exports = getRawTag

    /***/
  },

  /***/ 6802: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var arrayFilter = __nccwpck_require__(8388),
      stubArray = __nccwpck_require__(8634)

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Built-in value references. */
    var propertyIsEnumerable = objectProto.propertyIsEnumerable

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeGetSymbols = Object.getOwnPropertySymbols

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols
      ? stubArray
      : function (object) {
          if (object == null) {
            return []
          }
          object = Object(object)
          return arrayFilter(nativeGetSymbols(object), function (symbol) {
            return propertyIsEnumerable.call(object, symbol)
          })
        }

    module.exports = getSymbols

    /***/
  },

  /***/ 941: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var DataView = __nccwpck_require__(1857),
      Map = __nccwpck_require__(881),
      Promise = __nccwpck_require__(4671),
      Set = __nccwpck_require__(5793),
      WeakMap = __nccwpck_require__(3915),
      baseGetTag = __nccwpck_require__(7497),
      toSource = __nccwpck_require__(6928)

    /** `Object#toString` result references. */
    var mapTag = '[object Map]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      weakMapTag = '[object WeakMap]'

    var dataViewTag = '[object DataView]'

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap)

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if (
      (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map()) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set()) != setTag) ||
      (WeakMap && getTag(new WeakMap()) != weakMapTag)
    ) {
      getTag = function (value) {
        var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : ''

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag
            case mapCtorString:
              return mapTag
            case promiseCtorString:
              return promiseTag
            case setCtorString:
              return setTag
            case weakMapCtorString:
              return weakMapTag
          }
        }
        return result
      }
    }

    module.exports = getTag

    /***/
  },

  /***/ 3542: /***/ (module) => {
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key]
    }

    module.exports = getValue

    /***/
  },

  /***/ 7658: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var castPath = __nccwpck_require__(2688),
      isArguments = __nccwpck_require__(8495),
      isArray = __nccwpck_require__(4869),
      isIndex = __nccwpck_require__(2936),
      isLength = __nccwpck_require__(4530),
      toKey = __nccwpck_require__(9071)

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object)

      var index = -1,
        length = path.length,
        result = false

      while (++index < length) {
        var key = toKey(path[index])
        if (!(result = object != null && hasFunc(object, key))) {
          break
        }
        object = object[key]
      }
      if (result || ++index != length) {
        return result
      }
      length = object == null ? 0 : object.length
      return (
        !!length &&
        isLength(length) &&
        isIndex(key, length) &&
        (isArray(object) || isArguments(object))
      )
    }

    module.exports = hasPath

    /***/
  },

  /***/ 9489: /***/ (module) => {
    /** Used to compose unicode character classes. */
    var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange =
        rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsVarRange = '\\ufe0e\\ufe0f'

    /** Used to compose unicode capture groups. */
    var rsZWJ = '\\u200d'

    /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
    var reHasUnicode = RegExp(
      '[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']'
    )

    /**
     * Checks if `string` contains Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a symbol is found, else `false`.
     */
    function hasUnicode(string) {
      return reHasUnicode.test(string)
    }

    module.exports = hasUnicode

    /***/
  },

  /***/ 4632: /***/ (module) => {
    /** Used to detect strings that need a more robust regexp to match words. */
    var reHasUnicodeWord =
      /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/

    /**
     * Checks if `string` contains a word composed of Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a word is found, else `false`.
     */
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string)
    }

    module.exports = hasUnicodeWord

    /***/
  },

  /***/ 1789: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var nativeCreate = __nccwpck_require__(3041)

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {}
      this.size = 0
    }

    module.exports = hashClear

    /***/
  },

  /***/ 712: /***/ (module) => {
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key]
      this.size -= result ? 1 : 0
      return result
    }

    module.exports = hashDelete

    /***/
  },

  /***/ 5395: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var nativeCreate = __nccwpck_require__(3041)

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__'

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__
      if (nativeCreate) {
        var result = data[key]
        return result === HASH_UNDEFINED ? undefined : result
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined
    }

    module.exports = hashGet

    /***/
  },

  /***/ 5232: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var nativeCreate = __nccwpck_require__(3041)

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__
      return nativeCreate
        ? data[key] !== undefined
        : hasOwnProperty.call(data, key)
    }

    module.exports = hashHas

    /***/
  },

  /***/ 7320: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var nativeCreate = __nccwpck_require__(3041)

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__'

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__
      this.size += this.has(key) ? 0 : 1
      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value
      return this
    }

    module.exports = hashSet

    /***/
  },

  /***/ 2936: /***/ (module) => {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value
      length = length == null ? MAX_SAFE_INTEGER : length

      return (
        !!length &&
        (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
        value > -1 &&
        value % 1 == 0 &&
        value < length
      )
    }

    module.exports = isIndex

    /***/
  },

  /***/ 9084: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isArray = __nccwpck_require__(4869),
      isSymbol = __nccwpck_require__(6403)

    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false
      }
      var type = typeof value
      if (
        type == 'number' ||
        type == 'symbol' ||
        type == 'boolean' ||
        value == null ||
        isSymbol(value)
      ) {
        return true
      }
      return (
        reIsPlainProp.test(value) ||
        !reIsDeepProp.test(value) ||
        (object != null && value in Object(object))
      )
    }

    module.exports = isKey

    /***/
  },

  /***/ 3308: /***/ (module) => {
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value
      return type == 'string' ||
        type == 'number' ||
        type == 'symbol' ||
        type == 'boolean'
        ? value !== '__proto__'
        : value === null
    }

    module.exports = isKeyable

    /***/
  },

  /***/ 9058: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var coreJsData = __nccwpck_require__(8380)

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function () {
      var uid = /[^.]+$/.exec(
        (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
      )
      return uid ? 'Symbol(src)_1.' + uid : ''
    })()

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func
    }

    module.exports = isMasked

    /***/
  },

  /***/ 10: /***/ (module) => {
    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto

      return value === proto
    }

    module.exports = isPrototype

    /***/
  },

  /***/ 9789: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isObject = __nccwpck_require__(3334)

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value)
    }

    module.exports = isStrictComparable

    /***/
  },

  /***/ 9792: /***/ (module) => {
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = []
      this.size = 0
    }

    module.exports = listCacheClear

    /***/
  },

  /***/ 7716: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var assocIndexOf = __nccwpck_require__(6752)

    /** Used for built-in method references. */
    var arrayProto = Array.prototype

    /** Built-in value references. */
    var splice = arrayProto.splice

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
        index = assocIndexOf(data, key)

      if (index < 0) {
        return false
      }
      var lastIndex = data.length - 1
      if (index == lastIndex) {
        data.pop()
      } else {
        splice.call(data, index, 1)
      }
      --this.size
      return true
    }

    module.exports = listCacheDelete

    /***/
  },

  /***/ 5789: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var assocIndexOf = __nccwpck_require__(6752)

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
        index = assocIndexOf(data, key)

      return index < 0 ? undefined : data[index][1]
    }

    module.exports = listCacheGet

    /***/
  },

  /***/ 9386: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var assocIndexOf = __nccwpck_require__(6752)

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1
    }

    module.exports = listCacheHas

    /***/
  },

  /***/ 7399: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var assocIndexOf = __nccwpck_require__(6752)

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
        index = assocIndexOf(data, key)

      if (index < 0) {
        ++this.size
        data.push([key, value])
      } else {
        data[index][1] = value
      }
      return this
    }

    module.exports = listCacheSet

    /***/
  },

  /***/ 1610: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Hash = __nccwpck_require__(5902),
      ListCache = __nccwpck_require__(6608),
      Map = __nccwpck_require__(881)

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0
      this.__data__ = {
        hash: new Hash(),
        map: new (Map || ListCache)(),
        string: new Hash()
      }
    }

    module.exports = mapCacheClear

    /***/
  },

  /***/ 6657: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getMapData = __nccwpck_require__(9980)

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key)
      this.size -= result ? 1 : 0
      return result
    }

    module.exports = mapCacheDelete

    /***/
  },

  /***/ 1372: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getMapData = __nccwpck_require__(9980)

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key)
    }

    module.exports = mapCacheGet

    /***/
  },

  /***/ 609: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getMapData = __nccwpck_require__(9980)

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key)
    }

    module.exports = mapCacheHas

    /***/
  },

  /***/ 5582: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getMapData = __nccwpck_require__(9980)

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
        size = data.size

      data.set(key, value)
      this.size += data.size == size ? 0 : 1
      return this
    }

    module.exports = mapCacheSet

    /***/
  },

  /***/ 5853: /***/ (module) => {
    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
      var index = -1,
        result = Array(map.size)

      map.forEach(function (value, key) {
        result[++index] = [key, value]
      })
      return result
    }

    module.exports = mapToArray

    /***/
  },

  /***/ 3509: /***/ (module) => {
    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function (object) {
        if (object == null) {
          return false
        }
        return (
          object[key] === srcValue &&
          (srcValue !== undefined || key in Object(object))
        )
      }
    }

    module.exports = matchesStrictComparable

    /***/
  },

  /***/ 9422: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var memoize = __nccwpck_require__(9885)

    /** Used as the maximum memoize cache size. */
    var MAX_MEMOIZE_SIZE = 500

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function (key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear()
        }
        return key
      })

      var cache = result.cache
      return result
    }

    module.exports = memoizeCapped

    /***/
  },

  /***/ 3041: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var getNative = __nccwpck_require__(4479)

    /* Built-in method references that are verified to be native. */
    var nativeCreate = getNative(Object, 'create')

    module.exports = nativeCreate

    /***/
  },

  /***/ 5778: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var overArg = __nccwpck_require__(6320)

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeKeys = overArg(Object.keys, Object)

    module.exports = nativeKeys

    /***/
  },

  /***/ 4643: /***/ (module, exports, __nccwpck_require__) => {
    /* module decorator */ module = __nccwpck_require__.nmd(module)
    var freeGlobal = __nccwpck_require__(2085)

    /** Detect free variable `exports`. */
    var freeExports = true && exports && !exports.nodeType && exports

    /** Detect free variable `module`. */
    var freeModule =
      freeExports &&
      'object' == 'object' &&
      module &&
      !module.nodeType &&
      module

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports

    /** Detect free variable `process` from Node.js. */
    var freeProcess = moduleExports && freeGlobal.process

    /** Used to access faster Node.js helpers. */
    var nodeUtil = (function () {
      try {
        // Use `util.types` for Node.js 10+.
        var types =
          freeModule && freeModule.require && freeModule.require('util').types

        if (types) {
          return types
        }

        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util')
      } catch (e) {}
    })()

    module.exports = nodeUtil

    /***/
  },

  /***/ 4200: /***/ (module) => {
    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value)
    }

    module.exports = objectToString

    /***/
  },

  /***/ 6320: /***/ (module) => {
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg))
      }
    }

    module.exports = overArg

    /***/
  },

  /***/ 9882: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var freeGlobal = __nccwpck_require__(2085)

    /** Detect free variable `self`. */
    var freeSelf =
      typeof self == 'object' && self && self.Object === Object && self

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')()

    module.exports = root

    /***/
  },

  /***/ 6895: /***/ (module) => {
    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__'

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED)
      return this
    }

    module.exports = setCacheAdd

    /***/
  },

  /***/ 804: /***/ (module) => {
    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value)
    }

    module.exports = setCacheHas

    /***/
  },

  /***/ 9553: /***/ (module) => {
    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
      var index = -1,
        result = Array(set.size)

      set.forEach(function (value) {
        result[++index] = value
      })
      return result
    }

    module.exports = setToArray

    /***/
  },

  /***/ 2843: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var ListCache = __nccwpck_require__(6608)

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache()
      this.size = 0
    }

    module.exports = stackClear

    /***/
  },

  /***/ 4717: /***/ (module) => {
    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
        result = data['delete'](key)

      this.size = data.size
      return result
    }

    module.exports = stackDelete

    /***/
  },

  /***/ 21: /***/ (module) => {
    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key)
    }

    module.exports = stackGet

    /***/
  },

  /***/ 3910: /***/ (module) => {
    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key)
    }

    module.exports = stackHas

    /***/
  },

  /***/ 9955: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var ListCache = __nccwpck_require__(6608),
      Map = __nccwpck_require__(881),
      MapCache = __nccwpck_require__(938)

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__
      if (data instanceof ListCache) {
        var pairs = data.__data__
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value])
          this.size = ++data.size
          return this
        }
        data = this.__data__ = new MapCache(pairs)
      }
      data.set(key, value)
      this.size = data.size
      return this
    }

    module.exports = stackSet

    /***/
  },

  /***/ 1296: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var asciiToArray = __nccwpck_require__(2187),
      hasUnicode = __nccwpck_require__(9489),
      unicodeToArray = __nccwpck_require__(1990)

    /**
     * Converts `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string)
    }

    module.exports = stringToArray

    /***/
  },

  /***/ 1853: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var memoizeCapped = __nccwpck_require__(9422)

    /** Used to match property names within property paths. */
    var rePropName =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g

    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function (string) {
      var result = []
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('')
      }
      string.replace(rePropName, function (match, number, quote, subString) {
        result.push(
          quote ? subString.replace(reEscapeChar, '$1') : number || match
        )
      })
      return result
    })

    module.exports = stringToPath

    /***/
  },

  /***/ 9071: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isSymbol = __nccwpck_require__(6403)

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value
      }
      var result = value + ''
      return result == '0' && 1 / value == -INFINITY ? '-0' : result
    }

    module.exports = toKey

    /***/
  },

  /***/ 6928: /***/ (module) => {
    /** Used for built-in method references. */
    var funcProto = Function.prototype

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func)
        } catch (e) {}
        try {
          return func + ''
        } catch (e) {}
      }
      return ''
    }

    module.exports = toSource

    /***/
  },

  /***/ 1990: /***/ (module) => {
    /** Used to compose unicode character classes. */
    var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange =
        rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsVarRange = '\\ufe0e\\ufe0f'

    /** Used to compose unicode capture groups. */
    var rsAstral = '[' + rsAstralRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsZWJ = '\\u200d'

    /** Used to compose unicode regexes. */
    var reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin =
        '(?:' +
        rsZWJ +
        '(?:' +
        [rsNonAstral, rsRegional, rsSurrPair].join('|') +
        ')' +
        rsOptVar +
        reOptMod +
        ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsSymbol =
        '(?:' +
        [
          rsNonAstral + rsCombo + '?',
          rsCombo,
          rsRegional,
          rsSurrPair,
          rsAstral
        ].join('|') +
        ')'

    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
    var reUnicode = RegExp(
      rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq,
      'g'
    )

    /**
     * Converts a Unicode `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function unicodeToArray(string) {
      return string.match(reUnicode) || []
    }

    module.exports = unicodeToArray

    /***/
  },

  /***/ 5423: /***/ (module) => {
    /** Used to compose unicode character classes. */
    var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange =
        rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange =
        rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange

    /** Used to compose unicode capture groups. */
    var rsApos = "['\u2019]",
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc =
        '[^' +
        rsAstralRange +
        rsBreakRange +
        rsDigits +
        rsDingbatRange +
        rsLowerRange +
        rsUpperRange +
        ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d'

    /** Used to compose unicode regexes. */
    var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin =
        '(?:' +
        rsZWJ +
        '(?:' +
        [rsNonAstral, rsRegional, rsSurrPair].join('|') +
        ')' +
        rsOptVar +
        reOptMod +
        ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji =
        '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq

    /** Used to match complex or compound words. */
    var reUnicodeWord = RegExp(
      [
        rsUpper +
          '?' +
          rsLower +
          '+' +
          rsOptContrLower +
          '(?=' +
          [rsBreak, rsUpper, '$'].join('|') +
          ')',
        rsMiscUpper +
          '+' +
          rsOptContrUpper +
          '(?=' +
          [rsBreak, rsUpper + rsMiscLower, '$'].join('|') +
          ')',
        rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
        rsUpper + '+' + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join('|'),
      'g'
    )

    /**
     * Splits a Unicode `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || []
    }

    module.exports = unicodeWords

    /***/
  },

  /***/ 5769: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var capitalize = __nccwpck_require__(3622),
      createCompounder = __nccwpck_require__(1543)

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function (result, word, index) {
      word = word.toLowerCase()
      return result + (index ? capitalize(word) : word)
    })

    module.exports = camelCase

    /***/
  },

  /***/ 3622: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var toString = __nccwpck_require__(2931),
      upperFirst = __nccwpck_require__(2598)

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase())
    }

    module.exports = capitalize

    /***/
  },

  /***/ 833: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var deburrLetter = __nccwpck_require__(1683),
      toString = __nccwpck_require__(2931)

    /** Used to match Latin Unicode letters (excluding mathematical operators). */
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g

    /** Used to compose unicode character classes. */
    var rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange =
        rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange

    /** Used to compose unicode capture groups. */
    var rsCombo = '[' + rsComboRange + ']'

    /**
     * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
     * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
     */
    var reComboMark = RegExp(rsCombo, 'g')

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string)
      return (
        string && string.replace(reLatin, deburrLetter).replace(reComboMark, '')
      )
    }

    module.exports = deburr

    /***/
  },

  /***/ 1901: /***/ (module) => {
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other)
    }

    module.exports = eq

    /***/
  },

  /***/ 6908: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseGet = __nccwpck_require__(5758)

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path)
      return result === undefined ? defaultValue : result
    }

    module.exports = get

    /***/
  },

  /***/ 7198: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseHas = __nccwpck_require__(351),
      hasPath = __nccwpck_require__(7658)

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas)
    }

    module.exports = has

    /***/
  },

  /***/ 9409: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseHasIn = __nccwpck_require__(4129),
      hasPath = __nccwpck_require__(7658)

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn)
    }

    module.exports = hasIn

    /***/
  },

  /***/ 9561: /***/ (module) => {
    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value
    }

    module.exports = identity

    /***/
  },

  /***/ 8495: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseIsArguments = __nccwpck_require__(2177),
      isObjectLike = __nccwpck_require__(5926)

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /** Built-in value references. */
    var propertyIsEnumerable = objectProto.propertyIsEnumerable

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(
      (function () {
        return arguments
      })()
    )
      ? baseIsArguments
      : function (value) {
          return (
            isObjectLike(value) &&
            hasOwnProperty.call(value, 'callee') &&
            !propertyIsEnumerable.call(value, 'callee')
          )
        }

    module.exports = isArguments

    /***/
  },

  /***/ 4869: /***/ (module) => {
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray

    module.exports = isArray

    /***/
  },

  /***/ 8017: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var isFunction = __nccwpck_require__(7799),
      isLength = __nccwpck_require__(4530)

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value)
    }

    module.exports = isArrayLike

    /***/
  },

  /***/ 4190: /***/ (module, exports, __nccwpck_require__) => {
    /* module decorator */ module = __nccwpck_require__.nmd(module)
    var root = __nccwpck_require__(9882),
      stubFalse = __nccwpck_require__(7744)

    /** Detect free variable `exports`. */
    var freeExports = true && exports && !exports.nodeType && exports

    /** Detect free variable `module`. */
    var freeModule =
      freeExports &&
      'object' == 'object' &&
      module &&
      !module.nodeType &&
      module

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse

    module.exports = isBuffer

    /***/
  },

  /***/ 7799: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseGetTag = __nccwpck_require__(7497),
      isObject = __nccwpck_require__(3334)

    /** `Object#toString` result references. */
    var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]'

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value)
      return (
        tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
      )
    }

    module.exports = isFunction

    /***/
  },

  /***/ 4530: /***/ (module) => {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return (
        typeof value == 'number' &&
        value > -1 &&
        value % 1 == 0 &&
        value <= MAX_SAFE_INTEGER
      )
    }

    module.exports = isLength

    /***/
  },

  /***/ 3334: /***/ (module) => {
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value
      return value != null && (type == 'object' || type == 'function')
    }

    module.exports = isObject

    /***/
  },

  /***/ 5926: /***/ (module) => {
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object'
    }

    module.exports = isObjectLike

    /***/
  },

  /***/ 6403: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseGetTag = __nccwpck_require__(7497),
      isObjectLike = __nccwpck_require__(5926)

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]'

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return (
        typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag)
      )
    }

    module.exports = isSymbol

    /***/
  },

  /***/ 2496: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseIsTypedArray = __nccwpck_require__(1528),
      baseUnary = __nccwpck_require__(9258),
      nodeUtil = __nccwpck_require__(4643)

    /* Node.js helper references. */
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray
      ? baseUnary(nodeIsTypedArray)
      : baseIsTypedArray

    module.exports = isTypedArray

    /***/
  },

  /***/ 7645: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var arrayLikeKeys = __nccwpck_require__(2237),
      baseKeys = __nccwpck_require__(7164),
      isArrayLike = __nccwpck_require__(8017)

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
    }

    module.exports = keys

    /***/
  },

  /***/ 2221: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseAssignValue = __nccwpck_require__(3868),
      baseForOwn = __nccwpck_require__(5712),
      baseIteratee = __nccwpck_require__(427)

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {}
      iteratee = baseIteratee(iteratee, 3)

      baseForOwn(object, function (value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value)
      })
      return result
    }

    module.exports = mapKeys

    /***/
  },

  /***/ 668: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseAssignValue = __nccwpck_require__(3868),
      baseForOwn = __nccwpck_require__(5712),
      baseIteratee = __nccwpck_require__(427)

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {}
      iteratee = baseIteratee(iteratee, 3)

      baseForOwn(object, function (value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object))
      })
      return result
    }

    module.exports = mapValues

    /***/
  },

  /***/ 9885: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var MapCache = __nccwpck_require__(938)

    /** Error message constants. */
    var FUNC_ERROR_TEXT = 'Expected a function'

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (
        typeof func != 'function' ||
        (resolver != null && typeof resolver != 'function')
      ) {
        throw new TypeError(FUNC_ERROR_TEXT)
      }
      var memoized = function () {
        var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache

        if (cache.has(key)) {
          return cache.get(key)
        }
        var result = func.apply(this, args)
        memoized.cache = cache.set(key, result) || cache
        return result
      }
      memoized.cache = new (memoize.Cache || MapCache)()
      return memoized
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache

    module.exports = memoize

    /***/
  },

  /***/ 7261: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseProperty = __nccwpck_require__(6829),
      basePropertyDeep = __nccwpck_require__(974),
      isKey = __nccwpck_require__(9084),
      toKey = __nccwpck_require__(9071)

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
    }

    module.exports = property

    /***/
  },

  /***/ 1419: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var createCompounder = __nccwpck_require__(1543)

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function (result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase()
    })

    module.exports = snakeCase

    /***/
  },

  /***/ 8634: /***/ (module) => {
    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return []
    }

    module.exports = stubArray

    /***/
  },

  /***/ 7744: /***/ (module) => {
    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false
    }

    module.exports = stubFalse

    /***/
  },

  /***/ 2931: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var baseToString = __nccwpck_require__(6792)

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value)
    }

    module.exports = toString

    /***/
  },

  /***/ 2598: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var createCaseFirst = __nccwpck_require__(5898)

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase')

    module.exports = upperFirst

    /***/
  },

  /***/ 6454: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var asciiWords = __nccwpck_require__(2560),
      hasUnicodeWord = __nccwpck_require__(4632),
      toString = __nccwpck_require__(2931),
      unicodeWords = __nccwpck_require__(5423)

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string)
      pattern = guard ? undefined : pattern

      if (pattern === undefined) {
        return hasUnicodeWord(string)
          ? unicodeWords(string)
          : asciiWords(string)
      }
      return string.match(pattern) || []
    }

    module.exports = words

    /***/
  },

  /***/ 9623: /***/ function (
    module,
    __unused_webpack_exports,
    __nccwpck_require__
  ) {
    /* module decorator */ module = __nccwpck_require__.nmd(module)
    //! moment.js
    //! version : 2.29.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com

    ;(function (global, factory) {
      true ? (module.exports = factory()) : 0
    })(this, function () {
      'use strict'

      var hookCallback

      function hooks() {
        return hookCallback.apply(null, arguments)
      }

      // This is done to register the method called with moment()
      // without creating circular dependencies.
      function setHookCallback(callback) {
        hookCallback = callback
      }

      function isArray(input) {
        return (
          input instanceof Array ||
          Object.prototype.toString.call(input) === '[object Array]'
        )
      }

      function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
          input != null &&
          Object.prototype.toString.call(input) === '[object Object]'
        )
      }

      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
      }

      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0
        } else {
          var k
          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false
            }
          }
          return true
        }
      }

      function isUndefined(input) {
        return input === void 0
      }

      function isNumber(input) {
        return (
          typeof input === 'number' ||
          Object.prototype.toString.call(input) === '[object Number]'
        )
      }

      function isDate(input) {
        return (
          input instanceof Date ||
          Object.prototype.toString.call(input) === '[object Date]'
        )
      }

      function map(arr, fn) {
        var res = [],
          i
        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i))
        }
        return res
      }

      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i]
          }
        }

        if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString
        }

        if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf
        }

        return a
      }

      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc()
      }

      function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        }
      }

      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags()
        }
        return m._pf
      }

      var some
      if (Array.prototype.some) {
        some = Array.prototype.some
      } else {
        some = function (fun) {
          var t = Object(this),
            len = t.length >>> 0,
            i

          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true
            }
          }

          return false
        }
      }

      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m),
            parsedParts = some.call(flags.parsedDateParts, function (i) {
              return i != null
            }),
            isNowValid =
              !isNaN(m._d.getTime()) &&
              flags.overflow < 0 &&
              !flags.empty &&
              !flags.invalidEra &&
              !flags.invalidMonth &&
              !flags.invalidWeekday &&
              !flags.weekdayMismatch &&
              !flags.nullInput &&
              !flags.invalidFormat &&
              !flags.userInvalidated &&
              (!flags.meridiem || (flags.meridiem && parsedParts))

          if (m._strict) {
            isNowValid =
              isNowValid &&
              flags.charsLeftOver === 0 &&
              flags.unusedTokens.length === 0 &&
              flags.bigHour === undefined
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid
          } else {
            return isNowValid
          }
        }
        return m._isValid
      }

      function createInvalid(flags) {
        var m = createUTC(NaN)
        if (flags != null) {
          extend(getParsingFlags(m), flags)
        } else {
          getParsingFlags(m).userInvalidated = true
        }

        return m
      }

      // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.
      var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false

      function copyConfig(to, from) {
        var i, prop, val

        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject
        }
        if (!isUndefined(from._i)) {
          to._i = from._i
        }
        if (!isUndefined(from._f)) {
          to._f = from._f
        }
        if (!isUndefined(from._l)) {
          to._l = from._l
        }
        if (!isUndefined(from._strict)) {
          to._strict = from._strict
        }
        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm
        }
        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC
        }
        if (!isUndefined(from._offset)) {
          to._offset = from._offset
        }
        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from)
        }
        if (!isUndefined(from._locale)) {
          to._locale = from._locale
        }

        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i]
            val = from[prop]
            if (!isUndefined(val)) {
              to[prop] = val
            }
          }
        }

        return to
      }

      // Moment prototype object
      function Moment(config) {
        copyConfig(this, config)
        this._d = new Date(config._d != null ? config._d.getTime() : NaN)
        if (!this.isValid()) {
          this._d = new Date(NaN)
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
          updateInProgress = true
          hooks.updateOffset(this)
          updateInProgress = false
        }
      }

      function isMoment(obj) {
        return (
          obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        )
      }

      function warn(msg) {
        if (
          hooks.suppressDeprecationWarnings === false &&
          typeof console !== 'undefined' &&
          console.warn
        ) {
          console.warn('Deprecation warning: ' + msg)
        }
      }

      function deprecate(msg, fn) {
        var firstTime = true

        return extend(function () {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg)
          }
          if (firstTime) {
            var args = [],
              arg,
              i,
              key
            for (i = 0; i < arguments.length; i++) {
              arg = ''
              if (typeof arguments[i] === 'object') {
                arg += '\n[' + i + '] '
                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ': ' + arguments[0][key] + ', '
                  }
                }
                arg = arg.slice(0, -2) // Remove trailing comma and space
              } else {
                arg = arguments[i]
              }
              args.push(arg)
            }
            warn(
              msg +
                '\nArguments: ' +
                Array.prototype.slice.call(args).join('') +
                '\n' +
                new Error().stack
            )
            firstTime = false
          }
          return fn.apply(this, arguments)
        }, fn)
      }

      var deprecations = {}

      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg)
        }
        if (!deprecations[name]) {
          warn(msg)
          deprecations[name] = true
        }
      }

      hooks.suppressDeprecationWarnings = false
      hooks.deprecationHandler = null

      function isFunction(input) {
        return (
          (typeof Function !== 'undefined' && input instanceof Function) ||
          Object.prototype.toString.call(input) === '[object Function]'
        )
      }

      function set(config) {
        var prop, i
        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i]
            if (isFunction(prop)) {
              this[i] = prop
            } else {
              this['_' + i] = prop
            }
          }
        }
        this._config = config
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' +
            /\d{1,2}/.source
        )
      }

      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
          prop
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {}
              extend(res[prop], parentConfig[prop])
              extend(res[prop], childConfig[prop])
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop]
            } else {
              delete res[prop]
            }
          }
        }
        for (prop in parentConfig) {
          if (
            hasOwnProp(parentConfig, prop) &&
            !hasOwnProp(childConfig, prop) &&
            isObject(parentConfig[prop])
          ) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop])
          }
        }
        return res
      }

      function Locale(config) {
        if (config != null) {
          this.set(config)
        }
      }

      var keys

      if (Object.keys) {
        keys = Object.keys
      } else {
        keys = function (obj) {
          var i,
            res = []
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i)
            }
          }
          return res
        }
      }

      var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      }

      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse']
        return isFunction(output) ? output.call(mom, now) : output
      }

      function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0
        return (
          (sign ? (forceSign ? '+' : '') : '-') +
          Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
          absNumber
        )
      }

      var formattingTokens =
          /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {}

      // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }
      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback
        if (typeof callback === 'string') {
          func = function () {
            return this[callback]()
          }
        }
        if (token) {
          formatTokenFunctions[token] = func
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2])
          }
        }
        if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token)
          }
        }
      }

      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '')
        }
        return input.replace(/\\/g, '')
      }

      function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
          i,
          length

        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]]
          } else {
            array[i] = removeFormattingTokens(array[i])
          }
        }

        return function (mom) {
          var output = '',
            i
          for (i = 0; i < length; i++) {
            output += isFunction(array[i])
              ? array[i].call(mom, format)
              : array[i]
          }
          return output
        }
      }

      // format date using native date object
      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate()
        }

        format = expandFormat(format, m.localeData())
        formatFunctions[format] =
          formatFunctions[format] || makeFormatFunction(format)

        return formatFunctions[format](m)
      }

      function expandFormat(format, locale) {
        var i = 5

        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input
        }

        localFormattingTokens.lastIndex = 0
        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
          )
          localFormattingTokens.lastIndex = 0
          i -= 1
        }

        return format
      }

      var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
      }

      function longDateFormat(key) {
        var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()]

        if (format || !formatUpper) {
          return format
        }

        this._longDateFormat[key] = formatUpper
          .match(formattingTokens)
          .map(function (tok) {
            if (
              tok === 'MMMM' ||
              tok === 'MM' ||
              tok === 'DD' ||
              tok === 'dddd'
            ) {
              return tok.slice(1)
            }
            return tok
          })
          .join('')

        return this._longDateFormat[key]
      }

      var defaultInvalidDate = 'Invalid date'

      function invalidDate() {
        return this._invalidDate
      }

      var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/

      function ordinal(number) {
        return this._ordinal.replace('%d', number)
      }

      var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      }

      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string]
        return isFunction(output)
          ? output(number, withoutSuffix, string, isFuture)
          : output.replace(/%d/i, number)
      }

      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past']
        return isFunction(format)
          ? format(output)
          : format.replace(/%s/i, output)
      }

      var aliases = {}

      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase()
        aliases[lowerCase] =
          aliases[lowerCase + 's'] =
          aliases[shorthand] =
            unit
      }

      function normalizeUnits(units) {
        return typeof units === 'string'
          ? aliases[units] || aliases[units.toLowerCase()]
          : undefined
      }

      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
          normalizedProp,
          prop

        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop)
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop]
            }
          }
        }

        return normalizedInput
      }

      var priorities = {}

      function addUnitPriority(unit, priority) {
        priorities[unit] = priority
      }

      function getPrioritizedUnits(unitsObj) {
        var units = [],
          u
        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] })
          }
        }
        units.sort(function (a, b) {
          return a.priority - b.priority
        })
        return units
      }

      function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      }

      function absFloor(number) {
        if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0
        } else {
          return Math.floor(number)
        }
      }

      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
          value = 0

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber)
        }

        return value
      }

      function makeGetSet(unit, keepTime) {
        return function (value) {
          if (value != null) {
            set$1(this, unit, value)
            hooks.updateOffset(this, keepTime)
            return this
          } else {
            return get(this, unit)
          }
        }
      }

      function get(mom, unit) {
        return mom.isValid()
          ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
          : NaN
      }

      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (
            unit === 'FullYear' &&
            isLeapYear(mom.year()) &&
            mom.month() === 1 &&
            mom.date() === 29
          ) {
            value = toInt(value)
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
              value,
              mom.month(),
              daysInMonth(value, mom.month())
            )
          } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value)
          }
        }
      }

      // MOMENTS

      function stringGet(units) {
        units = normalizeUnits(units)
        if (isFunction(this[units])) {
          return this[units]()
        }
        return this
      }

      function stringSet(units, value) {
        if (typeof units === 'object') {
          units = normalizeObjectUnits(units)
          var prioritized = getPrioritizedUnits(units),
            i
          for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit])
          }
        } else {
          units = normalizeUnits(units)
          if (isFunction(this[units])) {
            return this[units](value)
          }
        }
        return this
      }

      var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord =
          /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes

      regexes = {}

      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
          ? regex
          : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex
            }
      }

      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token))
        }

        return regexes[token](config._strict, config._locale)
      }

      // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
      function unescapeFormat(s) {
        return regexEscape(
          s
            .replace('\\', '')
            .replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function (matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4
              }
            )
        )
      }

      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
      }

      var tokens = {}

      function addParseToken(token, callback) {
        var i,
          func = callback
        if (typeof token === 'string') {
          token = [token]
        }
        if (isNumber(callback)) {
          func = function (input, array) {
            array[callback] = toInt(input)
          }
        }
        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func
        }
      }

      function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {}
          callback(input, config._w, config, token)
        })
      }

      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token)
        }
      }

      var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8

      function mod(n, x) {
        return ((n % x) + x) % x
      }

      var indexOf

      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf
      } else {
        indexOf = function (o) {
          // I know
          var i
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i
            }
          }
          return -1
        }
      }

      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN
        }
        var modMonth = mod(month, 12)
        year += (month - modMonth) / 12
        return modMonth === 1
          ? isLeapYear(year)
            ? 29
            : 28
          : 31 - ((modMonth % 7) % 2)
      }

      // FORMATTING

      addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1
      })

      addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format)
      })

      addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format)
      })

      // ALIASES

      addUnitAlias('month', 'M')

      // PRIORITY

      addUnitPriority('month', 8)

      // PARSING

      addRegexToken('M', match1to2)
      addRegexToken('MM', match1to2, match2)
      addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict)
      })
      addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict)
      })

      addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1
      })

      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict)
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
          array[MONTH] = month
        } else {
          getParsingFlags(config).invalidMonth = input
        }
      })

      // LOCALES

      var defaultLocaleMonths =
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        defaultLocaleMonthsShort =
          'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord

      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months)
            ? this._months
            : this._months['standalone']
        }
        return isArray(this._months)
          ? this._months[m.month()]
          : this._months[
              (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                ? 'format'
                : 'standalone'
            ][m.month()]
      }

      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort['standalone']
        }
        return isArray(this._monthsShort)
          ? this._monthsShort[m.month()]
          : this._monthsShort[
              MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
            ][m.month()]
      }

      function handleStrictParse(monthName, format, strict) {
        var i,
          ii,
          mom,
          llc = monthName.toLocaleLowerCase()
        if (!this._monthsParse) {
          // this is not used
          this._monthsParse = []
          this._longMonthsParse = []
          this._shortMonthsParse = []
          for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i])
            this._shortMonthsParse[i] = this.monthsShort(
              mom,
              ''
            ).toLocaleLowerCase()
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase()
          }
        }

        if (strict) {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc)
            return ii !== -1 ? ii : null
          } else {
            ii = indexOf.call(this._longMonthsParse, llc)
            return ii !== -1 ? ii : null
          }
        } else {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._longMonthsParse, llc)
            return ii !== -1 ? ii : null
          } else {
            ii = indexOf.call(this._longMonthsParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._shortMonthsParse, llc)
            return ii !== -1 ? ii : null
          }
        }
      }

      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex

        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict)
        }

        if (!this._monthsParse) {
          this._monthsParse = []
          this._longMonthsParse = []
          this._shortMonthsParse = []
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i])
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
              '^' + this.months(mom, '').replace('.', '') + '$',
              'i'
            )
            this._shortMonthsParse[i] = new RegExp(
              '^' + this.monthsShort(mom, '').replace('.', '') + '$',
              'i'
            )
          }
          if (!strict && !this._monthsParse[i]) {
            regex =
              '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '')
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i')
          }
          // test the regex
          if (
            strict &&
            format === 'MMMM' &&
            this._longMonthsParse[i].test(monthName)
          ) {
            return i
          } else if (
            strict &&
            format === 'MMM' &&
            this._shortMonthsParse[i].test(monthName)
          ) {
            return i
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i
          }
        }
      }

      // MOMENTS

      function setMonth(mom, value) {
        var dayOfMonth

        if (!mom.isValid()) {
          // No op
          return mom
        }

        if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
            value = toInt(value)
          } else {
            value = mom.localeData().monthsParse(value)
            // TODO: Another silent failure?
            if (!isNumber(value)) {
              return mom
            }
          }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value))
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth)
        return mom
      }

      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value)
          hooks.updateOffset(this, true)
          return this
        } else {
          return get(this, 'Month')
        }
      }

      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month())
      }

      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this)
          }
          if (isStrict) {
            return this._monthsShortStrictRegex
          } else {
            return this._monthsShortRegex
          }
        } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex
          }
          return this._monthsShortStrictRegex && isStrict
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex
        }
      }

      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this)
          }
          if (isStrict) {
            return this._monthsStrictRegex
          } else {
            return this._monthsRegex
          }
        } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex
          }
          return this._monthsStrictRegex && isStrict
            ? this._monthsStrictRegex
            : this._monthsRegex
        }
      }

      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length
        }

        var shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom
        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i])
          shortPieces.push(this.monthsShort(mom, ''))
          longPieces.push(this.months(mom, ''))
          mixedPieces.push(this.months(mom, ''))
          mixedPieces.push(this.monthsShort(mom, ''))
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev)
        longPieces.sort(cmpLenRev)
        mixedPieces.sort(cmpLenRev)
        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i])
          longPieces[i] = regexEscape(longPieces[i])
        }
        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i])
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i')
        this._monthsShortRegex = this._monthsRegex
        this._monthsStrictRegex = new RegExp(
          '^(' + longPieces.join('|') + ')',
          'i'
        )
        this._monthsShortStrictRegex = new RegExp(
          '^(' + shortPieces.join('|') + ')',
          'i'
        )
      }

      // FORMATTING

      addFormatToken('Y', 0, 0, function () {
        var y = this.year()
        return y <= 9999 ? zeroFill(y, 4) : '+' + y
      })

      addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100
      })

      addFormatToken(0, ['YYYY', 4], 0, 'year')
      addFormatToken(0, ['YYYYY', 5], 0, 'year')
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year')

      // ALIASES

      addUnitAlias('year', 'y')

      // PRIORITIES

      addUnitPriority('year', 1)

      // PARSING

      addRegexToken('Y', matchSigned)
      addRegexToken('YY', match1to2, match2)
      addRegexToken('YYYY', match1to4, match4)
      addRegexToken('YYYYY', match1to6, match6)
      addRegexToken('YYYYYY', match1to6, match6)

      addParseToken(['YYYYY', 'YYYYYY'], YEAR)
      addParseToken('YYYY', function (input, array) {
        array[YEAR] =
          input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input)
      })
      addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input)
      })
      addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10)
      })

      // HELPERS

      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365
      }

      // HOOKS

      hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000)
      }

      // MOMENTS

      var getSetYear = makeGetSet('FullYear', true)

      function getIsLeapYear() {
        return isLeapYear(this.year())
      }

      function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          date = new Date(y + 400, m, d, h, M, s, ms)
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y)
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms)
        }

        return date
      }

      function createUTCDate(y) {
        var date, args
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments)
          // preserve leap years using a full 400 year cycle, then reset
          args[0] = y + 400
          date = new Date(Date.UTC.apply(null, args))
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y)
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments))
        }

        return date
      }

      // start-of-first-week - start-of-year
      function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
          fwd = 7 + dow - doy,
          // first-week day local weekday -- which local weekday is fwd
          fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7

        return -fwdlw + fwd - 1
      }

      // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear,
          resDayOfYear

        if (dayOfYear <= 0) {
          resYear = year - 1
          resDayOfYear = daysInYear(resYear) + dayOfYear
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1
          resDayOfYear = dayOfYear - daysInYear(year)
        } else {
          resYear = year
          resDayOfYear = dayOfYear
        }

        return {
          year: resYear,
          dayOfYear: resDayOfYear
        }
      }

      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek,
          resYear

        if (week < 1) {
          resYear = mom.year() - 1
          resWeek = week + weeksInYear(resYear, dow, doy)
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy)
          resYear = mom.year() + 1
        } else {
          resYear = mom.year()
          resWeek = week
        }

        return {
          week: resWeek,
          year: resYear
        }
      }

      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy)
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7
      }

      // FORMATTING

      addFormatToken('w', ['ww', 2], 'wo', 'week')
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek')

      // ALIASES

      addUnitAlias('week', 'w')
      addUnitAlias('isoWeek', 'W')

      // PRIORITIES

      addUnitPriority('week', 5)
      addUnitPriority('isoWeek', 5)

      // PARSING

      addRegexToken('w', match1to2)
      addRegexToken('ww', match1to2, match2)
      addRegexToken('W', match1to2)
      addRegexToken('WW', match1to2, match2)

      addWeekParseToken(
        ['w', 'ww', 'W', 'WW'],
        function (input, week, config, token) {
          week[token.substr(0, 1)] = toInt(input)
        }
      )

      // HELPERS

      // LOCALES

      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week
      }

      var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 6th is the first week of the year.
      }

      function localeFirstDayOfWeek() {
        return this._week.dow
      }

      function localeFirstDayOfYear() {
        return this._week.doy
      }

      // MOMENTS

      function getSetWeek(input) {
        var week = this.localeData().week(this)
        return input == null ? week : this.add((input - week) * 7, 'd')
      }

      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week
        return input == null ? week : this.add((input - week) * 7, 'd')
      }

      // FORMATTING

      addFormatToken('d', 0, 'do', 'day')

      addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format)
      })

      addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format)
      })

      addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format)
      })

      addFormatToken('e', 0, 0, 'weekday')
      addFormatToken('E', 0, 0, 'isoWeekday')

      // ALIASES

      addUnitAlias('day', 'd')
      addUnitAlias('weekday', 'e')
      addUnitAlias('isoWeekday', 'E')

      // PRIORITY
      addUnitPriority('day', 11)
      addUnitPriority('weekday', 11)
      addUnitPriority('isoWeekday', 11)

      // PARSING

      addRegexToken('d', match1to2)
      addRegexToken('e', match1to2)
      addRegexToken('E', match1to2)
      addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict)
      })
      addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict)
      })
      addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict)
      })

      addWeekParseToken(
        ['dd', 'ddd', 'dddd'],
        function (input, week, config, token) {
          var weekday = config._locale.weekdaysParse(
            input,
            token,
            config._strict
          )
          // if we didn't get a weekday name, mark the date as invalid
          if (weekday != null) {
            week.d = weekday
          } else {
            getParsingFlags(config).invalidWeekday = input
          }
        }
      )

      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input)
      })

      // HELPERS

      function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
          return input
        }

        if (!isNaN(input)) {
          return parseInt(input, 10)
        }

        input = locale.weekdaysParse(input)
        if (typeof input === 'number') {
          return input
        }

        return null
      }

      function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7
        }
        return isNaN(input) ? null : input
      }

      // LOCALES
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n))
      }

      var defaultLocaleWeekdays =
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord

      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              m && m !== true && this._weekdays.isFormat.test(format)
                ? 'format'
                : 'standalone'
            ]
        return m === true
          ? shiftWeekdays(weekdays, this._week.dow)
          : m
          ? weekdays[m.day()]
          : weekdays
      }

      function localeWeekdaysShort(m) {
        return m === true
          ? shiftWeekdays(this._weekdaysShort, this._week.dow)
          : m
          ? this._weekdaysShort[m.day()]
          : this._weekdaysShort
      }

      function localeWeekdaysMin(m) {
        return m === true
          ? shiftWeekdays(this._weekdaysMin, this._week.dow)
          : m
          ? this._weekdaysMin[m.day()]
          : this._weekdaysMin
      }

      function handleStrictParse$1(weekdayName, format, strict) {
        var i,
          ii,
          mom,
          llc = weekdayName.toLocaleLowerCase()
        if (!this._weekdaysParse) {
          this._weekdaysParse = []
          this._shortWeekdaysParse = []
          this._minWeekdaysParse = []

          for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i)
            this._minWeekdaysParse[i] = this.weekdaysMin(
              mom,
              ''
            ).toLocaleLowerCase()
            this._shortWeekdaysParse[i] = this.weekdaysShort(
              mom,
              ''
            ).toLocaleLowerCase()
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase()
          }
        }

        if (strict) {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc)
            return ii !== -1 ? ii : null
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc)
            return ii !== -1 ? ii : null
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc)
            return ii !== -1 ? ii : null
          }
        } else {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._minWeekdaysParse, llc)
            return ii !== -1 ? ii : null
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._weekdaysParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._minWeekdaysParse, llc)
            return ii !== -1 ? ii : null
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._weekdaysParse, llc)
            if (ii !== -1) {
              return ii
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc)
            return ii !== -1 ? ii : null
          }
        }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex

        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict)
        }

        if (!this._weekdaysParse) {
          this._weekdaysParse = []
          this._minWeekdaysParse = []
          this._shortWeekdaysParse = []
          this._fullWeekdaysParse = []
        }

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already

          mom = createUTC([2000, 1]).day(i)
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
              '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
              'i'
            )
            this._shortWeekdaysParse[i] = new RegExp(
              '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
              'i'
            )
            this._minWeekdaysParse[i] = new RegExp(
              '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
              'i'
            )
          }
          if (!this._weekdaysParse[i]) {
            regex =
              '^' +
              this.weekdays(mom, '') +
              '|^' +
              this.weekdaysShort(mom, '') +
              '|^' +
              this.weekdaysMin(mom, '')
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i')
          }
          // test the regex
          if (
            strict &&
            format === 'dddd' &&
            this._fullWeekdaysParse[i].test(weekdayName)
          ) {
            return i
          } else if (
            strict &&
            format === 'ddd' &&
            this._shortWeekdaysParse[i].test(weekdayName)
          ) {
            return i
          } else if (
            strict &&
            format === 'dd' &&
            this._minWeekdaysParse[i].test(weekdayName)
          ) {
            return i
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i
          }
        }
      }

      // MOMENTS

      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
        if (input != null) {
          input = parseWeekday(input, this.localeData())
          return this.add(input - day, 'd')
        } else {
          return day
        }
      }

      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7
        return input == null ? weekday : this.add(input - weekday, 'd')
      }

      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData())
          return this.day(this.day() % 7 ? weekday : weekday - 7)
        } else {
          return this.day() || 7
        }
      }

      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this)
          }
          if (isStrict) {
            return this._weekdaysStrictRegex
          } else {
            return this._weekdaysRegex
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex
          }
          return this._weekdaysStrictRegex && isStrict
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex
        }
      }

      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this)
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex
          } else {
            return this._weekdaysShortRegex
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex
          }
          return this._weekdaysShortStrictRegex && isStrict
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex
        }
      }

      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this)
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex
          } else {
            return this._weekdaysMinRegex
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex
          }
          return this._weekdaysMinStrictRegex && isStrict
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex
        }
      }

      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length
        }

        var minPieces = [],
          shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom,
          minp,
          shortp,
          longp
        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i)
          minp = regexEscape(this.weekdaysMin(mom, ''))
          shortp = regexEscape(this.weekdaysShort(mom, ''))
          longp = regexEscape(this.weekdays(mom, ''))
          minPieces.push(minp)
          shortPieces.push(shortp)
          longPieces.push(longp)
          mixedPieces.push(minp)
          mixedPieces.push(shortp)
          mixedPieces.push(longp)
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev)
        shortPieces.sort(cmpLenRev)
        longPieces.sort(cmpLenRev)
        mixedPieces.sort(cmpLenRev)

        this._weekdaysRegex = new RegExp(
          '^(' + mixedPieces.join('|') + ')',
          'i'
        )
        this._weekdaysShortRegex = this._weekdaysRegex
        this._weekdaysMinRegex = this._weekdaysRegex

        this._weekdaysStrictRegex = new RegExp(
          '^(' + longPieces.join('|') + ')',
          'i'
        )
        this._weekdaysShortStrictRegex = new RegExp(
          '^(' + shortPieces.join('|') + ')',
          'i'
        )
        this._weekdaysMinStrictRegex = new RegExp(
          '^(' + minPieces.join('|') + ')',
          'i'
        )
      }

      // FORMATTING

      function hFormat() {
        return this.hours() % 12 || 12
      }

      function kFormat() {
        return this.hours() || 24
      }

      addFormatToken('H', ['HH', 2], 0, 'hour')
      addFormatToken('h', ['hh', 2], 0, hFormat)
      addFormatToken('k', ['kk', 2], 0, kFormat)

      addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2)
      })

      addFormatToken('hmmss', 0, 0, function () {
        return (
          '' +
          hFormat.apply(this) +
          zeroFill(this.minutes(), 2) +
          zeroFill(this.seconds(), 2)
        )
      })

      addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2)
      })

      addFormatToken('Hmmss', 0, 0, function () {
        return (
          '' +
          this.hours() +
          zeroFill(this.minutes(), 2) +
          zeroFill(this.seconds(), 2)
        )
      })

      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
          )
        })
      }

      meridiem('a', true)
      meridiem('A', false)

      // ALIASES

      addUnitAlias('hour', 'h')

      // PRIORITY
      addUnitPriority('hour', 13)

      // PARSING

      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse
      }

      addRegexToken('a', matchMeridiem)
      addRegexToken('A', matchMeridiem)
      addRegexToken('H', match1to2)
      addRegexToken('h', match1to2)
      addRegexToken('k', match1to2)
      addRegexToken('HH', match1to2, match2)
      addRegexToken('hh', match1to2, match2)
      addRegexToken('kk', match1to2, match2)

      addRegexToken('hmm', match3to4)
      addRegexToken('hmmss', match5to6)
      addRegexToken('Hmm', match3to4)
      addRegexToken('Hmmss', match5to6)

      addParseToken(['H', 'HH'], HOUR)
      addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input)
        array[HOUR] = kInput === 24 ? 0 : kInput
      })
      addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input)
        config._meridiem = input
      })
      addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input)
        getParsingFlags(config).bigHour = true
      })
      addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2
        array[HOUR] = toInt(input.substr(0, pos))
        array[MINUTE] = toInt(input.substr(pos))
        getParsingFlags(config).bigHour = true
      })
      addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
          pos2 = input.length - 2
        array[HOUR] = toInt(input.substr(0, pos1))
        array[MINUTE] = toInt(input.substr(pos1, 2))
        array[SECOND] = toInt(input.substr(pos2))
        getParsingFlags(config).bigHour = true
      })
      addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2
        array[HOUR] = toInt(input.substr(0, pos))
        array[MINUTE] = toInt(input.substr(pos))
      })
      addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
          pos2 = input.length - 2
        array[HOUR] = toInt(input.substr(0, pos1))
        array[MINUTE] = toInt(input.substr(pos1, 2))
        array[SECOND] = toInt(input.substr(pos2))
      })

      // LOCALES

      function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p'
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true)

      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'pm' : 'PM'
        } else {
          return isLower ? 'am' : 'AM'
        }
      }

      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
      }

      // internal storage for locale config files
      var locales = {},
        localeFamilies = {},
        globalLocale

      function commonPrefix(arr1, arr2) {
        var i,
          minl = Math.min(arr1.length, arr2.length)
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i
          }
        }
        return minl
      }

      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key
      }

      // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
      function chooseLocale(names) {
        var i = 0,
          j,
          next,
          locale,
          split

        while (i < names.length) {
          split = normalizeLocale(names[i]).split('-')
          j = split.length
          next = normalizeLocale(names[i + 1])
          next = next ? next.split('-') : null
          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'))
            if (locale) {
              return locale
            }
            if (
              next &&
              next.length >= j &&
              commonPrefix(split, next) >= j - 1
            ) {
              //the next array item is better than a shallower substring of this one
              break
            }
            j--
          }
          i++
        }
        return globalLocale
      }

      function loadLocale(name) {
        var oldLocale = null,
          aliasedRequire
        // TODO: Find a better way to register and load all the locales in Node
        if (
          locales[name] === undefined &&
          'object' !== 'undefined' &&
          module &&
          module.exports
        ) {
          try {
            oldLocale = globalLocale._abbr
            aliasedRequire = require
            aliasedRequire('./locale/' + name)
            getSetGlobalLocale(oldLocale)
          } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null // null means not found
          }
        }
        return locales[name]
      }

      // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.
      function getSetGlobalLocale(key, values) {
        var data
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key)
          } else {
            data = defineLocale(key, values)
          }

          if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data
          } else {
            if (typeof console !== 'undefined' && console.warn) {
              //warn user if arguments are passed but the locale could not be set
              console.warn(
                'Locale ' + key + ' not found. Did you forget to load it?'
              )
            }
          }
        }

        return globalLocale._abbr
      }

      function defineLocale(name, config) {
        if (config !== null) {
          var locale,
            parentConfig = baseConfig
          config.abbr = name
          if (locales[name] != null) {
            deprecateSimple(
              'defineLocaleOverride',
              'use moment.updateLocale(localeName, config) to change ' +
                'an existing locale. moment.defineLocale(localeName, ' +
                'config) should only be used for creating a new locale ' +
                'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
            )
            parentConfig = locales[name]._config
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config
            } else {
              locale = loadLocale(config.parentLocale)
              if (locale != null) {
                parentConfig = locale._config
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = []
                }
                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
                })
                return null
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config))

          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
              defineLocale(x.name, x.config)
            })
          }

          // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.
          getSetGlobalLocale(name)

          return locales[name]
        } else {
          // useful for testing
          delete locales[name]
          return null
        }
      }

      function updateLocale(name, config) {
        if (config != null) {
          var locale,
            tmpLocale,
            parentConfig = baseConfig

          if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config))
          } else {
            // MERGE
            tmpLocale = loadLocale(name)
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config
            }
            config = mergeConfigs(parentConfig, config)
            if (tmpLocale == null) {
              // updateLocale is called for creating a new locale
              // Set abbr so it will have a name (getters return
              // undefined otherwise).
              config.abbr = name
            }
            locale = new Locale(config)
            locale.parentLocale = locales[name]
            locales[name] = locale
          }

          // backwards compat for now: also set the locale
          getSetGlobalLocale(name)
        } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale
              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name)
              }
            } else if (locales[name] != null) {
              delete locales[name]
            }
          }
        }
        return locales[name]
      }

      // returns locale data
      function getLocale(key) {
        var locale

        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr
        }

        if (!key) {
          return globalLocale
        }

        if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key)
          if (locale) {
            return locale
          }
          key = [key]
        }

        return chooseLocale(key)
      }

      function listLocales() {
        return keys(locales)
      }

      function checkOverflow(m) {
        var overflow,
          a = m._a

        if (a && getParsingFlags(m).overflow === -2) {
          overflow =
            a[MONTH] < 0 || a[MONTH] > 11
              ? MONTH
              : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
              ? DATE
              : a[HOUR] < 0 ||
                a[HOUR] > 24 ||
                (a[HOUR] === 24 &&
                  (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0))
              ? HOUR
              : a[MINUTE] < 0 || a[MINUTE] > 59
              ? MINUTE
              : a[SECOND] < 0 || a[SECOND] > 59
              ? SECOND
              : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
              ? MILLISECOND
              : -1

          if (
            getParsingFlags(m)._overflowDayOfYear &&
            (overflow < YEAR || overflow > DATE)
          ) {
            overflow = DATE
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY
          }

          getParsingFlags(m).overflow = overflow
        }

        return m
      }

      // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
      var extendedIsoRegex =
          /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex =
          /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
          ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
          ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
          ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
          ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
          ['YYYY-DDD', /\d{4}-\d{3}/],
          ['YYYY-MM', /\d{4}-\d\d/, false],
          ['YYYYYYMMDD', /[+-]\d{10}/],
          ['YYYYMMDD', /\d{8}/],
          ['GGGG[W]WWE', /\d{4}W\d{3}/],
          ['GGGG[W]WW', /\d{4}W\d{2}/, false],
          ['YYYYDDD', /\d{7}/],
          ['YYYYMM', /\d{6}/, false],
          ['YYYY', /\d{4}/, false]
        ],
        // iso time formats and regexes
        isoTimes = [
          ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
          ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
          ['HH:mm:ss', /\d\d:\d\d:\d\d/],
          ['HH:mm', /\d\d:\d\d/],
          ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
          ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
          ['HHmmss', /\d\d\d\d\d\d/],
          ['HHmm', /\d\d\d\d/],
          ['HH', /\d\d/]
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        }

      // date from iso format
      function configFromISO(config) {
        var i,
          l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime,
          dateFormat,
          timeFormat,
          tzFormat

        if (match) {
          getParsingFlags(config).iso = true

          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0]
              allowTime = isoDates[i][2] !== false
              break
            }
          }
          if (dateFormat == null) {
            config._isValid = false
            return
          }
          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0]
                break
              }
            }
            if (timeFormat == null) {
              config._isValid = false
              return
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false
            return
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = 'Z'
            } else {
              config._isValid = false
              return
            }
          }
          config._f = dateFormat + (timeFormat || '') + (tzFormat || '')
          configFromStringAndFormat(config)
        } else {
          config._isValid = false
        }
      }

      function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
      ) {
        var result = [
          untruncateYear(yearStr),
          defaultLocaleMonthsShort.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
        ]

        if (secondStr) {
          result.push(parseInt(secondStr, 10))
        }

        return result
      }

      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10)
        if (year <= 49) {
          return 2000 + year
        } else if (year <= 999) {
          return 1900 + year
        }
        return year
      }

      function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
          .replace(/\([^)]*\)|[\n\t]/g, ' ')
          .replace(/(\s\s+)/g, ' ')
          .replace(/^\s\s*/, '')
          .replace(/\s\s*$/, '')
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(
              parsedInput[0],
              parsedInput[1],
              parsedInput[2]
            ).getDay()
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true
            config._isValid = false
            return false
          }
        }
        return true
      }

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset]
        } else if (militaryOffset) {
          // the only allowed military tz is Z
          return 0
        } else {
          var hm = parseInt(numOffset, 10),
            m = hm % 100,
            h = (hm - m) / 100
          return h * 60 + m
        }
      }

      // date and time from ref 2822 format
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
          parsedArray
        if (match) {
          parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
          )
          if (!checkWeekday(match[1], parsedArray, config)) {
            return
          }

          config._a = parsedArray
          config._tzm = calculateOffset(match[8], match[9], match[10])

          config._d = createUTCDate.apply(null, config._a)
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm)

          getParsingFlags(config).rfc2822 = true
        } else {
          config._isValid = false
        }
      }

      // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i)
        if (matched !== null) {
          config._d = new Date(+matched[1])
          return
        }

        configFromISO(config)
        if (config._isValid === false) {
          delete config._isValid
        } else {
          return
        }

        configFromRFC2822(config)
        if (config._isValid === false) {
          delete config._isValid
        } else {
          return
        }

        if (config._strict) {
          config._isValid = false
        } else {
          // Final attempt, use Input Fallback
          hooks.createFromInputFallback(config)
        }
      }

      hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
          'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
          'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
          config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''))
        }
      )

      // Pick the first defined of two or three arguments.
      function defaults(a, b, c) {
        if (a != null) {
          return a
        }
        if (b != null) {
          return b
        }
        return c
      }

      function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now())
        if (config._useUTC) {
          return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
          ]
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()]
      }

      // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]
      function configFromArray(config) {
        var i,
          date,
          input = [],
          currentDate,
          expectedWeekday,
          yearToUse

        if (config._d) {
          return
        }

        currentDate = currentDateArray(config)

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config)
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR])

          if (
            config._dayOfYear > daysInYear(yearToUse) ||
            config._dayOfYear === 0
          ) {
            getParsingFlags(config)._overflowDayOfYear = true
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear)
          config._a[MONTH] = date.getUTCMonth()
          config._a[DATE] = date.getUTCDate()
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i]
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
          config._a[i] = input[i] =
            config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i]
        }

        // Check for 24:00:00.000
        if (
          config._a[HOUR] === 24 &&
          config._a[MINUTE] === 0 &&
          config._a[SECOND] === 0 &&
          config._a[MILLISECOND] === 0
        ) {
          config._nextDay = true
          config._a[HOUR] = 0
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
          null,
          input
        )
        expectedWeekday = config._useUTC
          ? config._d.getUTCDay()
          : config._d.getDay()

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm)
        }

        if (config._nextDay) {
          config._a[HOUR] = 24
        }

        // check for mismatching day of week
        if (
          config._w &&
          typeof config._w.d !== 'undefined' &&
          config._w.d !== expectedWeekday
        ) {
          getParsingFlags(config).weekdayMismatch = true
        }
      }

      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek

        w = config._w
        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1
          doy = 4

          // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).
          weekYear = defaults(
            w.GG,
            config._a[YEAR],
            weekOfYear(createLocal(), 1, 4).year
          )
          week = defaults(w.W, 1)
          weekday = defaults(w.E, 1)
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true
          }
        } else {
          dow = config._locale._week.dow
          doy = config._locale._week.doy

          curWeek = weekOfYear(createLocal(), dow, doy)

          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year)

          // Default to current week.
          week = defaults(w.w, curWeek.week)

          if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true
            }
          } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow
            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true
            }
          } else {
            // default to beginning of week
            weekday = dow
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy)
          config._a[YEAR] = temp.year
          config._dayOfYear = temp.dayOfYear
        }
      }

      // constant that refers to the ISO standard
      hooks.ISO_8601 = function () {}

      // constant that refers to the RFC 2822 form
      hooks.RFC_2822 = function () {}

      // date from string and format string
      function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
          configFromISO(config)
          return
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config)
          return
        }
        config._a = []
        getParsingFlags(config).empty = true

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
          i,
          parsedInput,
          tokens,
          token,
          skipped,
          stringLength = string.length,
          totalParsedInputLength = 0,
          era

        tokens =
          expandFormat(config._f, config._locale).match(formattingTokens) || []

        for (i = 0; i < tokens.length; i++) {
          token = tokens[i]
          parsedInput = (string.match(getParseRegexForToken(token, config)) ||
            [])[0]
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput))
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped)
            }
            string = string.slice(
              string.indexOf(parsedInput) + parsedInput.length
            )
            totalParsedInputLength += parsedInput.length
          }
          // don't parse if it's not a known token
          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false
            } else {
              getParsingFlags(config).unusedTokens.push(token)
            }
            addTimeToArrayFromToken(token, parsedInput, config)
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token)
          }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
          stringLength - totalParsedInputLength
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string)
        }

        // clear _12h flag if hour is <= 12
        if (
          config._a[HOUR] <= 12 &&
          getParsingFlags(config).bigHour === true &&
          config._a[HOUR] > 0
        ) {
          getParsingFlags(config).bigHour = undefined
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0)
        getParsingFlags(config).meridiem = config._meridiem
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
          config._locale,
          config._a[HOUR],
          config._meridiem
        )

        // handle era
        era = getParsingFlags(config).era
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR])
        }

        configFromArray(config)
        checkOverflow(config)
      }

      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm

        if (meridiem == null) {
          // nothing to do
          return hour
        }
        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem)
        } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem)
          if (isPm && hour < 12) {
            hour += 12
          }
          if (!isPm && hour === 12) {
            hour = 0
          }
          return hour
        } else {
          // this is not supposed to happen
          return hour
        }
      }

      // date from string and array of format strings
      function configFromStringAndArray(config) {
        var tempConfig,
          bestMoment,
          scoreToBeat,
          i,
          currentScore,
          validFormatFound,
          bestFormatIsValid = false

        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true
          config._d = new Date(NaN)
          return
        }

        for (i = 0; i < config._f.length; i++) {
          currentScore = 0
          validFormatFound = false
          tempConfig = copyConfig({}, config)
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC
          }
          tempConfig._f = config._f[i]
          configFromStringAndFormat(tempConfig)

          if (isValid(tempConfig)) {
            validFormatFound = true
          }

          // if there is any input that was not parsed add a penalty for that format
          currentScore += getParsingFlags(tempConfig).charsLeftOver

          //or tokens
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10

          getParsingFlags(tempConfig).score = currentScore

          if (!bestFormatIsValid) {
            if (
              scoreToBeat == null ||
              currentScore < scoreToBeat ||
              validFormatFound
            ) {
              scoreToBeat = currentScore
              bestMoment = tempConfig
              if (validFormatFound) {
                bestFormatIsValid = true
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore
              bestMoment = tempConfig
            }
          }
        }

        extend(config, bestMoment || tempConfig)
      }

      function configFromObject(config) {
        if (config._d) {
          return
        }

        var i = normalizeObjectUnits(config._i),
          dayOrDate = i.day === undefined ? i.date : i.day
        config._a = map(
          [
            i.year,
            i.month,
            dayOrDate,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
          ],
          function (obj) {
            return obj && parseInt(obj, 10)
          }
        )

        configFromArray(config)
      }

      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)))
        if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd')
          res._nextDay = undefined
        }

        return res
      }

      function prepareConfig(config) {
        var input = config._i,
          format = config._f

        config._locale = config._locale || getLocale(config._l)

        if (input === null || (format === undefined && input === '')) {
          return createInvalid({ nullInput: true })
        }

        if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input)
        }

        if (isMoment(input)) {
          return new Moment(checkOverflow(input))
        } else if (isDate(input)) {
          config._d = input
        } else if (isArray(format)) {
          configFromStringAndArray(config)
        } else if (format) {
          configFromStringAndFormat(config)
        } else {
          configFromInput(config)
        }

        if (!isValid(config)) {
          config._d = null
        }

        return config
      }

      function configFromInput(config) {
        var input = config._i
        if (isUndefined(input)) {
          config._d = new Date(hooks.now())
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf())
        } else if (typeof input === 'string') {
          configFromString(config)
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10)
          })
          configFromArray(config)
        } else if (isObject(input)) {
          configFromObject(config)
        } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input)
        } else {
          hooks.createFromInputFallback(config)
        }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {}

        if (format === true || format === false) {
          strict = format
          format = undefined
        }

        if (locale === true || locale === false) {
          strict = locale
          locale = undefined
        }

        if (
          (isObject(input) && isObjectEmpty(input)) ||
          (isArray(input) && input.length === 0)
        ) {
          input = undefined
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true
        c._useUTC = c._isUTC = isUTC
        c._l = locale
        c._i = input
        c._f = format
        c._strict = strict

        return createFromConfig(c)
      }

      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false)
      }

      var prototypeMin = deprecate(
          'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
          function () {
            var other = createLocal.apply(null, arguments)
            if (this.isValid() && other.isValid()) {
              return other < this ? this : other
            } else {
              return createInvalid()
            }
          }
        ),
        prototypeMax = deprecate(
          'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
          function () {
            var other = createLocal.apply(null, arguments)
            if (this.isValid() && other.isValid()) {
              return other > this ? this : other
            } else {
              return createInvalid()
            }
          }
        )

      // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.
      function pickBy(fn, moments) {
        var res, i
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0]
        }
        if (!moments.length) {
          return createLocal()
        }
        res = moments[0]
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i]
          }
        }
        return res
      }

      // TODO: Use [].sort instead?
      function min() {
        var args = [].slice.call(arguments, 0)

        return pickBy('isBefore', args)
      }

      function max() {
        var args = [].slice.call(arguments, 0)

        return pickBy('isAfter', args)
      }

      var now = function () {
        return Date.now ? Date.now() : +new Date()
      }

      var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond'
      ]

      function isDurationValid(m) {
        var key,
          unitHasDecimal = false,
          i
        for (key in m) {
          if (
            hasOwnProp(m, key) &&
            !(
              indexOf.call(ordering, key) !== -1 &&
              (m[key] == null || !isNaN(m[key]))
            )
          ) {
            return false
          }
        }

        for (i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true
            }
          }
        }

        return true
      }

      function isValid$1() {
        return this._isValid
      }

      function createInvalid$1() {
        return createDuration(NaN)
      }

      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0

        this._isValid = isDurationValid(normalizedInput)

        // representation for dateAddRemove
        this._milliseconds =
          +milliseconds +
          seconds * 1e3 + // 1000
          minutes * 6e4 + // 1000 * 60
          hours * 1000 * 60 * 60 //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12

        this._data = {}

        this._locale = getLocale()

        this._bubble()
      }

      function isDuration(obj) {
        return obj instanceof Duration
      }

      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1
        } else {
          return Math.round(number)
        }
      }

      // compare two arrays, return the number of differences
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i
        for (i = 0; i < len; i++) {
          if (
            (dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
          ) {
            diffs++
          }
        }
        return diffs + lengthDiff
      }

      // FORMATTING

      function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset(),
            sign = '+'
          if (offset < 0) {
            offset = -offset
            sign = '-'
          }
          return (
            sign +
            zeroFill(~~(offset / 60), 2) +
            separator +
            zeroFill(~~offset % 60, 2)
          )
        })
      }

      offset('Z', ':')
      offset('ZZ', '')

      // PARSING

      addRegexToken('Z', matchShortOffset)
      addRegexToken('ZZ', matchShortOffset)
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true
        config._tzm = offsetFromString(matchShortOffset, input)
      })

      // HELPERS

      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']
      var chunkOffset = /([\+\-]|\d\d)/gi

      function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
          chunk,
          parts,
          minutes

        if (matches === null) {
          return null
        }

        chunk = matches[matches.length - 1] || []
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0]
        minutes = +(parts[1] * 60) + toInt(parts[2])

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes
      }

      // Return a moment from input, that is local/utc/zone equivalent to model.
      function cloneWithOffset(input, model) {
        var res, diff
        if (model._isUTC) {
          res = model.clone()
          diff =
            (isMoment(input) || isDate(input)
              ? input.valueOf()
              : createLocal(input).valueOf()) - res.valueOf()
          // Use low-level api, because this fn is low-level api.
          res._d.setTime(res._d.valueOf() + diff)
          hooks.updateOffset(res, false)
          return res
        } else {
          return createLocal(input).local()
        }
      }

      function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset())
      }

      // HOOKS

      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.
      hooks.updateOffset = function () {}

      // MOMENTS

      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
          localAdjust
        if (!this.isValid()) {
          return input != null ? this : NaN
        }
        if (input != null) {
          if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input)
            if (input === null) {
              return this
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this)
          }
          this._offset = input
          this._isUTC = true
          if (localAdjust != null) {
            this.add(localAdjust, 'm')
          }
          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, 'm'), 1, false)
            } else if (!this._changeInProgress) {
              this._changeInProgress = true
              hooks.updateOffset(this, true)
              this._changeInProgress = null
            }
          }
          return this
        } else {
          return this._isUTC ? offset : getDateOffset(this)
        }
      }

      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== 'string') {
            input = -input
          }

          this.utcOffset(input, keepLocalTime)

          return this
        } else {
          return -this.utcOffset()
        }
      }

      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime)
      }

      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime)
          this._isUTC = false

          if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm')
          }
        }
        return this
      }

      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true)
        } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i)
          if (tZone != null) {
            this.utcOffset(tZone)
          } else {
            this.utcOffset(0, true)
          }
        }
        return this
      }

      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false
        }
        input = input ? createLocal(input).utcOffset() : 0

        return (this.utcOffset() - input) % 60 === 0
      }

      function isDaylightSavingTime() {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        )
      }

      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted
        }

        var c = {},
          other

        copyConfig(c, this)
        c = prepareConfig(c)

        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a)
          this._isDSTShifted =
            this.isValid() && compareArrays(c._a, other.toArray()) > 0
        } else {
          this._isDSTShifted = false
        }

        return this._isDSTShifted
      }

      function isLocal() {
        return this.isValid() ? !this._isUTC : false
      }

      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false
      }

      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false
      }

      // ASP.NET json date format regex
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex =
          /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/

      function createDuration(input, key) {
        var duration = input,
          // matching against regexp is expensive, do it on demand
          match = null,
          sign,
          ret,
          diffRes

        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          }
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {}
          if (key) {
            duration[key] = +input
          } else {
            duration.milliseconds = +input
          }
        } else if ((match = aspNetRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
          }
        } else if ((match = isoRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
          }
        } else if (duration == null) {
          // checks for null or undefined
          duration = {}
        } else if (
          typeof duration === 'object' &&
          ('from' in duration || 'to' in duration)
        ) {
          diffRes = momentsDifference(
            createLocal(duration.from),
            createLocal(duration.to)
          )

          duration = {}
          duration.ms = diffRes.milliseconds
          duration.M = diffRes.months
        }

        ret = new Duration(duration)

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
          ret._isValid = input._isValid
        }

        return ret
      }

      createDuration.fn = Duration.prototype
      createDuration.invalid = createInvalid$1

      function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'))
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign
      }

      function positiveMomentsDifference(base, other) {
        var res = {}

        res.months =
          other.month() - base.month() + (other.year() - base.year()) * 12
        if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M')

        return res
      }

      function momentsDifference(base, other) {
        var res
        if (!(base.isValid() && other.isValid())) {
          return { milliseconds: 0, months: 0 }
        }

        other = cloneWithOffset(other, base)
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other)
        } else {
          res = positiveMomentsDifference(other, base)
          res.milliseconds = -res.milliseconds
          res.months = -res.months
        }

        return res
      }

      // TODO: remove 'name' arg after deprecation is removed
      function createAdder(direction, name) {
        return function (val, period) {
          var dur, tmp
          //invert the arguments, but complain about it
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(
              name,
              'moment().' +
                name +
                '(period, number) is deprecated. Please use moment().' +
                name +
                '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
            )
            tmp = val
            val = period
            period = tmp
          }

          dur = createDuration(val, period)
          addSubtract(this, dur, direction)
          return this
        }
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
          days = absRound(duration._days),
          months = absRound(duration._months)

        if (!mom.isValid()) {
          // No op
          return
        }

        updateOffset = updateOffset == null ? true : updateOffset

        if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding)
        }
        if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding)
        }
        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding)
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days || months)
        }
      }

      var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract')

      function isString(input) {
        return typeof input === 'string' || input instanceof String
      }

      // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
      function isMomentInput(input) {
        return (
          isMoment(input) ||
          isDate(input) ||
          isString(input) ||
          isNumber(input) ||
          isNumberOrStringArray(input) ||
          isMomentInputObject(input) ||
          input === null ||
          input === undefined
        )
      }

      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
          propertyTest = false,
          properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms'
          ],
          i,
          property

        for (i = 0; i < properties.length; i += 1) {
          property = properties[i]
          propertyTest = propertyTest || hasOwnProp(input, property)
        }

        return objectTest && propertyTest
      }

      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
          dataTypeTest = false
        if (arrayTest) {
          dataTypeTest =
            input.filter(function (item) {
              return !isNumber(item) && isString(input)
            }).length === 0
        }
        return arrayTest && dataTypeTest
      }

      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
          propertyTest = false,
          properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse'
          ],
          i,
          property

        for (i = 0; i < properties.length; i += 1) {
          property = properties[i]
          propertyTest = propertyTest || hasOwnProp(input, property)
        }

        return objectTest && propertyTest
      }

      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true)
        return diff < -6
          ? 'sameElse'
          : diff < -1
          ? 'lastWeek'
          : diff < 0
          ? 'lastDay'
          : diff < 1
          ? 'sameDay'
          : diff < 2
          ? 'nextDay'
          : diff < 7
          ? 'nextWeek'
          : 'sameElse'
      }

      function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = undefined
            formats = undefined
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0]
            formats = undefined
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0]
            time = undefined
          }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          format = hooks.calendarFormat(this, sod) || 'sameElse',
          output =
            formats &&
            (isFunction(formats[format])
              ? formats[format].call(this, now)
              : formats[format])

        return this.format(
          output || this.localeData().calendar(format, this, createLocal(now))
        )
      }

      function clone() {
        return new Moment(this)
      }

      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input)
        if (!(this.isValid() && localInput.isValid())) {
          return false
        }
        units = normalizeUnits(units) || 'millisecond'
        if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf()
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf()
        }
      }

      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input)
        if (!(this.isValid() && localInput.isValid())) {
          return false
        }
        units = normalizeUnits(units) || 'millisecond'
        if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf()
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf()
        }
      }

      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
          localTo = isMoment(to) ? to : createLocal(to)
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false
        }
        inclusivity = inclusivity || '()'
        return (
          (inclusivity[0] === '('
            ? this.isAfter(localFrom, units)
            : !this.isBefore(localFrom, units)) &&
          (inclusivity[1] === ')'
            ? this.isBefore(localTo, units)
            : !this.isAfter(localTo, units))
        )
      }

      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
          inputMs
        if (!(this.isValid() && localInput.isValid())) {
          return false
        }
        units = normalizeUnits(units) || 'millisecond'
        if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf()
        } else {
          inputMs = localInput.valueOf()
          return (
            this.clone().startOf(units).valueOf() <= inputMs &&
            inputMs <= this.clone().endOf(units).valueOf()
          )
        }
      }

      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units)
      }

      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units)
      }

      function diff(input, units, asFloat) {
        var that, zoneDelta, output

        if (!this.isValid()) {
          return NaN
        }

        that = cloneWithOffset(input, this)

        if (!that.isValid()) {
          return NaN
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4

        units = normalizeUnits(units)

        switch (units) {
          case 'year':
            output = monthDiff(this, that) / 12
            break
          case 'month':
            output = monthDiff(this, that)
            break
          case 'quarter':
            output = monthDiff(this, that) / 3
            break
          case 'second':
            output = (this - that) / 1e3
            break // 1000
          case 'minute':
            output = (this - that) / 6e4
            break // 1000 * 60
          case 'hour':
            output = (this - that) / 36e5
            break // 1000 * 60 * 60
          case 'day':
            output = (this - that - zoneDelta) / 864e5
            break // 1000 * 60 * 60 * 24, negate dst
          case 'week':
            output = (this - that - zoneDelta) / 6048e5
            break // 1000 * 60 * 60 * 24 * 7, negate dst
          default:
            output = this - that
        }

        return asFloat ? output : absFloor(output)
      }

      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          // end-of-month calculations work correct when the start month has more
          // days than the end month.
          return -monthDiff(b, a)
        }
        // difference in months
        var wholeMonthDiff =
            (b.year() - a.year()) * 12 + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
          anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2,
          adjust

        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months')
          // linear across the month
          adjust = (b - anchor) / (anchor - anchor2)
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months')
          // linear across the month
          adjust = (b - anchor) / (anchor2 - anchor)
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]'

      function toString() {
        return this.clone()
          .locale('en')
          .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
      }

      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null
        }
        var utc = keepOffset !== true,
          m = utc ? this.clone().utc() : this
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(
            m,
            utc
              ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
              : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
          )
        }
        if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          if (utc) {
            return this.toDate().toISOString()
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
              .toISOString()
              .replace('Z', formatMoment(m, 'Z'))
          }
        }
        return formatMoment(
          m,
          utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        )
      }

      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */
      function inspect() {
        if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)'
        }
        var func = 'moment',
          zone = '',
          prefix,
          year,
          datetime,
          suffix
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone'
          zone = 'Z'
        }
        prefix = '[' + func + '("]'
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'
        datetime = '-MM-DD[T]HH:mm:ss.SSS'
        suffix = zone + '[")]'

        return this.format(prefix + year + datetime + suffix)
      }

      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc()
            ? hooks.defaultFormatUtc
            : hooks.defaultFormat
        }
        var output = formatMoment(this, inputString)
        return this.localeData().postformat(output)
      }

      function from(time, withoutSuffix) {
        if (
          this.isValid() &&
          ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
          return createDuration({ to: this, from: time })
            .locale(this.locale())
            .humanize(!withoutSuffix)
        } else {
          return this.localeData().invalidDate()
        }
      }

      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix)
      }

      function to(time, withoutSuffix) {
        if (
          this.isValid() &&
          ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
          return createDuration({ from: this, to: time })
            .locale(this.locale())
            .humanize(!withoutSuffix)
        } else {
          return this.localeData().invalidDate()
        }
      }

      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix)
      }

      // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.
      function locale(key) {
        var newLocaleData

        if (key === undefined) {
          return this._locale._abbr
        } else {
          newLocaleData = getLocale(key)
          if (newLocaleData != null) {
            this._locale = newLocaleData
          }
          return this
        }
      }

      var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
          if (key === undefined) {
            return this.localeData()
          } else {
            return this.locale(key)
          }
        }
      )

      function localeData() {
        return this._locale
      }

      var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR

      // actual modulo - handles negative numbers (for dates before 1970):
      function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor
      }

      function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return new Date(y + 400, m, d) - MS_PER_400_YEARS
        } else {
          return new Date(y, m, d).valueOf()
        }
      }

      function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS
        } else {
          return Date.UTC(y, m, d)
        }
      }

      function startOf(units) {
        var time, startOfDate
        units = normalizeUnits(units)
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate

        switch (units) {
          case 'year':
            time = startOfDate(this.year(), 0, 1)
            break
          case 'quarter':
            time = startOfDate(
              this.year(),
              this.month() - (this.month() % 3),
              1
            )
            break
          case 'month':
            time = startOfDate(this.year(), this.month(), 1)
            break
          case 'week':
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            )
            break
          case 'isoWeek':
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            )
            break
          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date())
            break
          case 'hour':
            time = this._d.valueOf()
            time -= mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            )
            break
          case 'minute':
            time = this._d.valueOf()
            time -= mod$1(time, MS_PER_MINUTE)
            break
          case 'second':
            time = this._d.valueOf()
            time -= mod$1(time, MS_PER_SECOND)
            break
        }

        this._d.setTime(time)
        hooks.updateOffset(this, true)
        return this
      }

      function endOf(units) {
        var time, startOfDate
        units = normalizeUnits(units)
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate

        switch (units) {
          case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1
            break
          case 'quarter':
            time =
              startOfDate(
                this.year(),
                this.month() - (this.month() % 3) + 3,
                1
              ) - 1
            break
          case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1
            break
          case 'week':
            time =
              startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday() + 7
              ) - 1
            break
          case 'isoWeek':
            time =
              startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1
            break
          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1
            break
          case 'hour':
            time = this._d.valueOf()
            time +=
              MS_PER_HOUR -
              mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              ) -
              1
            break
          case 'minute':
            time = this._d.valueOf()
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1
            break
          case 'second':
            time = this._d.valueOf()
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1
            break
        }

        this._d.setTime(time)
        hooks.updateOffset(this, true)
        return this
      }

      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000
      }

      function unix() {
        return Math.floor(this.valueOf() / 1000)
      }

      function toDate() {
        return new Date(this.valueOf())
      }

      function toArray() {
        var m = this
        return [
          m.year(),
          m.month(),
          m.date(),
          m.hour(),
          m.minute(),
          m.second(),
          m.millisecond()
        ]
      }

      function toObject() {
        var m = this
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        }
      }

      function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null
      }

      function isValid$2() {
        return isValid(this)
      }

      function parsingFlags() {
        return extend({}, getParsingFlags(this))
      }

      function invalidAt() {
        return getParsingFlags(this).overflow
      }

      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        }
      }

      addFormatToken('N', 0, 0, 'eraAbbr')
      addFormatToken('NN', 0, 0, 'eraAbbr')
      addFormatToken('NNN', 0, 0, 'eraAbbr')
      addFormatToken('NNNN', 0, 0, 'eraName')
      addFormatToken('NNNNN', 0, 0, 'eraNarrow')

      addFormatToken('y', ['y', 1], 'yo', 'eraYear')
      addFormatToken('y', ['yy', 2], 0, 'eraYear')
      addFormatToken('y', ['yyy', 3], 0, 'eraYear')
      addFormatToken('y', ['yyyy', 4], 0, 'eraYear')

      addRegexToken('N', matchEraAbbr)
      addRegexToken('NN', matchEraAbbr)
      addRegexToken('NNN', matchEraAbbr)
      addRegexToken('NNNN', matchEraName)
      addRegexToken('NNNNN', matchEraNarrow)

      addParseToken(
        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
        function (input, array, config, token) {
          var era = config._locale.erasParse(input, token, config._strict)
          if (era) {
            getParsingFlags(config).era = era
          } else {
            getParsingFlags(config).invalidEra = input
          }
        }
      )

      addRegexToken('y', matchUnsigned)
      addRegexToken('yy', matchUnsigned)
      addRegexToken('yyy', matchUnsigned)
      addRegexToken('yyyy', matchUnsigned)
      addRegexToken('yo', matchEraYearOrdinal)

      addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR)
      addParseToken(['yo'], function (input, array, config, token) {
        var match
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex)
        }

        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match)
        } else {
          array[YEAR] = parseInt(input, 10)
        }
      })

      function localeEras(m, format) {
        var i,
          l,
          date,
          eras = this._eras || getLocale('en')._eras
        for (i = 0, l = eras.length; i < l; ++i) {
          switch (typeof eras[i].since) {
            case 'string':
              // truncate time
              date = hooks(eras[i].since).startOf('day')
              eras[i].since = date.valueOf()
              break
          }

          switch (typeof eras[i].until) {
            case 'undefined':
              eras[i].until = +Infinity
              break
            case 'string':
              // truncate time
              date = hooks(eras[i].until).startOf('day').valueOf()
              eras[i].until = date.valueOf()
              break
          }
        }
        return eras
      }

      function localeErasParse(eraName, format, strict) {
        var i,
          l,
          eras = this.eras(),
          name,
          abbr,
          narrow
        eraName = eraName.toUpperCase()

        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase()
          abbr = eras[i].abbr.toUpperCase()
          narrow = eras[i].narrow.toUpperCase()

          if (strict) {
            switch (format) {
              case 'N':
              case 'NN':
              case 'NNN':
                if (abbr === eraName) {
                  return eras[i]
                }
                break

              case 'NNNN':
                if (name === eraName) {
                  return eras[i]
                }
                break

              case 'NNNNN':
                if (narrow === eraName) {
                  return eras[i]
                }
                break
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i]
          }
        }
      }

      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1
        if (year === undefined) {
          return hooks(era.since).year()
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir
        }
      }

      function getEraName() {
        var i,
          l,
          val,
          eras = this.localeData().eras()
        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf()

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name
          }
        }

        return ''
      }

      function getEraNarrow() {
        var i,
          l,
          val,
          eras = this.localeData().eras()
        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf()

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow
          }
        }

        return ''
      }

      function getEraAbbr() {
        var i,
          l,
          val,
          eras = this.localeData().eras()
        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf()

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr
          }
        }

        return ''
      }

      function getEraYear() {
        var i,
          l,
          dir,
          val,
          eras = this.localeData().eras()
        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? +1 : -1

          // truncate time
          val = this.clone().startOf('day').valueOf()

          if (
            (eras[i].since <= val && val <= eras[i].until) ||
            (eras[i].until <= val && val <= eras[i].since)
          ) {
            return (
              (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset
            )
          }
        }

        return this.year()
      }

      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
          computeErasParse.call(this)
        }
        return isStrict ? this._erasNameRegex : this._erasRegex
      }

      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
          computeErasParse.call(this)
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex
      }

      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
          computeErasParse.call(this)
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex
      }

      function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict)
      }

      function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict)
      }

      function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict)
      }

      function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned
      }

      function computeErasParse() {
        var abbrPieces = [],
          namePieces = [],
          narrowPieces = [],
          mixedPieces = [],
          i,
          l,
          eras = this.eras()

        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape(eras[i].name))
          abbrPieces.push(regexEscape(eras[i].abbr))
          narrowPieces.push(regexEscape(eras[i].narrow))

          mixedPieces.push(regexEscape(eras[i].name))
          mixedPieces.push(regexEscape(eras[i].abbr))
          mixedPieces.push(regexEscape(eras[i].narrow))
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i')
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i')
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i')
        this._erasNarrowRegex = new RegExp(
          '^(' + narrowPieces.join('|') + ')',
          'i'
        )
      }

      // FORMATTING

      addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100
      })

      addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100
      })

      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter)
      }

      addWeekYearFormatToken('gggg', 'weekYear')
      addWeekYearFormatToken('ggggg', 'weekYear')
      addWeekYearFormatToken('GGGG', 'isoWeekYear')
      addWeekYearFormatToken('GGGGG', 'isoWeekYear')

      // ALIASES

      addUnitAlias('weekYear', 'gg')
      addUnitAlias('isoWeekYear', 'GG')

      // PRIORITY

      addUnitPriority('weekYear', 1)
      addUnitPriority('isoWeekYear', 1)

      // PARSING

      addRegexToken('G', matchSigned)
      addRegexToken('g', matchSigned)
      addRegexToken('GG', match1to2, match2)
      addRegexToken('gg', match1to2, match2)
      addRegexToken('GGGG', match1to4, match4)
      addRegexToken('gggg', match1to4, match4)
      addRegexToken('GGGGG', match1to6, match6)
      addRegexToken('ggggg', match1to6, match6)

      addWeekParseToken(
        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
        function (input, week, config, token) {
          week[token.substr(0, 2)] = toInt(input)
        }
      )

      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input)
      })

      // MOMENTS

      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        )
      }

      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        )
      }

      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4)
      }

      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4)
      }

      function getWeeksInYear() {
        var weekInfo = this.localeData()._week
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
      }

      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy)
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget
        if (input == null) {
          return weekOfYear(this, dow, doy).year
        } else {
          weeksTarget = weeksInYear(input, dow, doy)
          if (week > weeksTarget) {
            week = weeksTarget
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy)
        }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(
            weekYear,
            week,
            weekday,
            dow,
            doy
          ),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear)

        this.year(date.getUTCFullYear())
        this.month(date.getUTCMonth())
        this.date(date.getUTCDate())
        return this
      }

      // FORMATTING

      addFormatToken('Q', 0, 'Qo', 'quarter')

      // ALIASES

      addUnitAlias('quarter', 'Q')

      // PRIORITY

      addUnitPriority('quarter', 7)

      // PARSING

      addRegexToken('Q', match1)
      addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3
      })

      // MOMENTS

      function getSetQuarter(input) {
        return input == null
          ? Math.ceil((this.month() + 1) / 3)
          : this.month((input - 1) * 3 + (this.month() % 3))
      }

      // FORMATTING

      addFormatToken('D', ['DD', 2], 'Do', 'date')

      // ALIASES

      addUnitAlias('date', 'D')

      // PRIORITY
      addUnitPriority('date', 9)

      // PARSING

      addRegexToken('D', match1to2)
      addRegexToken('DD', match1to2, match2)
      addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
          ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
          : locale._dayOfMonthOrdinalParseLenient
      })

      addParseToken(['D', 'DD'], DATE)
      addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0])
      })

      // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true)

      // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear')

      // ALIASES

      addUnitAlias('dayOfYear', 'DDD')

      // PRIORITY
      addUnitPriority('dayOfYear', 4)

      // PARSING

      addRegexToken('DDD', match1to3)
      addRegexToken('DDDD', match3)
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input)
      })

      // HELPERS

      // MOMENTS

      function getSetDayOfYear(input) {
        var dayOfYear =
          Math.round(
            (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
          ) + 1
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd')
      }

      // FORMATTING

      addFormatToken('m', ['mm', 2], 0, 'minute')

      // ALIASES

      addUnitAlias('minute', 'm')

      // PRIORITY

      addUnitPriority('minute', 14)

      // PARSING

      addRegexToken('m', match1to2)
      addRegexToken('mm', match1to2, match2)
      addParseToken(['m', 'mm'], MINUTE)

      // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false)

      // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second')

      // ALIASES

      addUnitAlias('second', 's')

      // PRIORITY

      addUnitPriority('second', 15)

      // PARSING

      addRegexToken('s', match1to2)
      addRegexToken('ss', match1to2, match2)
      addParseToken(['s', 'ss'], SECOND)

      // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false)

      // FORMATTING

      addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100)
      })

      addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10)
      })

      addFormatToken(0, ['SSS', 3], 0, 'millisecond')
      addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10
      })
      addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100
      })
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000
      })
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000
      })
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000
      })
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000
      })

      // ALIASES

      addUnitAlias('millisecond', 'ms')

      // PRIORITY

      addUnitPriority('millisecond', 16)

      // PARSING

      addRegexToken('S', match1to3, match1)
      addRegexToken('SS', match1to3, match2)
      addRegexToken('SSS', match1to3, match3)

      var token, getSetMillisecond
      for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned)
      }

      function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000)
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs)
      }

      getSetMillisecond = makeGetSet('Milliseconds', false)

      // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr')
      addFormatToken('zz', 0, 0, 'zoneName')

      // MOMENTS

      function getZoneAbbr() {
        return this._isUTC ? 'UTC' : ''
      }

      function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : ''
      }

      var proto = Moment.prototype

      proto.add = add
      proto.calendar = calendar$1
      proto.clone = clone
      proto.diff = diff
      proto.endOf = endOf
      proto.format = format
      proto.from = from
      proto.fromNow = fromNow
      proto.to = to
      proto.toNow = toNow
      proto.get = stringGet
      proto.invalidAt = invalidAt
      proto.isAfter = isAfter
      proto.isBefore = isBefore
      proto.isBetween = isBetween
      proto.isSame = isSame
      proto.isSameOrAfter = isSameOrAfter
      proto.isSameOrBefore = isSameOrBefore
      proto.isValid = isValid$2
      proto.lang = lang
      proto.locale = locale
      proto.localeData = localeData
      proto.max = prototypeMax
      proto.min = prototypeMin
      proto.parsingFlags = parsingFlags
      proto.set = stringSet
      proto.startOf = startOf
      proto.subtract = subtract
      proto.toArray = toArray
      proto.toObject = toObject
      proto.toDate = toDate
      proto.toISOString = toISOString
      proto.inspect = inspect
      if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
          return 'Moment<' + this.format() + '>'
        }
      }
      proto.toJSON = toJSON
      proto.toString = toString
      proto.unix = unix
      proto.valueOf = valueOf
      proto.creationData = creationData
      proto.eraName = getEraName
      proto.eraNarrow = getEraNarrow
      proto.eraAbbr = getEraAbbr
      proto.eraYear = getEraYear
      proto.year = getSetYear
      proto.isLeapYear = getIsLeapYear
      proto.weekYear = getSetWeekYear
      proto.isoWeekYear = getSetISOWeekYear
      proto.quarter = proto.quarters = getSetQuarter
      proto.month = getSetMonth
      proto.daysInMonth = getDaysInMonth
      proto.week = proto.weeks = getSetWeek
      proto.isoWeek = proto.isoWeeks = getSetISOWeek
      proto.weeksInYear = getWeeksInYear
      proto.weeksInWeekYear = getWeeksInWeekYear
      proto.isoWeeksInYear = getISOWeeksInYear
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear
      proto.date = getSetDayOfMonth
      proto.day = proto.days = getSetDayOfWeek
      proto.weekday = getSetLocaleDayOfWeek
      proto.isoWeekday = getSetISODayOfWeek
      proto.dayOfYear = getSetDayOfYear
      proto.hour = proto.hours = getSetHour
      proto.minute = proto.minutes = getSetMinute
      proto.second = proto.seconds = getSetSecond
      proto.millisecond = proto.milliseconds = getSetMillisecond
      proto.utcOffset = getSetOffset
      proto.utc = setOffsetToUTC
      proto.local = setOffsetToLocal
      proto.parseZone = setOffsetToParsedOffset
      proto.hasAlignedHourOffset = hasAlignedHourOffset
      proto.isDST = isDaylightSavingTime
      proto.isLocal = isLocal
      proto.isUtcOffset = isUtcOffset
      proto.isUtc = isUtc
      proto.isUTC = isUtc
      proto.zoneAbbr = getZoneAbbr
      proto.zoneName = getZoneName
      proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
      )
      proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
      )
      proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
      )
      proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
      )
      proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
      )

      function createUnix(input) {
        return createLocal(input * 1000)
      }

      function createInZone() {
        return createLocal.apply(null, arguments).parseZone()
      }

      function preParsePostFormat(string) {
        return string
      }

      var proto$1 = Locale.prototype

      proto$1.calendar = calendar
      proto$1.longDateFormat = longDateFormat
      proto$1.invalidDate = invalidDate
      proto$1.ordinal = ordinal
      proto$1.preparse = preParsePostFormat
      proto$1.postformat = preParsePostFormat
      proto$1.relativeTime = relativeTime
      proto$1.pastFuture = pastFuture
      proto$1.set = set
      proto$1.eras = localeEras
      proto$1.erasParse = localeErasParse
      proto$1.erasConvertYear = localeErasConvertYear
      proto$1.erasAbbrRegex = erasAbbrRegex
      proto$1.erasNameRegex = erasNameRegex
      proto$1.erasNarrowRegex = erasNarrowRegex

      proto$1.months = localeMonths
      proto$1.monthsShort = localeMonthsShort
      proto$1.monthsParse = localeMonthsParse
      proto$1.monthsRegex = monthsRegex
      proto$1.monthsShortRegex = monthsShortRegex
      proto$1.week = localeWeek
      proto$1.firstDayOfYear = localeFirstDayOfYear
      proto$1.firstDayOfWeek = localeFirstDayOfWeek

      proto$1.weekdays = localeWeekdays
      proto$1.weekdaysMin = localeWeekdaysMin
      proto$1.weekdaysShort = localeWeekdaysShort
      proto$1.weekdaysParse = localeWeekdaysParse

      proto$1.weekdaysRegex = weekdaysRegex
      proto$1.weekdaysShortRegex = weekdaysShortRegex
      proto$1.weekdaysMinRegex = weekdaysMinRegex

      proto$1.isPM = localeIsPM
      proto$1.meridiem = localeMeridiem

      function get$1(format, index, field, setter) {
        var locale = getLocale(),
          utc = createUTC().set(setter, index)
        return locale[field](utc, format)
      }

      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format
          format = undefined
        }

        format = format || ''

        if (index != null) {
          return get$1(format, index, field, 'month')
        }

        var i,
          out = []
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month')
        }
        return out
      }

      // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)
      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
            index = format
            format = undefined
          }

          format = format || ''
        } else {
          format = localeSorted
          index = format
          localeSorted = false

          if (isNumber(format)) {
            index = format
            format = undefined
          }

          format = format || ''
        }

        var locale = getLocale(),
          shift = localeSorted ? locale._week.dow : 0,
          i,
          out = []

        if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day')
        }

        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day')
        }
        return out
      }

      function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months')
      }

      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort')
      }

      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays')
      }

      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort')
      }

      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin')
      }

      getSetGlobalLocale('en', {
        eras: [
          {
            since: '0001-01-01',
            until: +Infinity,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD'
          },
          {
            since: '0000-12-31',
            until: -Infinity,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC'
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
          var b = number % 10,
            output =
              toInt((number % 100) / 10) === 1
                ? 'th'
                : b === 1
                ? 'st'
                : b === 2
                ? 'nd'
                : b === 3
                ? 'rd'
                : 'th'
          return number + output
        }
      })

      // Side effect imports

      hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
      )
      hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
      )

      var mathAbs = Math.abs

      function abs() {
        var data = this._data

        this._milliseconds = mathAbs(this._milliseconds)
        this._days = mathAbs(this._days)
        this._months = mathAbs(this._months)

        data.milliseconds = mathAbs(data.milliseconds)
        data.seconds = mathAbs(data.seconds)
        data.minutes = mathAbs(data.minutes)
        data.hours = mathAbs(data.hours)
        data.months = mathAbs(data.months)
        data.years = mathAbs(data.years)

        return this
      }

      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value)

        duration._milliseconds += direction * other._milliseconds
        duration._days += direction * other._days
        duration._months += direction * other._months

        return duration._bubble()
      }

      // supports only 2.0-style add(1, 's') or add(duration)
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1)
      }

      // supports only 2.0-style subtract(1, 's') or subtract(duration)
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1)
      }

      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number)
        } else {
          return Math.ceil(number)
        }
      }

      function bubble() {
        var milliseconds = this._milliseconds,
          days = this._days,
          months = this._months,
          data = this._data,
          seconds,
          minutes,
          hours,
          years,
          monthsFromDays

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
          !(
            (milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0)
          )
        ) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5
          days = 0
          months = 0
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000

        seconds = absFloor(milliseconds / 1000)
        data.seconds = seconds % 60

        minutes = absFloor(seconds / 60)
        data.minutes = minutes % 60

        hours = absFloor(minutes / 60)
        data.hours = hours % 24

        days += absFloor(hours / 24)

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days))
        months += monthsFromDays
        days -= absCeil(monthsToDays(monthsFromDays))

        // 12 months -> 1 year
        years = absFloor(months / 12)
        months %= 12

        data.days = days
        data.months = months
        data.years = years

        return this
      }

      function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097
      }

      function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800
      }

      function as(units) {
        if (!this.isValid()) {
          return NaN
        }
        var days,
          months,
          milliseconds = this._milliseconds

        units = normalizeUnits(units)

        if (units === 'month' || units === 'quarter' || units === 'year') {
          days = this._days + milliseconds / 864e5
          months = this._months + daysToMonths(days)
          switch (units) {
            case 'month':
              return months
            case 'quarter':
              return months / 3
            case 'year':
              return months / 12
          }
        } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months))
          switch (units) {
            case 'week':
              return days / 7 + milliseconds / 6048e5
            case 'day':
              return days + milliseconds / 864e5
            case 'hour':
              return days * 24 + milliseconds / 36e5
            case 'minute':
              return days * 1440 + milliseconds / 6e4
            case 'second':
              return days * 86400 + milliseconds / 1000
            // Math.floor prevents floating point math errors here
            case 'millisecond':
              return Math.floor(days * 864e5) + milliseconds
            default:
              throw new Error('Unknown unit ' + units)
          }
        }
      }

      // TODO: Use this.as('ms')?
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN
        }
        return (
          this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          toInt(this._months / 12) * 31536e6
        )
      }

      function makeAs(alias) {
        return function () {
          return this.as(alias)
        }
      }

      var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y')

      function clone$1() {
        return createDuration(this)
      }

      function get$2(units) {
        units = normalizeUnits(units)
        return this.isValid() ? this[units + 's']() : NaN
      }

      function makeGetter(name) {
        return function () {
          return this.isValid() ? this._data[name] : NaN
        }
      }

      var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years')

      function weeks() {
        return absFloor(this.days() / 7)
      }

      var round = Math.round,
        thresholds = {
          ss: 44, // a few seconds to seconds
          s: 45, // seconds to minute
          m: 45, // minutes to hour
          h: 22, // hours to day
          d: 26, // days to month/week
          w: null, // weeks to month
          M: 11 // months to year
        }

      // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
      function substituteTimeAgo(
        string,
        number,
        withoutSuffix,
        isFuture,
        locale
      ) {
        return locale.relativeTime(
          number || 1,
          !!withoutSuffix,
          string,
          isFuture
        )
      }

      function relativeTime$1(
        posNegDuration,
        withoutSuffix,
        thresholds,
        locale
      ) {
        var duration = createDuration(posNegDuration).abs(),
          seconds = round(duration.as('s')),
          minutes = round(duration.as('m')),
          hours = round(duration.as('h')),
          days = round(duration.as('d')),
          months = round(duration.as('M')),
          weeks = round(duration.as('w')),
          years = round(duration.as('y')),
          a =
            (seconds <= thresholds.ss && ['s', seconds]) ||
            (seconds < thresholds.s && ['ss', seconds]) ||
            (minutes <= 1 && ['m']) ||
            (minutes < thresholds.m && ['mm', minutes]) ||
            (hours <= 1 && ['h']) ||
            (hours < thresholds.h && ['hh', hours]) ||
            (days <= 1 && ['d']) ||
            (days < thresholds.d && ['dd', days])

        if (thresholds.w != null) {
          a =
            a ||
            (weeks <= 1 && ['w']) ||
            (weeks < thresholds.w && ['ww', weeks])
        }
        a = a ||
          (months <= 1 && ['M']) ||
          (months < thresholds.M && ['MM', months]) ||
          (years <= 1 && ['y']) || ['yy', years]

        a[2] = withoutSuffix
        a[3] = +posNegDuration > 0
        a[4] = locale
        return substituteTimeAgo.apply(null, a)
      }

      // This function allows you to set the rounding function for relative time strings
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round
        }
        if (typeof roundingFunction === 'function') {
          round = roundingFunction
          return true
        }
        return false
      }

      // This function allows you to set a threshold for relative time strings
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false
        }
        if (limit === undefined) {
          return thresholds[threshold]
        }
        thresholds[threshold] = limit
        if (threshold === 's') {
          thresholds.ss = limit - 1
        }
        return true
      }

      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate()
        }

        var withSuffix = false,
          th = thresholds,
          locale,
          output

        if (typeof argWithSuffix === 'object') {
          argThresholds = argWithSuffix
          argWithSuffix = false
        }
        if (typeof argWithSuffix === 'boolean') {
          withSuffix = argWithSuffix
        }
        if (typeof argThresholds === 'object') {
          th = Object.assign({}, thresholds, argThresholds)
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1
          }
        }

        locale = this.localeData()
        output = relativeTime$1(this, !withSuffix, th, locale)

        if (withSuffix) {
          output = locale.pastFuture(+this, output)
        }

        return locale.postformat(output)
      }

      var abs$1 = Math.abs

      function sign(x) {
        return (x > 0) - (x < 0) || +x
      }

      function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
          return this.localeData().invalidDate()
        }

        var seconds = abs$1(this._milliseconds) / 1000,
          days = abs$1(this._days),
          months = abs$1(this._months),
          minutes,
          hours,
          years,
          s,
          total = this.asSeconds(),
          totalSign,
          ymSign,
          daysSign,
          hmsSign

        if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D'
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60)
        hours = absFloor(minutes / 60)
        seconds %= 60
        minutes %= 60

        // 12 months -> 1 year
        years = absFloor(months / 12)
        months %= 12

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : ''

        totalSign = total < 0 ? '-' : ''
        ymSign = sign(this._months) !== sign(total) ? '-' : ''
        daysSign = sign(this._days) !== sign(total) ? '-' : ''
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : ''

        return (
          totalSign +
          'P' +
          (years ? ymSign + years + 'Y' : '') +
          (months ? ymSign + months + 'M' : '') +
          (days ? daysSign + days + 'D' : '') +
          (hours || minutes || seconds ? 'T' : '') +
          (hours ? hmsSign + hours + 'H' : '') +
          (minutes ? hmsSign + minutes + 'M' : '') +
          (seconds ? hmsSign + s + 'S' : '')
        )
      }

      var proto$2 = Duration.prototype

      proto$2.isValid = isValid$1
      proto$2.abs = abs
      proto$2.add = add$1
      proto$2.subtract = subtract$1
      proto$2.as = as
      proto$2.asMilliseconds = asMilliseconds
      proto$2.asSeconds = asSeconds
      proto$2.asMinutes = asMinutes
      proto$2.asHours = asHours
      proto$2.asDays = asDays
      proto$2.asWeeks = asWeeks
      proto$2.asMonths = asMonths
      proto$2.asQuarters = asQuarters
      proto$2.asYears = asYears
      proto$2.valueOf = valueOf$1
      proto$2._bubble = bubble
      proto$2.clone = clone$1
      proto$2.get = get$2
      proto$2.milliseconds = milliseconds
      proto$2.seconds = seconds
      proto$2.minutes = minutes
      proto$2.hours = hours
      proto$2.days = days
      proto$2.weeks = weeks
      proto$2.months = months
      proto$2.years = years
      proto$2.humanize = humanize
      proto$2.toISOString = toISOString$1
      proto$2.toString = toISOString$1
      proto$2.toJSON = toISOString$1
      proto$2.locale = locale
      proto$2.localeData = localeData

      proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
      )
      proto$2.lang = lang

      // FORMATTING

      addFormatToken('X', 0, 0, 'unix')
      addFormatToken('x', 0, 0, 'valueOf')

      // PARSING

      addRegexToken('x', matchSigned)
      addRegexToken('X', matchTimestamp)
      addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000)
      })
      addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input))
      })

      //! moment.js

      hooks.version = '2.29.1'

      setHookCallback(createLocal)

      hooks.fn = proto
      hooks.min = min
      hooks.max = max
      hooks.now = now
      hooks.utc = createUTC
      hooks.unix = createUnix
      hooks.months = listMonths
      hooks.isDate = isDate
      hooks.locale = getSetGlobalLocale
      hooks.invalid = createInvalid
      hooks.duration = createDuration
      hooks.isMoment = isMoment
      hooks.weekdays = listWeekdays
      hooks.parseZone = createInZone
      hooks.localeData = getLocale
      hooks.isDuration = isDuration
      hooks.monthsShort = listMonthsShort
      hooks.weekdaysMin = listWeekdaysMin
      hooks.defineLocale = defineLocale
      hooks.updateLocale = updateLocale
      hooks.locales = listLocales
      hooks.weekdaysShort = listWeekdaysShort
      hooks.normalizeUnits = normalizeUnits
      hooks.relativeTimeRounding = getSetRelativeTimeRounding
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold
      hooks.calendarFormat = getCalendarFormat
      hooks.prototype = proto

      // currently HTML5 input type only supports 24-hour formats
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM' // <input type="month" />
      }

      return hooks
    })

    /***/
  },

  /***/ 1754: /***/ (module) => {
    // ES6 Map
    var map
    try {
      map = Map
    } catch (_) {}
    var set

    // ES6 Set
    try {
      set = Set
    } catch (_) {}

    function baseClone(src, circulars, clones) {
      // Null/undefined/functions/etc
      if (!src || typeof src !== 'object' || typeof src === 'function') {
        return src
      }

      // DOM Node
      if (src.nodeType && 'cloneNode' in src) {
        return src.cloneNode(true)
      }

      // Date
      if (src instanceof Date) {
        return new Date(src.getTime())
      }

      // RegExp
      if (src instanceof RegExp) {
        return new RegExp(src)
      }

      // Arrays
      if (Array.isArray(src)) {
        return src.map(clone)
      }

      // ES6 Maps
      if (map && src instanceof map) {
        return new Map(Array.from(src.entries()))
      }

      // ES6 Sets
      if (set && src instanceof set) {
        return new Set(Array.from(src.values()))
      }

      // Object
      if (src instanceof Object) {
        circulars.push(src)
        var obj = Object.create(src)
        clones.push(obj)
        for (var key in src) {
          var idx = circulars.findIndex(function (i) {
            return i === src[key]
          })
          obj[key] =
            idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones)
        }
        return obj
      }

      // ???
      return src
    }

    function clone(src) {
      return baseClone(src, [], [])
    }

    module.exports = clone

    /***/
  },

  /***/ 467: /***/ (module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var Stream = _interopDefault(__nccwpck_require__(2781))
    var http = _interopDefault(__nccwpck_require__(3685))
    var Url = _interopDefault(__nccwpck_require__(7310))
    var whatwgUrl = _interopDefault(__nccwpck_require__(3323))
    var https = _interopDefault(__nccwpck_require__(5687))
    var zlib = _interopDefault(__nccwpck_require__(9796))

    // Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

    // fix for "Readable" isn't a named export issue
    const Readable = Stream.Readable

    const BUFFER = Symbol('buffer')
    const TYPE = Symbol('type')

    class Blob {
      constructor() {
        this[TYPE] = ''

        const blobParts = arguments[0]
        const options = arguments[1]

        const buffers = []
        let size = 0

        if (blobParts) {
          const a = blobParts
          const length = Number(a.length)
          for (let i = 0; i < length; i++) {
            const element = a[i]
            let buffer
            if (element instanceof Buffer) {
              buffer = element
            } else if (ArrayBuffer.isView(element)) {
              buffer = Buffer.from(
                element.buffer,
                element.byteOffset,
                element.byteLength
              )
            } else if (element instanceof ArrayBuffer) {
              buffer = Buffer.from(element)
            } else if (element instanceof Blob) {
              buffer = element[BUFFER]
            } else {
              buffer = Buffer.from(
                typeof element === 'string' ? element : String(element)
              )
            }
            size += buffer.length
            buffers.push(buffer)
          }
        }

        this[BUFFER] = Buffer.concat(buffers)

        let type =
          options &&
          options.type !== undefined &&
          String(options.type).toLowerCase()
        if (type && !/[^\u0020-\u007E]/.test(type)) {
          this[TYPE] = type
        }
      }
      get size() {
        return this[BUFFER].length
      }
      get type() {
        return this[TYPE]
      }
      text() {
        return Promise.resolve(this[BUFFER].toString())
      }
      arrayBuffer() {
        const buf = this[BUFFER]
        const ab = buf.buffer.slice(
          buf.byteOffset,
          buf.byteOffset + buf.byteLength
        )
        return Promise.resolve(ab)
      }
      stream() {
        const readable = new Readable()
        readable._read = function () {}
        readable.push(this[BUFFER])
        readable.push(null)
        return readable
      }
      toString() {
        return '[object Blob]'
      }
      slice() {
        const size = this.size

        const start = arguments[0]
        const end = arguments[1]
        let relativeStart, relativeEnd
        if (start === undefined) {
          relativeStart = 0
        } else if (start < 0) {
          relativeStart = Math.max(size + start, 0)
        } else {
          relativeStart = Math.min(start, size)
        }
        if (end === undefined) {
          relativeEnd = size
        } else if (end < 0) {
          relativeEnd = Math.max(size + end, 0)
        } else {
          relativeEnd = Math.min(end, size)
        }
        const span = Math.max(relativeEnd - relativeStart, 0)

        const buffer = this[BUFFER]
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span)
        const blob = new Blob([], { type: arguments[2] })
        blob[BUFFER] = slicedBuffer
        return blob
      }
    }

    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    })

    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: 'Blob',
      writable: false,
      enumerable: false,
      configurable: true
    })

    /**
     * fetch-error.js
     *
     * FetchError interface for operational errors
     */

    /**
     * Create FetchError instance
     *
     * @param   String      message      Error message for human
     * @param   String      type         Error type for machine
     * @param   String      systemError  For Node.js system error
     * @return  FetchError
     */
    function FetchError(message, type, systemError) {
      Error.call(this, message)

      this.message = message
      this.type = type

      // when err.type is `system`, err.code contains system error code
      if (systemError) {
        this.code = this.errno = systemError.code
      }

      // hide custom error implementation details from end-users
      Error.captureStackTrace(this, this.constructor)
    }

    FetchError.prototype = Object.create(Error.prototype)
    FetchError.prototype.constructor = FetchError
    FetchError.prototype.name = 'FetchError'

    let convert
    try {
      convert = __nccwpck_require__(2877).convert
    } catch (e) {}

    const INTERNALS = Symbol('Body internals')

    // fix an issue where "PassThrough" isn't a named export for node <10
    const PassThrough = Stream.PassThrough

    /**
     * Body mixin
     *
     * Ref: https://fetch.spec.whatwg.org/#body
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    function Body(body) {
      var _this = this

      var _ref =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {},
        _ref$size = _ref.size

      let size = _ref$size === undefined ? 0 : _ref$size
      var _ref$timeout = _ref.timeout
      let timeout = _ref$timeout === undefined ? 0 : _ref$timeout

      if (body == null) {
        // body is undefined or null
        body = null
      } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString())
      } else if (isBlob(body));
      else if (Buffer.isBuffer(body));
      else if (
        Object.prototype.toString.call(body) === '[object ArrayBuffer]'
      ) {
        // body is ArrayBuffer
        body = Buffer.from(body)
      } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength)
      } else if (body instanceof Stream);
      else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body))
      }
      this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
      }
      this.size = size
      this.timeout = timeout

      if (body instanceof Stream) {
        body.on('error', function (err) {
          const error =
            err.name === 'AbortError'
              ? err
              : new FetchError(
                  `Invalid response body while trying to fetch ${_this.url}: ${err.message}`,
                  'system',
                  err
                )
          _this[INTERNALS].error = error
        })
      }
    }

    Body.prototype = {
      get body() {
        return this[INTERNALS].body
      },

      get bodyUsed() {
        return this[INTERNALS].disturbed
      },

      /**
       * Decode response as ArrayBuffer
       *
       * @return  Promise
       */
      arrayBuffer() {
        return consumeBody.call(this).then(function (buf) {
          return buf.buffer.slice(
            buf.byteOffset,
            buf.byteOffset + buf.byteLength
          )
        })
      },

      /**
       * Return raw response as Blob
       *
       * @return Promise
       */
      blob() {
        let ct = (this.headers && this.headers.get('content-type')) || ''
        return consumeBody.call(this).then(function (buf) {
          return Object.assign(
            // Prevent copying
            new Blob([], {
              type: ct.toLowerCase()
            }),
            {
              [BUFFER]: buf
            }
          )
        })
      },

      /**
       * Decode response as json
       *
       * @return  Promise
       */
      json() {
        var _this2 = this

        return consumeBody.call(this).then(function (buffer) {
          try {
            return JSON.parse(buffer.toString())
          } catch (err) {
            return Body.Promise.reject(
              new FetchError(
                `invalid json response body at ${_this2.url} reason: ${err.message}`,
                'invalid-json'
              )
            )
          }
        })
      },

      /**
       * Decode response as text
       *
       * @return  Promise
       */
      text() {
        return consumeBody.call(this).then(function (buffer) {
          return buffer.toString()
        })
      },

      /**
       * Decode response as buffer (non-spec api)
       *
       * @return  Promise
       */
      buffer() {
        return consumeBody.call(this)
      },

      /**
       * Decode response as text, while automatically detecting the encoding and
       * trying to decode to UTF-8 (non-spec api)
       *
       * @return  Promise
       */
      textConverted() {
        var _this3 = this

        return consumeBody.call(this).then(function (buffer) {
          return convertBody(buffer, _this3.headers)
        })
      }
    }

    // In browsers, all properties are enumerable.
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    })

    Body.mixIn = function (proto) {
      for (const name of Object.getOwnPropertyNames(Body.prototype)) {
        // istanbul ignore else: future proof
        if (!(name in proto)) {
          const desc = Object.getOwnPropertyDescriptor(Body.prototype, name)
          Object.defineProperty(proto, name, desc)
        }
      }
    }

    /**
     * Consume and convert an entire Body to a Buffer.
     *
     * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
     *
     * @return  Promise
     */
    function consumeBody() {
      var _this4 = this

      if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(
          new TypeError(`body used already for: ${this.url}`)
        )
      }

      this[INTERNALS].disturbed = true

      if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error)
      }

      let body = this.body

      // body is null
      if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }

      // body is blob
      if (isBlob(body)) {
        body = body.stream()
      }

      // body is buffer
      if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body)
      }

      // istanbul ignore if: should never happen
      if (!(body instanceof Stream)) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }

      // body is stream
      // get ready to actually consume the body
      let accum = []
      let accumBytes = 0
      let abort = false

      return new Body.Promise(function (resolve, reject) {
        let resTimeout

        // allow timeout on slow response body
        if (_this4.timeout) {
          resTimeout = setTimeout(function () {
            abort = true
            reject(
              new FetchError(
                `Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`,
                'body-timeout'
              )
            )
          }, _this4.timeout)
        }

        // handle stream errors
        body.on('error', function (err) {
          if (err.name === 'AbortError') {
            // if the request was aborted, reject with this Error
            abort = true
            reject(err)
          } else {
            // other errors, such as incorrect content-encoding
            reject(
              new FetchError(
                `Invalid response body while trying to fetch ${_this4.url}: ${err.message}`,
                'system',
                err
              )
            )
          }
        })

        body.on('data', function (chunk) {
          if (abort || chunk === null) {
            return
          }

          if (_this4.size && accumBytes + chunk.length > _this4.size) {
            abort = true
            reject(
              new FetchError(
                `content size at ${_this4.url} over limit: ${_this4.size}`,
                'max-size'
              )
            )
            return
          }

          accumBytes += chunk.length
          accum.push(chunk)
        })

        body.on('end', function () {
          if (abort) {
            return
          }

          clearTimeout(resTimeout)

          try {
            resolve(Buffer.concat(accum, accumBytes))
          } catch (err) {
            // handle streams that have accumulated too much data (issue #414)
            reject(
              new FetchError(
                `Could not create Buffer from response body for ${_this4.url}: ${err.message}`,
                'system',
                err
              )
            )
          }
        })
      })
    }

    /**
     * Detect buffer encoding and convert to target encoding
     * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
     *
     * @param   Buffer  buffer    Incoming buffer
     * @param   String  encoding  Target encoding
     * @return  String
     */
    function convertBody(buffer, headers) {
      if (typeof convert !== 'function') {
        throw new Error(
          'The package `encoding` must be installed to use the textConverted() function'
        )
      }

      const ct = headers.get('content-type')
      let charset = 'utf-8'
      let res, str

      // header
      if (ct) {
        res = /charset=([^;]*)/i.exec(ct)
      }

      // no charset in content type, peek at response body for at most 1024 bytes
      str = buffer.slice(0, 1024).toString()

      // html5
      if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str)
      }

      // html4
      if (!res && str) {
        res =
          /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
            str
          )
        if (!res) {
          res =
            /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(
              str
            )
          if (res) {
            res.pop() // drop last quote
          }
        }

        if (res) {
          res = /charset=(.*)/i.exec(res.pop())
        }
      }

      // xml
      if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str)
      }

      // found charset
      if (res) {
        charset = res.pop()

        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
          charset = 'gb18030'
        }
      }

      // turn raw buffers into a single utf-8 buffer
      return convert(buffer, 'UTF-8', charset).toString()
    }

    /**
     * Detect a URLSearchParams object
     * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
     *
     * @param   Object  obj     Object to detect by type or brand
     * @return  String
     */
    function isURLSearchParams(obj) {
      // Duck-typing as a necessary condition.
      if (
        typeof obj !== 'object' ||
        typeof obj.append !== 'function' ||
        typeof obj.delete !== 'function' ||
        typeof obj.get !== 'function' ||
        typeof obj.getAll !== 'function' ||
        typeof obj.has !== 'function' ||
        typeof obj.set !== 'function'
      ) {
        return false
      }

      // Brand-checking and more duck-typing as optional condition.
      return (
        obj.constructor.name === 'URLSearchParams' ||
        Object.prototype.toString.call(obj) === '[object URLSearchParams]' ||
        typeof obj.sort === 'function'
      )
    }

    /**
     * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
     * @param  {*} obj
     * @return {boolean}
     */
    function isBlob(obj) {
      return (
        typeof obj === 'object' &&
        typeof obj.arrayBuffer === 'function' &&
        typeof obj.type === 'string' &&
        typeof obj.stream === 'function' &&
        typeof obj.constructor === 'function' &&
        typeof obj.constructor.name === 'string' &&
        /^(Blob|File)$/.test(obj.constructor.name) &&
        /^(Blob|File)$/.test(obj[Symbol.toStringTag])
      )
    }

    /**
     * Clone body given Res/Req instance
     *
     * @param   Mixed  instance  Response or Request instance
     * @return  Mixed
     */
    function clone(instance) {
      let p1, p2
      let body = instance.body

      // don't allow cloning a used body
      if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used')
      }

      // check that body is a stream and not form-data object
      // note: we can't clone the form-data object without having it as a dependency
      if (body instanceof Stream && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough()
        p2 = new PassThrough()
        body.pipe(p1)
        body.pipe(p2)
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1
        body = p2
      }

      return body
    }

    /**
     * Performs the operation "extract a `Content-Type` value from |object|" as
     * specified in the specification:
     * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
     *
     * This function assumes that instance.body is present.
     *
     * @param   Mixed  instance  Any options.body input
     */
    function extractContentType(body) {
      if (body === null) {
        // body is null
        return null
      } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8'
      } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8'
      } else if (isBlob(body)) {
        // body is blob
        return body.type || null
      } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null
      } else if (
        Object.prototype.toString.call(body) === '[object ArrayBuffer]'
      ) {
        // body is ArrayBuffer
        return null
      } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null
      } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`
      } else if (body instanceof Stream) {
        // body is stream
        // can't really do much about this
        return null
      } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8'
      }
    }

    /**
     * The Fetch Standard treats this as if "total bytes" is a property on the body.
     * For us, we have to explicitly get it with a function.
     *
     * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
     *
     * @param   Body    instance   Instance of Body
     * @return  Number?            Number of bytes, or null if not possible
     */
    function getTotalBytes(instance) {
      const body = instance.body

      if (body === null) {
        // body is null
        return 0
      } else if (isBlob(body)) {
        return body.size
      } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length
      } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (
          (body._lengthRetrievers && body._lengthRetrievers.length == 0) || // 1.x
          (body.hasKnownLength && body.hasKnownLength())
        ) {
          // 2.x
          return body.getLengthSync()
        }
        return null
      } else {
        // body is stream
        return null
      }
    }

    /**
     * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
     *
     * @param   Body    instance   Instance of Body
     * @return  Void
     */
    function writeToStream(dest, instance) {
      const body = instance.body

      if (body === null) {
        // body is null
        dest.end()
      } else if (isBlob(body)) {
        body.stream().pipe(dest)
      } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body)
        dest.end()
      } else {
        // body is stream
        body.pipe(dest)
      }
    }

    // expose Promise
    Body.Promise = global.Promise

    /**
     * headers.js
     *
     * Headers class offers convenient helpers
     */

    const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/
    const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/

    function validateName(name) {
      name = `${name}`
      if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`)
      }
    }

    function validateValue(value) {
      value = `${value}`
      if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`)
      }
    }

    /**
     * Find the key in the map object given a header name.
     *
     * Returns undefined if not found.
     *
     * @param   String  name  Header name
     * @return  String|Undefined
     */
    function find(map, name) {
      name = name.toLowerCase()
      for (const key in map) {
        if (key.toLowerCase() === name) {
          return key
        }
      }
      return undefined
    }

    const MAP = Symbol('map')
    class Headers {
      /**
       * Headers class
       *
       * @param   Object  headers  Response headers
       * @return  Void
       */
      constructor() {
        let init =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : undefined

        this[MAP] = Object.create(null)

        if (init instanceof Headers) {
          const rawHeaders = init.raw()
          const headerNames = Object.keys(rawHeaders)

          for (const headerName of headerNames) {
            for (const value of rawHeaders[headerName]) {
              this.append(headerName, value)
            }
          }

          return
        }

        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null);
        else if (typeof init === 'object') {
          const method = init[Symbol.iterator]
          if (method != null) {
            if (typeof method !== 'function') {
              throw new TypeError('Header pairs must be iterable')
            }

            // sequence<sequence<ByteString>>
            // Note: per spec we have to first exhaust the lists then process them
            const pairs = []
            for (const pair of init) {
              if (
                typeof pair !== 'object' ||
                typeof pair[Symbol.iterator] !== 'function'
              ) {
                throw new TypeError('Each header pair must be iterable')
              }
              pairs.push(Array.from(pair))
            }

            for (const pair of pairs) {
              if (pair.length !== 2) {
                throw new TypeError(
                  'Each header pair must be a name/value tuple'
                )
              }
              this.append(pair[0], pair[1])
            }
          } else {
            // record<ByteString, ByteString>
            for (const key of Object.keys(init)) {
              const value = init[key]
              this.append(key, value)
            }
          }
        } else {
          throw new TypeError('Provided initializer must be an object')
        }
      }

      /**
       * Return combined header value given name
       *
       * @param   String  name  Header name
       * @return  Mixed
       */
      get(name) {
        name = `${name}`
        validateName(name)
        const key = find(this[MAP], name)
        if (key === undefined) {
          return null
        }

        return this[MAP][key].join(', ')
      }

      /**
       * Iterate over all headers
       *
       * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
       * @param   Boolean   thisArg   `this` context for callback function
       * @return  Void
       */
      forEach(callback) {
        let thisArg =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : undefined

        let pairs = getHeaders(this)
        let i = 0
        while (i < pairs.length) {
          var _pairs$i = pairs[i]
          const name = _pairs$i[0],
            value = _pairs$i[1]

          callback.call(thisArg, value, name, this)
          pairs = getHeaders(this)
          i++
        }
      }

      /**
       * Overwrite header values given name
       *
       * @param   String  name   Header name
       * @param   String  value  Header value
       * @return  Void
       */
      set(name, value) {
        name = `${name}`
        value = `${value}`
        validateName(name)
        validateValue(value)
        const key = find(this[MAP], name)
        this[MAP][key !== undefined ? key : name] = [value]
      }

      /**
       * Append a value onto existing header
       *
       * @param   String  name   Header name
       * @param   String  value  Header value
       * @return  Void
       */
      append(name, value) {
        name = `${name}`
        value = `${value}`
        validateName(name)
        validateValue(value)
        const key = find(this[MAP], name)
        if (key !== undefined) {
          this[MAP][key].push(value)
        } else {
          this[MAP][name] = [value]
        }
      }

      /**
       * Check for header name existence
       *
       * @param   String   name  Header name
       * @return  Boolean
       */
      has(name) {
        name = `${name}`
        validateName(name)
        return find(this[MAP], name) !== undefined
      }

      /**
       * Delete all header values given name
       *
       * @param   String  name  Header name
       * @return  Void
       */
      delete(name) {
        name = `${name}`
        validateName(name)
        const key = find(this[MAP], name)
        if (key !== undefined) {
          delete this[MAP][key]
        }
      }

      /**
       * Return raw headers (non-spec api)
       *
       * @return  Object
       */
      raw() {
        return this[MAP]
      }

      /**
       * Get an iterator on keys.
       *
       * @return  Iterator
       */
      keys() {
        return createHeadersIterator(this, 'key')
      }

      /**
       * Get an iterator on values.
       *
       * @return  Iterator
       */
      values() {
        return createHeadersIterator(this, 'value')
      }

      /**
       * Get an iterator on entries.
       *
       * This is the default iterator of the Headers object.
       *
       * @return  Iterator
       */
      [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value')
      }
    }
    Headers.prototype.entries = Headers.prototype[Symbol.iterator]

    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: 'Headers',
      writable: false,
      enumerable: false,
      configurable: true
    })

    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true }
    })

    function getHeaders(headers) {
      let kind =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : 'key+value'

      const keys = Object.keys(headers[MAP]).sort()
      return keys.map(
        kind === 'key'
          ? function (k) {
              return k.toLowerCase()
            }
          : kind === 'value'
          ? function (k) {
              return headers[MAP][k].join(', ')
            }
          : function (k) {
              return [k.toLowerCase(), headers[MAP][k].join(', ')]
            }
      )
    }

    const INTERNAL = Symbol('internal')

    function createHeadersIterator(target, kind) {
      const iterator = Object.create(HeadersIteratorPrototype)
      iterator[INTERNAL] = {
        target,
        kind,
        index: 0
      }
      return iterator
    }

    const HeadersIteratorPrototype = Object.setPrototypeOf(
      {
        next() {
          // istanbul ignore if
          if (
            !this ||
            Object.getPrototypeOf(this) !== HeadersIteratorPrototype
          ) {
            throw new TypeError('Value of `this` is not a HeadersIterator')
          }

          var _INTERNAL = this[INTERNAL]
          const target = _INTERNAL.target,
            kind = _INTERNAL.kind,
            index = _INTERNAL.index

          const values = getHeaders(target, kind)
          const len = values.length
          if (index >= len) {
            return {
              value: undefined,
              done: true
            }
          }

          this[INTERNAL].index = index + 1

          return {
            value: values[index],
            done: false
          }
        }
      },
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
    )

    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
      value: 'HeadersIterator',
      writable: false,
      enumerable: false,
      configurable: true
    })

    /**
     * Export the Headers object in a form that Node.js can consume.
     *
     * @param   Headers  headers
     * @return  Object
     */
    function exportNodeCompatibleHeaders(headers) {
      const obj = Object.assign({ __proto__: null }, headers[MAP])

      // http.request() only supports string as Host header. This hack makes
      // specifying custom Host header possible.
      const hostHeaderKey = find(headers[MAP], 'Host')
      if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0]
      }

      return obj
    }

    /**
     * Create a Headers object from an object of headers, ignoring those that do
     * not conform to HTTP grammar productions.
     *
     * @param   Object  obj  Object of headers
     * @return  Headers
     */
    function createHeadersLenient(obj) {
      const headers = new Headers()
      for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
          continue
        }
        if (Array.isArray(obj[name])) {
          for (const val of obj[name]) {
            if (invalidHeaderCharRegex.test(val)) {
              continue
            }
            if (headers[MAP][name] === undefined) {
              headers[MAP][name] = [val]
            } else {
              headers[MAP][name].push(val)
            }
          }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
          headers[MAP][name] = [obj[name]]
        }
      }
      return headers
    }

    const INTERNALS$1 = Symbol('Response internals')

    // fix an issue where "STATUS_CODES" aren't a named export for node <10
    const STATUS_CODES = http.STATUS_CODES

    /**
     * Response class
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    class Response {
      constructor() {
        let body =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : null
        let opts =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

        Body.call(this, body, opts)

        const status = opts.status || 200
        const headers = new Headers(opts.headers)

        if (body != null && !headers.has('Content-Type')) {
          const contentType = extractContentType(body)
          if (contentType) {
            headers.append('Content-Type', contentType)
          }
        }

        this[INTERNALS$1] = {
          url: opts.url,
          status,
          statusText: opts.statusText || STATUS_CODES[status],
          headers,
          counter: opts.counter
        }
      }

      get url() {
        return this[INTERNALS$1].url || ''
      }

      get status() {
        return this[INTERNALS$1].status
      }

      /**
       * Convenience property representing if the request ended normally
       */
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300
      }

      get redirected() {
        return this[INTERNALS$1].counter > 0
      }

      get statusText() {
        return this[INTERNALS$1].statusText
      }

      get headers() {
        return this[INTERNALS$1].headers
      }

      /**
       * Clone this response
       *
       * @return  Response
       */
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        })
      }
    }

    Body.mixIn(Response.prototype)

    Object.defineProperties(Response.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    })

    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: 'Response',
      writable: false,
      enumerable: false,
      configurable: true
    })

    const INTERNALS$2 = Symbol('Request internals')
    const URL = Url.URL || whatwgUrl.URL

    // fix an issue where "format", "parse" aren't a named export for node <10
    const parse_url = Url.parse
    const format_url = Url.format

    /**
     * Wrapper around `new URL` to handle arbitrary URLs
     *
     * @param  {string} urlStr
     * @return {void}
     */
    function parseURL(urlStr) {
      /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */
      if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString()
      }

      // Fallback to old implementation for arbitrary URLs
      return parse_url(urlStr)
    }

    const streamDestructionSupported = 'destroy' in Stream.Readable.prototype

    /**
     * Check if a value is an instance of Request.
     *
     * @param   Mixed   input
     * @return  Boolean
     */
    function isRequest(input) {
      return typeof input === 'object' && typeof input[INTERNALS$2] === 'object'
    }

    function isAbortSignal(signal) {
      const proto =
        signal && typeof signal === 'object' && Object.getPrototypeOf(signal)
      return !!(proto && proto.constructor.name === 'AbortSignal')
    }

    /**
     * Request class
     *
     * @param   Mixed   input  Url or Request instance
     * @param   Object  init   Custom options
     * @return  Void
     */
    class Request {
      constructor(input) {
        let init =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

        let parsedURL

        // normalize input
        if (!isRequest(input)) {
          if (input && input.href) {
            // in order to support Node.js' Url objects; though WHATWG's URL objects
            // will fall into this branch also (since their `toString()` will return
            // `href` property anyway)
            parsedURL = parseURL(input.href)
          } else {
            // coerce input to a string before attempting to parse
            parsedURL = parseURL(`${input}`)
          }
          input = {}
        } else {
          parsedURL = parseURL(input.url)
        }

        let method = init.method || input.method || 'GET'
        method = method.toUpperCase()

        if (
          (init.body != null || (isRequest(input) && input.body !== null)) &&
          (method === 'GET' || method === 'HEAD')
        ) {
          throw new TypeError('Request with GET/HEAD method cannot have body')
        }

        let inputBody =
          init.body != null
            ? init.body
            : isRequest(input) && input.body !== null
            ? clone(input)
            : null

        Body.call(this, inputBody, {
          timeout: init.timeout || input.timeout || 0,
          size: init.size || input.size || 0
        })

        const headers = new Headers(init.headers || input.headers || {})

        if (inputBody != null && !headers.has('Content-Type')) {
          const contentType = extractContentType(inputBody)
          if (contentType) {
            headers.append('Content-Type', contentType)
          }
        }

        let signal = isRequest(input) ? input.signal : null
        if ('signal' in init) signal = init.signal

        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError('Expected signal to be an instanceof AbortSignal')
        }

        this[INTERNALS$2] = {
          method,
          redirect: init.redirect || input.redirect || 'follow',
          headers,
          parsedURL,
          signal
        }

        // node-fetch-only options
        this.follow =
          init.follow !== undefined
            ? init.follow
            : input.follow !== undefined
            ? input.follow
            : 20
        this.compress =
          init.compress !== undefined
            ? init.compress
            : input.compress !== undefined
            ? input.compress
            : true
        this.counter = init.counter || input.counter || 0
        this.agent = init.agent || input.agent
      }

      get method() {
        return this[INTERNALS$2].method
      }

      get url() {
        return format_url(this[INTERNALS$2].parsedURL)
      }

      get headers() {
        return this[INTERNALS$2].headers
      }

      get redirect() {
        return this[INTERNALS$2].redirect
      }

      get signal() {
        return this[INTERNALS$2].signal
      }

      /**
       * Clone this request
       *
       * @return  Request
       */
      clone() {
        return new Request(this)
      }
    }

    Body.mixIn(Request.prototype)

    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: 'Request',
      writable: false,
      enumerable: false,
      configurable: true
    })

    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    })

    /**
     * Convert a Request to Node.js http request options.
     *
     * @param   Request  A Request instance
     * @return  Object   The options object to be passed to http.request
     */
    function getNodeRequestOptions(request) {
      const parsedURL = request[INTERNALS$2].parsedURL
      const headers = new Headers(request[INTERNALS$2].headers)

      // fetch step 1.3
      if (!headers.has('Accept')) {
        headers.set('Accept', '*/*')
      }

      // Basic fetch
      if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported')
      }

      if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported')
      }

      if (
        request.signal &&
        request.body instanceof Stream.Readable &&
        !streamDestructionSupported
      ) {
        throw new Error(
          'Cancellation of streamed requests with AbortSignal is not supported in node < 8'
        )
      }

      // HTTP-network-or-cache fetch steps 2.4-2.7
      let contentLengthValue = null
      if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0'
      }
      if (request.body != null) {
        const totalBytes = getTotalBytes(request)
        if (typeof totalBytes === 'number') {
          contentLengthValue = String(totalBytes)
        }
      }
      if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue)
      }

      // HTTP-network-or-cache fetch step 2.11
      if (!headers.has('User-Agent')) {
        headers.set(
          'User-Agent',
          'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)'
        )
      }

      // HTTP-network-or-cache fetch step 2.15
      if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate')
      }

      let agent = request.agent
      if (typeof agent === 'function') {
        agent = agent(parsedURL)
      }

      if (!headers.has('Connection') && !agent) {
        headers.set('Connection', 'close')
      }

      // HTTP-network fetch step 4.2
      // chunked encoding is handled by Node.js

      return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
      })
    }

    /**
     * abort-error.js
     *
     * AbortError interface for cancelled requests
     */

    /**
     * Create AbortError instance
     *
     * @param   String      message      Error message for human
     * @return  AbortError
     */
    function AbortError(message) {
      Error.call(this, message)

      this.type = 'aborted'
      this.message = message

      // hide custom error implementation details from end-users
      Error.captureStackTrace(this, this.constructor)
    }

    AbortError.prototype = Object.create(Error.prototype)
    AbortError.prototype.constructor = AbortError
    AbortError.prototype.name = 'AbortError'

    const URL$1 = Url.URL || whatwgUrl.URL

    // fix an issue where "PassThrough", "resolve" aren't a named export for node <10
    const PassThrough$1 = Stream.PassThrough

    const isDomainOrSubdomain = function isDomainOrSubdomain(
      destination,
      original
    ) {
      const orig = new URL$1(original).hostname
      const dest = new URL$1(destination).hostname

      return (
        orig === dest ||
        (orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest))
      )
    }

    /**
     * Fetch function
     *
     * @param   Mixed    url   Absolute url or Request instance
     * @param   Object   opts  Fetch options
     * @return  Promise
     */
    function fetch(url, opts) {
      // allow custom promise
      if (!fetch.Promise) {
        throw new Error(
          'native promise missing, set fetch.Promise to your favorite alternative'
        )
      }

      Body.Promise = fetch.Promise

      // wrap http.request into fetch
      return new fetch.Promise(function (resolve, reject) {
        // build request object
        const request = new Request(url, opts)
        const options = getNodeRequestOptions(request)

        const send = (options.protocol === 'https:' ? https : http).request
        const signal = request.signal

        let response = null

        const abort = function abort() {
          let error = new AbortError('The user aborted a request.')
          reject(error)
          if (request.body && request.body instanceof Stream.Readable) {
            request.body.destroy(error)
          }
          if (!response || !response.body) return
          response.body.emit('error', error)
        }

        if (signal && signal.aborted) {
          abort()
          return
        }

        const abortAndFinalize = function abortAndFinalize() {
          abort()
          finalize()
        }

        // send request
        const req = send(options)
        let reqTimeout

        if (signal) {
          signal.addEventListener('abort', abortAndFinalize)
        }

        function finalize() {
          req.abort()
          if (signal) signal.removeEventListener('abort', abortAndFinalize)
          clearTimeout(reqTimeout)
        }

        if (request.timeout) {
          req.once('socket', function (socket) {
            reqTimeout = setTimeout(function () {
              reject(
                new FetchError(
                  `network timeout at: ${request.url}`,
                  'request-timeout'
                )
              )
              finalize()
            }, request.timeout)
          })
        }

        req.on('error', function (err) {
          reject(
            new FetchError(
              `request to ${request.url} failed, reason: ${err.message}`,
              'system',
              err
            )
          )
          finalize()
        })

        req.on('response', function (res) {
          clearTimeout(reqTimeout)

          const headers = createHeadersLenient(res.headers)

          // HTTP fetch step 5
          if (fetch.isRedirect(res.statusCode)) {
            // HTTP fetch step 5.2
            const location = headers.get('Location')

            // HTTP fetch step 5.3
            let locationURL = null
            try {
              locationURL =
                location === null
                  ? null
                  : new URL$1(location, request.url).toString()
            } catch (err) {
              // error here can only be invalid URL in Location: header
              // do not throw when options.redirect == manual
              // let the user extract the errorneous redirect URL
              if (request.redirect !== 'manual') {
                reject(
                  new FetchError(
                    `uri requested responds with an invalid redirect URL: ${location}`,
                    'invalid-redirect'
                  )
                )
                finalize()
                return
              }
            }

            // HTTP fetch step 5.5
            switch (request.redirect) {
              case 'error':
                reject(
                  new FetchError(
                    `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                    'no-redirect'
                  )
                )
                finalize()
                return
              case 'manual':
                // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                if (locationURL !== null) {
                  // handle corrupted header
                  try {
                    headers.set('Location', locationURL)
                  } catch (err) {
                    // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                    reject(err)
                  }
                }
                break
              case 'follow':
                // HTTP-redirect fetch step 2
                if (locationURL === null) {
                  break
                }

                // HTTP-redirect fetch step 5
                if (request.counter >= request.follow) {
                  reject(
                    new FetchError(
                      `maximum redirect reached at: ${request.url}`,
                      'max-redirect'
                    )
                  )
                  finalize()
                  return
                }

                // HTTP-redirect fetch step 6 (counter increment)
                // Create a new Request object.
                const requestOpts = {
                  headers: new Headers(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  timeout: request.timeout,
                  size: request.size
                }

                if (!isDomainOrSubdomain(request.url, locationURL)) {
                  for (const name of [
                    'authorization',
                    'www-authenticate',
                    'cookie',
                    'cookie2'
                  ]) {
                    requestOpts.headers.delete(name)
                  }
                }

                // HTTP-redirect fetch step 9
                if (
                  res.statusCode !== 303 &&
                  request.body &&
                  getTotalBytes(request) === null
                ) {
                  reject(
                    new FetchError(
                      'Cannot follow redirect with body being a readable stream',
                      'unsupported-redirect'
                    )
                  )
                  finalize()
                  return
                }

                // HTTP-redirect fetch step 11
                if (
                  res.statusCode === 303 ||
                  ((res.statusCode === 301 || res.statusCode === 302) &&
                    request.method === 'POST')
                ) {
                  requestOpts.method = 'GET'
                  requestOpts.body = undefined
                  requestOpts.headers.delete('content-length')
                }

                // HTTP-redirect fetch step 15
                resolve(fetch(new Request(locationURL, requestOpts)))
                finalize()
                return
            }
          }

          // prepare response
          res.once('end', function () {
            if (signal) signal.removeEventListener('abort', abortAndFinalize)
          })
          let body = res.pipe(new PassThrough$1())

          const response_options = {
            url: request.url,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: headers,
            size: request.size,
            timeout: request.timeout,
            counter: request.counter
          }

          // HTTP-network fetch step 12.1.1.3
          const codings = headers.get('Content-Encoding')

          // HTTP-network fetch step 12.1.1.4: handle content codings

          // in following scenarios we ignore compression support
          // 1. compression support is disabled
          // 2. HEAD request
          // 3. no Content-Encoding header
          // 4. no content response (204)
          // 5. content not modified response (304)
          if (
            !request.compress ||
            request.method === 'HEAD' ||
            codings === null ||
            res.statusCode === 204 ||
            res.statusCode === 304
          ) {
            response = new Response(body, response_options)
            resolve(response)
            return
          }

          // For Node v6+
          // Be less strict when decoding compressed responses, since sometimes
          // servers send slightly invalid responses that are still accepted
          // by common browsers.
          // Always using Z_SYNC_FLUSH is what cURL does.
          const zlibOptions = {
            flush: zlib.Z_SYNC_FLUSH,
            finishFlush: zlib.Z_SYNC_FLUSH
          }

          // for gzip
          if (codings == 'gzip' || codings == 'x-gzip') {
            body = body.pipe(zlib.createGunzip(zlibOptions))
            response = new Response(body, response_options)
            resolve(response)
            return
          }

          // for deflate
          if (codings == 'deflate' || codings == 'x-deflate') {
            // handle the infamous raw deflate response from old servers
            // a hack for old IIS and Apache servers
            const raw = res.pipe(new PassThrough$1())
            raw.once('data', function (chunk) {
              // see http://stackoverflow.com/questions/37519828
              if ((chunk[0] & 0x0f) === 0x08) {
                body = body.pipe(zlib.createInflate())
              } else {
                body = body.pipe(zlib.createInflateRaw())
              }
              response = new Response(body, response_options)
              resolve(response)
            })
            return
          }

          // for br
          if (
            codings == 'br' &&
            typeof zlib.createBrotliDecompress === 'function'
          ) {
            body = body.pipe(zlib.createBrotliDecompress())
            response = new Response(body, response_options)
            resolve(response)
            return
          }

          // otherwise, use response as-is
          response = new Response(body, response_options)
          resolve(response)
        })

        writeToStream(req, request)
      })
    }
    /**
     * Redirect code matching
     *
     * @param   Number   code  Status code
     * @return  Boolean
     */
    fetch.isRedirect = function (code) {
      return (
        code === 301 ||
        code === 302 ||
        code === 303 ||
        code === 307 ||
        code === 308
      )
    }

    // expose Promise
    fetch.Promise = global.Promise

    module.exports = exports = fetch
    Object.defineProperty(exports, '__esModule', { value: true })
    exports['default'] = exports
    exports.Headers = Headers
    exports.Request = Request
    exports.Response = Response
    exports.FetchError = FetchError

    /***/
  },

  /***/ 2299: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var punycode = __nccwpck_require__(5477)
    var mappingTable = __nccwpck_require__(1907)

    var PROCESSING_OPTIONS = {
      TRANSITIONAL: 0,
      NONTRANSITIONAL: 1
    }

    function normalize(str) {
      // fix bug in v8
      return str
        .split('\u0000')
        .map(function (s) {
          return s.normalize('NFC')
        })
        .join('\u0000')
    }

    function findStatus(val) {
      var start = 0
      var end = mappingTable.length - 1

      while (start <= end) {
        var mid = Math.floor((start + end) / 2)

        var target = mappingTable[mid]
        if (target[0][0] <= val && target[0][1] >= val) {
          return target
        } else if (target[0][0] > val) {
          end = mid - 1
        } else {
          start = mid + 1
        }
      }

      return null
    }

    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g

    function countSymbols(string) {
      return (
        // then get the length
        string
          // replace every surrogate pair with a BMP symbol
          .replace(regexAstralSymbols, '_').length
      )
    }

    function mapChars(domain_name, useSTD3, processing_option) {
      var hasError = false
      var processed = ''

      var len = countSymbols(domain_name)
      for (var i = 0; i < len; ++i) {
        var codePoint = domain_name.codePointAt(i)
        var status = findStatus(codePoint)

        switch (status[1]) {
          case 'disallowed':
            hasError = true
            processed += String.fromCodePoint(codePoint)
            break
          case 'ignored':
            break
          case 'mapped':
            processed += String.fromCodePoint.apply(String, status[2])
            break
          case 'deviation':
            if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
              processed += String.fromCodePoint.apply(String, status[2])
            } else {
              processed += String.fromCodePoint(codePoint)
            }
            break
          case 'valid':
            processed += String.fromCodePoint(codePoint)
            break
          case 'disallowed_STD3_mapped':
            if (useSTD3) {
              hasError = true
              processed += String.fromCodePoint(codePoint)
            } else {
              processed += String.fromCodePoint.apply(String, status[2])
            }
            break
          case 'disallowed_STD3_valid':
            if (useSTD3) {
              hasError = true
            }

            processed += String.fromCodePoint(codePoint)
            break
        }
      }

      return {
        string: processed,
        error: hasError
      }
    }

    var combiningMarksRegex =
      /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/

    function validateLabel(label, processing_option) {
      if (label.substr(0, 4) === 'xn--') {
        label = punycode.toUnicode(label)
        processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL
      }

      var error = false

      if (
        normalize(label) !== label ||
        (label[3] === '-' && label[4] === '-') ||
        label[0] === '-' ||
        label[label.length - 1] === '-' ||
        label.indexOf('.') !== -1 ||
        label.search(combiningMarksRegex) === 0
      ) {
        error = true
      }

      var len = countSymbols(label)
      for (var i = 0; i < len; ++i) {
        var status = findStatus(label.codePointAt(i))
        if (
          (processing === PROCESSING_OPTIONS.TRANSITIONAL &&
            status[1] !== 'valid') ||
          (processing === PROCESSING_OPTIONS.NONTRANSITIONAL &&
            status[1] !== 'valid' &&
            status[1] !== 'deviation')
        ) {
          error = true
          break
        }
      }

      return {
        label: label,
        error: error
      }
    }

    function processing(domain_name, useSTD3, processing_option) {
      var result = mapChars(domain_name, useSTD3, processing_option)
      result.string = normalize(result.string)

      var labels = result.string.split('.')
      for (var i = 0; i < labels.length; ++i) {
        try {
          var validation = validateLabel(labels[i])
          labels[i] = validation.label
          result.error = result.error || validation.error
        } catch (e) {
          result.error = true
        }
      }

      return {
        string: labels.join('.'),
        error: result.error
      }
    }

    module.exports.toASCII = function (
      domain_name,
      useSTD3,
      processing_option,
      verifyDnsLength
    ) {
      var result = processing(domain_name, useSTD3, processing_option)
      var labels = result.string.split('.')
      labels = labels.map(function (l) {
        try {
          return punycode.toASCII(l)
        } catch (e) {
          result.error = true
          return l
        }
      })

      if (verifyDnsLength) {
        var total = labels.slice(0, labels.length - 1).join('.').length
        if (total.length > 253 || total.length === 0) {
          result.error = true
        }

        for (var i = 0; i < labels.length; ++i) {
          if (labels.length > 63 || labels.length === 0) {
            result.error = true
            break
          }
        }
      }

      if (result.error) return null
      return labels.join('.')
    }

    module.exports.toUnicode = function (domain_name, useSTD3) {
      var result = processing(
        domain_name,
        useSTD3,
        PROCESSING_OPTIONS.NONTRANSITIONAL
      )

      return {
        domain: result.string,
        error: result.error
      }
    }

    module.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS

    /***/
  },

  /***/ 5871: /***/ (module) => {
    var conversions = {}
    module.exports = conversions

    function sign(x) {
      return x < 0 ? -1 : 1
    }

    function evenRound(x) {
      // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
      if (x % 1 === 0.5 && (x & 1) === 0) {
        // [even number].5; round down (i.e. floor)
        return Math.floor(x)
      } else {
        return Math.round(x)
      }
    }

    function createNumberConversion(bitLength, typeOpts) {
      if (!typeOpts.unsigned) {
        --bitLength
      }
      const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength)
      const upperBound = Math.pow(2, bitLength) - 1

      const moduloVal = typeOpts.moduloBitLength
        ? Math.pow(2, typeOpts.moduloBitLength)
        : Math.pow(2, bitLength)
      const moduloBound = typeOpts.moduloBitLength
        ? Math.pow(2, typeOpts.moduloBitLength - 1)
        : Math.pow(2, bitLength - 1)

      return function (V, opts) {
        if (!opts) opts = {}

        let x = +V

        if (opts.enforceRange) {
          if (!Number.isFinite(x)) {
            throw new TypeError('Argument is not a finite number')
          }

          x = sign(x) * Math.floor(Math.abs(x))
          if (x < lowerBound || x > upperBound) {
            throw new TypeError('Argument is not in byte range')
          }

          return x
        }

        if (!isNaN(x) && opts.clamp) {
          x = evenRound(x)

          if (x < lowerBound) x = lowerBound
          if (x > upperBound) x = upperBound
          return x
        }

        if (!Number.isFinite(x) || x === 0) {
          return 0
        }

        x = sign(x) * Math.floor(Math.abs(x))
        x = x % moduloVal

        if (!typeOpts.unsigned && x >= moduloBound) {
          return x - moduloVal
        } else if (typeOpts.unsigned) {
          if (x < 0) {
            x += moduloVal
          } else if (x === -0) {
            // don't return negative zero
            return 0
          }
        }

        return x
      }
    }

    conversions['void'] = function () {
      return undefined
    }

    conversions['boolean'] = function (val) {
      return !!val
    }

    conversions['byte'] = createNumberConversion(8, { unsigned: false })
    conversions['octet'] = createNumberConversion(8, { unsigned: true })

    conversions['short'] = createNumberConversion(16, { unsigned: false })
    conversions['unsigned short'] = createNumberConversion(16, {
      unsigned: true
    })

    conversions['long'] = createNumberConversion(32, { unsigned: false })
    conversions['unsigned long'] = createNumberConversion(32, {
      unsigned: true
    })

    conversions['long long'] = createNumberConversion(32, {
      unsigned: false,
      moduloBitLength: 64
    })
    conversions['unsigned long long'] = createNumberConversion(32, {
      unsigned: true,
      moduloBitLength: 64
    })

    conversions['double'] = function (V) {
      const x = +V

      if (!Number.isFinite(x)) {
        throw new TypeError('Argument is not a finite floating-point value')
      }

      return x
    }

    conversions['unrestricted double'] = function (V) {
      const x = +V

      if (isNaN(x)) {
        throw new TypeError('Argument is NaN')
      }

      return x
    }

    // not quite valid, but good enough for JS
    conversions['float'] = conversions['double']
    conversions['unrestricted float'] = conversions['unrestricted double']

    conversions['DOMString'] = function (V, opts) {
      if (!opts) opts = {}

      if (opts.treatNullAsEmptyString && V === null) {
        return ''
      }

      return String(V)
    }

    conversions['ByteString'] = function (V, opts) {
      const x = String(V)
      let c = undefined
      for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
        if (c > 255) {
          throw new TypeError('Argument is not a valid bytestring')
        }
      }

      return x
    }

    conversions['USVString'] = function (V) {
      const S = String(V)
      const n = S.length
      const U = []
      for (let i = 0; i < n; ++i) {
        const c = S.charCodeAt(i)
        if (c < 0xd800 || c > 0xdfff) {
          U.push(String.fromCodePoint(c))
        } else if (0xdc00 <= c && c <= 0xdfff) {
          U.push(String.fromCodePoint(0xfffd))
        } else {
          if (i === n - 1) {
            U.push(String.fromCodePoint(0xfffd))
          } else {
            const d = S.charCodeAt(i + 1)
            if (0xdc00 <= d && d <= 0xdfff) {
              const a = c & 0x3ff
              const b = d & 0x3ff
              U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b))
              ++i
            } else {
              U.push(String.fromCodePoint(0xfffd))
            }
          }
        }
      }

      return U.join('')
    }

    conversions['Date'] = function (V, opts) {
      if (!(V instanceof Date)) {
        throw new TypeError('Argument is not a Date object')
      }
      if (isNaN(V)) {
        return undefined
      }

      return V
    }

    conversions['RegExp'] = function (V, opts) {
      if (!(V instanceof RegExp)) {
        V = new RegExp(V)
      }

      return V
    }

    /***/
  },

  /***/ 8262: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    const usm = __nccwpck_require__(33)

    exports.implementation = class URLImpl {
      constructor(constructorArgs) {
        const url = constructorArgs[0]
        const base = constructorArgs[1]

        let parsedBase = null
        if (base !== undefined) {
          parsedBase = usm.basicURLParse(base)
          if (parsedBase === 'failure') {
            throw new TypeError('Invalid base URL')
          }
        }

        const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase })
        if (parsedURL === 'failure') {
          throw new TypeError('Invalid URL')
        }

        this._url = parsedURL

        // TODO: query stuff
      }

      get href() {
        return usm.serializeURL(this._url)
      }

      set href(v) {
        const parsedURL = usm.basicURLParse(v)
        if (parsedURL === 'failure') {
          throw new TypeError('Invalid URL')
        }

        this._url = parsedURL
      }

      get origin() {
        return usm.serializeURLOrigin(this._url)
      }

      get protocol() {
        return this._url.scheme + ':'
      }

      set protocol(v) {
        usm.basicURLParse(v + ':', {
          url: this._url,
          stateOverride: 'scheme start'
        })
      }

      get username() {
        return this._url.username
      }

      set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return
        }

        usm.setTheUsername(this._url, v)
      }

      get password() {
        return this._url.password
      }

      set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return
        }

        usm.setThePassword(this._url, v)
      }

      get host() {
        const url = this._url

        if (url.host === null) {
          return ''
        }

        if (url.port === null) {
          return usm.serializeHost(url.host)
        }

        return (
          usm.serializeHost(url.host) + ':' + usm.serializeInteger(url.port)
        )
      }

      set host(v) {
        if (this._url.cannotBeABaseURL) {
          return
        }

        usm.basicURLParse(v, { url: this._url, stateOverride: 'host' })
      }

      get hostname() {
        if (this._url.host === null) {
          return ''
        }

        return usm.serializeHost(this._url.host)
      }

      set hostname(v) {
        if (this._url.cannotBeABaseURL) {
          return
        }

        usm.basicURLParse(v, { url: this._url, stateOverride: 'hostname' })
      }

      get port() {
        if (this._url.port === null) {
          return ''
        }

        return usm.serializeInteger(this._url.port)
      }

      set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return
        }

        if (v === '') {
          this._url.port = null
        } else {
          usm.basicURLParse(v, { url: this._url, stateOverride: 'port' })
        }
      }

      get pathname() {
        if (this._url.cannotBeABaseURL) {
          return this._url.path[0]
        }

        if (this._url.path.length === 0) {
          return ''
        }

        return '/' + this._url.path.join('/')
      }

      set pathname(v) {
        if (this._url.cannotBeABaseURL) {
          return
        }

        this._url.path = []
        usm.basicURLParse(v, { url: this._url, stateOverride: 'path start' })
      }

      get search() {
        if (this._url.query === null || this._url.query === '') {
          return ''
        }

        return '?' + this._url.query
      }

      set search(v) {
        // TODO: query stuff

        const url = this._url

        if (v === '') {
          url.query = null
          return
        }

        const input = v[0] === '?' ? v.substring(1) : v
        url.query = ''
        usm.basicURLParse(input, { url, stateOverride: 'query' })
      }

      get hash() {
        if (this._url.fragment === null || this._url.fragment === '') {
          return ''
        }

        return '#' + this._url.fragment
      }

      set hash(v) {
        if (v === '') {
          this._url.fragment = null
          return
        }

        const input = v[0] === '#' ? v.substring(1) : v
        this._url.fragment = ''
        usm.basicURLParse(input, { url: this._url, stateOverride: 'fragment' })
      }

      toJSON() {
        return this.href
      }
    }

    /***/
  },

  /***/ 653: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const conversions = __nccwpck_require__(5871)
    const utils = __nccwpck_require__(276)
    const Impl = __nccwpck_require__(8262)

    const impl = utils.implSymbol

    function URL(url) {
      if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError(
          "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
        )
      }
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'URL': 1 argument required, but only " +
            arguments.length +
            ' present.'
        )
      }
      const args = []
      for (let i = 0; i < arguments.length && i < 2; ++i) {
        args[i] = arguments[i]
      }
      args[0] = conversions['USVString'](args[0])
      if (args[1] !== undefined) {
        args[1] = conversions['USVString'](args[1])
      }

      module.exports.setup(this, args)
    }

    URL.prototype.toJSON = function toJSON() {
      if (!this || !module.exports.is(this)) {
        throw new TypeError('Illegal invocation')
      }
      const args = []
      for (let i = 0; i < arguments.length && i < 0; ++i) {
        args[i] = arguments[i]
      }
      return this[impl].toJSON.apply(this[impl], args)
    }
    Object.defineProperty(URL.prototype, 'href', {
      get() {
        return this[impl].href
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].href = V
      },
      enumerable: true,
      configurable: true
    })

    URL.prototype.toString = function () {
      if (!this || !module.exports.is(this)) {
        throw new TypeError('Illegal invocation')
      }
      return this.href
    }

    Object.defineProperty(URL.prototype, 'origin', {
      get() {
        return this[impl].origin
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'protocol', {
      get() {
        return this[impl].protocol
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].protocol = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'username', {
      get() {
        return this[impl].username
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].username = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'password', {
      get() {
        return this[impl].password
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].password = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'host', {
      get() {
        return this[impl].host
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].host = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'hostname', {
      get() {
        return this[impl].hostname
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].hostname = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'port', {
      get() {
        return this[impl].port
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].port = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'pathname', {
      get() {
        return this[impl].pathname
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].pathname = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'search', {
      get() {
        return this[impl].search
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].search = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'hash', {
      get() {
        return this[impl].hash
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].hash = V
      },
      enumerable: true,
      configurable: true
    })

    module.exports = {
      is(obj) {
        return !!obj && obj[impl] instanceof Impl.implementation
      },
      create(constructorArgs, privateData) {
        let obj = Object.create(URL.prototype)
        this.setup(obj, constructorArgs, privateData)
        return obj
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData) privateData = {}
        privateData.wrapper = obj

        obj[impl] = new Impl.implementation(constructorArgs, privateData)
        obj[impl][utils.wrapperSymbol] = obj
      },
      interface: URL,
      expose: {
        Window: { URL: URL },
        Worker: { URL: URL }
      }
    }

    /***/
  },

  /***/ 3323: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    exports.URL = __nccwpck_require__(653)['interface']
    exports.serializeURL = __nccwpck_require__(33).serializeURL
    exports.serializeURLOrigin = __nccwpck_require__(33).serializeURLOrigin
    exports.basicURLParse = __nccwpck_require__(33).basicURLParse
    exports.setTheUsername = __nccwpck_require__(33).setTheUsername
    exports.setThePassword = __nccwpck_require__(33).setThePassword
    exports.serializeHost = __nccwpck_require__(33).serializeHost
    exports.serializeInteger = __nccwpck_require__(33).serializeInteger
    exports.parseURL = __nccwpck_require__(33).parseURL

    /***/
  },

  /***/ 33: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const punycode = __nccwpck_require__(5477)
    const tr46 = __nccwpck_require__(2299)

    const specialSchemes = {
      ftp: 21,
      file: null,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    }

    const failure = Symbol('failure')

    function countSymbols(str) {
      return punycode.ucs2.decode(str).length
    }

    function at(input, idx) {
      const c = input[idx]
      return isNaN(c) ? undefined : String.fromCodePoint(c)
    }

    function isASCIIDigit(c) {
      return c >= 0x30 && c <= 0x39
    }

    function isASCIIAlpha(c) {
      return (c >= 0x41 && c <= 0x5a) || (c >= 0x61 && c <= 0x7a)
    }

    function isASCIIAlphanumeric(c) {
      return isASCIIAlpha(c) || isASCIIDigit(c)
    }

    function isASCIIHex(c) {
      return (
        isASCIIDigit(c) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66)
      )
    }

    function isSingleDot(buffer) {
      return buffer === '.' || buffer.toLowerCase() === '%2e'
    }

    function isDoubleDot(buffer) {
      buffer = buffer.toLowerCase()
      return (
        buffer === '..' ||
        buffer === '%2e.' ||
        buffer === '.%2e' ||
        buffer === '%2e%2e'
      )
    }

    function isWindowsDriveLetterCodePoints(cp1, cp2) {
      return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124)
    }

    function isWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        (string[1] === ':' || string[1] === '|')
      )
    }

    function isNormalizedWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        string[1] === ':'
      )
    }

    function containsForbiddenHostCodePoint(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      )
    }

    function containsForbiddenHostCodePointExcludingPercent(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      )
    }

    function isSpecialScheme(scheme) {
      return specialSchemes[scheme] !== undefined
    }

    function isSpecial(url) {
      return isSpecialScheme(url.scheme)
    }

    function defaultPort(scheme) {
      return specialSchemes[scheme]
    }

    function percentEncode(c) {
      let hex = c.toString(16).toUpperCase()
      if (hex.length === 1) {
        hex = '0' + hex
      }

      return '%' + hex
    }

    function utf8PercentEncode(c) {
      const buf = new Buffer(c)

      let str = ''

      for (let i = 0; i < buf.length; ++i) {
        str += percentEncode(buf[i])
      }

      return str
    }

    function utf8PercentDecode(str) {
      const input = new Buffer(str)
      const output = []
      for (let i = 0; i < input.length; ++i) {
        if (input[i] !== 37) {
          output.push(input[i])
        } else if (
          input[i] === 37 &&
          isASCIIHex(input[i + 1]) &&
          isASCIIHex(input[i + 2])
        ) {
          output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16))
          i += 2
        } else {
          output.push(input[i])
        }
      }
      return new Buffer(output).toString()
    }

    function isC0ControlPercentEncode(c) {
      return c <= 0x1f || c > 0x7e
    }

    const extraPathPercentEncodeSet = new Set([
      32, 34, 35, 60, 62, 63, 96, 123, 125
    ])
    function isPathPercentEncode(c) {
      return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c)
    }

    const extraUserinfoPercentEncodeSet = new Set([
      47, 58, 59, 61, 64, 91, 92, 93, 94, 124
    ])
    function isUserinfoPercentEncode(c) {
      return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c)
    }

    function percentEncodeChar(c, encodeSetPredicate) {
      const cStr = String.fromCodePoint(c)

      if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr)
      }

      return cStr
    }

    function parseIPv4Number(input) {
      let R = 10

      if (
        input.length >= 2 &&
        input.charAt(0) === '0' &&
        input.charAt(1).toLowerCase() === 'x'
      ) {
        input = input.substring(2)
        R = 16
      } else if (input.length >= 2 && input.charAt(0) === '0') {
        input = input.substring(1)
        R = 8
      }

      if (input === '') {
        return 0
      }

      const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/
      if (regex.test(input)) {
        return failure
      }

      return parseInt(input, R)
    }

    function parseIPv4(input) {
      const parts = input.split('.')
      if (parts[parts.length - 1] === '') {
        if (parts.length > 1) {
          parts.pop()
        }
      }

      if (parts.length > 4) {
        return input
      }

      const numbers = []
      for (const part of parts) {
        if (part === '') {
          return input
        }
        const n = parseIPv4Number(part)
        if (n === failure) {
          return input
        }

        numbers.push(n)
      }

      for (let i = 0; i < numbers.length - 1; ++i) {
        if (numbers[i] > 255) {
          return failure
        }
      }
      if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure
      }

      let ipv4 = numbers.pop()
      let counter = 0

      for (const n of numbers) {
        ipv4 += n * Math.pow(256, 3 - counter)
        ++counter
      }

      return ipv4
    }

    function serializeIPv4(address) {
      let output = ''
      let n = address

      for (let i = 1; i <= 4; ++i) {
        output = String(n % 256) + output
        if (i !== 4) {
          output = '.' + output
        }
        n = Math.floor(n / 256)
      }

      return output
    }

    function parseIPv6(input) {
      const address = [0, 0, 0, 0, 0, 0, 0, 0]
      let pieceIndex = 0
      let compress = null
      let pointer = 0

      input = punycode.ucs2.decode(input)

      if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
          return failure
        }

        pointer += 2
        ++pieceIndex
        compress = pieceIndex
      }

      while (pointer < input.length) {
        if (pieceIndex === 8) {
          return failure
        }

        if (input[pointer] === 58) {
          if (compress !== null) {
            return failure
          }
          ++pointer
          ++pieceIndex
          compress = pieceIndex
          continue
        }

        let value = 0
        let length = 0

        while (length < 4 && isASCIIHex(input[pointer])) {
          value = value * 0x10 + parseInt(at(input, pointer), 16)
          ++pointer
          ++length
        }

        if (input[pointer] === 46) {
          if (length === 0) {
            return failure
          }

          pointer -= length

          if (pieceIndex > 6) {
            return failure
          }

          let numbersSeen = 0

          while (input[pointer] !== undefined) {
            let ipv4Piece = null

            if (numbersSeen > 0) {
              if (input[pointer] === 46 && numbersSeen < 4) {
                ++pointer
              } else {
                return failure
              }
            }

            if (!isASCIIDigit(input[pointer])) {
              return failure
            }

            while (isASCIIDigit(input[pointer])) {
              const number = parseInt(at(input, pointer))
              if (ipv4Piece === null) {
                ipv4Piece = number
              } else if (ipv4Piece === 0) {
                return failure
              } else {
                ipv4Piece = ipv4Piece * 10 + number
              }
              if (ipv4Piece > 255) {
                return failure
              }
              ++pointer
            }

            address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece

            ++numbersSeen

            if (numbersSeen === 2 || numbersSeen === 4) {
              ++pieceIndex
            }
          }

          if (numbersSeen !== 4) {
            return failure
          }

          break
        } else if (input[pointer] === 58) {
          ++pointer
          if (input[pointer] === undefined) {
            return failure
          }
        } else if (input[pointer] !== undefined) {
          return failure
        }

        address[pieceIndex] = value
        ++pieceIndex
      }

      if (compress !== null) {
        let swaps = pieceIndex - compress
        pieceIndex = 7
        while (pieceIndex !== 0 && swaps > 0) {
          const temp = address[compress + swaps - 1]
          address[compress + swaps - 1] = address[pieceIndex]
          address[pieceIndex] = temp
          --pieceIndex
          --swaps
        }
      } else if (compress === null && pieceIndex !== 8) {
        return failure
      }

      return address
    }

    function serializeIPv6(address) {
      let output = ''
      const seqResult = findLongestZeroSequence(address)
      const compress = seqResult.idx
      let ignore0 = false

      for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
        if (ignore0 && address[pieceIndex] === 0) {
          continue
        } else if (ignore0) {
          ignore0 = false
        }

        if (compress === pieceIndex) {
          const separator = pieceIndex === 0 ? '::' : ':'
          output += separator
          ignore0 = true
          continue
        }

        output += address[pieceIndex].toString(16)

        if (pieceIndex !== 7) {
          output += ':'
        }
      }

      return output
    }

    function parseHost(input, isSpecialArg) {
      if (input[0] === '[') {
        if (input[input.length - 1] !== ']') {
          return failure
        }

        return parseIPv6(input.substring(1, input.length - 1))
      }

      if (!isSpecialArg) {
        return parseOpaqueHost(input)
      }

      const domain = utf8PercentDecode(input)
      const asciiDomain = tr46.toASCII(
        domain,
        false,
        tr46.PROCESSING_OPTIONS.NONTRANSITIONAL,
        false
      )
      if (asciiDomain === null) {
        return failure
      }

      if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure
      }

      const ipv4Host = parseIPv4(asciiDomain)
      if (typeof ipv4Host === 'number' || ipv4Host === failure) {
        return ipv4Host
      }

      return asciiDomain
    }

    function parseOpaqueHost(input) {
      if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure
      }

      let output = ''
      const decoded = punycode.ucs2.decode(input)
      for (let i = 0; i < decoded.length; ++i) {
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode)
      }
      return output
    }

    function findLongestZeroSequence(arr) {
      let maxIdx = null
      let maxLen = 1 // only find elements > 1
      let currStart = null
      let currLen = 0

      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) {
          if (currLen > maxLen) {
            maxIdx = currStart
            maxLen = currLen
          }

          currStart = null
          currLen = 0
        } else {
          if (currStart === null) {
            currStart = i
          }
          ++currLen
        }
      }

      // if trailing zeros
      if (currLen > maxLen) {
        maxIdx = currStart
        maxLen = currLen
      }

      return {
        idx: maxIdx,
        len: maxLen
      }
    }

    function serializeHost(host) {
      if (typeof host === 'number') {
        return serializeIPv4(host)
      }

      // IPv6 serializer
      if (host instanceof Array) {
        return '[' + serializeIPv6(host) + ']'
      }

      return host
    }

    function trimControlChars(url) {
      return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, '')
    }

    function trimTabAndNewline(url) {
      return url.replace(/\u0009|\u000A|\u000D/g, '')
    }

    function shortenPath(url) {
      const path = url.path
      if (path.length === 0) {
        return
      }
      if (
        url.scheme === 'file' &&
        path.length === 1 &&
        isNormalizedWindowsDriveLetter(path[0])
      ) {
        return
      }

      path.pop()
    }

    function includesCredentials(url) {
      return url.username !== '' || url.password !== ''
    }

    function cannotHaveAUsernamePasswordPort(url) {
      return (
        url.host === null ||
        url.host === '' ||
        url.cannotBeABaseURL ||
        url.scheme === 'file'
      )
    }

    function isNormalizedWindowsDriveLetter(string) {
      return /^[A-Za-z]:$/.test(string)
    }

    function URLStateMachine(
      input,
      base,
      encodingOverride,
      url,
      stateOverride
    ) {
      this.pointer = 0
      this.input = input
      this.base = base || null
      this.encodingOverride = encodingOverride || 'utf-8'
      this.stateOverride = stateOverride
      this.url = url
      this.failure = false
      this.parseError = false

      if (!this.url) {
        this.url = {
          scheme: '',
          username: '',
          password: '',
          host: null,
          port: null,
          path: [],
          query: null,
          fragment: null,

          cannotBeABaseURL: false
        }

        const res = trimControlChars(this.input)
        if (res !== this.input) {
          this.parseError = true
        }
        this.input = res
      }

      const res = trimTabAndNewline(this.input)
      if (res !== this.input) {
        this.parseError = true
      }
      this.input = res

      this.state = stateOverride || 'scheme start'

      this.buffer = ''
      this.atFlag = false
      this.arrFlag = false
      this.passwordTokenSeenFlag = false

      this.input = punycode.ucs2.decode(this.input)

      for (; this.pointer <= this.input.length; ++this.pointer) {
        const c = this.input[this.pointer]
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c)

        // exec state machine
        const ret = this['parse ' + this.state](c, cStr)
        if (!ret) {
          break // terminate algorithm
        } else if (ret === failure) {
          this.failure = true
          break
        }
      }
    }

    URLStateMachine.prototype['parse scheme start'] = function parseSchemeStart(
      c,
      cStr
    ) {
      if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase()
        this.state = 'scheme'
      } else if (!this.stateOverride) {
        this.state = 'no scheme'
        --this.pointer
      } else {
        this.parseError = true
        return failure
      }

      return true
    }

    URLStateMachine.prototype['parse scheme'] = function parseScheme(c, cStr) {
      if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase()
      } else if (c === 58) {
        if (this.stateOverride) {
          if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
            return false
          }

          if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
            return false
          }

          if (
            (includesCredentials(this.url) || this.url.port !== null) &&
            this.buffer === 'file'
          ) {
            return false
          }

          if (
            this.url.scheme === 'file' &&
            (this.url.host === '' || this.url.host === null)
          ) {
            return false
          }
        }
        this.url.scheme = this.buffer
        this.buffer = ''
        if (this.stateOverride) {
          return false
        }
        if (this.url.scheme === 'file') {
          if (
            this.input[this.pointer + 1] !== 47 ||
            this.input[this.pointer + 2] !== 47
          ) {
            this.parseError = true
          }
          this.state = 'file'
        } else if (
          isSpecial(this.url) &&
          this.base !== null &&
          this.base.scheme === this.url.scheme
        ) {
          this.state = 'special relative or authority'
        } else if (isSpecial(this.url)) {
          this.state = 'special authority slashes'
        } else if (this.input[this.pointer + 1] === 47) {
          this.state = 'path or authority'
          ++this.pointer
        } else {
          this.url.cannotBeABaseURL = true
          this.url.path.push('')
          this.state = 'cannot-be-a-base-URL path'
        }
      } else if (!this.stateOverride) {
        this.buffer = ''
        this.state = 'no scheme'
        this.pointer = -1
      } else {
        this.parseError = true
        return failure
      }

      return true
    }

    URLStateMachine.prototype['parse no scheme'] = function parseNoScheme(c) {
      if (this.base === null || (this.base.cannotBeABaseURL && c !== 35)) {
        return failure
      } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme
        this.url.path = this.base.path.slice()
        this.url.query = this.base.query
        this.url.fragment = ''
        this.url.cannotBeABaseURL = true
        this.state = 'fragment'
      } else if (this.base.scheme === 'file') {
        this.state = 'file'
        --this.pointer
      } else {
        this.state = 'relative'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse special relative or authority'] =
      function parseSpecialRelativeOrAuthority(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = 'special authority ignore slashes'
          ++this.pointer
        } else {
          this.parseError = true
          this.state = 'relative'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse path or authority'] =
      function parsePathOrAuthority(c) {
        if (c === 47) {
          this.state = 'authority'
        } else {
          this.state = 'path'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse relative'] = function parseRelative(c) {
      this.url.scheme = this.base.scheme
      if (isNaN(c)) {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice()
        this.url.query = this.base.query
      } else if (c === 47) {
        this.state = 'relative slash'
      } else if (c === 63) {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice()
        this.url.query = ''
        this.state = 'query'
      } else if (c === 35) {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice()
        this.url.query = this.base.query
        this.url.fragment = ''
        this.state = 'fragment'
      } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true
        this.state = 'relative slash'
      } else {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice(0, this.base.path.length - 1)

        this.state = 'path'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse relative slash'] =
      function parseRelativeSlash(c) {
        if (isSpecial(this.url) && (c === 47 || c === 92)) {
          if (c === 92) {
            this.parseError = true
          }
          this.state = 'special authority ignore slashes'
        } else if (c === 47) {
          this.state = 'authority'
        } else {
          this.url.username = this.base.username
          this.url.password = this.base.password
          this.url.host = this.base.host
          this.url.port = this.base.port
          this.state = 'path'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse special authority slashes'] =
      function parseSpecialAuthoritySlashes(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = 'special authority ignore slashes'
          ++this.pointer
        } else {
          this.parseError = true
          this.state = 'special authority ignore slashes'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse special authority ignore slashes'] =
      function parseSpecialAuthorityIgnoreSlashes(c) {
        if (c !== 47 && c !== 92) {
          this.state = 'authority'
          --this.pointer
        } else {
          this.parseError = true
        }

        return true
      }

    URLStateMachine.prototype['parse authority'] = function parseAuthority(
      c,
      cStr
    ) {
      if (c === 64) {
        this.parseError = true
        if (this.atFlag) {
          this.buffer = '%40' + this.buffer
        }
        this.atFlag = true

        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer)
        for (let pointer = 0; pointer < len; ++pointer) {
          const codePoint = this.buffer.codePointAt(pointer)

          if (codePoint === 58 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true
            continue
          }
          const encodedCodePoints = percentEncodeChar(
            codePoint,
            isUserinfoPercentEncode
          )
          if (this.passwordTokenSeenFlag) {
            this.url.password += encodedCodePoints
          } else {
            this.url.username += encodedCodePoints
          }
        }
        this.buffer = ''
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        if (this.atFlag && this.buffer === '') {
          this.parseError = true
          return failure
        }
        this.pointer -= countSymbols(this.buffer) + 1
        this.buffer = ''
        this.state = 'host'
      } else {
        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse hostname'] = URLStateMachine.prototype[
      'parse host'
    ] = function parseHostName(c, cStr) {
      if (this.stateOverride && this.url.scheme === 'file') {
        --this.pointer
        this.state = 'file host'
      } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === '') {
          this.parseError = true
          return failure
        }

        const host = parseHost(this.buffer, isSpecial(this.url))
        if (host === failure) {
          return failure
        }

        this.url.host = host
        this.buffer = ''
        this.state = 'port'
        if (this.stateOverride === 'hostname') {
          return false
        }
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        --this.pointer
        if (isSpecial(this.url) && this.buffer === '') {
          this.parseError = true
          return failure
        } else if (
          this.stateOverride &&
          this.buffer === '' &&
          (includesCredentials(this.url) || this.url.port !== null)
        ) {
          this.parseError = true
          return false
        }

        const host = parseHost(this.buffer, isSpecial(this.url))
        if (host === failure) {
          return failure
        }

        this.url.host = host
        this.buffer = ''
        this.state = 'path start'
        if (this.stateOverride) {
          return false
        }
      } else {
        if (c === 91) {
          this.arrFlag = true
        } else if (c === 93) {
          this.arrFlag = false
        }
        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse port'] = function parsePort(c, cStr) {
      if (isASCIIDigit(c)) {
        this.buffer += cStr
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92) ||
        this.stateOverride
      ) {
        if (this.buffer !== '') {
          const port = parseInt(this.buffer)
          if (port > Math.pow(2, 16) - 1) {
            this.parseError = true
            return failure
          }
          this.url.port = port === defaultPort(this.url.scheme) ? null : port
          this.buffer = ''
        }
        if (this.stateOverride) {
          return false
        }
        this.state = 'path start'
        --this.pointer
      } else {
        this.parseError = true
        return failure
      }

      return true
    }

    const fileOtherwiseCodePoints = new Set([47, 92, 63, 35])

    URLStateMachine.prototype['parse file'] = function parseFile(c) {
      this.url.scheme = 'file'

      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true
        }
        this.state = 'file slash'
      } else if (this.base !== null && this.base.scheme === 'file') {
        if (isNaN(c)) {
          this.url.host = this.base.host
          this.url.path = this.base.path.slice()
          this.url.query = this.base.query
        } else if (c === 63) {
          this.url.host = this.base.host
          this.url.path = this.base.path.slice()
          this.url.query = ''
          this.state = 'query'
        } else if (c === 35) {
          this.url.host = this.base.host
          this.url.path = this.base.path.slice()
          this.url.query = this.base.query
          this.url.fragment = ''
          this.state = 'fragment'
        } else {
          if (
            this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) ||
            (this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
              !fileOtherwiseCodePoints.has(this.input[this.pointer + 2]))
          ) {
            this.url.host = this.base.host
            this.url.path = this.base.path.slice()
            shortenPath(this.url)
          } else {
            this.parseError = true
          }

          this.state = 'path'
          --this.pointer
        }
      } else {
        this.state = 'path'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse file slash'] = function parseFileSlash(c) {
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true
        }
        this.state = 'file host'
      } else {
        if (this.base !== null && this.base.scheme === 'file') {
          if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
            this.url.path.push(this.base.path[0])
          } else {
            this.url.host = this.base.host
          }
        }
        this.state = 'path'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse file host'] = function parseFileHost(
      c,
      cStr
    ) {
      if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
          this.parseError = true
          this.state = 'path'
        } else if (this.buffer === '') {
          this.url.host = ''
          if (this.stateOverride) {
            return false
          }
          this.state = 'path start'
        } else {
          let host = parseHost(this.buffer, isSpecial(this.url))
          if (host === failure) {
            return failure
          }
          if (host === 'localhost') {
            host = ''
          }
          this.url.host = host

          if (this.stateOverride) {
            return false
          }

          this.buffer = ''
          this.state = 'path start'
        }
      } else {
        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse path start'] = function parsePathStart(c) {
      if (isSpecial(this.url)) {
        if (c === 92) {
          this.parseError = true
        }
        this.state = 'path'

        if (c !== 47 && c !== 92) {
          --this.pointer
        }
      } else if (!this.stateOverride && c === 63) {
        this.url.query = ''
        this.state = 'query'
      } else if (!this.stateOverride && c === 35) {
        this.url.fragment = ''
        this.state = 'fragment'
      } else if (c !== undefined) {
        this.state = 'path'
        if (c !== 47) {
          --this.pointer
        }
      }

      return true
    }

    URLStateMachine.prototype['parse path'] = function parsePath(c) {
      if (
        isNaN(c) ||
        c === 47 ||
        (isSpecial(this.url) && c === 92) ||
        (!this.stateOverride && (c === 63 || c === 35))
      ) {
        if (isSpecial(this.url) && c === 92) {
          this.parseError = true
        }

        if (isDoubleDot(this.buffer)) {
          shortenPath(this.url)
          if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push('')
          }
        } else if (
          isSingleDot(this.buffer) &&
          c !== 47 &&
          !(isSpecial(this.url) && c === 92)
        ) {
          this.url.path.push('')
        } else if (!isSingleDot(this.buffer)) {
          if (
            this.url.scheme === 'file' &&
            this.url.path.length === 0 &&
            isWindowsDriveLetterString(this.buffer)
          ) {
            if (this.url.host !== '' && this.url.host !== null) {
              this.parseError = true
              this.url.host = ''
            }
            this.buffer = this.buffer[0] + ':'
          }
          this.url.path.push(this.buffer)
        }
        this.buffer = ''
        if (
          this.url.scheme === 'file' &&
          (c === undefined || c === 63 || c === 35)
        ) {
          while (this.url.path.length > 1 && this.url.path[0] === '') {
            this.parseError = true
            this.url.path.shift()
          }
        }
        if (c === 63) {
          this.url.query = ''
          this.state = 'query'
        }
        if (c === 35) {
          this.url.fragment = ''
          this.state = 'fragment'
        }
      } else {
        // TODO: If c is not a URL code point and not "%", parse error.

        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true
        }

        this.buffer += percentEncodeChar(c, isPathPercentEncode)
      }

      return true
    }

    URLStateMachine.prototype['parse cannot-be-a-base-URL path'] =
      function parseCannotBeABaseURLPath(c) {
        if (c === 63) {
          this.url.query = ''
          this.state = 'query'
        } else if (c === 35) {
          this.url.fragment = ''
          this.state = 'fragment'
        } else {
          // TODO: Add: not a URL code point
          if (!isNaN(c) && c !== 37) {
            this.parseError = true
          }

          if (
            c === 37 &&
            (!isASCIIHex(this.input[this.pointer + 1]) ||
              !isASCIIHex(this.input[this.pointer + 2]))
          ) {
            this.parseError = true
          }

          if (!isNaN(c)) {
            this.url.path[0] =
              this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode)
          }
        }

        return true
      }

    URLStateMachine.prototype['parse query'] = function parseQuery(c, cStr) {
      if (isNaN(c) || (!this.stateOverride && c === 35)) {
        if (
          !isSpecial(this.url) ||
          this.url.scheme === 'ws' ||
          this.url.scheme === 'wss'
        ) {
          this.encodingOverride = 'utf-8'
        }

        const buffer = new Buffer(this.buffer) // TODO: Use encoding override instead
        for (let i = 0; i < buffer.length; ++i) {
          if (
            buffer[i] < 0x21 ||
            buffer[i] > 0x7e ||
            buffer[i] === 0x22 ||
            buffer[i] === 0x23 ||
            buffer[i] === 0x3c ||
            buffer[i] === 0x3e
          ) {
            this.url.query += percentEncode(buffer[i])
          } else {
            this.url.query += String.fromCodePoint(buffer[i])
          }
        }

        this.buffer = ''
        if (c === 35) {
          this.url.fragment = ''
          this.state = 'fragment'
        }
      } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true
        }

        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse fragment'] = function parseFragment(c) {
      if (isNaN(c)) {
        // do nothing
      } else if (c === 0x0) {
        this.parseError = true
      } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true
        }

        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode)
      }

      return true
    }

    function serializeURL(url, excludeFragment) {
      let output = url.scheme + ':'
      if (url.host !== null) {
        output += '//'

        if (url.username !== '' || url.password !== '') {
          output += url.username
          if (url.password !== '') {
            output += ':' + url.password
          }
          output += '@'
        }

        output += serializeHost(url.host)

        if (url.port !== null) {
          output += ':' + url.port
        }
      } else if (url.host === null && url.scheme === 'file') {
        output += '//'
      }

      if (url.cannotBeABaseURL) {
        output += url.path[0]
      } else {
        for (const string of url.path) {
          output += '/' + string
        }
      }

      if (url.query !== null) {
        output += '?' + url.query
      }

      if (!excludeFragment && url.fragment !== null) {
        output += '#' + url.fragment
      }

      return output
    }

    function serializeOrigin(tuple) {
      let result = tuple.scheme + '://'
      result += serializeHost(tuple.host)

      if (tuple.port !== null) {
        result += ':' + tuple.port
      }

      return result
    }

    module.exports.serializeURL = serializeURL

    module.exports.serializeURLOrigin = function (url) {
      // https://url.spec.whatwg.org/#concept-url-origin
      switch (url.scheme) {
        case 'blob':
          try {
            return module.exports.serializeURLOrigin(
              module.exports.parseURL(url.path[0])
            )
          } catch (e) {
            // serializing an opaque origin returns "null"
            return 'null'
          }
        case 'ftp':
        case 'gopher':
        case 'http':
        case 'https':
        case 'ws':
        case 'wss':
          return serializeOrigin({
            scheme: url.scheme,
            host: url.host,
            port: url.port
          })
        case 'file':
          // spec says "exercise to the reader", chrome says "file://"
          return 'file://'
        default:
          // serializing an opaque origin returns "null"
          return 'null'
      }
    }

    module.exports.basicURLParse = function (input, options) {
      if (options === undefined) {
        options = {}
      }

      const usm = new URLStateMachine(
        input,
        options.baseURL,
        options.encodingOverride,
        options.url,
        options.stateOverride
      )
      if (usm.failure) {
        return 'failure'
      }

      return usm.url
    }

    module.exports.setTheUsername = function (url, username) {
      url.username = ''
      const decoded = punycode.ucs2.decode(username)
      for (let i = 0; i < decoded.length; ++i) {
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode)
      }
    }

    module.exports.setThePassword = function (url, password) {
      url.password = ''
      const decoded = punycode.ucs2.decode(password)
      for (let i = 0; i < decoded.length; ++i) {
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode)
      }
    }

    module.exports.serializeHost = serializeHost

    module.exports.cannotHaveAUsernamePasswordPort =
      cannotHaveAUsernamePasswordPort

    module.exports.serializeInteger = function (integer) {
      return String(integer)
    }

    module.exports.parseURL = function (input, options) {
      if (options === undefined) {
        options = {}
      }

      // We don't handle blobs, so this just delegates:
      return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
      })
    }

    /***/
  },

  /***/ 276: /***/ (module) => {
    module.exports.mixin = function mixin(target, source) {
      const keys = Object.getOwnPropertyNames(source)
      for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(
          target,
          keys[i],
          Object.getOwnPropertyDescriptor(source, keys[i])
        )
      }
    }

    module.exports.wrapperSymbol = Symbol('wrapper')
    module.exports.implSymbol = Symbol('impl')

    module.exports.wrapperForImpl = function (impl) {
      return impl[module.exports.wrapperSymbol]
    }

    module.exports.implForWrapper = function (wrapper) {
      return wrapper[module.exports.implSymbol]
    }

    /***/
  },

  /***/ 1223: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var wrappy = __nccwpck_require__(2940)
    module.exports = wrappy(once)
    module.exports.strict = wrappy(onceStrict)

    once.proto = once(function () {
      Object.defineProperty(Function.prototype, 'once', {
        value: function () {
          return once(this)
        },
        configurable: true
      })

      Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function () {
          return onceStrict(this)
        },
        configurable: true
      })
    })

    function once(fn) {
      var f = function () {
        if (f.called) return f.value
        f.called = true
        return (f.value = fn.apply(this, arguments))
      }
      f.called = false
      return f
    }

    function onceStrict(fn) {
      var f = function () {
        if (f.called) throw new Error(f.onceError)
        f.called = true
        return (f.value = fn.apply(this, arguments))
      }
      var name = fn.name || 'Function wrapped with `once`'
      f.onceError = name + " shouldn't be called more than once"
      f.called = false
      return f
    }

    /***/
  },

  /***/ 435: /***/ (module) => {
    /**
     * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
     */

    function Cache(maxSize) {
      this._maxSize = maxSize
      this.clear()
    }
    Cache.prototype.clear = function () {
      this._size = 0
      this._values = Object.create(null)
    }
    Cache.prototype.get = function (key) {
      return this._values[key]
    }
    Cache.prototype.set = function (key, value) {
      this._size >= this._maxSize && this.clear()
      if (!(key in this._values)) this._size++

      return (this._values[key] = value)
    }

    var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
      DIGIT_REGEX = /^\d+$/,
      LEAD_DIGIT_REGEX = /^\d/,
      SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
      CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
      MAX_CACHE_SIZE = 512

    var pathCache = new Cache(MAX_CACHE_SIZE),
      setCache = new Cache(MAX_CACHE_SIZE),
      getCache = new Cache(MAX_CACHE_SIZE)

    var config

    module.exports = {
      Cache: Cache,

      split: split,

      normalizePath: normalizePath,

      setter: function (path) {
        var parts = normalizePath(path)

        return (
          setCache.get(path) ||
          setCache.set(path, function setter(obj, value) {
            var index = 0
            var len = parts.length
            var data = obj

            while (index < len - 1) {
              var part = parts[index]
              if (
                part === '__proto__' ||
                part === 'constructor' ||
                part === 'prototype'
              ) {
                return obj
              }

              data = data[parts[index++]]
            }
            data[parts[index]] = value
          })
        )
      },

      getter: function (path, safe) {
        var parts = normalizePath(path)
        return (
          getCache.get(path) ||
          getCache.set(path, function getter(data) {
            var index = 0,
              len = parts.length
            while (index < len) {
              if (data != null || !safe) data = data[parts[index++]]
              else return
            }
            return data
          })
        )
      },

      join: function (segments) {
        return segments.reduce(function (path, part) {
          return (
            path +
            (isQuoted(part) || DIGIT_REGEX.test(part)
              ? '[' + part + ']'
              : (path ? '.' : '') + part)
          )
        }, '')
      },

      forEach: function (path, cb, thisArg) {
        forEach(Array.isArray(path) ? path : split(path), cb, thisArg)
      }
    }

    function normalizePath(path) {
      return (
        pathCache.get(path) ||
        pathCache.set(
          path,
          split(path).map(function (part) {
            return part.replace(CLEAN_QUOTES_REGEX, '$2')
          })
        )
      )
    }

    function split(path) {
      return path.match(SPLIT_REGEX) || ['']
    }

    function forEach(parts, iter, thisArg) {
      var len = parts.length,
        part,
        idx,
        isArray,
        isBracket

      for (idx = 0; idx < len; idx++) {
        part = parts[idx]

        if (part) {
          if (shouldBeQuoted(part)) {
            part = '"' + part + '"'
          }

          isBracket = isQuoted(part)
          isArray = !isBracket && /^\d+$/.test(part)

          iter.call(thisArg, part, isBracket, isArray, idx, parts)
        }
      }
    }

    function isQuoted(str) {
      return (
        typeof str === 'string' &&
        str &&
        ["'", '"'].indexOf(str.charAt(0)) !== -1
      )
    }

    function hasLeadingNumber(part) {
      return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX)
    }

    function hasSpecialChars(part) {
      return SPEC_CHAR_REGEX.test(part)
    }

    function shouldBeQuoted(part) {
      return (
        !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part))
      )
    }

    /***/
  },

  /***/ 1762: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var typeOf = __nccwpck_require__(6961)
    var extend = __nccwpck_require__(7512)

    /**
     * Parse sections in `input` with the given `options`.
     *
     * ```js
     * var sections = require('{%= name %}');
     * var result = sections(input, options);
     * // { content: 'Content before sections', sections: [] }
     * ```
     * @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.
     * @param {Object} options
     * @return {Object} Returns an object with a `content` string and an array of `sections` objects.
     * @api public
     */

    module.exports = function (input, options) {
      if (typeof options === 'function') {
        options = { parse: options }
      }

      var file = toObject(input)
      var defaults = { section_delimiter: '---', parse: identity }
      var opts = extend({}, defaults, options)
      var delim = opts.section_delimiter
      var lines = file.content.split(/\r?\n/)
      var sections = null
      var section = createSection()
      var content = []
      var stack = []

      function initSections(val) {
        file.content = val
        sections = []
        content = []
      }

      function closeSection(val) {
        if (stack.length) {
          section.key = getKey(stack[0], delim)
          section.content = val
          opts.parse(section, sections)
          sections.push(section)
          section = createSection()
          content = []
          stack = []
        }
      }

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
        var len = stack.length
        var ln = line.trim()

        if (isDelimiter(ln, delim)) {
          if (ln.length === 3 && i !== 0) {
            if (len === 0 || len === 2) {
              content.push(line)
              continue
            }
            stack.push(ln)
            section.data = content.join('\n')
            content = []
            continue
          }

          if (sections === null) {
            initSections(content.join('\n'))
          }

          if (len === 2) {
            closeSection(content.join('\n'))
          }

          stack.push(ln)
          continue
        }

        content.push(line)
      }

      if (sections === null) {
        initSections(content.join('\n'))
      } else {
        closeSection(content.join('\n'))
      }

      file.sections = sections
      return file
    }

    function isDelimiter(line, delim) {
      if (line.slice(0, delim.length) !== delim) {
        return false
      }
      if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false
      }
      return true
    }

    function toObject(input) {
      if (typeOf(input) !== 'object') {
        input = { content: input }
      }

      if (typeof input.content !== 'string' && !isBuffer(input.content)) {
        throw new TypeError('expected a buffer or string')
      }

      input.content = input.content.toString()
      input.sections = []
      return input
    }

    function getKey(val, delim) {
      return val ? val.slice(delim.length).trim() : ''
    }

    function createSection() {
      return { key: '', data: '', content: '' }
    }

    function identity(val) {
      return val
    }

    function isBuffer(val) {
      if (
        val &&
        val.constructor &&
        typeof val.constructor.isBuffer === 'function'
      ) {
        return val.constructor.isBuffer(val)
      }
      return false
    }

    /***/
  },

  /***/ 6550: /***/ (module) => {
    /*!
     * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
     *
     * Copyright (c) 2015, 2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    module.exports = function (str) {
      if (typeof str === 'string' && str.charAt(0) === '\ufeff') {
        return str.slice(1)
      }
      return str
    }

    /***/
  },

  /***/ 3889: /***/ (module) => {
    /**
     * Topological sorting function
     *
     * @param {Array} edges
     * @returns {Array}
     */

    module.exports = function (edges) {
      return toposort(uniqueNodes(edges), edges)
    }

    module.exports.array = toposort

    function toposort(nodes, edges) {
      var cursor = nodes.length,
        sorted = new Array(cursor),
        visited = {},
        i = cursor,
        // Better data structures make algorithm much faster.
        outgoingEdges = makeOutgoingEdges(edges),
        nodesHash = makeNodesHash(nodes)

      // check for unknown nodes
      edges.forEach(function (edge) {
        if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
          throw new Error(
            'Unknown node. There is an unknown node in the supplied edges.'
          )
        }
      })

      while (i--) {
        if (!visited[i]) visit(nodes[i], i, new Set())
      }

      return sorted

      function visit(node, i, predecessors) {
        if (predecessors.has(node)) {
          var nodeRep
          try {
            nodeRep = ', node was:' + JSON.stringify(node)
          } catch (e) {
            nodeRep = ''
          }
          throw new Error('Cyclic dependency' + nodeRep)
        }

        if (!nodesHash.has(node)) {
          throw new Error(
            'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' +
              JSON.stringify(node)
          )
        }

        if (visited[i]) return
        visited[i] = true

        var outgoing = outgoingEdges.get(node) || new Set()
        outgoing = Array.from(outgoing)

        if ((i = outgoing.length)) {
          predecessors.add(node)
          do {
            var child = outgoing[--i]
            visit(child, nodesHash.get(child), predecessors)
          } while (i)
          predecessors.delete(node)
        }

        sorted[--cursor] = node
      }
    }

    function uniqueNodes(arr) {
      var res = new Set()
      for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i]
        res.add(edge[0])
        res.add(edge[1])
      }
      return Array.from(res)
    }

    function makeOutgoingEdges(arr) {
      var edges = new Map()
      for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i]
        if (!edges.has(edge[0])) edges.set(edge[0], new Set())
        if (!edges.has(edge[1])) edges.set(edge[1], new Set())
        edges.get(edge[0]).add(edge[1])
      }
      return edges
    }

    function makeNodesHash(arr) {
      var res = new Map()
      for (var i = 0, len = arr.length; i < len; i++) {
        res.set(arr[i], i)
      }
      return res
    }

    /***/
  },

  /***/ 4294: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    module.exports = __nccwpck_require__(4219)

    /***/
  },

  /***/ 4219: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    var net = __nccwpck_require__(1808)
    var tls = __nccwpck_require__(4404)
    var http = __nccwpck_require__(3685)
    var https = __nccwpck_require__(5687)
    var events = __nccwpck_require__(2361)
    var assert = __nccwpck_require__(9491)
    var util = __nccwpck_require__(3837)

    exports.httpOverHttp = httpOverHttp
    exports.httpsOverHttp = httpsOverHttp
    exports.httpOverHttps = httpOverHttps
    exports.httpsOverHttps = httpsOverHttps

    function httpOverHttp(options) {
      var agent = new TunnelingAgent(options)
      agent.request = http.request
      return agent
    }

    function httpsOverHttp(options) {
      var agent = new TunnelingAgent(options)
      agent.request = http.request
      agent.createSocket = createSecureSocket
      agent.defaultPort = 443
      return agent
    }

    function httpOverHttps(options) {
      var agent = new TunnelingAgent(options)
      agent.request = https.request
      return agent
    }

    function httpsOverHttps(options) {
      var agent = new TunnelingAgent(options)
      agent.request = https.request
      agent.createSocket = createSecureSocket
      agent.defaultPort = 443
      return agent
    }

    function TunnelingAgent(options) {
      var self = this
      self.options = options || {}
      self.proxyOptions = self.options.proxy || {}
      self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets
      self.requests = []
      self.sockets = []

      self.on('free', function onFree(socket, host, port, localAddress) {
        var options = toOptions(host, port, localAddress)
        for (var i = 0, len = self.requests.length; i < len; ++i) {
          var pending = self.requests[i]
          if (pending.host === options.host && pending.port === options.port) {
            // Detect the request to connect same origin server,
            // reuse the connection.
            self.requests.splice(i, 1)
            pending.request.onSocket(socket)
            return
          }
        }
        socket.destroy()
        self.removeSocket(socket)
      })
    }
    util.inherits(TunnelingAgent, events.EventEmitter)

    TunnelingAgent.prototype.addRequest = function addRequest(
      req,
      host,
      port,
      localAddress
    ) {
      var self = this
      var options = mergeOptions(
        { request: req },
        self.options,
        toOptions(host, port, localAddress)
      )

      if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push(options)
        return
      }

      // If we are under maxSockets create a new one.
      self.createSocket(options, function (socket) {
        socket.on('free', onFree)
        socket.on('close', onCloseOrRemove)
        socket.on('agentRemove', onCloseOrRemove)
        req.onSocket(socket)

        function onFree() {
          self.emit('free', socket, options)
        }

        function onCloseOrRemove(err) {
          self.removeSocket(socket)
          socket.removeListener('free', onFree)
          socket.removeListener('close', onCloseOrRemove)
          socket.removeListener('agentRemove', onCloseOrRemove)
        }
      })
    }

    TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
      var self = this
      var placeholder = {}
      self.sockets.push(placeholder)

      var connectOptions = mergeOptions({}, self.proxyOptions, {
        method: 'CONNECT',
        path: options.host + ':' + options.port,
        agent: false,
        headers: {
          host: options.host + ':' + options.port
        }
      })
      if (options.localAddress) {
        connectOptions.localAddress = options.localAddress
      }
      if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {}
        connectOptions.headers['Proxy-Authorization'] =
          'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64')
      }

      debug('making CONNECT request')
      var connectReq = self.request(connectOptions)
      connectReq.useChunkedEncodingByDefault = false // for v0.6
      connectReq.once('response', onResponse) // for v0.6
      connectReq.once('upgrade', onUpgrade) // for v0.6
      connectReq.once('connect', onConnect) // for v0.7 or later
      connectReq.once('error', onError)
      connectReq.end()

      function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true
      }

      function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function () {
          onConnect(res, socket, head)
        })
      }

      function onConnect(res, socket, head) {
        connectReq.removeAllListeners()
        socket.removeAllListeners()

        if (res.statusCode !== 200) {
          debug(
            'tunneling socket could not be established, statusCode=%d',
            res.statusCode
          )
          socket.destroy()
          var error = new Error(
            'tunneling socket could not be established, ' +
              'statusCode=' +
              res.statusCode
          )
          error.code = 'ECONNRESET'
          options.request.emit('error', error)
          self.removeSocket(placeholder)
          return
        }
        if (head.length > 0) {
          debug('got illegal response body from proxy')
          socket.destroy()
          var error = new Error('got illegal response body from proxy')
          error.code = 'ECONNRESET'
          options.request.emit('error', error)
          self.removeSocket(placeholder)
          return
        }
        debug('tunneling connection has established')
        self.sockets[self.sockets.indexOf(placeholder)] = socket
        return cb(socket)
      }

      function onError(cause) {
        connectReq.removeAllListeners()

        debug(
          'tunneling socket could not be established, cause=%s\n',
          cause.message,
          cause.stack
        )
        var error = new Error(
          'tunneling socket could not be established, ' +
            'cause=' +
            cause.message
        )
        error.code = 'ECONNRESET'
        options.request.emit('error', error)
        self.removeSocket(placeholder)
      }
    }

    TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
      var pos = this.sockets.indexOf(socket)
      if (pos === -1) {
        return
      }
      this.sockets.splice(pos, 1)

      var pending = this.requests.shift()
      if (pending) {
        // If we have pending requests and a socket gets closed a new one
        // needs to be created to take over in the pool for the one that closed.
        this.createSocket(pending, function (socket) {
          pending.request.onSocket(socket)
        })
      }
    }

    function createSecureSocket(options, cb) {
      var self = this
      TunnelingAgent.prototype.createSocket.call(
        self,
        options,
        function (socket) {
          var hostHeader = options.request.getHeader('host')
          var tlsOptions = mergeOptions({}, self.options, {
            socket: socket,
            servername: hostHeader
              ? hostHeader.replace(/:.*$/, '')
              : options.host
          })

          // 0 is dummy port for v0.6
          var secureSocket = tls.connect(0, tlsOptions)
          self.sockets[self.sockets.indexOf(socket)] = secureSocket
          cb(secureSocket)
        }
      )
    }

    function toOptions(host, port, localAddress) {
      if (typeof host === 'string') {
        // since v0.10
        return {
          host: host,
          port: port,
          localAddress: localAddress
        }
      }
      return host // for v0.11 or later
    }

    function mergeOptions(target) {
      for (var i = 1, len = arguments.length; i < len; ++i) {
        var overrides = arguments[i]
        if (typeof overrides === 'object') {
          var keys = Object.keys(overrides)
          for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
            var k = keys[j]
            if (overrides[k] !== undefined) {
              target[k] = overrides[k]
            }
          }
        }
      }
      return target
    }

    var debug
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      debug = function () {
        var args = Array.prototype.slice.call(arguments)
        if (typeof args[0] === 'string') {
          args[0] = 'TUNNEL: ' + args[0]
        } else {
          args.unshift('TUNNEL:')
        }
        console.error.apply(console, args)
      }
    } else {
      debug = function () {}
    }
    exports.debug = debug // for test

    /***/
  },

  /***/ 5030: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function getUserAgent() {
      if (typeof navigator === 'object' && 'userAgent' in navigator) {
        return navigator.userAgent
      }

      if (typeof process === 'object' && 'version' in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${
          process.arch
        })`
      }

      return '<environment undetectable>'
    }

    exports.getUserAgent = getUserAgent
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 2940: /***/ (module) => {
    // Returns a wrapper function that returns a wrapped callback
    // The wrapper function should do some stuff, and return a
    // presumably different callback function.
    // This makes sure that own properties are retained, so that
    // decorations and such are not lost along the way.
    module.exports = wrappy
    function wrappy(fn, cb) {
      if (fn && cb) return wrappy(fn)(cb)

      if (typeof fn !== 'function') throw new TypeError('need wrapper function')

      Object.keys(fn).forEach(function (k) {
        wrapper[k] = fn[k]
      })

      return wrapper

      function wrapper() {
        var args = new Array(arguments.length)
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i]
        }
        var ret = fn.apply(this, args)
        var cb = args[args.length - 1]
        if (typeof ret === 'function' && ret !== cb) {
          Object.keys(cb).forEach(function (k) {
            ret[k] = cb[k]
          })
        }
        return ret
      }
    }

    /***/
  },

  /***/ 2780: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _has = _interopRequireDefault(__nccwpck_require__(7198))

    var _isSchema = _interopRequireDefault(__nccwpck_require__(8037))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    class Condition {
      constructor(refs, options) {
        this.fn = void 0
        this.refs = refs
        this.refs = refs

        if (typeof options === 'function') {
          this.fn = options
          return
        }

        if (!(0, _has.default)(options, 'is'))
          throw new TypeError('`is:` is required for `when()` conditions')
        if (!options.then && !options.otherwise)
          throw new TypeError(
            'either `then:` or `otherwise:` is required for `when()` conditions'
          )
        let { is, then, otherwise } = options
        let check =
          typeof is === 'function'
            ? is
            : (...values) => values.every((value) => value === is)

        this.fn = function (...args) {
          let options = args.pop()
          let schema = args.pop()
          let branch = check(...args) ? then : otherwise
          if (!branch) return undefined
          if (typeof branch === 'function') return branch(schema)
          return schema.concat(branch.resolve(options))
        }
      }

      resolve(base, options) {
        let values = this.refs.map((ref) =>
          ref.getValue(
            options == null ? void 0 : options.value,
            options == null ? void 0 : options.parent,
            options == null ? void 0 : options.context
          )
        )
        let schema = this.fn.apply(base, values.concat(base, options))
        if (schema === undefined || schema === base) return base
        if (!(0, _isSchema.default)(schema))
          throw new TypeError('conditions must return a schema object')
        return schema.resolve(options)
      }
    }

    var _default = Condition
    exports['default'] = _default

    /***/
  },

  /***/ 2219: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _isSchema = _interopRequireDefault(__nccwpck_require__(8037))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function create(builder) {
      return new Lazy(builder)
    }

    class Lazy {
      constructor(builder) {
        this.type = 'lazy'
        this.__isYupSchema__ = true
        this.__inputType = void 0
        this.__outputType = void 0

        this._resolve = (value, options = {}) => {
          let schema = this.builder(value, options)
          if (!(0, _isSchema.default)(schema))
            throw new TypeError('lazy() functions must return a valid schema')
          return schema.resolve(options)
        }

        this.builder = builder
      }

      resolve(options) {
        return this._resolve(options.value, options)
      }

      cast(value, options) {
        return this._resolve(value, options).cast(value, options)
      }

      validate(value, options, maybeCb) {
        // @ts-expect-error missing public callback on type
        return this._resolve(value, options).validate(value, options, maybeCb)
      }

      validateSync(value, options) {
        return this._resolve(value, options).validateSync(value, options)
      }

      validateAt(path, value, options) {
        return this._resolve(value, options).validateAt(path, value, options)
      }

      validateSyncAt(path, value, options) {
        return this._resolve(value, options).validateSyncAt(
          path,
          value,
          options
        )
      }

      describe() {
        return null
      }

      isValid(value, options) {
        return this._resolve(value, options).isValid(value, options)
      }

      isValidSync(value, options) {
        return this._resolve(value, options).isValidSync(value, options)
      }
    }

    var _default = Lazy
    exports['default'] = _default

    /***/
  },

  /***/ 1619: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _propertyExpr = __nccwpck_require__(435)

    const prefixes = {
      context: '$',
      value: '.'
    }

    function create(key, options) {
      return new Reference(key, options)
    }

    class Reference {
      constructor(key, options = {}) {
        this.key = void 0
        this.isContext = void 0
        this.isValue = void 0
        this.isSibling = void 0
        this.path = void 0
        this.getter = void 0
        this.map = void 0
        if (typeof key !== 'string')
          throw new TypeError('ref must be a string, got: ' + key)
        this.key = key.trim()
        if (key === '') throw new TypeError('ref must be a non-empty string')
        this.isContext = this.key[0] === prefixes.context
        this.isValue = this.key[0] === prefixes.value
        this.isSibling = !this.isContext && !this.isValue
        let prefix = this.isContext
          ? prefixes.context
          : this.isValue
          ? prefixes.value
          : ''
        this.path = this.key.slice(prefix.length)
        this.getter = this.path && (0, _propertyExpr.getter)(this.path, true)
        this.map = options.map
      }

      getValue(value, parent, context) {
        let result = this.isContext ? context : this.isValue ? value : parent
        if (this.getter) result = this.getter(result || {})
        if (this.map) result = this.map(result)
        return result
      }
      /**
       *
       * @param {*} value
       * @param {Object} options
       * @param {Object=} options.context
       * @param {Object=} options.parent
       */

      cast(value, options) {
        return this.getValue(
          value,
          options == null ? void 0 : options.parent,
          options == null ? void 0 : options.context
        )
      }

      resolve() {
        return this
      }

      describe() {
        return {
          type: 'ref',
          key: this.key
        }
      }

      toString() {
        return `Ref(${this.key})`
      }

      static isRef(value) {
        return value && value.__isYupRef
      }
    } // @ts-ignore

    exports['default'] = Reference
    Reference.prototype.__isYupRef = true

    /***/
  },

  /***/ 610: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _printValue = _interopRequireDefault(__nccwpck_require__(4310))

    var _toArray = _interopRequireDefault(__nccwpck_require__(7822))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }
      return _extends.apply(this, arguments)
    }

    let strReg = /\$\{\s*(\w+)\s*\}/g

    class ValidationError extends Error {
      static formatError(message, params) {
        const path = params.label || params.path || 'this'
        if (path !== params.path)
          params = _extends({}, params, {
            path
          })
        if (typeof message === 'string')
          return message.replace(strReg, (_, key) =>
            (0, _printValue.default)(params[key])
          )
        if (typeof message === 'function') return message(params)
        return message
      }

      static isError(err) {
        return err && err.name === 'ValidationError'
      }

      constructor(errorOrErrors, value, field, type) {
        super()
        this.value = void 0
        this.path = void 0
        this.type = void 0
        this.errors = void 0
        this.params = void 0
        this.inner = void 0
        this.name = 'ValidationError'
        this.value = value
        this.path = field
        this.type = type
        this.errors = []
        this.inner = []
        ;(0, _toArray.default)(errorOrErrors).forEach((err) => {
          if (ValidationError.isError(err)) {
            this.errors.push(...err.errors)
            this.inner = this.inner.concat(err.inner.length ? err.inner : err)
          } else {
            this.errors.push(err)
          }
        })
        this.message =
          this.errors.length > 1
            ? `${this.errors.length} errors occurred`
            : this.errors[0]
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, ValidationError)
      }
    }

    exports['default'] = ValidationError

    /***/
  },

  /***/ 4043: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _isAbsent = _interopRequireDefault(__nccwpck_require__(9660))

    var _isSchema = _interopRequireDefault(__nccwpck_require__(8037))

    var _printValue = _interopRequireDefault(__nccwpck_require__(4310))

    var _locale = __nccwpck_require__(4778)

    var _runTests = _interopRequireDefault(__nccwpck_require__(7323))

    var _ValidationError = _interopRequireDefault(__nccwpck_require__(610))

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }
      return _extends.apply(this, arguments)
    }

    function create(type) {
      return new ArraySchema(type)
    }

    class ArraySchema extends _schema.default {
      constructor(type) {
        super({
          type: 'array'
        }) // `undefined` specifically means uninitialized, as opposed to
        // "no subtype"

        this.innerType = void 0
        this.innerType = type
        this.withMutation(() => {
          this.transform(function (values) {
            if (typeof values === 'string')
              try {
                values = JSON.parse(values)
              } catch (err) {
                values = null
              }
            return this.isType(values) ? values : null
          })
        })
      }

      _typeCheck(v) {
        return Array.isArray(v)
      }

      get _subType() {
        return this.innerType
      }

      _cast(_value, _opts) {
        const value = super._cast(_value, _opts) //should ignore nulls here

        if (!this._typeCheck(value) || !this.innerType) return value
        let isChanged = false
        const castArray = value.map((v, idx) => {
          const castElement = this.innerType.cast(
            v,
            _extends({}, _opts, {
              path: `${_opts.path || ''}[${idx}]`
            })
          )

          if (castElement !== v) {
            isChanged = true
          }

          return castElement
        })
        return isChanged ? castArray : value
      }

      _validate(_value, options = {}, callback) {
        var _options$abortEarly, _options$recursive

        let errors = []
        let sync = options.sync
        let path = options.path
        let innerType = this.innerType
        let endEarly =
          (_options$abortEarly = options.abortEarly) != null
            ? _options$abortEarly
            : this.spec.abortEarly
        let recursive =
          (_options$recursive = options.recursive) != null
            ? _options$recursive
            : this.spec.recursive
        let originalValue =
          options.originalValue != null ? options.originalValue : _value

        super._validate(_value, options, (err, value) => {
          if (err) {
            if (!_ValidationError.default.isError(err) || endEarly) {
              return void callback(err, value)
            }

            errors.push(err)
          }

          if (!recursive || !innerType || !this._typeCheck(value)) {
            callback(errors[0] || null, value)
            return
          }

          originalValue = originalValue || value // #950 Ensure that sparse array empty slots are validated

          let tests = new Array(value.length)

          for (let idx = 0; idx < value.length; idx++) {
            let item = value[idx]
            let path = `${options.path || ''}[${idx}]` // object._validate note for isStrict explanation

            let innerOptions = _extends({}, options, {
              path,
              strict: true,
              parent: value,
              index: idx,
              originalValue: originalValue[idx]
            })

            tests[idx] = (_, cb) => innerType.validate(item, innerOptions, cb)
          }

          ;(0, _runTests.default)(
            {
              sync,
              path,
              value,
              errors,
              endEarly,
              tests
            },
            callback
          )
        })
      }

      clone(spec) {
        const next = super.clone(spec)
        next.innerType = this.innerType
        return next
      }

      concat(schema) {
        let next = super.concat(schema)
        next.innerType = this.innerType
        if (schema.innerType)
          next.innerType = next.innerType // @ts-expect-error Lazy doesn't have concat()
            ? next.innerType.concat(schema.innerType)
            : schema.innerType
        return next
      }

      of(schema) {
        // FIXME: this should return a new instance of array without the default to be
        let next = this.clone()
        if (!(0, _isSchema.default)(schema))
          throw new TypeError(
            '`array.of()` sub-schema must be a valid yup schema not: ' +
              (0, _printValue.default)(schema)
          ) // FIXME(ts):

        next.innerType = schema
        return next
      }

      length(length, message = _locale.array.length) {
        return this.test({
          message,
          name: 'length',
          exclusive: true,
          params: {
            length
          },

          test(value) {
            return (
              (0, _isAbsent.default)(value) ||
              value.length === this.resolve(length)
            )
          }
        })
      }

      min(min, message) {
        message = message || _locale.array.min
        return this.test({
          message,
          name: 'min',
          exclusive: true,
          params: {
            min
          },

          // FIXME(ts): Array<typeof T>
          test(value) {
            return (
              (0, _isAbsent.default)(value) || value.length >= this.resolve(min)
            )
          }
        })
      }

      max(max, message) {
        message = message || _locale.array.max
        return this.test({
          message,
          name: 'max',
          exclusive: true,
          params: {
            max
          },

          test(value) {
            return (
              (0, _isAbsent.default)(value) || value.length <= this.resolve(max)
            )
          }
        })
      }

      ensure() {
        return this.default(() => []).transform((val, original) => {
          // We don't want to return `null` for nullable schema
          if (this._typeCheck(val)) return val
          return original == null ? [] : [].concat(original)
        })
      }

      compact(rejector) {
        let reject = !rejector ? (v) => !!v : (v, i, a) => !rejector(v, i, a)
        return this.transform((values) =>
          values != null ? values.filter(reject) : values
        )
      }

      describe() {
        let base = super.describe()
        if (this.innerType) base.innerType = this.innerType.describe()
        return base
      }

      nullable(isNullable = true) {
        return super.nullable(isNullable)
      }

      defined() {
        return super.defined()
      }

      required(msg) {
        return super.required(msg)
      }
    }

    exports['default'] = ArraySchema
    create.prototype = ArraySchema.prototype //
    // Interfaces
    //

    /***/
  },

  /***/ 1885: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    var _locale = __nccwpck_require__(4778)

    var _isAbsent = _interopRequireDefault(__nccwpck_require__(9660))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function create() {
      return new BooleanSchema()
    }

    class BooleanSchema extends _schema.default {
      constructor() {
        super({
          type: 'boolean'
        })
        this.withMutation(() => {
          this.transform(function (value) {
            if (!this.isType(value)) {
              if (/^(true|1)$/i.test(String(value))) return true
              if (/^(false|0)$/i.test(String(value))) return false
            }

            return value
          })
        })
      }

      _typeCheck(v) {
        if (v instanceof Boolean) v = v.valueOf()
        return typeof v === 'boolean'
      }

      isTrue(message = _locale.boolean.isValue) {
        return this.test({
          message,
          name: 'is-value',
          exclusive: true,
          params: {
            value: 'true'
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value === true
          }
        })
      }

      isFalse(message = _locale.boolean.isValue) {
        return this.test({
          message,
          name: 'is-value',
          exclusive: true,
          params: {
            value: 'false'
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value === false
          }
        })
      }
    }

    exports['default'] = BooleanSchema
    create.prototype = BooleanSchema.prototype

    /***/
  },

  /***/ 3946: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _isodate = _interopRequireDefault(__nccwpck_require__(8011))

    var _locale = __nccwpck_require__(4778)

    var _isAbsent = _interopRequireDefault(__nccwpck_require__(9660))

    var _Reference = _interopRequireDefault(__nccwpck_require__(1619))

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    // @ts-ignore
    let invalidDate = new Date('')

    let isDate = (obj) =>
      Object.prototype.toString.call(obj) === '[object Date]'

    function create() {
      return new DateSchema()
    }

    class DateSchema extends _schema.default {
      constructor() {
        super({
          type: 'date'
        })
        this.withMutation(() => {
          this.transform(function (value) {
            if (this.isType(value)) return value
            value = (0, _isodate.default)(value) // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.

            return !isNaN(value) ? new Date(value) : invalidDate
          })
        })
      }

      _typeCheck(v) {
        return isDate(v) && !isNaN(v.getTime())
      }

      prepareParam(ref, name) {
        let param

        if (!_Reference.default.isRef(ref)) {
          let cast = this.cast(ref)
          if (!this._typeCheck(cast))
            throw new TypeError(
              `\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`
            )
          param = cast
        } else {
          param = ref
        }

        return param
      }

      min(min, message = _locale.date.min) {
        let limit = this.prepareParam(min, 'min')
        return this.test({
          message,
          name: 'min',
          exclusive: true,
          params: {
            min
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value >= this.resolve(limit)
          }
        })
      }

      max(max, message = _locale.date.max) {
        let limit = this.prepareParam(max, 'max')
        return this.test({
          message,
          name: 'max',
          exclusive: true,
          params: {
            max
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value <= this.resolve(limit)
          }
        })
      }
    }

    exports['default'] = DateSchema
    DateSchema.INVALID_DATE = invalidDate
    create.prototype = DateSchema.prototype
    create.INVALID_DATE = invalidDate

    /***/
  },

  /***/ 7001: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    Object.defineProperty(exports, 'ArraySchema', {
      enumerable: true,
      get: function () {
        return _array.default
      }
    })
    Object.defineProperty(exports, 'BaseSchema', {
      enumerable: true,
      get: function () {
        return _schema.default
      }
    })
    Object.defineProperty(exports, 'BooleanSchema', {
      enumerable: true,
      get: function () {
        return _boolean.default
      }
    })
    Object.defineProperty(exports, 'DateSchema', {
      enumerable: true,
      get: function () {
        return _date.default
      }
    })
    Object.defineProperty(exports, 'MixedSchema', {
      enumerable: true,
      get: function () {
        return _mixed.default
      }
    })
    Object.defineProperty(exports, 'NumberSchema', {
      enumerable: true,
      get: function () {
        return _number.default
      }
    })
    Object.defineProperty(exports, 'ObjectSchema', {
      enumerable: true,
      get: function () {
        return _object.default
      }
    })
    Object.defineProperty(exports, 'StringSchema', {
      enumerable: true,
      get: function () {
        return _string.default
      }
    })
    Object.defineProperty(exports, 'ValidationError', {
      enumerable: true,
      get: function () {
        return _ValidationError.default
      }
    })
    exports.addMethod = addMethod
    Object.defineProperty(exports, 'array', {
      enumerable: true,
      get: function () {
        return _array.create
      }
    })
    Object.defineProperty(exports, 'bool', {
      enumerable: true,
      get: function () {
        return _boolean.create
      }
    })
    Object.defineProperty(exports, 'boolean', {
      enumerable: true,
      get: function () {
        return _boolean.create
      }
    })
    Object.defineProperty(exports, 'date', {
      enumerable: true,
      get: function () {
        return _date.create
      }
    })
    Object.defineProperty(exports, 'isSchema', {
      enumerable: true,
      get: function () {
        return _isSchema.default
      }
    })
    Object.defineProperty(exports, 'lazy', {
      enumerable: true,
      get: function () {
        return _Lazy.create
      }
    })
    Object.defineProperty(exports, 'mixed', {
      enumerable: true,
      get: function () {
        return _mixed.create
      }
    })
    Object.defineProperty(exports, 'number', {
      enumerable: true,
      get: function () {
        return _number.create
      }
    })
    Object.defineProperty(exports, 'object', {
      enumerable: true,
      get: function () {
        return _object.create
      }
    })
    Object.defineProperty(exports, 'reach', {
      enumerable: true,
      get: function () {
        return _reach.default
      }
    })
    Object.defineProperty(exports, 'ref', {
      enumerable: true,
      get: function () {
        return _Reference.create
      }
    })
    Object.defineProperty(exports, 'setLocale', {
      enumerable: true,
      get: function () {
        return _setLocale.default
      }
    })
    Object.defineProperty(exports, 'string', {
      enumerable: true,
      get: function () {
        return _string.create
      }
    })

    var _mixed = _interopRequireWildcard(__nccwpck_require__(7111))

    var _boolean = _interopRequireWildcard(__nccwpck_require__(1885))

    var _string = _interopRequireWildcard(__nccwpck_require__(9921))

    var _number = _interopRequireWildcard(__nccwpck_require__(832))

    var _date = _interopRequireWildcard(__nccwpck_require__(3946))

    var _object = _interopRequireWildcard(__nccwpck_require__(9457))

    var _array = _interopRequireWildcard(__nccwpck_require__(4043))

    var _Reference = __nccwpck_require__(1619)

    var _Lazy = __nccwpck_require__(2219)

    var _ValidationError = _interopRequireDefault(__nccwpck_require__(610))

    var _reach = _interopRequireDefault(__nccwpck_require__(9432))

    var _isSchema = _interopRequireDefault(__nccwpck_require__(8037))

    var _setLocale = _interopRequireDefault(__nccwpck_require__(9241))

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== 'function') return null
      var cacheBabelInterop = new WeakMap()
      var cacheNodeInterop = new WeakMap()
      return (_getRequireWildcardCache = function (nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop
      })(nodeInterop)
    }

    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj
      }
      if (
        obj === null ||
        (typeof obj !== 'object' && typeof obj !== 'function')
      ) {
        return { default: obj }
      }
      var cache = _getRequireWildcardCache(nodeInterop)
      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }
      var newObj = {}
      var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor
      for (var key in obj) {
        if (
          key !== 'default' &&
          Object.prototype.hasOwnProperty.call(obj, key)
        ) {
          var desc = hasPropertyDescriptor
            ? Object.getOwnPropertyDescriptor(obj, key)
            : null
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }
      newObj.default = obj
      if (cache) {
        cache.set(obj, newObj)
      }
      return newObj
    }

    function addMethod(schemaType, name, fn) {
      if (!schemaType || !(0, _isSchema.default)(schemaType.prototype))
        throw new TypeError(
          'You must provide a yup schema constructor function'
        )
      if (typeof name !== 'string')
        throw new TypeError('A Method name must be provided')
      if (typeof fn !== 'function')
        throw new TypeError('Method function must be provided')
      schemaType.prototype[name] = fn
    }

    /***/
  },

  /***/ 4778: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.string =
      exports.object =
      exports.number =
      exports.mixed =
      exports['default'] =
      exports.date =
      exports.boolean =
      exports.array =
        void 0

    var _printValue = _interopRequireDefault(__nccwpck_require__(4310))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    let mixed = {
      default: '${path} is invalid',
      required: '${path} is a required field',
      oneOf: '${path} must be one of the following values: ${values}',
      notOneOf: '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        let isCast = originalValue != null && originalValue !== value
        let msg =
          `${path} must be a \`${type}\` type, ` +
          `but the final value was: \`${(0, _printValue.default)(
            value,
            true
          )}\`` +
          (isCast
            ? ` (cast from the value \`${(0, _printValue.default)(
                originalValue,
                true
              )}\`).`
            : '.')

        if (value === null) {
          msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``
        }

        return msg
      },
      defined: '${path} must be defined'
    }
    exports.mixed = mixed
    let string = {
      length: '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches: '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      uuid: '${path} must be a valid UUID',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string'
    }
    exports.string = string
    let number = {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer'
    }
    exports.number = number
    let date = {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}'
    }
    exports.date = date
    let boolean = {
      isValue: '${path} field must be ${value}'
    }
    exports.boolean = boolean
    let object = {
      noUnknown: '${path} field has unspecified keys: ${unknown}'
    }
    exports.object = object
    let array = {
      min: '${path} field must have at least ${min} items',
      max: '${path} field must have less than or equal to ${max} items',
      length: '${path} must have ${length} items'
    }
    exports.array = array

    var _default = Object.assign(Object.create(null), {
      mixed,
      string,
      number,
      date,
      object,
      array,
      boolean
    })

    exports['default'] = _default

    /***/
  },

  /***/ 7111: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    const Mixed = _schema.default
    var _default = Mixed
    exports['default'] = _default

    function create() {
      return new Mixed()
    } // XXX: this is using the Base schema so that `addMethod(mixed)` works as a base class

    create.prototype = Mixed.prototype

    /***/
  },

  /***/ 832: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _locale = __nccwpck_require__(4778)

    var _isAbsent = _interopRequireDefault(__nccwpck_require__(9660))

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    let isNaN = (value) => value != +value

    function create() {
      return new NumberSchema()
    }

    class NumberSchema extends _schema.default {
      constructor() {
        super({
          type: 'number'
        })
        this.withMutation(() => {
          this.transform(function (value) {
            let parsed = value

            if (typeof parsed === 'string') {
              parsed = parsed.replace(/\s/g, '')
              if (parsed === '') return NaN // don't use parseFloat to avoid positives on alpha-numeric strings

              parsed = +parsed
            }

            if (this.isType(parsed)) return parsed
            return parseFloat(parsed)
          })
        })
      }

      _typeCheck(value) {
        if (value instanceof Number) value = value.valueOf()
        return typeof value === 'number' && !isNaN(value)
      }

      min(min, message = _locale.number.min) {
        return this.test({
          message,
          name: 'min',
          exclusive: true,
          params: {
            min
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value >= this.resolve(min)
          }
        })
      }

      max(max, message = _locale.number.max) {
        return this.test({
          message,
          name: 'max',
          exclusive: true,
          params: {
            max
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value <= this.resolve(max)
          }
        })
      }

      lessThan(less, message = _locale.number.lessThan) {
        return this.test({
          message,
          name: 'max',
          exclusive: true,
          params: {
            less
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value < this.resolve(less)
          }
        })
      }

      moreThan(more, message = _locale.number.moreThan) {
        return this.test({
          message,
          name: 'min',
          exclusive: true,
          params: {
            more
          },

          test(value) {
            return (0, _isAbsent.default)(value) || value > this.resolve(more)
          }
        })
      }

      positive(msg = _locale.number.positive) {
        return this.moreThan(0, msg)
      }

      negative(msg = _locale.number.negative) {
        return this.lessThan(0, msg)
      }

      integer(message = _locale.number.integer) {
        return this.test({
          name: 'integer',
          message,
          test: (val) => (0, _isAbsent.default)(val) || Number.isInteger(val)
        })
      }

      truncate() {
        return this.transform((value) =>
          !(0, _isAbsent.default)(value) ? value | 0 : value
        )
      }

      round(method) {
        var _method

        let avail = ['ceil', 'floor', 'round', 'trunc']
        method =
          ((_method = method) == null ? void 0 : _method.toLowerCase()) ||
          'round' // this exists for symemtry with the new Math.trunc

        if (method === 'trunc') return this.truncate()
        if (avail.indexOf(method.toLowerCase()) === -1)
          throw new TypeError(
            'Only valid options for round() are: ' + avail.join(', ')
          )
        return this.transform((value) =>
          !(0, _isAbsent.default)(value) ? Math[method](value) : value
        )
      }
    }

    exports['default'] = NumberSchema
    create.prototype = NumberSchema.prototype //
    // Number Interfaces
    //

    /***/
  },

  /***/ 9457: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _has = _interopRequireDefault(__nccwpck_require__(7198))

    var _snakeCase = _interopRequireDefault(__nccwpck_require__(1419))

    var _camelCase = _interopRequireDefault(__nccwpck_require__(5769))

    var _mapKeys = _interopRequireDefault(__nccwpck_require__(2221))

    var _mapValues = _interopRequireDefault(__nccwpck_require__(668))

    var _propertyExpr = __nccwpck_require__(435)

    var _locale = __nccwpck_require__(4778)

    var _sortFields = _interopRequireDefault(__nccwpck_require__(722))

    var _sortByKeyOrder = _interopRequireDefault(__nccwpck_require__(9967))

    var _runTests = _interopRequireDefault(__nccwpck_require__(7323))

    var _ValidationError = _interopRequireDefault(__nccwpck_require__(610))

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }
      return _extends.apply(this, arguments)
    }

    let isObject = (obj) =>
      Object.prototype.toString.call(obj) === '[object Object]'

    function unknown(ctx, value) {
      let known = Object.keys(ctx.fields)
      return Object.keys(value).filter((key) => known.indexOf(key) === -1)
    }

    const defaultSort = (0, _sortByKeyOrder.default)([])

    class ObjectSchema extends _schema.default {
      constructor(spec) {
        super({
          type: 'object'
        })
        this.fields = Object.create(null)
        this._sortErrors = defaultSort
        this._nodes = []
        this._excludedEdges = []
        this.withMutation(() => {
          this.transform(function coerce(value) {
            if (typeof value === 'string') {
              try {
                value = JSON.parse(value)
              } catch (err) {
                value = null
              }
            }

            if (this.isType(value)) return value
            return null
          })

          if (spec) {
            this.shape(spec)
          }
        })
      }

      _typeCheck(value) {
        return isObject(value) || typeof value === 'function'
      }

      _cast(_value, options = {}) {
        var _options$stripUnknown

        let value = super._cast(_value, options) //should ignore nulls here

        if (value === undefined) return this.getDefault()
        if (!this._typeCheck(value)) return value
        let fields = this.fields
        let strip =
          (_options$stripUnknown = options.stripUnknown) != null
            ? _options$stripUnknown
            : this.spec.noUnknown

        let props = this._nodes.concat(
          Object.keys(value).filter((v) => this._nodes.indexOf(v) === -1)
        )

        let intermediateValue = {} // is filled during the transform below

        let innerOptions = _extends({}, options, {
          parent: intermediateValue,
          __validating: options.__validating || false
        })

        let isChanged = false

        for (const prop of props) {
          let field = fields[prop]
          let exists = (0, _has.default)(value, prop)

          if (field) {
            let fieldValue
            let inputValue = value[prop] // safe to mutate since this is fired in sequence

            innerOptions.path = (options.path ? `${options.path}.` : '') + prop // innerOptions.value = value[prop];

            field = field.resolve({
              value: inputValue,
              context: options.context,
              parent: intermediateValue
            })
            let fieldSpec = 'spec' in field ? field.spec : undefined
            let strict = fieldSpec == null ? void 0 : fieldSpec.strict

            if (fieldSpec == null ? void 0 : fieldSpec.strip) {
              isChanged = isChanged || prop in value
              continue
            }

            fieldValue =
              !options.__validating || !strict // TODO: use _cast, this is double resolving
                ? field.cast(value[prop], innerOptions)
                : value[prop]

            if (fieldValue !== undefined) {
              intermediateValue[prop] = fieldValue
            }
          } else if (exists && !strip) {
            intermediateValue[prop] = value[prop]
          }

          if (intermediateValue[prop] !== value[prop]) {
            isChanged = true
          }
        }

        return isChanged ? intermediateValue : value
      }

      _validate(_value, opts = {}, callback) {
        let errors = []
        let {
          sync,
          from = [],
          originalValue = _value,
          abortEarly = this.spec.abortEarly,
          recursive = this.spec.recursive
        } = opts
        from = [
          {
            schema: this,
            value: originalValue
          },
          ...from
        ] // this flag is needed for handling `strict` correctly in the context of
        // validation vs just casting. e.g strict() on a field is only used when validating

        opts.__validating = true
        opts.originalValue = originalValue
        opts.from = from

        super._validate(_value, opts, (err, value) => {
          if (err) {
            if (!_ValidationError.default.isError(err) || abortEarly) {
              return void callback(err, value)
            }

            errors.push(err)
          }

          if (!recursive || !isObject(value)) {
            callback(errors[0] || null, value)
            return
          }

          originalValue = originalValue || value

          let tests = this._nodes.map((key) => (_, cb) => {
            let path =
              key.indexOf('.') === -1
                ? (opts.path ? `${opts.path}.` : '') + key
                : `${opts.path || ''}["${key}"]`
            let field = this.fields[key]

            if (field && 'validate' in field) {
              field.validate(
                value[key],
                _extends({}, opts, {
                  // @ts-ignore
                  path,
                  from,
                  // inner fields are always strict:
                  // 1. this isn't strict so the casting will also have cast inner values
                  // 2. this is strict in which case the nested values weren't cast either
                  strict: true,
                  parent: value,
                  originalValue: originalValue[key]
                }),
                cb
              )
              return
            }

            cb(null)
          })

          ;(0, _runTests.default)(
            {
              sync,
              tests,
              value,
              errors,
              endEarly: abortEarly,
              sort: this._sortErrors,
              path: opts.path
            },
            callback
          )
        })
      }

      clone(spec) {
        const next = super.clone(spec)
        next.fields = _extends({}, this.fields)
        next._nodes = this._nodes
        next._excludedEdges = this._excludedEdges
        next._sortErrors = this._sortErrors
        return next
      }

      concat(schema) {
        let next = super.concat(schema)
        let nextFields = next.fields

        for (let [field, schemaOrRef] of Object.entries(this.fields)) {
          const target = nextFields[field]

          if (target === undefined) {
            nextFields[field] = schemaOrRef
          } else if (
            target instanceof _schema.default &&
            schemaOrRef instanceof _schema.default
          ) {
            nextFields[field] = schemaOrRef.concat(target)
          }
        }

        return next.withMutation(() =>
          next.shape(nextFields, this._excludedEdges)
        )
      }

      getDefaultFromShape() {
        let dft = {}

        this._nodes.forEach((key) => {
          const field = this.fields[key]
          dft[key] = 'default' in field ? field.getDefault() : undefined
        })

        return dft
      }

      _getDefault() {
        if ('default' in this.spec) {
          return super._getDefault()
        } // if there is no default set invent one

        if (!this._nodes.length) {
          return undefined
        }

        return this.getDefaultFromShape()
      }

      shape(additions, excludes = []) {
        let next = this.clone()
        let fields = Object.assign(next.fields, additions)
        next.fields = fields
        next._sortErrors = (0, _sortByKeyOrder.default)(Object.keys(fields))

        if (excludes.length) {
          // this is a convenience for when users only supply a single pair
          if (!Array.isArray(excludes[0])) excludes = [excludes]
          next._excludedEdges = [...next._excludedEdges, ...excludes]
        }

        next._nodes = (0, _sortFields.default)(fields, next._excludedEdges)
        return next
      }

      pick(keys) {
        const picked = {}

        for (const key of keys) {
          if (this.fields[key]) picked[key] = this.fields[key]
        }

        return this.clone().withMutation((next) => {
          next.fields = {}
          return next.shape(picked)
        })
      }

      omit(keys) {
        const next = this.clone()
        const fields = next.fields
        next.fields = {}

        for (const key of keys) {
          delete fields[key]
        }

        return next.withMutation(() => next.shape(fields))
      }

      from(from, to, alias) {
        let fromGetter = (0, _propertyExpr.getter)(from, true)
        return this.transform((obj) => {
          if (obj == null) return obj
          let newObj = obj

          if ((0, _has.default)(obj, from)) {
            newObj = _extends({}, obj)
            if (!alias) delete newObj[from]
            newObj[to] = fromGetter(obj)
          }

          return newObj
        })
      }

      noUnknown(noAllow = true, message = _locale.object.noUnknown) {
        if (typeof noAllow === 'string') {
          message = noAllow
          noAllow = true
        }

        let next = this.test({
          name: 'noUnknown',
          exclusive: true,
          message: message,

          test(value) {
            if (value == null) return true
            const unknownKeys = unknown(this.schema, value)
            return (
              !noAllow ||
              unknownKeys.length === 0 ||
              this.createError({
                params: {
                  unknown: unknownKeys.join(', ')
                }
              })
            )
          }
        })
        next.spec.noUnknown = noAllow
        return next
      }

      unknown(allow = true, message = _locale.object.noUnknown) {
        return this.noUnknown(!allow, message)
      }

      transformKeys(fn) {
        return this.transform(
          (obj) => obj && (0, _mapKeys.default)(obj, (_, key) => fn(key))
        )
      }

      camelCase() {
        return this.transformKeys(_camelCase.default)
      }

      snakeCase() {
        return this.transformKeys(_snakeCase.default)
      }

      constantCase() {
        return this.transformKeys((key) =>
          (0, _snakeCase.default)(key).toUpperCase()
        )
      }

      describe() {
        let base = super.describe()
        base.fields = (0, _mapValues.default)(this.fields, (value) =>
          value.describe()
        )
        return base
      }
    }

    exports['default'] = ObjectSchema

    function create(spec) {
      return new ObjectSchema(spec)
    }

    create.prototype = ObjectSchema.prototype

    /***/
  },

  /***/ 3450: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _nanoclone = _interopRequireDefault(__nccwpck_require__(1754))

    var _locale = __nccwpck_require__(4778)

    var _Condition = _interopRequireDefault(__nccwpck_require__(2780))

    var _runTests = _interopRequireDefault(__nccwpck_require__(7323))

    var _createValidation = _interopRequireDefault(__nccwpck_require__(4681))

    var _printValue = _interopRequireDefault(__nccwpck_require__(4310))

    var _Reference = _interopRequireDefault(__nccwpck_require__(1619))

    var _reach = __nccwpck_require__(9432)

    var _ValidationError = _interopRequireDefault(__nccwpck_require__(610))

    var _ReferenceSet = _interopRequireDefault(__nccwpck_require__(4013))

    var _toArray = _interopRequireDefault(__nccwpck_require__(7822))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }
      return _extends.apply(this, arguments)
    }

    class BaseSchema {
      constructor(options) {
        this.deps = []
        this.tests = void 0
        this.transforms = void 0
        this.conditions = []
        this._mutate = void 0
        this._typeError = void 0
        this._whitelist = new _ReferenceSet.default()
        this._blacklist = new _ReferenceSet.default()
        this.exclusiveTests = Object.create(null)
        this.spec = void 0
        this.tests = []
        this.transforms = []
        this.withMutation(() => {
          this.typeError(_locale.mixed.notType)
        })
        this.type = (options == null ? void 0 : options.type) || 'mixed'
        this.spec = _extends(
          {
            strip: false,
            strict: false,
            abortEarly: true,
            recursive: true,
            nullable: false,
            presence: 'optional'
          },
          options == null ? void 0 : options.spec
        )
      } // TODO: remove

      get _type() {
        return this.type
      }

      _typeCheck(_value) {
        return true
      }

      clone(spec) {
        if (this._mutate) {
          if (spec) Object.assign(this.spec, spec)
          return this
        } // if the nested value is a schema we can skip cloning, since
        // they are already immutable

        const next = Object.create(Object.getPrototypeOf(this)) // @ts-expect-error this is readonly

        next.type = this.type
        next._typeError = this._typeError
        next._whitelistError = this._whitelistError
        next._blacklistError = this._blacklistError
        next._whitelist = this._whitelist.clone()
        next._blacklist = this._blacklist.clone()
        next.exclusiveTests = _extends({}, this.exclusiveTests) // @ts-expect-error this is readonly

        next.deps = [...this.deps]
        next.conditions = [...this.conditions]
        next.tests = [...this.tests]
        next.transforms = [...this.transforms]
        next.spec = (0, _nanoclone.default)(_extends({}, this.spec, spec))
        return next
      }

      label(label) {
        let next = this.clone()
        next.spec.label = label
        return next
      }

      meta(...args) {
        if (args.length === 0) return this.spec.meta
        let next = this.clone()
        next.spec.meta = Object.assign(next.spec.meta || {}, args[0])
        return next
      } // withContext<TContext extends AnyObject>(): BaseSchema<
      //   TCast,
      //   TContext,
      //   TOutput
      // > {
      //   return this as any;
      // }

      withMutation(fn) {
        let before = this._mutate
        this._mutate = true
        let result = fn(this)
        this._mutate = before
        return result
      }

      concat(schema) {
        if (!schema || schema === this) return this
        if (schema.type !== this.type && this.type !== 'mixed')
          throw new TypeError(
            `You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`
          )
        let base = this
        let combined = schema.clone()

        const mergedSpec = _extends({}, base.spec, combined.spec) // if (combined.spec.nullable === UNSET)
        //   mergedSpec.nullable = base.spec.nullable;
        // if (combined.spec.presence === UNSET)
        //   mergedSpec.presence = base.spec.presence;

        combined.spec = mergedSpec
        combined._typeError || (combined._typeError = base._typeError)
        combined._whitelistError ||
          (combined._whitelistError = base._whitelistError)
        combined._blacklistError ||
          (combined._blacklistError = base._blacklistError) // manually merge the blacklist/whitelist (the other `schema` takes
        // precedence in case of conflicts)

        combined._whitelist = base._whitelist.merge(
          schema._whitelist,
          schema._blacklist
        )
        combined._blacklist = base._blacklist.merge(
          schema._blacklist,
          schema._whitelist
        ) // start with the current tests

        combined.tests = base.tests
        combined.exclusiveTests = base.exclusiveTests // manually add the new tests to ensure
        // the deduping logic is consistent

        combined.withMutation((next) => {
          schema.tests.forEach((fn) => {
            next.test(fn.OPTIONS)
          })
        })
        combined.transforms = [...base.transforms, ...combined.transforms]
        return combined
      }

      isType(v) {
        if (this.spec.nullable && v === null) return true
        return this._typeCheck(v)
      }

      resolve(options) {
        let schema = this

        if (schema.conditions.length) {
          let conditions = schema.conditions
          schema = schema.clone()
          schema.conditions = []
          schema = conditions.reduce(
            (schema, condition) => condition.resolve(schema, options),
            schema
          )
          schema = schema.resolve(options)
        }

        return schema
      }
      /**
       *
       * @param {*} value
       * @param {Object} options
       * @param {*=} options.parent
       * @param {*=} options.context
       */

      cast(value, options = {}) {
        let resolvedSchema = this.resolve(
          _extends(
            {
              value
            },
            options
          )
        )

        let result = resolvedSchema._cast(value, options)

        if (
          value !== undefined &&
          options.assert !== false &&
          resolvedSchema.isType(result) !== true
        ) {
          let formattedValue = (0, _printValue.default)(value)
          let formattedResult = (0, _printValue.default)(result)
          throw new TypeError(
            `The value of ${
              options.path || 'field'
            } could not be cast to a value ` +
              `that satisfies the schema type: "${resolvedSchema._type}". \n\n` +
              `attempted value: ${formattedValue} \n` +
              (formattedResult !== formattedValue
                ? `result of cast: ${formattedResult}`
                : '')
          )
        }

        return result
      }

      _cast(rawValue, _options) {
        let value =
          rawValue === undefined
            ? rawValue
            : this.transforms.reduce(
                (value, fn) => fn.call(this, value, rawValue, this),
                rawValue
              )

        if (value === undefined) {
          value = this.getDefault()
        }

        return value
      }

      _validate(_value, options = {}, cb) {
        let {
          sync,
          path,
          from = [],
          originalValue = _value,
          strict = this.spec.strict,
          abortEarly = this.spec.abortEarly
        } = options
        let value = _value

        if (!strict) {
          // this._validating = true;
          value = this._cast(
            value,
            _extends(
              {
                assert: false
              },
              options
            )
          ) // this._validating = false;
        } // value is cast, we can check if it meets type requirements

        let args = {
          value,
          path,
          options,
          originalValue,
          schema: this,
          label: this.spec.label,
          sync,
          from
        }
        let initialTests = []
        if (this._typeError) initialTests.push(this._typeError)
        let finalTests = []
        if (this._whitelistError) finalTests.push(this._whitelistError)
        if (this._blacklistError) finalTests.push(this._blacklistError)
        ;(0, _runTests.default)(
          {
            args,
            value,
            path,
            sync,
            tests: initialTests,
            endEarly: abortEarly
          },
          (err) => {
            if (err) return void cb(err, value)
            ;(0, _runTests.default)(
              {
                tests: this.tests.concat(finalTests),
                args,
                path,
                sync,
                value,
                endEarly: abortEarly
              },
              cb
            )
          }
        )
      }

      validate(value, options, maybeCb) {
        let schema = this.resolve(
          _extends({}, options, {
            value
          })
        ) // callback case is for nested validations

        return typeof maybeCb === 'function'
          ? schema._validate(value, options, maybeCb)
          : new Promise((resolve, reject) =>
              schema._validate(value, options, (err, value) => {
                if (err) reject(err)
                else resolve(value)
              })
            )
      }

      validateSync(value, options) {
        let schema = this.resolve(
          _extends({}, options, {
            value
          })
        )
        let result

        schema._validate(
          value,
          _extends({}, options, {
            sync: true
          }),
          (err, value) => {
            if (err) throw err
            result = value
          }
        )

        return result
      }

      isValid(value, options) {
        return this.validate(value, options).then(
          () => true,
          (err) => {
            if (_ValidationError.default.isError(err)) return false
            throw err
          }
        )
      }

      isValidSync(value, options) {
        try {
          this.validateSync(value, options)
          return true
        } catch (err) {
          if (_ValidationError.default.isError(err)) return false
          throw err
        }
      }

      _getDefault() {
        let defaultValue = this.spec.default

        if (defaultValue == null) {
          return defaultValue
        }

        return typeof defaultValue === 'function'
          ? defaultValue.call(this)
          : (0, _nanoclone.default)(defaultValue)
      }

      getDefault(options) {
        let schema = this.resolve(options || {})
        return schema._getDefault()
      }

      default(def) {
        if (arguments.length === 0) {
          return this._getDefault()
        }

        let next = this.clone({
          default: def
        })
        return next
      }

      strict(isStrict = true) {
        let next = this.clone()
        next.spec.strict = isStrict
        return next
      }

      _isPresent(value) {
        return value != null
      }

      defined(message = _locale.mixed.defined) {
        return this.test({
          message,
          name: 'defined',
          exclusive: true,

          test(value) {
            return value !== undefined
          }
        })
      }

      required(message = _locale.mixed.required) {
        return this.clone({
          presence: 'required'
        }).withMutation((s) =>
          s.test({
            message,
            name: 'required',
            exclusive: true,

            test(value) {
              return this.schema._isPresent(value)
            }
          })
        )
      }

      notRequired() {
        let next = this.clone({
          presence: 'optional'
        })
        next.tests = next.tests.filter(
          (test) => test.OPTIONS.name !== 'required'
        )
        return next
      }

      nullable(isNullable = true) {
        let next = this.clone({
          nullable: isNullable !== false
        })
        return next
      }

      transform(fn) {
        let next = this.clone()
        next.transforms.push(fn)
        return next
      }
      /**
       * Adds a test function to the schema's queue of tests.
       * tests can be exclusive or non-exclusive.
       *
       * - exclusive tests, will replace any existing tests of the same name.
       * - non-exclusive: can be stacked
       *
       * If a non-exclusive test is added to a schema with an exclusive test of the same name
       * the exclusive test is removed and further tests of the same name will be stacked.
       *
       * If an exclusive test is added to a schema with non-exclusive tests of the same name
       * the previous tests are removed and further tests of the same name will replace each other.
       */

      test(...args) {
        let opts

        if (args.length === 1) {
          if (typeof args[0] === 'function') {
            opts = {
              test: args[0]
            }
          } else {
            opts = args[0]
          }
        } else if (args.length === 2) {
          opts = {
            name: args[0],
            test: args[1]
          }
        } else {
          opts = {
            name: args[0],
            message: args[1],
            test: args[2]
          }
        }

        if (opts.message === undefined) opts.message = _locale.mixed.default
        if (typeof opts.test !== 'function')
          throw new TypeError('`test` is a required parameters')
        let next = this.clone()
        let validate = (0, _createValidation.default)(opts)
        let isExclusive =
          opts.exclusive ||
          (opts.name && next.exclusiveTests[opts.name] === true)

        if (opts.exclusive) {
          if (!opts.name)
            throw new TypeError(
              'Exclusive tests must provide a unique `name` identifying the test'
            )
        }

        if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive
        next.tests = next.tests.filter((fn) => {
          if (fn.OPTIONS.name === opts.name) {
            if (isExclusive) return false
            if (fn.OPTIONS.test === validate.OPTIONS.test) return false
          }

          return true
        })
        next.tests.push(validate)
        return next
      }

      when(keys, options) {
        if (!Array.isArray(keys) && typeof keys !== 'string') {
          options = keys
          keys = '.'
        }

        let next = this.clone()
        let deps = (0, _toArray.default)(keys).map(
          (key) => new _Reference.default(key)
        )
        deps.forEach((dep) => {
          // @ts-ignore
          if (dep.isSibling) next.deps.push(dep.key)
        })
        next.conditions.push(new _Condition.default(deps, options))
        return next
      }

      typeError(message) {
        let next = this.clone()
        next._typeError = (0, _createValidation.default)({
          message,
          name: 'typeError',

          test(value) {
            if (value !== undefined && !this.schema.isType(value))
              return this.createError({
                params: {
                  type: this.schema._type
                }
              })
            return true
          }
        })
        return next
      }

      oneOf(enums, message = _locale.mixed.oneOf) {
        let next = this.clone()
        enums.forEach((val) => {
          next._whitelist.add(val)

          next._blacklist.delete(val)
        })
        next._whitelistError = (0, _createValidation.default)({
          message,
          name: 'oneOf',

          test(value) {
            if (value === undefined) return true
            let valids = this.schema._whitelist
            let resolved = valids.resolveAll(this.resolve)
            return resolved.includes(value)
              ? true
              : this.createError({
                  params: {
                    values: valids.toArray().join(', '),
                    resolved
                  }
                })
          }
        })
        return next
      }

      notOneOf(enums, message = _locale.mixed.notOneOf) {
        let next = this.clone()
        enums.forEach((val) => {
          next._blacklist.add(val)

          next._whitelist.delete(val)
        })
        next._blacklistError = (0, _createValidation.default)({
          message,
          name: 'notOneOf',

          test(value) {
            let invalids = this.schema._blacklist
            let resolved = invalids.resolveAll(this.resolve)
            if (resolved.includes(value))
              return this.createError({
                params: {
                  values: invalids.toArray().join(', '),
                  resolved
                }
              })
            return true
          }
        })
        return next
      }

      strip(strip = true) {
        let next = this.clone()
        next.spec.strip = strip
        return next
      }

      describe() {
        const next = this.clone()
        const { label, meta } = next.spec
        const description = {
          meta,
          label,
          type: next.type,
          oneOf: next._whitelist.describe(),
          notOneOf: next._blacklist.describe(),
          tests: next.tests
            .map((fn) => ({
              name: fn.OPTIONS.name,
              params: fn.OPTIONS.params
            }))
            .filter(
              (n, idx, list) => list.findIndex((c) => c.name === n.name) === idx
            )
        }
        return description
      }
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

    exports['default'] = BaseSchema
    // @ts-expect-error
    BaseSchema.prototype.__isYupSchema__ = true

    for (const method of ['validate', 'validateSync'])
      BaseSchema.prototype[`${method}At`] = function (
        path,
        value,
        options = {}
      ) {
        const { parent, parentPath, schema } = (0, _reach.getIn)(
          this,
          path,
          value,
          options.context
        )
        return schema[method](
          parent && parent[parentPath],
          _extends({}, options, {
            parent,
            path
          })
        )
      }

    for (const alias of ['equals', 'is'])
      BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf

    for (const alias of ['not', 'nope'])
      BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf

    BaseSchema.prototype.optional = BaseSchema.prototype.notRequired

    /***/
  },

  /***/ 9241: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = setLocale

    var _locale = _interopRequireDefault(__nccwpck_require__(4778))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function setLocale(custom) {
      Object.keys(custom).forEach((type) => {
        // @ts-ignore
        Object.keys(custom[type]).forEach((method) => {
          // @ts-ignore
          _locale.default[type][method] = custom[type][method]
        })
      })
    }

    /***/
  },

  /***/ 9921: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.create = create
    exports['default'] = void 0

    var _locale = __nccwpck_require__(4778)

    var _isAbsent = _interopRequireDefault(__nccwpck_require__(9660))

    var _schema = _interopRequireDefault(__nccwpck_require__(3450))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    // eslint-disable-next-line
    let rEmail =
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i // eslint-disable-next-line

    let rUrl =
      /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i // eslint-disable-next-line

    let rUUID =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i

    let isTrimmed = (value) =>
      (0, _isAbsent.default)(value) || value === value.trim()

    let objStringTag = {}.toString()

    function create() {
      return new StringSchema()
    }

    class StringSchema extends _schema.default {
      constructor() {
        super({
          type: 'string'
        })
        this.withMutation(() => {
          this.transform(function (value) {
            if (this.isType(value)) return value
            if (Array.isArray(value)) return value
            const strValue =
              value != null && value.toString ? value.toString() : value
            if (strValue === objStringTag) return value
            return strValue
          })
        })
      }

      _typeCheck(value) {
        if (value instanceof String) value = value.valueOf()
        return typeof value === 'string'
      }

      _isPresent(value) {
        return super._isPresent(value) && !!value.length
      }

      length(length, message = _locale.string.length) {
        return this.test({
          message,
          name: 'length',
          exclusive: true,
          params: {
            length
          },

          test(value) {
            return (
              (0, _isAbsent.default)(value) ||
              value.length === this.resolve(length)
            )
          }
        })
      }

      min(min, message = _locale.string.min) {
        return this.test({
          message,
          name: 'min',
          exclusive: true,
          params: {
            min
          },

          test(value) {
            return (
              (0, _isAbsent.default)(value) || value.length >= this.resolve(min)
            )
          }
        })
      }

      max(max, message = _locale.string.max) {
        return this.test({
          name: 'max',
          exclusive: true,
          message,
          params: {
            max
          },

          test(value) {
            return (
              (0, _isAbsent.default)(value) || value.length <= this.resolve(max)
            )
          }
        })
      }

      matches(regex, options) {
        let excludeEmptyString = false
        let message
        let name

        if (options) {
          if (typeof options === 'object') {
            ;({ excludeEmptyString = false, message, name } = options)
          } else {
            message = options
          }
        }

        return this.test({
          name: name || 'matches',
          message: message || _locale.string.matches,
          params: {
            regex
          },
          test: (value) =>
            (0, _isAbsent.default)(value) ||
            (value === '' && excludeEmptyString) ||
            value.search(regex) !== -1
        })
      }

      email(message = _locale.string.email) {
        return this.matches(rEmail, {
          name: 'email',
          message,
          excludeEmptyString: true
        })
      }

      url(message = _locale.string.url) {
        return this.matches(rUrl, {
          name: 'url',
          message,
          excludeEmptyString: true
        })
      }

      uuid(message = _locale.string.uuid) {
        return this.matches(rUUID, {
          name: 'uuid',
          message,
          excludeEmptyString: false
        })
      } //-- transforms --

      ensure() {
        return this.default('').transform((val) => (val === null ? '' : val))
      }

      trim(message = _locale.string.trim) {
        return this.transform((val) => (val != null ? val.trim() : val)).test({
          message,
          name: 'trim',
          test: isTrimmed
        })
      }

      lowercase(message = _locale.string.lowercase) {
        return this.transform((value) =>
          !(0, _isAbsent.default)(value) ? value.toLowerCase() : value
        ).test({
          message,
          name: 'string_case',
          exclusive: true,
          test: (value) =>
            (0, _isAbsent.default)(value) || value === value.toLowerCase()
        })
      }

      uppercase(message = _locale.string.uppercase) {
        return this.transform((value) =>
          !(0, _isAbsent.default)(value) ? value.toUpperCase() : value
        ).test({
          message,
          name: 'string_case',
          exclusive: true,
          test: (value) =>
            (0, _isAbsent.default)(value) || value === value.toUpperCase()
        })
      }
    }

    exports['default'] = StringSchema
    create.prototype = StringSchema.prototype //
    // String Interfaces
    //

    /***/
  },

  /***/ 4013: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _Reference = _interopRequireDefault(__nccwpck_require__(1619))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    class ReferenceSet {
      constructor() {
        this.list = void 0
        this.refs = void 0
        this.list = new Set()
        this.refs = new Map()
      }

      get size() {
        return this.list.size + this.refs.size
      }

      describe() {
        const description = []

        for (const item of this.list) description.push(item)

        for (const [, ref] of this.refs) description.push(ref.describe())

        return description
      }

      toArray() {
        return Array.from(this.list).concat(Array.from(this.refs.values()))
      }

      resolveAll(resolve) {
        return this.toArray().reduce(
          (acc, e) => acc.concat(_Reference.default.isRef(e) ? resolve(e) : e),
          []
        )
      }

      add(value) {
        _Reference.default.isRef(value)
          ? this.refs.set(value.key, value)
          : this.list.add(value)
      }

      delete(value) {
        _Reference.default.isRef(value)
          ? this.refs.delete(value.key)
          : this.list.delete(value)
      }

      clone() {
        const next = new ReferenceSet()
        next.list = new Set(this.list)
        next.refs = new Map(this.refs)
        return next
      }

      merge(newItems, removeItems) {
        const next = this.clone()
        newItems.list.forEach((value) => next.add(value))
        newItems.refs.forEach((value) => next.add(value))
        removeItems.list.forEach((value) => next.delete(value))
        removeItems.refs.forEach((value) => next.delete(value))
        return next
      }
    }

    exports['default'] = ReferenceSet

    /***/
  },

  /***/ 4681: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = createValidation

    var _mapValues = _interopRequireDefault(__nccwpck_require__(668))

    var _ValidationError = _interopRequireDefault(__nccwpck_require__(610))

    var _Reference = _interopRequireDefault(__nccwpck_require__(1619))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }
      return _extends.apply(this, arguments)
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {}
      var target = {}
      var sourceKeys = Object.keys(source)
      var key, i
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
      }
      return target
    }

    function createValidation(config) {
      function validate(_ref, cb) {
        let { value, path = '', label, options, originalValue, sync } = _ref,
          rest = _objectWithoutPropertiesLoose(_ref, [
            'value',
            'path',
            'label',
            'options',
            'originalValue',
            'sync'
          ])

        const { name, test, params, message } = config
        let { parent, context } = options

        function resolve(item) {
          return _Reference.default.isRef(item)
            ? item.getValue(value, parent, context)
            : item
        }

        function createError(overrides = {}) {
          const nextParams = (0, _mapValues.default)(
            _extends(
              {
                value,
                originalValue,
                label,
                path: overrides.path || path
              },
              params,
              overrides.params
            ),
            resolve
          )
          const error = new _ValidationError.default(
            _ValidationError.default.formatError(
              overrides.message || message,
              nextParams
            ),
            value,
            nextParams.path,
            overrides.type || name
          )
          error.params = nextParams
          return error
        }

        let ctx = _extends(
          {
            path,
            parent,
            type: name,
            createError,
            resolve,
            options,
            originalValue
          },
          rest
        )

        if (!sync) {
          try {
            Promise.resolve(test.call(ctx, value, ctx))
              .then((validOrError) => {
                if (_ValidationError.default.isError(validOrError))
                  cb(validOrError)
                else if (!validOrError) cb(createError())
                else cb(null, validOrError)
              })
              .catch(cb)
          } catch (err) {
            cb(err)
          }

          return
        }

        let result

        try {
          var _ref2

          result = test.call(ctx, value, ctx)

          if (
            typeof ((_ref2 = result) == null ? void 0 : _ref2.then) ===
            'function'
          ) {
            throw new Error(
              `Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` +
                `This test will finish after the validate call has returned`
            )
          }
        } catch (err) {
          cb(err)
          return
        }

        if (_ValidationError.default.isError(result)) cb(result)
        else if (!result) cb(createError())
        else cb(null, result)
      }

      validate.OPTIONS = config
      return validate
    }

    /***/
  },

  /***/ 9660: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    const isAbsent = (value) => value == null

    var _default = isAbsent
    exports['default'] = _default

    /***/
  },

  /***/ 8037: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    const isSchema = (obj) => obj && obj.__isYupSchema__

    var _default = isSchema
    exports['default'] = _default

    /***/
  },

  /***/ 8011: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = parseIsoDate

    /* eslint-disable */

    /**
     *
     * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
     * NON-CONFORMANT EDITION.
     * © 2011 Colin Snover <http://zetafleet.com>
     * Released under MIT license.
     */
    //              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
    var isoReg =
      /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/

    function parseIsoDate(date) {
      var numericKeys = [1, 4, 5, 6, 7, 10, 11],
        minutesOffset = 0,
        timestamp,
        struct

      if ((struct = isoReg.exec(date))) {
        // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
        for (var i = 0, k; (k = numericKeys[i]); ++i)
          struct[k] = +struct[k] || 0 // allow undefined days and months

        struct[2] = (+struct[2] || 1) - 1
        struct[3] = +struct[3] || 1 // allow arbitrary sub-second precision beyond milliseconds

        struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0 // timestamps without timezone identifiers should be considered local time

        if (
          (struct[8] === undefined || struct[8] === '') &&
          (struct[9] === undefined || struct[9] === '')
        )
          timestamp = +new Date(
            struct[1],
            struct[2],
            struct[3],
            struct[4],
            struct[5],
            struct[6],
            struct[7]
          )
        else {
          if (struct[8] !== 'Z' && struct[9] !== undefined) {
            minutesOffset = struct[10] * 60 + struct[11]
            if (struct[9] === '+') minutesOffset = 0 - minutesOffset
          }

          timestamp = Date.UTC(
            struct[1],
            struct[2],
            struct[3],
            struct[4],
            struct[5] + minutesOffset,
            struct[6],
            struct[7]
          )
        }
      } else timestamp = Date.parse ? Date.parse(date) : NaN

      return timestamp
    }

    /***/
  },

  /***/ 4310: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = printValue
    const toString = Object.prototype.toString
    const errorToString = Error.prototype.toString
    const regExpToString = RegExp.prototype.toString
    const symbolToString =
      typeof Symbol !== 'undefined' ? Symbol.prototype.toString : () => ''
    const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/

    function printNumber(val) {
      if (val != +val) return 'NaN'
      const isNegativeZero = val === 0 && 1 / val < 0
      return isNegativeZero ? '-0' : '' + val
    }

    function printSimpleValue(val, quoteStrings = false) {
      if (val == null || val === true || val === false) return '' + val
      const typeOf = typeof val
      if (typeOf === 'number') return printNumber(val)
      if (typeOf === 'string') return quoteStrings ? `"${val}"` : val
      if (typeOf === 'function')
        return '[Function ' + (val.name || 'anonymous') + ']'
      if (typeOf === 'symbol')
        return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)')
      const tag = toString.call(val).slice(8, -1)
      if (tag === 'Date')
        return isNaN(val.getTime()) ? '' + val : val.toISOString(val)
      if (tag === 'Error' || val instanceof Error)
        return '[' + errorToString.call(val) + ']'
      if (tag === 'RegExp') return regExpToString.call(val)
      return null
    }

    function printValue(value, quoteStrings) {
      let result = printSimpleValue(value, quoteStrings)
      if (result !== null) return result
      return JSON.stringify(
        value,
        function (key, value) {
          let result = printSimpleValue(this[key], quoteStrings)
          if (result !== null) return result
          return value
        },
        2
      )
    }

    /***/
  },

  /***/ 9432: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0
    exports.getIn = getIn

    var _propertyExpr = __nccwpck_require__(435)

    let trim = (part) => part.substr(0, part.length - 1).substr(1)

    function getIn(schema, path, value, context = value) {
      let parent, lastPart, lastPartDebug // root path: ''

      if (!path)
        return {
          parent,
          parentPath: path,
          schema
        }
      ;(0, _propertyExpr.forEach)(path, (_part, isBracket, isArray) => {
        let part = isBracket ? trim(_part) : _part
        schema = schema.resolve({
          context,
          parent,
          value
        })

        if (schema.innerType) {
          let idx = isArray ? parseInt(part, 10) : 0

          if (value && idx >= value.length) {
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. ` +
                `because there is no value at that index. `
            )
          }

          parent = value
          value = value && value[idx]
          schema = schema.innerType
        } // sometimes the array index part of a path doesn't exist: "nested.arr.child"
        // in these cases the current part is the next schema and should be processed
        // in this iteration. For cases where the index signature is included this
        // check will fail and we'll handle the `child` part on the next iteration like normal

        if (!isArray) {
          if (!schema.fields || !schema.fields[part])
            throw new Error(
              `The schema does not contain the path: ${path}. ` +
                `(failed at: ${lastPartDebug} which is a type: "${schema._type}")`
            )
          parent = value
          value = value && value[part]
          schema = schema.fields[part]
        }

        lastPart = part
        lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part
      })
      return {
        schema,
        parent,
        parentPath: lastPart
      }
    }

    const reach = (obj, path, value, context) =>
      getIn(obj, path, value, context).schema

    var _default = reach
    exports['default'] = _default

    /***/
  },

  /***/ 7323: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = runTests

    var _ValidationError = _interopRequireDefault(__nccwpck_require__(610))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    const once = (cb) => {
      let fired = false
      return (...args) => {
        if (fired) return
        fired = true
        cb(...args)
      }
    }

    function runTests(options, cb) {
      let { endEarly, tests, args, value, errors, sort, path } = options
      let callback = once(cb)
      let count = tests.length
      const nestedErrors = []
      errors = errors ? errors : []
      if (!count)
        return errors.length
          ? callback(new _ValidationError.default(errors, value, path))
          : callback(null, value)

      for (let i = 0; i < tests.length; i++) {
        const test = tests[i]
        test(args, function finishTestRun(err) {
          if (err) {
            // always return early for non validation errors
            if (!_ValidationError.default.isError(err)) {
              return callback(err, value)
            }

            if (endEarly) {
              err.value = value
              return callback(err, value)
            }

            nestedErrors.push(err)
          }

          if (--count <= 0) {
            if (nestedErrors.length) {
              if (sort) nestedErrors.sort(sort) //show parent errors after the nested ones: name.first, name

              if (errors.length) nestedErrors.push(...errors)
              errors = nestedErrors
            }

            if (errors.length) {
              callback(new _ValidationError.default(errors, value, path), value)
              return
            }

            callback(null, value)
          }
        })
      }
    }

    /***/
  },

  /***/ 9967: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = sortByKeyOrder

    function findIndex(arr, err) {
      let idx = Infinity
      arr.some((key, ii) => {
        var _err$path

        if (
          ((_err$path = err.path) == null ? void 0 : _err$path.indexOf(key)) !==
          -1
        ) {
          idx = ii
          return true
        }
      })
      return idx
    }

    function sortByKeyOrder(keys) {
      return (a, b) => {
        return findIndex(keys, a) - findIndex(keys, b)
      }
    }

    /***/
  },

  /***/ 722: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = sortFields

    var _has = _interopRequireDefault(__nccwpck_require__(7198))

    var _toposort = _interopRequireDefault(__nccwpck_require__(3889))

    var _propertyExpr = __nccwpck_require__(435)

    var _Reference = _interopRequireDefault(__nccwpck_require__(1619))

    var _isSchema = _interopRequireDefault(__nccwpck_require__(8037))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    // @ts-expect-error
    function sortFields(fields, excludedEdges = []) {
      let edges = []
      let nodes = new Set()
      let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`))

      function addNode(depPath, key) {
        let node = (0, _propertyExpr.split)(depPath)[0]
        nodes.add(node)
        if (!excludes.has(`${key}-${node}`)) edges.push([key, node])
      }

      for (const key in fields)
        if ((0, _has.default)(fields, key)) {
          let value = fields[key]
          nodes.add(key)
          if (_Reference.default.isRef(value) && value.isSibling)
            addNode(value.path, key)
          else if ((0, _isSchema.default)(value) && 'deps' in value)
            value.deps.forEach((path) => addNode(path, key))
        }

      return _toposort.default.array(Array.from(nodes), edges).reverse()
    }

    /***/
  },

  /***/ 7822: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = toArray

    function toArray(value) {
      return value == null ? [] : [].concat(value)
    }

    /***/
  },

  /***/ 2877: /***/ (module) => {
    module.exports = eval('require')('encoding')

    /***/
  },

  /***/ 9491: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('assert')

    /***/
  },

  /***/ 6113: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('crypto')

    /***/
  },

  /***/ 2361: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('events')

    /***/
  },

  /***/ 7147: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('fs')

    /***/
  },

  /***/ 3685: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('http')

    /***/
  },

  /***/ 5687: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('https')

    /***/
  },

  /***/ 1808: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('net')

    /***/
  },

  /***/ 2037: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('os')

    /***/
  },

  /***/ 1017: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('path')

    /***/
  },

  /***/ 5477: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)(
      'punycode'
    )

    /***/
  },

  /***/ 2781: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('stream')

    /***/
  },

  /***/ 4404: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('tls')

    /***/
  },

  /***/ 7310: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('url')

    /***/
  },

  /***/ 3837: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('util')

    /***/
  },

  /***/ 9796: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('zlib')

    /***/
  },

  /***/ 7592: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    let crypto = __nccwpck_require__(6113)
    let { urlAlphabet } = __nccwpck_require__(7651)
    const POOL_SIZE_MULTIPLIER = 128
    let pool, poolOffset
    let fillPool = (bytes) => {
      if (!pool || pool.length < bytes) {
        pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)
        crypto.randomFillSync(pool)
        poolOffset = 0
      } else if (poolOffset + bytes > pool.length) {
        crypto.randomFillSync(pool)
        poolOffset = 0
      }
      poolOffset += bytes
    }
    let random = (bytes) => {
      fillPool((bytes -= 0))
      return pool.subarray(poolOffset - bytes, poolOffset)
    }
    let customRandom = (alphabet, defaultSize, getRandom) => {
      let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
      let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)
      return (size = defaultSize) => {
        let id = ''
        while (true) {
          let bytes = getRandom(step)
          let i = step
          while (i--) {
            id += alphabet[bytes[i] & mask] || ''
            if (id.length === size) return id
          }
        }
      }
    }
    let customAlphabet = (alphabet, size = 21) =>
      customRandom(alphabet, size, random)
    let nanoid = (size = 21) => {
      fillPool((size -= 0))
      let id = ''
      for (let i = poolOffset - size; i < poolOffset; i++) {
        id += urlAlphabet[pool[i] & 63]
      }
      return id
    }
    module.exports = {
      nanoid,
      customAlphabet,
      customRandom,
      urlAlphabet,
      random
    }

    /***/
  },

  /***/ 7651: /***/ (module) => {
    let urlAlphabet =
      'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
    module.exports = { urlAlphabet }

    /***/
  },

  /***/ 1907: /***/ (module) => {
    module.exports = JSON.parse(
    )

    /***/
  }

  /******/
}
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {}
/******/
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId]
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ id: moduleId,
    /******/ loaded: false,
    /******/ exports: {}
    /******/
  })
  /******/
  /******/ // Execute the module function
  /******/ var threw = true
  /******/ try {
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __nccwpck_require__
    )
    /******/ threw = false
    /******/
  } finally {
    /******/ if (threw) delete __webpack_module_cache__[moduleId]
    /******/
  }
  /******/
  /******/ // Flag the module as loaded
  /******/ module.loaded = true
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports
  /******/
}
/******/
/************************************************************************/
/******/ /* webpack/runtime/node module decorator */
/******/ ;(() => {
  /******/ __nccwpck_require__.nmd = (module) => {
    /******/ module.paths = []
    /******/ if (!module.children) module.children = []
    /******/ return module
    /******/
  }
  /******/
})()
/******/
/******/ /* webpack/runtime/compat */
/******/
/******/ if (typeof __nccwpck_require__ !== 'undefined')
  __nccwpck_require__.ab =
    new URL('.', import.meta.url).pathname.slice(
      import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0,
      -1
    ) + '/'
/******/
/************************************************************************/
var __webpack_exports__ = {}
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
;(() => {
  // EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
  var core = __nccwpck_require__(2186)
  // EXTERNAL MODULE: ./node_modules/@actions/github/lib/github.js
  var github = __nccwpck_require__(5438)
  // EXTERNAL MODULE: ./node_modules/ics/index.js
  var ics = __nccwpck_require__(6532) // CONCATENATED MODULE: external "fs/promises"
  const promises_namespaceObject = __WEBPACK_EXTERNAL_createRequire(
    import.meta.url
  )('fs/promises')
  // EXTERNAL MODULE: external "path"
  var external_path_ = __nccwpck_require__(1017) // CONCATENATED MODULE: ./src/create-ics.js
  async function createIcs(events) {
    const { error, value } = ics.createEvents(events)
    if (error) {
      console.error(error)
    }
    return (0, promises_namespaceObject.writeFile)(
      (0, external_path_.join)(process.cwd(), 'events.ics'),
      value,
      {
        encoding: 'utf8'
      }
    )
  }

  // EXTERNAL MODULE: ./node_modules/gray-matter/index.js
  var gray_matter = __nccwpck_require__(5382)
  // EXTERNAL MODULE: ./node_modules/moment/moment.js
  var moment = __nccwpck_require__(9623) // CONCATENATED MODULE: ./src/fetch-issues.js
  async function fetchIssues(octokit, locationsFile) {
    let locations = []
    if (locationsFile) {
      const file = await (0, promises_namespaceObject.readFile)(
        (0, external_path_.join)(process.cwd(), locationsFile),
        'utf8'
      )
      locations = JSON.parse(file)
    }

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
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
      const { content, data } = gray_matter(issue.body)

      if (!data) {
        return { error: 'no event data found' }
      }

      const startDate = data.startDate.split('.').reverse()
      const startTime = parseFloat(data.startTime)
        .toFixed(2)
        .toString()
        .split('.')
      const duration = moment.duration(
        `PT${data.duration.replace(/\s/g, '').toUpperCase()}`
      )

      const event = {
        productId: 'gitevents/ics',
        start: startDate.concat(startTime).map((n) => parseInt(n)),
        duration: {
          hours: duration.get('hours'),
          minutes: duration.get('minutes')
        },
        title: issue.title,
        description: content,
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
        const location = locations.find((l) => l.id === data.location)
        event.location = location.name
        if (location.geo) {
          const [lat, lon] = location.geo
          event.geo = { lat, lon }
        }
      } else {
        event.location = data.location
      }

      events.push(event)
    }

    return events
  } // CONCATENATED MODULE: ./src/index.js

  async function run() {
    core.info('Starting GitEvents ICS ...')
    const repoToken = core.getInput('repo-token')
    // const timezoneId = core.getInput('default-timezone')
    const locationsFile = core.getInput('locations')

    const octokit = github.getOctokit(repoToken)
    const context = github.context
    console.log(context)

    const events = await fetchIssues(octokit, locationsFile)
    const result = await createIcs(events)
    console.log(result)
  }

  run()
})()