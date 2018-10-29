import React, { Component } from 'react';
import CustomDropdown from './CustomDropdown/CustomDropdown';
import CustomButton from './CustomButton/CustomButton';
import DetailedView from './DetailedView/DetailedView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, clearFetch } from './actions/index';
import './App.css';

const deptOptions = [
  { key: '1', text: 'HR' },
  { key: '2', text: 'ENGINEERING' }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empIdOptions: [],
      selectedEmpId: ''
    }
  }

  updateEmpIdDropdownData = (dept) => {
    console.log('dept ===> ', dept);
    switch (dept) {
      case 'HR':
        this.setState({
          empIdOptions: [
            { key: '1', text: '1' },
            { key: '2', text: '2' },
            { key: '3', text: '3' },
            { key: '4', text: '4' },
            { key: '5', text: '5' }
          ]
        });
      break;
      case 'ENGINEERING':
        this.setState({
          empIdOptions: [
            { key: '1', text: '6' },
            { key: '2', text: '7' },
            { key: '3', text: '8' },
            { key: '4', text: '9' },
            { key: '5', text: '10' }
          ]
        });
      break;
      default:
        this.setState({
          empIdOptions: []
        });
    }
  }

  handleClick = (clickType) => {
    console.log('*** handleClick this.state.selectedEmpId ===> ', this.state.selectedEmpId);
    if (clickType === 'get') {
      this.props.fetchData(this.state.selectedEmpId);
    } else if (clickType === 'clear') {
      this.props.clearFetch();
    }
  }

  getEmpId = (id) => {
    this.setState({ selectedEmpId: id });
  }

  render() {
    console.log('*** state empDetail ===> ', this.props.empDetail);
    return (
      <div className="App">
        <div className="selectContainer">
          <CustomDropdown
            label='Departments:'
            dropDownData={deptOptions}
            updateEmpIdData={this.updateEmpIdDropdownData}
            type='dropdown1'
          />
          <CustomDropdown
            label='Employee Id:'
            dropDownData={this.state.empIdOptions}
            type='dropdown2'
            getIdCallback={this.getEmpId}
          />
          <CustomButton
            text="Get Details"
            clickCallBack={this.handleClick}
            type='get'
          />
          <CustomButton
            text="Clear"
            clickCallBack={this.handleClick}
            type='clear'
          />
        </div>
        <div className="viewContainer">
          <DetailedView
            detailData={this.props.empDetail}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData, clearFetch }, dispatch);
};

const mapStateToProps = (state) => ({
  empDetail: state.detail.empDetail
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
