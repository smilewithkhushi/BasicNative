function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Component, useEffect, useMemo, useState } from 'react';
import Rect from './elements/Rect';
import Circle from './elements/Circle';
import Ellipse from './elements/Ellipse';
import Polygon from './elements/Polygon';
import Polyline from './elements/Polyline';
import Line from './elements/Line';
import Svg from './elements/Svg';
import Path from './elements/Path';
import G from './elements/G';
import Text from './elements/Text';
import TSpan from './elements/TSpan';
import TextPath from './elements/TextPath';
import Use from './elements/Use';
import Image from './elements/Image';
import Symbol from './elements/Symbol';
import Defs from './elements/Defs';
import LinearGradient from './elements/LinearGradient';
import RadialGradient from './elements/RadialGradient';
import Stop from './elements/Stop';
import ClipPath from './elements/ClipPath';
import Pattern from './elements/Pattern';
import Mask from './elements/Mask';
import Marker from './elements/Marker';
export const tags = {
  svg: Svg,
  circle: Circle,
  ellipse: Ellipse,
  g: G,
  text: Text,
  tspan: TSpan,
  textPath: TextPath,
  path: Path,
  polygon: Polygon,
  polyline: Polyline,
  line: Line,
  rect: Rect,
  use: Use,
  image: Image,
  symbol: Symbol,
  defs: Defs,
  linearGradient: LinearGradient,
  radialGradient: RadialGradient,
  stop: Stop,
  clipPath: ClipPath,
  pattern: Pattern,
  mask: Mask,
  marker: Marker
};
function missingTag() {
  return null;
}
export function SvgAst(_ref) {
  let {
    ast,
    override
  } = _ref;
  if (!ast) {
    return null;
  }
  const {
    props,
    children
  } = ast;
  return /*#__PURE__*/React.createElement(Svg, _extends({}, props, override), children);
}
export const err = console.error.bind(console);
export function SvgXml(props) {
  const {
    onError = err,
    xml,
    override,
    fallback
  } = props;
  try {
    const ast = useMemo(() => xml !== null ? parse(xml) : null, [xml]);
    return /*#__PURE__*/React.createElement(SvgAst, {
      ast: ast,
      override: override || props
    });
  } catch (error) {
    onError(error);
    return fallback ?? null;
  }
}
export async function fetchText(uri) {
  const response = await fetch(uri);
  if (response.ok || response.status === 0 && uri.startsWith('file://')) {
    return await response.text();
  }
  throw new Error(`Fetching ${uri} failed with status ${response.status}`);
}
export function SvgUri(props) {
  const {
    onError = err,
    uri,
    onLoad,
    fallback
  } = props;
  const [xml, setXml] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    uri ? fetchText(uri).then(data => {
      setXml(data);
      isError && setIsError(false);
      onLoad === null || onLoad === void 0 ? void 0 : onLoad();
    }).catch(e => {
      onError(e);
      setIsError(true);
    }) : setXml(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onError, uri, onLoad]);
  if (isError) {
    return fallback ?? null;
  }
  return /*#__PURE__*/React.createElement(SvgXml, {
    xml: xml,
    override: props,
    fallback: fallback
  });
}

// Extending Component is required for Animated support.

