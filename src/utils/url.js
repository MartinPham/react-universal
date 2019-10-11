import queryString from 'query-string';
import routes from 'config/routes';
import { generatePath } from "react-router";

export const generateUrl = (path, data = {}) => {
	let workingPath = path
	let workingData = {}

	const questionPostion = workingPath.indexOf('?')

	if(questionPostion > -1)
	{
		const workingPathQuery = workingPath.substr(questionPostion)
		if(workingPathQuery)
		{
			workingData = queryString.parse(workingPathQuery)
		}

		workingPath = workingPath.substr(0, questionPostion)	
	}

	if(workingPath[0] === '@')
	{
		const routeId = workingPath.substr(1)
		
		if(routes[routeId] !== void 0)
		{
			workingPath = routes[routeId].path
		} else {
			throw new Error(`Route ID ${workingPath} not found.`)
		}
	}

	let finalPath = generatePath(workingPath, {
		...workingData,
		...data
	});


	let finalData = {

	}

	for (let i in workingData) {
		if (workingPath.indexOf(`/:${i}`) === -1) {
			finalData[i] = workingData[i]
		}
	}


	finalPath = (process.env.PUBLIC_URL || '') + finalPath

	finalPath += '?' + queryString.stringify(finalData)

	return finalPath

	/*
	// console.log(path, data)
	let workingPath = path;
	let workingPathQueryData = {};

	const questionPostion = workingPath.indexOf('?');

	if(questionPostion > -1)
	{
		const workingPathQuery = workingPath.substr(questionPostion)
		if(workingPathQuery)
		{
			workingPathQueryData = queryString.parse(workingPathQuery)
		}

		workingPath = workingPath.substr(0, questionPostion)	
	}	

	if(workingPath[0] === '@')
	{
		const routeId = workingPath.substr(1)
		
		if(routes[routeId] !== void 0)
		{
			workingPath = routes[routeId].path
		}
	}

	workingPathQueryData = {
		...workingPathQueryData,
		...data
	}

	let finalPathQueryData = {

	}

	let finalPath = generatePath(workingPath, workingPathQueryData);

	for (let i in workingPathQueryData) {
		if (workingPath.indexOf(`/:${i}`) === -1) {
			finalPathQueryData[i] = workingPathQueryData[i]
		}
	}

	finalPath = (process.env.PUBLIC_URL || '') + finalPath;

	finalPath += '?' + queryString.stringify(finalPathQueryData);

	return finalPath
	*/
}