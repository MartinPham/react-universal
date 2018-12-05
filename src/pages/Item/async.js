import React from 'react';
import Loadable from 'react-loadable';
import Loading from './loading';

export default Loadable({
    loader: () => import(/* webpackChunkName: "About" */ __dirname + '/index'),
    loading: Loading,
    modules: ['About'],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});