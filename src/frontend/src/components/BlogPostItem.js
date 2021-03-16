import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import BlogPostContext from '../context/BlogPostContext';
import CurrentPostContext from '../context/CurrentPostContext';
import '../App.css';

function BlogPostItem({blogPost}) {
    const {blogPosts, setBlogPosts} = useContext(BlogPostContext)
    const {setCurrentPost} = useContext(CurrentPostContext)

    const deleteBlogPost = () => {
        let newPosts = blogPosts.filter((post => post.id !== blogPost.id)) 
        axios.delete(`/blogposts/${blogPost.id}`)
          .then(
              setBlogPosts(newPosts),
              console.log('deleted blog')
              
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
                <button
                    className="item-button"
                    onClick={() =>setCurrentPost(blogPost)}>View</button>
            </NavLink>
                <button className="item-button"
                    onClick={deleteBlogPost}>Delete</button>
        </div>
    )
}

export default BlogPostItem
