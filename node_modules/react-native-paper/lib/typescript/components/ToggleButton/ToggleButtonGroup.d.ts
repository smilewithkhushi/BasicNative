import * as React from 'react';
export declare type Props<Value = string> = {
    /**
     * Function to execute on selection change.
     */
    onValueChange: (value: Value) => void;
    /**
     * Value of the currently selected toggle button.
     */
    value: Value | null;
    /**
     * React elements containing toggle buttons.
     */
    children: React.ReactNode;
};
export declare const ToggleButtonGroupContext: React.Context<any>;
/**
 * Toggle group allows to control a group of toggle buttons.</br>
 * It doesn't change the appearance of the toggle buttons. If you want to group them in a row, check out [ToggleButton.Row](ToggleButtonRow).
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('left');
 *
 *   return (
 *     <ToggleButton.Group
 *       onValueChange={value => setValue(value)}
 *       value={value}>
 *       <ToggleButton icon="format-align-left" value="left" />
 *       <ToggleButton icon="format-align-right" value="right" />
 *     </ToggleButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
declare const ToggleButtonGroup: {
    <Value = string>({ value, onValueChange, children, }: Props<Value>): React.JSX.Element;
    displayName: string;
};
export default ToggleButtonGroup;
export { ToggleButtonGroup };
//# sourceMappingURL=ToggleButtonGroup.d.ts.map