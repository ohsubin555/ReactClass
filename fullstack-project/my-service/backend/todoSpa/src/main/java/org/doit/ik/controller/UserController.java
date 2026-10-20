package org.doit.ik.controller;


import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.doit.ik.dto.ResponseDTO;
import org.doit.ik.dto.UserDTO;
import org.doit.ik.entity.UserEntity;
import org.doit.ik.repository.UserRepository;
//import org.doit.ik.security.TokenProvider;
import org.doit.ik.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class UserController {

    private final UserRepository userRepository;
	private final UserService userService;

	// 1. 회원 가입
	/*
	 * { "username": "admin", "password": "1234" } 
	 * ->
	 * @RequestBody UserDTO userDTO
	 */
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
		try {
			if (userDTO == null || userDTO.getPassword() == null) {
				throw new RuntimeException("Invalid Password value.");
			}

			UserEntity user = UserEntity.builder()
				.username(userDTO.getUsername())
				.password(userDTO.getPassword())
				.build();

			UserEntity registeredUser = userService.create(user);
			
			log.info("😍😍😍"+ registeredUser);
			
			UserDTO responseUserDTO = UserDTO.builder()
				.id(registeredUser.getId())
				.username(registeredUser.getUsername())
				.build();

			return ResponseEntity.ok().body(responseUserDTO);
		}
		catch (Exception e) {
			ResponseDTO responseDTO = ResponseDTO.builder()
				.error(e.getMessage())
				.build();
			
			return ResponseEntity.badRequest().body(responseDTO);
		}
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticate(@RequestBody UserDTO userDTO) {
		
		UserEntity user = userService.getByCredentials(userDTO.getUsername(), userDTO.getPassword());

		if (user != null) {
			// final String token = tokenProvider.create(user);
			
			final UserDTO responseUserDTO = UserDTO.builder()
				.username(user.getUsername())
				.id(user.getId())
				// .token(token)
				.token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")
				.build();
			
			return ResponseEntity.ok().body(responseUserDTO);
		}
		else {
			ResponseDTO responseDTO = ResponseDTO.builder()
				.error("Login failed.")
				.build();
			
			return ResponseEntity.badRequest().body(responseDTO);
		}
		 
	}
	
}

