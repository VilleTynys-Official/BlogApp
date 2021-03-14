import React, { useContext } from 'react';
import BlogPostContext from '../../context/BlogPostContext';

const EditView = () => {
  const {blogPosts, setBlogPosts} = useContext(BlogPostContext)

  console.log('blogPosts is', blogPosts);
  
  return (
    <div className='EditView-container'>
        <p>helloouuuuu</p>
        <p>value is {blogPosts}</p>
        <button onClick={() =>setBlogPosts("tadaaa")}>Click</button>
    </div>
  );
};

export default EditView;