import React from 'react';
import {useState,useEffect} from "react";

import Comment from "./Comment";


const Comments = () => {

    const[comments,setComments]=useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))

    }, []);

    return (
            <ul>
                {
                  comments.map(value => <li key={value.id}><Comment item={value}/></li>)
                }
            </ul>
    );
};

export default Comments;