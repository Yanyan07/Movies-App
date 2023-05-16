package com.projects.movies.backend.services;

import java.util.List;
import com.projects.movies.backend.entities.Genres;

public interface GenresService {
	
	List<Genres> findAllGenres();
	List<Genres> findGenresByNames(String names);
	
}
