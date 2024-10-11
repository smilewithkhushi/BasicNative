import React from 'react';
import { TouchableOpacity } from 'react-native';
export function Touchable({ children, activeOpacity = 1, ...rest }) {
    return (<TouchableOpacity activeOpacity={activeOpacity} {...rest}>
      {children}
    </TouchableOpacity>);
}
