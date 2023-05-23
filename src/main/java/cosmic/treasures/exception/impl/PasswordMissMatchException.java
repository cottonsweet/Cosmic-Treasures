package cosmic.treasures.exception.impl;

import cosmic.treasures.exception.AbstractException;
import org.springframework.http.HttpStatus;

public class PasswordMissMatchException extends AbstractException {

    @Override
    public int getStatusCode() {
        return HttpStatus.NOT_ACCEPTABLE.value();
    }

    @Override
    public String getMessage() {
        return "PASSWORD_MISS_MATCH";
    }
}
