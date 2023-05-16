package com.projects.movies.backend.services;

import java.util.List;
import com.projects.movies.backend.entities.Movie;

public interface MovieService {
	
	List<Movie> findAllMovies();
	List<Movie> findMoviesByNameContaining(String name);
	List<Movie> findMoviesByGenres_Name(String genresName);
	Movie findMovieById(Long id);
	Movie saveMovie(Movie movie);
	Boolean deleteMovie(Movie movie);
	Movie findMovieByIdTest(Long id);

}
