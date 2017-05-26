import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Saludos from './components/Saludos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Saludos />
        <Footer  />
      </div>
    );
  }
}

export default App;
