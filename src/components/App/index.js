import React from 'react';
import {ID} from "./constants";



import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/redux/injectReducer';
import injectSaga from '../../utils/redux/injectSaga';
import reducer from './reducer';
import saga from './saga';
import routes from "../../config/routes";
import DynamicRoute from "../../components/DynamicRoute";



class Component extends React.Component {
    render()
    {
        return (<>
            {Object.keys(routes).map(key => {
                const route = routes[key];

                return (
                    <DynamicRoute
                        id={key}
                        key={key}
                        exact={
                            typeof route.exact === 'undefined'
                                ? false
                                : route.exact
                        }
                        path={route.url}
                        component={route.component}
                        firewall={route.firewall}
                        user={
                            this.context.user ? this.context.user.toJS() : null
                        }
                        token={this.context.token}
                    />
                );
            })}
        </>);
    }
}

Component.displayName = ID;



const mapState = state => ({

});

const mapDispatch = dispatch => ({

});



const withConnect = connect(
    mapState,
    mapDispatch
);

const withReducer = injectReducer({ key: ID, reducer });
const withSaga = injectSaga({ key: ID, saga });


export default compose(
    withReducer,
    withSaga,
    withConnect,
)(Component);