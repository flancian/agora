'use strict';

var require$$0 = require('electron');
var EventEmitter = require('events');
var require$$0$1 = require('timers');
var net = require('net');
var obsidian = require('obsidian');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var net__default = /*#__PURE__*/_interopDefaultLegacy(net);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
});

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var require$$1 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

let register;
try {
  const { app } = require$$0__default['default'];
  register = app.setAsDefaultProtocolClient.bind(app);
} catch (err) {
  try {
    register = require$$1;
  } catch (e) {} // eslint-disable-line no-empty
}

if (typeof register !== 'function') {
  register = () => false;
}

function pid() {
  if (typeof process !== 'undefined') {
    return process.pid;
  }
  return null;
}

const uuid4122 = () => {
  let uuid = '';
  for (let i = 0; i < 32; i += 1) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    let n;
    if (i === 12) {
      n = 4;
    } else {
      const random = Math.random() * 16 | 0;
      if (i === 16) {
        n = (random & 3) | 0;
      } else {
        n = random;
      }
    }
    uuid += n.toString(16);
  }
  return uuid;
};

var util = {
  pid,
  register,
  uuid: uuid4122,
};

var browser = createCommonjsModule(function (module, exports) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
};

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
});

const { uuid } = util;

const OPCodes = {
  HANDSHAKE: 0,
  FRAME: 1,
  CLOSE: 2,
  PING: 3,
  PONG: 4,
};

function getIPCPath(id) {
  if (process.platform === 'win32') {
    return `\\\\?\\pipe\\discord-ipc-${id}`;
  }
  const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;
  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || '/tmp';
  return `${prefix.replace(/\/$/, '')}/discord-ipc-${id}`;
}

function getIPC(id = 0) {
  return new Promise((resolve, reject) => {
    const path = getIPCPath(id);
    const onerror = () => {
      if (id < 10) {
        resolve(getIPC(id + 1));
      } else {
        reject(new Error('Could not connect'));
      }
    };
    const sock = net__default['default'].createConnection(path, () => {
      sock.removeListener('error', onerror);
      resolve(sock);
    });
    sock.once('error', onerror);
  });
}

async function findEndpoint(tries = 0) {
  if (tries > 30) {
    throw new Error('Could not find endpoint');
  }
  const endpoint = `http://127.0.0.1:${6463 + (tries % 10)}`;
  try {
    const r = await browser(endpoint);
    if (r.status === 404) {
      return endpoint;
    }
    return findEndpoint(tries + 1);
  } catch (e) {
    return findEndpoint(tries + 1);
  }
}

function encode(op, data) {
  data = JSON.stringify(data);
  const len = Buffer.byteLength(data);
  const packet = Buffer.alloc(8 + len);
  packet.writeInt32LE(op, 0);
  packet.writeInt32LE(len, 4);
  packet.write(data, 8, len);
  return packet;
}

const working = {
  full: '',
  op: undefined,
};

function decode(socket, callback) {
  const packet = socket.read();
  if (!packet) {
    return;
  }

  let { op } = working;
  let raw;
  if (working.full === '') {
    op = working.op = packet.readInt32LE(0);
    const len = packet.readInt32LE(4);
    raw = packet.slice(8, len + 8);
  } else {
    raw = packet.toString();
  }

  try {
    const data = JSON.parse(working.full + raw);
    callback({ op, data }); // eslint-disable-line callback-return
    working.full = '';
    working.op = undefined;
  } catch (err) {
    working.full += raw;
  }

  decode(socket, callback);
}

class IPCTransport extends EventEmitter__default['default'] {
  constructor(client) {
    super();
    this.client = client;
    this.socket = null;
  }

  async connect() {
    const socket = this.socket = await getIPC();
    socket.on('close', this.onClose.bind(this));
    socket.on('error', this.onClose.bind(this));
    this.emit('open');
    socket.write(encode(OPCodes.HANDSHAKE, {
      v: 1,
      client_id: this.client.clientId,
    }));
    socket.pause();
    socket.on('readable', () => {
      decode(socket, ({ op, data }) => {
        switch (op) {
          case OPCodes.PING:
            this.send(data, OPCodes.PONG);
            break;
          case OPCodes.FRAME:
            if (!data) {
              return;
            }
            if (data.cmd === 'AUTHORIZE' && data.evt !== 'ERROR') {
              findEndpoint().then((endpoint) => {
                this.client.request.endpoint = endpoint;
              });
            }
            this.emit('message', data);
            break;
          case OPCodes.CLOSE:
            this.emit('close', data);
            break;
          default:
            break;
        }
      });
    });
  }

  onClose(e) {
    this.emit('close', e);
  }

  send(data, op = OPCodes.FRAME) {
    this.socket.write(encode(op, data));
  }

  close() {
    this.send({}, OPCodes.CLOSE);
    this.socket.end();
  }

  ping() {
    this.send(uuid(), OPCodes.PING);
  }
}

var ipc = IPCTransport;
var encode_1 = encode;
var decode_1 = decode;
ipc.encode = encode_1;
ipc.decode = decode_1;

function keyMirror(arr) {
  const tmp = {};
  for (const value of arr) {
    tmp[value] = value;
  }
  return tmp;
}


var browser$1 = typeof window !== 'undefined';

var RPCCommands = keyMirror([
  'DISPATCH',
  'AUTHORIZE',
  'AUTHENTICATE',
  'GET_GUILD',
  'GET_GUILDS',
  'GET_CHANNEL',
  'GET_CHANNELS',
  'CREATE_CHANNEL_INVITE',
  'GET_RELATIONSHIPS',
  'GET_USER',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
  'SET_USER_VOICE_SETTINGS',
  'SET_USER_VOICE_SETTINGS_2',
  'SELECT_VOICE_CHANNEL',
  'GET_SELECTED_VOICE_CHANNEL',
  'SELECT_TEXT_CHANNEL',
  'GET_VOICE_SETTINGS',
  'SET_VOICE_SETTINGS_2',
  'SET_VOICE_SETTINGS',
  'CAPTURE_SHORTCUT',
  'SET_ACTIVITY',
  'SEND_ACTIVITY_JOIN_INVITE',
  'CLOSE_ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_INVITE_USER',
  'ACCEPT_ACTIVITY_INVITE',
  'INVITE_BROWSER',
  'DEEP_LINK',
  'CONNECTIONS_CALLBACK',
  'BRAINTREE_POPUP_BRIDGE_CALLBACK',
  'GIFT_CODE_BROWSER',
  'GUILD_TEMPLATE_BROWSER',
  'OVERLAY',
  'BROWSER_HANDOFF',
  'SET_CERTIFIED_DEVICES',
  'GET_IMAGE',
  'CREATE_LOBBY',
  'UPDATE_LOBBY',
  'DELETE_LOBBY',
  'UPDATE_LOBBY_MEMBER',
  'CONNECT_TO_LOBBY',
  'DISCONNECT_FROM_LOBBY',
  'SEND_TO_LOBBY',
  'SEARCH_LOBBIES',
  'CONNECT_TO_LOBBY_VOICE',
  'DISCONNECT_FROM_LOBBY_VOICE',
  'SET_OVERLAY_LOCKED',
  'OPEN_OVERLAY_ACTIVITY_INVITE',
  'OPEN_OVERLAY_GUILD_INVITE',
  'OPEN_OVERLAY_VOICE_SETTINGS',
  'VALIDATE_APPLICATION',
  'GET_ENTITLEMENT_TICKET',
  'GET_APPLICATION_TICKET',
  'START_PURCHASE',
  'GET_SKUS',
  'GET_ENTITLEMENTS',
  'GET_NETWORKING_CONFIG',
  'NETWORKING_SYSTEM_METRICS',
  'NETWORKING_PEER_METRICS',
  'NETWORKING_CREATE_TOKEN',
  'SET_USER_ACHIEVEMENT',
  'GET_USER_ACHIEVEMENTS',
]);

var RPCEvents = keyMirror([
  'CURRENT_USER_UPDATE',
  'GUILD_STATUS',
  'GUILD_CREATE',
  'CHANNEL_CREATE',
  'RELATIONSHIP_UPDATE',
  'VOICE_CHANNEL_SELECT',
  'VOICE_STATE_CREATE',
  'VOICE_STATE_DELETE',
  'VOICE_STATE_UPDATE',
  'VOICE_SETTINGS_UPDATE',
  'VOICE_SETTINGS_UPDATE_2',
  'VOICE_CONNECTION_STATUS',
  'SPEAKING_START',
  'SPEAKING_STOP',
  'GAME_JOIN',
  'GAME_SPECTATE',
  'ACTIVITY_JOIN',
  'ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_SPECTATE',
  'ACTIVITY_INVITE',
  'NOTIFICATION_CREATE',
  'MESSAGE_CREATE',
  'MESSAGE_UPDATE',
  'MESSAGE_DELETE',
  'LOBBY_DELETE',
  'LOBBY_UPDATE',
  'LOBBY_MEMBER_CONNECT',
  'LOBBY_MEMBER_DISCONNECT',
  'LOBBY_MEMBER_UPDATE',
  'LOBBY_MESSAGE',
  'CAPTURE_SHORTCUT_CHANGE',
  'OVERLAY',
  'OVERLAY_UPDATE',
  'ENTITLEMENT_CREATE',
  'ENTITLEMENT_DELETE',
  'USER_ACHIEVEMENT_UPDATE',
  'READY',
  'ERROR',
]);

var RPCErrors = {
  CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
  GET_GUILD_TIMED_OUT: 5002,
  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
  INVALID_ACTIVITY_SECRET: 5005,
  INVALID_CHANNEL: 4005,
  INVALID_CLIENTID: 4007,
  INVALID_COMMAND: 4002,
  INVALID_ENTITLEMENT: 4015,
  INVALID_EVENT: 4004,
  INVALID_GIFT_CODE: 4016,
  INVALID_GUILD: 4003,
  INVALID_INVITE: 4011,
  INVALID_LOBBY: 4013,
  INVALID_LOBBY_SECRET: 4014,
  INVALID_ORIGIN: 4008,
  INVALID_PAYLOAD: 4000,
  INVALID_PERMISSIONS: 4006,
  INVALID_TOKEN: 4009,
  INVALID_USER: 4010,
  LOBBY_FULL: 5007,
  NO_ELIGIBLE_ACTIVITY: 5006,
  OAUTH2_ERROR: 5000,
  PURCHASE_CANCELED: 5008,
  PURCHASE_ERROR: 5009,
  RATE_LIMITED: 5011,
  SELECT_CHANNEL_TIMED_OUT: 5001,
  SELECT_VOICE_FORCE_REQUIRED: 5003,
  SERVICE_UNAVAILABLE: 1001,
  TRANSACTION_ABORTED: 1002,
  UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
  UNKNOWN_ERROR: 1000,
};

var RPCCloseCodes = {
  CLOSE_NORMAL: 1000,
  CLOSE_UNSUPPORTED: 1003,
  CLOSE_ABNORMAL: 1006,
  INVALID_CLIENTID: 4000,
  INVALID_ORIGIN: 4001,
  RATELIMITED: 4002,
  TOKEN_REVOKED: 4003,
  INVALID_VERSION: 4004,
  INVALID_ENCODING: 4005,
};

var LobbyTypes = {
  PRIVATE: 1,
  PUBLIC: 2,
};

var RelationshipTypes = {
  NONE: 0,
  FRIEND: 1,
  BLOCKED: 2,
  PENDING_INCOMING: 3,
  PENDING_OUTGOING: 4,
  IMPLICIT: 5,
};

var constants = {
	browser: browser$1,
	RPCCommands: RPCCommands,
	RPCEvents: RPCEvents,
	RPCErrors: RPCErrors,
	RPCCloseCodes: RPCCloseCodes,
	LobbyTypes: LobbyTypes,
	RelationshipTypes: RelationshipTypes
};

const { browser: browser$2 } = constants;

// eslint-disable-next-line
const WebSocket = browser$2 ? window.WebSocket : require$$1;

const pack = (d) => JSON.stringify(d);
const unpack = (s) => JSON.parse(s);

class WebSocketTransport extends EventEmitter__default['default'] {
  constructor(client) {
    super();
    this.client = client;
    this.ws = null;
    this.tries = 0;
  }

  async connect(tries = this.tries) {
    if (this.connected) {
      return;
    }
    const port = 6463 + (tries % 10);
    this.hostAndPort = `127.0.0.1:${port}`;
    const ws = this.ws = new WebSocket(
      `ws://${this.hostAndPort}/?v=1&client_id=${this.client.clientId}`,
      {
        origin: this.client.options.origin,
      },
    );
    ws.onopen = this.onOpen.bind(this);
    ws.onclose = ws.onerror = this.onClose.bind(this);
    ws.onmessage = this.onMessage.bind(this);
  }

