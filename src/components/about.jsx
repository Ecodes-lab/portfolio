import React, {Component} from 'react';

export default class About extends Component {
	render() {
		return(
			<section className="section-about">
	            <div className="u-center-text u-margin-bottom-big">
	                <h2 className="heading-secondary">
	                    Front End Focused
	                    <br />With Full Stack Experience
	                </h2>
	            </div>

	            <div className="row">
	                <div className="col-1-of-2">
	                	<h3 className="heading-tertiary u-margin-bottom-small">I'm Eric Tylon Chukwudi</h3>
	                    <p className="paragraph">
	                        A front-end and back-end developer/engineer from Nigeria who strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
	                    </p>
	                    <hr />
	                    <h3 className="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
	                    <p className="paragraph">
	                        As a self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.
	                    </p>

	                </div>
	                <div className="col-1-of-2">
	                    <div className="composition">
	                        <img src="assets/img/javascript.png" alt="JS" className="composition__photo composition__photo--p1" />
	                        <img src="assets/img/nodejs.png" alt="Node" className="composition__photo composition__photo--p3" />
	                        <img src="assets/img/react.png" alt="React" className="composition__photo composition__photo--p2" />
	                    </div>
	                </div>
	            </div>

	        </section>
		);
	}

}