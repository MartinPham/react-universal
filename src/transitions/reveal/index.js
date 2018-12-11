export default (originPosition) => {
    return `
#NavigatorTransitionGroup.revealIn-forward {

}
#NavigatorTransitionGroup.revealIn-forward .pageTransition-enter,
#NavigatorTransitionGroup.revealOut-back .pageTransition-enter {
	top: ${originPosition.top}px;
	left: ${originPosition.left}px;
	width: ${originPosition.width}px;
	height: ${originPosition.height}px;
}
#NavigatorTransitionGroup.revealIn-forward .pageTransition-enter.pageTransition-enter-active,
#NavigatorTransitionGroup.revealOut-back .pageTransition-enter.pageTransition-enter-active {
}
#NavigatorTransitionGrouprevealIn-forward .pageTransition-exit,
#NavigatorTransitionGroup.revealOut-back .pageTransition-exit {

}
#NavigatorTransitionGroup.revealIn-forward .pageTransition-exit.pageTransition-exit-active,
#NavigatorTransitionGroup.revealOut-back .pageTransition-exit.pageTransition-exit-active {

}



#NavigatorTransitionGroup.revealIn-back {

}
#NavigatorTransitionGroup.revealIn-back .pageTransition-enter,
#NavigatorTransitionGroup.revealOut-forward .pageTransition-enter {
}
#NavigatorTransitionGroup.revealIn-back .pageTransition-enter.pageTransition-enter-active,
#NavigatorTransitionGroup.revealOut-forward .pageTransition-enter.pageTransition-enter-active {
}
#NavigatorTransitionGroup.revealIn-back .pageTransition-exit,
#NavigatorTransitionGroup.revealOut-forward .pageTransition-exit {

}
#NavigatorTransitionGroup.revealIn-back .pageTransition-exit.pageTransition-exit-active,
#NavigatorTransitionGroup.revealOut-forward .pageTransition-exit.pageTransition-exit-active {

	top: ${originPosition.top}px;
	left: ${originPosition.left}px;
	width: ${originPosition.width}px;
	height: ${originPosition.height}px;
}

						`
}