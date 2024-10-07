import React from 'react';
import { BaseToast } from './BaseToast';
export function ErrorToast(props) {
    return <BaseToast style={{ borderLeftColor: '#FE6301' }} {...props}/>;
}
