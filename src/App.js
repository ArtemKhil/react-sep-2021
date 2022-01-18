import {useState} from "react";

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from "./App.module.css";

function App() {
    const [user, setUser] = useState(null);

    const getUser = (user) => {
        setUser(user);
    };


    return (
        <div>

            <div className={css.wrap}>
                <Users getUser={getUser}/>
                <UserDetails user={user}/>
            </div>

            <div>
                <Posts/>
            </div>

        </div>

    );
}

export default App;
