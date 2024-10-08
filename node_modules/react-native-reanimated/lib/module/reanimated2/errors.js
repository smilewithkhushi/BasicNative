'use strict';

const _workletStackDetails = new Map();
export function registerWorkletStackDetails(hash, stackDetails) {
  _workletStackDetails.set(hash, stackDetails);
}
function getBundleOffset(error) {
  var _error$stack;
  const frame = (_error$stack = error.stack) === null || _error$stack === void 0 || (_error$stack = _error$stack.split('\n')) === null || _error$stack === void 0 ? void 0 : _error$stack[0];
  if (frame) {
    const parsedFrame = /@([^@]+):(\d+):(\d+)/.exec(frame);
    if (parsedFrame) {
      const [, file, line, col] = parsedFrame;
      return [file, Number(line), Number(col)];
    }
  }
  return ['unknown', 0, 0];
}
function processStack(stack) {
  const workletStackEntries = stack.match(/worklet_(\d+):(\d+):(\d+)/g);
  let result = stack;
  workletStackEntries === null || workletStackEntries === void 0 || workletStackEntries.forEach(match => {
    const [, hash, origLine, origCol] = match.split(/:|_/).map(Number);
    const errorDetails = _workletStackDetails.get(hash);
    if (!errorDetails) {
      return;
    }
    const [error, lineOffset, colOffset] = errorDetails;
    const [bundleFile, bundleLine, bundleCol] = getBundleOffset(error);
    const line = origLine + bundleLine + lineOffset;
    const col = origCol + bundleCol + colOffset;
    result = result.replace(match, `${bundleFile}:${line}:${col}`);
  });
  return result;
}
export function reportFatalErrorOnJS({
  message,
  stack
}) {
  const error = new Error();
  error.message = message;
  error.stack = stack ? processStack(stack) : undefined;
  error.name = 'ReanimatedError';
  // @ts-ignore React Native's ErrorUtils implementation extends the Error type with jsEngine field
  error.jsEngine = 'reanimated';
  // @ts-ignore the reportFatalError method is an internal method of ErrorUtils not exposed in the type definitions
  global.ErrorUtils.reportFatalError(error);
}
//# sourceMappingURL=errors.js.map