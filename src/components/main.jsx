import React, {Component} from 'react';
import About from './about';
import Features from './features';
import Projects from './projects';


export default class Main extends Component {
	render() {
		return(
			<main>
				<About />
				<Features />
				<Projects  />
			</main>
		);
	}
}