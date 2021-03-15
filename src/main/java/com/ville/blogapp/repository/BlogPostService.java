package com.ville.blogapp.repository;

import com.ville.blogapp.model.BlogPost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/*
    This service provides the methods for managing the MongoDB blogPostsRepository
 */

@Service
public class BlogPostService {

    private BlogPostRepository blogPostRepository;

        @Autowired
        public BlogPostService(BlogPostRepository blogPostRepository){
            this.blogPostRepository = blogPostRepository;
        }

        public BlogPost saveBlogPost(BlogPost blogPost){
            return blogPostRepository.save(blogPost);
        }

        public Iterable<BlogPost> getAllBlogPosts (){
            return blogPostRepository.findAll();
        }

        public Optional<BlogPost> findBlogPostById (String id) {
            return blogPostRepository.findById(id);
        }

        public void deleteBlogPostById ( String id) {
            blogPostRepository.deleteById(id);
        }



}
