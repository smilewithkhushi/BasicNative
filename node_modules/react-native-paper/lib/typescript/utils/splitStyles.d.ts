import type { ViewStyle } from 'react-native';
declare type FiltersArray = readonly ((style: keyof ViewStyle) => boolean)[];
/**
 * Utility function to extract styles in separate objects
 *
 * @param styles The style object you want to filter
 * @param filters The filters by which you want to split the styles
 * @returns An array of filtered style objects:
 * - The first style object contains the properties that didn't match any filter
 * - After that there will be a style object for each filter you passed in the same order as the matching filters
 * - A style property will exist in a single style object, the first filter it matched
 */
export declare function splitStyles<Tuple extends FiltersArray>(styles: ViewStyle, ...filters: Tuple): [ViewStyle, ...ViewStyle[]];
export {};
//# sourceMappingURL=splitStyles.d.ts.map