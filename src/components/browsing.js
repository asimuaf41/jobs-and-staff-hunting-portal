

import React, { Component } from 'react';
import { render } from 'react-dom';
import {Tabs,TabLink,TabContent} from 'react-tabs-redux';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
export default class Jobbrowsing extends Component {
  render() {
    return (
      <div>
          

      <Tabs className="Tabs" renderActiveTabContentOnly={true}>
        <ul>
            <li>
            <TabLink className="tab-link" to="tab1" default>
                job type
            </TabLink>
            </li>
            <li>
            <TabLink to="tab2">industry</TabLink>
            </li>
            <li>
            <TabLink to="tab3">location</TabLink>
            </li>
        </ul>

        <div>
            <TabContent for="tab1">
            
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                
                    
                <a href="#!" className="job-cities">Software & Web Development | 502</a>
                    <br />
                
                    <a href="#!" className="job-cities">Sales & Business Development | 445</a>
                    
                    <br />
                    <a href="#!" className="job-cities">Creative Design | 189</a>
                
                    <br />
                    <a href="#!" className="job-cities">Search Engine Optimization (SEO) | 133</a>
                    <br />
                    <a href="#!" className="job-cities"> Client Services & Customer Support | 96</a>
                    
                
                    
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                    <a href="#!" className="job-cities">Secretarial, Clerical & Front Office | 79</a>
                    <br />
                    
                    <a href="#!" className="job-cities">Administration | 71</a>
                    <br />
                    <a href="#!" className="job-cities">Health & Medicine | 38 Health & Medicine Jobs</a>
                    <br />
                    <a href="#!" className="job-cities">Computer Networking | 34</a>
                    <br />
                    <a href="#!" className="job-cities"> Maintenance/Repair | 20</a>
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                
                    
                   <a href="#!" className="job-cities">Teachers/Education, Training & Development | 40</a>
                    <br />
                    <a href="#!" className="job-cities">Hotel/Restaurant Management | 33</a>
                    <br />
                    <a href="#!" className="job-cities">Computer Networking | 34</a>
                    
                    <a href="#!" className="job-cities">Computer Networking | 34</a>
                    <br />
                    <a href="#!" className="job-cities"> Computer Networking | 34</a>
                    
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
             
                <a href="#!" className="job-cities">Computer Networking | 34</a>
            
                <br />
                <a href="#!" className="job-cities">Hotel/Restaurant Management | 33</a>
                <br />
            
                <a href="#!" className="job-cities">Hotel/Restaurant Management | 33</a>  
                <br /> 
                <a href="#!" className="job-cities">Administration | 71</a>
                <br />
            
                <a href="#!" className="job-cities">Administration | 71</a>
                
               
            
              

            </MDBCol>
            
                </MDBRow>
      </MDBContainer>

            </TabContent>
            <TabContent for="tab2">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                
                    
                <a href="#!" className="job-cities">Information Technology | 735</a>
                    <br />
                
                    <a href="#!" className="job-cities">Engineering | 56</a>
                    
                    <br />
                    <a href="#!" className="job-cities"> Information Technology | 735</a>
                
                    <br />
                    <a href="#!" className="job-cities">Engineering | 56</a>
                    <br />
                    <a href="#!" className="job-cities"> Information Technology | 735</a>
                    
                
                    
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                    <a href="#!" className="job-cities">Software and web development | 109</a>
                    <br />
                    
                    <a href="#!" className="job-cities">Software and web development | 109</a>
                    <br />
                    <a href="#!" className="job-cities"> Software and web development | 109</a>
                    <br />
                    <a href="#!" className="job-cities">Information Technology | 735</a>
                    <br />
                    <a href="#!" className="job-cities"> Textiles/Garments | 38</a>
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                
                    
                   <a href="#!" className="job-cities">Information Technology | 735</a>
                    <br />
                    <a href="#!" className="job-cities">Information Technology | 735</a>
                    <br />
                    <a href="#!" className="job-cities">Textiles/Garments | 38</a>
                    
                    <a href="#!" className="job-cities">Textiles/Garments | 38</a>
                    <br />
                    <a href="#!" className="job-cities"> Information Technology | 735</a>
                    
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
             
                <a href="#!" className="job-cities">Engineering | 56</a>
            
                <br />
                <a href="#!" className="job-cities">Distributors/Exporters | 54</a>
                <br />
            
                <a href="#!" className="job-cities">Travel/Tourism/Transportation | 40</a>  
                <br /> 
                <a href="#!" className="job-cities">Construction/Cement/Metals | 30</a>
                <br />
            
                <a href="#!" className="job-cities">Construction/Cement/Metals | 30</a>
                
               
            
              

            </MDBCol>
            
                </MDBRow>
      </MDBContainer>


            
            
            
            </TabContent>
            <TabContent for="tab3">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                
                    
                <a href="#!" className="job-cities">Lahore,Pakistan| 45</a>
                    <br />
                
                    <a href="#!" className="job-cities">Karachi, Pakistan | 200</a>
                    
                    <br />
                    <a href="#!" className="job-cities"> Islamabad,Pakistan | 120</a>
                
                    <br />
                    <a href="#!" className="job-cities">Rawalpindi,Pakistan | 150</a>
                    <br />
                    <a href="#!" className="job-cities"> Hyderabad,Pakistan | 41</a>
                    
                
                    
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                    <a href="#!" className="job-cities">Sialkot,Pakistan | 33</a>
                    <br />
                    
                    <a href="#!" className="job-cities">Multan,Pakistan | 28</a>
                    <br />
                    <a href="#!" className="job-cities"> Peshawar,Pakistan | 78</a>
                    <br />
                    <a href="#!" className="job-cities">Gujranwala,Pakistan | 75</a>
                    <br />
                    <a href="#!" className="job-cities"> Peshawar,Pakistan | 78</a>
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                
                    
                   <a href="#!" className="job-cities">Faisalabad ,Pakistan | 100</a>
                    <br />
                    <a href="#!" className="job-cities"> Peshawar,Pakistan | 78</a>
                    <br />
                    <a href="#!" className="job-cities">Gujranwala,Pakistan | 75</a>
                    
                    <a href="#!" className="job-cities">Multan,Pakistan | 28</a>
                    <br />
                    <a href="#!" className="job-cities"> Peshawar,Pakistan | 78</a>
                    
                </MDBCol>
                <hr className="w-100 clearfix d-md-none" />
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
             
                <a href="#!" className="job-cities"> Islamabad,Pakistan | 120</a>
            
                <br />
                <a href="#!" className="job-cities">Rawalpindi,Pakistan | 150</a>
                <br />
            
                <a href="#!" className="job-cities">Faisalabad ,Pakistan | 100</a>  
                <br /> 
                <a href="#!" className="job-cities">Lahore,Pakistan| 45</a>
                <br />
            
                <a href="#!" className="job-cities">Karachi, Pakistan | 200</a>
                
               
            
              

            </MDBCol>
            
                </MDBRow>
      </MDBContainer>

            </TabContent>
        </div>
        </Tabs>
      </div>
    );
  }
}
 