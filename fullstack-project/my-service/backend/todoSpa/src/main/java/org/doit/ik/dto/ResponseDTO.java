package org.doit.ik.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseDTO<T> {
	
	private String error;  // 에러 메시지
	private List<T> data;  // TodoDTO, UserDTO 등등 다양한 응답 타입 사용 가능
	
}
