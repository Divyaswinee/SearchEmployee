import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import './CustomDropdown.css';

class CustomDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
	    active: false,
	    value: null
	  }
	}

  handleFocus = () => {
  	this.setState({ ...this.state, active: true });
  };
  handleBlur = () => {
  	this.setState({ ...this.state, active: false });
  }
  handleChange = (e, option) => {
  	e.preventDefault();
    this.setState({ 
      ...this.state,
      value: e.target.value,
      active: false
    });
    if (this.props.type === 'dropdown1') {
  		this.props.updateEmpIdData(option.text);
  	} else if (this.props.type === 'dropdown2') {
      this.props.getIdCallback(option.text);
    }
  };
  render() {
    return (
      <div className="dropdownContainer">
        <Dropdown
          label={this.props.label}
          placeholder={this.props.placeholder}
          active={this.state.active}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.state.value}
          onChange={this.handleChange}
          options={this.props.dropDownData}
          className="dropdownBox"
        />
      </div>
    );
  }
}

CustomDropdown.propTypes = {
  dropDownData: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  updateEmpIdData: PropTypes.func,
  getIdCallback: PropTypes.func
};

export default CustomDropdown;
