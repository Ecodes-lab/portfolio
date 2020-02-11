import React, { Component } from 'react';

 
export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="header-img">
			        <img style={{display: 'none'}} src="assets/img/fast.gif" alt="" />
			    </div>

			    <header className="header">
			        <div className="header__logo-box">
			            <img src="assets/img/EricTylon.png" alt="Eric" className="header__logo" />
			        </div>
			        <div className="header__text-box">
			            <h1 className="heading-primary">
			                <span className="heading-primary--main">{this.props.name}<span className="header-cursor-blink">{this.props.cursor}</span></span>
			                <span className="heading-primary--sub">{this.props.field}</span>

			            </h1>

			            <a href="#projects" className="btn btn--white btn--animated smooth-goto">See Projects</a>
			        </div>
			    </header>
			</div>
		);
	}
}