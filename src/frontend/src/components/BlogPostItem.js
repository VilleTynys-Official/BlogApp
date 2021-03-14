import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

function BlogPostItem({blogPost}) {

    console.log('blogPost', blogPost.id);
    
    return (
        <div className='item-container'>
            <div className='item-information-container'>
                <p>{blogPost.blogTitle}</p>
                <p>{blogPost.timeCreated}</p>
            </div>
            <NavLink to="/editview">
                <button>View</button>
                <button>Delete</button>
            </NavLink>
        </div>
    )
}

export default BlogPostItem
