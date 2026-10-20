package org.doit.ik.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
	
	private String token; // JWT
	private String username;
	private String password;
	private Long id;
	
	// 권한 X
	
}

