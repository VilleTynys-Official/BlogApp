package com.ville.blogapp;

import com.ville.blogapp.model.BlogPost;
import com.ville.blogapp.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BlogappApplication {


	// Autowired uses Spring Data MongoDB to create a proxy and injects repository there
	// MongoDB uses locally hosted MongoDB instance by default
/*	@Autowired
	private BlogPostRepository repository;*/

	public static void main(String[] args) {
		SpringApplication.run(BlogappApplication.class, args);
	}

/*	@Override
	public void run(String... args) throws Exception {

		repository.deleteAll();
		repository.save(new BlogPost("blaahh", "123423"));

		System.out.println("Blogposts found with findAll():");
		System.out.println("-------------------------------");
		for (BlogPost blogpost : repository.findAll()) {
			System.out.println(blogpost);
		}
		System.out.println();

	}*/
}
