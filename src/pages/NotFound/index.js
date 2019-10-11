import React from 'react';
import {BasePurePage} from 'pages/Page';



import { ID } from "./constants";


class Page extends BasePurePage {
	render() {
		return (
			<div>
				<h1>NotFound</h1>
        </div>
		)
	}
}

Page.displayName = ID;

export default Page;