import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import BlogPostContext from '../context/BlogPostContext';
import CurrentPostContext from '../context/CurrentPostContext';

function BlogPostItem({blogPost}) {
    const {blogPosts, setBlogPosts} = useContext(BlogPostContext)
    const {setCurrentPost} = useContext(CurrentPostContext)

    const deleteBlogPost = () => {
        let newPosts = blogPosts.filter((post => post.id !== blogPost.id)) 
        axios.delete(`/blogposts/${blogPost.id}`)
          .then(
              console.log("updating blogPosts state to", newPosts ),
              setBlogPosts(newPosts)
              )
          .catch((error) => console.log(error));
        }

    
    return (
        <div className='item-container'>
            <div className='item-information-container'>
                <p>{blogPost.blogTitle}</p>
                <p>{blogPost.timeCreated}</p>
            </div>
            <NavLink to="/editview">
                <button onClick={() =>setCurrentPost(blogPost)}>View</button>
            </NavLink>
                <button onClick={deleteBlogPost}>Delete</button>
        </div>
    )
}

export default BlogPostItem
