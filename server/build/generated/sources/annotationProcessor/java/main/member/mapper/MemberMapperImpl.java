package member.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import member.Entity.MemberEntity;
import member.dto.request.MemberPatchReqDto;
import member.dto.request.MemberPostReqDto;
import member.dto.response.MemberResDto;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-06T13:50:00+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.jar, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public MemberEntity memberPostDtoToMember(MemberPostReqDto memberPostReqDto) {
        if ( memberPostReqDto == null ) {
            return null;
        }

        MemberEntity memberEntity = new MemberEntity();

        memberEntity.setEmail( memberPostReqDto.getEmail() );
        memberEntity.setNickname( memberPostReqDto.getNickname() );
        memberEntity.setPassword( memberPostReqDto.getPassword() );

        return memberEntity;
    }

    @Override
    public MemberResDto memberEntityToMemberResponse(MemberEntity memberEntity) {
        if ( memberEntity == null ) {
            return null;
        }

        MemberResDto memberResDto = new MemberResDto();

        memberResDto.setMember_id( memberEntity.getMember_id() );
        memberResDto.setEmail( memberEntity.getEmail() );
        memberResDto.setNickname( memberEntity.getNickname() );
        memberResDto.setPassword( memberEntity.getPassword() );
        memberResDto.setDescription( memberEntity.getDescription() );
        memberResDto.setMember_created_at( memberEntity.getMember_created_at() );

        return memberResDto;
    }

    @Override
    public List<MemberResDto> memberToMemberResDto(List<MemberEntity> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberResDto> list = new ArrayList<MemberResDto>( members.size() );
        for ( MemberEntity memberEntity : members ) {
            list.add( memberEntityToMemberResponse( memberEntity ) );
        }

        return list;
    }

    @Override
    public MemberEntity memberPatchDtoToMemberEntity(MemberPatchReqDto memberPatchReqDto) {
        if ( memberPatchReqDto == null ) {
            return null;
        }

        MemberEntity memberEntity = new MemberEntity();

        memberEntity.setMember_id( memberPatchReqDto.getMember_id() );
        memberEntity.setEmail( memberPatchReqDto.getEmail() );
        memberEntity.setNickname( memberPatchReqDto.getNickname() );
        memberEntity.setPassword( memberPatchReqDto.getPassword() );

        return memberEntity;
    }
}
