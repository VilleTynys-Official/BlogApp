package com.ville.blogapp.controller;

import com.ville.blogapp.model.BlogPost;
import com.ville.blogapp.repository.BlogPostRepository;
import com.ville.blogapp.repository.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/blogposts")
public class BlogPostController {

    private BlogPostService blogPostService;

    @Autowired
    private BlogPostController(BlogPostService blogPostService){
        this.blogPostService=blogPostService;
    }

    @GetMapping
    public Iterable<BlogPost> getAllBlogPosts () {
        System.out.println("running get all posts endpoint");
        return blogPostService.getAllBlogPosts();
    }

    @GetMapping("{id}")
    public Optional<BlogPost> findByIdInPath (@PathVariable String id) {
        System.out.println("finding by id: " + id);
        return blogPostService.findBlogPostById(id);
    }

    @PostMapping
    public String saveBlogPost (@RequestBody BlogPost blogPost) {
        blogPostService.saveBlogPost(blogPost);
        return "Blog post was created";
    }

    @PutMapping("{id}")
    public String updateBlogPost (@RequestBody BlogPost newBlogPost, @PathVariable String id) {
        Optional<BlogPost> blogPostData = blogPostService.findBlogPostById(id);

        if (blogPostData.isPresent()){
            BlogPost _blogPost = blogPostData.get();
            _blogPost.setBlogTitle(newBlogPost.blogTitle);
            _blogPost.setBlogText(newBlogPost.blogText);
            _blogPost.setTimeCreated(newBlogPost.timeCreated);
            blogPostService.saveBlogPost(_blogPost);

            return "Blog was updated";
        }

        return "Something went wrong";
    }

    @DeleteMapping("{id}")
    public void deleteBlogPost (@PathVariable String id) {
        System.out.println("deleting id: " + id);
        blogPostService.deleteBlogPostById(id);
    }
}