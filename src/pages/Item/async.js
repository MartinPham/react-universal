// import React from 'react';
import Loadable from 'react-loadable';
import Loading from './loading';

export default Loadable({
    loader: () => import(/* webpackChunkName: "Item" *//* webpackPrefetch: true */ __dirname + '/index'),
    loading: Loading,
    modules: ['Item'],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});