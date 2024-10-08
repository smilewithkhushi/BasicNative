import * as React from 'react';
import { StyleSheet, View } from 'react-native';
export const Outline = _ref => {
  let {
    isV3,
    label,
    activeColor,
    backgroundColor,
    hasActiveOutline,
    focused,
    outlineColor,
    roundness,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    testID: "text-input-outline",
    pointerEvents: "none",
    style: [styles.outline, !label && styles.noLabelOutline,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      backgroundColor,
      borderRadius: roundness,
      borderWidth: (isV3 ? hasActiveOutline : focused) ? 2 : 1,
      borderColor: hasActiveOutline ? activeColor : outlineColor
    }, style]
  });
};
const styles = StyleSheet.create({
  outline: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 6,
    bottom: 0
  },
  noLabelOutline: {
    top: 0
  }
});
//# sourceMappingURL=Outline.js.map