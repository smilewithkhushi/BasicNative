'use strict';

export function convertAnimationObjectToKeyframes(animationObject) {
  let keyframe = `@keyframes ${animationObject.name} { `;
  for (const [timestamp, style] of Object.entries(animationObject.style)) {
    keyframe += `${timestamp}% { `;
    for (const [property, values] of Object.entries(style)) {
      if (property !== 'transform') {
        keyframe += `${property}: ${values}; `;
        continue;
      }
      keyframe += `transform:`;
      values.forEach(value => {
        for (const [transformProperty, transformPropertyValue] of Object.entries(value)) {
          keyframe += ` ${transformProperty}(${transformPropertyValue})`;
        }
      });
      keyframe += `; `; // Property end
    }
    keyframe += `} `; // Timestamp end
  }
  keyframe += `} `; // Keyframe end

  return keyframe;
}
export function convertTransformToString(transform) {
  if (!transform) {
    return '';
  }
  let transformString = '';

  // @ts-ignore `transform` cannot be string because in that case
  // we throw error in `extractTransformFromStyle`
  transform.forEach(transformObject => {
    for (const [key, value] of Object.entries(transformObject)) {
      if (key === 'reversed') {
        continue;
      }
      if (key.indexOf('translate') < 0) {
        transformString += `${key}(${value}) `;
      } else {
        transformString += `${key}(${value}px) `;
      }
    }
  });
  return transformString;
}
//# sourceMappingURL=animationParser.js.map