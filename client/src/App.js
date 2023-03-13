//import './App.css';


import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

import {Landing} from './Landing';
import ShowPosts from './ShowPosts';
import AddPosts from './AddPosts';
import useFetch from './useFetch';
import TopicList from './TopicList';
import Home from './Home';
import Navbar from './Navbar';



function App() {   

  return (


  <div>

    <Router>

      <Navbar></Navbar>

    <div>

      <Routes>
        <Route exact path='/' element = {<Home/>} />
        <Route exact path='/showPosts' element = {<ShowPosts/>} />
        <Route exact path='/addPosts' element = {<AddPosts/>} />
      </Routes>

     </div>

    </Router>
  </div>

 );
}

export default App;