import React from 'react';
import {useSelector} from "react-redux";
import Post from "../Post/Post";
// import classes from './LastPost.module.sass'

const LastPost = () => {
    const {text, title} = useSelector(state => state.post)
    if(!text || !title) {
        return (
            <h5>Постів не створено</h5>
        )
    }
    return (
        <div>
            <h5>Останній створений пост</h5>
            <Post text={text} title={title}/>
        </div>
    );
};

export default LastPost;