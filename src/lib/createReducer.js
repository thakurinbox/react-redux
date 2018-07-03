export default (initialState, actionMap) => (state, action) => {
  const reducer = actionMap[action.type] || ((s = initialState) => s);

  return reducer(state, action);
};
