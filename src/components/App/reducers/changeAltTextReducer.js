export default (state, action) => {
    return {
        ...state,
        altText: action.text
    }
}