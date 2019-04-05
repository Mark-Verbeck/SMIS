import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from "../utils/API";
import SmisForm from "./SmisForm";
import OldCouple from "../images/old-couple.png";
import OldCouple2 from "../images/old-couple2.png";



class Hero extends Component {
  state={
    photo1: OldCouple,
  }

changePhoto = () => {
  this.setState({
    photo1: OldCouple2
  })
}

  render(){



    return(
      <div className="blueGradient pt-5">
      <div className="wrap1">
        <MDBRow>

          <MDBCol lg="6" className="d-flex align-items-end">
          <img src={this.state.photo1} className='img-responsive width100' />

          </MDBCol>
          <MDBCol lg="6" className="text-center">

            <h2>Find your Medicare <strong>SmartMatch</strong></h2>
            <h3 className="redText">fast. effective. <u>Customized to you.</u></h3>


<SmisForm {...this.props} state={this.props.state} submit={this.props.submit} changePhoto={this.changePhoto} />
          </MDBCol>

        </MDBRow>
      </div>
      </div>


    )
  }
}

export default Hero;
