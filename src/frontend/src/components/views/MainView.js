import React, { useContext } from 'react';
import BlogPostContext from '../../context/BlogPostContext';

const MainView = () => {
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)

  console.log('blogPosts is', blogPosts);
  
  return (
    <div className='MainView-container'>
        <p>helloouuuuu</p>
        <p>value is {blogPosts}</p>
        <button onClick={() =>setBlogPosts("tadaaa")}>Click</button>
    </div>
  );
};

export default MainView;