
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

import {Landing} from './Landing';
import {AddPosts} from './AddPosts';
import useFetch from './useFetch';
import TopicList from './TopicList';
// import './ShowPosts.css';

const ShowPosts = () => {

    const { data, isPending, error} = useFetch("http://localhost:8080/getPosts")
    // console.log("DATA: ", data);

return (

        <div>
        

        {error && <div> {error} </div> }   {/* if error show error in div */}  
        {isPending && <div> LOADING ...... </div>}
        {/* { data && <div> {JSON.stringify(data["posts"])} </div>} */}
        { data && <TopicList all_posts={data["posts"]} title="All Posts: "> </TopicList>}



        </div>
);

}

export default ShowPosts;