var _NativeModules$Native;
import { NativeModules, Platform } from 'react-native';

// Use the existence of expo-constants as a heuristic for determining if the
// status bar is translucent on Android. This should be replaced in the future
// with react-native-safe-area-context.
const estimatedStatusBarHeight = ((_NativeModules$Native = NativeModules.NativeUnimoduleProxy) === null || _NativeModules$Native === void 0 || (_NativeModules$Native = _NativeModules$Native.modulesConstants) === null || _NativeModules$Native === void 0 || (_NativeModules$Native = _NativeModules$Native.ExponentConstants) === null || _NativeModules$Native === void 0 ? void 0 : _NativeModules$Native.statusBarHeight) ?? 0;
export const APPROX_STATUSBAR_HEIGHT = Platform.select({
  android: estimatedStatusBarHeight,
  ios: Platform.Version < 11 ? estimatedStatusBarHeight : 0
});
//# sourceMappingURL=constants.js.map