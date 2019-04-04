import React, { Component } from 'react';
import {Button,Row,Col,ButtonToolbar} from 'react-bootstrap';
import PostJob from './postJob';
export default class Hiring extends Component{
    render(){
        return(
            <div>
                <div className="top-hiring-section">
                <div className="top-hiring-content">
                <h2>Let us help you hire The Right Talent</h2>
                <p>Pakistan’s ONLY Job Portal, offering free job postings, now introduces<br />
                     “Hiring Solutions”, on demand, for our valued clients.<br />
                 BUZZ with us to help you find the best candidates NOW!</p>
                </div>
                <div className="top-hiring-image">
                <img src={require('../images/hiring.jpg')} alt="image here" title="this is hiring employs image." />
                </div>
               
                </div>
                <div className="hiring-main-area">
                <div className="Container"> 
                <Row>
                    <Col xs={12} xl={5} md={5} lg={5}  >
                    <div className="hiring-content-left">
                     <div className="hiring-content-header">
                     <center><i className="fa fa-tachometer"  aria-hidden="true"></i> Post jobs</center>
                     </div>
                     <div className="hiring-content-content">
                     <p>Post jobs. Find employees. Job and Staff hunting the web to find you the right talent for your open 
                         positions — delivering a quicker, easier way to post a job and find qualified candidates.
                         We believe in being a solutions-based service provider and recognise the importance of fostering high quality relationships with our clients.
                    </p>
                   <PostJob />

                 
                     </div>
                    </div>
                    </Col>
                    <Col xs={12} xl={7} md={7} lg={7}  >
                    <div className="hiring-content-right">
                    <div className="hiring-content-header">
                     <center> <i className="fa fa-tags"  aria-hidden="true"></i> Hiring Solutions against Registered employs</center>
                     
                     </div>
                     <div className="hiring-right-conten">
                     <p> Here you can find your staff according to the skills of persons and  you can also find employs city wise.</p>
                     <div className="search-bar">
             <div className="search-bar-multi">
             <input type="text" placeholder="skills..." />
             </div> 
             <div className="search-bar-multi">
             <input type="text" placeholder="city..." />
             </div>
             
             <div className="search-bar-multi">
             <ButtonToolbar>
 
            <Button variant="danger"  size="md">Search staff</Button>
            
            </ButtonToolbar>
             </div> 
             <p>We believe in being a solutions-based service provider and recognise
                  the importance of fostering high quality relationships with our clients. 
                  </p>
              </div>
                     </div>
                    </div>
                    </Col>
                 </Row>
                 </div>   
                </div>
            </div>
        );
    }
}