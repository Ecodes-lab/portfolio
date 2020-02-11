import React, { Component } from 'react';
// import { EventEmitter } from 'events';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
// import Popup from './components/popup';
// import Floats from './components/floats';
import Contact from './components/contact';
// import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			i1: 0,
			i2: 0,
			header_txt1: 'Eric Tylon C.',
			header_txt2: 'Front End | Back End Engineer',
			name: [],
			field: [],
			speed: 50,
			cursor: '|',
        	// 
		};
		this.typeWriter = this.typeWriter.bind(this)


	}

	typeWriter = async () => {
        if (this.state.i1 < this.state.header_txt1.length) {
          this.setState((state) => ({
          	name: state.name += this.state.header_txt1.charAt(this.state.i1)
          }));

          this.setState((state) => ({
          	i1: state.i1 += 1
          }));
        }


        if (this.state.i1 === this.state.header_txt1.length && this.state.i2 < this.state.header_txt2.length ){
          	this.setState((state) => ({
	          	field: state.field += this.state.header_txt2.charAt(this.state.i2),
	          	cursor: '|'
	        }));
          	this.setState((state) => ({
	          	i2: state.i2 += 1
	        }));
        }

        // if (this.state.i1 > this.state.header_txt1.length && this.state.i2 === this.state.header_txt2.length ){
        //   	this.setState((state) => ({
	       //    	name: state.name += this.state.header_txt1.charAt(this.state.i2),
	       //    	cursor: '|'
	       //  }));
        //   	this.setState((state) => ({
	       //    	i1: state.i1 += 1
	       //  }));
        // }
        setTimeout(this.typeWriter, this.state.speed);
    }

    
	render() {
		return (
			<div>
				<Header name={this.state.name} field={this.state.field} cursor={this.state.cursor} />
				<Main />
				<Footer />
				<Contact 
					contactStyle={{top: "10rem"}} 
					contantSpanStyle={{backgroundImage: 'linear-gradient(to right bottom, rgba(0, 178, 45, 0.9), rgba(45, 0, 178, 0.911))'}} 
					contactLink="https://www.fiverr.com/ericchuddy" 
					contactIMG="assets/img/fiv.png" 
					contactText="Contact Me Through Fiverr"
				/>
				<Contact 
					contactStyle={{top: "14rem"}} 
					contantSpanStyle={{backgroundImage: 'linear-gradient(to right bottom, rgba(1, 136, 226, 0.9), rgba(100, 226, 1, 0.911))'}} 
					contactLink="https://www.freelancer.com/u/Jeni92" 
					contactIMG="assets/img/freelance.jpg" 
					contactText="Contact Me Through Freelancer"
				/>
			</div>
		)
	}


	componentDidMount() {	
		setTimeout(window.addEventListener('load', this.typeWriter) , 100);		
	}

	componentWillUnmount() {	
		window.removeEventListener('load', this.typeWriter);		
	}

}



export default App;