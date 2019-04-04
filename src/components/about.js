import React, { Component } from 'react';
class About extends Component{ 

    render(){
        return(
            <div>
                <div className="about-me">
                <div className="portfolio-header">
                
                <div className="portfolio-dp">
                    <center><img src={require('../images/asim.jpg')}
                    alt="my profile pic here"/>
                    <h1>I'm Muhammad Asim </h1>
                    <p>Hi I'am a React developer/React web developer.I am also student of BS(software engineering in the Uinverisity of Agriculture Faisalabad. </p>
                    </center>
                    <div className="profile-social-media">
                    <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                        <a className="social-button2">
                            <i className="fab fa-facebook-f" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="social-button2">
                            <i className="fab fa-twitter" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="social-button2">
                            <i className="fab fa-google-plus" />
                        </a>
                        </li>
                        
                    </ul>
                    </div>
                    </div>
                 </div>
                </div>
                
                 </div>
            </div>
        );
    }
}
export default About;