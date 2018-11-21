import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "About" */ './index'),
    loading: () => (<div>Loading</div>),
    modules: ['About'],
    webpack: () => [require.resolveWeak('./index')],
});