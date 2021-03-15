import React, { useState, useContext } from 'react';
import BlogPostContext from '../../context/BlogPostContext';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../../App.css';


//  Collects user input into newBlogPost and sends it to backend when user clicks Save Post.

const EditView = () => {
  const history = useHistory();
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)
  const today = new Date()
  const date = today.toLocaleDateString("en-US").toString();
  const [newBlogPost, setNewBlogPost] = useState({
      blogText: "",
      blogTitle: "",
      timeCreated: date
  });

  const {blogText, blogTitle} = newBlogPost;
  
  const onChange= event => setNewBlogPost(
      {...newBlogPost,
        [event.target.name]: event.target.value})
  
    console.log('newBlogpost is', newBlogPost);


  const saveBlogPost = async () => {
    try{
        axios.post(`/blogposts/`, newBlogPost)
        setBlogPosts(blogPosts);
    }catch(error) {
        console.error(error);
      }
    };


  const onSubmit = event => {
      event.preventDefault();

        // sending the newBlogPost to backend
       saveBlogPost()
       .then(
        console.log("saved the blog" ),
        )
        .catch((error) => console.log(error));
      
        history.push('/');
  }
    
  
  return (
    <div className='editview-container'>
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