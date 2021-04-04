# Blogapp
Simple application for saving blog texts.

## Technologies

* Backend
	* Java Spring Boot with Spring Initializr
	* MongoDB
* Frontend
	* React
	* Material-ui for some styling

## Requirements
* MongoDB
* Java
* Maven (for build process)

## How to run?

**MongoDB is required to run the application** (because MongoDB is used for managing the states of the blogtexts.
After MongoDB is set up and running you can either:
* A) Run the application from the blogapp.jar that is included in the ./target -folder.
  

* B) Build and run with Maven.

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

## A) Run from .jar
To run application from .jar file, make sure  MongoDB is running. Navigate to ./target folder and do

	java -jar blogapp.jar

Then navigate to localhost:8080.


## B) Build with Maven and run
### Install Maven
If you don't have Maven installed you can find instructions at:
https://maven.apache.org/install.html

### Build and run
To build the application, make sure  MongoDB is running. Then navigate to folder ./src/frontend in terminal.
and do

```
npm install
npm run build
```
This will install dependencies and build the frontend.
Then Maven can be used to build the application.
For this navigate to the root folder (blogapp) and do the following

```
mvn clean install
mvn spring-boot:run
```
Navigate to localhost:8080. The application should be running.

If you want you can build a jar file with Maven

```
./mvnw clean package
```

And then run application from .jar file. Make sure that MongoDB is running. Then navigate to ./target folder and do

	java -jar blogapp.jar

Then navigate to localhost:8080. Application should be running.



## Bugs or things to make better

* Refactoring of the api request ( frontend ) to services.
* There should be more robust tests for the error handling.
* Commenting could be better.


