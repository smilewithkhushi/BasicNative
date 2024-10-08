import { Dimensions } from 'react-native';
/**
 * Return true when the tooltip center x-coordinate relative to the wrapped element is negative.
 * The tooltip will be placed at the starting x-coordinate from the wrapped element.
 */
const overflowLeft = center => {
  return center < 0;
};

/**
 * Return true when the tooltip center x-coordinate + tooltip width is greater than the layout width
 * The tooltip width will grow from right to left relative to the wrapped element.
 */
const overflowRight = (center, tooltipWidth) => {
  const {
    width: layoutWidth
  } = Dimensions.get('window');
  return center + tooltipWidth > layoutWidth;
};

/**
 * Return true when the children y-coordinate + its height + tooltip height is greater than the layout height.
 * The tooltip will be placed at the top of the wrapped element.
 */
const overflowBottom = (childrenY, childrenHeight, tooltipHeight) => {
  const {
    height: layoutHeight
  } = Dimensions.get('window');
  return childrenY + childrenHeight + tooltipHeight > layoutHeight;
};
const getTooltipXPosition = (_ref, _ref2) => {
  let {
    pageX: childrenX,
    width: childrenWidth
  } = _ref;
  let {
    width: tooltipWidth
  } = _ref2;
  // when the children use position absolute the childrenWidth is measured as 0,
  // so it's best to anchor the tooltip at the start of the children
  const center = childrenWidth > 0 ? childrenX + (childrenWidth - tooltipWidth) / 2 : childrenX;
  if (overflowLeft(center)) return childrenX;
  if (overflowRight(center, tooltipWidth)) return childrenX + childrenWidth - tooltipWidth;
  return center;
};
const getTooltipYPosition = (_ref3, _ref4) => {
  let {
    pageY: childrenY,
    height: childrenHeight
  } = _ref3;
  let {
    height: tooltipHeight
  } = _ref4;
  if (overflowBottom(childrenY, childrenHeight, tooltipHeight)) return childrenY - tooltipHeight;
  return childrenY + childrenHeight;
};
const getChildrenMeasures = (style, measures) => {
  const {
    position,
    top,
    bottom,
    left,
    right
  } = Array.isArray(style) ? style.reduce((acc, current) => ({
    ...acc,
    ...current
  })) : style;
  if (position === 'absolute') {
    let pageX = 0;
    let pageY = measures.pageY;
    let height = 0;
    let width = 0;
    if (typeof left === 'number') {
      pageX = left;
      width = 0;
    }
    if (typeof right === 'number') {
      pageX = measures.width - right;
      width = 0;
    }
    if (typeof top === 'number') {
      pageY = pageY + top;
    }
    if (typeof bottom === 'number') {
      pageY = pageY - bottom;
    }
    return {
      pageX,
      pageY,
      width,
      height
    };
  }
  return measures;
};
export const getTooltipPosition = (_ref5, component) => {
  let {
    children,
    tooltip,
    measured
  } = _ref5;
  if (!measured) return {};
  let measures = children;
  if (component.props.style) {
    measures = getChildrenMeasures(component.props.style, children);
  }
  return {
    left: getTooltipXPosition(measures, tooltip),
    top: getTooltipYPosition(measures, tooltip)
  };
};
//# sourceMappingURL=utils.js.map