export class SvgFromXml extends Component {
  state = {
    ast: null
  };
  componentDidMount() {
    this.parse(this.props.xml);
  }
  componentDidUpdate(prevProps) {
    const {
      xml
    } = this.props;
    if (xml !== prevProps.xml) {
      this.parse(xml);
    }
  }
  parse(xml) {
    try {
      this.setState({
        ast: xml ? parse(xml) : null
      });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    const {
      props,
      state: {
        ast
      }
    } = this;
    return /*#__PURE__*/React.createElement(SvgAst, {
      ast: ast,
      override: props.override || props
    });
  }
}
export class SvgFromUri extends Component {
  state = {
    xml: null
  };
  componentDidMount() {
    this.fetch(this.props.uri);
  }
  componentDidUpdate(prevProps) {
    const {
      uri
    } = this.props;
    if (uri !== prevProps.uri) {
      this.fetch(uri);
    }
  }
  async fetch(uri) {
    try {
      this.setState({
        xml: uri ? await fetchText(uri) : null
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
    return /*#__PURE__*/React.createElement(SvgFromXml, {
      xml: xml,
      override: props
    });
  }
}
const upperCase = (_match, letter) => letter.toUpperCase();
export const camelCase = phrase => phrase.replace(/[:-]([a-z])/g, upperCase);
export function getStyle(string) {
  const style = {};
  const declarations = string.split(';').filter(v => v.trim());
  const {
    length
  } = declarations;
  for (let i = 0; i < length; i++) {
    const declaration = declarations[i];
    if (declaration.length !== 0) {
      const split = declaration.split(':');
      const property = split[0];
      const value = split[1];
      style[camelCase(property.trim())] = value.trim();
    }
  }
  return style;
}
export function astToReact(value, index) {
  if (typeof value === 'object') {
    const {
      Tag,
      props,
      children
    } = value;
    return /*#__PURE__*/React.createElement(Tag, _extends({
      key: index
    }, props), children.map(astToReact));
  }
  return value;
}

// slimmed down parser based on https://github.com/Rich-Harris/svg-parser

function repeat(str, i) {
  let result = '';
  while (i--) {
    result += str;
  }
  return result;
}
const toSpaces = tabs => repeat('  ', tabs.length);
function locate(source, i) {
  const lines = source.split('\n');
  const nLines = lines.length;
  let column = i;
  let line = 0;
  for (; line < nLines; line++) {
    const {
      length
    } = lines[line];
    if (column >= length) {
      column -= length;
    } else {
      break;
    }
  }
  const before = source.slice(0, i).replace(/^\t+/, toSpaces);
  const beforeExec = /(^|\n).*$/.exec(before);
  const beforeLine = beforeExec && beforeExec[0] || '';
  const after = source.slice(i);
  const afterExec = /.*(\n|$)/.exec(after);
  const afterLine = afterExec && afterExec[0];
  const pad = repeat(' ', beforeLine.length);
  const snippet = `${beforeLine}${afterLine}\n${pad}^`;
  return {
    line,
    column,
    snippet
  };
}
const validNameCharacters = /[a-zA-Z0-9:_-]/;
const whitespace = /[\s\t\r\n]/;
const quotemarks = /['"]/;
export function parse(source, middleware) {
  const length = source.length;
  let currentElement = null;
  let state = metadata;
  let children = null;
  let root;
  const stack = [];
  function error(message) {
    const {
      line,
      column,
      snippet
    } = locate(source, i);
    throw new Error(`${message} (${line}:${column}). If this is valid SVG, it's probably a bug. Please raise an issue\n\n${snippet}`);
  }
  function metadata() {
    while (i + 1 < length && (source[i] !== '<' || !validNameCharacters.test(source[i + 1]))) {
      i++;
    }
    return neutral();
  }
  function neutral() {
    let text = '';
    let char;
    while (i < length && (char = source[i]) !== '<') {
      text += char;
      i += 1;
    }
    if (/\S/.test(text)) {
      children.push(text);
    }
    if (source[i] === '<') {
      return openingTag;
    }
    return neutral;
  }
  function openingTag() {
    const char = source[i];
    if (char === '?') {
      return neutral;
    } // <?xml...

    if (char === '!') {
      const start = i + 1;
      if (source.slice(start, i + 3) === '--') {
        return comment;
      }
      const end = i + 8;
      if (source.slice(start, end) === '[CDATA[') {
        return cdata;
      }
      if (/doctype/i.test(source.slice(start, end))) {
        return neutral;
      }
    }
    if (char === '/') {
      return closingTag;
    }
    const tag = getName();
    const props = {};
    const element = {
      tag,
      props,
      children: [],
      parent: currentElement,
      Tag: tags[tag] || missingTag
    };
    if (currentElement) {
      children.push(element);
    } else {
      root = element;
    }
    getAttributes(props);
    const {
      style
    } = props;
    if (typeof style === 'string') {
      element.styles = style;
      props.style = getStyle(style);
    }
    let selfClosing = false;
    if (source[i] === '/') {
      i += 1;
      selfClosing = true;
    }
    if (source[i] !== '>') {
      error('Expected >');
    }
    if (!selfClosing) {
      currentElement = element;
      ({
        children
      } = element);
      stack.push(element);
    }
    return neutral;
  }
  function comment() {
    const index = source.indexOf('-->', i);
    if (!~index) {
      error('expected -->');
    }
    i = index + 2;
    return neutral;
  }
  function cdata() {
    const index = source.indexOf(']]>', i);
    if (!~index) {
      error('expected ]]>');
    }
    children.push(source.slice(i + 7, index));
    i = index + 2;
    return neutral;
  }
  function closingTag() {
    const tag = getName();
    if (!tag) {
      error('Expected tag name');
    }
    if (currentElement && tag !== currentElement.tag) {
      error(`Expected closing tag </${tag}> to match opening tag <${currentElement.tag}>`);
    }
    allowSpaces();
    if (source[i] !== '>') {
      error('Expected >');
    }
    stack.pop();
    currentElement = stack[stack.length - 1];
    if (currentElement) {
      ({
        children
      } = currentElement);
    }
    return neutral;
  }
  function getName() {
    let name = '';
    let char;
    while (i < length && validNameCharacters.test(char = source[i])) {
      name += char;
      i += 1;
    }
    return name;
  }
  function getAttributes(props) {
    while (i < length) {
      if (!whitespace.test(source[i])) {
        return;
      }
      allowSpaces();
      const name = getName();
      if (!name) {
        return;
      }
      let value = true;
      allowSpaces();
      if (source[i] === '=') {
        i += 1;
        allowSpaces();
        value = getAttributeValue();
        if (!isNaN(+value) && value.trim() !== '') {
          value = +value;
        }
      }
      props[camelCase(name)] = value;
    }
  }
  function getAttributeValue() {
    return quotemarks.test(source[i]) ? getQuotedAttributeValue() : getUnquotedAttributeValue();
  }
  function getUnquotedAttributeValue() {
    let value = '';
    do {
      const char = source[i];
      if (char === ' ' || char === '>' || char === '/') {
        return value;
      }
      value += char;
      i += 1;
    } while (i < length);
    return value;
  }
  function getQuotedAttributeValue() {
    const quotemark = source[i++];
    let value = '';
    let escaped = false;
    while (i < length) {
      const char = source[i++];
      if (char === quotemark && !escaped) {
        return value;
      }
      if (char === '\\' && !escaped) {
        escaped = true;
      }
      value += escaped ? `\\${char}` : char;
      escaped = false;
    }
    return value;
  }
  function allowSpaces() {
    while (i < length && whitespace.test(source[i])) {
      i += 1;
    }
  }
  let i = 0;
  while (i < length) {
    if (!state) {
      error('Unexpected character');
    }
    state = state();
    i += 1;
  }
  if (state !== neutral) {
    error('Unexpected end of input');
  }
  if (root) {
    const xml = (middleware ? middleware(root) : root) || root;
    const ast = xml.children.map(astToReact);
    const jsx = xml;
    jsx.children = ast;
    return jsx;
  }
  return null;
}
//# sourceMappingURL=xml.js.map