import Immutable, {fromJS} from "immutable";

export default (state, action) => {
    let newState = state;

    const currentUser = state.get('user');
    const newUser = fromJS(action.user);

    if(!Immutable.is(currentUser, newUser))
    {
		newState = newState.set('user', newUser);
    }
    
    newState = newState.set('token', action.token);

    return newState;
}