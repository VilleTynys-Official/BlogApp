package com.ville.blogapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "student")
public class BlogPost {

    @Id //generates an id
    public String id;

    public String blogText;
    public String timeCreated;

    public BlogPost(){}

    public BlogPost(String blogText, String timeCreated) {
        this.blogText = blogText;
        this.timeCreated = timeCreated;
    }

    public String getBlogText() {
        return blogText;
    }

    public String getTimeCreated() {
        return timeCreated;
    }

    @Override
    public String toString() {
        return String.format(
                "Blogpost[id=%s], timeCreated ='%s'",
                id, timeCreated);
    }
}
