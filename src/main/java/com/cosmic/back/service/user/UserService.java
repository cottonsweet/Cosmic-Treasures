package com.cosmic.back.service.user;

import com.cosmic.back.Entities.User;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import com.cosmic.back.dto.user.SaveUserRequest;
import com.cosmic.back.repository.user.UserRepository;
import com.cosmic.back.util.UniqueIdGenerator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;
import java.time.LocalDateTime;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) { this.userRepository = userRepository; }

    @Transactional
    public void saveUser(SaveUserRequest req){
        String hashedPassword = UniqueIdGenerator.generateUniqueId(req.getPassword());
        LocalDateTime createdAt = LocalDateTime.now();
        User u = userRepository.save(new User(
                req.getLoginId(),
                hashedPassword,
                req.getNickname(),
                createdAt
        ));
    }
}
