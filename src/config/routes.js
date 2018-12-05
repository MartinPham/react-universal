
import Home from 'pages/Home/async';
import Item from 'pages/Item/async';
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
    Item: {
        path: "/item",
        source: Item
    },
    Home: {
        path: "/",
        source: Home,
        exact: true
    }
};