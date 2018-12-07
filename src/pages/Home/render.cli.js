import React from 'react';

import TextInput from 'ink-text-input';

import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import SelectInput from 'ink-select-input';

export default ($this, $props, $state, $routes, ...$extra) => {
	const handleSelect = item => {
		// console.log(item);

		if(item.value === 'a')
		{
			$props.push('/about');
		} else if(item.value === 'b')
		{
			$props.goBack();
		}  else if(item.value === 'c')
		{
			$props.goForward();
		} 
	};


	const items = [{
		label: 'About',
		value: 'a'
	}, {
		label: '<- back',
		value: 'b'
	}, {
		label: 'forward ->',
		value: 'c'
	}];

    return (
       	<div>
			<Gradient name="rainbow">
				<BigText text="Hello world!!! Ops"/>
			</Gradient>       		

            <div>text: {$props.text}</div>
            <div>altText: {$props.altText}</div>

            <SelectInput items={items} onSelect={handleSelect}/>

             {/*
       	    Enter something:
       	   
       	    <TextInput
       	        value={$props.text}
       	        onChange={(value) => $props.changeText(value)}
       	        onSubmit={(value) => {
       	        	console.log('submited => ', value)
       	        }}
       	    />
       	    */}
       	</div>
    );
}