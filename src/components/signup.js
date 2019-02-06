import React, { Component } from 'react';
import { Button,Modal,FormGroup,FormControl,Col,Row} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";

class Signup extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button className="login-button" onClick={this.handleShow}>
            signUp
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
              <img src={require('../images/before.png')} className="login-image" onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
              {' '}
                  Signup page
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            <FormGroup>   
            <FormControl  type="text" componentClass="input" inputRef={input=>this.textInput=input}  required="true"   placeholder="Enter  first name" />
                 </FormGroup>{' '}
                 <FormGroup>   
            <FormControl  type="text" componentClass="input" inputRef={input=>this.textInput=input}  required="true"   placeholder="Enter last name" />
                 </FormGroup>{' '}
                 <FormGroup>   
            <FormControl  type="email" componentClass="input" inputRef={input=>this.textInput=input}  required="true"   placeholder="Enter email" />
                 </FormGroup>{' '}
                 <FormGroup>
                 <FormControl  type="password" componentClass="input"  inputRef={input=>this.textInput1=input} required="true"   placeholder="Enter password" />
                 </FormGroup>
                 
                 <Row>
               
                <Col md={12}>
                  <Button /* onClick={this.signUp.bind(this)} */ className="btn btn-black btn-block">signUp</Button>
                </Col>
              </Row>
            
            <div className="social-signup">
             
              <p>
                Sign in with social account
              </p>
              <Row>
                <Col xs={12} sm={6} md={6} >
                <FacebookLoginButton  className='btn btn-block btn-facebook' style={{fontSize:17,height:40}}   onClick={() => alert("Hello")} />
               
                </Col>
                <Col xs={12} sm={6} md={6}>
                <GoogleLoginButton  style={{fontSize:17,height:40}} className='btn btn-block btn-google' onClick={() => alert("Hello")} />
                </Col>
              </Row>
              </div>

            </Modal.Body>
           
           
          </Modal>
        </>
      );
    }
  }

  export default Signup;