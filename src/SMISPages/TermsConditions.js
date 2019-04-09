import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Footer from "../components/Footer";

import{Link} from 'react-router-dom';


class TermsConditions extends Component {
  render(){


    return(
      <div>


      <div className="divPadding privacyText whiteBackground">
      <div className="wrap1">
      <h1 className="headTitle pb-3 purpleFont">Terms & Conditions</h1>

      <p>This Terms and Conditions of Use Agreement (Terms of Use) constitutes a binding agreement between you and SmartMatch Insurance Solutions. Please carefully read through all sections of these Terms of Use. By accessing this site, you agree to be bound by these Terms of Use. Please be advised that any information you submit to SmartMatch Insurance Solutions through a customer service representative, on our site, via email, text message, multimedia message, or otherwise, becomes the property of SmartMatch Insurance Solutions. If you do not acknowledge and agree to these Terms of Use, then do not enter your information. Your access to, and use of this site is subject to these Terms of Use and all applicable laws. These Terms of Use may be changed by us from time to time without notice to you, and the latest version will be posted on this site.</p>

      <h3 className="purpleFont">About This Site</h3>

      <p>SmartMatchInsuranceSolutions.com and its subdomains (“the Site” or “this site”) is an online resource for people seeking to learn more about their insurance options. SmartMatch Insurance Solutions does not endorse any particular insurance plan, provider, or licensed insurance agent. Any information provided about any particular insurance plan, provider, or licensed insurance agent shall not be construed as an endorsement by SmartMatch Insurance Solutions.</p>

      <h3 className="purpleFont">Copyright and Proprietary Rights Information</h3>

      <p>This site is owned and maintained by Spring Insurance Solutions, LLC. No content or images may be downloaded, or reproduced without our prior and explicit consent.</p>

      <p>While every effort is made to ensure the accuracy of the content on this site, we cannot be held accountable for typographical errors, errors of fact, or any other error or inconsistency found on this website. We hereby disclaim all liability from any damages resulting from the use of this website, or any services provided on any SmartMatch Insurance Solutions website.</p>



        <h3 className="purpleFont">Links to Third Party Sites</h3>

        <p>This site may contain links to sites that are controlled by third parties. These linked sites are not under the control of SmartMatch Insurance Solutions, and SmartMatch Insurance Solutions is not responsible for the contents of any linked site or any link contained in a linked site.</p>


      </div>
    </div>


        <Footer />

      </div>

    );
  }
}

export default TermsConditions;
