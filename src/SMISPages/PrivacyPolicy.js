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
          <h1 className="headTitle">Privacy Policy</h1>
        </div>
      </div>

      <div className="wrap1 divPadding2 privacyText">
      <p>We are committed to protecting your privacy. UnitedMedicareAdvisors.com is an online source for people seeking to learn more about their insurance options. UnitedMedicareAdvisors.com believes it is important for you to know and understand how our website collects and uses your information, and the steps we take to protect your privacy. Please read this privacy policy carefully. Please note that this Privacy Policy only applies to this website. Other websites in the UnitedMedicareAdvisors.com network may have different privacy policies. By accessing this website and/or using our service, you agree to abide by this Privacy Policy and our Terms of Use.</p>

      <h3>Information Collected By UnitedMedicareAdvisors.com</h3>

      <p>UnitedMedicareAdvisors.com uses this website to collect personally-identifiable information. When you use our service you are authorizing the sharing of your inquiry and your personal information with United Medicare Advisors. The personal information we collect may include, but is not limited to:</p>

      <ul>
        <li>Name</li>
        <li>Age</li>
        <li>Sex</li>
        <li>Address</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Health information</li>
      </ul>

      <p>By submitting your information to us, you are also allowing United Medicare Advisors to contact you directly by e-mail and telephone with information about insurance products or services they offer. You expressly consent to receive phone calls and email regardless of whether you are on any Federal or state DNC (Do Not Call) and/or DNE (Do Not Email) list or registry.</p>

      <h3>How Information Is Collected</h3>

      <p>We only collect your personally-identifiable information when you choose to share it with us. We will not collect any personally-identifiable information without your consent.</p>

      <p>The information you choose to share with us may be collected through this website or another website in the UnitedMedicareAdvisors.com network. Information may also be collected over the phone by one of our United Medicare Advisors.</p>

      <p>By submitting your information to us, you are authorizing United Medicare Advisors to contact you directly by e-mail and telephone with information about insurance products or services we offer, as well as other services and offers you may be interested in.</p>

      <p>If you no longer wish to receive further communications from UnitedMedicareAdvisors.com, you may opt-out of receiving them by emailing us at info@UnitedMedicareAdvisors.com or calling us at 1-855-563-0800 or writing to the address below:</p><br/>

      <p><strong>United Medicare Advisors</strong><br/>
        120 W. 12th St.<br/>
        Suite 1700<br/>
        Kansas City, Missouri 64105<br/>
        (855) 563-0800</p>

        <h3>How Information Is Used</h3>

        <p className="inlineText">If you choose to give us personally-identifiable information, we may use this information for any purpose in our sole discretion. United Medicare Advisors or</p> <Modal1 /> <p>may contact you by phone, email, or mail to fulfill your inquiry and provide you with other offers you may be interested in. The personally-identifiable information includes name, age, sex, e-mail address, phone number, health information, and/or postal address.</p>

        <h3>Consent</h3>

        <p>By visiting, agreeing with, and accepting this Privacy Policy, and then sharing your information with this website, you consent to the collection and use of your information by our site development team. In so doing, you agree to abide by this Privacy Policy, this site’s Terms of Use, and this site’s disclaimer. You further acknowledge that you agree to be contacted by our United Medicare Advisors, regardless of the presence of your telephone number, or if you registered on any state or Federal DNC (“Do Not Call”) of DNE (“Do Not Email”) list or registry. Find their information online at https://www.donotcall.gov/.</p>

        <h3>CAN-SPAM Compliance</h3>

        <p>UnitedMedicareAdvisors.com is committed to being compliant with all Federal regulations, including the Federal CAN-SPAM Act of 2003.<br/>
          UnitedMedicareAdvisors.com only sends email to those of our visitors who have “opted in” to receive these communications. Individuals “opt-in” to our email communications by voluntarily providing us with their email address and submitting a form that acknowledges their agreement with our Terms of Use and Privacy Policy.</p>

          <p>You may “opt-out” of any communication from UnitedMedicareAdvisors.com at any time, and we will remove you from our mailing list. In addition, you may contact us at the address above and request to be removed from our mailing list.</p>

          <h3>Cookies &amp; Opting Out</h3>

          <p>United Medicare Advisors uses one or more companies to place advertisements for our services on our site and third-party sites. Cookies and other technologies such as web beacons or tags are used to measure the effectiveness of our ads and to determine the display of content and advertising to you based on your interest both on our site, as well as on third-party sites where you may visit. To support this interest-based advertising solution, we and companies who we have contracted with may use anonymous information about your visits to our and other websites. The information collected and used by this process is always anonymous and does not enable any third-party to identify you individually.</p>

          <p>Although it is our hope that you find the display of advertising to you based on your anonymous interests valuable, if you would prefer not to participate in the services offered through these solutions, you can always opt-out of this activity by following the browser-specific instructions at the following link: <a href="https://www.usa.gov/optout-instructions" target="_blank" rel="noopener">https://www.usa.gov/optout-instructions</a></p>

          <h3>Contacting Us</h3>

          <p>If you have any questions about United Medicare Advisors, this website, our service, or this Privacy Policy, you may contact us at:</p><br/>

          <p><strong>United Medicare Advisors</strong><br/>
            120 W. 12th St.<br/>
            Suite 1700<br/>
            Kansas City, Missouri 64105<br/>
            (855) 563-0800</p>

          <p>If your personally identifiable information changes, or if you no longer desire our service, you may correct, update, delete or deactivate it by emailing our Customer Support at info@UnitedMedicareAdvisors.com or by contacting us by telephone or postal mail at the contact information listed above.</p>

          <h3>Changes to This Policy</h3>

          <p>UnitedMedicareAdvisors.com reserves the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our homepage. An updated copy of this Privacy Policy will be clearly posted and accessible on this website at all times.</p>

          <p>This website is owned and operated by Spring Insurance Solutions LLC.</p>
      </div>


      <Footer />


      </div>

    );
  }
}

export default MedicareOutlook;
