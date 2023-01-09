package com.lifo.CVSreview.member.mapper;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.dto.request.MemberPatchReqDto;
import com.lifo.CVSreview.member.dto.request.MemberPostReqDto;
import com.lifo.CVSreview.member.dto.response.MemberResDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostReqDto memberPostReqDto);
    MemberResDto MemberToMemberResponse(Member Member);
    Member memberPatchDtoToMember(MemberPatchReqDto memberPatchReqDto);
    List<MemberResDto> membersToMemberResDto(List<Member> members);
}
