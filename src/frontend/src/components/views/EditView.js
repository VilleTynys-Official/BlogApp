import React, { useState, useContext, useEffect } from 'react';
import BlogPostContext from '../../context/BlogPostContext';
import CurrentPostContext from '../../context/CurrentPostContext';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../../App.css';


//  Collects user input into newBlogPost and sends it to backend when user clicks Save Post.

const EditView = () => {
  const history = useHistory();
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)
  const {currentPost, setCurrentPost} = useContext(CurrentPostContext)
  const today = new Date()
  const date = today.toLocaleDateString("en-US").toString();
  const [newBlogPost, setNewBlogPost] = useState({
      blogText: "",
      blogTitle: "",
      timeCreated: date,
      id: ""
  });
  const {blogText, blogTitle} = newBlogPost;

  useEffect(() => {
    if(currentPost !== null) {
      setNewBlogPost({...newBlogPost, blogText:currentPost.blogText, blogTitle:currentPost.blogTitle, id:currentPost.id})
    }}, [])

  console.log('new post is ', newBlogPost);
  

  const onChange = event => setNewBlogPost(
      {...newBlogPost,
        [event.target.name]: event.target.value})

  const saveBlogPost = async () => {
    try{
        axios.post(`/blogposts/`, newBlogPost)
        setBlogPosts(blogPosts);

    }catch(error) {
        console.error(error);
      }
      setCurrentPost(null);
    };

  const updateBlogPost = async () => {
    try{
      axios.put(`/blogposts/${newBlogPost.id}`, newBlogPost)
  }catch(error) {
      console.error(error);
    }
    setCurrentPost(null);
  };



    // if current is empty send the newBlogPost to backend
    // else send an update request
    const onSubmit = event => {
        event.preventDefault();           
        if(currentPost === null){
            saveBlogPost()
            .then(
            console.log("saved the blog" ),
            setCurrentPost(null) // cleaning the currentPost
            )
            .catch((error) => console.log(error));
            setCurrentPost(null)
        }else{
            console.log('here I would only update');

            updateBlogPost()
            .then(
              console.log("updated the blog" ),
              setCurrentPost(null) // cleaning the currentPost
              )
              .catch((error) => console.log(error));
              setCurrentPost(null)
        }

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
                <button onClick={() => setCurrentPost(null)} className='form-button'>Cancel</button>
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