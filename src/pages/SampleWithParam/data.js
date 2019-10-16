import React from 'react';

const upperApi = (text) => new Promise(resolver => setTimeout(() => resolver(text.toUpperCase()), 2000))

export default async ({params, queryParams}) => {
	console.log({params, queryParams})

	const text = await upperApi('test')
	return {
		text
	}
}

export const Fallback = (props) => {
	console.log('fallback props', props)

	return <div>Sample Loading...</div>
}