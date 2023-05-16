package com.projects.movies.backend.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.projects.movies.backend.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie,Long> {
	
	List<Movie> findByNameContaining(String name);
	List<Movie> findByGenres_Name(String genresName);
	
}
