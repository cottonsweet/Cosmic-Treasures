package cosmic.treasures.service;

import cosmic.treasures.exception.AbstractException;
import cosmic.treasures.exception.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Slf4j
@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler
    protected ResponseEntity<ErrorResponse> handlerCustomException(
        AbstractException e) {
        ErrorResponse errorRespnse = ErrorResponse.builder()
            .message(e.getMessage())
            .code(e.getStatusCode())
            .build();
        return new ResponseEntity<>(errorRespnse, HttpStatus.resolve(e.getStatusCode()));
    }
}
