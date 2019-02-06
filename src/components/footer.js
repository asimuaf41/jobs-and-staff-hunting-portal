import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon ,MDBBtn } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
        <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Jobs By City</h6>
            
              <a href="#!" className="footer-cities">Jobs In Lahore</a>
              <br />
        
              <a href="#!" className="footer-cities">Jobs In Karachi</a>
            
              <br />
              <a href="#!" className="footer-cities"> Jobs In Islamabad</a>
          
              <br />
              <a href="#!" className="footer-cities">Jobs In Rawalpindi</a>
              <br />
          
              <a href="#!" className="footer-cities">Jobs In Faisalabad</a>
          
              <br />
              <a href="#!" className="footer-cities"> Jobs In Hyderabad</a>
              <br />
          
              <a href="#!" className="footer-cities"> Jobs In Sialkot</a>
              <br />
            
              <a href="#!" className="footer-cities"> Jobs In Multan</a>
              <br />
              <a href="#!" className="footer-cities"> Jobs In Peshawar</a>
              <br />
              <a href="#!" className="footer-cities">Jobs In Gujranwala</a>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-3 font-weight-bold">Jobs Functional Area</h6>
            
              <a href="#!" className="footer-cities">Software & Web Jobs</a>
              <br />
        
              <a href="#!" className="footer-cities"> Sales & Business  Jobs</a>
            
              <br />
              <a href="#!" className="footer-cities"> Creative Design Jobs</a>
          
              <br />
              <a href="#!" className="footer-cities">Telemarketing Jobs</a>
              <br />
          
              <a href="#!" className="footer-cities">Search Engine Optimization</a>
          
              <br />
              <a href="#!" className="footer-cities"> Accounts,Financial Jobs</a>
              <br />
          
              <a href="#!" className="footer-cities"> Client Services Jobs</a>
              <br />
            
              <a href="#!" className="footer-cities"> Secretarial,Front Office Jobs</a>
              <br />
              <a href="#!" className="footer-cities"> Administration Jobs</a>
              <br />
              <a href="#!" className="footer-cities">Writer Jobs</a>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-3 font-weight-bold">Jobs By Company</h6>
            
              <a href="#!" className="footer-cities">Air Force jobs</a>
              <br />
        
              <a href="#!" className="footer-cities">Advanced Digital Solutions</a>
            
              <br />
              <a href="#!" className="footer-cities"> Interactive Research And Development</a>
          
              <br />
              <a href="#!" className="footer-cities">Tech Skippers</a>
              <br />
          
              <a href="#!" className="footer-cities">Usman Memorial Hospital</a>
          
              <br />
              <a href="#!" className="footer-cities"> In Rainsoft Financials Pvt. Ltd.</a>
              <br />
          
              <a href="#!" className="footer-cities"> Babar Medicine Company</a>
              <br />
            
              <a href="#!" className="footer-cities"> The Learning Organization</a>
              <br />
              <a href="#!" className="footer-cities"> AIMVIZ</a>
            
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> UAF
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> asimuaf41@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +92 3026046119
            </p>
            <p>
              <i className="fa fa-print mr-3" /> +92 3496006162
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="social-button">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-button">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-button">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-button">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;