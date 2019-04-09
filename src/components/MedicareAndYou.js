import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from "../utils/API";
import SmisForm from "./SmisForm";
import OldCouple from "../images/old-couple.png";
import OldCouple2 from "../images/old-couple2.png";
import CoupleMountain from "../images/couple-mountain.png";


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
      <div className="whiteBackground divPadding">
      <div className="wrap1">
        <MDBRow>

          <MDBCol lg="6" className="paddingRight">
          <div className='coupleMountain img-responsive width100 bottomHeroImg mb-5' ></div>

            <h2 className="pb-3 purpleFont">Medicare and you</h2>
            <p className="pb-3">Medicare is not one-size-fits-all. With all its moving pieces and parts, deciphering what Medicare insurance options you need can feel overwhelming and nearly impossible. Our licensed insurance agents determine your priorities first, and then utilize our state-of-the-art SmartMatch technology to match you with a solution designed specifically for you.</p>
            <h3 className="purpleFont">We call that getting <strong>SmartMatched.</strong></h3>
          </MDBCol>
          <MDBCol lg="6" className="text-right paddingLeft">

          <div className='coupleMountain img-responsive width100 topHeroImg' ></div>


          </MDBCol>

        </MDBRow>
      </div>
      </div>


    )
  }
}

export default Hero;
