# CVS Review WEB Service

---

- 서비스 설명 : 편의점 PB상품 추천 및 리뷰 확인 플랫폼
- 프로젝트 기간 : 2023.01.03 ~ 2023.02.03(4주)
- 팀명 : LIFO(LastInFirstOut)
    - LIFO는 후입 선출의 뜻으로, 마지막으로 팀이 결성되었지만, 1등으로 수료하겠다는 포부를 담았습니다.
    - 백엔드 : 강예은, 전인종, 박영한
    - 프론트엔드 : 장예은, 이유진, 한지연

### 깃허브

[GitHub - codestates-seb/seb41_main_037](https://github.com/codestates-seb/seb41_main_037)

### 배포링크

[CVS Review](http://main-037-deploy.s3-website.ap-northeast-2.amazonaws.com/)

| test ID | test3@gmail.com |
| --- | --- |
| test Password | test1234! |
| admin ID | admin@gmail.com |
| admin Password | 777nnn@@ |

### 기술영상

[41기 Team037 개인기술발표영상](https://youtu.be/c6GXonl9bFY)

[https://www.youtube.com/watch?v=c6GXonl9bFY](https://www.youtube.com/watch?v=c6GXonl9bFY)

# **🌐** 서비스 소개

---

- 편의점의 모든 PB 상품을 하나의 웹에서 찾아볼 수 있는 서비스를 제공하여 쉽고 빠르게 확인이 가능합니다.
- 편의점 PB 상품에 대한 솔직한 리뷰를 남기고, 별점 기능을 통해 제품을 추천하며 개인의 의견을 공유할 수 있습니다.
- 추천 기능을 통해 베스트 상품을 메인에 구성하여 이용자가 인기 상품을 빠르게 캐칭할 수 있도록 소개하였습니다.
- 찜 기능을 제공하여 내가 원하는 상품을 하나의 페이지에서 보고 관리할 수 있도록 구현하였습니다.
- 지도를 통해 가까운 편의점 위치를 확인하여 빠른 접근이 가능하도록 만들었습니다.
- 관리자모드를 통해 새로 출시된 PB상품의 업데이트와 상품 수정, 삭제 및 남을 비방하는 글이나 욕설을 막기 위해 리뷰 삭제가 가능하도록 만들었습니다.

# 💡 기획 의도

---

- 모든 편의점에서 PB 상품을 판매중이고 각 편의점 브랜드만의 고유한 상품들을 확인할 수 있는 방법이 필요했습니다. 인기가 있는 PB 상품은 커뮤니티나 SNS 상에서 화제가 되어 재입고가 일어나기도 합니다. 이런 상품들을 한 곳에서 모아보고 인기 상품을 소개하며, 정보를 공유할 수 있는 공간을 만들기 위해 서비스를 기획하였습니다.
    - Ex) GS25 - 버터맥주, 원소주 / CU - 연세황치즈크림빵, 순후추콘 등
- 현재 가장 많은 점포와 이용자 수를 보이는 주요 3사 편의점 홈페이지에 들어가면 PB 상품 섹션 메뉴가 있습니다. PB 상품을 자사의 차별화 상품으로 소개하고 있지만 모든 상품에 대한 정보를 제공하지 않았고 충분한 업데이트가 이루어지지 않고 있었습니다. 저희가 기획한 서비스를 통해 브랜드에서 활발한 업데이트를 제공하고 상품에 대한 다양한 정보를 제공하기를 기대한 측면도 있습니다.

# 📍 기획 목표

---

**CRUD를 기반으로 아래와 같은 기능 구현을 목표로 하였습니다.**

- 회원 가입
- JWT 로그인
- 아이템 조회
- 별점 리뷰 조회 / 작성 / 수정 / 삭제
- 마이페이지 회원정보 조회, 수정, 삭제
- 마이페이지 내가 쓴 리뷰 조회
- 관리자페이지 상품 등록 / 수정 / 삭제, 리뷰 삭제
- 카카오맵 API 사용
- AWS 배포
- 페이지네이션
- 무한스크롤

# 🔑 서비스 기능

---

- 인증
    - 회원가입, 로그인, 로그아웃 등 사용자 인증에 해당하는 기능을 제공합니다.
- 상품정보 및 리뷰 CRUD
    - 상품 정보 작성, 수정, 삭제 및 댓글 작성, 수정, 삭제 등 CRUD 기능을 제공합니다.
    - 상품 정보, 리뷰에 대한 검색 기능을 제공합니다.
- 회원 정보
    - 사용자에 대한 정보를 수정, 삭제하는 기능을 제공합니다.
    - 사용자가 작성한 게시글과 댓글을 사용자 정보 페이지에서 확인 가능합니다.
- 관리자 권한
    - 관리자 권한으로 사용자가 작성한 정보를 수정, 삭제하는 기능을 제공합니다.
    

# 🔎 서비스 시연영상

---

<aside>
⚠️  gif 로딩까지 시간이 소요됩니다. 잠시만 기다려주시면 시연영상을 보실 수 있습니다!

</aside>

### 🎬 전체 영상

[1.mov](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/1.mov)

### 📌 홈 화면

![ezgif.com-gif-maker.gif](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/ezgif.com-gif-maker.gif)

### 📌 메인 페이지

![ezgif.com-gif-maker.gif](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/ezgif.com-gif-maker%201.gif)

### 📌 상세 페이지

![ezgif.com-gif-maker.gif](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/ezgif.com-gif-maker%202.gif)

### 📌 마이 페이지

![ezgif.com-gif-maker.gif](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/ezgif.com-gif-maker%203.gif)

### 📌 관리자 페이지

**(CommnetDeletePage, ItemCreatePage, ItemSearchPage, ItemUpdatePage)**

![ezgif.com-gif-maker.gif](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/ezgif.com-gif-maker%204.gif)

### 📌 로그인 페이지

![ezgif.com-gif-maker.gif](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/ezgif.com-gif-maker%205.gif)

### 📌 회원가입 페이지

![ezgif.com-gif-maker.gif](CVS%20Review%20WEB%20Service%20140c3ee031984405b632823d72ae3417/ezgif.com-gif-maker%206.gif)

# 😀 팀원 구성

---

> **Back-End**
> 

### 강예은

[AAmorning - Overview](https://github.com/AAmorning)

- Product Api, 제품
- 검색 및 정렬

### 전인종

[jnjongjeon - Overview](https://github.com/jnjongjeon)

- Review Api
- Favorite Api
- 서버 배포

### 박영한

[qkrdudgks - Overview](https://github.com/qkrdudgks)

- Member Api
- 로그인 기능
- 회원가입 기능

---

> **Front-end**
> 

### 장예은

[jjangyeunii - Overview](https://github.com/jjangyeunii)

- 홈 화면 퍼블리싱 및 기능 구현
- 로그인/회원가입 화면 퍼블리싱 및 기능 구현
- 관리자 화면 퍼블리싱 및 기능 구현

### 한지연

[gkswldus - Overview](https://github.com/gkswldus)

- 메인 페이지 퍼블리싱 및 기능 구현
- 상세 페이지 퍼블리싱 및 기능 구현

### 이유진

[userNameYujin - Overview](https://github.com/userNameYujin)

- 문서작성(피그마, 플로우 차트 등)
- 상세페이지 퍼블리싱

# **🧰** 기술 스택

---

### Back-end

[https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white](https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white)

[https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white](https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)

[https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white](https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)

[https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

[https://img.shields.io/badge/AMAZONEC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white](https://img.shields.io/badge/AMAZONEC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)

[https://img.shields.io/badge/AmazonRDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white](https://img.shields.io/badge/AmazonRDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white)

### Front-end

[https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

[https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white)

[https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)

[https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

[https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

[https://img.shields.io/badge/recoil-F26B00?style=for-the-badge&logo=recoil&logoColor=white](https://img.shields.io/badge/recoil-F26B00?style=for-the-badge&logo=recoil&logoColor=white)

[https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

[https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white](https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)

### Collaboration Tools

[https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

[https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)

[https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)

[https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)

[https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)

# 📄 문서

---

### [사용자 요구사항 정의서](https://www.notion.so/722fa463f97a488bbf2bd8c1cf44193b)

### [User flow](https://www.figma.com/file/UrHiU5ecoKzON3Aysd8DE4/main-project-37%EC%A1%B0-(User-Flow)?t=nc3pHj3s5LTB7iZV-0)

### [화면 정의서](https://www.notion.so/386552f0ad1e40c7aaca651c6839d664)

[main project 37조](https://docs.google.com/spreadsheets/d/1n9VTIk_2t2yS7WlKVo4IkWiAfCURh7xVPhPliNOCAIU/edit#gid=0)

[main-project-37조 (User-Flow)](https://www.figma.com/file/UrHiU5ecoKzON3Aysd8DE4/main-project-37%EC%A1%B0-(User-Flow)?t=nc3pHj3s5LTB7iZV-0)

[화면 정의서](https://www.figma.com/file/OoZIcLrukyXe7944tM2X0F/%ED%99%94%EB%A9%B4-%EC%A0%95%EC%9D%98%EC%84%9C?node-id=0%3A1)

### [테이블 명세서 + ERD](https://www.erdcloud.com/)

### [API 명세서](http://43.201.135.238:8080/swagger-ui.html#)

### [프로젝트 메뉴얼](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7356bc4c-bc7f-4092-b6b5-19c5f554864a/41%EA%B8%B0-Team-037-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A9%94%EB%89%B4%EC%96%BC.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230201T030737Z&X-Amz-Expires=86400&X-Amz-Signature=d9aafbdc0655cec027b96831845fac6943dfeaaa294ea7130307c7864e0a8b58&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%2241%25EA%25B8%25B0-Team-037-%25ED%2594%2584%25EB%25A1%259C%25EC%25A0%259D%25ED%258A%25B8%25EB%25A9%2594%25EB%2589%25B4%25EC%2596%25BC.pdf%22&x-id=GetObject)

[ERD Sample - My Contacts](https://www.youtube.com/watch?v=jXu8zwEiVCw&t=243s)

[Swagger UI](http://43.201.135.238:8080/swagger-ui.html#)

[](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7356bc4c-bc7f-4092-b6b5-19c5f554864a/41%EA%B8%B0-Team-037-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A9%94%EB%89%B4%EC%96%BC.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230202T031502Z&X-Amz-Expires=86400&X-Amz-Signature=81264191d5b5560d335306039e9a7e81b01d9139a96fbcb65cb59d701d94b7cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%2241%25EA%25B8%25B0-Team-037-%25ED%2594%2584%25EB%25A1%259C%25EC%25A0%259D%25ED%258A%25B8%25EB%25A9%2594%25EB%2589%25B4%25EC%2596%25BC.pdf%22&x-id=GetObject)

# **✏️ 커밋 컨벤션**

---

| 태그 | 설명 |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정, 오타 수정 |
| add | 기존 작업에 추가 |
| design | css 디자인 변경 |
| rename | 파일, 폴더명 수정 |
| remove | 파일, 코드 삭제 |
| update | 정상 작동 코드 보완 |
| simplify | 코드 단순화 |
| docs | 문서 수정 |
| style | 코드 스타일, 포맷 |
| test | 테스트 코드 수정 |
| build | 빌드 관련 설정 수정 |
| deploy | 배포 관련 설정 수정 |
| etc | 그 외 수정 |
