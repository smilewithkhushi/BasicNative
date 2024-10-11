import * as React from 'react';
import { DefaultNavigatorOptions, ParamListBase, TabNavigationState, TabRouterOptions } from '@react-navigation/native';
import type { MaterialBottomTabNavigationConfig, MaterialBottomTabNavigationEventMap, MaterialBottomTabNavigationOptions } from '../types';
export declare type MaterialBottomTabNavigatorProps = DefaultNavigatorOptions<ParamListBase, TabNavigationState<ParamListBase>, MaterialBottomTabNavigationOptions, MaterialBottomTabNavigationEventMap> & TabRouterOptions & MaterialBottomTabNavigationConfig;
declare function MaterialBottomTabNavigator({ id, initialRouteName, backBehavior, children, screenListeners, screenOptions, ...rest }: MaterialBottomTabNavigatorProps): React.JSX.Element;
declare const _default: <ParamList extends ParamListBase>() => import("@react-navigation/native").TypedNavigator<ParamList, TabNavigationState<ParamListBase>, MaterialBottomTabNavigationOptions, MaterialBottomTabNavigationEventMap, typeof MaterialBottomTabNavigator>;
export default _default;
//# sourceMappingURL=createMaterialBottomTabNavigator.d.ts.map