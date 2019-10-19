import React from 'react';


const upperApi = (text) => new Promise(resolver => setTimeout(() => resolver(text.toUpperCase()), 1000))

export default async (props) => {
	const text = await upperApi('test ' + JSON.stringify(props))
	return {
		text
	}
}

export const Fallback = () => (
	<div>Loading...</div>
)