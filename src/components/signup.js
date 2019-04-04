import React, { Component } from 'react';
import { Button,Modal,FormGroup,FormControl,Col,Row,Form,Alert} from 'react-bootstrap';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import {time} from '../template/time';
import './css/style.css';
import { connect } from "react-redux";
import {isFormValid1} from './forms/formActions';
import {registerUser} from '../actions/userActions';
class Signup extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
        email:'',
        password:'',
        password1:'',
        formError: '',
      };
    }
  
    check_email=()=>{
      var user_email=this.email.value;
      var mailformat = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
      if(user_email.match(mailformat)){
        this.setState({email:"valid email"})
      }
      else{
        this.setState({email:"invalid email address"})
      }
    }
    check_password=()=>{
      var user_password=this.password.value;
      var user_password1=this.password1.value;
      if(user_password.match(user_password1) && user_password.length===user_password1.length){
        this.setState({password:""})
      }
      else{
        this.setState({password:" password is not match"})
        
      }
    }
    check_password1=()=>{
      var user_password=this.password.value;
     var passwordformat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;
      if(user_password.match(passwordformat)){
        this.setState({password1:"strong password"})
      }
      else{
        this.setState({password1:"  Password must be at least 4-15 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."})
      }
    }

    sign_up=(event)=>{
      event.preventDefault();
      var fist_name=this.textInput.value;
      var last_name=this.textInput1.value;
      var user_email=this.email.value;
      var user_password=this.password.value;
      var user_password1=this.password1.value;
     let register_user={
       fname:fist_name,
       lname:last_name,
       email:user_email,
       password:user_password,
       time:time
     }
     var isFormValid=isFormValid1(user_password,user_password1);
    
     if(isFormValid){


     this.props.dispatch(registerUser(register_user))
     .then(resp => {
        if (resp.payload.success) {
          this.setState({
            formError: false,
            formSuccess: true
          });
          this.props.history.push('/hiring');
        } else {
          this.setState({
            formError: "user already  exist "
          });
        }
      })
      .catch(e => {
        this.setState({
          formError: true
        });
       
      });



   /*    var options = {
        method: 'POST',
        body: JSON.stringify(register_user),
        headers: { 'Content-Type': 'application/json' }
      }
      fetch('http://localhost:8000/signup',options)
      .then((res)=>res.json())
      .then((json)=>{
         alert(json.data.fname+" "+json.data.lname+" your are successfully Registered! ");
      
      }) */
      
     }else{
      this.setState({
        formError: 'please fill the form correctly and try again'
      });
      
     }
    
    
    
    }


    render() {
     
      return (
        <>

       <div className="signup-page">
        <div className="position-signup">
        <div className="login-header">
       
         <img src={require('../images/before.png')}  onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
         <h2>Signup here</h2>
        </div>
       <div className="signup-contact">
       <Form onSubmit={this.sign_up.bind(this)}>    
            <Form.Group>  
               
            <Form.Control  type="text" componentClass="input" ref={input=>this.textInput=input} required  placeholder="Enter  first name" />
                 </Form.Group>{' '}
                 <FormGroup>   
            <FormControl  type="text" componentClass="input" ref={input=>this.textInput1=input}  required  placeholder="Enter last name" />
                 </FormGroup>{' '}
                 <FormGroup>   
            <FormControl  type="email" componentClass="input"  ref={input=>this.email=input} required  placeholder="Enter email"  onInput={this.check_email} /><span className="invalid-email">{this.state.email}</span>
                 </FormGroup>{' '}
                 <FormGroup>
                 <FormControl  type="password" componentClass="input"  ref={input=>this.password=input} required onChange={this.check_password1}   placeholder="Enter password" /><span className="invalid-password">{this.state.password1}</span>
                 </FormGroup>
                 <FormGroup>
                 <FormControl  type="password" componentClass="input"  ref={input=>this.password1=input} required onChange={this.check_password}  placeholder="Enter re-enter password" /><span className="invalid-email">{this.state.password}</span>
                 </FormGroup>
                 <span className="form-error">{this.state.formError}</span>
                 <Row>
               
                <Col md={12}>
                  <Button type="submit" className="btn btn-black btn-block">signUp</Button>
                </Col>
              </Row>
              </Form>
            <div className="social-signup">
             
              <p>
                Sign in with social account
              </p>
              <Row>
                <Col xs={12} sm={6} md={6} >
                <FacebookLoginButton  className='btn btn-block btn-facebook' style={{fontSize:14,height:40}}   onClick={() => alert("Hello")} />
               
                </Col>
                <Col xs={12} sm={6} md={6}>
                <GoogleLoginButton  style={{fontSize:14,height:40}} className='btn btn-block btn-google' onClick={() => alert("Hello")} />
                </Col>
              </Row>
              </div>
       </div>
        </div>
       </div>
        
        
        </>
      );
    }
  }

  export default connect() (Signup);