import React from 'react';
import Loadable from 'react-loadable';
export default Loadable({
    loader: () => import(/* webpackChunkName: "Dashboard" *//* webpackPrefetch: true */ __dirname + '/index'),
    loading: () => (<div>Loading</div>),
    modules: ['Dashboard'],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});