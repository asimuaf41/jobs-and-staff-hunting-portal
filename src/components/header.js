import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Badge} from 'react-bootstrap';
import {BrowserRouter as Router,Route, Link, withRouter } from 'react-router-dom'; 
import {auth} from '../actions/userActions';
import { connect } from "react-redux";
class Header extends Component{
 
 state={
  is_Authorize:true,
        page:[
          {
            name: "Home",
            linkTo: "/",
            public: true
          },
          {
            name: "about",
            linkTo: "/about",
            public: true
          },
          {
            name: "contact",
            linkTo: "/contact",
            public: true
          },
          {
            name: "jobs",
            linkTo: "/jobs",
            public: true
          },
          {
            name: "Hiring Solution",
            linkTo: "/hiring",
            public: false
          },
        ],
        user:[
          {
            name: "Profile",
            linkTo: "/profilePage",
            public: false
          },
          {
            name: "Resume",
            linkTo: "/resume",
            public: false
          },
          {
            name: "login",
            linkTo: "/login",
            public: true
          },
          {
            name: "Signup",
            linkTo: "/signup",
            public: true
          }
          ,
          {
            name: "Logout",
            linkTo: "/signup",
            public: false
          }
        ]
      }
  componentWillMount(){
 this.props.dispatch(auth()).then((res)=>{
        let user=true
        /* res.payload.isAuth */
     
        if(user){
      this.setState({
        is_Authorize:true
      })
     }else{
       this.setState({
         is_Authorize:false
       })
     }
      });
  } 
  

  showLinks=(type)=>{
      var list=[];

     
      type.map((Item)=>{
        var isAuthorize=this.state.is_Authorize
        
        
        if(!isAuthorize){
          if(Item.public){
            list.push(Item)
          }
        }else{
          /*  if(Item.name !=='login' && Item.name !=='Signup'){
            list.push(Item);
           }
            */
         
           list.push(Item);
        }
        
      });
      return list.map((Item,index)=>{
         return this.pagelinks(Item,index);
      });

  }
  pagelinks=(Item,index)=>{
    return(
      <Link className="header-link" to={Item.linkTo}>{Item.name}</Link>
    );
  }
    render(){
        return(
            <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" > 
        <Navbar.Brand className="site-logo">Job and Staff Hunting</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
         {this.showLinks(this.state.page)}
         
          </Nav>
          <Nav>
          {this.showLinks(this.state.user)}
         
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
      
     
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)( withRouter(Header));