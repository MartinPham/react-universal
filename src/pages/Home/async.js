import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ __dirname + '/index'),
    loading: () => (<div>Loading</div>),
    modules: ['Home'],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});