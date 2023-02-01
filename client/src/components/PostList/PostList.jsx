import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "../Post/Post";
import {useHttp} from "../../hooks/http.hook";
import {setPosts} from "../../redux/postSlice";
import {useMessage} from "../../hooks/message.hook";
// import classes from './PostList.module.sass'

const PostList = () => {
    const message = useMessage()
    const dispatch = useDispatch()
    const postList = useSelector(state => state.posts)
    const {loading, request, error, clearError} = useHttp()

    useEffect(() => {
        message(error)
        clearError()
    },[error, clearError])

    const clickHandler = async () => {
        try {
            const posts = await request('/api/posts', 'GET')
            dispatch(setPosts(posts))
        } catch (e) {}
    }

    return (
        <div>
            <button disabled={loading} className="btn" onClick={clickHandler}>Оновити</button>
            {postList ? postList.map(({title, text}) => {
                    return (
                        <Post text={text} title={title}/>
                    )
                })
                :
                <h5>Список постів пустий!</h5>
            }
        </div>
    );
};

export default PostList;