import React, {Component} from 'react';



export default class Pagination extends Component {
	render() {
		return (
            	<li onClick={this.props.onPagination} className="btn pag-number">{this.props.count}</li>
		);
	}
}

// <li onClick={this.props.onPrev} className="pag-prev btn btn-primary">{this.props.prev}</li>
// <li onClick={this.props.onNext} className="pag-next btn btn-primary">{this.props.next}</li>