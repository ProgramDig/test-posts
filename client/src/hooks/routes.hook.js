import {Route, Routes} from "react-router-dom";
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";
import PostListPage from "../pages/PostListPage/PostListPage";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path={"/create-post"} element={<CreatePostPage/>} exact/>
            <Route path={"/post-list"} element={<PostListPage/>} exact/>
            <Route path={"*"} element={<CreatePostPage/>} exact/>
        </Routes>
    )
}