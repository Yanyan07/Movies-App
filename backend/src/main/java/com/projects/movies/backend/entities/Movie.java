package com.projects.movies.backend.entities;

import java.util.List;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	private String imgUrl;
	private Integer minutes;
	private Integer releasedYear;
	private Double rate;
	private Boolean isAvailable;
	
	@ManyToMany
	@JoinTable(name="movie_genres",
			joinColumns = @JoinColumn(name="movie_id"),
			inverseJoinColumns = @JoinColumn(name="genres_id"))
	private List<Genres> genres;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "movies")
	private List<User> users;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Integer getMinutes() {
		return minutes;
	}
	public void setMinutes(Integer minutes) {
		this.minutes = minutes;
	}
	
	public Integer getReleasedYear() {
		return releasedYear;
	}
	public void setReleasedYear(Integer releasedYear) {
		this.releasedYear = releasedYear;
	}

	public Double getRate() {
		return rate;
	}
	public void setRate(Double rate) {
		this.rate = rate;
	}

	public List<Genres> getGenres() {
		return genres;
	}
	public void setGenres(List<Genres> genres) {
		this.genres = genres;
	}
	
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	
	public Boolean getIsAvailable() {
		return isAvailable;
	}
	public void setIsAvailable(Boolean isAvailable) {
		this.isAvailable = isAvailable;
	}
	
	public Movie() {
		super();
	}
	public Movie(Long id, String name, String description, String imgUrl, Integer minutes, Integer releasedYear,
			Double rate, Boolean isAvailable, List<Genres> genres, List<User> users) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.imgUrl = imgUrl;
		this.minutes = minutes;
		this.releasedYear = releasedYear;
		this.rate = rate;
		this.isAvailable = isAvailable;
		this.genres = genres;
		this.users = users;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(description, genres, id, imgUrl, isAvailable, minutes, name, rate, releasedYear, users);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Movie other = (Movie) obj;
		return Objects.equals(description, other.description) && Objects.equals(genres, other.genres)
				&& Objects.equals(id, other.id) && Objects.equals(imgUrl, other.imgUrl)
				&& Objects.equals(isAvailable, other.isAvailable) && Objects.equals(minutes, other.minutes)
				&& Objects.equals(name, other.name) && Objects.equals(rate, other.rate)
				&& Objects.equals(releasedYear, other.releasedYear) && Objects.equals(users, other.users);
	}
	
	@Override
	public String toString() {
		return "Movie [id=" + id + ", name=" + name + ", description=" + description + ", imgUrl=" + imgUrl
				+ ", minutes=" + minutes + ", releasedYear=" + releasedYear + ", rate=" + rate + ", isAvailable="
				+ isAvailable + ", genres=" + genres + ", users=" + users + "]";
	}	

}
