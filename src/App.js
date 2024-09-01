import './App.css';

import React, {Component} from 'react'
import Navbar from './components/Navbar';
import Newss from './components/Newss';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pagesize=5;
  render(){
    return (
      
      <div>
        <Router>
        <Navbar/>
        <Routes>
      
          <Route exact path="/" element={<Newss  key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
          <Route exact path="business" element={<Newss  key="business" pagesize={this.pagesize} country="in" category="business"/>}/>
          <Route exact path="entertainment"element={<Newss  key="entertainment"pagesize={this.pagesize} country="in" category="entertainment"/>}/>
          <Route exact path="general"element={<Newss key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
          <Route exact path="health"element={<Newss key="health"pagesize={this.pagesize} country="in" category="health"/>}/>
          <Route exact path="science"element={<Newss key="science" pagesize={this.pagesize} country="in" category="science"/>}/>
          <Route exact path="sports"element={<Newss key="sports" pagesize={this.pagesize} country="in" category="sports"/>}/>
          <Route exact path="technology"element={<Newss key="technology" pagesize={this.pagesize} country="in" category="technology"/>}/>
           

        </Routes>
        </Router>
      </div>
      
    )

  }
}