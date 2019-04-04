import React, { Component } from 'react';
import {Button,Row,Col,ButtonToolbar,ProgressBar} from 'react-bootstrap';
import Switch from "react-switch";
import CircularProgressbar from 'react-circular-progressbar';
export default class Profile extends Component{
    constructor() {
        super();
        this.state = { checked: false,
            files: [],
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(checked) {
        this.setState({ checked });
      }
      handleChange(checked) {
        this.setState({ checked });
      }
    render(){
        return(
            <div>
               <div className="Container5"> 
                <Row>
                    <Col   xl={3} md={3} lg={3} sm={12} xm={12}  > 
                    <div className="profile-pic-detail">
                    <div className="profile-photo-header">
                   
                    </div>
                    <div className="profile-pic">
                    <center> <img src={require('../images/asim.jpg')}
                    alt="my profile pic here"/></center>
                    <div className="profile-edit">
                    <div className="edit-pic">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <p><a href=""> change pic</a></p>
                    </div>
                    <div className="edit-pic">
                    <i class="fa fa-close" aria-hidden="true"></i>
                    <p><a href="">remove pic</a></p>
                    </div>
                    </div>
                    </div>
                    <div className="profile-info">
                    <center className="font-bold">Asim Ali</center> 
                     <center>20 years old</center> 
                     <center><p>shahkot,pakistan</p></center>
                     <center className="font-bold">React web developer/react JS web developer</center> 
                     <center>experiance</center>
                     <div class="edit1"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    <div className="profile-social-media">
                    <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                        <a className="social-button1">
                            <i className="fab fa-facebook-f" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="social-button1">
                            <i className="fab fa-twitter" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="social-button1">
                            <i className="fab fa-google-plus" />
                        </a>
                        </li>
                        
                    </ul>
                    </div>
                    </div>
                    </div>

                    <div className="basic-info-edit">
                    <p><i class="fa fa-pencil fa-user-o"></i> Basic information</p>
                    <p><a href="">edit</a></p>
                    </div>
                    <div className="basic-info-edit">
                    <p><i class="fa fa-envelope-o"></i> Registration amil</p>
                    <p><a href="">edit</a></p>
                    </div>
                    
                    <div className="basic-info-edit">
                    <p><i class="fa fa-exclamation-circle"></i> job match alert</p>
                    
                    
                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                 
                    </div>
                    <div className="profile-other-detail">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-graduation-cap"></i> Education</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element">BS(Software Engineering) | from university of agriculture fsd</div>
                     <div class="edit-education"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    <div className="education-info">
                      <div className="education-element">BS(Software Engineering) | from university of agriculture fsd</div>
                     <div class="edit-education"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    <div className="education-info">
                      <div className="education-element">BS(Software Engineering) | from university of agriculture fsd</div>
                     <div class="edit-education"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    </div>

                    <div className="profile-other-detail">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-s15"></i> Industry</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element">software web development</div>
                     <div class="edit-education1"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    
                    </div>
                  
                    <div className="profile-other-detail">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-podcast"></i> Functional Area</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element">software web development</div>
                     <div class="edit-education1"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    
                    </div>
                    <div className="profile-other-detail">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-trophy"></i> Award</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element">any award</div>
                     <div class="edit-education1"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    
                    </div>
                    </Col>
                    <Col className="m" xl={6} md={6} lg={6}  sm={12} xm={12} >
                    
                    
                    <div className="profile-other-detail1">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-file-archive-o"></i>  sammery</p>
                    <div class="edit-education1"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
                    </div>
                    <div className="education-info">
                      <div className="education-element">A personal profile, also known as a CV summary, is the opening statement of your CV. It is a short introduction which outlines your personal characteristics, telling the prospective employer what kind of a person you are, the attributes and qualities that you possess and the work experience that you have.</div>
                     
                    </div>
                    </div>
                    <div className="profile-other-detail1">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-tasks"></i>   projects</p>
                    <div class="edit-work"><a href="#"><i class="fa fa-plus"> add project</i></a></div>
                    </div>
                    <div className="education-info">
                      <div className="education-element">
                      Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. Software development is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software, sometimes in a planned and structured process.[1] Therefore, software development may include research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products.[2]
                      </div>
                     
                    </div>
                    </div>
                    <div className="profile-other-detail1">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-tasks"></i>   certification</p>
                    <div class="edit-work"><a href="#"><i class="fa fa-plus"> add certificate</i></a></div>
                    </div>
                    <div className="education-info">
                      <div className="education-element">
                      Some WAsP course participants have an interest in a more formal examination in their WAsP skills. As a consequence, in 2001 we established a WAsP "exam", with this initiative known as WAsP certification.

The certification applies to WAsP users, as a WAsP certificate assures that the holder has reached a certain level in using WAsP. 

The idea of the WAsP certification is to make sure that holders of a WAsP certificate have adequate skills to use WAsP to complete a full analysis of meteorological data at a site, calculate the wind atlas and apply this to calculate the production of a potential wind farm. The required theoretical background need not be equivalent to a formal education in boundary-layer meteorology, but certificate holders should - in addition to the WAsP skills - also know about possible pitfalls and have a basic understanding of the underlying theory, its application, and its limitations.
                       </div>
                     
                    </div>
                    </div>
                    </Col>
                    <Col className="n" xl={3} md={3} lg={3}  sm={12}  xm={12} >
                    <center className="already-resume">Already have resume?</center>
                    <center>
                    <div class="upload-btn-wrapper">
                    <button class="btn1">Upload a file</button>
                    <input type="file" name="myfile" />
                    </div>
                        
                   
                    </center>
                      <div className="profile-strength">
                      <center><i class="fa fa-pie-chart"></i> profile strength</center>
                     <center><CircularProgressbar
                    percentage={70}
                    text={`70 %`}
                    /></center>
                      </div>
                      

                    <div className="basic-info-edit3">
                    <p><i class="fa fa-graduation-cap"></i> skills</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="skill-element1">
                    <p>HTML</p>
                    <p> <ProgressBar animated variant="info" now={60} /></p>
                    </div>
                    <div className="skill-element1">
                    <p>React</p>
                    <p> <ProgressBar animated variant="info" now={40} /></p>
                    </div>
                    <div className="skill-element1">
                    <p>java script</p>
                    <p> <ProgressBar animated variant="info" now={80} /></p>
                    </div>
                    <div className="skill-element1">
                    <p>bootstrap</p>
                    <p> <ProgressBar animated variant="info" now={90} /></p>
                    </div>
                    <div className="skill-element1">
                    <p>CSS</p>
                    <p> <ProgressBar animated variant="info" now={60} /></p>
                    </div>
                    <div className="skill-element1">
                    <p>Node.js</p>
                    <p> <ProgressBar animated variant="info" now={60} /></p>
                    </div>
                    <div className="skill-element1">
                    <p>React native</p>
                    <p> <ProgressBar animated variant="info" now={10} /></p>
                    </div>
                     
                    <div className="profile-other-detail1">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-map-marker"></i> prefered city job</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element">lahore</div>
                     
                    </div>
                    </div>
                    <div className="profile-other-detail1">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-sort-amount-asc"></i> Hobbies/activities </p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element"></div>
                     
                    </div>
                    </div>
                    <div className="profile-other-detail1">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-list-ol"></i> Languages</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element"></div>
                     
                    </div>
                    </div>
                    <div className="profile-other-detail1">
                    <div className="basic-info-edit1">
                    <p><i class="fa fa-universal-access"></i> references</p>
                    <p><a href="">Add</a></p>
                    </div>
                    <div className="education-info">
                      <div className="education-element"></div>
                     
                    </div>
                    </div>
                    </Col>
                 </Row>   
                 </div>   
            </div>
        );
    }
}