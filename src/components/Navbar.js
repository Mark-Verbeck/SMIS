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

          <MDBCol lg="6"  className="">
          <Link to="/"> <img src={logo} className='img-responsive ' /> </Link>


          </MDBCol>
          <MDBCol lg="6" className="text-right">

          <img src={phone} className='img-responsive navImg' />
          <div className="navText floatRight text-left">
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