  send(data) {
    if (!this.ws) {
      return;
    }
    this.ws.send(pack(data));
  }

  close() {
    if (!this.ws) {
      return;
    }
    this.ws.close();
  }

  ping() {} // eslint-disable-line no-empty-function

  onMessage(event) {
    this.emit('message', unpack(event.data));
  }

  onOpen() {
    this.emit('open');
  }

  onClose(e) {
    try {
      this.ws.close();
    } catch (err) {} // eslint-disable-line no-empty
    const derr = e.code >= 4000 && e.code < 5000;
    if (!e.code || derr) {
      this.emit('close', e);
    }
    if (!derr) {
      // eslint-disable-next-line no-plusplus
      setTimeout(() => this.connect(e.code === 1006 ? ++this.tries : 0), 250);
    }
  }
}

var websocket = WebSocketTransport;

var transports = {
  ipc: ipc,
  websocket: websocket,
};

const { setTimeout: setTimeout$1, clearTimeout } = require$$0__default$1['default'];


const { RPCCommands: RPCCommands$1, RPCEvents: RPCEvents$1, RelationshipTypes: RelationshipTypes$1 } = constants;
const { pid: getPid, uuid: uuid$1 } = util;

function subKey(event, args) {
  return `${event}${JSON.stringify(args)}`;
}

/**
 * @typedef {RPCClientOptions}
 * @extends {ClientOptions}
 * @prop {string} transport RPC transport. one of `ipc` or `websocket`
 */

/**
 * The main hub for interacting with Discord RPC
 * @extends {BaseClient}
 */
class RPCClient extends EventEmitter__default['default'] {
  /**
   * @param {RPCClientOptions} [options] Options for the client.
   * You must provide a transport
   */
  constructor(options = {}) {
    super();

    this.options = options;

    this.accessToken = null;
    this.clientId = null;

    /**
     * Application used in this client
     * @type {?ClientApplication}
     */
    this.application = null;

    /**
     * User used in this application
     * @type {?User}
     */
    this.user = null;

    const Transport = transports[options.transport];
    if (!Transport) {
      throw new TypeError('RPC_INVALID_TRANSPORT', options.transport);
    }

    this.fetch = (method, path, { data, query } = {}) =>
      browser(`${this.fetch.endpoint}${path}${query ? new URLSearchParams(query) : ''}`, {
        method,
        body: data,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }).then(async (r) => {
        const body = await r.json();
        if (!r.ok) {
          const e = new Error(r.status);
          e.body = body;
          throw e;
        }
        return body;
      });

    this.fetch.endpoint = 'https://discord.com/api';

    /**
     * Raw transport userd
     * @type {RPCTransport}
     * @private
     */
    this.transport = new Transport(this);
    this.transport.on('message', this._onRpcMessage.bind(this));

    /**
     * Map of nonces being expected from the transport
     * @type {Map}
     * @private
     */
    this._expecting = new Map();

    /**
     * Map of current subscriptions
     * @type {Map}
     * @private
     */
    this._subscriptions = new Map();

    this._connectPromise = undefined;
  }

  /**
   * Search and connect to RPC
   */
  connect(clientId) {
    if (this._connectPromise) {
      return this._connectPromise;
    }
    this._connectPromise = new Promise((resolve, reject) => {
      this.clientId = clientId;
      const timeout = setTimeout$1(() => reject(new Error('RPC_CONNECTION_TIMEOUT')), 10e3);
      timeout.unref();
      this.once('connected', () => {
        clearTimeout(timeout);
        resolve(this);
      });
      this.transport.once('close', () => {
        this._expecting.forEach((e) => {
          e.reject(new Error('connection closed'));
        });
        this.emit('disconnected');
        reject(new Error('connection closed'));
      });
      this.transport.connect().catch(reject);
    });
    return this._connectPromise;
  }

  /**
   * @typedef {RPCLoginOptions}
   * @param {string} clientId Client ID
   * @param {string} [clientSecret] Client secret
   * @param {string} [accessToken] Access token
   * @param {string} [rpcToken] RPC token
   * @param {string} [tokenEndpoint] Token endpoint
   * @param {string[]} [scopes] Scopes to authorize with
   */

  /**
   * Performs authentication flow. Automatically calls Client#connect if needed.
   * @param {RPCLoginOptions} options Options for authentication.
   * At least one property must be provided to perform login.
   * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
   * @returns {Promise<RPCClient>}
   */
  async login(options = {}) {
    let { clientId, accessToken } = options;
    await this.connect(clientId);
    if (!options.scopes) {
      this.emit('ready');
      return this;
    }
    if (!accessToken) {
      accessToken = await this.authorize(options);
    }
    return this.authenticate(accessToken);
  }

  /**
   * Request
   * @param {string} cmd Command
   * @param {Object} [args={}] Arguments
   * @param {string} [evt] Event
   * @returns {Promise}
   * @private
   */
  request(cmd, args, evt) {
    return new Promise((resolve, reject) => {
      const nonce = uuid$1();
      this.transport.send({ cmd, args, evt, nonce });
      this._expecting.set(nonce, { resolve, reject });
    });
  }

  /**
   * Message handler
   * @param {Object} message message
   * @private
   */
  _onRpcMessage(message) {
    if (message.cmd === RPCCommands$1.DISPATCH && message.evt === RPCEvents$1.READY) {
      if (message.data.user) {
        this.user = message.data.user;
      }
      this.emit('connected');
    } else if (this._expecting.has(message.nonce)) {
      const { resolve, reject } = this._expecting.get(message.nonce);
      if (message.evt === 'ERROR') {
        const e = new Error(message.data.message);
        e.code = message.data.code;
        e.data = message.data;
        reject(e);
      } else {
        resolve(message.data);
      }
      this._expecting.delete(message.nonce);
    } else {
      const subid = subKey(message.evt, message.args);
      if (!this._subscriptions.has(subid)) {
        return;
      }
      this._subscriptions.get(subid)(message.data);
    }
  }

