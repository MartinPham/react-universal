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
			$props.push('/contact');
		} else if(item.value === 'b')
		{
			$props.goBack();
		}  else if(item.value === 'c')
		{
			$props.goForward();
		} 
	};


	const items = [{
		label: 'Contact',
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
				<BigText text="ABOUT"/>
			</Gradient>  

            <SelectInput items={items} onSelect={handleSelect}/>
       	</div>
    );
}