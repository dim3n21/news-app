import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
