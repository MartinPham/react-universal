import React from 'react';


const upperApi = (text) => new Promise(resolver => setTimeout(() => resolver(text.toUpperCase()), 2000))

export default async () => {
	const text = await upperApi('test')
	return {
		text
	}
}

export const Fallback = () => (
	<div>Loading...</div>
)