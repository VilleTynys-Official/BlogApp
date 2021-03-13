package com.ville.blogapp.controller;

import com.ville.blogapp.model.BlogPost;
import com.ville.blogapp.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("blogposts")
public class BlogPostController {



    @Autowired
    private BlogPostRepository repository;
/*    @GetMapping
    public String getAllBlogPosts () {

        return "blaah";*/

    @GetMapping
    public List<BlogPost> getAllBlogPosts () {

        List<BlogPost> blogPosts = new ArrayList<>();
        System.out.println("---------Getting blogPosts----------------------");
        for (BlogPost blogpost : repository.findAll()) {
            System.out.println(blogpost);
        }
        return blogPosts;
    }
}