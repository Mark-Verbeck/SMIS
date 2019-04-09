import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Person from "../images/person.png";
import Analyze from "../images/Analyze.png";
import Check from "../images/check.png";



class SmartMatchDifference extends Component {
  state={

  }



  render(){



    return(
      <div className={this.props.state.divClass}>
      <div className="wrap1">
        <h2 className="text-center pb-5 purpleFont"> The <strong>SmartMatch</strong> difference</h2>

        <MDBRow>

          <MDBCol lg="4" className="text-center">

          <img src={Person} className='img-responsive ' />
          <div className="dashedLine"></div>
          <h3 className="pt-3 purpleFont">Personalized</h3>
          <p className="pt-3">Your Medicare should be unique to your needs, that’s why we take the time to learn about your lifestyle and health situation first.</p>
          </MDBCol>

          <MDBCol lg="4" className="text-center">
          <img src={Analyze} className='img-responsive ' />
          <h3 className="pt-3 purpleFont">Analyzed</h3>
          <p className="pt-3">Our licensed insurance agents filter through all your Medicare insurance options to find which work and which don’t — to fit your needs and budget.</p>


          </MDBCol>

          <MDBCol lg="4" className="text-center">
          <img src={Check} className='img-responsive ' />
          <div className="dashedLine2"></div>
          <h3 className="pt-3 purpleFont"><strong>SmartMatched</strong></h3>
          <p className="pt-3">After determining your Medicare solution, we compare dozens of rates to match you with the right policies at your preferred price. </p>



          </MDBCol>

        </MDBRow>

      </div>
      </div>


    )
  }
}

export default SmartMatchDifference;