  /**
   * Authorize
   * @param {Object} options options
   * @returns {Promise}
   * @private
   */
  async authorize({ scopes, clientSecret, rpcToken, redirectUri } = {}) {
    if (clientSecret && rpcToken === true) {
      const body = await this.fetch('POST', '/oauth2/token/rpc', {
        data: new URLSearchParams({
          client_id: this.clientId,
          client_secret: clientSecret,
        }),
      });
      rpcToken = body.rpc_token;
    }

    const { code } = await this.request('AUTHORIZE', {
      scopes,
      client_id: this.clientId,
      rpc_token: rpcToken,
    });

    const response = await this.fetch('POST', '/oauth2/token', {
      data: new URLSearchParams({
        client_id: this.clientId,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    return response.access_token;
  }

  /**
   * Authenticate
   * @param {string} accessToken access token
   * @returns {Promise}
   * @private
   */
  authenticate(accessToken) {
    return this.request('AUTHENTICATE', { access_token: accessToken })
      .then(({ application, user }) => {
        this.accessToken = accessToken;
        this.application = application;
        this.user = user;
        this.emit('ready');
        return this;
      });
  }


  /**
   * Fetch a guild
   * @param {Snowflake} id Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Guild>}
   */
  getGuild(id, timeout) {
    return this.request(RPCCommands$1.GET_GUILD, { guild_id: id, timeout });
  }

  /**
   * Fetch all guilds
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Guild>>}
   */
  getGuilds(timeout) {
    return this.request(RPCCommands$1.GET_GUILDS, { timeout });
  }

  /**
   * Get a channel
   * @param {Snowflake} id Channel ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Channel>}
   */
  getChannel(id, timeout) {
    return this.request(RPCCommands$1.GET_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get all channels
   * @param {Snowflake} [id] Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Channel>>}
   */
  async getChannels(id, timeout) {
    const { channels } = await this.request(RPCCommands$1.GET_CHANNELS, {
      timeout,
      guild_id: id,
    });
    return channels;
  }

  /**
   * @typedef {CertifiedDevice}
   * @prop {string} type One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
   * @prop {string} uuid This device's Windows UUID
   * @prop {object} vendor Vendor information
   * @prop {string} vendor.name Vendor's name
   * @prop {string} vendor.url Vendor's url
   * @prop {object} model Model information
   * @prop {string} model.name Model's name
   * @prop {string} model.url Model's url
   * @prop {string[]} related Array of related product's Windows UUIDs
   * @prop {boolean} echoCancellation If the device has echo cancellation
   * @prop {boolean} noiseSuppression If the device has noise suppression
   * @prop {boolean} automaticGainControl If the device has automatic gain control
   * @prop {boolean} hardwareMute If the device has a hardware mute
   */

  /**
   * Tell discord which devices are certified
   * @param {CertifiedDevice[]} devices Certified devices to send to discord
   * @returns {Promise}
   */
  setCertifiedDevices(devices) {
    return this.request(RPCCommands$1.SET_CERTIFIED_DEVICES, {
      devices: devices.map((d) => ({
        type: d.type,
        id: d.uuid,
        vendor: d.vendor,
        model: d.model,
        related: d.related,
        echo_cancellation: d.echoCancellation,
        noise_suppression: d.noiseSuppression,
        automatic_gain_control: d.automaticGainControl,
        hardware_mute: d.hardwareMute,
      })),
    });
  }

  /**
   * @typedef {UserVoiceSettings}
   * @prop {Snowflake} id ID of the user these settings apply to
   * @prop {?Object} [pan] Pan settings, an object with `left` and `right` set between
   * 0.0 and 1.0, inclusive
   * @prop {?number} [volume=100] The volume
   * @prop {bool} [mute] If the user is muted
   */

  /**
   * Set the voice settings for a uer, by id
   * @param {Snowflake} id ID of the user to set
   * @param {UserVoiceSettings} settings Settings
   * @returns {Promise}
   */
  setUserVoiceSettings(id, settings) {
    return this.request(RPCCommands$1.SET_USER_VOICE_SETTINGS, {
      user_id: id,
      pan: settings.pan,
      mute: settings.mute,
      volume: settings.volume,
    });
  }

  /**
   * Move the user to a voice channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * @param {boolean} [options.force] Force this move. This should only be done if you
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectVoiceChannel(id, { timeout, force = false } = {}) {
    return this.request(RPCCommands$1.SELECT_VOICE_CHANNEL, { channel_id: id, timeout, force });
  }

  /**
   * Move the user to a text channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * @param {boolean} [options.force] Force this move. This should only be done if you
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectTextChannel(id, { timeout, force = false } = {}) {
    return this.request(RPCCommands$1.SELECT_TEXT_CHANNEL, { channel_id: id, timeout, force });
  }

  /**
   * Get current voice settings
   * @returns {Promise}
   */
  getVoiceSettings() {
    return this.request(RPCCommands$1.GET_VOICE_SETTINGS)
      .then((s) => ({
        automaticGainControl: s.automatic_gain_control,
        echoCancellation: s.echo_cancellation,
        noiseSuppression: s.noise_suppression,
        qos: s.qos,
        silenceWarning: s.silence_warning,
        deaf: s.deaf,
        mute: s.mute,
        input: {
          availableDevices: s.input.available_devices,
          device: s.input.device_id,
          volume: s.input.volume,
        },
        output: {
          availableDevices: s.output.available_devices,
          device: s.output.device_id,
          volume: s.output.volume,
        },
        mode: {
          type: s.mode.type,
          autoThreshold: s.mode.auto_threshold,
          threshold: s.mode.threshold,
          shortcut: s.mode.shortcut,
          delay: s.mode.delay,
        },
      }));
  }

  /**
   * Set current voice settings, overriding the current settings until this session disconnects.
   * This also locks the settings for any other rpc sessions which may be connected.
   * @param {Object} args Settings
   * @returns {Promise}
   */
  setVoiceSettings(args) {
    return this.request(RPCCommands$1.SET_VOICE_SETTINGS, {
      automatic_gain_control: args.automaticGainControl,
      echo_cancellation: args.echoCancellation,
      noise_suppression: args.noiseSuppression,
      qos: args.qos,
      silence_warning: args.silenceWarning,
      deaf: args.deaf,
      mute: args.mute,
      input: args.input ? {
        device_id: args.input.device,
        volume: args.input.volume,
      } : undefined,
      output: args.output ? {
        device_id: args.output.device,
        volume: args.output.volume,
      } : undefined,
      mode: args.mode ? {
        mode: args.mode.type,
        auto_threshold: args.mode.autoThreshold,
        threshold: args.mode.threshold,
        shortcut: args.mode.shortcut,
        delay: args.mode.delay,
      } : undefined,
    });
  }

  /**
   * Capture a shortcut using the client
   * The callback takes (key, stop) where `stop` is a function that will stop capturing.
   * This `stop` function must be called before disconnecting or else the user will have
   * to restart their client.
   * @param {Function} callback Callback handling keys
   * @returns {Promise<Function>}
   */
  captureShortcut(callback) {
    const subid = subKey(RPCEvents$1.CAPTURE_SHORTCUT_CHANGE);
    const stop = () => {
      this._subscriptions.delete(subid);
      return this.request(RPCCommands$1.CAPTURE_SHORTCUT, { action: 'STOP' });
    };
    this._subscriptions.set(subid, ({ shortcut }) => {
      callback(shortcut, stop);
    });
    return this.request(RPCCommands$1.CAPTURE_SHORTCUT, { action: 'START' })
      .then(() => stop);
  }

  /**
   * Sets the presence for the logged in user.
   * @param {object} args The rich presence to pass.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  setActivity(args = {}, pid = getPid()) {
    let timestamps;
    let assets;
    let party;
    let secrets;
    if (args.startTimestamp || args.endTimestamp) {
      timestamps = {
        start: args.startTimestamp,
        end: args.endTimestamp,
      };
      if (timestamps.start instanceof Date) {
        timestamps.start = Math.round(timestamps.start.getTime());
      }
      if (timestamps.end instanceof Date) {
        timestamps.end = Math.round(timestamps.end.getTime());
      }
      if (timestamps.start > 2147483647000) {
        throw new RangeError('timestamps.start must fit into a unix timestamp');
      }
      if (timestamps.end > 2147483647000) {
        throw new RangeError('timestamps.end must fit into a unix timestamp');
      }
    }
    if (
      args.largeImageKey || args.largeImageText
      || args.smallImageKey || args.smallImageText
    ) {
      assets = {
        large_image: args.largeImageKey,
        large_text: args.largeImageText,
        small_image: args.smallImageKey,
        small_text: args.smallImageText,
      };
    }
    if (args.partySize || args.partyId || args.partyMax) {
      party = { id: args.partyId };
      if (args.partySize || args.partyMax) {
        party.size = [args.partySize, args.partyMax];
      }
    }
    if (args.matchSecret || args.joinSecret || args.spectateSecret) {
      secrets = {
        match: args.matchSecret,
        join: args.joinSecret,
        spectate: args.spectateSecret,
      };
    }

    return this.request(RPCCommands$1.SET_ACTIVITY, {
      pid,
      activity: {
        state: args.state,
        details: args.details,
        timestamps,
        assets,
        party,
        secrets,
        instance: !!args.instance,
      },
    });
  }

  /**
   * Clears the currently set presence, if any. This will hide the "Playing X" message
   * displayed below the user's name.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  clearActivity(pid = getPid()) {
    return this.request(RPCCommands$1.SET_ACTIVITY, {
      pid,
    });
  }

  /**
   * Invite a user to join the game the RPC user is currently playing
   * @param {User} user The user to invite
   * @returns {Promise}
   */
  sendJoinInvite(user) {
    return this.request(RPCCommands$1.SEND_ACTIVITY_JOIN_INVITE, {
      user_id: user.id || user,
    });
  }

  /**
   * Request to join the game the user is playing
   * @param {User} user The user whose game you want to request to join
   * @returns {Promise}
   */
  sendJoinRequest(user) {
    return this.request(RPCCommands$1.SEND_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  /**
   * Reject a join request from a user
   * @param {User} user The user whose request you wish to reject
   * @returns {Promise}
   */
  closeJoinRequest(user) {
    return this.request(RPCCommands$1.CLOSE_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  createLobby(type, capacity, metadata) {
    return this.request(RPCCommands$1.CREATE_LOBBY, {
      type,
      capacity,
      metadata,
    });
  }

  updateLobby(lobby, { type, owner, capacity, metadata } = {}) {
    return this.request(RPCCommands$1.UPDATE_LOBBY, {
      id: lobby.id || lobby,
      type,
      owner_id: (owner && owner.id) || owner,
      capacity,
      metadata,
    });
  }

  deleteLobby(lobby) {
    return this.request(RPCCommands$1.DELETE_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  connectToLobby(id, secret) {
    return this.request(RPCCommands$1.CONNECT_TO_LOBBY, {
      id,
      secret,
    });
  }

  sendToLobby(lobby, data) {
    return this.request(RPCCommands$1.SEND_TO_LOBBY, {
      id: lobby.id || lobby,
      data,
    });
  }

  disconnectFromLobby(lobby) {
    return this.request(RPCCommands$1.DISCONNECT_FROM_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  updateLobbyMember(lobby, user, metadata) {
    return this.request(RPCCommands$1.UPDATE_LOBBY_MEMBER, {
      lobby_id: lobby.id || lobby,
      user_id: user.id || user,
      metadata,
    });
  }

  getRelationships() {
    const types = Object.keys(RelationshipTypes$1);
    return this.request(RPCCommands$1.GET_RELATIONSHIPS)
      .then((o) => o.relationships.map((r) => ({
        ...r,
        type: types[r.type],
      })));
  }

  /**
   * Subscribe to an event
   * @param {string} event Name of event e.g. `MESSAGE_CREATE`
   * @param {Object} [args] Args for event e.g. `{ channel_id: '1234' }`
   * @param {Function} callback Callback when an event for the subscription is triggered
   * @returns {Promise<Object>}
   */
  subscribe(event, args, callback) {
    if (!callback && typeof args === 'function') {
      callback = args;
      args = undefined;
    }
    return this.request(RPCCommands$1.SUBSCRIBE, args, event).then(() => {
      const subid = subKey(event, args);
      this._subscriptions.set(subid, callback);
      return {
        unsubscribe: () => this.request(RPCCommands$1.UNSUBSCRIBE, args, event)
          .then(() => this._subscriptions.delete(subid)),
      };
    });
  }

  /**
   * Destroy the client
   */
  async destroy() {
    this.transport.close();
  }
}

var client = RPCClient;

var src = {
  Client: client,
  register(id) {
    return util.register(`discord-${id}`);
  },
};

var DiscordRPCSettings = /** @class */ (function () {
    function DiscordRPCSettings() {
        this.showVaultName = true;
        this.showCurrentFileName = true;
    }
    return DiscordRPCSettings;
}());
var PluginState;
(function (PluginState) {
    PluginState[PluginState["connected"] = 0] = "connected";
    PluginState[PluginState["connecting"] = 1] = "connecting";
    PluginState[PluginState["disconnected"] = 2] = "disconnected";
})(PluginState || (PluginState = {}));

var DiscordRPCSettingsTab = /** @class */ (function (_super) {
    __extends(DiscordRPCSettingsTab, _super);
    function DiscordRPCSettingsTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscordRPCSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Discord Rich Presence Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Vault Name")
            .setDesc("Enable this to show the name of the vault you are working with.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showVaultName).onChange(function (value) {
                plugin.settings.showVaultName = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), "...");
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show Current File Name")
            .setDesc("Enable this to show the name of the file you are working on.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showCurrentFileName)
                .onChange(function (value) {
                plugin.settings.showCurrentFileName = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), "...");
            });
        });
    };
    return DiscordRPCSettingsTab;
}(obsidian.PluginSettingTab));

var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl) {
        this.statusBarEl = statusBarEl;
    }
    StatusBar.prototype.displayState = function (state) {
        switch (state) {
            case PluginState.connected:
                this.displayConnected(2000);
                break;
            case PluginState.connecting:
                this.statusBarEl.setText("Connecting to Discord...");
                break;
            case PluginState.disconnected:
                this.statusBarEl.setText("\uD83D\uDDD8 Reconnect to Discord");
                break;
        }
    };
    StatusBar.prototype.displayConnected = function (timeout) {
        var _this = this;
        this.statusBarEl.setText("\uD83C\uDF0D Connected to Discord");
        if (timeout && timeout > 0) {
            window.setTimeout(function () {
                _this.statusBarEl.setText("\uD83C\uDF0D");
            }, timeout);
        }
    };
    return StatusBar;
}());

var ObsidianDiscordRPC = /** @class */ (function (_super) {
    __extends(ObsidianDiscordRPC, _super);
    function ObsidianDiscordRPC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObsidianDiscordRPC.prototype.setState = function (state) {
        this.state = state;
    };
    ObsidianDiscordRPC.prototype.getState = function () {
        return this.state;
    };
    ObsidianDiscordRPC.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        statusBarEl = this.addStatusBarItem();
                        this.statusBar = new StatusBar(statusBarEl);
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || new DiscordRPCSettings();
                        this.registerEvent(this.app.workspace.on("file-open", this.onFileOpen, this));
                        this.registerDomEvent(statusBarEl, "click", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this.getState() == PluginState.disconnected)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.connectDiscord()];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        this.addSettingTab(new DiscordRPCSettingsTab(this.app, this));
                        return [4 /*yield*/, this.connectDiscord()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onFileOpen = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getState() == PluginState.connected)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), file.basename)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        this.rpc.clearActivity();
                        this.rpc.destroy();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.connectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.rpc = new src.Client({
                            transport: "ipc",
                        });
                        this.setState(PluginState.connecting);
                        this.statusBar.displayState(this.getState());
                        this.rpc.once("ready", function () {
                            _this.setState(PluginState.connected);
                            _this.statusBar.displayState(_this.getState());
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rpc.login({
                                clientId: "763813185022197831",
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), "...")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState());
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.setActivity = function (vaultName, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.settings.showVaultName && this.settings.showCurrentFileName)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing " + fileName,
                                state: "Vault: " + vaultName,
                                startTimestamp: new Date(),
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        if (!this.settings.showVaultName) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rpc.setActivity({
                                state: "Vault: " + vaultName,
                                startTimestamp: new Date(),
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!this.settings.showCurrentFileName) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing " + fileName,
                                startTimestamp: new Date(),
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rpc.setActivity({
                            startTimestamp: new Date(),
                            largeImageKey: "logo",
                            largeImageText: "Obsidian",
                        })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return ObsidianDiscordRPC;
}(obsidian.Plugin));

module.exports = ObsidianDiscordRPC;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9kaXNjb3JkLXJwYy9zcmMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL2Jyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvaXBjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jb25zdGFudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jbGllbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL2luZGV4LmpzIiwiLi4vc3JjL3NldHRpbmdzL3NldHRpbmdzLnRzIiwiLi4vc3JjL3NldHRpbmdzL3NldHRpbmdzLXRhYi50cyIsIi4uL3NyYy9zdGF0dXMtYmFyLnRzIiwiLi4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgcmVnaXN0ZXI7XG50cnkge1xuICBjb25zdCB7IGFwcCB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbiAgcmVnaXN0ZXIgPSBhcHAuc2V0QXNEZWZhdWx0UHJvdG9jb2xDbGllbnQuYmluZChhcHApO1xufSBjYXRjaCAoZXJyKSB7XG4gIHRyeSB7XG4gICAgcmVnaXN0ZXIgPSByZXF1aXJlKCdyZWdpc3Rlci1zY2hlbWUnKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxufVxuXG5pZiAodHlwZW9mIHJlZ2lzdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gIHJlZ2lzdGVyID0gKCkgPT4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBpZCgpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBwcm9jZXNzLnBpZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgdXVpZDQxMjIgPSAoKSA9PiB7XG4gIGxldCB1dWlkID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkgKz0gMSkge1xuICAgIGlmIChpID09PSA4IHx8IGkgPT09IDEyIHx8IGkgPT09IDE2IHx8IGkgPT09IDIwKSB7XG4gICAgICB1dWlkICs9ICctJztcbiAgICB9XG4gICAgbGV0IG47XG4gICAgaWYgKGkgPT09IDEyKSB7XG4gICAgICBuID0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcbiAgICAgIGlmIChpID09PSAxNikge1xuICAgICAgICBuID0gKHJhbmRvbSAmIDMpIHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4gPSByYW5kb207XG4gICAgICB9XG4gICAgfVxuICAgIHV1aWQgKz0gbi50b1N0cmluZygxNik7XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGlkLFxuICByZWdpc3RlcixcbiAgdXVpZDogdXVpZDQxMjIsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xuXHQvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcblx0Ly8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuXHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cdHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG59XG5cbnZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZ2xvYmFsLmZldGNoO1xuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgYW5kIFdlYnBhY2suXG5pZiAoZ2xvYmFsLmZldGNoKSB7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbC5mZXRjaC5iaW5kKGdsb2JhbCk7XG59XG5cbmV4cG9ydHMuSGVhZGVycyA9IGdsb2JhbC5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gZ2xvYmFsLlJlcXVlc3Q7XG5leHBvcnRzLlJlc3BvbnNlID0gZ2xvYmFsLlJlc3BvbnNlOyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmV0ID0gcmVxdWlyZSgnbmV0Jyk7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuY29uc3QgeyB1dWlkIH0gPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbmNvbnN0IE9QQ29kZXMgPSB7XG4gIEhBTkRTSEFLRTogMCxcbiAgRlJBTUU6IDEsXG4gIENMT1NFOiAyLFxuICBQSU5HOiAzLFxuICBQT05HOiA0LFxufTtcblxuZnVuY3Rpb24gZ2V0SVBDUGF0aChpZCkge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiBgXFxcXFxcXFw/XFxcXHBpcGVcXFxcZGlzY29yZC1pcGMtJHtpZH1gO1xuICB9XG4gIGNvbnN0IHsgZW52OiB7IFhER19SVU5USU1FX0RJUiwgVE1QRElSLCBUTVAsIFRFTVAgfSB9ID0gcHJvY2VzcztcbiAgY29uc3QgcHJlZml4ID0gWERHX1JVTlRJTUVfRElSIHx8IFRNUERJUiB8fCBUTVAgfHwgVEVNUCB8fCAnL3RtcCc7XG4gIHJldHVybiBgJHtwcmVmaXgucmVwbGFjZSgvXFwvJC8sICcnKX0vZGlzY29yZC1pcGMtJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBnZXRJUEMoaWQgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGdldElQQ1BhdGgoaWQpO1xuICAgIGNvbnN0IG9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBpZiAoaWQgPCAxMCkge1xuICAgICAgICByZXNvbHZlKGdldElQQyhpZCArIDEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjb25uZWN0JykpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc29jayA9IG5ldC5jcmVhdGVDb25uZWN0aW9uKHBhdGgsICgpID0+IHtcbiAgICAgIHNvY2sucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICByZXNvbHZlKHNvY2spO1xuICAgIH0pO1xuICAgIHNvY2sub25jZSgnZXJyb3InLCBvbmVycm9yKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRFbmRwb2ludCh0cmllcyA9IDApIHtcbiAgaWYgKHRyaWVzID4gMzApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGVuZHBvaW50Jyk7XG4gIH1cbiAgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovLzEyNy4wLjAuMTokezY0NjMgKyAodHJpZXMgJSAxMCl9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpO1xuICAgIGlmIChyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICByZXR1cm4gZW5kcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiBmaW5kRW5kcG9pbnQodHJpZXMgKyAxKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmaW5kRW5kcG9pbnQodHJpZXMgKyAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGUob3AsIGRhdGEpIHtcbiAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICBjb25zdCBsZW4gPSBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKTtcbiAgY29uc3QgcGFja2V0ID0gQnVmZmVyLmFsbG9jKDggKyBsZW4pO1xuICBwYWNrZXQud3JpdGVJbnQzMkxFKG9wLCAwKTtcbiAgcGFja2V0LndyaXRlSW50MzJMRShsZW4sIDQpO1xuICBwYWNrZXQud3JpdGUoZGF0YSwgOCwgbGVuKTtcbiAgcmV0dXJuIHBhY2tldDtcbn1cblxuY29uc3Qgd29ya2luZyA9IHtcbiAgZnVsbDogJycsXG4gIG9wOiB1bmRlZmluZWQsXG59O1xuXG5mdW5jdGlvbiBkZWNvZGUoc29ja2V0LCBjYWxsYmFjaykge1xuICBjb25zdCBwYWNrZXQgPSBzb2NrZXQucmVhZCgpO1xuICBpZiAoIXBhY2tldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IG9wIH0gPSB3b3JraW5nO1xuICBsZXQgcmF3O1xuICBpZiAod29ya2luZy5mdWxsID09PSAnJykge1xuICAgIG9wID0gd29ya2luZy5vcCA9IHBhY2tldC5yZWFkSW50MzJMRSgwKTtcbiAgICBjb25zdCBsZW4gPSBwYWNrZXQucmVhZEludDMyTEUoNCk7XG4gICAgcmF3ID0gcGFja2V0LnNsaWNlKDgsIGxlbiArIDgpO1xuICB9IGVsc2Uge1xuICAgIHJhdyA9IHBhY2tldC50b1N0cmluZygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh3b3JraW5nLmZ1bGwgKyByYXcpO1xuICAgIGNhbGxiYWNrKHsgb3AsIGRhdGEgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FsbGJhY2stcmV0dXJuXG4gICAgd29ya2luZy5mdWxsID0gJyc7XG4gICAgd29ya2luZy5vcCA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgd29ya2luZy5mdWxsICs9IHJhdztcbiAgfVxuXG4gIGRlY29kZShzb2NrZXQsIGNhbGxiYWNrKTtcbn1cblxuY2xhc3MgSVBDVHJhbnNwb3J0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLnNvY2tldCA9IG51bGw7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCkge1xuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuc29ja2V0ID0gYXdhaXQgZ2V0SVBDKCk7XG4gICAgc29ja2V0Lm9uKCdjbG9zZScsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICAgIHNvY2tldC53cml0ZShlbmNvZGUoT1BDb2Rlcy5IQU5EU0hBS0UsIHtcbiAgICAgIHY6IDEsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50LmNsaWVudElkLFxuICAgIH0pKTtcbiAgICBzb2NrZXQucGF1c2UoKTtcbiAgICBzb2NrZXQub24oJ3JlYWRhYmxlJywgKCkgPT4ge1xuICAgICAgZGVjb2RlKHNvY2tldCwgKHsgb3AsIGRhdGEgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgICAgY2FzZSBPUENvZGVzLlBJTkc6XG4gICAgICAgICAgICB0aGlzLnNlbmQoZGF0YSwgT1BDb2Rlcy5QT05HKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT1BDb2Rlcy5GUkFNRTpcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5jbWQgPT09ICdBVVRIT1JJWkUnICYmIGRhdGEuZXZ0ICE9PSAnRVJST1InKSB7XG4gICAgICAgICAgICAgIGZpbmRFbmRwb2ludCgpLnRoZW4oKGVuZHBvaW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQucmVxdWVzdC5lbmRwb2ludCA9IGVuZHBvaW50O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPUENvZGVzLkNMT1NFOlxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjbG9zZScsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xvc2UoZSkge1xuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCBlKTtcbiAgfVxuXG4gIHNlbmQoZGF0YSwgb3AgPSBPUENvZGVzLkZSQU1FKSB7XG4gICAgdGhpcy5zb2NrZXQud3JpdGUoZW5jb2RlKG9wLCBkYXRhKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNlbmQoe30sIE9QQ29kZXMuQ0xPU0UpO1xuICAgIHRoaXMuc29ja2V0LmVuZCgpO1xuICB9XG5cbiAgcGluZygpIHtcbiAgICB0aGlzLnNlbmQodXVpZCgpLCBPUENvZGVzLlBJTkcpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSVBDVHJhbnNwb3J0O1xubW9kdWxlLmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBrZXlNaXJyb3IoYXJyKSB7XG4gIGNvbnN0IHRtcCA9IHt9O1xuICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFycikge1xuICAgIHRtcFt2YWx1ZV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdG1wO1xufVxuXG5cbmV4cG9ydHMuYnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnRzLlJQQ0NvbW1hbmRzID0ga2V5TWlycm9yKFtcbiAgJ0RJU1BBVENIJyxcbiAgJ0FVVEhPUklaRScsXG4gICdBVVRIRU5USUNBVEUnLFxuICAnR0VUX0dVSUxEJyxcbiAgJ0dFVF9HVUlMRFMnLFxuICAnR0VUX0NIQU5ORUwnLFxuICAnR0VUX0NIQU5ORUxTJyxcbiAgJ0NSRUFURV9DSEFOTkVMX0lOVklURScsXG4gICdHRVRfUkVMQVRJT05TSElQUycsXG4gICdHRVRfVVNFUicsXG4gICdTVUJTQ1JJQkUnLFxuICAnVU5TVUJTQ1JJQkUnLFxuICAnU0VUX1VTRVJfVk9JQ0VfU0VUVElOR1MnLFxuICAnU0VUX1VTRVJfVk9JQ0VfU0VUVElOR1NfMicsXG4gICdTRUxFQ1RfVk9JQ0VfQ0hBTk5FTCcsXG4gICdHRVRfU0VMRUNURURfVk9JQ0VfQ0hBTk5FTCcsXG4gICdTRUxFQ1RfVEVYVF9DSEFOTkVMJyxcbiAgJ0dFVF9WT0lDRV9TRVRUSU5HUycsXG4gICdTRVRfVk9JQ0VfU0VUVElOR1NfMicsXG4gICdTRVRfVk9JQ0VfU0VUVElOR1MnLFxuICAnQ0FQVFVSRV9TSE9SVENVVCcsXG4gICdTRVRfQUNUSVZJVFknLFxuICAnU0VORF9BQ1RJVklUWV9KT0lOX0lOVklURScsXG4gICdDTE9TRV9BQ1RJVklUWV9KT0lOX1JFUVVFU1QnLFxuICAnQUNUSVZJVFlfSU5WSVRFX1VTRVInLFxuICAnQUNDRVBUX0FDVElWSVRZX0lOVklURScsXG4gICdJTlZJVEVfQlJPV1NFUicsXG4gICdERUVQX0xJTksnLFxuICAnQ09OTkVDVElPTlNfQ0FMTEJBQ0snLFxuICAnQlJBSU5UUkVFX1BPUFVQX0JSSURHRV9DQUxMQkFDSycsXG4gICdHSUZUX0NPREVfQlJPV1NFUicsXG4gICdHVUlMRF9URU1QTEFURV9CUk9XU0VSJyxcbiAgJ09WRVJMQVknLFxuICAnQlJPV1NFUl9IQU5ET0ZGJyxcbiAgJ1NFVF9DRVJUSUZJRURfREVWSUNFUycsXG4gICdHRVRfSU1BR0UnLFxuICAnQ1JFQVRFX0xPQkJZJyxcbiAgJ1VQREFURV9MT0JCWScsXG4gICdERUxFVEVfTE9CQlknLFxuICAnVVBEQVRFX0xPQkJZX01FTUJFUicsXG4gICdDT05ORUNUX1RPX0xPQkJZJyxcbiAgJ0RJU0NPTk5FQ1RfRlJPTV9MT0JCWScsXG4gICdTRU5EX1RPX0xPQkJZJyxcbiAgJ1NFQVJDSF9MT0JCSUVTJyxcbiAgJ0NPTk5FQ1RfVE9fTE9CQllfVk9JQ0UnLFxuICAnRElTQ09OTkVDVF9GUk9NX0xPQkJZX1ZPSUNFJyxcbiAgJ1NFVF9PVkVSTEFZX0xPQ0tFRCcsXG4gICdPUEVOX09WRVJMQVlfQUNUSVZJVFlfSU5WSVRFJyxcbiAgJ09QRU5fT1ZFUkxBWV9HVUlMRF9JTlZJVEUnLFxuICAnT1BFTl9PVkVSTEFZX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ1ZBTElEQVRFX0FQUExJQ0FUSU9OJyxcbiAgJ0dFVF9FTlRJVExFTUVOVF9USUNLRVQnLFxuICAnR0VUX0FQUExJQ0FUSU9OX1RJQ0tFVCcsXG4gICdTVEFSVF9QVVJDSEFTRScsXG4gICdHRVRfU0tVUycsXG4gICdHRVRfRU5USVRMRU1FTlRTJyxcbiAgJ0dFVF9ORVRXT1JLSU5HX0NPTkZJRycsXG4gICdORVRXT1JLSU5HX1NZU1RFTV9NRVRSSUNTJyxcbiAgJ05FVFdPUktJTkdfUEVFUl9NRVRSSUNTJyxcbiAgJ05FVFdPUktJTkdfQ1JFQVRFX1RPS0VOJyxcbiAgJ1NFVF9VU0VSX0FDSElFVkVNRU5UJyxcbiAgJ0dFVF9VU0VSX0FDSElFVkVNRU5UUycsXG5dKTtcblxuZXhwb3J0cy5SUENFdmVudHMgPSBrZXlNaXJyb3IoW1xuICAnQ1VSUkVOVF9VU0VSX1VQREFURScsXG4gICdHVUlMRF9TVEFUVVMnLFxuICAnR1VJTERfQ1JFQVRFJyxcbiAgJ0NIQU5ORUxfQ1JFQVRFJyxcbiAgJ1JFTEFUSU9OU0hJUF9VUERBVEUnLFxuICAnVk9JQ0VfQ0hBTk5FTF9TRUxFQ1QnLFxuICAnVk9JQ0VfU1RBVEVfQ1JFQVRFJyxcbiAgJ1ZPSUNFX1NUQVRFX0RFTEVURScsXG4gICdWT0lDRV9TVEFURV9VUERBVEUnLFxuICAnVk9JQ0VfU0VUVElOR1NfVVBEQVRFJyxcbiAgJ1ZPSUNFX1NFVFRJTkdTX1VQREFURV8yJyxcbiAgJ1ZPSUNFX0NPTk5FQ1RJT05fU1RBVFVTJyxcbiAgJ1NQRUFLSU5HX1NUQVJUJyxcbiAgJ1NQRUFLSU5HX1NUT1AnLFxuICAnR0FNRV9KT0lOJyxcbiAgJ0dBTUVfU1BFQ1RBVEUnLFxuICAnQUNUSVZJVFlfSk9JTicsXG4gICdBQ1RJVklUWV9KT0lOX1JFUVVFU1QnLFxuICAnQUNUSVZJVFlfU1BFQ1RBVEUnLFxuICAnQUNUSVZJVFlfSU5WSVRFJyxcbiAgJ05PVElGSUNBVElPTl9DUkVBVEUnLFxuICAnTUVTU0FHRV9DUkVBVEUnLFxuICAnTUVTU0FHRV9VUERBVEUnLFxuICAnTUVTU0FHRV9ERUxFVEUnLFxuICAnTE9CQllfREVMRVRFJyxcbiAgJ0xPQkJZX1VQREFURScsXG4gICdMT0JCWV9NRU1CRVJfQ09OTkVDVCcsXG4gICdMT0JCWV9NRU1CRVJfRElTQ09OTkVDVCcsXG4gICdMT0JCWV9NRU1CRVJfVVBEQVRFJyxcbiAgJ0xPQkJZX01FU1NBR0UnLFxuICAnQ0FQVFVSRV9TSE9SVENVVF9DSEFOR0UnLFxuICAnT1ZFUkxBWScsXG4gICdPVkVSTEFZX1VQREFURScsXG4gICdFTlRJVExFTUVOVF9DUkVBVEUnLFxuICAnRU5USVRMRU1FTlRfREVMRVRFJyxcbiAgJ1VTRVJfQUNISUVWRU1FTlRfVVBEQVRFJyxcbiAgJ1JFQURZJyxcbiAgJ0VSUk9SJyxcbl0pO1xuXG5leHBvcnRzLlJQQ0Vycm9ycyA9IHtcbiAgQ0FQVFVSRV9TSE9SVENVVF9BTFJFQURZX0xJU1RFTklORzogNTAwNCxcbiAgR0VUX0dVSUxEX1RJTUVEX09VVDogNTAwMixcbiAgSU5WQUxJRF9BQ1RJVklUWV9KT0lOX1JFUVVFU1Q6IDQwMTIsXG4gIElOVkFMSURfQUNUSVZJVFlfU0VDUkVUOiA1MDA1LFxuICBJTlZBTElEX0NIQU5ORUw6IDQwMDUsXG4gIElOVkFMSURfQ0xJRU5USUQ6IDQwMDcsXG4gIElOVkFMSURfQ09NTUFORDogNDAwMixcbiAgSU5WQUxJRF9FTlRJVExFTUVOVDogNDAxNSxcbiAgSU5WQUxJRF9FVkVOVDogNDAwNCxcbiAgSU5WQUxJRF9HSUZUX0NPREU6IDQwMTYsXG4gIElOVkFMSURfR1VJTEQ6IDQwMDMsXG4gIElOVkFMSURfSU5WSVRFOiA0MDExLFxuICBJTlZBTElEX0xPQkJZOiA0MDEzLFxuICBJTlZBTElEX0xPQkJZX1NFQ1JFVDogNDAxNCxcbiAgSU5WQUxJRF9PUklHSU46IDQwMDgsXG4gIElOVkFMSURfUEFZTE9BRDogNDAwMCxcbiAgSU5WQUxJRF9QRVJNSVNTSU9OUzogNDAwNixcbiAgSU5WQUxJRF9UT0tFTjogNDAwOSxcbiAgSU5WQUxJRF9VU0VSOiA0MDEwLFxuICBMT0JCWV9GVUxMOiA1MDA3LFxuICBOT19FTElHSUJMRV9BQ1RJVklUWTogNTAwNixcbiAgT0FVVEgyX0VSUk9SOiA1MDAwLFxuICBQVVJDSEFTRV9DQU5DRUxFRDogNTAwOCxcbiAgUFVSQ0hBU0VfRVJST1I6IDUwMDksXG4gIFJBVEVfTElNSVRFRDogNTAxMSxcbiAgU0VMRUNUX0NIQU5ORUxfVElNRURfT1VUOiA1MDAxLFxuICBTRUxFQ1RfVk9JQ0VfRk9SQ0VfUkVRVUlSRUQ6IDUwMDMsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDEwMDEsXG4gIFRSQU5TQUNUSU9OX0FCT1JURUQ6IDEwMDIsXG4gIFVOQVVUSE9SSVpFRF9GT1JfQUNISUVWRU1FTlQ6IDUwMTAsXG4gIFVOS05PV05fRVJST1I6IDEwMDAsXG59O1xuXG5leHBvcnRzLlJQQ0Nsb3NlQ29kZXMgPSB7XG4gIENMT1NFX05PUk1BTDogMTAwMCxcbiAgQ0xPU0VfVU5TVVBQT1JURUQ6IDEwMDMsXG4gIENMT1NFX0FCTk9STUFMOiAxMDA2LFxuICBJTlZBTElEX0NMSUVOVElEOiA0MDAwLFxuICBJTlZBTElEX09SSUdJTjogNDAwMSxcbiAgUkFURUxJTUlURUQ6IDQwMDIsXG4gIFRPS0VOX1JFVk9LRUQ6IDQwMDMsXG4gIElOVkFMSURfVkVSU0lPTjogNDAwNCxcbiAgSU5WQUxJRF9FTkNPRElORzogNDAwNSxcbn07XG5cbmV4cG9ydHMuTG9iYnlUeXBlcyA9IHtcbiAgUFJJVkFURTogMSxcbiAgUFVCTElDOiAyLFxufTtcblxuZXhwb3J0cy5SZWxhdGlvbnNoaXBUeXBlcyA9IHtcbiAgTk9ORTogMCxcbiAgRlJJRU5EOiAxLFxuICBCTE9DS0VEOiAyLFxuICBQRU5ESU5HX0lOQ09NSU5HOiAzLFxuICBQRU5ESU5HX09VVEdPSU5HOiA0LFxuICBJTVBMSUNJVDogNSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgeyBicm93c2VyIH0gPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBXZWJTb2NrZXQgPSBicm93c2VyID8gd2luZG93LldlYlNvY2tldCA6IHJlcXVpcmUoJ3dzJyk7XG5cbmNvbnN0IHBhY2sgPSAoZCkgPT4gSlNPTi5zdHJpbmdpZnkoZCk7XG5jb25zdCB1bnBhY2sgPSAocykgPT4gSlNPTi5wYXJzZShzKTtcblxuY2xhc3MgV2ViU29ja2V0VHJhbnNwb3J0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLndzID0gbnVsbDtcbiAgICB0aGlzLnRyaWVzID0gMDtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QodHJpZXMgPSB0aGlzLnRyaWVzKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvcnQgPSA2NDYzICsgKHRyaWVzICUgMTApO1xuICAgIHRoaXMuaG9zdEFuZFBvcnQgPSBgMTI3LjAuMC4xOiR7cG9ydH1gO1xuICAgIGNvbnN0IHdzID0gdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoXG4gICAgICBgd3M6Ly8ke3RoaXMuaG9zdEFuZFBvcnR9Lz92PTEmY2xpZW50X2lkPSR7dGhpcy5jbGllbnQuY2xpZW50SWR9YCxcbiAgICAgIHtcbiAgICAgICAgb3JpZ2luOiB0aGlzLmNsaWVudC5vcHRpb25zLm9yaWdpbixcbiAgICAgIH0sXG4gICAgKTtcbiAgICB3cy5vbm9wZW4gPSB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpO1xuICAgIHdzLm9uY2xvc2UgPSB3cy5vbmVycm9yID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgd3Mub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNlbmQoZGF0YSkge1xuICAgIGlmICghdGhpcy53cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLndzLnNlbmQocGFjayhkYXRhKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMud3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy53cy5jbG9zZSgpO1xuICB9XG5cbiAgcGluZygpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHktZnVuY3Rpb25cblxuICBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCB1bnBhY2soZXZlbnQuZGF0YSkpO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICB9XG5cbiAgb25DbG9zZShlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnIpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICBjb25zdCBkZXJyID0gZS5jb2RlID49IDQwMDAgJiYgZS5jb2RlIDwgNTAwMDtcbiAgICBpZiAoIWUuY29kZSB8fCBkZXJyKSB7XG4gICAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgZSk7XG4gICAgfVxuICAgIGlmICghZGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29ubmVjdChlLmNvZGUgPT09IDEwMDYgPyArK3RoaXMudHJpZXMgOiAwKSwgMjUwKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXZWJTb2NrZXRUcmFuc3BvcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpcGM6IHJlcXVpcmUoJy4vaXBjJyksXG4gIHdlYnNvY2tldDogcmVxdWlyZSgnLi93ZWJzb2NrZXQnKSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgeyBzZXRUaW1lb3V0LCBjbGVhclRpbWVvdXQgfSA9IHJlcXVpcmUoJ3RpbWVycycpO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5jb25zdCB0cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzJyk7XG5jb25zdCB7IFJQQ0NvbW1hbmRzLCBSUENFdmVudHMsIFJlbGF0aW9uc2hpcFR5cGVzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgeyBwaWQ6IGdldFBpZCwgdXVpZCB9ID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmZ1bmN0aW9uIHN1YktleShldmVudCwgYXJncykge1xuICByZXR1cm4gYCR7ZXZlbnR9JHtKU09OLnN0cmluZ2lmeShhcmdzKX1gO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtSUENDbGllbnRPcHRpb25zfVxuICogQGV4dGVuZHMge0NsaWVudE9wdGlvbnN9XG4gKiBAcHJvcCB7c3RyaW5nfSB0cmFuc3BvcnQgUlBDIHRyYW5zcG9ydC4gb25lIG9mIGBpcGNgIG9yIGB3ZWJzb2NrZXRgXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFpbiBodWIgZm9yIGludGVyYWN0aW5nIHdpdGggRGlzY29yZCBSUENcbiAqIEBleHRlbmRzIHtCYXNlQ2xpZW50fVxuICovXG5jbGFzcyBSUENDbGllbnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtSUENDbGllbnRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIGNsaWVudC5cbiAgICogWW91IG11c3QgcHJvdmlkZSBhIHRyYW5zcG9ydFxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICB0aGlzLmNsaWVudElkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpY2F0aW9uIHVzZWQgaW4gdGhpcyBjbGllbnRcbiAgICAgKiBAdHlwZSB7P0NsaWVudEFwcGxpY2F0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuYXBwbGljYXRpb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVXNlciB1c2VkIGluIHRoaXMgYXBwbGljYXRpb25cbiAgICAgKiBAdHlwZSB7P1VzZXJ9XG4gICAgICovXG4gICAgdGhpcy51c2VyID0gbnVsbDtcblxuICAgIGNvbnN0IFRyYW5zcG9ydCA9IHRyYW5zcG9ydHNbb3B0aW9ucy50cmFuc3BvcnRdO1xuICAgIGlmICghVHJhbnNwb3J0KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSUENfSU5WQUxJRF9UUkFOU1BPUlQnLCBvcHRpb25zLnRyYW5zcG9ydCk7XG4gICAgfVxuXG4gICAgdGhpcy5mZXRjaCA9IChtZXRob2QsIHBhdGgsIHsgZGF0YSwgcXVlcnkgfSA9IHt9KSA9PlxuICAgICAgZmV0Y2goYCR7dGhpcy5mZXRjaC5lbmRwb2ludH0ke3BhdGh9JHtxdWVyeSA/IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpIDogJyd9YCwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5hY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbihhc3luYyAocikgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgci5qc29uKCk7XG4gICAgICAgIGlmICghci5vaykge1xuICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3Ioci5zdGF0dXMpO1xuICAgICAgICAgIGUuYm9keSA9IGJvZHk7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mZXRjaC5lbmRwb2ludCA9ICdodHRwczovL2Rpc2NvcmQuY29tL2FwaSc7XG5cbiAgICAvKipcbiAgICAgKiBSYXcgdHJhbnNwb3J0IHVzZXJkXG4gICAgICogQHR5cGUge1JQQ1RyYW5zcG9ydH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IFRyYW5zcG9ydCh0aGlzKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5vbignbWVzc2FnZScsIHRoaXMuX29uUnBjTWVzc2FnZS5iaW5kKHRoaXMpKTtcblxuICAgIC8qKlxuICAgICAqIE1hcCBvZiBub25jZXMgYmVpbmcgZXhwZWN0ZWQgZnJvbSB0aGUgdHJhbnNwb3J0XG4gICAgICogQHR5cGUge01hcH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVjdGluZyA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIE1hcCBvZiBjdXJyZW50IHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAdHlwZSB7TWFwfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKTtcblxuICAgIHRoaXMuX2Nvbm5lY3RQcm9taXNlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhbmQgY29ubmVjdCB0byBSUENcbiAgICovXG4gIGNvbm5lY3QoY2xpZW50SWQpIHtcbiAgICBpZiAodGhpcy5fY29ubmVjdFByb21pc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0UHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5fY29ubmVjdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKCdSUENfQ09OTkVDVElPTl9USU1FT1VUJykpLCAxMGUzKTtcbiAgICAgIHRpbWVvdXQudW5yZWYoKTtcbiAgICAgIHRoaXMub25jZSgnY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJhbnNwb3J0Lm9uY2UoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9leHBlY3RpbmcuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGUucmVqZWN0KG5ldyBFcnJvcignY29ubmVjdGlvbiBjbG9zZWQnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdjb25uZWN0aW9uIGNsb3NlZCcpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmFuc3BvcnQuY29ubmVjdCgpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtSUENMb2dpbk9wdGlvbnN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBDbGllbnQgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjbGllbnRTZWNyZXRdIENsaWVudCBzZWNyZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2Nlc3NUb2tlbl0gQWNjZXNzIHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcnBjVG9rZW5dIFJQQyB0b2tlblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rva2VuRW5kcG9pbnRdIFRva2VuIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzY29wZXNdIFNjb3BlcyB0byBhdXRob3JpemUgd2l0aFxuICAgKi9cblxuICAvKipcbiAgICogUGVyZm9ybXMgYXV0aGVudGljYXRpb24gZmxvdy4gQXV0b21hdGljYWxseSBjYWxscyBDbGllbnQjY29ubmVjdCBpZiBuZWVkZWQuXG4gICAqIEBwYXJhbSB7UlBDTG9naW5PcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIGF1dGhlbnRpY2F0aW9uLlxuICAgKiBBdCBsZWFzdCBvbmUgcHJvcGVydHkgbXVzdCBiZSBwcm92aWRlZCB0byBwZXJmb3JtIGxvZ2luLlxuICAgKiBAZXhhbXBsZSBjbGllbnQubG9naW4oeyBjbGllbnRJZDogJzEyMzQ1NjcnLCBjbGllbnRTZWNyZXQ6ICdhYmNkZWYxMjMnIH0pO1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSUENDbGllbnQ+fVxuICAgKi9cbiAgYXN5bmMgbG9naW4ob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHsgY2xpZW50SWQsIGFjY2Vzc1Rva2VuIH0gPSBvcHRpb25zO1xuICAgIGF3YWl0IHRoaXMuY29ubmVjdChjbGllbnRJZCk7XG4gICAgaWYgKCFvcHRpb25zLnNjb3Blcykge1xuICAgICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgIGFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5hdXRob3JpemUob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZShhY2Nlc3NUb2tlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY21kIENvbW1hbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzPXt9XSBBcmd1bWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtldnRdIEV2ZW50XG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVxdWVzdChjbWQsIGFyZ3MsIGV2dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBub25jZSA9IHV1aWQoKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQoeyBjbWQsIGFyZ3MsIGV2dCwgbm9uY2UgfSk7XG4gICAgICB0aGlzLl9leHBlY3Rpbmcuc2V0KG5vbmNlLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGhhbmRsZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgbWVzc2FnZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uUnBjTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UuY21kID09PSBSUENDb21tYW5kcy5ESVNQQVRDSCAmJiBtZXNzYWdlLmV2dCA9PT0gUlBDRXZlbnRzLlJFQURZKSB7XG4gICAgICBpZiAobWVzc2FnZS5kYXRhLnVzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbWVzc2FnZS5kYXRhLnVzZXI7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3RlZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZXhwZWN0aW5nLmhhcyhtZXNzYWdlLm5vbmNlKSkge1xuICAgICAgY29uc3QgeyByZXNvbHZlLCByZWplY3QgfSA9IHRoaXMuX2V4cGVjdGluZy5nZXQobWVzc2FnZS5ub25jZSk7XG4gICAgICBpZiAobWVzc2FnZS5ldnQgPT09ICdFUlJPUicpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcihtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIGUuY29kZSA9IG1lc3NhZ2UuZGF0YS5jb2RlO1xuICAgICAgICBlLmRhdGEgPSBtZXNzYWdlLmRhdGE7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUobWVzc2FnZS5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V4cGVjdGluZy5kZWxldGUobWVzc2FnZS5ub25jZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YmlkID0gc3ViS2V5KG1lc3NhZ2UuZXZ0LCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb25zLmhhcyhzdWJpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc3ViaWQpKG1lc3NhZ2UuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgYXV0aG9yaXplKHsgc2NvcGVzLCBjbGllbnRTZWNyZXQsIHJwY1Rva2VuLCByZWRpcmVjdFVyaSB9ID0ge30pIHtcbiAgICBpZiAoY2xpZW50U2VjcmV0ICYmIHJwY1Rva2VuID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5mZXRjaCgnUE9TVCcsICcvb2F1dGgyL3Rva2VuL3JwYycsIHtcbiAgICAgICAgZGF0YTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIHJwY1Rva2VuID0gYm9keS5ycGNfdG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ0FVVEhPUklaRScsIHtcbiAgICAgIHNjb3BlcyxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgIHJwY190b2tlbjogcnBjVG9rZW4sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2goJ1BPU1QnLCAnL29hdXRoMi90b2tlbicsIHtcbiAgICAgIGRhdGE6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgY29kZSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5hY2Nlc3NfdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogQXV0aGVudGljYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY2Nlc3NUb2tlbiBhY2Nlc3MgdG9rZW5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhdXRoZW50aWNhdGUoYWNjZXNzVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdBVVRIRU5USUNBVEUnLCB7IGFjY2Vzc190b2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAgIC50aGVuKCh7IGFwcGxpY2F0aW9uLCB1c2VyIH0pID0+IHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZldGNoIGEgZ3VpbGRcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIEd1aWxkIElEXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEd1aWxkPn1cbiAgICovXG4gIGdldEd1aWxkKGlkLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfR1VJTEQsIHsgZ3VpbGRfaWQ6IGlkLCB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIGFsbCBndWlsZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8Q29sbGVjdGlvbjxTbm93Zmxha2UsIEd1aWxkPj59XG4gICAqL1xuICBnZXRHdWlsZHModGltZW91dCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX0dVSUxEUywgeyB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNoYW5uZWxcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIENoYW5uZWwgSURcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8Q2hhbm5lbD59XG4gICAqL1xuICBnZXRDaGFubmVsKGlkLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfQ0hBTk5FTCwgeyBjaGFubmVsX2lkOiBpZCwgdGltZW91dCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNoYW5uZWxzXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBbaWRdIEd1aWxkIElEXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbGxlY3Rpb248U25vd2ZsYWtlLCBDaGFubmVsPj59XG4gICAqL1xuICBhc3luYyBnZXRDaGFubmVscyhpZCwgdGltZW91dCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IGF3YWl0IHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfQ0hBTk5FTFMsIHtcbiAgICAgIHRpbWVvdXQsXG4gICAgICBndWlsZF9pZDogaWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoYW5uZWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtDZXJ0aWZpZWREZXZpY2V9XG4gICAqIEBwcm9wIHtzdHJpbmd9IHR5cGUgT25lIG9mIGBBVURJT19JTlBVVGAsIGBBVURJT19PVVRQVVRgLCBgVklERU9fSU5QVVRgXG4gICAqIEBwcm9wIHtzdHJpbmd9IHV1aWQgVGhpcyBkZXZpY2UncyBXaW5kb3dzIFVVSURcbiAgICogQHByb3Age29iamVjdH0gdmVuZG9yIFZlbmRvciBpbmZvcm1hdGlvblxuICAgKiBAcHJvcCB7c3RyaW5nfSB2ZW5kb3IubmFtZSBWZW5kb3IncyBuYW1lXG4gICAqIEBwcm9wIHtzdHJpbmd9IHZlbmRvci51cmwgVmVuZG9yJ3MgdXJsXG4gICAqIEBwcm9wIHtvYmplY3R9IG1vZGVsIE1vZGVsIGluZm9ybWF0aW9uXG4gICAqIEBwcm9wIHtzdHJpbmd9IG1vZGVsLm5hbWUgTW9kZWwncyBuYW1lXG4gICAqIEBwcm9wIHtzdHJpbmd9IG1vZGVsLnVybCBNb2RlbCdzIHVybFxuICAgKiBAcHJvcCB7c3RyaW5nW119IHJlbGF0ZWQgQXJyYXkgb2YgcmVsYXRlZCBwcm9kdWN0J3MgV2luZG93cyBVVUlEc1xuICAgKiBAcHJvcCB7Ym9vbGVhbn0gZWNob0NhbmNlbGxhdGlvbiBJZiB0aGUgZGV2aWNlIGhhcyBlY2hvIGNhbmNlbGxhdGlvblxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gbm9pc2VTdXBwcmVzc2lvbiBJZiB0aGUgZGV2aWNlIGhhcyBub2lzZSBzdXBwcmVzc2lvblxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gYXV0b21hdGljR2FpbkNvbnRyb2wgSWYgdGhlIGRldmljZSBoYXMgYXV0b21hdGljIGdhaW4gY29udHJvbFxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gaGFyZHdhcmVNdXRlIElmIHRoZSBkZXZpY2UgaGFzIGEgaGFyZHdhcmUgbXV0ZVxuICAgKi9cblxuICAvKipcbiAgICogVGVsbCBkaXNjb3JkIHdoaWNoIGRldmljZXMgYXJlIGNlcnRpZmllZFxuICAgKiBAcGFyYW0ge0NlcnRpZmllZERldmljZVtdfSBkZXZpY2VzIENlcnRpZmllZCBkZXZpY2VzIHRvIHNlbmQgdG8gZGlzY29yZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldENlcnRpZmllZERldmljZXMoZGV2aWNlcykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX0NFUlRJRklFRF9ERVZJQ0VTLCB7XG4gICAgICBkZXZpY2VzOiBkZXZpY2VzLm1hcCgoZCkgPT4gKHtcbiAgICAgICAgdHlwZTogZC50eXBlLFxuICAgICAgICBpZDogZC51dWlkLFxuICAgICAgICB2ZW5kb3I6IGQudmVuZG9yLFxuICAgICAgICBtb2RlbDogZC5tb2RlbCxcbiAgICAgICAgcmVsYXRlZDogZC5yZWxhdGVkLFxuICAgICAgICBlY2hvX2NhbmNlbGxhdGlvbjogZC5lY2hvQ2FuY2VsbGF0aW9uLFxuICAgICAgICBub2lzZV9zdXBwcmVzc2lvbjogZC5ub2lzZVN1cHByZXNzaW9uLFxuICAgICAgICBhdXRvbWF0aWNfZ2Fpbl9jb250cm9sOiBkLmF1dG9tYXRpY0dhaW5Db250cm9sLFxuICAgICAgICBoYXJkd2FyZV9tdXRlOiBkLmhhcmR3YXJlTXV0ZSxcbiAgICAgIH0pKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7VXNlclZvaWNlU2V0dGluZ3N9XG4gICAqIEBwcm9wIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB1c2VyIHRoZXNlIHNldHRpbmdzIGFwcGx5IHRvXG4gICAqIEBwcm9wIHs/T2JqZWN0fSBbcGFuXSBQYW4gc2V0dGluZ3MsIGFuIG9iamVjdCB3aXRoIGBsZWZ0YCBhbmQgYHJpZ2h0YCBzZXQgYmV0d2VlblxuICAgKiAwLjAgYW5kIDEuMCwgaW5jbHVzaXZlXG4gICAqIEBwcm9wIHs/bnVtYmVyfSBbdm9sdW1lPTEwMF0gVGhlIHZvbHVtZVxuICAgKiBAcHJvcCB7Ym9vbH0gW211dGVdIElmIHRoZSB1c2VyIGlzIG11dGVkXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZvaWNlIHNldHRpbmdzIGZvciBhIHVlciwgYnkgaWRcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB1c2VyIHRvIHNldFxuICAgKiBAcGFyYW0ge1VzZXJWb2ljZVNldHRpbmdzfSBzZXR0aW5ncyBTZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFVzZXJWb2ljZVNldHRpbmdzKGlkLCBzZXR0aW5ncykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX1VTRVJfVk9JQ0VfU0VUVElOR1MsIHtcbiAgICAgIHVzZXJfaWQ6IGlkLFxuICAgICAgcGFuOiBzZXR0aW5ncy5wYW4sXG4gICAgICBtdXRlOiBzZXR0aW5ncy5tdXRlLFxuICAgICAgdm9sdW1lOiBzZXR0aW5ncy52b2x1bWUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgdXNlciB0byBhIHZvaWNlIGNoYW5uZWxcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB2b2ljZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZW91dF0gVGltZW91dCBmb3IgdGhlIGNvbW1hbmRcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mb3JjZV0gRm9yY2UgdGhpcyBtb3ZlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGRvbmUgaWYgeW91XG4gICAqIGhhdmUgZXhwbGljaXQgcGVybWlzc2lvbiBmcm9tIHRoZSB1c2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbGVjdFZvaWNlQ2hhbm5lbChpZCwgeyB0aW1lb3V0LCBmb3JjZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VMRUNUX1ZPSUNFX0NIQU5ORUwsIHsgY2hhbm5lbF9pZDogaWQsIHRpbWVvdXQsIGZvcmNlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHVzZXIgdG8gYSB0ZXh0IGNoYW5uZWxcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB2b2ljZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZW91dF0gVGltZW91dCBmb3IgdGhlIGNvbW1hbmRcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mb3JjZV0gRm9yY2UgdGhpcyBtb3ZlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGRvbmUgaWYgeW91XG4gICAqIGhhdmUgZXhwbGljaXQgcGVybWlzc2lvbiBmcm9tIHRoZSB1c2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbGVjdFRleHRDaGFubmVsKGlkLCB7IHRpbWVvdXQsIGZvcmNlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRUxFQ1RfVEVYVF9DSEFOTkVMLCB7IGNoYW5uZWxfaWQ6IGlkLCB0aW1lb3V0LCBmb3JjZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCB2b2ljZSBzZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldFZvaWNlU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfVk9JQ0VfU0VUVElOR1MpXG4gICAgICAudGhlbigocykgPT4gKHtcbiAgICAgICAgYXV0b21hdGljR2FpbkNvbnRyb2w6IHMuYXV0b21hdGljX2dhaW5fY29udHJvbCxcbiAgICAgICAgZWNob0NhbmNlbGxhdGlvbjogcy5lY2hvX2NhbmNlbGxhdGlvbixcbiAgICAgICAgbm9pc2VTdXBwcmVzc2lvbjogcy5ub2lzZV9zdXBwcmVzc2lvbixcbiAgICAgICAgcW9zOiBzLnFvcyxcbiAgICAgICAgc2lsZW5jZVdhcm5pbmc6IHMuc2lsZW5jZV93YXJuaW5nLFxuICAgICAgICBkZWFmOiBzLmRlYWYsXG4gICAgICAgIG11dGU6IHMubXV0ZSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICBhdmFpbGFibGVEZXZpY2VzOiBzLmlucHV0LmF2YWlsYWJsZV9kZXZpY2VzLFxuICAgICAgICAgIGRldmljZTogcy5pbnB1dC5kZXZpY2VfaWQsXG4gICAgICAgICAgdm9sdW1lOiBzLmlucHV0LnZvbHVtZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgYXZhaWxhYmxlRGV2aWNlczogcy5vdXRwdXQuYXZhaWxhYmxlX2RldmljZXMsXG4gICAgICAgICAgZGV2aWNlOiBzLm91dHB1dC5kZXZpY2VfaWQsXG4gICAgICAgICAgdm9sdW1lOiBzLm91dHB1dC52b2x1bWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGU6IHtcbiAgICAgICAgICB0eXBlOiBzLm1vZGUudHlwZSxcbiAgICAgICAgICBhdXRvVGhyZXNob2xkOiBzLm1vZGUuYXV0b190aHJlc2hvbGQsXG4gICAgICAgICAgdGhyZXNob2xkOiBzLm1vZGUudGhyZXNob2xkLFxuICAgICAgICAgIHNob3J0Y3V0OiBzLm1vZGUuc2hvcnRjdXQsXG4gICAgICAgICAgZGVsYXk6IHMubW9kZS5kZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY3VycmVudCB2b2ljZSBzZXR0aW5ncywgb3ZlcnJpZGluZyB0aGUgY3VycmVudCBzZXR0aW5ncyB1bnRpbCB0aGlzIHNlc3Npb24gZGlzY29ubmVjdHMuXG4gICAqIFRoaXMgYWxzbyBsb2NrcyB0aGUgc2V0dGluZ3MgZm9yIGFueSBvdGhlciBycGMgc2Vzc2lvbnMgd2hpY2ggbWF5IGJlIGNvbm5lY3RlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgU2V0dGluZ3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRWb2ljZVNldHRpbmdzKGFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9WT0lDRV9TRVRUSU5HUywge1xuICAgICAgYXV0b21hdGljX2dhaW5fY29udHJvbDogYXJncy5hdXRvbWF0aWNHYWluQ29udHJvbCxcbiAgICAgIGVjaG9fY2FuY2VsbGF0aW9uOiBhcmdzLmVjaG9DYW5jZWxsYXRpb24sXG4gICAgICBub2lzZV9zdXBwcmVzc2lvbjogYXJncy5ub2lzZVN1cHByZXNzaW9uLFxuICAgICAgcW9zOiBhcmdzLnFvcyxcbiAgICAgIHNpbGVuY2Vfd2FybmluZzogYXJncy5zaWxlbmNlV2FybmluZyxcbiAgICAgIGRlYWY6IGFyZ3MuZGVhZixcbiAgICAgIG11dGU6IGFyZ3MubXV0ZSxcbiAgICAgIGlucHV0OiBhcmdzLmlucHV0ID8ge1xuICAgICAgICBkZXZpY2VfaWQ6IGFyZ3MuaW5wdXQuZGV2aWNlLFxuICAgICAgICB2b2x1bWU6IGFyZ3MuaW5wdXQudm9sdW1lLFxuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIG91dHB1dDogYXJncy5vdXRwdXQgPyB7XG4gICAgICAgIGRldmljZV9pZDogYXJncy5vdXRwdXQuZGV2aWNlLFxuICAgICAgICB2b2x1bWU6IGFyZ3Mub3V0cHV0LnZvbHVtZSxcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBtb2RlOiBhcmdzLm1vZGUgPyB7XG4gICAgICAgIG1vZGU6IGFyZ3MubW9kZS50eXBlLFxuICAgICAgICBhdXRvX3RocmVzaG9sZDogYXJncy5tb2RlLmF1dG9UaHJlc2hvbGQsXG4gICAgICAgIHRocmVzaG9sZDogYXJncy5tb2RlLnRocmVzaG9sZCxcbiAgICAgICAgc2hvcnRjdXQ6IGFyZ3MubW9kZS5zaG9ydGN1dCxcbiAgICAgICAgZGVsYXk6IGFyZ3MubW9kZS5kZWxheSxcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FwdHVyZSBhIHNob3J0Y3V0IHVzaW5nIHRoZSBjbGllbnRcbiAgICogVGhlIGNhbGxiYWNrIHRha2VzIChrZXksIHN0b3ApIHdoZXJlIGBzdG9wYCBpcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzdG9wIGNhcHR1cmluZy5cbiAgICogVGhpcyBgc3RvcGAgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGRpc2Nvbm5lY3Rpbmcgb3IgZWxzZSB0aGUgdXNlciB3aWxsIGhhdmVcbiAgICogdG8gcmVzdGFydCB0aGVpciBjbGllbnQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGhhbmRsaW5nIGtleXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RnVuY3Rpb24+fVxuICAgKi9cbiAgY2FwdHVyZVNob3J0Y3V0KGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc3ViaWQgPSBzdWJLZXkoUlBDRXZlbnRzLkNBUFRVUkVfU0hPUlRDVVRfQ0hBTkdFKTtcbiAgICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5kZWxldGUoc3ViaWQpO1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DQVBUVVJFX1NIT1JUQ1VULCB7IGFjdGlvbjogJ1NUT1AnIH0pO1xuICAgIH07XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5zZXQoc3ViaWQsICh7IHNob3J0Y3V0IH0pID0+IHtcbiAgICAgIGNhbGxiYWNrKHNob3J0Y3V0LCBzdG9wKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkNBUFRVUkVfU0hPUlRDVVQsIHsgYWN0aW9uOiAnU1RBUlQnIH0pXG4gICAgICAudGhlbigoKSA9PiBzdG9wKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcmVzZW5jZSBmb3IgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXJncyBUaGUgcmljaCBwcmVzZW5jZSB0byBwYXNzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BpZF0gVGhlIGFwcGxpY2F0aW9uJ3MgcHJvY2VzcyBJRC4gRGVmYXVsdHMgdG8gdGhlIGV4ZWN1dGluZyBwcm9jZXNzJyBQSUQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0QWN0aXZpdHkoYXJncyA9IHt9LCBwaWQgPSBnZXRQaWQoKSkge1xuICAgIGxldCB0aW1lc3RhbXBzO1xuICAgIGxldCBhc3NldHM7XG4gICAgbGV0IHBhcnR5O1xuICAgIGxldCBzZWNyZXRzO1xuICAgIGlmIChhcmdzLnN0YXJ0VGltZXN0YW1wIHx8IGFyZ3MuZW5kVGltZXN0YW1wKSB7XG4gICAgICB0aW1lc3RhbXBzID0ge1xuICAgICAgICBzdGFydDogYXJncy5zdGFydFRpbWVzdGFtcCxcbiAgICAgICAgZW5kOiBhcmdzLmVuZFRpbWVzdGFtcCxcbiAgICAgIH07XG4gICAgICBpZiAodGltZXN0YW1wcy5zdGFydCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdGltZXN0YW1wcy5zdGFydCA9IE1hdGgucm91bmQodGltZXN0YW1wcy5zdGFydC5nZXRUaW1lKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzdGFtcHMuZW5kIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aW1lc3RhbXBzLmVuZCA9IE1hdGgucm91bmQodGltZXN0YW1wcy5lbmQuZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lc3RhbXBzLnN0YXJ0ID4gMjE0NzQ4MzY0NzAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGltZXN0YW1wcy5zdGFydCBtdXN0IGZpdCBpbnRvIGEgdW5peCB0aW1lc3RhbXAnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lc3RhbXBzLmVuZCA+IDIxNDc0ODM2NDcwMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RpbWVzdGFtcHMuZW5kIG11c3QgZml0IGludG8gYSB1bml4IHRpbWVzdGFtcCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBhcmdzLmxhcmdlSW1hZ2VLZXkgfHwgYXJncy5sYXJnZUltYWdlVGV4dFxuICAgICAgfHwgYXJncy5zbWFsbEltYWdlS2V5IHx8IGFyZ3Muc21hbGxJbWFnZVRleHRcbiAgICApIHtcbiAgICAgIGFzc2V0cyA9IHtcbiAgICAgICAgbGFyZ2VfaW1hZ2U6IGFyZ3MubGFyZ2VJbWFnZUtleSxcbiAgICAgICAgbGFyZ2VfdGV4dDogYXJncy5sYXJnZUltYWdlVGV4dCxcbiAgICAgICAgc21hbGxfaW1hZ2U6IGFyZ3Muc21hbGxJbWFnZUtleSxcbiAgICAgICAgc21hbGxfdGV4dDogYXJncy5zbWFsbEltYWdlVGV4dCxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhcmdzLnBhcnR5U2l6ZSB8fCBhcmdzLnBhcnR5SWQgfHwgYXJncy5wYXJ0eU1heCkge1xuICAgICAgcGFydHkgPSB7IGlkOiBhcmdzLnBhcnR5SWQgfTtcbiAgICAgIGlmIChhcmdzLnBhcnR5U2l6ZSB8fCBhcmdzLnBhcnR5TWF4KSB7XG4gICAgICAgIHBhcnR5LnNpemUgPSBbYXJncy5wYXJ0eVNpemUsIGFyZ3MucGFydHlNYXhdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJncy5tYXRjaFNlY3JldCB8fCBhcmdzLmpvaW5TZWNyZXQgfHwgYXJncy5zcGVjdGF0ZVNlY3JldCkge1xuICAgICAgc2VjcmV0cyA9IHtcbiAgICAgICAgbWF0Y2g6IGFyZ3MubWF0Y2hTZWNyZXQsXG4gICAgICAgIGpvaW46IGFyZ3Muam9pblNlY3JldCxcbiAgICAgICAgc3BlY3RhdGU6IGFyZ3Muc3BlY3RhdGVTZWNyZXQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX0FDVElWSVRZLCB7XG4gICAgICBwaWQsXG4gICAgICBhY3Rpdml0eToge1xuICAgICAgICBzdGF0ZTogYXJncy5zdGF0ZSxcbiAgICAgICAgZGV0YWlsczogYXJncy5kZXRhaWxzLFxuICAgICAgICB0aW1lc3RhbXBzLFxuICAgICAgICBhc3NldHMsXG4gICAgICAgIHBhcnR5LFxuICAgICAgICBzZWNyZXRzLFxuICAgICAgICBpbnN0YW5jZTogISFhcmdzLmluc3RhbmNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnRseSBzZXQgcHJlc2VuY2UsIGlmIGFueS4gVGhpcyB3aWxsIGhpZGUgdGhlIFwiUGxheWluZyBYXCIgbWVzc2FnZVxuICAgKiBkaXNwbGF5ZWQgYmVsb3cgdGhlIHVzZXIncyBuYW1lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BpZF0gVGhlIGFwcGxpY2F0aW9uJ3MgcHJvY2VzcyBJRC4gRGVmYXVsdHMgdG8gdGhlIGV4ZWN1dGluZyBwcm9jZXNzJyBQSUQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY2xlYXJBY3Rpdml0eShwaWQgPSBnZXRQaWQoKSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX0FDVElWSVRZLCB7XG4gICAgICBwaWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW52aXRlIGEgdXNlciB0byBqb2luIHRoZSBnYW1lIHRoZSBSUEMgdXNlciBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIHVzZXIgdG8gaW52aXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2VuZEpvaW5JbnZpdGUodXNlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VORF9BQ1RJVklUWV9KT0lOX0lOVklURSwge1xuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgdG8gam9pbiB0aGUgZ2FtZSB0aGUgdXNlciBpcyBwbGF5aW5nXG4gICAqIEBwYXJhbSB7VXNlcn0gdXNlciBUaGUgdXNlciB3aG9zZSBnYW1lIHlvdSB3YW50IHRvIHJlcXVlc3QgdG8gam9pblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbmRKb2luUmVxdWVzdCh1c2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRU5EX0FDVElWSVRZX0pPSU5fUkVRVUVTVCwge1xuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlamVjdCBhIGpvaW4gcmVxdWVzdCBmcm9tIGEgdXNlclxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIHVzZXIgd2hvc2UgcmVxdWVzdCB5b3Ugd2lzaCB0byByZWplY3RcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBjbG9zZUpvaW5SZXF1ZXN0KHVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkNMT1NFX0FDVElWSVRZX0pPSU5fUkVRVUVTVCwge1xuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTG9iYnkodHlwZSwgY2FwYWNpdHksIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DUkVBVEVfTE9CQlksIHtcbiAgICAgIHR5cGUsXG4gICAgICBjYXBhY2l0eSxcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTG9iYnkobG9iYnksIHsgdHlwZSwgb3duZXIsIGNhcGFjaXR5LCBtZXRhZGF0YSB9ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVQREFURV9MT0JCWSwge1xuICAgICAgaWQ6IGxvYmJ5LmlkIHx8IGxvYmJ5LFxuICAgICAgdHlwZSxcbiAgICAgIG93bmVyX2lkOiAob3duZXIgJiYgb3duZXIuaWQpIHx8IG93bmVyLFxuICAgICAgY2FwYWNpdHksXG4gICAgICBtZXRhZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUxvYmJ5KGxvYmJ5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5ERUxFVEVfTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbm5lY3RUb0xvYmJ5KGlkLCBzZWNyZXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkNPTk5FQ1RfVE9fTE9CQlksIHtcbiAgICAgIGlkLFxuICAgICAgc2VjcmV0LFxuICAgIH0pO1xuICB9XG5cbiAgc2VuZFRvTG9iYnkobG9iYnksIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTkRfVE9fTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBkaXNjb25uZWN0RnJvbUxvYmJ5KGxvYmJ5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5ESVNDT05ORUNUX0ZST01fTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUxvYmJ5TWVtYmVyKGxvYmJ5LCB1c2VyLCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuVVBEQVRFX0xPQkJZX01FTUJFUiwge1xuICAgICAgbG9iYnlfaWQ6IGxvYmJ5LmlkIHx8IGxvYmJ5LFxuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgICAgbWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWxhdGlvbnNoaXBzKCkge1xuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoUmVsYXRpb25zaGlwVHlwZXMpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX1JFTEFUSU9OU0hJUFMpXG4gICAgICAudGhlbigobykgPT4gby5yZWxhdGlvbnNoaXBzLm1hcCgocikgPT4gKHtcbiAgICAgICAgLi4ucixcbiAgICAgICAgdHlwZTogdHlwZXNbci50eXBlXSxcbiAgICAgIH0pKSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBOYW1lIG9mIGV2ZW50IGUuZy4gYE1FU1NBR0VfQ1JFQVRFYFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2FyZ3NdIEFyZ3MgZm9yIGV2ZW50IGUuZy4gYHsgY2hhbm5lbF9pZDogJzEyMzQnIH1gXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHdoZW4gYW4gZXZlbnQgZm9yIHRoZSBzdWJzY3JpcHRpb24gaXMgdHJpZ2dlcmVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59XG4gICAqL1xuICBzdWJzY3JpYmUoZXZlbnQsIGFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjayAmJiB0eXBlb2YgYXJncyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBhcmdzO1xuICAgICAgYXJncyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TVUJTQ1JJQkUsIGFyZ3MsIGV2ZW50KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHN1YmlkID0gc3ViS2V5KGV2ZW50LCBhcmdzKTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuc2V0KHN1YmlkLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVOU1VCU0NSSUJFLCBhcmdzLCBldmVudClcbiAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9zdWJzY3JpcHRpb25zLmRlbGV0ZShzdWJpZCkpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBjbGllbnRcbiAgICovXG4gIGFzeW5jIGRlc3Ryb3koKSB7XG4gICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJQQ0NsaWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2xpZW50OiByZXF1aXJlKCcuL2NsaWVudCcpLFxuICByZWdpc3RlcihpZCkge1xuICAgIHJldHVybiB1dGlsLnJlZ2lzdGVyKGBkaXNjb3JkLSR7aWR9YCk7XG4gIH0sXG59O1xuIiwiZXhwb3J0IGNsYXNzIERpc2NvcmRSUENTZXR0aW5ncyB7XG4gIHNob3dWYXVsdE5hbWU6IGJvb2xlYW4gPSB0cnVlO1xuICBzaG93Q3VycmVudEZpbGVOYW1lOiBib29sZWFuID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGVudW0gUGx1Z2luU3RhdGUge1xuICBjb25uZWN0ZWQsXG4gIGNvbm5lY3RpbmcsXG4gIGRpc2Nvbm5lY3RlZCxcbn1cbiIsImltcG9ydCB7IFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBPYnNpZGlhbkRpc2NvcmRSUEMgZnJvbSBcInNyYy9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBEaXNjb3JkUlBDU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb25zdCBwbHVnaW46IE9ic2lkaWFuRGlzY29yZFJQQyA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xuXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogXCJEaXNjb3JkIFJpY2ggUHJlc2VuY2UgU2V0dGluZ3NcIiB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTaG93IFZhdWx0IE5hbWVcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkVuYWJsZSB0aGlzIHRvIHNob3cgdGhlIG5hbWUgb2YgdGhlIHZhdWx0IHlvdSBhcmUgd29ya2luZyB3aXRoLlwiXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PlxuICAgICAgICBib29sZWFuLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5zaG93VmF1bHROYW1lKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd1ZhdWx0TmFtZSA9IHZhbHVlO1xuICAgICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eSh0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksIFwiLi4uXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTaG93IEN1cnJlbnQgRmlsZSBOYW1lXCIpXG4gICAgICAuc2V0RGVzYyhcIkVuYWJsZSB0aGlzIHRvIHNob3cgdGhlIG5hbWUgb2YgdGhlIGZpbGUgeW91IGFyZSB3b3JraW5nIG9uLlwiKVxuICAgICAgLmFkZFRvZ2dsZSgoYm9vbGVhbikgPT5cbiAgICAgICAgYm9vbGVhblxuICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd0N1cnJlbnRGaWxlTmFtZSlcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd0N1cnJlbnRGaWxlTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkodGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLCBcIi4uLlwiKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIHtcbiAgcHJpdmF0ZSBzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5zdGF0dXNCYXJFbCA9IHN0YXR1c0JhckVsO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKHN0YXRlOiBQbHVnaW5TdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29ubmVjdGVkOlxuICAgICAgICB0aGlzLmRpc3BsYXlDb25uZWN0ZWQoMjAwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5jb25uZWN0aW5nOlxuICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYENvbm5lY3RpbmcgdG8gRGlzY29yZC4uLmApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuZGlzY29ubmVjdGVkOlxuICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYFxcdXsxRjVEOH0gUmVjb25uZWN0IHRvIERpc2NvcmRgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUNvbm5lY3RlZCh0aW1lb3V0OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYFxcdXsxRjMwRH0gQ29ubmVjdGVkIHRvIERpc2NvcmRgKTtcblxuICAgIGlmICh0aW1lb3V0ICYmIHRpbWVvdXQgPiAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgXFx1ezFGMzBEfWApO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiZGlzY29yZC1ycGNcIjtcclxuaW1wb3J0IHsgUGx1Z2luLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBEaXNjb3JkUlBDU2V0dGluZ3MsIFBsdWdpblN0YXRlIH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRGlzY29yZFJQQ1NldHRpbmdzVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MtdGFiXCI7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL3N0YXR1cy1iYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuRGlzY29yZFJQQyBleHRlbmRzIFBsdWdpbiB7XHJcbiAgcHVibGljIHN0YXRlOiBQbHVnaW5TdGF0ZTtcclxuICBwdWJsaWMgc2V0dGluZ3M6IERpc2NvcmRSUENTZXR0aW5ncztcclxuICBwdWJsaWMgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XHJcbiAgcHVibGljIHJwYzogQ2xpZW50O1xyXG5cclxuICBzZXRTdGF0ZShzdGF0ZTogUGx1Z2luU3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFN0YXRlKCk6IFBsdWdpblN0YXRlIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25sb2FkKCkge1xyXG4gICAgbGV0IHN0YXR1c0JhckVsID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XHJcbiAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIoc3RhdHVzQmFyRWwpO1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSAoYXdhaXQgdGhpcy5sb2FkRGF0YSgpKSB8fCBuZXcgRGlzY29yZFJQQ1NldHRpbmdzKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxyXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJmaWxlLW9wZW5cIiwgdGhpcy5vbkZpbGVPcGVuLCB0aGlzKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoc3RhdHVzQmFyRWwsIFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXRTdGF0ZSgpID09IFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdERpc2NvcmQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBEaXNjb3JkUlBDU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcbiAgICBhd2FpdCB0aGlzLmNvbm5lY3REaXNjb3JkKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkZpbGVPcGVuKGZpbGU6IFRGaWxlKSB7XHJcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgpID09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNldEFjdGl2aXR5KHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSwgZmlsZS5iYXNlbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbnVubG9hZCgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgICB0aGlzLnJwYy5jbGVhckFjdGl2aXR5KCk7XHJcbiAgICB0aGlzLnJwYy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb25uZWN0RGlzY29yZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMucnBjID0gbmV3IENsaWVudCh7XHJcbiAgICAgIHRyYW5zcG9ydDogXCJpcGNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29ubmVjdGluZyk7XHJcbiAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuXHJcbiAgICB0aGlzLnJwYy5vbmNlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmNvbm5lY3RlZCk7XHJcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZSh0aGlzLmdldFN0YXRlKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5ycGMubG9naW4oe1xyXG4gICAgICAgIGNsaWVudElkOiBcIjc2MzgxMzE4NTAyMjE5NzgzMVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdGhpcy5zZXRBY3Rpdml0eSh0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksIFwiLi4uXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQpO1xyXG4gICAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNldEFjdGl2aXR5KHZhdWx0TmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93VmF1bHROYW1lICYmIHRoaXMuc2V0dGluZ3Muc2hvd0N1cnJlbnRGaWxlTmFtZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgZGV0YWlsczogYEVkaXRpbmcgJHtmaWxlTmFtZX1gLFxyXG4gICAgICAgIHN0YXRlOiBgVmF1bHQ6ICR7dmF1bHROYW1lfWAsXHJcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1ZhdWx0TmFtZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgc3RhdGU6IGBWYXVsdDogJHt2YXVsdE5hbWV9YCxcclxuICAgICAgICBzdGFydFRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImxvZ29cIixcclxuICAgICAgICBsYXJnZUltYWdlVGV4dDogXCJPYnNpZGlhblwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5zaG93Q3VycmVudEZpbGVOYW1lKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucnBjLnNldEFjdGl2aXR5KHtcclxuICAgICAgICBkZXRhaWxzOiBgRWRpdGluZyAke2ZpbGVOYW1lfWAsXHJcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwibmV0IiwiZmV0Y2giLCJFdmVudEVtaXR0ZXIiLCJicm93c2VyIiwicmVxdWlyZSQkMSIsInNldFRpbWVvdXQiLCJSUENDb21tYW5kcyIsIlJQQ0V2ZW50cyIsIlJlbGF0aW9uc2hpcFR5cGVzIiwidXVpZCIsInJlcXVpcmUkJDIiLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsIkNsaWVudCIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFv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
