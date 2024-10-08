function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { AdornmentSide, AdornmentType, InputMode } from './enums';
import TextInputAffix, { AffixAdornment } from './TextInputAffix';
import TextInputIcon, { IconAdornment } from './TextInputIcon';
import { getConstants } from '../helpers';
export function getAdornmentConfig(_ref) {
  let {
    left,
    right
  } = _ref;
  let adornmentConfig = [];
  if (left || right) {
    [{
      side: AdornmentSide.Left,
      adornment: left
    }, {
      side: AdornmentSide.Right,
      adornment: right
    }].forEach(_ref2 => {
      let {
        side,
        adornment
      } = _ref2;
      if (adornment && /*#__PURE__*/React.isValidElement(adornment)) {
        let type;
        if (adornment.type === TextInputAffix) {
          type = AdornmentType.Affix;
        } else if (adornment.type === TextInputIcon) {
          type = AdornmentType.Icon;
        }
        adornmentConfig.push({
          side,
          type
        });
      }
    });
  }
  return adornmentConfig;
}
export function getAdornmentStyleAdjustmentForNativeInput(_ref3) {
  let {
    adornmentConfig,
    leftAffixWidth,
    rightAffixWidth,
    paddingHorizontal,
    inputOffset = 0,
    mode,
    isV3
  } = _ref3;
  const {
    OUTLINED_INPUT_OFFSET,
    ADORNMENT_OFFSET
  } = getConstants(isV3);
  if (adornmentConfig.length) {
    const adornmentStyleAdjustmentForNativeInput = adornmentConfig.map(_ref4 => {
      let {
        type,
        side
      } = _ref4;
      const isLeftSide = side === AdornmentSide.Left;
      const inputModeAdornemntOffset = mode === InputMode.Outlined ? ADORNMENT_OFFSET + OUTLINED_INPUT_OFFSET : ADORNMENT_OFFSET;
      const paddingKey = `padding${captalize(side)}`;
      const affixWidth = isLeftSide ? leftAffixWidth : rightAffixWidth;
      const padding = typeof paddingHorizontal === 'number' ? paddingHorizontal : inputModeAdornemntOffset;
      const offset = affixWidth + padding;
      const isAffix = type === AdornmentType.Affix;
      const marginKey = `margin${captalize(side)}`;
      return {
        [marginKey]: isAffix ? 0 : offset,
        [paddingKey]: isAffix ? offset : inputOffset
      };
    });
    const allStyleAdjustmentsMerged = adornmentStyleAdjustmentForNativeInput.reduce((mergedStyles, currentStyle) => {
      return {
        ...mergedStyles,
        ...currentStyle
      };
    }, {});
    return allStyleAdjustmentsMerged;
  } else {
    return [{}];
  }
}
const captalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const TextInputAdornment = _ref5 => {
  let {
    adornmentConfig,
    left,
    right,
    onAffixChange,
    textStyle,
    visible,
    topPosition,
    isTextInputFocused,
    forceFocus,
    paddingHorizontal,
    maxFontSizeMultiplier,
    theme,
    disabled
  } = _ref5;
  if (adornmentConfig.length) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, adornmentConfig.map(_ref6 => {
      let {
        type,
        side
      } = _ref6;
      let inputAdornmentComponent;
      if (side === AdornmentSide.Left) {
        inputAdornmentComponent = left;
      } else if (side === AdornmentSide.Right) {
        inputAdornmentComponent = right;
      }
      const commonProps = {
        side: side,
        testID: `${side}-${type}-adornment`,
        isTextInputFocused,
        paddingHorizontal,
        disabled
      };
      if (type === AdornmentType.Icon) {
        return /*#__PURE__*/React.createElement(IconAdornment, _extends({}, commonProps, {
          theme: theme,
          key: side,
          icon: inputAdornmentComponent,
          topPosition: topPosition[AdornmentType.Icon],
          forceFocus: forceFocus
        }));
      } else if (type === AdornmentType.Affix) {
        return /*#__PURE__*/React.createElement(AffixAdornment, _extends({}, commonProps, {
          key: side,
          topPosition: topPosition[AdornmentType.Affix][side],
          affix: inputAdornmentComponent,
          textStyle: textStyle,
          onLayout: onAffixChange[side],
          visible: visible,
          maxFontSizeMultiplier: maxFontSizeMultiplier
        }));
      } else {
        return null;
      }
    }));
  } else {
    return null;
  }
};
export default TextInputAdornment;
//# sourceMappingURL=TextInputAdornment.js.map