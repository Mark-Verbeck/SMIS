import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HeroThankYou from "../components/HeroThankYou";



class ThankYou extends Component {

  renderRedirect = () => {

        return <Redirect to='/home' />

    }
  render(){

    setTimeout(
    function() {
      var zip = this.props.state.zip;
      var month = this.props.state.month;
      var day = this.props.state.day;
      var year = this.props.state.year;

      window.location = 'https://rates.web.unitedmedicareadvisors.net/#!/results?businessKey=uma&source=UMAOrganic&dob=' + month + "%2F" + day + "%2F" + year + '&zipCode=' + zip;
    }
    .bind(this),
    5000
);



    return(

      <div className="thankYouPage text-center">



      <HeroThankYou />





      </div>

    );
  }
}

export default ThankYou;
