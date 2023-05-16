package com.projects.movies.backend.services;

import com.projects.movies.backend.entities.User;

public interface UserService {
	
	User addUser(User user);
	User getUserByUsername(String username);
	User getUserByUsernameAndPassword(String username, String password);
	
}
