import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import SmisForm from "../components/SmisForm";
import Hero from "../components/Hero";
import SmartMatchDifference from "../components/SmartMatchDifference";
import MedicareAndYou from "../components/MedicareAndYou";
import Footer from "../components/Footer";



class StepTwo extends Component {

  state={
    divClass: "divPadding whiteBackground SmartMatchDiffDiv"
  }

  fadeOutDiv = () => {
    this.setState({
      divClass: "divPadding whiteBackground SmartMatchDiffDiv animated fadeOut"

    })
  }




  render(){
    return(
      <div>
        <Hero {...this.props} state={this.props.state} submit={this.props.submit} fade={this.fadeOutDiv} />
        <SmartMatchDifference state={this.state} />
        <MedicareAndYou />
        <Footer />

      </div>

    );
  }
}

export default StepTwo;
