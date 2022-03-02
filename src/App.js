import React, { Component } from 'react';
import SiteNav from './components/SiteNav';
import Main from './components/Main';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SiteNav />
        <Main />
      </div>
    );
  }
}

export default App;
