import React, { useContext, useEffect } from 'react';
import BlogPostContext from '../../context/BlogPostContext';
import {NavLink} from 'react-router-dom';
import BlogPostItem from '../BlogPostItem';
import axios from 'axios';
import '../../App.css';

const MainView = () => {
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)

  const getBlogPosts = async () => {
    try {
      const response = await axios.get('/blogposts');
      const data = await response.data;
      console.log(response);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

      useEffect(() => {
        getBlogPosts()
          .then(data => setBlogPosts(data))
          .catch(((err) =>
            console.log("something went wrong"),
            setBlogPosts([])
            ))
        }, [])
  
  return (
    <>
    <h1>Main view</h1>
      <div className='mainview-container'>
        <NavLink to={'/editview'}>
          <button
            className='add-button'
          >Add new post</button>
        </NavLink>

          {Array.isArray(blogPosts) ?
            (blogPosts.map(blogPost => {
              return  <BlogPostItem
                          key={blogPost.id}
                          blogPost={blogPost}
                          setBlogPosts={setBlogPosts}>
                      </BlogPostItem>
            })):
            (<p>no blogs yet</p>)}
      </div>
    </>
  );
};

export default MainView;