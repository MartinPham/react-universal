import React from 'react';
import Loadable from 'react-loadable';
import { ID } from "./constants";

export default Loadable({
    loader: () => import(/* webpackChunkName: "Sample" */ __dirname + '/index'),
    loading: () => (<div>Loading</div>),
    modules: [ID],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});