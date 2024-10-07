function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { useState, useEffect, Component } from 'react';
import { Platform, Image } from 'react-native';
import { fetchText } from 'react-native-svg';
import { SvgCss, SvgWithCss } from './css';
export function getUriFromSource(source) {
  const resolvedAssetSource = Image.resolveAssetSource(source);
  return resolvedAssetSource.uri;
}
export function loadLocalRawResourceDefault(source) {
  const uri = getUriFromSource(source);
  return fetchText(uri);
}
export function isUriAnAndroidResourceIdentifier(uri) {
  return typeof uri === 'string' && uri.indexOf('/') <= -1;
}
export async function loadAndroidRawResource(uri) {
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
export function loadLocalRawResourceAndroid(source) {
  const uri = getUriFromSource(source);
  if (isUriAnAndroidResourceIdentifier(uri)) {
    return loadAndroidRawResource(uri);
  } else {
    return fetchText(uri);
  }
}
export const loadLocalRawResource = Platform.OS !== 'android' ? loadLocalRawResourceDefault : loadLocalRawResourceAndroid;
export function LocalSvg(props) {
  const {
    asset,
    ...rest
  } = props;
  const [xml, setXml] = useState(null);
  useEffect(() => {
    loadLocalRawResource(asset).then(setXml);
  }, [asset]);
  return /*#__PURE__*/React.createElement(SvgCss, _extends({
    xml: xml
  }, rest));
}
export class WithLocalSvg extends Component {
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
    return /*#__PURE__*/React.createElement(SvgWithCss, {
      xml: xml,
      override: props
    });
  }
}
export default LocalSvg;
//# sourceMappingURL=LocalSvg.js.map