import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import './Alert.css';

class AlertBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color='info' isOpen={this.state.visible} toggle={this.onDismiss}>
        <span className='alert-new'>New</span>Catch mouse and gave it as a present chew the plant but scratch
      </Alert>
    );
  }
}

export default AlertBox;