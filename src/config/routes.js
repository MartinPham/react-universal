


import Home from '../pages/Home';
import About from '../pages/About';



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
