import 'materialize-css'
import Form from "./components/Form/Form";
import PostList from "./components/PostList/PostList";

function App() {
    return (
        <div>
            <div className="container">
                <Form/>
                <PostList/>
            </div>
        </div>
    );
}

export default App;
