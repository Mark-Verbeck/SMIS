import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


class SmisForm extends Component {
  state={
    zip: '',
    firstName: '',
    lastName: '',
    email: '',
    day:'',
    month: '',
    year: '1950',
    phone: '',
    class1: "paddingBottom",
    class2: "none",
    zipClass: "none",
    fNameClass: "none",
    lNameClass: "none",
    dobClass: "none",
    emailClass: "none",
    phoneClass: "none",
  }

  handleValueChange = (e) => {

    var regex = /[0-9|/]/;

    if(regex.test(window.event.data) === true){
      this.setState({ zip: e.target.value });
    }

    if(window.event.inputType === "deleteContentBackward"){
      this.setState({ zip: e.target.value });
    }

    



    }




  handleValueChange2 = (e) => {
        this.setState({ firstName: e.target.value });
      }

  handleValueChange3 = (e) => {
          this.setState({ lastName: e.target.value });
        }
  handleValueChange4 = (e) => {
    var regex = /[0-9|/]/;

    if(regex.test(window.event.data) === true){
      if(this.state.phone.length === 0){
        this.setState({ phone: "(" + window.event.data  });
      }

      if(this.state.phone.length > 0 && this.state.phone.length < 3){
        this.setState({ phone:e.target.value });

      }

      if(this.state.phone.length === 3){
        this.setState({ phone: e.target.value + ")" });
      }

      if(this.state.phone.length === 5){
        this.setState({ phone: this.state.phone + " " + window.event.data });
      }

      if(this.state.phone.length > 5 && this.state.phone.length < 9){
        this.setState({ phone:e.target.value });

      }

      if(this.state.phone.length === 9){
        this.setState({ phone: this.state.phone + "-" + window.event.data });
      }

      if(this.state.phone.length > 9){
        this.setState({ phone:e.target.value});
      }






    }

    if(window.event.inputType === "deleteContentBackward"){
      this.setState({ phone: e.target.value });
    }

    if(window.event.type === "input"){
      this.setState({ zip: e.target.value });

    }

  }


  handleValueChange5 = (e) => {
              this.setState({ month: e.target.value });
            }
  handleValueChange6 = (e) => {
                this.setState({ day: e.target.value });
              }
  handleValueChange7 = (e) => {
                  this.setState({ year: e.target.value });
                }
  handleValueChange8 = (e) => {
                    this.setState({ email: e.target.value });
                  }

    redirectToTarget = () => {
    this.props.history.push(`/thank-you`);
  }

    handleSubmit = (e) => {
    e.preventDefault();

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(this.state.firstName.length === 0){
      this.setState({
        fNameClass: ""
      });
    }else{
      this.setState({
        fNameClass: "none"
      });
    }

    if(this.state.lastName.length === 0){
      this.setState({
        lNameClass: ""
      });

    }else{
      this.setState({
        lNameClass: "none"
      });
    }

    if(this.state.day.length === 0 || this.state.month.length === 0 || this.state.year.length === 0){
      this.setState({
        dobClass: ""
      });
    }else{
      this.setState({
        dobClass: "none"
      });
    }

    if(re.test(this.state.email) === false){
      this.setState({
        emailClass: ""
      });
    }else{
      this.setState({
        emailClass: "none"
      });
    }






    if(this.state.phone.length === 14){
      this.setState({
        phoneClass: "none"
      });
    }else{
      this.setState({
        phoneClass: ""
      });
    }

    if(this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.day.length > 0 && this.state.month.length > 0 && this.state.year.length > 0 && this.state.email.includes("@", ".com") === true && this.state.email.includes(".com") === true && this.state.phone.length === 14){
      e.preventDefault();
     this.props.submit(this.state.month, this.state.day, this.state.year, this.state.zip);

      this.setState({
        zip: '',
        firstName: '',
        lastName: '',
        email: '',
        day:'',
        month: '',
        year: '',
        phone: '',
    });
    this.redirectToTarget();
  }

  }

  nextStep = () => {

    if(this.state.zip.length > 5 || this.state.zip.length < 5 ){
      this.setState({
        zipClass: ""
      });
    }else if(this.state.zip.length === 5) {
      this.setState({
        class1: "none",
        class2: "paddingBottom"
      });
    }


  }

