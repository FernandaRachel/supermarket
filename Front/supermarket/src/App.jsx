import React, { Component } from 'react';
import './App.css';
import Products from './pages/products/products';
import Header from './shared/navbar/Header';
import 'materialize-css/dist/css/materialize.min.css'
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Grid container>
            <Products />
            </Grid>
      </div>
    );
  }
}

export default App;
