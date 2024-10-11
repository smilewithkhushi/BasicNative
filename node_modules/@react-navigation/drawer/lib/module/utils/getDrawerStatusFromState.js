export default function getDrawerStatusFromState(state) {
  if (state.history == null) {
    throw new Error("Couldn't find the drawer status in the state object. Is it a valid state object of drawer navigator?");
  }
  const entry = state.history.find(it => it.type === 'drawer');
  return (entry === null || entry === void 0 ? void 0 : entry.status) ?? state.default ?? 'closed';
}
//# sourceMappingURL=getDrawerStatusFromState.js.map