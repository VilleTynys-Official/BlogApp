package com.ville.blogapp.repository;

import com.ville.blogapp.model.BlogPost;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BlogPostRepository extends MongoRepository<BlogPost, String> {


}
