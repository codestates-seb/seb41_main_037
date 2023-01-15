package com.lifo.CVSreview.member.mapper;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.dto.request.MemberPatchReqDto;
import com.lifo.CVSreview.member.dto.request.MemberPostReqDto;
import com.lifo.CVSreview.member.dto.response.MemberResDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-11T11:46:04+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostReqDto memberPostReqDto) {
        if ( memberPostReqDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberPostReqDto.getEmail() );
        member.setNickname( memberPostReqDto.getNickname() );
        member.setPassword( memberPostReqDto.getPassword() );
        member.setRole( memberPostReqDto.getRole() );
        member.setImage_name( memberPostReqDto.getImage_name() );
        member.setImage_path( memberPostReqDto.getImage_path() );

        return member;
    }

    @Override
    public MemberResDto MemberToMemberResponse(Member Member) {
        if ( Member == null ) {
            return null;
        }

        MemberResDto memberResDto = new MemberResDto();

        memberResDto.setMemberId( Member.getMemberId() );
        memberResDto.setEmail( Member.getEmail() );
        memberResDto.setNickname( Member.getNickname() );
        memberResDto.setPassword( Member.getPassword() );
        memberResDto.setRole( Member.getRole() );
        memberResDto.setImage_name( Member.getImage_name() );
        memberResDto.setImage_path( Member.getImage_path() );
        memberResDto.setMember_created_at( Member.getMember_created_at() );

        return memberResDto;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchReqDto memberPatchReqDto) {
        if ( memberPatchReqDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatchReqDto.getMemberId() );
        member.setNickname( memberPatchReqDto.getNickname() );
        member.setPassword( memberPatchReqDto.getPassword() );
        member.setRole( memberPatchReqDto.getRole() );
        member.setImage_name( memberPatchReqDto.getImage_name() );
        member.setImage_path( memberPatchReqDto.getImage_path() );

        return member;
    }

    @Override
    public List<MemberResDto> membersToMemberResDto(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberResDto> list = new ArrayList<MemberResDto>( members.size() );
        for ( Member member : members ) {
            list.add( MemberToMemberResponse( member ) );
        }

        return list;
    }
}
