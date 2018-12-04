import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "Contact" */ __dirname + '/index'),
    loading: () => (<div>Loading</div>),
    modules: ['Contact'],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});