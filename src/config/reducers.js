import navigatorReducer from 'components/Navigator/reducer';
import {ID as NavigatorID} from 'components/Navigator/constants';


import sampleReducer from 'pages/SampleWithReducer/reducer';
import {ID as SampleWithReducerID} from 'pages/SampleWithReducer/constants';


import sampleSagaReducer from 'pages/SampleWithSaga/reducer';
import {ID as SampleWithSagaID} from 'pages/SampleWithSaga/constants';

export default {
	[NavigatorID]: navigatorReducer,
	[SampleWithReducerID]: sampleReducer,
	[SampleWithSagaID]: sampleSagaReducer,
}
