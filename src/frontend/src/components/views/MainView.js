import React, { useContext, useEffect } from 'react';
import BlogPostContext from '../../context/BlogPostContext';
import {NavLink} from 'react-router-dom';
import BlogPostItem from '../BlogPostItem';


const MainView = () => {
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)

  useEffect(() => {
    console.log('Add defaul load for blogPosts here');
  }, [])
  

  console.log('type of blogPosts', typeof(blogPosts));
  
  return (
    <>
    <h1>Main view</h1>
      <div className='mainview-container'>
        <button>Add blog</button>
          {blogPosts !==undefined ?
            (blogPosts.map(blogPost => {
              return  <BlogPostItem key={blogPost.id} blogPost={blogPost}></BlogPostItem>
            })):
            (<p>no blogs yet</p>)}
      </div>
    </>
  );
};

export default MainView;