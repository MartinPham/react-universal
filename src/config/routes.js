import Test from 'pages/Test'

export default {
    Test2: {
        path: '/test2',
		exact: true
    },
    Test: {
        path: '/test',
		exact: true,
		page: Test
    },
    Home: {
        path: '/',
        exact: true
    },

    NotFound: {
		path: '*'
    },
};
