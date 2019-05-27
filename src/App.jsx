import React, { Component } from 'react';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Routes from './routes'
import NavBar from './shared/components/navbar/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
