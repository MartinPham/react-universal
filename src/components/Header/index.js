import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import styles from './styles.module.scss';
import toggleVisible from 'components/Drawer/actions/toggleVisible';


import quickConnect from 'utils/redux/quickConnect';


export default quickConnect()((props) => (
	<div className={styles.container}>
		<AppBar>
			<Toolbar>
				<Typography variant="h6" className={styles.heading}>
					React Universal
				</Typography>
				<IconButton edge="end" color="inherit" aria-label="menu" onClick={() => props.dispatch(toggleVisible())}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	</div>
))