import React from 'react';
const getLayoutValue = (key) => (event) => event?.nativeEvent?.layout?.[key] ?? 0;
/**
 * Retrieves View dimensions (height, width) from a LayoutChangeEvent and sets them on state
 */
export function useViewDimensions({ heightOffset = 0, widthOffset = 0 } = {}) {
    const [height, setHeight] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const computeViewDimensions = React.useCallback((event) => {
        const h = getLayoutValue('height')(event);
        const w = getLayoutValue('width')(event);
        setHeight(h + heightOffset);
        setWidth(w + widthOffset);
    }, [heightOffset, widthOffset]);
    return {
        computeViewDimensions,
        height,
        width
    };
}
