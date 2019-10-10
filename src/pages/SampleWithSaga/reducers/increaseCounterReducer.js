
export default (state, action) => {
    return state.set('counter', state.get('counter') + action.plus);
}