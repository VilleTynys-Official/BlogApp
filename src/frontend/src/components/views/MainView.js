import React, { useContext, useEffect } from 'react';
import BlogPostContext from '../../context/BlogPostContext';
import {NavLink} from 'react-router-dom';
import BlogPostItem from '../BlogPostItem';
import axios from 'axios';


import CurrentPostContext from '../../context/CurrentPostContext';

const MainView = () => {
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)
  const {currentPost, setCurrentPost} = useContext(CurrentPostContext)

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
 

  console.log('currentPOst is ', currentPost);
  
  return (
    <>
    <h1>Main view</h1>
      <div className='mainview-container'>
        <NavLink to={'/editview'}>
          <button>Add blog</button>
        </NavLink>

          {blogPosts !==undefined ?
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