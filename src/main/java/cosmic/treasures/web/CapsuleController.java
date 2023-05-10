package cosmic.treasures.web;

import cosmic.treasures.dto.capsule.CapsuleInfo;
import cosmic.treasures.dto.capsule.CreateCapsule;
import cosmic.treasures.dto.capsule.DeleteCapsule;
import cosmic.treasures.dto.capsule.UpdateCapsule;
import cosmic.treasures.security.TokenProvider;
import cosmic.treasures.service.CapsuleService;

import java.util.List;
import java.util.Map;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Min;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/capsule")
public class CapsuleController {
    private final TokenProvider tokenProvider;
    private final CapsuleService capsuleService;

    public static final String TOKEN_PREFIX = "Bearer ";
    @GetMapping("/my")
    @PreAuthorize("hasRole('NORMAL')")
    public List<CapsuleInfo> getMyCapsules(
        @RequestParam Map<String,String> query,
        @RequestHeader(value = HttpHeaders.AUTHORIZATION) String token
    ) {
        String loginId = tokenProvider.getLoginId(token.substring(TOKEN_PREFIX.length()));
        log.info(String.format("Get list by -> %s", loginId));
        return capsuleService.getCapsuleList(loginId, query);
    }

    @GetMapping("/{capsuleId}")
    @PreAuthorize("hasRole('NORMAL')")
    public ResponseEntity<CapsuleInfo> getCapsuleOne(
        @PathVariable @Min(1) Long capsuleId,
        @RequestHeader(value = HttpHeaders.AUTHORIZATION) String token
    ) {
        String loginId = tokenProvider.getLoginId(token.substring(TOKEN_PREFIX.length()));
        var result = capsuleService.getCapsuleInfo(capsuleId,loginId);
        return ResponseEntity.ok(result);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('NORMAL')")
    public ResponseEntity<CreateCapsule.Response> createCapsule(
        @RequestBody CreateCapsule.Request request,
        @RequestHeader(value = HttpHeaders.AUTHORIZATION) String token
    ) {
        String loginId = tokenProvider.getLoginId(token.substring(TOKEN_PREFIX.length()));
        var result = capsuleService.createCapsule(request,loginId);
        return ResponseEntity.status(201).body(result);
    }

    @PutMapping("/modify/{capsuleId}")
    @PreAuthorize("hasRole('NORMAL')")
    public ResponseEntity<UpdateCapsule.Response> updateCapsule(
        @PathVariable Long capsuleId,
        @RequestBody UpdateCapsule.Request request,
        @RequestHeader(value = HttpHeaders.AUTHORIZATION) String token
    ) {
        String loginId  = tokenProvider.getLoginId(token.substring(TOKEN_PREFIX.length()));
        var result = capsuleService.updateCapsule(capsuleId, request, loginId);
        return ResponseEntity.status(200).body(result);
    }
    @PutMapping("/open/{capsuleId}")
    @PreAuthorize("hasRole('NORMAL')")
    public ResponseEntity<CapsuleInfo> openCapsule (
        @PathVariable @Min(1) Long capsuleId,
        @RequestHeader(value = HttpHeaders.AUTHORIZATION) String token
    ) {
        String loginId  = tokenProvider.getLoginId(token.substring(TOKEN_PREFIX.length()));
        var result = capsuleService.openCapsule(capsuleId, loginId);
        return ResponseEntity.status(200).body(result);
    }

    @DeleteMapping("/{capsuleId}")
    @PreAuthorize("hasRole('NORMAL')")
    public ResponseEntity<DeleteCapsule.Response> deleteCapsule(
        @PathVariable @Min(1) Long capsuleId,
        @RequestHeader(value = HttpHeaders.AUTHORIZATION) String token
    ) {
        String loginId  = tokenProvider.getLoginId(token.substring(TOKEN_PREFIX.length()));
        var result = capsuleService.deleteCapsule(capsuleId,loginId);
        return ResponseEntity.status(200).body(result);
    }
}
