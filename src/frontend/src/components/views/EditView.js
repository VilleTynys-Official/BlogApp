import React, { useState, useContext, useEffect } from 'react';
import CurrentPostContext from '../../context/CurrentPostContext';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../../App.css';

// styling for material ui component used in TextFields
const useStyles = makeStyles(()=> ({
  textbox: {
      width: '800px',
  }
}));


//  Collects user input into newBlogPost and sends it to backend when user clicks Save Post.

const EditView = () => {
  const classes = useStyles();
  const history = useHistory();
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

  const onChange = event => setNewBlogPost(
      {...newBlogPost,
        [event.target.name]: event.target.value})

  const saveBlogPost = async () => {
    try{
        axios.post(`/blogposts/`, newBlogPost)

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



    // if current is empty, send the newBlogPost to backend
    // else send an update request

    const onSubmit = event => {
      event.preventDefault();           
      if(currentPost === null){
          saveBlogPost()
          .then(
          console.log("saved the blog" ),
          setCurrentPost(null), // cleaning the currentPost
          ).finally(() => history.push('/'))
          .catch((error) => console.log(error));
          setCurrentPost(null)
      }else{
          updateBlogPost()
          .then(
            console.log("updated the blog" ),
            setCurrentPost(null), // cleaning the currentPost
            ).finally(() => history.push('/'))
            .catch((error) => console.log(error));
            setCurrentPost(null)
      }
  }

  return (
    <div className='editview-container'>
        <form
          noValidate autoComplete="off"
          onSubmit={onSubmit}>
            <h4>Title</h4>
            <TextField
                className={classes.textbox}
                id="filled-multiline-static"
                variant="outlined"
                rows={1}
                name='blogTitle'
                value={blogTitle}
                onChange={onChange}
            />
            <br></br>
            <h4>Text</h4>
            <TextField
                className={classes.textbox}
                id="filled-multiline-static"
                multiline
                variant="outlined"
                rows={10}
                type='text'
                name='blogText'
                value={blogText}
                onChange={onChange}
            />
            <br></br>
            <NavLink to="/">
                <button onClick={() => setCurrentPost(null)} className='add-button'>Cancel</button>
            </NavLink>
            <input
                type='submit'
                value='Save post'
                className='add-button'>
            </input>

        </form>
    </div>
  );
};

export default EditView;