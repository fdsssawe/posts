import React from 'react';
import { useState } from 'react';
import MyButton from './buttons/MyButton';
import MyInput from './inout/MyInput';

const PostForm = ({create}) => {
    const [post , setPost] = useState({title : "" , body:  ""})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post , id: Date.now()
        }
        create(newPost)
        setPost({title: '',body: ''})
      }

    return (
        <form>
        <MyInput 
        value={post.title} 
        type="text" 
        placeholder='Post name'
        onChange={e=>setPost({...post , title: e.target.value})}/>
        <MyInput 
        type="text" 
        placeholder='Post description'
        onChange={e=>setPost({...post ,body: e.target.value})}
        value={post.body}/>
        <MyButton onClick={addNewPost}>Add your post</MyButton>
      </form>
    );
};

export default PostForm;