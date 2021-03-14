import React, { useState, useContext } from 'react';
import BlogPostContext from '../../context/BlogPostContext';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import '../../App.css';


//  Collects user input into newBlogPost and sends it to backend when user clicks Save Post.

const EditView = () => {
  const history = useHistory();
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)
  const [newBlogPost, setNewBlogPost] = useState({
      blogText: "",
      blogTitle: "",
      dateCreated: ""
  });

  const {blogText, blogTitle, dateCreated} = newBlogPost;
  
  const onChange= event => setNewBlogPost({...newBlogPost, [event.target.name]: event.target.value})
  
  const onSubmit = event => {
      event.preventDefault();
      history.push('/');
        console.log('send here the new blog to backend');
  }
    
  
  return (
    <div className='editview-container'>
        <h1>Edit view</h1>
        <form onSubmit={onSubmit}>
            <h2>Title</h2>
            <input
                type='text'
                name='blogTitle'
                value={blogTitle}
                onChange={onChange}
            />
            <br></br>
            <h2>Text</h2>
            <input
                type='text'
                name='blogText'
                value={blogText}
                onChange={onChange}
            />
            <br></br>
            <NavLink to="/">
                <button className='form-button'>Cancel</button>
            </NavLink>
            <input
                type='submit'
                value='Save post'
                className='form-button'>
            </input>

        </form>
    </div>
  );
};

export default EditView;