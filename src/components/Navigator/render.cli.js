import React from 'react';


export const componentDidMount = ($this, $props, $state, $routes, ...$extra) => {

}

export const componentWillUnmount = ($this, $props, $state, $routes, ...$extra) => {
	
}

export default ($this, $props, $state, $routes, ...$extra) => {
    return $props.children;
}