export default (originPosition) => {
    return `
.pageTransition.revealIn-forward {

}
.pageTransition.revealIn-forward .pageTransition-enter,
.pageTransition.revealOut-back .pageTransition-enter {
	top: ${originPosition.top}px;
	left: ${originPosition.left}px;
	width: ${originPosition.width}px;
	height: ${originPosition.height}px;
}
.pageTransition.revealIn-forward .pageTransition-enter.pageTransition-enter-active,
.pageTransition.revealOut-back .pageTransition-enter.pageTransition-enter-active {
}
.pageTransition.revealIn-forward .pageTransition-exit,
.pageTransition.revealOut-back .pageTransition-exit {

}
.pageTransition.revealIn-forward .pageTransition-exit.pageTransition-exit-active,
.pageTransition.revealOut-back .pageTransition-exit.pageTransition-exit-active {

}



.pageTransition.revealIn-back {

}
.pageTransition.revealIn-back .pageTransition-enter,
.pageTransition.revealOut-forward .pageTransition-enter {
}
.pageTransition.revealIn-back .pageTransition-enter.pageTransition-enter-active,
.pageTransition.revealOut-forward .pageTransition-enter.pageTransition-enter-active {
}
.pageTransition.revealIn-back .pageTransition-exit,
.pageTransition.revealOut-forward .pageTransition-exit {

}
.pageTransition.revealIn-back .pageTransition-exit.pageTransition-exit-active,
.pageTransition.revealOut-forward .pageTransition-exit.pageTransition-exit-active {

	top: ${originPosition.top}px;
	left: ${originPosition.left}px;
	width: ${originPosition.width}px;
	height: ${originPosition.height}px;
}

						`
}