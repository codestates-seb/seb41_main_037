package member.service;

import member.Entity.MemberEntity;
import member.repository.MemberRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }

    public MemberEntity createMember(MemberEntity memberEntity){
        return memberRepository.save(memberEntity);
    }
    public MemberEntity updateMember(MemberEntity memberEntity){
        MemberEntity findMember = findVerifiedMember(memberEntity.getMember_id());

        Optional.ofNullable(memberEntity.getMember_id())
                .ifPresent(member_id ->findMember.setMember_id(member_id));
        Optional.ofNullable(memberEntity.getEmail())
                .ifPresent(email -> findMember.setEmail(email));
        Optional.ofNullable(memberEntity.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(memberEntity.getNickname())
                .ifPresent(nickname -> findMember.setNickname(nickname));
        return memberRepository.save(findMember);
    }

    public MemberEntity findMember(Long member_id) {
        return findVerifiedMember(member_id);
    }

    public List<MemberEntity> findMembers(){
        return memberRepository.findAll();
    }

    public MemberEntity findVerifiedMember(Long member_id) {
        Optional<MemberEntity> optionalMember = memberRepository.findById(member_id);
        MemberEntity verifiedMember = optionalMember.orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No members found."));
        return verifiedMember;
    }
    public void deleteMember(long member_id){
        MemberEntity findMember = findVerifiedMember(member_id);
        memberRepository.delete(findMember);
    }
}
