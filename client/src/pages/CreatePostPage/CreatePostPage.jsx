import React from 'react';
import Form from "../../components/Form/Form";
import LastPost from "../../components/LastPost/LastPost";
// import classes from "./CreatePostPage.module.sass"

const CreatePostPage = () => {
    return (
        <div>
            <Form/>
            <LastPost/>
        </div>
    );
};

export default CreatePostPage;