import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from "../utils/API";
import SmisForm from "./SmisForm";
import Agent from "../images/agent.png";




class Hero extends Component {
  state={
    photo1: Agent,
  }



  render(){



    return(
      <div className="blueGradient pt-5">
      <div className="wrap1">
        <MDBRow>
        <div className="marginAuto mb-5">
        <h2>Thank you for submitting yur information</h2>
        </div>

          <MDBCol lg="6" className="d-flex align-items-end">
          <img src={this.state.photo1} className='img-responsive oldMountain' />

          </MDBCol>
          <MDBCol lg="6" className="text-center">

            <h2 className="pb-4 redText"><u>We<span>&#39;</span>ve got it!</u></h2>

            <h3 className="pb-5">Our licensed insurance agents are busy working to find your <strong>SmartMatch</strong> health care solution and will be in touch shortly.</h3>

            <div className="whiteBackground divPadding2 thankYouBox marginAuto mt-5 ">
              <h3>Want to contact us in the meantime?</h3>
              <p>you can reach us at <a href="tel: 9131234567" className="thankYouPhone"><strong>(913) 123-4567</strong></a></p>
            </div>


          </MDBCol>

        </MDBRow>
      </div>
      </div>


    )
  }
}

export default Hero;
