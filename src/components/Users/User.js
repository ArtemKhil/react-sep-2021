import React from 'react';

const User = ({item}) => {
    return (
        <div>
            {item.name}--{item.username}--{item.email}
        </div>
    );
};

export default User;