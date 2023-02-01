import React from 'react';
import classes from './Post.module.sass'

const Post = ({title, text}) => {
    return (
        <div className='card'>
            <div className="card-content">
                <h6>{title}</h6>
                <div>{text}</div>
            </div>
            <div className="card-action">
                <button className="btn">Delete</button>
                <button className="btn">Update</button>
            </div>
        </div>
    );
};

export default Post;