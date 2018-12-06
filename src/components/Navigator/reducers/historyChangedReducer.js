import {fromJS} from "immutable";
// import log from 'utils/log';

export default (state, action) => {
	let newState = state;

	let location = fromJS(action.location);
	if (!location.get('key'))
	{
		location = location.set('key', '');
	}


	let stack = newState.get('stack');

	let currentLocation = newState.get('location');
	let currentTransition = newState.get('transition');
	let currentOriginPosition = newState.get('originPosition');





	let currentLocationIndex = stack.findIndex((stackItem) => {
		return currentLocation.get('key') === stackItem.get('key');
	});

	let existedLocationIndex = stack.findIndex((stackItem) => {
		return location.get('key') === stackItem.get('key');
	});


	let direction = 'forward';

	if(existedLocationIndex === -1)
	{
		stack = stack.take(currentLocationIndex + 1);


        location = location.set('transition', currentTransition);
        location = location.set('originPosition', currentOriginPosition);


		stack = stack.push(location);


        direction = 'forward';
	} else {


		if(existedLocationIndex < currentLocationIndex)
		{
            direction = 'back';


            let nextOfExistedLocation = stack.get(existedLocationIndex + 1);

            newState = newState.set('transition', nextOfExistedLocation.get('transition'));
            newState = newState.set('originPosition', nextOfExistedLocation.get('originPosition'));

		} else {
            direction = 'forward';


            let existedLocation = stack.get(existedLocationIndex);

            newState = newState.set('transition', existedLocation.get('transition'));
            newState = newState.set('originPosition', existedLocation.get('originPosition'));

        }

	}

	newState = newState.set('stack', stack);
	newState = newState.set('location', location);
	newState = newState.set('direction', direction);


	// console.log('new state', newState.toJS())
    return newState;
}