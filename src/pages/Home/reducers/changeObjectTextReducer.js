

export default (state, action) => {
    return state.setIn(['object', 'text'], action.text);
}