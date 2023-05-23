package cosmic.treasures.exception.impl;

import cosmic.treasures.exception.AbstractException;
import org.springframework.http.HttpStatus;

public class GoneContentException extends AbstractException {

    @Override
    public int getStatusCode() {
        return HttpStatus.GONE.value();
    }

    @Override
    public String getMessage() {
        return "Already_Delete";
    }
}
