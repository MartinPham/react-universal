


import Home from '../pages/Home/async';
import About from '../pages/About/async';



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
