import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import './CustomButton.css';

class CustomButton extends Component {
	clickHandler = () => {
		if (this.props.type === 'get') {
			this.props.clickCallBack('get');
		} else if (this.props.type === 'clear') {
			this.props.clickCallBack('clear');
		}
	}
	render() {
		return (
			<div className="buttonContainer">
				<PrimaryButton
					text={this.props.text}
					onClick={this.clickHandler}
				/>
			</div>
		);	
	}
}

CustomButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  clickCallBack: PropTypes.func
};

export default CustomButton;