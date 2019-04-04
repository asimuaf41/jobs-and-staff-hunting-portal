import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router,Route, Link,Switch} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import  Content from './components/content';
import About from './components/about';
import Jobs from './components/jobs';
import Contact from './components/contact';
import Hiring from './components/hiring';
import Profile from './components/profilePage';
import Resume from './components/resume';
import store from './store/index';
import Signup from './components/signup';
import Login from './components/login';
import {Provider} from 'react-redux';
import history from './components/history';
import Auth from './hoc/auth';
class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <Router history={history}>
      <div className="App">
     
      <Header  />
      <switch>
      <Route path="/about" component={About} />
      <Route path="/hiring" component={Hiring} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/contact" component={Contact} />
      <Route path="/profilePage" component={Profile} />
      <Route path="/resume" component={Resume} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* <Route path="/User" component={User} /> */}
      <Route exact path="/" component={Content} />
      </switch>
       
      
      <Footer />
     
      </div>
      </Router>
       </Provider> 
    );
  }
}

export default App;
