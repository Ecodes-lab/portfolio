import React, {Component} from 'react';


export default class Prev extends Component {
	render() {
		return (
			<div>
            		<button onClick={this.props.onPrev} className="pag-prev btn btn-primary">{this.props.prev}</button>
            	
            </div>
		);
	}
}