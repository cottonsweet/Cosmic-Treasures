package cosmic.treasures.exception.impl;

import cosmic.treasures.exception.AbstractException;
import org.springframework.http.HttpStatus;

public class ServerError extends AbstractException {

    @Override
    public int getStatusCode() {
        return HttpStatus.INTERNAL_SERVER_ERROR.value();
    }

    @Override
    public String getMessage() {
        return "Internal_Server_Error";
    }
}
