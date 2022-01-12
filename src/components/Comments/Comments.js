import React from 'react';
import {useState,useEffect} from "react";


const Comments = () => {

    const[comments,setComments]=useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))

    }, []);

    return (
        <div>
            <ul>
                {
                  comments.map(value => <li>{value.body}</li>)
                }
            </ul>
        </div>
    );
};

export default Comments;