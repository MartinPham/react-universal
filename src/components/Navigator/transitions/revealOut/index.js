import '../_reveal/index.scss';

export default {
	render(props) {
		let origin = props.data.get('origin');
		if (origin) {
			origin = JSON.parse(origin);
			if (typeof origin.top !== 'undefined') {
				// //log(origin);
				let transition = props.data.get('transition');

				var style = document.querySelector('#navigator-transition-reveal');
				if (!style) {
					var style = document.createElement('style');
					style.id = 'navigator-transition-reveal';
					style.type = 'text/css';
				}

				transition = transition.replace('-back', '');

				// style.innerHTML = '.' + transition + '.pageTransition-enter> .Page { clip-path: circle(0% at ' + origin.x + 'px ' + origin.y + 'px); }';
				// style.innerHTML += '.' + transition + '.pageTransition-enter.pageTransition-enter-active> .Page { clip-path: circle(100%); }';
				// style.innerHTML += '.' + transition + '-back.pageTransition-exit> .Page { clip-path: circle(100%); }';
				// style.innerHTML += '.' + transition + '-back.pageTransition-exit.pageTransition-exit-active> .Page { clip-path: circle(0% at ' + origin.x + 'px ' + origin.y + 'px); }';

				// style.innerHTML = '.' + transition + '.pageTransition-enterx> .Page { top:0px; left:0px; width:100%; height:100%; overflow: hidden; }';
				// style.innerHTML += '.' + transition + '.pageTransition-enterx.pageTransition-enter-active> .Page { top:' + origin.top + 'px; left:' + origin.left + 'px; width:' + origin.width + 'px; height:' + origin.height + 'px; }';
				// style.innerHTML += '.' + transition + '.pageTransition-enterx.pageTransition-enter-done> .Page { xoverflow: auto; }';

				style.innerHTML += `.${transition}.pageTransition-exit> .Page { top:0px; left:0px; width:100%; height:100vh; }`;
				style.innerHTML += `.${transition}.pageTransition-exit.pageTransition-exit-active> .Page { top:${
					origin.top
				}px; left:${origin.left}px; width:${origin.width}px; height:${
					origin.height
				}px; overflow: hidden; }`;
				style.innerHTML += `.${transition}.pageTransition-exit.pageTransition-exit-active-done> .Page { xoverflow: auto; }`;

				// style.innerHTML += '.' + transition + '-back.pageTransition-enter> .Page { top:0px; left:0px; bottom:0px; right:0px; }';
				// style.innerHTML += '.' + transition + '-back.pageTransition-enter.pageTransition-enter-active> .Page { top:0px; left:0px; bottom:0px; right:0px; }';

				// style.innerHTML = '.' + transition + '.pageTransition-enter> .Page { clip-path: inset(' + origin.top + 'px ' + origin.right + 'px ' + origin.bottom + 'px ' + origin.left + 'px); }';
				// style.innerHTML += '.' + transition + '.pageTransition-enter.pageTransition-enter-active> .Page { clip-path: inset(0px 0px 0px 0px); }';
				// style.innerHTML += '.' + transition + '-back.pageTransition-exit> .Page { clip-path: inset(0px 0px 0px 0px); }';
				// style.innerHTML += '.' + transition + '-back.pageTransition-exit.pageTransition-exit-active> .Page { clip-path: inset(' + origin.top + 'px ' + origin.left + 'px ' + origin.bottom + 'px ' + origin.right + 'px); }';

				document.getElementsByTagName('head')[0].appendChild(style);
			}
		}
	},
};
