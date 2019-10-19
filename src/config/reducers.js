import NavigatorReducer from 'components/Navigator/reducer';
import {ID as NavigatorID} from 'components/Navigator/constants';


import DrawerReducer from 'components/Drawer/reducer';
import {ID as DrawerID} from 'components/Drawer/constants';

export default {
	[NavigatorID]: NavigatorReducer,
	[DrawerID]: DrawerReducer,
}
