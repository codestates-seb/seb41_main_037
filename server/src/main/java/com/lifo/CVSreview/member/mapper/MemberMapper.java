package com.lifo.CVSreview.member.mapper;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.dto.request.MemberPatchReqDto;
import com.lifo.CVSreview.member.dto.request.MemberPostReqDto;
import com.lifo.CVSreview.member.dto.response.MemberMyPageDto;
import com.lifo.CVSreview.member.dto.response.MemberResDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostReqDto memberPostReqDto);
    MemberResDto MemberToMemberResponse(Member member);
    default MemberMyPageDto MemberToMemberMyPageResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberMyPageDto memberMyPageDto = new MemberMyPageDto();

        memberMyPageDto.setMemberId( member.getMemberId() );
        memberMyPageDto.setNickname( member.getNickname() );
        memberMyPageDto.setEmail(member.getEmail());
        memberMyPageDto.setRoles( member.getRoles() );
        memberMyPageDto.setImage_name( member.getImage_name() );
        memberMyPageDto.setImage_path( member.getImage_path() );

        return memberMyPageDto;
    }

    default Member memberPatchDtoToMember(MemberPatchReqDto memberPatchReqDto) {
        if ( memberPatchReqDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatchReqDto.getMemberId() );
        member.setNickname( memberPatchReqDto.getNickname() );
        member.setPassword( memberPatchReqDto.getPassword() );
        member.setImage_name( member.getImage_name() );
        member.setImage_path( member.getImage_path() );

        return member;
    }

    List<MemberResDto> membersToMemberResDto(List<Member> members);
}
