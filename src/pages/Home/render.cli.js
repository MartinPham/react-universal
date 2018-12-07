import React from 'react';

import TextInput from 'ink-text-input';

import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
       	<div>
			<Gradient name="rainbow">
				<BigText text="Hello world!!! Ops"/>
			</Gradient>       		

            <div>text: {$props.text}</div>
            <div>altText: {$props.altText}</div>

       	    Enter something:

       	    <TextInput
       	        value={$props.text}
       	        onChange={(value) => $props.changeText(value)}
       	        onSubmit={(value) => {
       	        	console.log('submited => ', value)
       	        }}
       	    />
       	</div>
    );
}