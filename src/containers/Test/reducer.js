export default (state = {}, action) => {
  const { data = 1 } = state;
  const { type } = action;
  switch (type) {
    case 'btnAction':
      return { ...state, data: data + 1 };
    default:
      return state;
  }
}