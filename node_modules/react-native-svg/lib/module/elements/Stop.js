import { Component } from 'react';
export default class Stop extends Component {
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
//# sourceMappingURL=Stop.js.map