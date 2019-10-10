
import Home from 'pages/Home/async';
import Sample from 'pages/Sample/async';
import Login from 'pages/Login/async';
import Dashboard from 'pages/Dashboard/async';
import checkAuthenticatedUser from "firewalls/checkAuthenticatedUser";



export default {
    Sample: {
        path: "/sample",
        source: Sample
	},
	
    Login: {
        path: "/login",
        source: Login
    },
    Dashboard: {
        path: "/dashboard",
        source: Dashboard,
        firewall: checkAuthenticatedUser
    },



    Home: {
        path: "/",
        source: Home,
        exact: true
    }
};