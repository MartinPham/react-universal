import React from 'react';

import TextInput from 'ink-text-input';



export default ($this, $props, $state, $routes, ...$extra) => {
    return (
       	<div>

            <div>text: {$props.text}</div>
            <div>altText: {$props.altText}</div>

       	    Enter your query:

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