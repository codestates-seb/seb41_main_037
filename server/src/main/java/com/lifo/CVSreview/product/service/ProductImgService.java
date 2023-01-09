package com.lifo.CVSreview.product.service;

import com.lifo.CVSreview.product.entity.ProductImg;
import com.lifo.CVSreview.product.repository.ProductImgRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductImgService {

    @Value("${productImgLocation}") //1 @Value 어노테이션을 통해 application.properties 파일에 등록한 productImgLocation 값을 불러와서 productImgLocation 변수에 넣어 준다.
    private String productImgLocation;

    private final ProductImgRepository productImgRepository;

    private final FileService fileService;

    public void saveProductImg(ProductImg productImg, MultipartFile productImgFile) throws Exception {
        String oriImgName = productImgFile.getOriginalFilename();
        String imgName = "";
        String imgUrl = "";

        // 파일 업로드
        if (!StringUtils.isEmpty(oriImgName)) {
            imgName = fileService.uploadFile(productImgLocation, oriImgName, productImgFile.getBytes());
            //2 사용자가 상품의 이미지를 등록했다면 저장할 경로와 파일의 이름, 파일의 바이트 배열을 파일 업로드 파라미터로 uploadFile 메소드를 호출한다.
            //  호출 결과 로컬에 저장된 파일의 이름을 imgName 변수에 저장한다.
            imgUrl = "/images/product" + imgName;
            /*
             * 3 저장된 상품 이미지를 불러올 경로를 설정한다. 외부 리소스를 불러오는 urlPattern로 WebMvcConfig 클래스에서 "/images/**"를 설정해주었다.
             *               또한 application.properties에서 설정한 uploadPath 프로퍼티 경로인 "C:/convenient/" 아래 product 폴더에 이미지를 저장하므로 상품 이미지를
             *               불러오는 경로로 "/images/product/"를 붙여준다.
             */

        }

        // 상품 이미지 정보 저장
        productImg.updateProductImg(oriImgName, imgName, imgUrl);   //4
        productImgRepository.save(productImg);  //5
        // 4, 5 입력받은 상품 이미지 정보를 저장한다.
// imgName : 실제 로컬에 저장된 상품 이미지 파일의 이름  /oriImgName : 업로드했던 상품 이미지 파일의 원래 이름 / imgUrl : 업로드 결과 로컬에 저장된 상품 이미지 파일을 불러오는 경로
    }

        public void updateProductImg(Long productImgId, MultipartFile productImgFile) throws Exception{
            if(!productImgFile.isEmpty()) { //1 상품 이미지를 수정한 경우 상품 이미지를 업데이트 한다.
                ProductImg savedProductImg = productImgRepository.findById(productImgId) //2 상품 이미지 아이디를 이용하여 기존에 저장했던 상품 이미지 엔티티를 조회
                        .orElseThrow(EntityNotFoundException::new);
            if(!StringUtils.isEmpty(savedProductImg.getImgName())) { //3 기존에 등록된 상품 이미지 파일
                fileService.deleteFile(productImgLocation + "/" + savedProductImg.getImgName());
            }

            String oriImgName = productImgFile.getOriginalFilename();
            String imgName = fileService.uploadFile(productImgLocation, oriImgName, productImgFile.getBytes()); //4 업데이트한 상품 이미지 파일을 업로드한다.
            String imgUrl = "/images/item/" + imgName;
            savedProductImg.updateProductImg(oriImgName, imgName, imgUrl);
         }//5 변경된 상품 이미지 정보를 세팅. 상품 등록 때처럼 itemImgRepository.save() 로직 호출 안함, savedItemImg 엔티티는 영속 상태이므로 데이터 변경만으로 변경 감지


    }
}


