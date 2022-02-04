import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";


const Cars = () => {
    const {cars} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(getAllCars())

    },[])



    return (
        <div>

            {cars.map(car=><Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};