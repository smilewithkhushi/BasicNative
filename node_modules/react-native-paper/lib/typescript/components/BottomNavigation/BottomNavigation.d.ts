import * as React from 'react';
import { Animated, ColorValue, EasingFunction, StyleProp, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
import type { IconSource } from '../Icon';
import { Props as TouchableRippleProps } from '../TouchableRipple/TouchableRipple';
export declare type BaseRoute = {
    key: string;
    title?: string;
    focusedIcon?: IconSource;
    unfocusedIcon?: IconSource;
    badge?: string | number | boolean;
    /**
     * @deprecated In v5.x works only with theme version 2.
     */
    color?: string;
    accessibilityLabel?: string;
    testID?: string;
    lazy?: boolean;
};
declare type NavigationState<Route extends BaseRoute> = {
    index: number;
    routes: Route[];
};
declare type TabPressEvent = {
    defaultPrevented: boolean;
    preventDefault(): void;
};
declare type TouchableProps<Route extends BaseRoute> = TouchableRippleProps & {
    key: string;
    route: Route;
    children: React.ReactNode;
    borderless?: boolean;
    centered?: boolean;
    rippleColor?: ColorValue;
};
export declare type Props<Route extends BaseRoute> = {
    /**
     * Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label.
     *
     * By default, this is `false` with theme version 3 and `true` when you have more than 3 tabs.
     * Pass `shifting={false}` to explicitly disable this animation, or `shifting={true}` to always use this animation.
     * Note that you need at least 2 tabs be able to run this animation.
     */
    shifting?: boolean;
    /**
     * Whether to show labels in tabs. When `false`, only icons will be displayed.
     */
    labeled?: boolean;
    /**
     * Whether tabs should be spread across the entire width.
     */
    compact?: boolean;
    /**
     * State for the bottom navigation. The state should contain the following properties:
     *
     * - `index`: a number representing the index of the active route in the `routes` array
     * - `routes`: an array containing a list of route objects used for rendering the tabs
     *
     * Each route object should contain the following properties:
     *
     * - `key`: a unique key to identify the route (required)
     * - `title`: title of the route to use as the tab label
     * - `focusedIcon`:  icon to use as the focused tab icon, can be a string, an image source or a react component @renamed Renamed from 'icon' to 'focusedIcon' in v5.x
     * - `unfocusedIcon`:  icon to use as the unfocused tab icon, can be a string, an image source or a react component @supported Available in v5.x with theme version 3
     * - `color`: color to use as background color for shifting bottom navigation @deprecatedProperty In v5.x works only with theme version 2.
     * - `badge`: badge to show on the tab icon, can be `true` to show a dot, `string` or `number` to show text.
     * - `accessibilityLabel`: accessibility label for the tab button
     * - `testID`: test id for the tab button
     *
     * Example:
     *
     * ```js
     * {
     *   index: 1,
     *   routes: [
     *     { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
     *     { key: 'albums', title: 'Albums', focusedIcon: 'album' },
     *     { key: 'recents', title: 'Recents', focusedIcon: 'history' },
     *     { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
     *   ]
     * }
     * ```
     *
     * `BottomNavigation` is a controlled component, which means the `index` needs to be updated via the `onIndexChange` callback.
     */
    navigationState: NavigationState<Route>;
    /**
     * Callback which is called on tab change, receives the index of the new tab as argument.
     * The navigation state needs to be updated when it's called, otherwise the change is dropped.
     */
    onIndexChange: (index: number) => void;
    /**
     * Callback which returns a react element to render as the page for the tab. Receives an object containing the route as the argument:
     *
     * ```js
     * renderScene = ({ route, jumpTo }) => {
     *   switch (route.key) {
     *     case 'music':
     *       return <MusicRoute jumpTo={jumpTo} />;
     *     case 'albums':
     *       return <AlbumsRoute jumpTo={jumpTo} />;
     *   }
     * }
     * ```
     *
     * Pages are lazily rendered, which means that a page will be rendered the first time you navigate to it.
     * After initial render, all the pages stay rendered to preserve their state.
     *
     * You need to make sure that your individual routes implement a `shouldComponentUpdate` to improve the performance.
     * To make it easier to specify the components, you can use the `SceneMap` helper:
     *
     * ```js
     * renderScene = BottomNavigation.SceneMap({
     *   music: MusicRoute,
     *   albums: AlbumsRoute,
     * });
     * ```
     *
     * Specifying the components this way is easier and takes care of implementing a `shouldComponentUpdate` method.
     * Each component will receive the current route and a `jumpTo` method as it's props.
     * The `jumpTo` method can be used to navigate to other tabs programmatically:
     *
     * ```js
     * this.props.jumpTo('albums')
     * ```
     */
    renderScene: (props: {
        route: Route;
        jumpTo: (key: string) => void;
    }) => React.ReactNode | null;
    /**
     * Callback which returns a React Element to be used as tab icon.
     */
    renderIcon?: (props: {
        route: Route;
        focused: boolean;
        color: string;
    }) => React.ReactNode;
    /**
     * Callback which React Element to be used as tab label.
     */
    renderLabel?: (props: {
        route: Route;
        focused: boolean;
        color: string;
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to be used as the touchable for the tab item.
     * Renders a `TouchableRipple` on Android and `Pressable` on iOS.
     */
    renderTouchable?: (props: TouchableProps<Route>) => React.ReactNode;
    /**
     * Get accessibility label for the tab button. This is read by the screen reader when the user taps the tab.
     * Uses `route.accessibilityLabel` by default.
     */
    getAccessibilityLabel?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Get badge for the tab, uses `route.badge` by default.
     */
    getBadge?: (props: {
        route: Route;
    }) => boolean | number | string | undefined;
    /**
     * Get color for the tab, uses `route.color` by default.
     */
    getColor?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Get label text for the tab, uses `route.title` by default. Use `renderLabel` to replace label component.
     */
    getLabelText?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Get lazy for the current screen. Uses true by default.
     */
    getLazy?: (props: {
        route: Route;
    }) => boolean | undefined;
    /**
     * Get the id to locate this tab button in tests, uses `route.testID` by default.
     */
    getTestID?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Function to execute on tab press. It receives the route for the pressed tab, useful for things like scroll to top.
     */
    onTabPress?: (props: {
        route: Route;
    } & TabPressEvent) => void;
    /**
     * Function to execute on tab long press. It receives the route for the pressed tab, useful for things like custom action when longed pressed.
     */
    onTabLongPress?: (props: {
        route: Route;
    } & TabPressEvent) => void;
    /**
     * Custom color for icon and label in the active tab.
     */
    activeColor?: string;
    /**
     * Custom color for icon and label in the inactive tab.
     */
    inactiveColor?: string;
    /**
     * Whether animation is enabled for scenes transitions in `shifting` mode.
     * By default, the scenes cross-fade during tab change when `shifting` is enabled.
     * Specify `sceneAnimationEnabled` as `false` to disable the animation.
     */
    sceneAnimationEnabled?: boolean;
    /**
     * The scene animation effect. Specify `'shifting'` for a different effect.
     * By default, 'opacity' will be used.
     */
    sceneAnimationType?: 'opacity' | 'shifting';
    /**
     * The scene animation Easing.
     */
    sceneAnimationEasing?: EasingFunction | undefined;
    /**
     * Whether the bottom navigation bar is hidden when keyboard is shown.
     * On Android, this works best when [`windowSoftInputMode`](https://developer.android.com/guide/topics/manifest/activity-element#wsoft) is set to `adjustResize`.
     */
    keyboardHidesNavigationBar?: boolean;
    /**
     * Safe area insets for the tab bar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     * The bottom insets for iOS is added by default. You can override the behavior with this option.
     */
    safeAreaInsets?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /**
     * Style for the bottom navigation bar.  You can pass a custom background color here:
     *
     * ```js
     * barStyle={{ backgroundColor: '#694fad' }}
     * ```
     */
    barStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * Specifies the largest possible scale a label font can reach.
     */
    labelMaxFontSizeMultiplier?: number;
    style?: StyleProp<ViewStyle>;
    activeIndicatorStyle?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
/**
 * BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.
 * It is primarily designed for use on mobile. If you want to use the navigation bar only see [`BottomNavigation.Bar`](BottomNavigationBar).
 *
 * By default BottomNavigation uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more information.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { BottomNavigation, Text } from 'react-native-paper';
 *
 * const MusicRoute = () => <Text>Music</Text>;
 *
 * const AlbumsRoute = () => <Text>Albums</Text>;
 *
 * const RecentsRoute = () => <Text>Recents</Text>;
 *
 * const NotificationsRoute = () => <Text>Notifications</Text>;
 *
 * const MyComponent = () => {
 *   const [index, setIndex] = React.useState(0);
 *   const [routes] = React.useState([
 *     { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
 *     { key: 'albums', title: 'Albums', focusedIcon: 'album' },
 *     { key: 'recents', title: 'Recents', focusedIcon: 'history' },
 *     { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
 *   ]);
 *
 *   const renderScene = BottomNavigation.SceneMap({
 *     music: MusicRoute,
 *     albums: AlbumsRoute,
 *     recents: RecentsRoute,
 *     notifications: NotificationsRoute,
 *   });
 *
 *   return (
 *     <BottomNavigation
 *       navigationState={{ index, routes }}
 *       onIndexChange={setIndex}
 *       renderScene={renderScene}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const BottomNavigation: {
    <Route extends BaseRoute>({ navigationState, renderScene, renderIcon, renderLabel, renderTouchable, getLabelText, getBadge, getColor, getAccessibilityLabel, getTestID, activeColor, inactiveColor, keyboardHidesNavigationBar, barStyle, labeled, style, activeIndicatorStyle, sceneAnimationEnabled, sceneAnimationType, sceneAnimationEasing, onTabPress, onTabLongPress, onIndexChange, shifting: shiftingProp, safeAreaInsets, labelMaxFontSizeMultiplier, compact: compactProp, testID, theme: themeOverrides, getLazy, }: Props<Route>): React.JSX.Element;
    /**
     * Function which takes a map of route keys to components.
     * Pure components are used to minimize re-rendering of the pages.
     * This drastically improves the animation performance.
     */
    SceneMap<Route_1 extends BaseRoute>(scenes: {
        [key: string]: React.ComponentType<{
            route: Route_1;
            jumpTo: (key: string) => void;
        }>;
    }): ({ route, jumpTo, }: {
        route: Route_1;
        jumpTo: (key: string) => void;
    }) => React.JSX.Element;
    Bar: {
        <Route_2 extends {
            key: string;
            title?: string | undefined;
            focusedIcon?: IconSource | undefined;
            unfocusedIcon?: IconSource | undefined;
            badge?: string | number | boolean | undefined;
            color?: string | undefined;
            accessibilityLabel?: string | undefined;
            testID?: string | undefined;
            lazy?: boolean | undefined;
        }>({ navigationState, renderIcon, renderLabel, renderTouchable, getLabelText, getBadge, getColor, getAccessibilityLabel, getTestID, activeColor, inactiveColor, keyboardHidesNavigationBar, style, activeIndicatorStyle, labeled, animationEasing, onTabPress, onTabLongPress, shifting: shiftingProp, safeAreaInsets, labelMaxFontSizeMultiplier, compact: compactProp, testID, theme: themeOverrides, }: import("./BottomNavigationBar").Props<Route_2>): React.JSX.Element;
        displayName: string;
    };
};
export default BottomNavigation;
//# sourceMappingURL=BottomNavigation.d.ts.map