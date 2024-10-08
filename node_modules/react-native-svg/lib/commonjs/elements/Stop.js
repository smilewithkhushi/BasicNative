"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
class Stop extends _react.Component {
  static displayName = 'Stop';
  setNativeProps = () => {
    const {
      parent
    } = this.props;
    if (parent) {
      parent.forceUpdate();
    }
  };
  render() {
    return null;
  }
}
exports.default = Stop;
//# sourceMappingURL=Stop.js.map