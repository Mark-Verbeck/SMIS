import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Footer from "../components/Footer";

import{Link} from 'react-router-dom';


class TermsConditions extends Component {
  render(){


    return(
      <div>


      <div className="wrap1 divPadding privacyText whiteBackground">
      <h1 className="headTitle pb-3">Terms & Conditions</h1>

      <p>This Terms and Conditions of Use Agreement (“Terms of Use”) constitutes a binding agreement between you and United Medicare Advisors. Please read carefully through all sections of these Terms of Use. By accessing this website you agree to be bound by these Terms of Use. Please be advised that any information you submit to United Medicare Advisors, through a customer service representative, on our site, via emails, text message, multimedia message, or otherwise, becomes the property of United Medicare Advisors. If you do not acknowledge and agree to these Terms of Use, then do not enter your information. Your access to and use of the Sites is subject to these Terms of Use and all applicable laws. These Terms of Use may be changed by us from time to time without notice to you, and the latest version will be posted on this Site.</p>

      <h3>About This Site</h3>

      <p>Unitedmedicareadvisors.com (hereinafter “the Site” or “this Site”) is an online resource for people seeking to learn more about their insurance options. United Medicare Advisors does not endorse any particular insurance plan, provider, or agent. Any information provided about any particular insurance plan, provider, or agent shall not be construed as an endorsement by United Medicare Advisors.</p>

      <h3>Copyright and Proprietary Rights Information</h3>

      <p>This website is owned and maintained by Spring Insurance Solutions, LLC. No content or images may be downloaded, or reproduced without our prior and explicit consent.</p>

      <p>While every effort is made to ensure the accuracy of the content of unitedmedicareadvisors.com, we cannot be held accountable for typographical errors, errors of fact, or any other error or inconsistency found on this website. We hereby disclaim all liability from any damages resulting from the use of this website, or any services provided on any United Medicare Advisors website.</p>

      <h3>Mobile Terms &amp; Conditions</h3>

      <p>You may receive information from United Medicare Advisors through your mobile device. Through the UMA Rates program, you can text <strong>RATES</strong> to 88008 to receive 4 text messages per month with your area’s lowest rates. <strong>Message and data rates may apply.</strong></p>

      <p>By opting in to this service, you consent to receive mobile text alerts using an automatic telephone dialing system. Consent to receive marketing text messages is not required as a condition of purchasing any goods or services. <strong>Text STOP to cancel</strong> or <strong>HELP for help.</strong></p>

      <p>By signing up, you are confirming you are over the age of 13.</p>

      <p><strong>STOP Information</strong><br/>
      Text <strong>STOP</strong> to 88008 to stop receiving Rates messages from United Medicare Advisors (you will receive a confirmation text).</p>

      <p><strong>HELP Information</strong><br/>
      For additional information, text <strong>HELP</strong> to 88008 or contact 855-563-0400.</p>
      <p><strong>Supported carriers are:</strong><br/>
        AT&amp;T, Sprint, T-Mobile®, Verizon Wireless, Boost, Cricket, MetroPCS, U.S. Cellular, Virgin Mobile, ACS Wireless, Appalachian Wireless, Bluegrass Cellular, Carolina West Wireless, Cellcom, C-Spire Wireless (formerly Cellsouth), Cellular One of East Central Illinois, Cincinnati Bell Wireless, Cross (dba Sprocket), Duet IP, Element Mobile, EpicTouch, GCI Communications, Golden State, Hawkeye (Chat Mobility), Hawkeye (NW Missouri Cellular), Illinois Valley Cellular, Immix (Keystone Wireless / PC Management), Inland Cellular, iWireless, Mobi PCS (Coral Wireless LLC), Mosaic, MTPCS / Cellular One (Cellone Nation), Nex-Tech Wireless, nTelos, Panhandle Telecommunications, Peoples Wireless, Pioneer, Plateau, Revol Wireless, Rina – Custer, Rina – All West, Rina – Cambridge Telecom Coop, Rina – Eagle Valley Comm, Rina – Farmers Mutual Telephone Co, Rina – Nucla Nutria Telephone Co, Rina – Silver Star, Rina – South Central Comm, Rina – Syringa, Rina – UBET, Rina – Manti, South Canaan / CellularOne of NEPA, Thumb Cellular, Union Wireless, United, Viaero Wireless, West Central Wireless, Leaco, Nemont/Sagebrush. T-Mobile is not liable for delayed or undelivered messages.</p>

        <p>We take your privacy seriously. Review our <strong><Link to="/privacy-policy">privacy policy</Link></strong> if you are interested in learning more.</p>

        <h3>Links to Third Party Sites</h3>

        <p>This Site may contain links to sites that are controlled by third parties. These linked sites are not under the control of United Medicare Advisors, and United Medicare Advisors is not responsible for the contents of any linked site or any link contained in a linked site.</p>


      </div>

      <div className="wrap1">
        <Footer />
      </div>

      </div>

    );
  }
}

export default TermsConditions;
