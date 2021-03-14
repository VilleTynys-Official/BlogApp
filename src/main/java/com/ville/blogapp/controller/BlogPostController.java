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

/*    @GetMapping
    public String sayHello(@RequestBody String id ){
        return "The id in body was " + id ;
    }*/


    @PostMapping
    public String saveBlogPost (@RequestBody BlogPost blogPost) {
        blogPostService.saveBlogPost(blogPost);
        return "Blog post was created";
    }

    @PutMapping("{id}")
    public String updateBlogPost (@RequestBody BlogPost newBlogPost, @PathVariable String id) {

        // TODO: Fix this to really update later...
        if (blogPostService.findBlogPostById(id).isPresent()){
            deleteBlogPost(id);
            saveBlogPost(newBlogPost);
            return "Blog was updated";
        }
        /*blogPostService.updateBlogPost(blogPost);*/

        return "Something went wrong";
    }

    @DeleteMapping("{id}")
    public void deleteBlogPost (@PathVariable String id) {
        System.out.println("deleting id: " + id);
        blogPostService.deleteBlogPostById(id);
    }




/*
    // this is an example of implementing ResponseEntity
    @RequestMapping("test")
    public ResponseEntity<String> handleRequest (RequestEntity<String> requestEntity) {
        System.out.println("request body : " + requestEntity.getBody());
        HttpHeaders headers = requestEntity.getHeaders();
        System.out.println("request headers : " + headers);
        System.out.println("request url: " + requestEntity.getUrl());

        ResponseEntity<String> responseEntity = new ResponseEntity<>("my response body",
                HttpStatus.OK);
        return responseEntity;
    }*/

}