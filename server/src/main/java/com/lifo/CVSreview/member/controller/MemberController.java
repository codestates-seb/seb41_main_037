package com.lifo.CVSreview.member.controller;

import com.lifo.CVSreview.member.dto.response.MemberResDto;
import com.lifo.CVSreview.member.service.MemberService;
import com.lifo.CVSreview.member.Entity.MemberEntity;
import com.lifo.CVSreview.member.dto.request.MemberPatchReqDto;
import com.lifo.CVSreview.member.dto.request.MemberPostReqDto;
import com.lifo.CVSreview.member.mapper.MemberMapper;
import com.lifo.CVSreview.response.MultiResponseDto;
import com.lifo.CVSreview.review.entity.Review;
import org.springframework.data.domain.Page;
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
    public ResponseEntity patchMember(@Valid @PathVariable("member_id") @Positive long memberId,
                                      @RequestBody MemberPatchReqDto memberPatchReqDto){
        MemberEntity memberEntity = memberMapper.memberPatchDtoToMemberEntity(memberPatchReqDto);
        MemberEntity response = memberService.updateMember(memberEntity);

        return new ResponseEntity<>(memberMapper.memberEntityToMemberResponse(response),HttpStatus.OK);

    }

    @GetMapping("/{member_id}")
    public ResponseEntity getMember(@PathVariable("member_id") @Positive long memberId) {
        MemberEntity response = memberService.findMember(memberId);

        return new ResponseEntity<>(memberMapper.memberEntityToMemberResponse(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@RequestParam @Positive int page,
                                     @RequestParam @Positive int size) {
        // Pagination
        Page<MemberEntity> pageMembers = memberService.findMembers(page, size);

        List<MemberEntity> members = pageMembers.getContent();

        List<MemberResDto> response = memberMapper.membersToMemberResDto(members);

        return new ResponseEntity<>(new MultiResponseDto<>(response, pageMembers), HttpStatus.OK);
    }

    @DeleteMapping("/{member_id}")
    public ResponseEntity deleteMember(@PathVariable("member_id")@Positive long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
