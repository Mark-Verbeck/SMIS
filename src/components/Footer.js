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
        <p>By clicking the button above, you provide your signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from representatives or agents of SmartMatch Insurance Solutions, its subsidiaries, affiliates and their partner companies at the telephone number provided including your wireless number (if provided) as well as via email regarding Medicare insurance options. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You expressly consent to receive phone calls and email regardless of whether you are on any Federal or state DNC (Do Not Call) and/or DNE (Do Not Email) list or registry. Find their information online at <a href="https://www.donotcall.gov/">https://www.donotcall.gov/</a>. You acknowledge that you have read and understand all of the <Link to="/terms-conditions">Terms and Conditions</Link> and <Link to="/privacy-policy">Privacy Policy</Link> of this site.</p><br/><br/>

        <p>Should you call the number listed above, you will speak with a licensed insurance agent who can provide information about Medicare insurance; this licensed insurance agent may also be able to provide plan and pricing options to you for the purposes of selling a Medicare insurance product. You are not required to purchase any goods or services. Neither SmartMatch Insurance Solutions nor its licensed insurance agents are connected with or endorsed by the U.S. government or the federal Medicare program.</p><br/><br/>

        <p>SmartMatch Insurance Solutions licensed to sell insurance products in the following states: AL, AR, AZ, CA, CO, CT, DE, FL, GA, IA, ID, IL, IN, KS, KY, LA, MD, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, WI, WV, WY.</p>

        <p>SmartMatch Insurance Solutions is not associated with or endorsed by the U.S. Centers for Medicare & Medicaid Services, any government websites, or publications.</p><br/><br/>

        <p>The contents of this website are subject to change without notice. We believe the sources used to provide this information are reliable. However, we do not guarantee or warrant the accuracy of this information. SmartMatch Insurance Solutions provides the material on this website for informational purposes only. If you would like to find more information about the Government Medicare program, please visit the Official US Government Site for People with Medicare located at <a href="https://www.medicare.gov">www.medicare.gov</a>.</p><br/><br/>

        
        </div>
      </div>
      </div>


    )
  }
}

export default Hero;
