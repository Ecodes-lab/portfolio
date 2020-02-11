import React, {Component} from 'react';

export default class Popup extends Component {
	render() {
		return (
			<div>
				<div className="popup" id={this.props.popupID}>
			        <div className="popup__content">
			            <div className="popup__left">
			                <a href="#projects"><img src={this.props.popupImage} alt={this.props.popupImageAlt} className="popup__img" /></a>
			            </div>
			            <div className="popup__right">
			                <a href="#section-tours" className="popup__close">&times;</a>
			                <h3 style={this.props.titleStyle} className="heading-secondary-sm ">{this.props.popupTitle}</h3>
			                <h3 className="heading-tertiary u-margin-bottom-small">{this.props.popupFeatures}</h3>
			                <div className="popup__text u-margin-bottom-medium">
			                    <p>
			                        {this.props.popupDescription}
			                    </p>
			                </div>
			                <a href={this.props.href} rel="noopener noreferrer" target="_blank" style={this.props.btnStyle} className="btn">{this.props.hrefLabel}</a>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}