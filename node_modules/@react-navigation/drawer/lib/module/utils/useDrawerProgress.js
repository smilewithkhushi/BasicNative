import * as React from 'react';
import DrawerProgressContext from './DrawerProgressContext';
export default function useDrawerProgress() {
  const progress = React.useContext(DrawerProgressContext);
  if (progress === undefined) {
    throw new Error("Couldn't find a drawer. Is your component inside a drawer navigator?");
  }
  return progress;
}
//# sourceMappingURL=useDrawerProgress.js.map