import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import SmisForm from "../components/SmisForm";



class StepTwo extends Component {
  render(){
    return(
      <div>
        <SmisForm {...this.props} state={this.props.state} submit={this.props.submit} />
      </div>

    );
  }
}

export default StepTwo;
