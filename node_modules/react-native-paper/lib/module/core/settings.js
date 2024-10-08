import * as React from 'react';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
export const SettingsContext = /*#__PURE__*/React.createContext({
  icon: MaterialCommunityIcon,
  rippleEffectEnabled: true
});
export const {
  Provider,
  Consumer
} = SettingsContext;
//# sourceMappingURL=settings.js.map