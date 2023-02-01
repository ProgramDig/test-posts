import {createSlice} from "@reduxjs/toolkit";

const DEFAULT_POST = {id: '', title: '', text: ''}
const DEFAULT_POSTS = []
const postSlice = createSlice({
    name:'post',
    initialState: {
        post: DEFAULT_POST,
        posts: DEFAULT_POSTS
    },
    reducers: {

    }
})

export const {} = postSlice.actions
export default postSlice.reducer