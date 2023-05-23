package cosmic.treasures.exception.impl;

import cosmic.treasures.exception.AbstractException;
import org.springframework.http.HttpStatus;

public class ForbiddenException extends AbstractException {

    @Override
    public int getStatusCode() {
        return HttpStatus.FORBIDDEN.value();
    }

    @Override
    public String getMessage() {
        return "Forbidden_user";
    }
}
