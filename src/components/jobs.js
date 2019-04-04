import React, { Component } from 'react';
import {Button,Row,Col,ButtonToolbar} from 'react-bootstrap';
import { Visible, Hidden, setConfiguration } from 'react-grid-system';
import {MDBContainer,MDBBtn,MDBFormInline ,MDBIcon} from "mdbreact";
import $ from 'jquery';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css'
import { MDBInput } from 'mdbreact';
import { connect } from "react-redux";
import {setJobs} from '../actions/userActions';
import axios from "axios";
class Jobs extends Component{

     componentDidMount(){
       
         fetch('/getAllJobs')
         .then((res)=>res.json())
         .then((json)=>{
        
             this.props.dispatch(setJobs(json.data))
             
            
         })
         .catch((error)=>console.log(error));
     }
    


    render(){
    var data=Array.from(this.props.jobs)
   let jobs=data.map((job)=>{
        return <div className="job-post-area" key={job._id}>
        <div className="post-header">
        <div className="post-logo">
        <img
       className="job-logo"
       src={require('../images/abc (2).jpg')}
       alt="Third slide"
       />
        </div>
        <div className="post-title">
        <p>{job.title}<p><i class="fa fa-clock-o" aria-hidden="true"></i> {job.currentTime}</p></p>
       
        </div>
       
        </div>
        <div className="post-content">
        <div className="company-name">
         <p><i class="fa fa-institution" aria-hidden="true"></i> company : {job.company}<span className="job-location"><i class="fa fa-map-marker" aria-hidden="true"></i> {job.location}, Pakistan</span></p>
        </div>
        <div className="job-detail">
        {job.jobDetail}
        </div>
        <div className="job-features">
        <p><i class="fa fa-cc-visa" aria-hidden="true"></i> Rs.{job.salary} salary </p>
        <p><i class="fa fa-mortar-board" aria-hidden="true"></i> {job.experiance}</p>
        <p><i class="fa fa-flag" aria-hidden="true"></i> {job.totalSeats} total positions</p>  
        </div>
        <div className="job-requirement">
        <p><i class="fa fa-tags" aria-hidden="true"> </i>{" "} </p>
        <p>  {job.skills}</p>  
        </div>
        <div className="post-footer">
        <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7 likes  </p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> 5 comments  </p>
        <p><i class="fa fa-share-alt" aria-hidden="true"></i> 7 shares </p>
        </div>
        </div>
       </div>
    })
    var topData=Array.from(this.props.jobs);
    let topJobs=topData.map((job)=>{
      if(job.salary > 50000){
        return  <div className="top-job-post">
        <div className="post-title">
         <p>{job.title}<p><i class="fa fa-clock-o" aria-hidden="true"></i>{job.currentTime}</p></p>
        
         </div>
        
       
         <div className="post-content">
         <div className="company-name">
          <p><i class="fa fa-institution" aria-hidden="true"></i> company : {job.company}<span className="job-location"><i class="fa fa-map-marker" aria-hidden="true"></i> {job.location}, Pakistan</span></p>
         </div>
         
         <div className="job-top-features">
         <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.{job.salary}</p>
         <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance: {job.experiance}</p>
         <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : {job.totalSeats}</p> 
         <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
         </div>
         <div className="job-top-requirement">
         <p><i class="fa fa-tags" aria-hidden="true"></i> </p>
         <p>{job.skills}</p>
         
         </div>
         
         </div>
        </div>
      }

    })
        return(
            <div>
              <div className="search-bar">
             <div className="search-bar-multi">
             <input type="text" placeholder="skills..." />
             </div> 
             <div className="search-bar-multi">
             <input type="text" placeholder="city..." />
             </div>
             <div className="search-bar-multi">
             <input type="text" placeholder="Functional Area..." />
             </div>
             <div className="search-bar-multi">
             <ButtonToolbar>
 
            <Button variant="success"  size="md">Search</Button>
            
            </ButtonToolbar>
             </div> 
              </div>
               <div className="Container"> 
                <Row>
                    <Col  xl={3} md={4} lg={3}  ><Hidden xs sm>
                    
                    <div className="search-job-header">
                    <p>jobs by specific area <i class="fa fa-search" aria-hidden="true"></i> </p>
                    </div> 
                    <div >
                        
                    
                    <Accordion atomic={false}>

                    <AccordionItem  title="Cities">
                      

                     <div className="job-by-cities">
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Lahore, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">51</p>
                     </div>

                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Faisalabad, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">37</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">karachi, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">23</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Multan, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">45</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">pashawar, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">77</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">islamabad, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">41</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Gujranwala, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">71</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Sialkot, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">42</p>
                     </div>
                     <div className="apply-filter">
                     <ButtonToolbar>
                    <Button variant="primary">apply filter</Button>
                    
                    </ButtonToolbar>
                     </div>
                     </div>
                    </AccordionItem>
                     </Accordion>


                    <Accordion atomic={false}>
                    <AccordionItem  title="job title">
                      
                     <div className="job-by-cities">
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Senior Laravel Developer
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">2</p>
                     </div>

                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">ReactJS Developer
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">9</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Admin & Accounts Officer
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">7</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Creative Content Writer
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">5</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Security Solutions-Ethical Hacker
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">1</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Call Center Representative
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">6</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Salesman / Sales Officer
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">71</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Senior LAMP Stack Developer
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">5</p>
                     </div>
                     <div className="apply-filter">
                     <ButtonToolbar>
                    <Button variant="primary">apply filter</Button>
                    
                    </ButtonToolbar>
                     </div>
                     </div>
                    </AccordionItem>
                      </Accordion> 




                      <Accordion atomic={false}>
                      <AccordionItem  title="Functional Area">
                     
                      <div className="job-by-cities">
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Sales & Business Development
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">51</p>
                     </div>

                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Software & Web Development 
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">37</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Creative Design jobs
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">23</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Accounts & Financial Services
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">45</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Telemarketing jobs
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">77</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Administration
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">41</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Secretarial, Clerical & Front Office
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">71</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Search Engine Optimization (SEO)
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">31</p>
                     </div>
                     <div className="apply-filter">
                     <ButtonToolbar>
                    <Button variant="primary">apply filter</Button>
                    
                    </ButtonToolbar>
                     </div>
                     </div>
                    </AccordionItem>
                  
                      </Accordion> 


                     <Accordion atomic={false}>
                     <AccordionItem  title="Carer level">
                      
                     <div className="job-by-cities">
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Entry Level 
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">51</p>
                     </div>

                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Intermediate
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">37</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Experienced Professional
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">23</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Department Head
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">45</p>
                     </div>
                    
                     <div className="apply-filter">
                     <ButtonToolbar>
                    <Button variant="primary">apply filter</Button>
                    
                    </ButtonToolbar>
                     </div>
                     </div>
                    </AccordionItem>
                  
                     </Accordion>  
                     <Accordion atomic={false}>
                     <AccordionItem  title="degree level">
                     
                     <div className="job-by-cities">
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Bachelors
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">51</p>
                     </div>

                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Intermediate/A-Level
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">37</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label"> Masters
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">23</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Matriculation/O-Level
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">45</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Diploma
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">77</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Non-Matriculation
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">41</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label"> Certification
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">71</p>
                     </div>
                     <div className="specific-area-element">
                  
                     <label className="checkbox-label">Sialkot, Pakistan
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                    </label> 
                     <p className="specific-total">42</p>
                     </div>
                     <div className="apply-filter">
                     <ButtonToolbar>
                    <Button variant="primary">apply filter</Button>
                    
                    </ButtonToolbar>
                     </div>
                     </div>
                    </AccordionItem>
                     </Accordion>
                        
                    </div></Hidden></Col>
                    
                    
                    
                    
                    <Col xs={12} md={8} xl={6}  lg={6}  sm={12}  >
                    <div className="search-job-header">
                    <p>jobs in Pakistan <i class="fa fa-search" aria-hidden="true"></i> </p>
                    </div>




                     {jobs}

                   










                    
                    <div className="job-post-area">
                     <div className="post-header">
                     <div className="post-logo">
                     <img
                    className="job-logo"
                    src={require('../images/abc (3).jpg')}
                    alt="Third slide"
                    />
                     </div>
                     <div className="post-title">
                     <p>Senior IOS Developer / IOS Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                     </div>
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> islamabad, Pakistan</span></p>
                     </div>
                     <div className="job-detail">
                     We are seeking a brilliant IOS Developer, who is able to develop advanced business applications in a native environment without a hiccup. We are a tea
                     We are seeking a brilliant IOS Developer, who is able to develop advanced business applications in a native environment without a hiccup. We are a tea ...
                     </div>
                     <div className="job-features">
                     <p>Rs.20K-30K salary</p>
                     <p>Fresh Experiance</p>
                     <p>4 total positions</p>  
                     </div>
                     <div className="job-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     <div className="post-footer">
                     <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 25 likes  </p>
                     <p><i class="fa fa-share-alt" aria-hidden="true"></i> 8 comments  </p>
                     <p><i class="fa fa-comments" aria-hidden="true"></i> 4 shares </p>
                     </div>
                     </div>
                    </div>



                    <div className="job-post-area">
                     <div className="post-header">
                     <div className="post-logo">
                     <img
                    className="job-logo"
                    src={require('../images/abc (4).jpg')}
                    alt="Third slide"
                    />
                     </div>
                     <div className="post-title">
                     <p>Software Developer / ReactJS Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 11:08PM 10 feb 2019</p></p>
                    
                     </div>
                    
                     </div>
                     <div className="post-content">
                     <div className="company-name">
                      <p>company :BT & Al Technology Pvt Ltd<span className="job-location"> karachi, Pakistan</span></p>
                     </div>
                     <div className="job-detail">
                     We are looking for a Software Developer / ReactJS Developer Ability to learn new languages and technologies Excellent communication skills Resour
                     We are looking for a Software Developer / ReactJS Developer Ability to learn new languages and technologies Excellent communication skills Resour ...
                     </div>
                     <div className="job-features">
                     <p>Rs.20K-60K salary</p>
                     <p>Fresh Experiance</p>
                     <p>10 total positions</p>  
                     </div>
                     <div className="job-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> ReactJS</p>|
                     <p> Andriod Developer</p>|
                     <p> expressJs</p>  
                     </div>
                     <div className="post-footer">
                     <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7 likes  </p>
                     <p><i class="fa fa-share-alt" aria-hidden="true"></i> 5 comments  </p>
                     <p><i class="fa fa-comments" aria-hidden="true"></i> 7 shares </p>
                     </div>
                     </div>
                    </div>
                    <div className="job-post-area">
                     <div className="post-header">
                     <div className="post-logo">
                     <img
                    className="job-logo"
                    src={require('../images/abc (5).jpg')}
                    alt="Third slide"
                    />
                     </div>
                     <div className="post-title">
                     <p>PHP Developer / PHP Web Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 11:08PM 10 feb 2019</p></p>
                    
                     </div>
                    
                     </div>
                     <div className="post-content">
                     <div className="company-name">
                      <p>company :My Technology EST<span className="job-location"> Lahore, Pakistan</span></p>
                     </div>
                     <div className="job-detail">
                     We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of current  We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of currentWe are looking for a PHP Developer / PHP Web Developer Please read the following before you apply. These are the essential skills we are looking for
                     We are looking for a PHP Developer / PHP Web Developer Please read the following before you apply. These are the essential skills we are looking for ...
                     </div>
                     <div className="job-features">
                     <p>Rs.20K-30K salary</p>
                     <p>Fresh Experiance</p>
                     <p>4 total positions</p>  
                     </div>
                     <div className="job-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Presentation skills</p>|
                     <p>  communication skills</p>|
                     <p>  time management</p>  
                     </div>
                     <div className="post-footer">
                     <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7 likes  </p>
                     <p><i class="fa fa-share-alt" aria-hidden="true"></i> 5 comments  </p>
                     <p><i class="fa fa-comments" aria-hidden="true"></i> 7 shares </p>
                     </div>
                     </div>
                    </div>
                    <div className="job-post-area">
                     <div className="post-header">
                     <div className="post-logo">
                     <img
                    className="job-logo"
                    src={require('../images/abc (2).jpg')}
                    alt="Third slide"
                    />
                     </div>
                     <div className="post-title">
                     <p>Andriod Developer / Mobile App Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 11:08PM 10 feb 2019</p></p>
                    
                     </div>
                    
                     </div>
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> Lahore, Pakistan</span></p>
                     </div>
                     <div className="job-detail">
                     We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of current  We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of current ...
                     </div>
                     <div className="job-features">
                     <p>Rs.20K-30K salary</p>
                     <p>Fresh Experiance</p>
                     <p>4 total positions</p>  
                     </div>
                     <div className="job-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Presentation skills</p>|
                     <p>  communication skills</p>|
                     <p>  time management</p>  
                     </div>
                     <div className="post-footer">
                     <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7 likes  </p>
                     <p><i class="fa fa-share-alt" aria-hidden="true"></i> 5 comments  </p>
                     <p><i class="fa fa-comments" aria-hidden="true"></i> 7 shares </p>
                     </div>
                     </div>
                    </div>
                    <div className="job-post-area">
                     <div className="post-header">
                     <div className="post-logo">
                     <img
                    className="job-logo"
                    src={require('../images/abc (2).jpg')}
                    alt="Third slide"
                    />
                     </div>
                     <div className="post-title">
                     <p>Andriod Developer / Mobile App Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 11:08PM 10 feb 2019</p></p>
                    
                     </div>
                    
                     </div>
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> Lahore, Pakistan</span></p>
                     </div>
                     <div className="job-detail">
                     We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of current  We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of current ...
                     </div>
                     <div className="job-features">
                     <p>Rs.20K-30K salary</p>
                     <p>Fresh Experiance</p>
                     <p>4 total positions</p>  
                     </div>
                     <div className="job-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Presentation skills</p>|
                     <p>  communication skills</p>|
                     <p>  time management</p>  
                     </div>
                     <div className="post-footer">
                     <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7 likes  </p>
                     <p><i class="fa fa-share-alt" aria-hidden="true"></i> 5 comments  </p>
                     <p><i class="fa fa-comments" aria-hidden="true"></i> 7 shares </p>
                     </div>
                     </div>
                    </div>
                    <div className="job-post-area">
                     <div className="post-header">
                     <div className="post-logo">
                     <img
                    className="job-logo"
                    src={require('../images/abc (2).jpg')}
                    alt="Third slide"
                    />
                     </div>
                     <div className="post-title">
                     <p>Andriod Developer / Mobile App Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 11:08PM 10 feb 2019</p></p>
                    
                     </div>
                    
                     </div>
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> Lahore, Pakistan</span></p>
                     </div>
                     <div className="job-detail">
                     We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of current  We are looking for an Android Developer / Mobile App Developer Android Developer 
                     required for different projects. Should have knowledge of current ...
                     </div>
                     <div className="job-features">
                     <p>Rs.20K-30K salary</p>
                     <p>Fresh Experiance</p>
                     <p>4 total positions</p>  
                     </div>
                     <div className="job-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Presentation skills</p>|
                     <p>  communication skills</p>|
                     <p>  time management</p>  
                     </div>
                     <div className="post-footer">
                     <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7 likes  </p>
                     <p><i class="fa fa-share-alt" aria-hidden="true"></i> 5 comments  </p>
                     <p><i class="fa fa-comments" aria-hidden="true"></i> 7 shares </p>
                     </div>
                     </div>
                    </div>
                    </Col>







                    <Col xl={3} lg={3}  ><Hidden xs sm md>
                   
                    <div className="top-job-header">
                    <p>Top jobs</p>
                    </div> 
                    {topJobs}
                    <div className="top-job-post">
                    <div className="post-title">
                     <p>Senior IOS Developer / IOS Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                   
                     <div className="post-content">
                     <div className="company-name">
                      <p><i class="fa fa-institution" aria-hidden="true"></i> company : Concept International PVT LTD<span className="job-location"><i class="fa fa-map-marker" aria-hidden="true"></i> islamabad, Pakistan</span></p>
                     </div>
                     
                     <div className="job-top-features">
                     <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.20K-70K</p>
                     <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance: 4 years</p>
                     <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : 2</p> 
                     <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
                     </div>
                     <div className="job-top-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     
                     </div>
                    </div>


                    <div className="top-job-post">
                    <div className="post-title">
                     <p>Senior Andriod Developer / Mobile app Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                   
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> islamabad, Pakistan</span></p>
                     </div>
                     
                     <div className="job-top-features">
                     <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.20K-70K</p>
                     <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance: 4 years</p>
                     <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : 2</p> 
                     <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
                     </div>
                     <div className="job-top-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     
                     </div>
                    </div>






                    <div className="top-job-post">
                    <div className="post-title">
                     <p>Senior ReactJS Developer / react native Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                   
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> islamabad, Pakistan</span></p>
                     </div>
                     
                     <div className="job-top-features">
                     <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.20K-70K</p>
                     <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance:4 years</p>
                     <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : 2</p> 
                     <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
                     </div>
                     <div className="job-top-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     
                     </div>
                    </div>




                    <div className="top-job-post">
                    <div className="post-title">
                     <p>Senior IOS Developer / IOS Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                   
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> islamabad, Pakistan</span></p>
                     </div>
                     
                     <div className="job-top-features">
                     <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.20K-70K</p>
                     <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance:4 years</p>
                     <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : 2</p> 
                     <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
                     </div>
                     <div className="job-top-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     
                     </div>
                    </div>




                    <div className="top-job-post">
                    <div className="post-title">
                     <p>Senior IOS Developer / IOS Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                   
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> islamabad, Pakistan</span></p>
                     </div>
                     
                     <div className="job-top-features">
                     <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.20K-70K</p>
                     <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance: 4 years</p>
                     <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : 2</p> 
                     <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
                     </div>
                     <div className="job-top-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     
                     </div>
                    </div>





                    <div className="top-job-post">
                    <div className="post-title">
                     <p>Senior IOS Developer / IOS Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                   
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> islamabad, Pakistan</span></p>
                     </div>
                     
                     <div className="job-top-features">
                     <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.20K-70K</p>
                     <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance:  4 years</p>
                     <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : 2</p> 
                     <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
                     </div>
                     <div className="job-top-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     
                     </div>
                    </div>




                    <div className="top-job-post">
                    <div className="post-title">
                     <p>Senior IOS Developer / IOS Developer<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10:08PM 18 feb 2019</p></p>
                    
                     </div>
                    
                   
                     <div className="post-content">
                     <div className="company-name">
                      <p>company : Concept International PVT LTD<span className="job-location"> islamabad, Pakistan</span></p>
                     </div>
                     
                     <div className="job-top-features">
                     <p><i class="fa fa-cc-visa" aria-hidden="true"></i> salary :Rs.20K-70K</p>
                     <p><i class="fa fa-mortar-board" aria-hidden="true"></i> Experiance: 4 years</p>
                     <p><i class="fa fa-flag" aria-hidden="true"></i> total seats : 2</p> 
                     <p><i class="fa fa-drivers-license" aria-hidden="true"></i>  age:above 25 years</p> 
                     </div>
                     <div className="job-top-requirement">
                     <p><i class="fa fa-tags" aria-hidden="true"></i> Ios Developer</p>|
                     <p>swift</p>|
                     <p> c# programming</p>  
                     </div>
                     
                     </div>
                    </div>
                    </Hidden></Col>
                </Row>
                </div>
                 
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      jobs: state.userReducer
    }
  }
export default connect(mapStateToProps)(Jobs);

