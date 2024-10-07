"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitStyles = splitStyles;
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
function splitStyles(styles) {
  for (var _len = arguments.length, filters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    filters[_key - 1] = arguments[_key];
  }
  if (process.env.NODE_ENV !== 'production' && filters.length === 0) {
    console.error('No filters were passed when calling splitStyles');
  }

  // `Object.entries` will be used to iterate over the styles and `Object.fromEntries` will be called before returning
  // Entries which match the given filters will be temporarily stored in `newStyles`
  const newStyles = filters.map(() => []);

  // Entries which match no filter
  const rest = [];

  // Iterate every style property
  outer: for (const item of Object.entries(styles)) {
    // Check each filter
    for (let i = 0; i < filters.length; i++) {
      // Check if filter matches
      if (filters[i](item[0])) {
        newStyles[i].push(item); // Push to temporary filtered entries array
        continue outer; // Skip to checking next style property
      }
    }

    // Adds to rest styles if not filtered
    rest.push(item);
  }

  // Put unmatched styles in the beginning
  newStyles.unshift(rest);

  // Convert arrays of entries into objects
  return newStyles.map(styles => Object.fromEntries(styles));
}
//# sourceMappingURL=splitStyles.js.map