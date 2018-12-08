export default (state, action) => {
	
	// console.log('change text..', action.text)
    return state.set('text', action.text);
    // return {
    //     ...state,
    //     text: action.text
    // }
}