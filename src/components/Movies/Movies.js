import React from 'react';
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";

import {Movie} from "../Movie/Movie";
import {getAllMovies} from "../../store";


const Movies = () => {

    const {movies,status,error} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, []);

    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};