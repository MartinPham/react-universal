export default (originPosition) => {
    return `
.pageTransition.fluidIn-forward #destination {
	top: 50px;
	left: ${originPosition.left}px;
	width: ${originPosition.width}px;
	height: ${originPosition.height}px;
}
.pageTransition.fluidIn-forward .pageTransition-enter #destination,
.pageTransition.fluidOut-back .pageTransition-enter #destination {
	top: ${originPosition.top}px;
	left: ${originPosition.left}px;
	width: ${originPosition.width}px;
	height: ${originPosition.height}px;
}
.pageTransition.fluidIn-forward .pageTransition-enter.pageTransition-enter-active,
.pageTransition.fluidOut-back .pageTransition-enter.pageTransition-enter-active {
}
.pageTransition.fluidIn-forward .pageTransition-exit,
.pageTransition.fluidOut-back .pageTransition-exit {

}
.pageTransition.fluidIn-forward .pageTransition-exit.pageTransition-exit-active,
.pageTransition.fluidOut-back .pageTransition-exit.pageTransition-exit-active {

}



.pageTransition.fluidIn-back {

}
.pageTransition.fluidIn-back .pageTransition-enter,
.pageTransition.fluidOut-forward .pageTransition-enter {
}
.pageTransition.fluidIn-back .pageTransition-enter.pageTransition-enter-active,
.pageTransition.fluidOut-forward .pageTransition-enter.pageTransition-enter-active {
}
.pageTransition.fluidIn-back .pageTransition-exit,
.pageTransition.fluidOut-forward .pageTransition-exit {

}
.pageTransition.fluidIn-back .pageTransition-exit.pageTransition-exit-active #destination,
.pageTransition.fluidOut-forward .pageTransition-exit.pageTransition-exit-active #destination{

	top: ${originPosition.top}px;
	left: ${originPosition.left}px;
	width: ${originPosition.width}px;
	height: ${originPosition.height}px;
}

						`
}