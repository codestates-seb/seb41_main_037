package com.lifo.CVSreview.member.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.favorite.dto.FavoriteResponseDto;
import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.favorite.mapper.FavoriteMapper;
import com.lifo.CVSreview.favorite.service.FavoriteService;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.dto.response.MemberMyPageDto;
import com.lifo.CVSreview.member.mapper.MemberMapper;
import com.lifo.CVSreview.member.repository.MemberRepository;
import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import com.lifo.CVSreview.review.entity.Review;
import com.lifo.CVSreview.review.mapper.ReviewMapper;
import com.lifo.CVSreview.review.service.ReviewService;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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

    public MemberService(MemberRepository memberRepository, MemberMapper memberMapper, @Lazy ReviewService reviewService, @Lazy ReviewMapper reviewMapper, @Lazy FavoriteService favoriteService,
                         @Lazy FavoriteMapper favoriteMapper){
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.reviewService = reviewService;
        this.reviewMapper = reviewMapper;
        this.favoriteService = favoriteService;
        this.favoriteMapper = favoriteMapper;
    }

    public Member createMember(Member Member){
        return memberRepository.save(Member);
    }
    public Member updateMember(Member Member){
        Member findMember = findVerifiedMember(Member.getMemberId());

        Optional.ofNullable(Member.getMemberId())
                .ifPresent(MemberId ->findMember.setMemberId(MemberId));
        Optional.ofNullable(Member.getEmail())
                .ifPresent(email -> findMember.setEmail(email));
        Optional.ofNullable(Member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(Member.getNickname())
                .ifPresent(nickname -> findMember.setNickname(nickname));
        Optional.ofNullable(Member.getImage_name())
                .ifPresent(image_name -> findMember.setImage_name(image_name));
        Optional.ofNullable(Member.getImage_path())
                .ifPresent(image_path -> findMember.setImage_path(image_path));
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
        MemberMyPageDto memberMyPageDto = memberMapper.MemberToMemberMyPageResponse(findMember);
        List<Review> reviews = reviewService.findMyReviews(findMember);
        List<ReviewResponseDto> responses = reviewMapper.reviewsToReviewResponseDtos(reviews);
        List<Favorite> favorite = favoriteService.MemberFavorite(findMember);
        List<FavoriteResponseDto> response = favoriteMapper.favoritesToFavoriteResponseDtos(favorite);
        memberMyPageDto.setFavorites(response);
        memberMyPageDto.setReviews(responses);
        return memberMyPageDto;
    }
//    public MemberResDto findMemberFavorite(Long memberId){
//        Member findMember = findVerifiedMember(memberId);
//        MemberResDto memberResDto = memberMapper.MemberToMemberResponse(findMember);
//        List<Favorite> favorite = favoriteService.MemberFavorite(memberId);
////      List<FavoriteResponseDto> response = favoriteMapper.FavoriteToFavoriteReponseDtos(favorite);
//        memberResDto.setFavorite(response);
//        return memberResDto;
//    }


    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member verifiedMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return verifiedMember;
    }
    public void deleteMember(long memberId){
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }
}
