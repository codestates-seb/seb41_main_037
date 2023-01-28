package com.lifo.CVSreview.File;

import java.util.ArrayList;
import java.util.List;

import com.lifo.CVSreview.auth.utils.SecurityUtil;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@RestController
public class FileController {

    private String S3Bucket = "main-037-deploy";
    @Autowired
    AmazonS3Client amazonS3Client;

    final private MemberRepository memberRepository;

    public FileController(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @GetMapping("/upload")
    public ResponseEntity<Object> upload(MultipartFile[] multipartFileList) throws Exception {
        List<String> imagePathList = new ArrayList<>();

        for(MultipartFile multipartFile: multipartFileList) {
            String originalName = multipartFile.getOriginalFilename(); // 파일 이름
            long size = multipartFile.getSize(); // 파일 크기

            ObjectMetadata objectMetaData = new ObjectMetadata();
            objectMetaData.setContentType(multipartFile.getContentType());
            objectMetaData.setContentLength(size);

            // S3에 업로드
            amazonS3Client.putObject(
                    new PutObjectRequest(S3Bucket, originalName, multipartFile.getInputStream(), objectMetaData)
                            .withCannedAcl(CannedAccessControlList.PublicRead)
            );

            String imagePath = amazonS3Client.getUrl(S3Bucket, originalName).toString(); // 접근가능한 URL 가져오기
            imagePathList.add(imagePath);
            Member member = memberRepository.findByEmail(SecurityUtil.getCurrentMemberId()).get();
            member.setImage_path(imagePath);
            memberRepository.save(member);
        }





        return new ResponseEntity<Object>(imagePathList, HttpStatus.OK);
    }
}
