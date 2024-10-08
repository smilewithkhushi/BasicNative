import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import * as React from 'react';
import type { DrawerDescriptorMap, DrawerNavigationHelpers } from '../types';
type Props = {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
};
/**
 * Component that renders the navigation list in the drawer.
 */
export default function DrawerItemList({ state, navigation, descriptors, }: Props): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
//# sourceMappingURL=DrawerItemList.d.ts.map