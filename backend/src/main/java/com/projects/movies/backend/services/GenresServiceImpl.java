package com.projects.movies.backend.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.projects.movies.backend.entities.Genres;
import com.projects.movies.backend.repositories.GenresRepository;

@Service
public class GenresServiceImpl implements GenresService {
	@Autowired
	private GenresRepository genresRepository;

	@Override
	public List<Genres> findAllGenres() {
		return genresRepository.findAll();
	}
		
	@Override
	public List<Genres> findGenresByNames(String names) {
		List<Genres> genres = genresRepository.findAll();
		List<Genres> result = new ArrayList<>();
		for(Genres g : genres) {
			if(names.contains(g.getName())) {
				result.add(g);
			}
		}
		return result;
	}

}
