import React, { Component } from 'react';
import { Button,Modal,FormGroup,FormControl,Col,Row,Form,ButtonToolbar} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import before from '../images/before.png';
import after from '../images/after.png';
import {loginUSER} from '../actions/userActions'; 
import { connect } from "react-redux";
import './css/style.css';
class Login extends Component {
    constructor(props, context) {
      super(props, context);
      
     
      
      this.state = {
        show: false,
        email:'',
        incorrect:''
      };
    }
  
    
    login_user=(event)=>{
      event.preventDefault();
      var user_email=this.email.value;
      var user_password=this.password.value;
    var check_user={
      email:user_email,
      password:user_password
    }
    this.props.dispatch(loginUSER(check_user))
    .then(res=>{
      if(res.payload.loginSuccess){
        this.props.history.push('/jobs');
      }else{
        if(!res.payload.loginSuccess){
          let error_message=res.payload.message;
        this.setState({
          incorrect:error_message
        })
      }
      }
    })
    
    }
  
    render() {
      return (
        <>
         
         <div className="login-page">
        <div className="position-login">
        <div className="login-header">
       
         <img src={require('../images/before.png')}  onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
         <h2>login here</h2>
        </div>
       <div className="login-contact">
       <Form  onSubmit={this.login_user}>    
            
       <FormGroup>   
            <FormControl  type="email" componentClass="input" ref={(input)=>{this.email=input}} defaultValue={this.state.email} required="true"   placeholder="Enter username/email" />
            </FormGroup>{' '}
                 <FormGroup>
                 <FormControl  type="password" componentClass="input"  ref={input=>this.password=input} required="true"   placeholder="Enter the user email here" /><span className="invalid-password">{this.state.incorrect}</span>
                 </FormGroup>
                 <Row className='top-space'>
                  <Col sm={12} md={12}>
                    <input type="checkbox" title="test" name="show-map" /><span className="remember"> Remember Me</span> {'   '}<a href="" className="forgot-link">Forgot Password</a>
                  </Col>
                  
                </Row>
                 <Row>
               
                <Col md={12}>
                 <ButtonToolbar>
                  <Button type="submit" className="btn btn-black btn-block">login</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
         
            <div className="social-signup">
             
              <p>
                login with social account
              </p>
              <Row>
                <Col xs={12} sm={12} md={12} >
                <FacebookLoginButton  className='btn btn-block btn-facebook' style={{fontSize:17,height:40}}   onClick={() => alert("Hello")} />
               
                </Col>
                <Col xs={12} sm={12} md={12}>
                <GoogleLoginButton  style={{fontSize:17,height:40}} className='btn btn-block btn-google' onClick={() => alert("Hello")} />
                </Col>
              </Row>
              </div>
              </Form>
            
       </div>
        </div>
       </div>
        
        </>
      );
    }
  }

  export default connect()(Login);