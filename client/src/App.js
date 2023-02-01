import 'materialize-css'
import {useSelector} from "react-redux";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";

function App() {
    const post = useSelector(state => state.post)

    return (
        <div>
            <div className="container">
                <Form/>
                <div className="row">
                    <Post title={post.title} text={post.text}/>
                </div>
            </div>
        </div>
    );
}

export default App;
