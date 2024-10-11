import * as React from 'react';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import type { MaterialBottomTabDescriptorMap, MaterialBottomTabNavigationConfig, MaterialBottomTabNavigationHelpers } from '../types';
declare type Props = MaterialBottomTabNavigationConfig & {
    state: TabNavigationState<ParamListBase>;
    navigation: MaterialBottomTabNavigationHelpers;
    descriptors: MaterialBottomTabDescriptorMap;
};
export default function MaterialBottomTabView({ state, navigation, descriptors, ...rest }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=MaterialBottomTabView.d.ts.map