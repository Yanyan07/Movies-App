package com.projects.movies.backend.controllers;

import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.projects.movies.backend.entities.Genres;
import com.projects.movies.backend.services.GenresService;

@RestController 
@CrossOrigin({"*", "http://localhost:3001"})
public class GenresController {
	@Autowired
	private GenresService genresService;
	
	@GetMapping("genres")
	public List<Genres> getAllGenres(HttpServletResponse res){
		List<Genres> genres = genresService.findAllGenres();
		if(genres != null) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return genres;
	}
	
}
