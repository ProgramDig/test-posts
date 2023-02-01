import {createSlice} from "@reduxjs/toolkit";

const DEFAULT_POST = {id: '', title: '', text: ''}
const DEFAULT_POSTS = []
const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: DEFAULT_POST,
        posts: DEFAULT_POSTS
    },
    reducers: {
        setPost(state, action) {
            const {id, title, text} = action.payload
            state.post = {id, title, text}
        },
        removePost(state) {
            state.post = DEFAULT_POST
        },
        setPosts(state, action) {
            state.posts = [...action.payload]
        },
        pushPost(state, action) {
            state.posts = state.posts.push(action.payload)
        },
        removeOnePost(state, action){
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        removePosts(state) {
            state.posts = DEFAULT_POSTS
        }
    }
})
export const {setPost, removePost, removeOnePost, setPosts, pushPost, removePosts} = postSlice.actions
export default postSlice.reducer