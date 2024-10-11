/// <reference types="react" />
import { TouchableOpacityProps } from 'react-native';
import { ReactChildren } from '../types';
declare type TouchableProps = {
    children: ReactChildren;
} & TouchableOpacityProps;
export declare function Touchable({ children, activeOpacity, ...rest }: TouchableProps): JSX.Element;
export {};
