
import Home from 'pages/Home/async';
import Sample from 'pages/Sample/async';
import Login from 'pages/Login/async';
import Dashboard from 'pages/Dashboard/async';
import checkAuthenticatedUser from "firewalls/checkAuthenticatedUser";



export default {
    Sample: {
        path: "/sample",
        source: 'pages/Sample/async'
	},
	
    Login: {
        path: "/login",
        source: 'pages/Login/async'
    },
    Dashboard: {
        path: "/dashboard",
        source: 'pages/Dashboard/async',
        firewall: checkAuthenticatedUser
    },



    Home: {
        path: "/",
        source: 'pages/Home/async',
        exact: true
    }
};