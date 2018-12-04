
import Home from 'pages/Home/async';
import About from 'pages/About/async';
import Contact from 'pages/Contact/async';

export default {
    About: {
        path: "/about",
        source: About
    },
    Contact: {
        path: "/contact",
        source: Contact
    },
    Home: {
        path: "/",
        source: Home,
        exact: true
    }
};