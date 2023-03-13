import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';

import {Landing} from './Landing';
import ShowPosts from './ShowPosts';
import AddPosts from './AddPosts';
import useFetch from './useFetch';
import TopicList from './TopicList';


const Home = () => {

const { data, isPending, error} = useFetch("http://localhost:8080/getPosts")
console.log("DATA: ", data);


  return (

    <div className="App">
      <header className="App-header">
      
        <div>


        <button 
        
        onClick={(e) => {

            fetch('http://localhost:8080/init', {method: 'POST',
            headers: {'Content-type': 'application/x-www-form-urlencoded'}})
            // .then(response => response.json())
            // .then(response => set(response))
            .then(alert("DATABSE CRAETED"));

        }} >

        Init Data
        
        </button>
        <div>

        </div>


        {/* <div>
            {error && <div> {error} </div> }   }  
            {isPending && <div> LOADING ...... </div>}
            { data && <div> {JSON.stringify(data["posts"])} </div>}
            { data && <TopicList all_posts={data["posts"]} title="All Blogs: "> </TopicList>}
        </div> */}

        </div>
      
      </header>

      </div>
  );
}
 
export default Home;