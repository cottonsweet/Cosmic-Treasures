package cosmic.treasures.exception.impl;

import cosmic.treasures.exception.AbstractException;
import org.springframework.http.HttpStatus;

public class NoContentException extends AbstractException {
    @Override
    public int getStatusCode() {
        return HttpStatus.NO_CONTENT.value();
    }
    @Override
    public String getMessage() {
        return "No_Content";
    }
}
