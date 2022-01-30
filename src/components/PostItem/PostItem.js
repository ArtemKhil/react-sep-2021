import React from 'react';

const PostItem = ({post}) => {
    const {id,title}=post
    return (
        <div>
            {id}--{title}
            
        </div>
    );
};

export {PostItem};