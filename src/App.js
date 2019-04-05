import React, { Component } from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import { MDBContainer} from 'mdbreact';
import PrivacyPolicy from "./SMISPages/PrivacyPolicy";
import TermsConditions from "./SMISPages/TermsConditions";
import SMISHome from "./SMISPages/SMISHome";
import ThankYou from "./SMISPages/ThankYou";
import GoogleFontsPlugin from 'google-fonts-webpack-plugin';

import './App.css';






class App extends Component {


  constructor(props) {
     super(props);
     this.state = {
       zip: '',
       month: '',
       day: '',
       year: '',
       firstName: '',
       lastName: '',
       email: '',
       navPhone: '1 (855) 563-0800',
       navPhoneHref: "tel: 8555630800",
       navClass: "topNavLinks"

     };
     this.stepOneSubmit = this.stepOneSubmit.bind(this);
     this.stepTwoSubmit = this.stepTwoSubmit.bind(this);
     this.ebookSubmit = this.ebookSubmit.bind(this);
 }

 componentDidMount(){
   if(window.location.pathname === "/compare365"){
     this.setState({
       navPhone: "1 (816) 836-8362",
       navPhoneHref: "tel: 8168368362",
       navClass: "topNavLinks none"
     })
   }

  if(window.location.pathname === "/understand-medicare-annual-enrollment"){
     this.setState({
       navPhone: "1 (855) 669-6500",
       navPhoneHref: "tel: 8556696500",
       navClass: "topNavLinks none"
     })
   }

   if(window.location.pathname === "/medicare-advantage-open-enrollment"){
     this.setState({
       navPhone: "1 (855) 665-5800",
       navPhoneHref: "tel: 8556655800",
     })
   }

   function getUrlVars(){
          var vars = [], hash;
          var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
          for(var i = 0; i < hashes.length; i++)
          {
              hash = hashes[i].split('=');
              vars.push(hash[0]);
              vars[hash[0]] = hash[1];
          }
          return vars;
      }

      var source = getUrlVars()["source"];
      var campaign = getUrlVars()["campaign"];
      var lowercase_source;
      console.log(source);

      if(source === undefined){

      }else{
      lowercase_source = source.toLowerCase();

      }

      if(lowercase_source === "umazemanta"){
        this.setState({
          navPhone: "1 (855) 669-1600",
          navPhoneHref: "tel: 8556691600",
          navClass: "topNavLinks none"
        })
      }




 }

  stepOneSubmit = (zip) => {
    this.setState( prevState => {
      return{
        zip: zip
      };
    });
  };

  stepTwoSubmit = (month, day, year, zip) => {
    this.setState( prevState => {
      return{
        month: month,
        day: day,
        year: year,
        zip: zip
      };
    });
  };

  ebookSubmit = (firstName, lastName, email) => {
    console.log(firstName + lastName + email);

    this.setState( prevState => {
      return{
        firstName: firstName,
        lastName: lastName,
        email: email
      };
    });
  }




  render() {
    return (
      <BrowserRouter>

        <div>
          <Navbar />

        <Switch>

          <Route exact path='/' render={(props) => <SMISHome {...props} state={this.state} submit={this.stepTwoSubmit} />} />
          <Route exact path='/privacy-policy' render={(props) => <PrivacyPolicy  />} />
          <Route exact path='/terms-conditions' render={(props) => <TermsConditions  />} />
          <Route path='/thank-you' render={(props) => <ThankYou {...props} state={this.state} />} />





        </Switch>







        </div>
      </BrowserRouter>
    );
  }
}

export default App;
