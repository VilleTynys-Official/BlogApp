package com.ville.blogapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "blogposts")
public class BlogPost {

    @Id //generates an id
    public String id;

    public String blogText;
    public String timeCreated;
    public String blogTitle;


    public BlogPost(){}

    public BlogPost(String blogText, String timeCreated, String blogTitle) {
        this.blogText = blogText;
        this.timeCreated = timeCreated;
        this.blogTitle = blogTitle;
    }

    public String getBlogText() {
        return blogText;
    }

    public String getTimeCreated() {
        return timeCreated;
    }

    public String getBlogTitle() { return blogTitle; }


    public void setBlogText(String blogText) {
        this.blogText = blogText;
    }

    public void setTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
    }

    public void setBlogTitle(String blogTitle) {
        this.blogTitle = blogTitle;
    }

    @Override
    public String toString() {
        return String.format(
                "Blogpost[id=%s], timeCreated ='%s'",
                id, timeCreated);
    }
}
