# Blogapp
Simple application for saving blog texts.

## Technologies

    * Java Spring Boot with Spring Initializr
    * MongoDB
    * React

## Requirements
    * MongoDB
    * Java

## How to

### Install and Launch MongoDB
For the application to work you need MongoDB database.
If you use a Mac with Homebrew, you can run the following command:
```bash
$ brew install mongodb
```
With MacPorts, you can run the following command:
```
$ port install mongodb
```
For other systems with package management, such as Redhat, Ubuntu, Debian, CentOS, and Windows, see the instructions at https://docs.mongodb.org/manual/installation/.

After you install MongoDB, you can launch it in a console window by running the following command (which also starts up a server process):

```
$ mongod
```
You should see output similar to the following:

```
all output going to: /usr/local/var/log/mongodb/mongo.log
```


(Reference: https://spring.io/guides/gs/accessing-data-mongodb/ , 2021-3-15)



## Run as .jar
To run application from .jar file, make sure  MongoDB is running. Then navigate to ./target folder.

	java -jar blogapp.jar
		
Then navigate to localhost:8080

## Build and run with Maven
To build the application, make sure  MongoDB is running. Then navigate to folder ./src/frontend in terminal.
and do

```
npm install
npm run build
```
This will install dependencies and build the frontend.
Then Maven can be used to build one file of the whole application.
For this navigate to the root folder (blogapp) and do the following

```
mvn clean install
mvn spring-boot:run
```
Navigate to localhost:8080

To build a jar file

```
./mvnw clean package
```

To run application from .jar file, make sure  MongoDB is running. Navigate to ./target folder.

	java -jar blogapp.jar
		
Then navigate to localhost:8080


