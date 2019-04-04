import React, { Component } from 'react';
import { ButtonToolbar,Button} from 'react-bootstrap';

class Contact extends Component{ 

    render(){
        return(
            <div>
                <div className="contact">
                <div className="contact-form">
                <div className="contact-form-header">
                <p><i class="fa fa-envelope" aria-hidden="true"></i> Contact us</p>
                </div>
                <div className="contact-form-content">
                <p>We'll write rarely, but only the best content.We'll write rarely</p>
                <p><i className="fa fa-user" aria-hidden="true"></i><input  type="text" placeholder="your name" /></p>
                <p><i className="fa fa-envelope" aria-hidden="true"></i><input type="text" placeholder="your email" /></p>
                <p><i className="fa fa-tags" aria-hidden="true"></i><input  type="text" placeholder="subject"/></p>
                <p><i className="fa fa-pencil"  aria-hidden="true"></i><textarea className="mytextarea" placeholder="your message" ></textarea></p>
               
                <ButtonToolbar className="buttunalign">
                <Button variant="primary">Send <i className="fa fa-paper-plane-o"  aria-hidden="true"></i></Button>

                </ButtonToolbar>
                </div>
                </div>
                <div className="contact-loactaion-map">
                <div className="map">
                <iframe src="https://maps.google.com/maps?q=University+Of+Agriculture+Faisalabad&t=&z=15&ie=UTF8&iwloc=&output=embed" allowfullscreen className="map" ></iframe>
                </div>
                <div className="our-contact">
              <div className="map-location-details">
             <center> <i className="fa fa-map-marker"  aria-hidden="true"></i></center>
              <p>UAF,Pakisatn</p>
              </div>
              <div className="map-location-details">
              <center><i className="fa fa-envelope"  aria-hidden="true"></i></center>
              <p>asimuaf41@gmail.com</p>
             
              </div>
              <div className="map-location-details">
              <center><i className="fa fa-phone"  aria-hidden="true"></i></center>
              <p>+92 3026046119</p>
              
              </div>
                </div>
                </div>
                
                </div>
            </div>
        );
    }
}
export default Contact;