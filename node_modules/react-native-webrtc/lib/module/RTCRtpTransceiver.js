function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { NativeModules } from 'react-native';
const {
  WebRTCModule
} = NativeModules;
export default class RTCRtpTransceiver {
  constructor(args) {
    var _args$mid, _args$currentDirectio;
    _defineProperty(this, "_peerConnectionId", void 0);
    _defineProperty(this, "_sender", void 0);
    _defineProperty(this, "_receiver", void 0);
    _defineProperty(this, "_mid", null);
    _defineProperty(this, "_direction", void 0);
    _defineProperty(this, "_currentDirection", void 0);
    _defineProperty(this, "_stopped", void 0);
    this._peerConnectionId = args.peerConnectionId;
    this._mid = (_args$mid = args.mid) !== null && _args$mid !== void 0 ? _args$mid : null;
    this._direction = args.direction;
    this._currentDirection = (_args$currentDirectio = args.currentDirection) !== null && _args$currentDirectio !== void 0 ? _args$currentDirectio : null;
    this._stopped = Boolean(args.isStopped);
    this._sender = args.sender;
    this._receiver = args.receiver;
  }
  get mid() {
    return this._mid;
  }
  get stopped() {
    return this._stopped;
  }
  get direction() {
    return this._direction;
  }
  set direction(val) {
    if (!['sendonly', 'recvonly', 'sendrecv', 'inactive'].includes(val)) {
      throw new TypeError('Invalid direction provided');
    }
    if (this._stopped) {
      throw new Error('Transceiver Stopped');
    }
    if (this._direction === val) {
      return;
    }
    const oldDirection = this._direction;
    WebRTCModule.transceiverSetDirection(this._peerConnectionId, this.sender.id, val).catch(() => {
      this._direction = oldDirection;
    });
    this._direction = val;
  }
  get currentDirection() {
    return this._currentDirection;
  }
  get sender() {
    return this._sender;
  }
  get receiver() {
    return this._receiver;
  }
  stop() {
    if (this._stopped) {
      return;
    }
    WebRTCModule.transceiverStop(this._peerConnectionId, this.sender.id).then(() => this._setStopped());
  }
  setCodecPreferences(codecs) {
    WebRTCModule.transceiverSetCodecPreferences(this._peerConnectionId, this.sender.id, codecs);
  }
  _setStopped() {
    this._stopped = true;
    this._direction = 'stopped';
    this._currentDirection = 'stopped';
    this._mid = null;
  }
}
//# sourceMappingURL=RTCRtpTransceiver.js.map