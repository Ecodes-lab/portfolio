import React, {Component} from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div>
				<div style={this.props.contactStyle} className="contact" id={this.props.contactID}>
					<a rel="noopener noreferrer" target="_blank" href={this.props.contactLink}>
						<img src={this.props.contactIMG} alt={this.props.contactAlt} />
						<span style={this.props.contantSpanStyle}>{this.props.contactText}</span>
					</a>
			    </div>
			</div>
		);
	}
}