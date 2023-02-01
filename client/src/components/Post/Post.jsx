import React, {useEffect, useState} from 'react';
import {useHttp} from "../../hooks/http.hook";
import classes from './Post.module.sass'
import {useMessage} from "../../hooks/message.hook";
import {useDispatch} from "react-redux";
import {removeOnePost} from "../../redux/postSlice";
import Modal from "../Modal/Modal";

const Post = ({id, title, text}) => {
    const {request, error, clearError, loading} = useHttp()
    const [postId] = useState(id)
    const message = useMessage()
    const dispatch = useDispatch()

    useEffect(() => {
        window.M.AutoInit()
    }, [])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, clearError])

    const deleteHandler = async () => {
        try {
            const response = await request('/api/posts', 'DELETE', {id: postId})
            if (response.isDelete) {
                message(response.message)
                dispatch(removeOnePost(postId))
            }
        } catch (e) {}
    }

    const updateHandler = async () => {
        try {
            // const response = await request('/api/posts', 'PATCH', {id: postId, title: '', text: ''})
            // if (response.isUpdate) {
            //     message(response.message)
            //     dispatch(removeOnePost(postId))
            // }
        } catch (e) {}
    }

    return (
        <div className='card'>
            <div className="card-content">
                <h6>{title}</h6>
                <div>{text}</div>
            </div>
            <div className="card-action">
                <button
                    className={`btn ${classes.btn}`}
                    onClick={deleteHandler}
                    disabled={loading}
                >
                    Delete
                </button>
                <button
                    data-target="modal1"
                    className={`btn modal-trigger ${classes.btn}`}
                    onClick={updateHandler}
                    disabled={loading}
                >
                    Update
                </button>
            </div>
            <Modal/>
        </div>
    );
};

export default Post;