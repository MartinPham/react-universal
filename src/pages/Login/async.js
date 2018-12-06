import React from 'react';
import Loadable from 'react-loadable';
export default Loadable({
    loader: () => import(/* webpackChunkName: "Login" *//* webpackPrefetch: true */ __dirname + '/index'),
    loading: () => (<div>Loading</div>),
    modules: ['Login'],
    webpack: () => [require.resolveWeak(__dirname + '/index')],
});