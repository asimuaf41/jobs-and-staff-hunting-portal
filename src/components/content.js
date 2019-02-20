import React, { Component } from 'react';
import {MDBContainer,MDBBtn,MDBFormInline ,MDBIcon} from "mdbreact";
import { Carousel} from 'react-bootstrap';
import Company from './companies';
import Jobbrowsing from './browsing';
import FeatureJob from './featurejob';
import ProfileSlider from './profileSlider';
class Content extends Component{
    render(){
        return(
            <div className="content">
             <img src={require('../images/kk.png')} className="content-image"/>
            {'  '}
             <div className="search_bar">

        
             <MDBContainer>
             <MDBFormInline className="md-form mr-auto mb-4">
            
                <input  className="form-control mr-sm-3"  type="text" placeholder="What are you looking for?" aria-label="Search" />
                
                <input className="form-control mr-sm-3" type="text" placeholder="location" aria-label="Search" />
                <MDBBtn outline color="success" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
                
               
             </MDBFormInline>
             </MDBContainer>
             </div>

              <div className="jobBrowsinng">
            <p>Browse Jobs in Pakistan</p>
             <Jobbrowsing />
            </div> 
             <div className="hiring-company">
             <div className="hiring-title">
             <p>Companies Currently Hiring in Pakistan</p>
             </div>
             <div className="job-companies">
             <Company />
             </div>
                
             </div>
          
           
            <div className="Featured-job">
            <p >Featured  Jobs in Pakistan</p>
             <FeatureJob />
            </div>
            <div className="feature-profiles">
            <center><p>Featured Profile</p></center>
           <div className="profile-cards">
           <ProfileSlider />
           </div>
            </div>
            </div>
        );
    }
}
export default Content;
 