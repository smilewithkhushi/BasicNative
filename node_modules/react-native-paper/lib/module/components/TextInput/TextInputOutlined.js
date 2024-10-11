function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, View, TextInput as NativeTextInput, StyleSheet, I18nManager, Platform } from 'react-native';
import { Outline } from './Addons/Outline';
import { AdornmentType, AdornmentSide } from './Adornment/enums';
import TextInputAdornment, { getAdornmentConfig, getAdornmentStyleAdjustmentForNativeInput } from './Adornment/TextInputAdornment';
import { MAXIMIZED_LABEL_FONT_SIZE, MINIMIZED_LABEL_FONT_SIZE, LABEL_WIGGLE_X_OFFSET, ADORNMENT_SIZE, OUTLINE_MINIMIZED_LABEL_Y_OFFSET, LABEL_PADDING_TOP, MIN_DENSE_HEIGHT_OUTLINED, LABEL_PADDING_TOP_DENSE } from './constants';
import { calculateLabelTopPosition, calculateInputHeight, calculatePadding, adjustPaddingOut, calculateOutlinedIconAndAffixTopPosition, getOutlinedInputColors, getConstants } from './helpers';
import InputLabel from './Label/InputLabel';
import LabelBackground from './Label/LabelBackground';
const TextInputOutlined = _ref => {
  let {
    disabled = false,
    editable = true,
    label,
    error = false,
    selectionColor: customSelectionColor,
    cursorColor,
    underlineColor: _underlineColor,
    outlineColor: customOutlineColor,
    activeOutlineColor,
    outlineStyle,
    textColor,
    dense,
    style,
    theme,
    render = props => /*#__PURE__*/React.createElement(NativeTextInput, props),
    multiline = false,
    parentState,
    innerRef,
    onFocus,
    forceFocus,
    onBlur,
    onChangeText,
    onLayoutAnimatedText,
    onLabelTextLayout,
    onLeftAffixLayoutChange,
    onRightAffixLayoutChange,
    onInputLayout,
    onLayout,
    left,
    right,
    placeholderTextColor,
    testID = 'text-input-outlined',
    contentStyle,
    ...rest
  } = _ref;
  const adornmentConfig = getAdornmentConfig({
    left,
    right
  });
  const {
    colors,
    isV3,
    roundness
  } = theme;
  const font = isV3 ? theme.fonts.bodyLarge : theme.fonts.regular;
  const hasActiveOutline = parentState.focused || error;
  const {
    INPUT_PADDING_HORIZONTAL,
    MIN_HEIGHT,
    ADORNMENT_OFFSET,
    MIN_WIDTH
  } = getConstants(isV3);
  const {
    fontSize: fontSizeStyle,
    fontWeight,
    lineHeight: lineHeightStyle,
    height,
    backgroundColor = colors === null || colors === void 0 ? void 0 : colors.background,
    textAlign,
    ...viewStyle
  } = StyleSheet.flatten(style) || {};
  const fontSize = fontSizeStyle || MAXIMIZED_LABEL_FONT_SIZE;
  const lineHeight = lineHeightStyle || (Platform.OS === 'web' ? fontSize * 1.2 : undefined);
  const {
    inputTextColor,
    activeColor,
    outlineColor,
    placeholderColor,
    errorColor,
    selectionColor
  } = getOutlinedInputColors({
    activeOutlineColor,
    customOutlineColor,
    customSelectionColor,
    textColor,
    disabled,
    error,
    theme
  });
  const densePaddingTop = label ? LABEL_PADDING_TOP_DENSE : 0;
  const paddingTop = label ? LABEL_PADDING_TOP : 0;
  const yOffset = label ? OUTLINE_MINIMIZED_LABEL_Y_OFFSET : 0;
  const labelScale = MINIMIZED_LABEL_FONT_SIZE / fontSize;
  const fontScale = MAXIMIZED_LABEL_FONT_SIZE / fontSize;
  const labelWidth = parentState.labelLayout.width;
  const labelHeight = parentState.labelLayout.height;
  const labelHalfWidth = labelWidth / 2;
  const labelHalfHeight = labelHeight / 2;
  const baseLabelTranslateX = (I18nManager.getConstants().isRTL ? 1 : -1) * (labelHalfWidth - labelScale * labelWidth / 2 - (fontSize - MINIMIZED_LABEL_FONT_SIZE) * labelScale);
  let labelTranslationXOffset = 0;
  const isAdornmentLeftIcon = adornmentConfig.some(_ref2 => {
    let {
      side,
      type
    } = _ref2;
    return side === AdornmentSide.Left && type === AdornmentType.Icon;
  });
  const isAdornmentRightIcon = adornmentConfig.some(_ref3 => {
    let {
      side,
      type
    } = _ref3;
    return side === AdornmentSide.Right && type === AdornmentType.Icon;
  });
  if (isAdornmentLeftIcon) {
    labelTranslationXOffset = (I18nManager.getConstants().isRTL ? -1 : 1) * (ADORNMENT_SIZE + ADORNMENT_OFFSET - (isV3 ? 0 : 8));
  }
  const minInputHeight = (dense ? MIN_DENSE_HEIGHT_OUTLINED : MIN_HEIGHT) - paddingTop;
  const inputHeight = calculateInputHeight(labelHeight, height, minInputHeight);
  const topPosition = calculateLabelTopPosition(labelHeight, inputHeight, paddingTop);
  if (height && typeof height !== 'number') {
    // eslint-disable-next-line
    console.warn('Currently we support only numbers in height prop');
  }
  const paddingSettings = {
    height: height ? +height : null,
    labelHalfHeight,
    offset: paddingTop,
    multiline: multiline ? multiline : null,
    dense: dense ? dense : null,
    topPosition,
    fontSize,
    lineHeight,
    label,
    scale: fontScale,
    isAndroid: Platform.OS === 'android',
    styles: StyleSheet.flatten(dense ? styles.inputOutlinedDense : styles.inputOutlined)
  };
  const pad = calculatePadding(paddingSettings);
  const paddingOut = adjustPaddingOut({
    ...paddingSettings,
    pad
  });
  const baseLabelTranslateY = -labelHalfHeight - (topPosition + yOffset);
  const {
    current: placeholderOpacityAnims
  } = React.useRef([new Animated.Value(0), new Animated.Value(1)]);
  const placeholderOpacity = hasActiveOutline ? parentState.labeled : placeholderOpacityAnims[parentState.labelLayout.measured ? 1 : 0];
  const placeholderStyle = {
    position: 'absolute',
    left: 0,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL
  };
  const labelBackgroundColor = backgroundColor === 'transparent' ? theme.colors.background : backgroundColor;
  const labelProps = {
    label,
    onLayoutAnimatedText,
    onLabelTextLayout,
    placeholderOpacity,
    labelError: error,
    placeholderStyle,
    baseLabelTranslateY,
    baseLabelTranslateX,
    font,
    fontSize,
    lineHeight,
    fontWeight,
    labelScale,
    wiggleOffsetX: LABEL_WIGGLE_X_OFFSET,
    topPosition,
    hasActiveOutline,
    activeColor,
    placeholderColor,
    backgroundColor: labelBackgroundColor,
    errorColor,
    labelTranslationXOffset,
    roundness,
    maxFontSizeMultiplier: rest.maxFontSizeMultiplier,
    testID,
    contentStyle,
    inputContainerLayout: {
      width: parentState.inputContainerLayout.width + (isAdornmentRightIcon || isAdornmentLeftIcon ? INPUT_PADDING_HORIZONTAL : 0)
    },
    opacity: parentState.value || parentState.focused ? parentState.labelLayout.measured ? 1 : 0 : 1,
    isV3
  };
  const onLayoutChange = React.useCallback(e => {
    onInputLayout(e);
    onLayout === null || onLayout === void 0 ? void 0 : onLayout(e);
  }, [onLayout, onInputLayout]);
  const minHeight = height || (dense ? MIN_DENSE_HEIGHT_OUTLINED : MIN_HEIGHT);
  const outlinedHeight = inputHeight + (!height ? dense ? densePaddingTop / 2 : paddingTop : 0);
  const {
    leftLayout,
    rightLayout
  } = parentState;
  const leftAffixTopPosition = calculateOutlinedIconAndAffixTopPosition({
    height: outlinedHeight,
    affixHeight: leftLayout.height || 0,
    labelYOffset: -yOffset
  });
  const rightAffixTopPosition = calculateOutlinedIconAndAffixTopPosition({
    height: outlinedHeight,
    affixHeight: rightLayout.height || 0,
    labelYOffset: -yOffset
  });
  const iconTopPosition = calculateOutlinedIconAndAffixTopPosition({
    height: outlinedHeight,
    affixHeight: ADORNMENT_SIZE,
    labelYOffset: -yOffset
  });
  const rightAffixWidth = right ? rightLayout.width || ADORNMENT_SIZE : ADORNMENT_SIZE;
  const leftAffixWidth = left ? leftLayout.width || ADORNMENT_SIZE : ADORNMENT_SIZE;
  const adornmentStyleAdjustmentForNativeInput = getAdornmentStyleAdjustmentForNativeInput({
    adornmentConfig,
    rightAffixWidth,
    leftAffixWidth,
    mode: 'outlined',
    isV3
  });
  const affixTopPosition = {
    [AdornmentSide.Left]: leftAffixTopPosition,
    [AdornmentSide.Right]: rightAffixTopPosition
  };
  const onAffixChange = {
    [AdornmentSide.Left]: onLeftAffixLayoutChange,
    [AdornmentSide.Right]: onRightAffixLayoutChange
  };
  let adornmentProps = {
    adornmentConfig,
    forceFocus,
    topPosition: {
      [AdornmentType.Icon]: iconTopPosition,
      [AdornmentType.Affix]: affixTopPosition
    },
    onAffixChange,
    isTextInputFocused: parentState.focused,
    maxFontSizeMultiplier: rest.maxFontSizeMultiplier,
    disabled
  };
  if (adornmentConfig.length) {
    adornmentProps = {
      ...adornmentProps,
      left,
      right,
      textStyle: {
        ...font,
        fontSize,
        lineHeight,
        fontWeight
      },
      visible: parentState.labeled
    };
  }
  return /*#__PURE__*/React.createElement(View, {
    style: viewStyle
  }, /*#__PURE__*/React.createElement(Outline, {
    isV3: isV3,
    style: outlineStyle,
    label: label,
    roundness: roundness,
    hasActiveOutline: hasActiveOutline,
    focused: parentState.focused,
    activeColor: activeColor,
    outlineColor: outlineColor,
    backgroundColor: backgroundColor
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.labelContainer, {
      paddingTop,
      minHeight
    }]
  }, label ? /*#__PURE__*/React.createElement(InputLabel, _extends({
    labeled: parentState.labeled,
    error: parentState.error,
    focused: parentState.focused,
    wiggle: Boolean(parentState.value && labelProps.labelError),
    labelLayoutMeasured: parentState.labelLayout.measured,
    labelLayoutWidth: parentState.labelLayout.width
  }, labelProps, {
    labelBackground: LabelBackground,
    maxFontSizeMultiplier: rest.maxFontSizeMultiplier
  })) : null, render === null || render === void 0 ? void 0 : render({
    ...rest,
    ref: innerRef,
    onLayout: onLayoutChange,
    onChangeText,
    placeholder: label ? parentState.placeholder : rest.placeholder,
    editable: !disabled && editable,
    selectionColor,
    cursorColor: typeof cursorColor === 'undefined' ? activeColor : cursorColor,
    placeholderTextColor: placeholderTextColor || placeholderColor,
    onFocus,
    onBlur,
    underlineColorAndroid: 'transparent',
    multiline,
    style: [styles.input, !multiline || multiline && height ? {
      height: inputHeight
    } : {}, paddingOut, {
      ...font,
      fontSize,
      lineHeight,
      fontWeight,
      color: inputTextColor,
      textAlignVertical: multiline ? 'top' : 'center',
      textAlign: textAlign ? textAlign : I18nManager.getConstants().isRTL ? 'right' : 'left',
      paddingHorizontal: INPUT_PADDING_HORIZONTAL,
      minWidth: Math.min(parentState.labelTextLayout.width + 2 * INPUT_PADDING_HORIZONTAL, MIN_WIDTH)
    }, Platform.OS === 'web' && {
      outline: 'none'
    }, adornmentStyleAdjustmentForNativeInput, contentStyle],
    testID
  })), /*#__PURE__*/React.createElement(TextInputAdornment, adornmentProps));
};
export default TextInputOutlined;
const styles = StyleSheet.create({
  labelContainer: {
    paddingBottom: 0
  },
  input: {
    margin: 0
  },
  inputOutlined: {
    paddingTop: 8,
    paddingBottom: 8
  },
  inputOutlinedDense: {
    paddingTop: 4,
    paddingBottom: 4
  }
});
//# sourceMappingURL=TextInputOutlined.js.map