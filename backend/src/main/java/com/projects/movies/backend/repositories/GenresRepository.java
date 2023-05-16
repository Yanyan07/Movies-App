package com.projects.movies.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projects.movies.backend.entities.Genres;

public interface GenresRepository extends JpaRepository<Genres,Integer> {

}
