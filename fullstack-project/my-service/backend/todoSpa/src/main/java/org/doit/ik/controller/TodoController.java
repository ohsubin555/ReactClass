package org.doit.ik.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.doit.ik.dto.ResponseDTO;
import org.doit.ik.dto.TodoDTO;
import org.doit.ik.entity.TodoEntity;
import org.doit.ik.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
@RequestMapping("todo")
public class TodoController {

	private final TodoService service;

	/* [1]
	@PostMapping
	public ResponseEntity<?> createTodo(@RequestParam(name = "userId", defaultValue = "2") String userId, @RequestBody TodoDTO dto) {
		try {
			TodoEntity entity = TodoDTO.toEntity(dto);
			entity.setId(null);
			entity.setUserId(Long.parseLong(userId));

			List<TodoEntity> entities = service.create(entity);

			List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
	*/
	// [2]
	@PostMapping
	public ResponseEntity<?> createTodo(
			  @RequestHeader("userId") String userId
			, @RequestBody TodoDTO dto) {
		try {
			TodoEntity entity = TodoDTO.toEntity(dto);
			entity.setId(null);
			entity.setUserId(Long.parseLong(userId));

			List<TodoEntity> entities = service.create(entity);

			List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	/* [1]
	@GetMapping
	public ResponseEntity<?> retrieveTodoList(@RequestParam(name = "userId", defaultValue = "2") String userId) {
		List<TodoEntity> entities = service.retrieve(Long.parseLong(userId));

		List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

		return ResponseEntity.ok().body(response);
	}
	*/
	// [2]
	@GetMapping
	public ResponseEntity<?> retrieveTodoList(
			@RequestHeader("userId") String userId) {
		List<TodoEntity> entities = service.retrieve(Long.parseLong(userId));

		List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

		return ResponseEntity.ok().body(response);
	}
	

	@PutMapping
	public ResponseEntity<?> updateTodo(@RequestParam(name = "userId", defaultValue = "2") String userId, @RequestBody TodoDTO dto) {
		TodoEntity entity = TodoDTO.toEntity(dto);
		entity.setUserId(Long.parseLong(userId));

		List<TodoEntity> entities = service.update(entity);

		List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

		return ResponseEntity.ok().body(response);
	}

	@DeleteMapping
	public ResponseEntity<?> deleteTodo(@RequestParam(name = "userId", defaultValue = "2") String userId, @RequestBody TodoDTO dto) {
		try {
			TodoEntity entity = TodoDTO.toEntity(dto);
			entity.setUserId(Long.parseLong(userId));

			List<TodoEntity> entities = service.delete(entity);

			List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}

}
