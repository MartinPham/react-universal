export default {
    SampleSame: {
        path: '/sample/:id',
        page: 'Sample'
	},
    Sample: {
        path: '/sample',
        page: 'Sample'
	},
    SampleWithParam: {
        path: '/sample-param/:id',
        page: 'SampleWithParam'
	},
    SampleWithReducer: {
        path: '/sample-reducer',
        page: 'SampleWithReducer'
	},
    SampleWithSaga: {
        path: '/sample-saga',
        page: 'SampleWithSaga'
	},
    SampleWithSelector: {
        path: '/sample-selector',
        page: 'SampleWithSelector'
	},
	
    Login: {
        path: '/login',
        page: 'Login'
    },
    Dashboard: {
        path: '/dashboard',
        page: 'Dashboard'
	},
	



    Home: {
        path: '/',
        page: 'Home',
        exact: true
    },

    NotFound: {
		path: '*',
        page: 'Home',
    },
};
