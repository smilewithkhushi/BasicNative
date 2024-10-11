'use strict';

import { useCallback } from 'react';
/**
 * @deprecated don't use
 */
export function useWorkletCallback(worklet, deps) {
  return useCallback(worklet, deps ?? []);
}
//# sourceMappingURL=useWorkletCallback.js.map