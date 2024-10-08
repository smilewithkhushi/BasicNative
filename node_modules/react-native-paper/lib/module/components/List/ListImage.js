import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useInternalTheme } from '../../core/theming';
/**
 * A component to show image in a list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Image variant="image" source={{uri: 'https://www.someurl.com/apple'}} />
 *     <List.Image variant="video" source={require('../../some-apple.png')} />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListImage = _ref => {
  let {
    style,
    source,
    variant = 'image',
    theme: themeOverrides
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const getStyles = () => {
    if (variant === 'video') {
      if (!theme.isV3) {
        return [style, styles.video];
      }
      return [style, styles.videoV3];
    }
    return [style, styles.image];
  };
  return /*#__PURE__*/React.createElement(Image, {
    style: getStyles(),
    source: source,
    accessibilityIgnoresInvertColors: true,
    testID: "list-image"
  });
};
const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56
  },
  video: {
    width: 100,
    height: 64,
    marginLeft: 0
  },
  videoV3: {
    width: 114,
    height: 64,
    marginLeft: 0
  }
});
ListImage.displayName = 'List.Image';
export default ListImage;
//# sourceMappingURL=ListImage.js.map