import * as React from 'react';
import { Keyboard, Platform } from 'react-native';
export default function useIsKeyboardShown(_ref) {
  let {
    onShow,
    onHide
  } = _ref;
  React.useEffect(() => {
    let willShowSubscription;
    let willHideSubscription;
    let didShowSubscription;
    let didHideSubscription;
    if (Platform.OS === 'ios') {
      willShowSubscription = Keyboard.addListener('keyboardWillShow', onShow);
      willHideSubscription = Keyboard.addListener('keyboardWillHide', onHide);
    } else {
      didShowSubscription = Keyboard.addListener('keyboardDidShow', onShow);
      didHideSubscription = Keyboard.addListener('keyboardDidHide', onHide);
    }
    return () => {
      if (Platform.OS === 'ios') {
        var _willShowSubscription, _willHideSubscription;
        if ((_willShowSubscription = willShowSubscription) !== null && _willShowSubscription !== void 0 && _willShowSubscription.remove) {
          willShowSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          Keyboard.removeListener('keyboardWillShow', onShow);
        }
        if ((_willHideSubscription = willHideSubscription) !== null && _willHideSubscription !== void 0 && _willHideSubscription.remove) {
          willHideSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          Keyboard.removeListener('keyboardWillHide', onHide);
        }
      } else {
        var _didShowSubscription, _didHideSubscription;
        if ((_didShowSubscription = didShowSubscription) !== null && _didShowSubscription !== void 0 && _didShowSubscription.remove) {
          didShowSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          Keyboard.removeListener('keyboardDidShow', onShow);
        }
        if ((_didHideSubscription = didHideSubscription) !== null && _didHideSubscription !== void 0 && _didHideSubscription.remove) {
          didHideSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          Keyboard.removeListener('keyboardDidHide', onHide);
        }
      }
    };
  }, [onHide, onShow]);
}
//# sourceMappingURL=useIsKeyboardShown.js.map