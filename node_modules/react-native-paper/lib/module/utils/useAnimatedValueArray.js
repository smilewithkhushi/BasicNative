import * as React from 'react';
import { Animated } from 'react-native';
export default function useAnimatedValueArray(initialValues) {
  const refs = React.useRef([]);
  refs.current.length = initialValues.length;
  initialValues.forEach((initialValue, i) => {
    refs.current[i] = refs.current[i] ?? new Animated.Value(initialValue);
  });
  return refs.current;
}
//# sourceMappingURL=useAnimatedValueArray.js.map