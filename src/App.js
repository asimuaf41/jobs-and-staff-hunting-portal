import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import  Content from './components/content';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />  
      < Content />
      <Footer />
     
      </div>
    );
  }
}

export default App;
