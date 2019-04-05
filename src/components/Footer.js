import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from "../utils/API";
import SmisForm from "./SmisForm";
import OldCouple from "../images/old-couple.png";
import OldCouple2 from "../images/old-couple2.png";
import{Link} from 'react-router-dom';




class Hero extends Component {
  state={
    photo1: OldCouple,
  }



  render(){



    return(
      <div className="purpleBackground divPadding2">
      <div className="wrap1">
      <div className="stepTwoLegal">
        <p>By clicking the button above, you provide your signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from United Medicare Advisors or its subsidiaries, affiliates, or agents at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand all of the <Link to="/terms-conditions">Terms and Conditions</Link> and <Link to="/privacy-policy">Privacy Policy</Link> of this site.</p><br/><br/>

        <p>UnitedMedicareAdvisors.com is an online resource for Medicare Supplement, Medicare Advantage, Medicare Part D, and health insurance information, along with competitive quotes from some of the nation’s top insurance companies. Our mission is to help individuals by offering the best available plans at prices that are affordable.</p><br/><br/>

        <p>United Medicare Advisors and UnitedMedicareAdvisors.com is wholly owned and operated by Spring Insurance Solutions LLC. Spring Insurance Solutions and their divisions are licensed to sell insurance products in the following states: AL, AZ, AR, CO, CT, DE, FL, GA, ID, IL, IN, IA, KS, KY, LA, ME, MD, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NC, ND, OH, OK, OR, PA, SC, SD, TN, TX, UT, VT, VA, WA, DC, WV, WI, WY. </p>

        <p>To provide you with easy-to-understand information about your Medicare options, UnitedMedicareAdvisors.com researched government websites and publications, such as those of Medicare.gov, 2016 Choosing a Medigap Policy, and Medicare and You 2017. Neither Spring Insurance Solutions LLC nor UnitedMedicareAdvisors.com are associated with or endorsed by these government websites and publications. We believe the sources we use to provide information are reliable. However, we do not guarantee or warrant the accuracy of this information.</p><br/><br/>

        <p>UnitedMedicareAdvisors.com provides the material on this website for informational purposes only.</p><br/><br/>

        <p>The contents of this website are subject to change without notice. If you would like to find more information about the Government Medicare program please visit the Official US Government Site for People with Medicare located at www.medicare.gov.</p><br/><br/>

        <p>Should you call the number listed above, you will speak with a licensed sales agent who can answer your questions and provide information about Medicare Supplement Insurance plans; this agent may also be able to connect you with a licensed sales agent to discuss Medicare Advantage and/or Medicare Part D plans. Neither United Medicare Advisors nor its agents are connected with or endorsed by the U.S. government or the federal Medicare program.</p>
        </div>
      </div>
      </div>


    )
  }
}

export default Hero;
