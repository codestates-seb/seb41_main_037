package com.lifo.CVSreview.member.service;

//import com.lifo.CVSreview.auth.utils.CustomAuthorityUtils;

import com.lifo.CVSreview.auth.utils.CustomAuthorityUtils;
import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.favorite.dto.FavoriteResponseDto;
import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.favorite.mapper.FavoriteMapper;
import com.lifo.CVSreview.favorite.service.FavoriteService;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.dto.response.MemberMyPageDto;
import com.lifo.CVSreview.member.repository.mapper.MemberMapper;
import com.lifo.CVSreview.member.repository.MemberRepository;
import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import com.lifo.CVSreview.review.entity.Review;
import com.lifo.CVSreview.review.mapper.ReviewMapper;
import com.lifo.CVSreview.review.service.ReviewService;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    private final ReviewService reviewService;
    private final ReviewMapper reviewMapper;

    private final FavoriteService favoriteService;
    private final FavoriteMapper favoriteMapper;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, MemberMapper memberMapper, @Lazy ReviewService reviewService, @Lazy ReviewMapper reviewMapper, @Lazy FavoriteService favoriteService,
                         @Lazy FavoriteMapper favoriteMapper, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils){
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.reviewService = reviewService;
        this.reviewMapper = reviewMapper;
        this.favoriteService = favoriteService;
        this.favoriteMapper = favoriteMapper;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member){
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);
        return memberRepository.save(member);
    }
    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());

        if(getLoginMember().getMemberId() != findMember.getMemberId())
            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(member.getPassword()));
        Optional.ofNullable(member.getNickname())
                .ifPresent(nickname -> findMember.setNickname(member.getNickname()));
        Optional.ofNullable(member.getImage_name())
                .ifPresent(image_name -> findMember.setImage_name(member.getImage_name()));
        Optional.ofNullable(member.getImage_path())
                .ifPresent(image_path -> findMember.setImage_path(member.getImage_path()));
        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberId").descending()));
    }

    public MemberMyPageDto findMemberMyPage(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        if(getLoginMember().getMemberId() != findMember.getMemberId())
            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);

        MemberMyPageDto memberMyPageDto = memberMapper.MemberToMemberMyPageResponse(findMember);
        List<Review> reviews = reviewService.findMyReviews(findMember);
        List<ReviewResponseDto> responses = reviewMapper.reviewsToReviewResponseDtos(reviews);
        List<Favorite> favorite = favoriteService.MemberFavorite(findMember);
        List<FavoriteResponseDto> response = favoriteMapper.favoritesToFavoriteResponseDtos(favorite);
        memberMyPageDto.setFavorites(response);
        memberMyPageDto.setReviews(responses);
        return memberMyPageDto;
    }


    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member verifiedMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return verifiedMember;
    }
    public void deleteMember(long memberId){
        Member findMember = findVerifiedMember(memberId);
        if(getLoginMember().getMemberId() != findMember.getMemberId())
            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);
        memberRepository.delete(findMember);
    }
    public Member getLoginMember() { // 로그인된 유저 가져오기
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication == null || authentication.getName() == null)
            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);

        Optional<Member> optionalMember = memberRepository.findByEmail(authentication.getName());
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return member;
    }

}
