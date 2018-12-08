import React from 'react';
import SelectInput from 'ink-select-input';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>

        	<Gradient name="rainbow">
				<BigText text={`Hello ${$props.user && $props.user.get('name')}`}/>
			</Gradient>     
            

            <SelectInput 
            	items={[
							{
								label: 'Logout',
								value: 'logout'
							},
				]} 
				onSelect={item => {
					if(item.value === 'logout')
					{
						$props.logout();
					}
				}}
			/>

        </div>
    );
}