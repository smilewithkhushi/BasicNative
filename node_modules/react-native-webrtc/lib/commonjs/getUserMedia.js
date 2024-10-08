"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserMedia;
var _reactNative = require("react-native");
var _MediaStream = _interopRequireDefault(require("./MediaStream"));
var _MediaStreamError = _interopRequireDefault(require("./MediaStreamError"));
var _Permissions = _interopRequireDefault(require("./Permissions"));
var RTCUtil = _interopRequireWildcard(require("./RTCUtil"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  WebRTCModule
} = _reactNative.NativeModules;
function getUserMedia() {
  let constraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // According to
  // https://www.w3.org/TR/mediacapture-streams/#dom-mediadevices-getusermedia,
  // the constraints argument is a dictionary of type MediaStreamConstraints.
  if (typeof constraints !== 'object') {
    return Promise.reject(new TypeError('constraints is not a dictionary'));
  }
  if ((typeof constraints.audio === 'undefined' || !constraints.audio) && (typeof constraints.video === 'undefined' || !constraints.video)) {
    return Promise.reject(new TypeError('audio and/or video is required'));
  }

  // Normalize constraints.
  constraints = RTCUtil.normalizeConstraints(constraints);

  // Request required permissions
  const reqPermissions = [];
  if (constraints.audio) {
    reqPermissions.push(_Permissions.default.request({
      name: 'microphone'
    }));
  } else {
    reqPermissions.push(Promise.resolve(false));
  }
  if (constraints.video) {
    reqPermissions.push(_Permissions.default.request({
      name: 'camera'
    }));
  } else {
    reqPermissions.push(Promise.resolve(false));
  }
  return new Promise((resolve, reject) => {
    Promise.all(reqPermissions).then(results => {
      const [audioPerm, videoPerm] = results;

      // Check permission results and remove unneeded permissions.

      if (!audioPerm && !videoPerm) {
        // https://www.w3.org/TR/mediacapture-streams/#dom-mediadevices-getusermedia
        // step 4
        const error = {
          message: 'Permission denied.',
          name: 'SecurityError'
        };
        reject(new _MediaStreamError.default(error));
        return;
      }
      audioPerm || delete constraints.audio;
      videoPerm || delete constraints.video;
      const success = (id, tracks) => {
        // Store initial constraints.
        for (const trackInfo of tracks) {
          const c = constraints[trackInfo.kind];
          if (typeof c === 'object') {
            trackInfo.constraints = RTCUtil.deepClone(c);
          }
        }
        const info = {
          streamId: id,
          streamReactTag: id,
          tracks
        };
        resolve(new _MediaStream.default(info));
      };
      const failure = (type, message) => {
        let error;
        switch (type) {
          case 'TypeError':
            error = new TypeError(message);
            break;
        }
        if (!error) {
          error = new _MediaStreamError.default({
            message,
            name: type
          });
        }
        reject(error);
      };
      WebRTCModule.getUserMedia(constraints, success, failure);
    });
  });
}
//# sourceMappingURL=getUserMedia.js.map