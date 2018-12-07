
import Home from 'pages/Home/async';
// import Item from 'pages/Item/async';
// import About from 'pages/About/async';
// import Login from 'pages/Login/async';
// import Dashboard from 'pages/Dashboard/async';
// import Contact from 'pages/Contact/async';
// import checkAuthenticatedUser from "../firewalls/checkAuthenticatedUser";



export default {
    // About: {
    //     path: "/about",
    //     source: About
    // },
    // Contact: {
    //     path: "/contact",
    //     source: Contact
    // },
    // Item: {
    //     path: "/item",
    //     source: Item
    // },
    // Login: {
    //     path: "/login",
    //     source: Login
    // },
    // Dashboard: {
    //     path: "/dashboard",
    //     source: Dashboard,
    //     firewall: checkAuthenticatedUser
    // },



    Home: {
        path: "/",
        source: Home,
        exact: true
    }
};