import React from 'react';
import { BaseToast } from './BaseToast';
export function SuccessToast(props) {
    return <BaseToast style={{ borderLeftColor: '#69C779' }} {...props}/>;
}
