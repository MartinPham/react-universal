


import Home from '../nativePages/Home';
import About from '../nativePages/About';



const routes = {
    About: {
        url: '/about',
        exact: true,
        component: About,
    },

    Home: {
        url: '/',
        exact: true,
        component: Home,
    },

};

export default routes;
