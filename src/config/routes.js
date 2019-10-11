
import Home from 'pages/Home/async';
import NotFound from 'pages/NotFound/async';
import Sample from 'pages/Sample/async';
import SampleWithFrontload from 'pages/SampleWithFrontload/async';
import SampleWithParam from 'pages/SampleWithParam/async';
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
    SampleWithFrontload: {
        path: "/sample-frontload",
        source: SampleWithFrontload
	},
    SampleWithParam: {
        path: "/sample-param/:id",
        source: SampleWithParam
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
    },

    NotFound: {
		path: "*",
        source: NotFound,
    },
};