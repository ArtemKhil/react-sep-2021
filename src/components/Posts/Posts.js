import React from 'react';
import {useState,useEffect} from "react";


const Posts = () => {

    const[posts,setPosts]=useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[]);


    return (
        <div>
            <ul>
                {
                  posts.map(value => <li>{value.title}</li>)
                }
            </ul>
        </div>
    );
};

export default Posts;