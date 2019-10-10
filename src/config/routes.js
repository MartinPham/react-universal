
import Home from 'pages/Home/async';
import Sample from 'pages/Sample/async';
import SampleWithReducer from 'pages/SampleWithReducer/async';
import SampleWithSaga from 'pages/SampleWithSaga/async';
import SampleWithSelector from 'pages/SampleWithSelector/async';
import Login from 'pages/Login/async';
import Dashboard from 'pages/Dashboard/async';
import checkAuthenticatedUser from "firewalls/checkAuthenticatedUser";



export default {
    Sample: {
        path: "/sample",
        source: Sample
	},
    SampleWithReducer: {
        path: "/sample-reducer",
        source: SampleWithReducer
	},
    SampleWithSaga: {
        path: "/sample-saga",
        source: SampleWithSaga
	},
    SampleWithSelector: {
        path: "/sample-selector",
        source: SampleWithSelector
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