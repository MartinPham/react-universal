export default (state, action) => {
    return state.set('text', action.text);
    // return {
    //     ...state,
    //     text: action.text
    // }
}