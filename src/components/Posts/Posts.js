import React from 'react';
import {useState,useEffect} from "react";

import Post from "./Post";


const Posts = () => {

    const[posts,setPosts]=useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[]);


    return (
            <ul>
                {
                  posts.map(value => <li key={value.id}><Post item={value}/></li>)
                }
            </ul>
    );
};

export default Posts;