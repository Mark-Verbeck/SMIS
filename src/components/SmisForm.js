import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from "../utils/API";
import Group from "../images/Group.png";


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
    class1: "",
    class2: "none",
    class3: "stepTwoForm text-left",
    zipClass: "none",
    fNameClass: "none",
    lNameClass: "none",
    dobClass: "none",
    emailClass: "none",
    phoneClass: "none",
  }

  zipInputChange = (e) => {

    var regex = /[0-9|/]/;

    if(regex.test(window.event.data) === true){
      this.setState({ zip: e.target.value });
    }

    if(window.event.inputType === "deleteContentBackward"){
      this.setState({ zip: e.target.value });
    }





    }




  fNameInputChange = (e) => {
        this.setState({ firstName: e.target.value });
      }

  lNameInputChange = (e) => {
          this.setState({ lastName: e.target.value });
        }
  phoneInputChange = (e) => {
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



  }


  monthInputChange = (e) => {
              this.setState({ month: e.target.value });
            }
  dayInputChange = (e) => {
                this.setState({ day: e.target.value });
              }
  yearInputChange = (e) => {
                  this.setState({ year: e.target.value });
                }
  emailInputChange = (e) => {
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

    if(this.state.zip.length > 5 || this.state.zip.length < 5 ){
      this.setState({
        zipClass: ""
      });
    }else{
      this.setState({
        zipClass: "none"
      });
    }

    if(this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.day.length > 0 && this.state.month.length > 0 && this.state.year.length > 0 && this.state.email.includes("@", ".com") === true && this.state.email.includes(".com") === true && this.state.phone.length === 14){
      e.preventDefault();
     this.props.submit(this.state.month, this.state.day, this.state.year, this.state.zip);
    //  API.saveLead({
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   email: this.state.email,
    //   day: this.state.day,
    //   month: this.state.month,
    //   year: this.state.year,
    //   phone: this.state.phone,
    //   zipCode: this.state.zip
    // });
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
    this.props.fadeOutDiv();
    this.props.fade();

    setTimeout(
       function() {
         this.redirectToTarget();
       }
       .bind(this),
       500
   );
  }

  }

  nextStep = () => {
    if(this.state.zip.length > 5 || this.state.zip.length < 5 ){
      this.setState({
        zipClass: ""
      });
    }else if(this.state.zip.length === 5) {
      this.props.changePhoto();

      this.setState({
        class1: "animated fadeOut",
        class3: this.state.class3 + " heightTransition2"
      });

      setTimeout(
         function() {
           this.setState({
             class1: "none",
             class2: "paddingBottom animated fadeIn",
             zipClass: "none"
           })
         }
         .bind(this),
         900
     );
     
    }




  }

  render(){




    return(
      <div className="form-group formTwo mb-5">
      <div className="wrap1 ">



      <div className={this.state.class3}>
        <MDBRow className={this.state.class1}>

        <MDBCol lg="12" className="text-left" >

        <input
          type="text"
          className="form-control formInput "
          id="zipInput"
          onChange={this.zipInputChange}
          value={this.state.zip}
          maxLength={5}
          placeholder="ZIP CODE"

        />
        <button onClick={this.nextStep} className="submitButton hoverable ">Find My Plan</button>
        <span className={this.state.zipClass} style={{color: "red"}}> *This field is required</span>

        </MDBCol>

    </MDBRow>
    <MDBRow className={this.state.class2}>
    <div className="formTitle text-center mb-3 pb-3">
      <h3 >Tell us more about yourself</h3>
    </div>
          <MDBCol lg="6" className="paddingRight">
          <label htmlFor="firstNameInput">First Name</label>
          <input
            type="text"
            className="form-control formInput2"
            id="firstNameInput"
            onChange={this.fNameInputChange}
            value={this.state.firstName}
          />
          <span className={this.state.fNameClass} style={{color: "red"}}> *This field is required</span>
          </MDBCol>

          <MDBCol lg="6"><label htmlFor="lastNameInput">Last Name</label>
          <input
            type="text"
            className="form-control formInput2"
            id="lastNameInput"
            onChange={this.lNameInputChange}
            value={this.state.lastName}
          />
          <span className={this.state.lNameClass} style={{color: "red"}}> *This field is required</span>
          </MDBCol>
        </MDBRow>
        <MDBRow className={this.state.class2}>
          <MDBCol lg="6" className="paddingRight">
          <label htmlFor="zipInput">ZIP CODE</label>

          <input
            type="text"
            className="form-control formInput2 "
            id="zipInput"
            onChange={this.zipInputChange}
            value={this.state.zip}
            maxLength={5}
            placeholder="ZIP CODE"

          />
          <span className={this.state.zipClass} style={{color: "red"}}> *This field is required</span>
          </MDBCol>
          <MDBCol lg="6">
            <label htmlFor="phoneInput">Phone Number</label>
            <input
              type="text"
              className="form-control formInput2"
              id="phoneInput"
              onChange={this.phoneInputChange}
              value={this.state.phone}
              placeholder="###-###-####"
              pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              maxLength={14}
            />
            <span className={this.state.phoneClass} style={{color: "red"}}> *This field is required</span>
          </MDBCol>
        </MDBRow>
        <MDBRow className={this.state.class2}>

          <MDBCol lg="12">
          <label htmlFor="dobInput">Date of Birth </label>
          <div className="">
            <select onChange={this.monthInputChange} className=" custom-select">
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

            <select onChange={this.dayInputChange} className=" custom-select middleSelect">
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

            <select onChange={this.yearInputChange} className=" custom-select">
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
          <span className={this.state.dobClass} style={{color: "red"}}> *This field is required</span>
          </MDBCol>


        </MDBRow>

        <MDBRow className={this.state.class2}>

          <MDBCol lg="12">
            <label htmlFor="emailInput">Email Address</label>
            <input
              type="text"
              className="form-control formInput2 "
              id="emailInput"
              onChange={this.emailInputChange}
              value={this.state.email}
            />
            <span className={this.state.emailClass} style={{color: "red"}}> *This field is required</span>
          </MDBCol>

          <button onClick={this.handleSubmit} className="submitButtonStep2 hoverable align-self-center mt-3"><img src={Group} className="img-responsive oldMountain "/></button>

        </MDBRow>
        </div>


      </div>


      </div>

    );
  }
}

export default SmisForm;
