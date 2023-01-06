package member.controller;

import member.Entity.MemberEntity;
import member.dto.request.MemberPatchReqDto;
import member.dto.request.MemberPostReqDto;
import member.mapper.MemberMapper;
import member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Controller
@RestController
@RequestMapping("v1/members")
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper){
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostReqDto memberPostReqDto){
        MemberEntity memberEntity = memberMapper.memberPostDtoToMember(memberPostReqDto);
        MemberEntity response = memberService.createMember(memberEntity);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @PatchMapping("/{member_id}")
    public ResponseEntity patchMember(@Valid @PathVariable("member_id") @Positive long member_id,
                                      @RequestBody MemberPatchReqDto memberPatchReqDto){
        MemberEntity memberEntity = memberMapper.memberPatchDtoToMemberEntity(memberPatchReqDto);
        MemberEntity response = memberService.updateMember(memberEntity);

        return new ResponseEntity<>(memberMapper.memberEntityToMemberResponse(response),HttpStatus.OK);

    }

    @GetMapping("/{member_id}")
    public ResponseEntity getMember(@PathVariable("member_id") @Positive long member_id) {
        MemberEntity response = memberService.findMember(member_id);

        return new ResponseEntity<>(memberMapper.memberEntityToMemberResponse(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(){
        List<MemberEntity> members = memberService.findMembers();
        return new ResponseEntity<>(memberMapper.memberToMemberResDto(members),HttpStatus.OK);
    }

    @DeleteMapping("/{member_id}")
    public ResponseEntity deleteMember(@PathVariable("member_id")@Positive long member_id) {
        memberService.deleteMember(member_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
