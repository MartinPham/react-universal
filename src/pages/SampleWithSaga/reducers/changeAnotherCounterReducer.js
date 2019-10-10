
export default (state, action) => {
    return state.set('anotherCounter', action.value);
}