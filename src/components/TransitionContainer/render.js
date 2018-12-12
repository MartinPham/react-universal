import React from "react";
import { Spring } from 'react-spring';

export const getDerivedStateFromProps = (props, state) => {
	return null;
}


export const componentDidMount = ($this, $props, $state) => {
}

export const componentDidUpdate = ($this, $props, $state) => {
 }

export default ($this, $props, $state) => {
        const from = $props.from;
        const to = $props.to;
        const duration = $props.duration;
		const delay = $props.delay;

        return (
			<Spring 
				from={{ 
					top: 0,
					left: 0,
					width: 100,
					height: 100,
					transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)', 
				}} 
				to={{ 
					top: 100,
					left: 100,
					width: 200,
					height: 300,
					transform: 'translate3d(0px,0,0) scale(2) rotateX(0deg)', 
				}}
				config={{
					duration: 1000
					}}
				>
			  {springProps => (
			  		<div style={{
			  			...$props.style,
			  			...springProps
			  		}}>
			  			{$props.children}
			  		</div>
			  	)}
			</Spring>
        );
    }
