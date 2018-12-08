import React from 'react';
import SelectInput from 'ink-select-input';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
			<Gradient name="rainbow">
				<BigText text="Login"/>
			</Gradient>     

            <SelectInput 
            	items={[
							{
								label: 'Login',
								value: 'login'
							}, 
							{
								label: 'Home',
								value: '/'
							},
				]} 
				onSelect={item => {
					if(item.value === 'login')
					{
						$props.updateUser({
		                    name: 'Martin'
		                }, 'nekot');
					} else {
						$props.push(item.value);
					}
				}}
			/>
        </div>
    );
}