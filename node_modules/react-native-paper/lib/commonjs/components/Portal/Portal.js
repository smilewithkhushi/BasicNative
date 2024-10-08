"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _PortalConsumer = _interopRequireDefault(require("./PortalConsumer"));
var _PortalHost = _interopRequireWildcard(require("./PortalHost"));
var _settings = require("../../core/settings");
var _theming = require("../../core/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Portal allows rendering a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](PortalHost) component to be rendered somewhere in the parent tree.
 * Note that if you're using the `Provider` component, this already includes a `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal>
 *     <Text>This is rendered at a different place</Text>
 *   </Portal>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Portal extends React.Component {
  // @component ./PortalHost.tsx
  static Host = _PortalHost.default;
  render() {
    const {
      children,
      theme
    } = this.props;
    return /*#__PURE__*/React.createElement(_settings.Consumer, null, settings => /*#__PURE__*/React.createElement(_PortalHost.PortalContext.Consumer, null, manager => /*#__PURE__*/React.createElement(_PortalConsumer.default, {
      manager: manager
    }, /*#__PURE__*/React.createElement(_settings.Provider, {
      value: settings
    }, /*#__PURE__*/React.createElement(_theming.ThemeProvider, {
      theme: theme
    }, children)))));
  }
}
var _default = (0, _theming.withInternalTheme)(Portal);
exports.default = _default;
//# sourceMappingURL=Portal.js.map