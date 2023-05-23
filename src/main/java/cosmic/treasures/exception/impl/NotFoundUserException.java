package cosmic.treasures.exception.impl;

import cosmic.treasures.exception.AbstractException;
import org.springframework.http.HttpStatus;

public class NotFoundUserException extends AbstractException {

    @Override
    public int getStatusCode() {
        return HttpStatus.NOT_FOUND.value();
    }

    @Override
    public String getMessage() {
        return "User_Not_Exists";
    }
}
