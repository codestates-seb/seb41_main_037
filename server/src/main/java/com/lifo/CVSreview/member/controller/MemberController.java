package com.lifo.CVSreview.member.controller;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.dto.request.MemberPatchReqDto;
import com.lifo.CVSreview.member.dto.request.MemberPostReqDto;
import com.lifo.CVSreview.member.mapper.MemberMapper;
import com.lifo.CVSreview.member.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Controller
@RestController
@RequestMapping("members")
@Validated
@Api(tags ={"member Api"})
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper){
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @ApiOperation(value = "회원가입")
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostReqDto memberPostReqDto){
        Member Member = memberMapper.memberPostDtoToMember(memberPostReqDto);
        Member response = memberService.createMember(Member);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @ApiOperation(value = "회원정보 수정")
    @PatchMapping("/{member_id}")
    public ResponseEntity patchMember(@Valid @PathVariable("member_id") @Positive long memberId,
                                      @RequestBody MemberPatchReqDto memberPatchReqDto){
        Member Member = memberMapper.memberPatchDtoToMember(memberPatchReqDto);
        Member response = memberService.updateMember(Member);

        return new ResponseEntity<>(memberMapper.MemberToMemberResponse(response),HttpStatus.OK);

    }

//    @GetMapping("/{member_id}")
//    public ResponseEntity getMember(@PathVariable("member_id") @Positive long memberId) {
//        Member response = memberService.findMember(memberId);
//
//        return new ResponseEntity<>(memberMapper.MemberToMemberResponse(response), HttpStatus.OK);
//    }

    @ApiOperation(value = "my page 리뷰, 찜목록")
    @GetMapping("/{member_id}") // MyPage 내가 작성한 리뷰목록
    public ResponseEntity getMemberReviews(@PathVariable("member_id")@Positive long memberId){
        return new ResponseEntity<>(memberService.findMemberMyPage(memberId),HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getMembers(@RequestParam @Positive int page,
//                                     @RequestParam @Positive int size) {
//        // Pagination
//        Page<Member> pageMembers = memberService.findMembers(page-1, size);
//
//        List<Member> members = pageMembers.getContent();
//
//        List<MemberResDto> response = memberMapper.membersToMemberResDto(members);
//
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(memberMapper.membersToMemberResDto(members), pageMembers),
//                HttpStatus.OK);
//    }
//
    @DeleteMapping("/{member_id}")
    public ResponseEntity deleteMember(@PathVariable("member_id")@Positive long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
