import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ './index'),
    loading: () => (<div>Loading</div>),
    modules: ['Home']
});