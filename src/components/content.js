import React, { Component } from 'react';

import { Button,ButtonToolbar} from 'react-bootstrap';
import Company from './companies';
import Jobbrowsing from './browsing';
import FeatureJob from './featurejob';
import ProfileSlider from './profileSlider';
class Content extends Component{
    render(){
        return(
            <div className="content">
             <img src={require('../images/kk.png')} className="content-image"/>
           
            <div className="search-bar1">
             <div className="search-bar-multi">
             <input type="text" placeholder="What are you you looking for?" />
             </div> 
             <div className="search-bar-multi">
             <input type="text" placeholder="city..." />
             </div>
            
             <div className="search-bar-multi">
             <ButtonToolbar>
 
            <Button variant="success"  size="md">Search</Button>
            
            </ButtonToolbar>
             </div> 
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
 