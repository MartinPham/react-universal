import loadable from '@loadable/component';

export default loadable(props => import(/* webpackChunkName: "[request]" */`pages/${props.page}`))