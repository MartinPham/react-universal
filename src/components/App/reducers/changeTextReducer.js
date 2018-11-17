export default (state, action) => {
    return {
        ...state,
        text: action.text
    }
}