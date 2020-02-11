import React, {Component} from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
		        <div className="footer__logo-box">
		            <a href="#top">
		                <img src="assets/img/EricTylon.png" alt="Logo" className="footer__logo smooth-goto" />
		            </a>
		        </div>
		        <div className="row">
		            <div className="col-1-of-2">
		                <div className="footer__navigation">
		                    <ul className="footer__list">
		                        <li className="footer__item">
		                            <a href="https://#" className="footer__link">GitHub</a>
		                        </li>
		                        <li className="footer__item">
		                            <a href="https://#" className="footer__link">LinkedIn</a>
		                        </li>
		                        <li className="footer__item">
		                            <a href="https://#" className="footer__link">Resume</a>
		                        </li>
		                    </ul>
		                </div>
		            </div>
		            <div className="col-1-of-2">
		                <p className="footer__copyright">
		                    Site by
		                    <a href="http://#" className="footer__link"> Eric Tylon C </a>
		                </p>
		            </div>
		        </div>
		    </footer>
		);
	}
}