import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Link,Switch} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import  Content from './components/content';
import About from './components/about';
import Jobs from './components/jobs';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
     
      <Header />
      <switch>
      <Route path="/about" component={About} />
      <Route path="/jobs" component={Jobs} />
      {/* <Route path="/User" component={User} /> */}
      <Route exact path="/" component={Content} />
      </switch>
       
      
      <Footer />
     
      </div>
      </Router>
    );
  }
}

export default App;
