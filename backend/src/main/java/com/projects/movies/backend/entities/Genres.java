package com.projects.movies.backend.entities;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Genres {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;

	@JsonIgnore
	@ManyToMany(mappedBy="genres")
	private List<Movie> movies;

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public List<Movie> getMovies() {
		return movies;
	}
	public void setMovies(List<Movie> movies) {
		this.movies = movies;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, movies, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Genres other = (Genres) obj;
		return Objects.equals(id, other.id) && Objects.equals(movies, other.movies) && Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "Genres [id=" + id + ", name=" + name + ", movies=" + movies + "]";
	}
		
}
