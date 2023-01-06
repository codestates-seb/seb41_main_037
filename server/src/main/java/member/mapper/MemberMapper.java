package member.mapper;

import member.Entity.MemberEntity;
import member.dto.request.MemberPatchReqDto;
import member.dto.request.MemberPostReqDto;
import member.dto.response.MemberResDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberEntity memberPostDtoToMember(MemberPostReqDto memberPostReqDto);
    MemberResDto memberEntityToMemberResponse(MemberEntity memberEntity);
    List<MemberResDto> memberToMemberResDto(List<MemberEntity> members);
    MemberEntity memberPatchDtoToMemberEntity(MemberPatchReqDto memberPatchReqDto);
}
