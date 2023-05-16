package com.projects.movies.backend.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.projects.movies.backend.entities.Movie;
import com.projects.movies.backend.repositories.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {
	@Autowired
	private MovieRepository movieRepository;
	
	@Override
	public List<Movie> findAllMovies() {
		List<Movie> movies = movieRepository.findAll();
		List<Movie> result = new ArrayList<>();
		for(Movie movie : movies) {
			if(movie.getIsAvailable()) {
				result.add(movie);
			}
		}
		return result;
	}
	
	@Override
	public Movie findMovieById(Long id) {
		Movie movie = movieRepository.findById(id).get();
		if(movie!=null && movie.getIsAvailable()) {
			return movie;
		}else {
			return null;
		}
	}
	
	@Override
	public Movie findMovieByIdTest(Long id) {
		return movieRepository.findById(id).get();
	}

	@Override
	public List<Movie> findMoviesByNameContaining(String name) {	
		List<Movie> movies = movieRepository.findByNameContaining(name);
		List<Movie> result = new ArrayList<>();
		for(Movie movie : movies) {
			if(movie.getIsAvailable()) {
				result.add(movie);
			}
		}
		return result;
	}
	
	@Override
	public List<Movie> findMoviesByGenres_Name(String genresName) {
		List<Movie> movies = movieRepository.findByGenres_Name(genresName);
		List<Movie> result = new ArrayList<>();
		for(Movie movie : movies) {
			if(movie.getIsAvailable()) {
				result.add(movie);
			}
		}
		return result;
	}
	
	@Override
	public Movie saveMovie(Movie movie) {
		if(movie != null) {
			movieRepository.saveAndFlush(movie);
		}
		return movie;
	}
	
	@Override
	public Boolean deleteMovie(Movie movie) {
		if(movie != null) {
			movieRepository.delete(movie);
			return true;
		}
		return false;
	}	

}
