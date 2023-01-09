package com.lifo.CVSreview.member.mapper;

import com.lifo.CVSreview.member.Entity.MemberEntity;
import com.lifo.CVSreview.member.dto.request.MemberPatchReqDto;
import com.lifo.CVSreview.member.dto.request.MemberPostReqDto;
import com.lifo.CVSreview.member.dto.response.MemberResDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberEntity memberPostDtoToMember(MemberPostReqDto memberPostReqDto);
    MemberResDto memberEntityToMemberResponse(MemberEntity memberEntity);
    MemberEntity memberPatchDtoToMemberEntity(MemberPatchReqDto memberPatchReqDto);
    List<MemberResDto> membersToMemberResDto(List<MemberEntity> members);
}
