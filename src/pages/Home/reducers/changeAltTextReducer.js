export default (state, action) => {
    // return state.set('altText', action.text);
    return {
        ...state,
        altText: action.text
    }
}