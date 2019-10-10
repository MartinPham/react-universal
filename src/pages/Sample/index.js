import React from 'react';
import {BasePurePage} from 'pages/Page';




import { ID } from "./constants";


class Page extends BasePurePage {
	render() {
		return (
			<div>
				<h1>Sample!</h1>

				<hr/>
				<button
					onClick={() => this.push('@Sample', { random: Math.random() }, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<hr/>

				<button
					onClick={() => this.push('@Sample', { random: Math.random() }, 'flyUp')}
				>Go Sample (flyUp)</button>

				<hr/>


				<button
					onClick={() => this.goBack()}
				>Go Back</button>
				<hr/>

				<button
					onClick={() => this.goForward()}
				>Go Forward</button>

				<hr/>
				<button
					onClick={() => this.go(-2)}
				>Go -2</button>
				<hr/>
				<button
					onClick={() => this.go(2)}
				>Go +2</button>

        </div>
		)
	}
}

Page.displayName = ID;

export default Page;