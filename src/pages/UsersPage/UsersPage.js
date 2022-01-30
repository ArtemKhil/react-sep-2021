import React from 'react';
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";

import {userService} from "../../services";
import {User} from "../../components/User/User";
import css from './UsersPage.module.css'


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))

    }, [])

    return (
        <div className={css.UsersPage}>
            <div className={css.users}>
                {users.map(user=><User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};