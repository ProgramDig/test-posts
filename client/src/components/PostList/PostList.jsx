import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "../Post/Post";
import {useHttp} from "../../hooks/http.hook";
import {setPosts} from "../../redux/postSlice";
import {useMessage} from "../../hooks/message.hook";
import Loader from "../Loader/Loader";
import classes from './PostList.module.sass'

const PostList = () => {
    const message = useMessage()
    const dispatch = useDispatch()
    const postList = useSelector(state => state.posts)
    const {loading, request, error, clearError} = useHttp()


    useEffect(() => {
        if (!postList.length) {
            clickHandler()
        }
    }, [])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, clearError])

    const clickHandler = async () => {
        try {
            const posts = await request('/api/posts', 'GET')
            dispatch(setPosts(posts))
        } catch (e) {}
    }

    return (
        <div>
            <div>
                <button disabled={loading} className={`btn ${classes.btn}`} onClick={clickHandler}>Оновити</button>
                {loading && <Loader/>}
            </div>


            {postList ? postList.map(({id, title, text}) => {
                    return (
                        <Post key={id} id={id} text={text} title={title}/>
                    )
                })
                :
                <h5>Список постів пустий!</h5>
            }
        </div>
    );
};

export default PostList;