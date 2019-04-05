import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import FooterUni from "../components/FooterUni";
import thumbnail5 from "../images/maoep_hero-compressor.png";
import FormStepTwo2 from "../components/FormStepTwo2";
import{Link} from 'react-router-dom';
import LandingFooter2 from "../components/LandingFooter2";



class MedicareAdvantage extends Component {
  render(){


    return(
      <div>
      <div className="surveyHeader divPadding2">
        <div className="wrap1 table">
        <MDBRow>
          <MDBCol lg="4" className=" paddingRight">
            <img src={thumbnail5} className="ebookImg img-responsive" />
          </MDBCol>

          <MDBCol lg="8" className="paddingLeft downloadDiv2 align-self-center">
            <h2>Medicare Advantage Open Enrollment Period January 1 – March 31</h2>
            <h3>Make better Medicare decisions with United Medicare Advisors</h3>
          </MDBCol>
        </MDBRow>
        </div>
      </div>

      <div className="wrap1 divPadding3">
      <MDBRow>
        <MDBCol lg="8" className="ebookDescription paddingRight">

          <p>Good news! In 2019, you<span>&#39;</span>ll have more time to make changes to your Medicare policy during the new Medicare Advantage Open Enrollment Period (MAOEP). This enrollment period is replacing the previous Medicare Advantage Disenrollment Period and runs from <strong>January 1 - March 31 every year.</strong> </p>

          <h3>MA Open Enrollment Period gives you the power to:</h3>

          <ul>
            <li><i className="fas fa-angle-right paddingRight"></i> Switch to a different Medicare Advantage plan</li>
            <li><i className="fas fa-angle-right paddingRight"></i> Drop your Medicare Advantage plan and return to Original Medicare (Part A and Part B)</li>
            <li><i className="fas fa-angle-right paddingRight"></i> Apply for a Medigap (Medicare Supplement) Plan if you drop your Medicare Advantage Plan.</li>
            <li><i className="fas fa-angle-right paddingRight"></i> Sign up for a standalone Part D prescription drug plan (if you return to Original Medicare).</li>

          </ul>

          <p>United Medicare Advisors (UMA) is here to answer all your questions about your coverage during MAOEP. And we’ve already helped over 200,000 people like you get better Medicare coverage at a better price. </p>

          <h3>Here’s what makes us different:</h3>

          <MDBRow>

            <MDBCol lg="4" className="text-center stat">
              <h3>20+<br/><span className="stat-label">Carriers</span></h3>
              <p>We help you compare rates across 20+ different carriers so you can save money on your existing policy, or switch to a new one.</p>
            </MDBCol>

            <MDBCol lg="4" className="text-center stat">
              <h3>$634<br/><span className="stat-label">Annual savings</span></h3>
              <p>Our customers save an average of $634 every year when they compare Medigap rates.</p>
            </MDBCol>

            <MDBCol lg="4" className="text-center stat">
              <h3>30 days<br/><span className="stat-label">To decide</span></h3>
              <p>You have 30 days to decide if you want to keep your new policy if you switch, risk-free.</p>
            </MDBCol>

          </MDBRow>

        </MDBCol>

        <MDBCol lg="4" className="paddingLeft">
        <FormStepTwo2 {...this.props} state={this.props.state} submit={this.props.submit} classes="redLabel text-center divPadding" headerText="Ready to compare rates?" buttonText="See My Personalized Rates" classes2="form-group formTwo compare365Form"/>

        </MDBCol>
      </MDBRow>
      </div>

      <div className="medOutlookBottomDiv">
        <div className="wrap1 divPadding">
          <MDBRow>
            <MDBCol lg="12" className="paddingRight">
              <h3 className="learnMore">Learn More about Medicare Advantage and Medigap:</h3>
              <p>And some more blog things..</p>

            </MDBCol>
          </MDBRow>
        </div>
      </div>
        <LandingFooter2 />
        <FooterUni />
      </div>

    );
  }
}

export default MedicareAdvantage;
