package com.projects.movies.backend.controllers;

import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.projects.movies.backend.entities.Genres;
import com.projects.movies.backend.entities.Movie;
import com.projects.movies.backend.services.GenresService;
import com.projects.movies.backend.services.MovieService;

@RestController 
@CrossOrigin({"*", "http://localhost:3001"})
public class MovieController {

	@Autowired
	private MovieService movieSvc;
	@Autowired
	private GenresService genresService;
	
	@GetMapping("movies")
	public List<Movie> getAllMovies(HttpServletResponse res) {
		List<Movie> movies = movieSvc.findAllMovies();
		if(movies!=null && movies.size()>0) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return movies;
	}
	
	@GetMapping("movies/movie/{id}")
	public Movie getMovieById(HttpServletResponse res, @PathVariable Long id) {
		Movie movie = movieSvc.findMovieById(id);
		if(movie != null) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return movie;
	}
	
	@GetMapping("movies/name/{name}")
	public List<Movie> getMoviesByNameContaining(HttpServletResponse res, @PathVariable String name) {
		List<Movie> movies = movieSvc.findMoviesByNameContaining(name) ;
		if(movies!=null && movies.size()>0) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return movies;
	}
	
	@GetMapping("movies/genres/{genresName}")
	public List<Movie> findMoviesByGenres_Name(HttpServletResponse res, @PathVariable String genresName) {
		List<Movie> movies = movieSvc.findMoviesByGenres_Name(genresName) ;
		if(movies!=null && movies.size()>0) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return movies;
	}
	
	@PutMapping("movies/movie/{movieId}/{genresStr}")
	public Movie updateMovie(HttpServletResponse res, @RequestBody Movie movie, @PathVariable Long movieId, @PathVariable String genresStr) {
		Movie m = movieSvc.findMovieById(movieId);
		if(m != null) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
			return null;
		}
		List<Genres> genres = genresService.findGenresByNames(genresStr);
		m.setName(movie.getName());
		m.setDescription(movie.getDescription());
		m.setImgUrl(movie.getImgUrl());
		m.setMinutes(movie.getMinutes());
		m.setReleasedYear(movie.getReleasedYear());
		m.setRate(movie.getRate());
		m.setIsAvailable(movie.getIsAvailable());
		m.setGenres(genres);
		return movieSvc.saveMovie(m);
	}
	
	@PostMapping("movies/movie/{genresStr}")
	public Movie addMovie(HttpServletResponse res, @RequestBody Movie movie, @PathVariable String genresStr) {
		if(movie != null) {
			res.setStatus(200);
			List<Genres> genres = genresService.findGenresByNames(genresStr);
			movie.setIsAvailable(true);
			movie.setGenres(genres);
			return movieSvc.saveMovie(movie);
		}
		return null;
	}
	
	@DeleteMapping("movies/movie/{movieId}")
	public Movie deleteMovie(HttpServletResponse res, @PathVariable Long movieId) {
		Movie m = movieSvc.findMovieById(movieId);
		if(m != null) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
			return m;
		}
		m.setIsAvailable(false);	
		return movieSvc.saveMovie(m);
	}
	
	@DeleteMapping("movies/{movieId}")
	public Boolean deleteMovieTest(HttpServletResponse res, @PathVariable Long movieId) {
		Movie m = movieSvc.findMovieByIdTest(movieId);
		if(m != null) {
			res.setStatus(200);
			return movieSvc.deleteMovie(m);	
		}
		return false;
	}
	
}
