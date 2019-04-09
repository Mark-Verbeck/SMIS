import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from "../utils/API";
import SmisForm from "./SmisForm";
import OldCouple from "../images/old-couple.png";
import OldCouple2 from "../images/old-couple2.png";
import line from "../images/line.png";


class Hero extends Component {
  state={
    photo1: OldCouple,
    photo1Class: "img-responsive width100 topHeroImg",
    photo2Class: "img-responsive width100 bottomHeroImg",
    divClass: "blueGradient pt-5 "
  }

changePhoto = () => {
  this.setState({
    photo1Class: "img-responsive width100 topHeroImg animated fadeOut",
    photo2Class: "img-responsive width100 bottomHeroImg animated fadeOut",
    divClass: "blueGradient pt-5 heightTransition"
  })

  setTimeout(
     function() {
       this.setState({
         photo1: OldCouple2,
         photo1Class: "img-responsive width100 topHeroImg animated fadeIn",
         photo2Class: "img-responsive width100 bottomHeroImg none"

       })
     }
     .bind(this),
     900
 );


}

fadeOutDiv = () => {
  this.setState({
    divClass: "blueGradient pt-5 animated fadeOut"

  })
}

  render(){



    return(
      <div className={this.state.divClass}>
      <div className="wrap1">
        <MDBRow>

          <MDBCol lg="6" className="d-flex align-items-end">
          <img src={this.state.photo1} className={this.state.photo1Class} />


          </MDBCol>
          <MDBCol lg="6" className="text-center">

            <h2 className="purpleFont">Find your Medicare <strong>SmartMatch</strong></h2>
            <h3 className="redText redTextPadding">fast. effective. Customized to you.</h3>
            <img src={line} className="img-responsive line pb-5" />


        <SmisForm  {...this.props} state={this.props.state} submit={this.props.submit} changePhoto={this.changePhoto} fadeOutDiv={this.fadeOutDiv} fade={this.props.fade}/>

        <img src={OldCouple} className={this.state.photo2Class} />

          </MDBCol>

        </MDBRow>
      </div>
      </div>


    )
  }
}

export default Hero;
