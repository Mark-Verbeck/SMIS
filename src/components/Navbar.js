import React from 'react';
import logo from "../images/logo.png";
import phone from "../images/phone-orange.png";
import{Link} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';




const Navbar = (props) => {
  return(
    <div className="divPadding2">
      <div className="wrap1">
        <MDBRow>

          <MDBCol xsm="12" sm="12"  className="text-right d-flex align-items-center">
           <img src={logo} className='img-responsive logo floatLeft' />




          <img src={phone} className='img-responsive ml-auto navImg ' />
          <div className="navText floatRight text-left align-self-center">
            <a href="tel: 9131234567"><h3><strong>(913) 123-4567</strong></h3></a>
            <Link to="/"><h4>Get <strong>SmartMatched</strong> Today!</h4></Link>
          </div>

          </MDBCol>

        </MDBRow>
      </div>
    </div>

  );
}

export default Navbar;
