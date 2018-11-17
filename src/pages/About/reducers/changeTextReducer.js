export default (state, action) => {
    return state.set('text', action.text);
}