import React from 'react';
import {useEffect, useState} from "react";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))

    },[])


    return (
        <div>
            <ul>
                {
                    users.map(value => <li key={value.id}>{value.name}--{value.username}--{value.email}</li>)
                }

            </ul>
        </div>
    );
};

export default Users;