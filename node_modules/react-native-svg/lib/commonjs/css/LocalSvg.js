"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalSvg = LocalSvg;
exports.default = exports.WithLocalSvg = void 0;
exports.getUriFromSource = getUriFromSource;
exports.isUriAnAndroidResourceIdentifier = isUriAnAndroidResourceIdentifier;
exports.loadAndroidRawResource = loadAndroidRawResource;
exports.loadLocalRawResource = void 0;
exports.loadLocalRawResourceAndroid = loadLocalRawResourceAndroid;
exports.loadLocalRawResourceDefault = loadLocalRawResourceDefault;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = require("react-native-svg");
var _css = require("./css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function getUriFromSource(source) {
  const resolvedAssetSource = _reactNative.Image.resolveAssetSource(source);
  return resolvedAssetSource.uri;
}
function loadLocalRawResourceDefault(source) {
  const uri = getUriFromSource(source);
  return (0, _reactNativeSvg.fetchText)(uri);
}
function isUriAnAndroidResourceIdentifier(uri) {
  return typeof uri === 'string' && uri.indexOf('/') <= -1;
}
async function loadAndroidRawResource(uri) {
  try {
    const RNSVGRenderableModule =
    // neeeded for new arch
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../fabric/NativeSvgRenderableModule').default;
    return await RNSVGRenderableModule.getRawResource(uri);
  } catch (e) {
    console.error('Error in RawResourceUtils while trying to natively load an Android raw resource: ', e);
    return null;
  }
}
function loadLocalRawResourceAndroid(source) {
  const uri = getUriFromSource(source);
  if (isUriAnAndroidResourceIdentifier(uri)) {
    return loadAndroidRawResource(uri);
  } else {
    return (0, _reactNativeSvg.fetchText)(uri);
  }
}
const loadLocalRawResource = _reactNative.Platform.OS !== 'android' ? loadLocalRawResourceDefault : loadLocalRawResourceAndroid;
exports.loadLocalRawResource = loadLocalRawResource;
function LocalSvg(props) {
  const {
    asset,
    ...rest
  } = props;
  const [xml, setXml] = (0, React.useState)(null);
  (0, React.useEffect)(() => {
    loadLocalRawResource(asset).then(setXml);
  }, [asset]);
  return /*#__PURE__*/React.createElement(_css.SvgCss, _extends({
    xml: xml
  }, rest));
}
class WithLocalSvg extends React.Component {
  state = {
    xml: null
  };
  componentDidMount() {
    this.load(this.props.asset);
  }
  componentDidUpdate(prevProps) {
    const {
      asset
    } = this.props;
    if (asset !== prevProps.asset) {
      this.load(asset);
    }
  }
  async load(asset) {
    try {
      this.setState({
        xml: asset ? await loadLocalRawResource(asset) : null
      });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    const {
      props,
      state: {
        xml
      }
    } = this;
    return /*#__PURE__*/React.createElement(_css.SvgWithCss, {
      xml: xml,
      override: props
    });
  }
}
exports.WithLocalSvg = WithLocalSvg;
var _default = LocalSvg;
exports.default = _default;
//# sourceMappingURL=LocalSvg.js.map