import React, {Component} from 'react';

export default class Next extends Component {
	render() {
		return (
			<div>
            	<button onClick={this.props.onNext} className="pag-next btn btn-primary">{this.props.next}</button>
            </div>
		);
	}
}