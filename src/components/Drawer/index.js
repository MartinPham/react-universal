import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import quickConnect from 'utils/redux/quickConnect';
import styles from './styles.module.scss';
import initialState from './state';
import {ID} from './constants';
import push from 'components/Navigator/actions/push';
import toggleVisible from 'components/Drawer/actions/toggleVisible';

export default quickConnect(ID, ['isVisible'], initialState)((props) => {
	return (
		<Drawer
			className={styles.drawer}
			variant="persistent"
			classes={{
				paper: styles.drawerPaper,
			}}
			open={props.isVisible}
		>
			<Toolbar />
			<List>
				<ListItem button onClick={() => { props.dispatch(push('@Home?a=1')); props.dispatch(toggleVisible(false)) }}>
					<ListItemIcon><DashboardIcon/></ListItemIcon>
					<ListItemText primary={"Dashboard"} />
				</ListItem>
				<ListItem button onClick={() => { props.dispatch(push('@Home?a=2')); props.dispatch(toggleVisible(false)) }}>
					<ListItemIcon><ListAltIcon/></ListItemIcon>
					<ListItemText primary={"Example 1"} />
				</ListItem>
				<ListItem button onClick={() => { props.dispatch(push('@Home?a=3')); props.dispatch(toggleVisible(false)) }}>
					<ListItemIcon><FeedbackIcon/></ListItemIcon>
					<ListItemText primary={"Example 2"} />
				</ListItem>
				<ListItem button onClick={() => { props.dispatch(push('@Home?a=4')); props.dispatch(toggleVisible(false)) }}>
					<ListItemIcon><TrendingUpIcon/></ListItemIcon>
					<ListItemText primary={"Example 3"} />
				</ListItem>
				<ListItem button onClick={() => { props.dispatch(push('@Home?a=5')); props.dispatch(toggleVisible(false)) }}>
					<ListItemIcon><SettingsIcon/></ListItemIcon>
					<ListItemText primary={"Example 4"} />
				</ListItem>
				<ListItem button onClick={() => { props.dispatch(push('@Home?a=6')); props.dispatch(toggleVisible(false))}}>
					<ListItemIcon><AccountBoxIcon/></ListItemIcon>
					<ListItemText primary={"Example 5"} />
				</ListItem>
				<ListItem button onClick={() => { props.dispatch(push('@Home?a=7')); props.dispatch(toggleVisible(false)) }}>
					<ListItemIcon><ExitToAppIcon/></ListItemIcon>
					<ListItemText primary={"Logout"} />
				</ListItem>
			</List>
		</Drawer>
	)
})