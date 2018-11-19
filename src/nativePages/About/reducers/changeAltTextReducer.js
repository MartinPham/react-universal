export default (state, action) => {
    return state.set('altText', action.text);
}