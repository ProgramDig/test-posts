import {useDispatch} from "react-redux";
import React, {useState} from 'react';
import {setPost} from "../../redux/postSlice";
import {useHttp} from "../../hooks/http.hook";
import classes from "./Form.module.sass"

const Form = () => {
    const dispatch = useDispatch()

    const {request} = useHttp()
    const [form, setForm] = useState({})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const clickHandler = async (event) => {
        event.preventDefault()
        const post = await request('/api/posts', 'POST', {...form})
        const postDto = {id: post.id, title: post.title, text: post.text}
        dispatch(setPost(postDto))
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
                            onChange={changeHandler}
                        />
                        <label htmlFor="text">Текст</label>
                    </div>
                </div>
                <button className="btn" onClick={clickHandler}>Створити</button>
            </form>
        </div>
    );
};

export default Form;