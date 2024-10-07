import * as React from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import Button from './Button/Button';
import { IconSource } from './Icon';
import Surface from './Surface';
import type { $Omit, $RemoveChildren, ThemeProp } from '../types';
export declare type Props = $Omit<$RemoveChildren<typeof Surface>, 'mode'> & {
    /**
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions?: Array<{
        label: string;
    } & $RemoveChildren<typeof Button>>;
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Banner shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    /**
     * Specifies the largest possible scale a text font can reach.
     */
    maxFontSizeMultiplier?: number;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    ref?: React.RefObject<View>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * @optional
     * Optional callback that will be called after the opening animation finished running normally
     */
    onShowAnimationFinished?: Animated.EndCallback;
    /**
     * @optional
     * Optional callback that will be called after the closing animation finished running normally
     */
    onHideAnimationFinished?: Animated.EndCallback;
};
/**
 * Banner displays a prominent message and related actions.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Image } from 'react-native';
 * import { Banner } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(true);
 *
 *   return (
 *     <Banner
 *       visible={visible}
 *       actions={[
 *         {
 *           label: 'Fix it',
 *           onPress: () => setVisible(false),
 *         },
 *         {
 *           label: 'Learn more',
 *           onPress: () => setVisible(false),
 *         },
 *       ]}
 *       icon={({size}) => (
 *         <Image
 *           source={{
 *             uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
 *           }}
 *           style={{
 *             width: size,
 *             height: size,
 *           }}
 *         />
 *       )}>
 *       There was a problem processing a transaction on your credit card.
 *     </Banner>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const Banner: ({ visible, icon, children, actions, contentStyle, elevation, style, theme: themeOverrides, onShowAnimationFinished, onHideAnimationFinished, maxFontSizeMultiplier, ...rest }: Props) => React.JSX.Element;
export default Banner;
//# sourceMappingURL=Banner.d.ts.map