import React from 'react';
import {ID} from "./constants";

export default class Component extends React.Component {
    render()
    {
        return (<div>Hello world</div>);
    }
}

Component.displayName = ID;