import {useDispatch} from "react-redux";
import React, {useEffect, useState} from 'react';
import {setPost} from "../../redux/postSlice";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import Loader from "../Loader/Loader";
// import classes from "./Form.module.sass"

const DEFAULT_FORM = {title: '', text:''}

const Form = () => {
    const message = useMessage()
    const dispatch = useDispatch()
    const {loading ,request, error, clearError} = useHttp()
    const [form, setForm] = useState(DEFAULT_FORM)

    useEffect(() => {
        message(error)
        clearError()
    },[error, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const clickHandler = async (event) => {
        event.preventDefault()
        const post = await request('/api/posts', 'POST', {...form})
        const postDto = {id: post.id, title: post.title, text: post.text}
        dispatch(setPost(postDto))
        setForm(DEFAULT_FORM)
    }

    return (
        <div className="row">
            <form className="col s12">
                <h4>Створити пост</h4>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="title"
                            type="text"
                            name="title"
                            className="validate"
                            value={form.title}
                            onChange={changeHandler}
                        />
                        <label htmlFor="title">Заголовок</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="text"
                            type="text"
                            name="text"
                            className="validate"
                            value={form.text}
                            onChange={changeHandler}
                        />
                        <label htmlFor="text">Текст</label>
                    </div>
                </div>
                <button disabled={loading} className="btn" onClick={clickHandler}>Створити</button>

                {loading && <Loader/>}
            </form>
        </div>
    );
};

export default Form;