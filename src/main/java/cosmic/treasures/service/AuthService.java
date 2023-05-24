package cosmic.treasures.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private static final String PASSWORD_REGEX = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$";
    private static final String EMAIL_REGEX= "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
    /**
     *
     * @param password 비밀번호
     * @return 유효성 만족 유/무
     */
    public boolean checkPasswordValid(String password) {
        Pattern passPattern = Pattern.compile(PASSWORD_REGEX);
        return passPattern.matcher(password).matches();
    }

    public boolean checkEmailValid(String email) {
        Pattern emailPattern = Pattern.compile(EMAIL_REGEX);
        return emailPattern.matcher(email).matches();
    }
}