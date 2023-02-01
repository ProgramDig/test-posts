import React from 'react';
import {useSelector} from "react-redux";
import Post from "../Post/Post";
// import classes from './PostList.module.sass'

const PostList = () => {
    const postList = useSelector(state => state.posts)

    const clickHandler = () => {

    }

    return (
        <div>
            <button onClick={clickHandler}>Оновити</button>
            {postList ? postList.map(({title, text}) => {
                    return (
                        <Post {text} {title}/>
                    )
                })
                :
                <h5>Список постів пустий!</h5>
            }
        </div>
    );
};

export default PostList;