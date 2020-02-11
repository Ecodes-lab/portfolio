import React, {Component} from 'react';


export default class Features extends Component {
	render() {
		return (
			<section className="section-features">
	            <div className="row">
	                <div className="col-1-of-4">
	                    <div className="feature-box">
	                        <i className="feature-box__icon icon-basic-webpage"></i>
	                        <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
	                        <div className="feature-box__text">
	                            <ul>
	                                <li>HTML5 | CSS3 | SASS</li>
	                                <li>Bootstrap | MaterialUI</li>
	                                <li>JavaScript</li>
	                                <li>React | Redux</li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	                <div className="col-1-of-4">
	                    <div className="feature-box">
	                        <i className="feature-box__icon icon-basic-share"></i>
	                        <h3 className="heading-tertiary u-margin-bottom-small">Server</h3>
	                        <div className="feature-box__text">
	                            <ul>
	                                <li>NodeJS</li>
	                                <li>Express</li>
	                                <li>PHP | Laravel</li>
	                                <li>Python | Django</li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	                <div className="col-1-of-4">
	                    <div className="feature-box">
	                        <i className="feature-box__icon icon-basic-server2"></i>
	                        <h3 className="heading-tertiary u-margin-bottom-small">Database</h3>
	                        <div className="feature-box__text">
	                            <ul>
	                                <li>PostgreSQL</li>
	                                <li>mySQL</li>
	                                <li>MongoDB</li>
	                                <li>Cassandra</li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	                <div className="col-1-of-4">
	                    <div className="feature-box">
	                        <i className="feature-box__icon icon-basic-cloud"></i>
	                        <h3 className="heading-tertiary u-margin-bottom-small">Deployment</h3>
	                        <div className="feature-box__text">
	                            <ul>
	                                <li>System Design</li>
	                                <li>AWS ECS | SQS</li>
	                                <li>Docker</li>
	                                <li>Git</li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>
		);
	}
}