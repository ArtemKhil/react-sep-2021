import React from 'react';

const Movie = ({movie:{id,title}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
        </div>
    );
};

export {Movie};