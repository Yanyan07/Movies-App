package com.projects.movies.backend.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projects.movies.backend.entities.Movie;
import com.projects.movies.backend.entities.User;
import com.projects.movies.backend.services.MovieService;
import com.projects.movies.backend.services.UserService;

@RestController 
@CrossOrigin({"*", "http://localhost:3001"})
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private MovieService movieSvc;
	
	@GetMapping("user/{username}")
	public User getUserByUsername(HttpServletResponse res, @PathVariable String username) {
		User user = userService.getUserByUsername(username);
		if(user != null) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return user;
	}
	
	@GetMapping("user/movies/{username}")
	public List<Movie> getMoviesByUsername(HttpServletResponse res, @PathVariable String username) {
		User user = userService.getUserByUsername(username);
		List<Movie> movies = new ArrayList<>();
		if(user != null) {
			res.setStatus(200);
			movies = user.getMovies();
		}else {
			res.setStatus(404);
		}
		return movies;
	}
	
	@GetMapping("user/{username}/{password}")
	public User getUserByUsernameAndPassword(HttpServletResponse res, @PathVariable String username, @PathVariable String password) {
		User user = userService.getUserByUsernameAndPassword(username, password);
		if(user != null) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return user;
	}
	
	@PostMapping("user")
	public User addNewUser(HttpServletResponse res, @RequestBody User user) {
		User userAdded = userService.addUser(user);
		if(userAdded != null) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return userAdded;
	}
	@PostMapping("user/movies")
	public Boolean addMoviesToUser(HttpServletResponse res, @RequestBody User u) {
		String[] strs = u.getUsername().split(" ");
		String username = strs[0];
		Long movieId = Long.parseLong(strs[1]);	
		User user = userService.getUserByUsername(username);
		if(user == null) {
			res.setStatus(404);
			return false;
		}
		Movie movie = movieSvc.findMovieById(movieId);
		if(movie == null) {
			res.setStatus(404);
			return false;
		}
		
		List<Movie> movies = user.getMovies();
		for(Movie m : movies) { //duplication elimination
			if(m.getId() == movieId) {
				return false;
			}
		}
		movies.add(movie);
		user.setMovies(movies);		
		userService.addUser(user);
		return true;
	}
	@PostMapping("user/movie/delete")
	public List<Movie> deleteMoviesFromUser(HttpServletResponse res, @RequestBody User u) {
		String[] strs = u.getUsername().split(" ");
		String username = strs[0];
		Long movieId = Long.parseLong(strs[1]);	
		User user = userService.getUserByUsername(username);
		if(user == null) {
			res.setStatus(404);
			return null;
		}
		Movie movie = movieSvc.findMovieById(movieId);
		if(movie == null) {
			res.setStatus(404);
			return null;
		}
		List<Movie> movies = user.getMovies();
		movies.remove(movie);
		user.setMovies(movies);		
		userService.addUser(user);
		return movies;
	}
	
}
