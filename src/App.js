import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {Layout} from "./components";
import {
    AlbumsPage,
    PostsPage,
    PostDetailsPage,
    PhotosPage,
    PostCommentsPage,
    UserDetailsPage,
    UsersPage,
    UserPostsPage
} from "./pages";


const App = () => {

    return (

        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostsPage/>}/>
                    </Route>

                    <Route path={':id/albums'} element={<AlbumsPage/>}>
                        <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={PostCommentsPage}/>
                    </Route>
                </Route>

            </Route>
        </Routes>

    );
}

export default App;
