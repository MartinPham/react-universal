export function getBoundingRect(node) {
	let boundingRect = node.getBoundingClientRect();
	boundingRect = JSON.parse(JSON.stringify(boundingRect));
	const Body = document.getElementById('root');
	const containerBoundingRect = Body.getBoundingClientRect();
	boundingRect.top -= containerBoundingRect.top;
	boundingRect.left -= containerBoundingRect.left;

	return boundingRect;
}
