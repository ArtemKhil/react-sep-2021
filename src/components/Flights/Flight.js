import React from 'react';

const Flight = ({item}) => {
    return (
        <div>
            {item.mission_name}--{item.launch_year}
            <img src={item.links.mission_patch} alt="mission_patch"/>
        </div>
    );
};

export default Flight;