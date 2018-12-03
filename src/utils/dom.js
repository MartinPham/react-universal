export function bodyBoundingRect(node) {
	let boundingRect = node.getBoundingClientRect();
	boundingRect = JSON.parse(JSON.stringify(boundingRect));
	const Body = document.getElementById('Body');
	const containerBoundingRect = Body.getBoundingClientRect();
	boundingRect.top -= containerBoundingRect.top;
	boundingRect.left -= containerBoundingRect.left;

	return boundingRect;
}
