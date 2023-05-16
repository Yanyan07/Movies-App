package com.projects.movies.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projects.movies.backend.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
	User findByUsername(String username);
	User findByUsernameAndPassword(String username, String password);
}
