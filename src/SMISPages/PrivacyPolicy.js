import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import{Link} from 'react-router-dom';
import Modal1 from "../components/Modal1";
import Footer from "../components/Footer";


class MedicareOutlook extends Component {
  render(){


    return(
      <div className="whiteBackground">
      <div className=" divPadding2 ">
        <div className="wrap1">
          <h1 className="headTitle purpleFont">Privacy Policy</h1>
        </div>
      </div>

      <div className="wrap1 divPadding2 privacyText">
      <p>We are committed to protecting your privacy. SmartMatch Insurance Solutions aims to assist individuals who want to learn more about their Medicare insurance options. SmartMatch Insurance Solutions believes it is important for its users to know and understand how this website collects and uses their information, and the steps we take to protect your privacy. Please read this carefully and note that this Privacy Policy only applies to this website. Other websites within the SmartMatch Insurance Solutions network may have different policies.</p>

      <h3 className="purpleFont">Information Collected By SmartMatch Insurance Solutions</h3>
      <p><strong>Personally Identifiable Information</strong></p>
      <p>SmartMatch Insurance Solutions uses this website to collect personally-identifiable information. If you choose to use our service, you are authorizing the sharing of your inquiry and your personal information with us. The personal information we collect may include, but is not limited to:</p>

      <ul>
        <li>Name</li>
        <li>Age</li>
        <li>Sex</li>
        <li>Address</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Health information</li>
      </ul>

      <p>We only collect your personally-identifiable information when you choose to share it with us. We will not collect any personally-identifiable information without your consent.</p>



      <p>The information you choose to share with us may be collected through this website or another website in the SmartMatch Insurance Solutions network. Information may also be collected over the phone by one of our SmartMatch Insurance Solutions licensed insurance agents.</p>

      <p>If your personally-identifiable information changes, or if you no longer desire our service, you may correct, update, delete or deactivate it by contacting our Customer Care team through information listed in the Contact Us section below. </p>



      <p><strong>Cookies</strong></p>


        <p> SmartMatch Insurance Solutions uses one or more companies to place advertisements for our services on our site and third-party sites. Cookies and other technologies such as web beacons or tags are used to measure the effectiveness of our ads and to determine the display of content and advertising to you based on your interest both on our site, as well as on third-party sites where you may visit. To support this interest-based advertising solution, we, and companies who we have contracted with, may use anonymous information about your visits to our and other websites. The information collected and used by this process is always anonymous and does not enable any third-party to identify you individually.</p>

        <p>Although it is our hope that you find our advertising valuable, if you would prefer not to participate in the services offered through these solutions, you can always opt-out of this activity by following the browser-specific instructions at the following link: <a href="https://www.usa.gov/optout-instructions">https://www.usa.gov/optout-instructions</a></p>

        <h3 className="purpleFont">Consent</h3>

        <p>By accessing this website and/or using our service, you agree to abide by this Privacy Policy and our Terms of Use. </p>

        <p>By submitting your personally identifiable information to us, you provide your signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from representatives or licensed insurance agents of SmartMatch Insurance Solutions, its subsidiaries, affiliates and their partner companies at the telephone number provided including your wireless number (if provided) as well as via email regarding Medicare insurance. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. By submitting your information, you expressly consent to receive phone calls and email regardless of whether you are on any Federal or state DNC (Do Not Call) and/or DNE (Do Not Email) list or registry. Find their information online at <a href="https://www.donotcall.gov">https://www.donotcall.gov/</a>.</p>

        <p>Should you call a number listed on one of our sites, you will speak with a licensed insurance agent who can provide information about Medicare insurance; this agent may also be able to provide plan and pricing options to you for the purposes of selling a Medicare-related product. You are not required to purchase any goods or services.</p>

        <p>If you no longer wish to receive further communications from SmartMatch Insurance Solutions, you may opt-out by contacting our Customer Care team through information listed in the Contact Us section below. </p>

        <h3 className="purpleFont">CAN-SPAM Compliance</h3>

        <p>SmartMatch Insurance Solutions is committed to being compliant with all Federal regulations, including the Federal CAN-SPAM Act of 2003.</p>

          <p>SmartMatch Insurance Solutions only sends email to those of our visitors who have “opted-in” to receive these communications. Individuals “opt-in” to our email communications by voluntarily providing us with their email address and submitting a form that acknowledges their agreement with our Terms of Use and Privacy Policy.</p>

          <p>You may “opt-out” of any communication from SmartMatch Insurance Solutions at any time, and we will remove you from our mailing list. In addition, you may contact our Customer Care team through information listed in the Contact Us section below and request to be removed from our list.</p>

          <h3 className="purpleFont">Contacting Us</h3>

          <p>If you have any questions about SmartMatch Insurance Solutions, this website, our service, or this Privacy Policy, you may contact us at:</p>

          <p><strong>SmartMatch Insurance Solutions</strong><br/>
              120 W. 12th St.<br/>
              Suite 1700<br/>
              Kansas City, Missouri 64105<br/>
              855-502-9552
              </p>

          <h3 className="purpleFont">Changes to This Policy</h3>

          <p>SmartMatch Insurance Solutions reserves the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our homepage. An updated copy of this Privacy Policy will be clearly posted and accessible on this website at all times.</p>

          <p>This website is owned and operated by Spring Insurance Solutions, LLC.</p>


      </div>


      <Footer />


      </div>

    );
  }
}

export default MedicareOutlook;
