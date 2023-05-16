# Movies App 

## Overview
* The Movie Project is a web application that allows users to search for movies by genres or keywords and provides CRUD functionality. The application is built using the Spring Boot framework for the backend and React for the frontend.

* The Movie Project aims to provide an intuitive and convenient way for users to search for movies, explore the details of movies, and add them to their cart. The use of Spring Boot and React enables efficient development and a seamless user experience. With role-based access control, "user" users can explore and add movies to their cart, while the "admin" users can manage movie data effectively.

## How to Use
1. Download the code from the GitHub repository: https://github.com/Yanyan07/Movies-App
   * The server runs on port 8088, and the client runs on port 3001.

2. Open a terminal and navigate to the "frontend" folder of the project.

3. Run the following commands in the terminal:
   * npm i
   * npm start

4. After running the above commands, the home page of the application will be displayed in your browser. It will show all the movies by genres.

5. Search for movies:
   * In the header of the home page, select "All" and click the search sign (magnifying glass) to show all the movies by genres.
   * Select "Genres", type in the genre you want, and click the search sign to show movies of the specific genre.
   * Select "Keywords", type in the keyword you want, to show movies containing the keywords in their title.
   * Click anywhere on a movie picture to view the details of the movie.

6. Regular User( **username:eric password:123** )
   * After logging in, the "Add to Cart" button will be displayed for each movie, allowing you to add the movie to your cart.
   * The number of movies in your cart will appear in the cart sign.

7. Admin User( **username:oscar password:456** )
   * If you log in as an "admin" user, the "New Movie", "Update", and "Delete" buttons will be available too, allowing you to perform CRUD operations on movies.

8. To return to the home page, click the logo of the movie app.

## Technologies Used
* Java 1.8
* Spring Boot 2.7.10
* RESTful API
* Maven
* MySQL
* JPA
* JavaScript
* React 18
* axios
* pubsub-js
* HTML 5
* CSS
* Git
* GitHub

## Lessons Learned
* In this project, I learned how to update the state hook in nested axios request and display images in different ways in React. And also learned how to use pubsub-js to communicate between any components.