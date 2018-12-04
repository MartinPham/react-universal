import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "About" */ __dirname + '/index'),
    loading: () => (<div>Loading</div>),
    modules: ['About'],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});