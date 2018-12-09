import React from 'react';

import TextInput from 'ink-text-input';

import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import SelectInput from 'ink-select-input';
import Spinner from 'ink-spinner';
import Image from 'components/Image.cli';
// import fs from 'fs';


// import image from '/Z/DEV/REACT/react-universal/src/images/pho.jpg';
import vn from 'images/vn.png';


export default ($this, $props, $state, $routes, ...$extra) => {

    return (
       	<div>
			<Gradient name="rainbow">
				<BigText text="Hello world!!! Ops"/>
			</Gradient>       	

			 <Image src={vn}/>

            <div>text: {$props.text}</div>
            <div>altText: {$props.altText === "..." ? (<Spinner/>) : $props.altText}</div>

            <SelectInput 
            	items={[
							{
								label: 'About',
								value: '/about'
							}, 
							{
								label: 'Dashboard',
								value: '/dashboard'
							}, 
							{
								label: 'Login',
								value: '/login'
							}, 
							{
								label: '<- back',
								value: 'back'
							}, 
							{
								label: 'forward ->',
								value: 'forward'
							}
				]} 
				onSelect={item => {
					if(item.value === 'back')
					{
						$props.goBack();
					} else if(item.value === 'forward')
					{
						$props.goForward();
					} else {
						$props.push(item.value);
					}
				}}
			/>


       	    Enter something:
       	   
       	    <TextInput
       	        value={$props.text}
       	        onChange={(value) => $props.changeText(value)}
       	        onSubmit={(value) => {
       	        	
       	        }}
       	    />

       	</div>
    );
}