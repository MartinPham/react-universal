// import React from 'react';
import BaseComponent from 'components/Component';


import render from './render';



class App extends BaseComponent {


	render() {
        return render(this, this.props, this.state);
	}
}

export default App;