  render(){




    return(
      <div className="form-group formTwo">
      <div className="wrap1 divPadding">
      <div className="stepTwoForm">
        <MDBRow className={this.state.class1}>
        <MDBCol lg="12" >
        <label htmlFor="firstNameInput">ZIP Code <span className={this.state.zipClass} style={{color: "red"}}> *This field is required</span></label>

        <input
          type="text"
          className="form-control formInput mb-3"
          id="zipInput"
          onChange={this.handleValueChange}
          value={this.state.zip}
          maxLength={5}

        />
        <button onClick={this.nextStep} className="submitButton hoverable mb-3">Next Step</button>
        </MDBCol>

    </MDBRow>
    <MDBRow className={this.state.class2}>

          <MDBCol lg="6" className="paddingRight">
          <label htmlFor="firstNameInput">First Name<span className={this.state.fNameClass} style={{color: "red"}}> *This field is required</span></label>
          <input
            type="text"
            className="form-control formInput"
            id="firstNameInput"
            onChange={this.handleValueChange2}
            value={this.state.firstName}
          />
          </MDBCol>

          <MDBCol lg="6"><label htmlFor="">Last Name<span className={this.state.lNameClass} style={{color: "red"}}> *This field is required</span></label>
          <input
            type="text"
            className="form-control formInput"
            id="firstNameInput"
            onChange={this.handleValueChange3}
            value={this.state.lastName}
          /></MDBCol>
        </MDBRow>
        <MDBRow className={this.state.class2}>
          <MDBCol lg="6" className="paddingRight">
          <label htmlFor="firstNameInput">Date of Birth <span className={this.state.dobClass} style={{color: "red"}}> *This field is required</span></label>
          <div>
            <select onChange={this.handleValueChange5} className=" custom-select">
              <option>Month</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

            <select onChange={this.handleValueChange6} className=" custom-select middleSelect">
              <option>Day</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>


            </select>

            <select onChange={this.handleValueChange7} className=" custom-select">
              <option>Year</option>
              <option value="1920">1920</option>
              <option value="1921">1921</option>
              <option value="1922">1922</option>
              <option value="1923">1923</option>
              <option value="1924">1924</option>
              <option value="1925">1925</option>
              <option value="1926">1926</option>
              <option value="1927">1927</option>
              <option value="1928">1928</option>
              <option value="1929">1929</option>
              <option value="1930">1930</option>
              <option value="1931">1931</option>
              <option value="1932">1932</option>
              <option value="1933">1933</option>
              <option value="1934">1934</option>
              <option value="1935">1935</option>
              <option value="1936">1936</option>
              <option value="1937">1937</option>
              <option value="1938">1938</option>
              <option value="1939">1939</option>
              <option value="1940">1940</option>
              <option value="1941">1941</option>
              <option value="1942">1942</option>
              <option value="1943">1943</option>
              <option value="1944">1944</option>
              <option value="1945">1945</option>
              <option value="1946">1946</option>
              <option value="1947">1947</option>
              <option value="1948">1948</option>
              <option value="1949">1949</option>
              <option value="1950" selected>1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
              <option value="1954">1954</option>
              <option value="1955">1955</option>
              <option value="1956">1956</option>
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1962</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1977">1977</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
          </div>
          </MDBCol>
          <MDBCol lg="6">
            <label htmlFor="firstNameInput">Phone Number<span className={this.state.phoneClass} style={{color: "red"}}> *This field is required</span></label>
            <input
              type="text"
              className="form-control formInput"
              id="firstNameInput"
              onChange={this.handleValueChange4}
              value={this.state.phone}
              placeholder="###-###-####"
              pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              maxLength={14}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className={this.state.class2}>

          <MDBCol lg="12">
            <label htmlFor="firstNameInput">Email Address<span className={this.state.emailClass} style={{color: "red"}}> *This field is required</span></label>
            <input
              type="text"
              className="form-control formInput mb-3"
              id="firstNameInput"
              onChange={this.handleValueChange8}
              value={this.state.email}
            />
          </MDBCol>

          <button onClick={this.handleSubmit} className="submitButton hoverable">Compare Rates</button>

        </MDBRow>
        </div>
        <div className="stepTwoLegal">
          <p>By clicking the button above, you provide your signature expressly consenting to receive communications via live telephone, an automatic dialing system, pre-recorded message, or text message from United Medicare Advisors or its subsidiaries, affiliates, or agents at the telephone number provided including your wireless number (if provided) as well as via email regarding your health insurance options including Medicare Supplement Insurance, Medicare Advantage, and/or Medicare Part D. Your consent to receive communications in this way is not required as a condition of purchasing any goods or services. Your telephone company may impose additional charges for text messages, and you may revoke your consent at any time through any reasonable manner. You acknowledge that you have read and understand all of the Terms and Conditions and Privacy Policy of this site.</p>

          <p>UnitedMedicareAdvisors.com is an online resource for Medicare Supplement, Medicare Advantage, Medicare Part D, and health insurance information, along with competitive quotes from some of the nation’s top insurance companies. Our mission is to help individuals by offering the best available plans at prices that are affordable.</p>

          <p>United Medicare Advisors and UnitedMedicareAdvisors.com is wholly owned and operated by Spring Insurance Solutions LLC. Spring Insurance Solutions and their divisions are licensed to sell insurance products in the following states: AL, AZ, AR, CO, CT, DE, FL, GA, ID, IL, IN, IA, KS, KY, LA, ME, MD, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NC, ND, OH, OK, OR, PA, SC, SD, TN, TX, UT, VT, VA, WA, DC, WV, WI, WY. </p>

          <p>To provide you with easy-to-understand information about your Medicare options, UnitedMedicareAdvisors.com researched government websites and publications, such as those of Medicare.gov, 2016 Choosing a Medigap Policy, and Medicare and You 2017. Neither Spring Insurance Solutions LLC nor UnitedMedicareAdvisors.com are associated with or endorsed by these government websites and publications. We believe the sources we use to provide information are reliable. However, we do not guarantee or warrant the accuracy of this information.</p>

          <p>UnitedMedicareAdvisors.com provides the material on this website for informational purposes only.</p>

          <p>The contents of this website are subject to change without notice. If you would like to find more information about the Government Medicare program please visit the Official US Government Site for People with Medicare located at www.medicare.gov.</p>

          <p>Should you call the number listed above, you will speak with a licensed sales agent who can answer your questions and provide information about Medicare Supplement Insurance plans; this agent may also be able to connect you with a licensed sales agent to discuss Medicare Advantage and/or Medicare Part D plans. Neither United Medicare Advisors nor its agents are connected with or endorsed by the U.S. government or the federal Medicare program.</p>
          </div>

      </div>


      </div>

    );
  }
}

export default SmisForm;
