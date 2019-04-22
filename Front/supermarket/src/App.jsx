import React, { Component } from 'react';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Routes from './routes'
import Header from './shared/components/navbar/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
