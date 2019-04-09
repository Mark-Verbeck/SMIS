import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from "../utils/API";
import SmisForm from "./SmisForm";
import Agent from "../images/agent.png";
import line from "../images/line.png";
import phone from "../images/phone-orange.png";





class Hero extends Component {
  state={
    photo1: Agent,
    class1: "none"
  }

  componentDidMount(){
    setTimeout(
       function() {
         this.setState({
           class1: "blueGradient pt-5 animated fadeIn"
         })
       }
       .bind(this),
       500
   );
  }


  render(){



    return(
      <div className={this.state.class1}>
      <div className="wrap1">
        <MDBRow>
        <div className="marginAuto mb-5">
        <h2 className="purpleFont">Thank you for submitting your information</h2>
        </div>

          <MDBCol lg="6" className="d-flex align-items-end">
          <img src={this.state.photo1} className='img-responsive oldMountain topHeroImg' />

          </MDBCol>
          <MDBCol lg="6" className="text-center">

            <h2 className="pb-4 redText">We<span>&#39;</span>ve got it!</h2>
            <img src={line} className="img-responsive line2" />

            <h3 className="pb-5 purpleFont">Our licensed insurance agents are busy working to find your <strong>SmartMatch</strong> health care solution and will be in touch shortly.</h3>

            <div className="whiteBackground divPadding2 thankYouBox marginAuto mt-5 ">
              <h3 className="purpleFont">Want to contact us in the meantime?</h3>
              <p className="topHeroImg">you can reach us at <a href="tel: 9131234567" className="thankYouPhone"><strong>(913) 123-4567</strong></a></p>
              <div className="submitButtonThankyou">
              <a href="tel:9131234567"><img src={phone} className="img-responsive btnImg"/>(913) 123-4567</a>
              </div>
            </div>

            <img src={this.state.photo1} className='img-responsive oldMountain bottomHeroImg marginAuto pt-5' />


          </MDBCol>

        </MDBRow>
      </div>
      </div>


    )
  }
}

export default Hero;
