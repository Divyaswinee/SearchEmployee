import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailedView.css';

class DetailedView extends Component {
	clickHandler = () => {
		if (this.props.type === 'get') {
			this.props.clickCallBack('get');
		} else if (this.props.type === 'clear') {
			this.props.clickCallBack('clear');
		}
	}
	render() {
		const { detailData } = this.props;
		return (
			<div className="viewBoxStyle">
				<div className="topBox">
					<img src={detailData.avatar} alt='' className='imgStyle'/>
				</div>
				<div className="bottomBox">
					<span>ID: {detailData.id}</span>
					<span>NAME: {detailData.first_name} {detailData.last_name}</span>
				</div>
			</div>
		);	
	}
}

DetailedView.propTypes = {
  detailData: PropTypes.arrayOf(PropTypes.shape({}))
};

export default DetailedView;