import 'materialize-css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useHttp} from "./hooks/http.hook";
import {pushPost, setPost} from "./redux/postSlice";

function App() {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post)

    const {loading, request, error, clearError} = useHttp()
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
        <div>
            <div className="container">

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

            </div>
        </div>
    );
}

export default App;
