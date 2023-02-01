import React, {useEffect, useState} from 'react';
import {useHttp} from "../../hooks/http.hook";
import classes from './Post.module.sass'
import {useMessage} from "../../hooks/message.hook";
import {useDispatch} from "react-redux";
import {removeOnePost} from "../../redux/postSlice";

const Post = ({id, title, text}) => {
    const {request, error, clearError, loading} = useHttp()
    const [postId, setPostId] = useState(id)
    const message = useMessage()
    const dispatch = useDispatch()

    useEffect(()=> {
        message(error)
        clearError()
    },[error, clearError])

    const deleteHandler = async () => {
        try {
            const response = await request('/api/posts', 'DELETE', {id: postId})
            if(response.isDelete) {
                message(response.message)
                dispatch(removeOnePost(postId))
            }
        } catch (e) {}
    }
    return (
        <div className='card'>
            <div className="card-content">
                <h6>{title}</h6>
                <div>{text}</div>
            </div>
            <div className="card-action">
                <button className={`btn ${classes.btn}`} onClick={deleteHandler}>Delete</button>
                <button className={`btn ${classes.btn}`}>Update</button>
            </div>
        </div>
    );
};

export default Post;