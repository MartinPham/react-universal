import React from 'react';
import {BasePurePage} from 'pages/Page';


import A from 'components/Navigator/Link';



import { ID } from "./constants";


class Page extends BasePurePage {
	render() {
		return (
			<div>
				<h1>Sample!</h1>

				<hr/>
				<A href='@Sample' data={{ random: Math.random() }} transition='flyLeft'>Go Sample (flyLeft)</A>
				<hr/>

				<A href='@Sample' data={{ random: Math.random() }} transition='flyUp'>Go Sample (flyUp)</A>
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