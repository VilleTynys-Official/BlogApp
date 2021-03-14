import React, { useContext, useEffect } from 'react';
import BlogPostContext from '../../context/BlogPostContext';
import {NavLink} from 'react-router-dom';
import BlogPostItem from '../BlogPostItem';


const MainView = () => {
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)

  useEffect(() => {
    console.log('Add defaul load for blogPosts here');
  }, [])
  
  return (
    <>
    <h1>Main view</h1>
      <div className='mainview-container'>
          {blogPosts.map(blogPost => {
            return  <BlogPostItem key={blogPost.id} blogPost={blogPost}></BlogPostItem>
          })}     
      </div>
    </>
  );
};

export default MainView;