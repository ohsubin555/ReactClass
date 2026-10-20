package org.doit.ik.service;

import org.springframework.stereotype.Service;

import org.doit.ik.entity.UserEntity;
import org.doit.ik.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserService {

	private final UserRepository userRepository;
	
	// 회원가입
	public UserEntity create(final UserEntity userEntity) {
		if (userEntity == null || userEntity.getUsername() == null) {
			throw new RuntimeException("Invalid arguments");
		}
		
		final String username = userEntity.getUsername();
		
		if (userRepository.existsByUsername(username)) {
			log.warn("Username already exists {}", username);
			throw new RuntimeException("Username already exists");
		}

		return userRepository.save(userEntity);
	}

	// 로그인
	public UserEntity getByCredentials(final String username, final String password) {
		final UserEntity originalUser = userRepository.findByUsername(username);

		if (originalUser != null && password.equals( originalUser.getPassword() ) ) {
			return originalUser;
		}
		
		return null;
	}
	
}

