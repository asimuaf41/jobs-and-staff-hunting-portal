import React, { Component } from 'react';
import {MDBContainer,MDBBtn,MDBFormInline ,MDBIcon} from "mdbreact";
import { Carousel} from 'react-bootstrap';
import Company from './companies';
class Content extends Component{
    render(){
        return(
            <div className="content">
             <div className="search_bar">

        
             <MDBContainer>
             <MDBFormInline className="md-form mr-auto mb-4">
            
                <input  className="form-control mr-sm-3"  type="text" placeholder="What are you looking for?" aria-label="Search" />
                
                <input className="form-control mr-sm-3" type="text" placeholder="location" aria-label="Search" />
                <MDBBtn outline color="success" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
                
               
             </MDBFormInline>
             </MDBContainer>
             </div> 
             <div className="hiring-company">
             <div className="hiring-title">
             <p>Companies Currently Hiring in Pakistan</p>
             </div>
             <div className="mm">
             <Company />
             </div>
                
             </div>
            </div>
        );
    }
}
export default Content;
 