import React from 'react';
import {useEffect, useState} from "react";

import User from "./User";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))

    },[])


    return (
            <ul>
                {
                    users.map(value => <li key={value.id}><User item={value}/></li>)
                }
            </ul>
    );
};

export default Users;