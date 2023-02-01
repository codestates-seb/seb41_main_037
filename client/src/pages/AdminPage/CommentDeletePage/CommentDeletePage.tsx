import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeHeader from "../../../components/AdminHeader/AdminHeader";
import AdminNav from "../../../components/AdminNav/AdminNav";
import { BsTrashFill } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import useFetch from "../../../api/useFetch";
import axios from "axios";
import AdminReviewsPagination from "../../../components/AdminReviewsPagination/AdminReviewsPagination";
import { useNavigate, useSearchParams } from "react-router-dom";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const CommentDeletePageMain = styled.main`
  font-family: "Do Hyeon", sans-serif;
  margin: 122px 0 0 100px;
  .commentTitle {
    display: flex;
    justify-content: flex-start;
    font-size: 24px;
    margin-bottom: 1rem;
  }
  .searchBarSection {
    display: flex;
    align-items: center;
    width: 700px;
    height: 40px;
    margin-bottom: 1rem;
    color: #383838;
    background-color: #f5f5f5;
    box-shadow: 3px 3px 3px #979595;
    border-radius: 30px;
    padding: 0.5rem 1rem 0.5rem 1.5rem;
    &:focus-within {
      box-shadow: 3px 3px 3px #7a7979;
    }
    input {
      display: flex;
      font-family: "Do Hyeon", sans-serif;
      width: 635px;
      height: 30px;
      font-size: 15px;
      background-color: #f5f5f5;
      border: none;
      &::placeholder {
        color: #979595;
      }
      &:focus-within {
        outline: none !important;
      }
    }
    .search.icon {
      display: flex;
      color: #58419c;
    }
  }
  .commentSection {
    width: 700px;
    max-height: 600px;
    border-radius: 5px;
    background-color: #d9d9d9;
    padding: 0.5rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: #f5f5f5;
    }
    .comment {
      display: flex;
      border-radius: 3px;
      align-items: center;
      margin: 1rem;
      padding: 0.5rem;
      justify-content: space-between;
      background-color: #f5f5f5;
      box-shadow: inset 1px 1px 2px #7a7979;
      .memberId {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 50px;
        max-height: 20px;
        border-radius: 5px;
        font-size: 15px;
        color: #fff;
        padding: 0.5rem;
        background-color: #7a7979;
        width: 10%;
        box-shadow: 1px 1px 1px #222222;
      }
      .content {
        display: flex;
        flex-direction: column;
        width: 85%;
        p:nth-child(1) {
          font-size: 15px;
          line-height: 20px;
          width: 85%;
        }
        p:nth-child(2) {
          color: #7a7979;
          font-size: 13px;
        }
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
        width: 20px;
        height: 20px;
        background-color: #7a7979;
        color: #fff;
        border-radius: 30px;
        &:hover {
          transform: rotate(20deg);
          transition: 0.2s;
          background-color: #383838;
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const CommentDeletePage = () => {
  const navigate = useNavigate();

  const { data } = useFetch("/reviews?page=1&size=100");
  const [reviews, setReviews] = useState<any>(null);
  const [review, setReview] = useState("");

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const pageNum = searchParams.get("page");
    // console.log(pageNum);
    if (data) {
      // console.log(data.pageInfo);
      if (pageNum) {
        axios
          .get(`http://43.201.135.238:8080/reviews?page=${pageNum}&size=8`)
          .then((res) => {
            setReviews(res.data.data);
            setPage(res.data.pageInfo.page);
            setTotalPages(res.data.pageInfo.totalPages);
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .get(`http://43.201.135.238:8080/reviews?page=1&size=8`)
          .then((res) => {
            setReviews(res.data.data);
            setPage(res.data.pageInfo.page);
            setTotalPages(res.data.pageInfo.totalPages);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [data, searchParams]);

  const handleDelete = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      if (reviews) {
        axios
          .delete(`http://43.201.135.238:8080/admin/reviews/${id}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .catch((err) => alert("리뷰 삭제에 실패했습니다"));
        setReviews(reviews.filter((review: any) => review.reviewId !== id));
      }
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  const handleReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  const handleSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      axios
        .get(`http://43.201.135.238:8080/reviews/search/?search=${review}`)
        .then((res) => setReviews(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <HomeHeader />
      <Main>
        <AdminNav />
        <CommentDeletePageMain>
          <section className="commentTitle">
            <h2>리뷰삭제</h2>
          </section>
          <section className="searchBarSection">
            <input
              type="text"
              placeholder="검색어를 입력하세요. (전체 목록 보기: 검색창 비운 뒤 Enter)"
              value={review}
              onChange={handleReview}
              onKeyUp={handleSearchKeyUp}
            />
            <FcSearch className="search icon" size={25} />
          </section>
          <section className="commentSection">
            {reviews &&
              reviews.map((comment: any) => (
                <section className="comment" key={comment.reviewId}>
                  <p className="memberId">id: {comment.memberId}</p>
                  <section className="content">
                    <p>{comment.content}</p>
                    <p>{comment.createdAt}</p>
                  </section>
                  <div className="icon">
                    <BsTrashFill
                      size={12}
                      onClick={() => handleDelete(comment.reviewId)}
                    />
                  </div>
                </section>
              ))}
          </section>
          <section className="pagination">
            <AdminReviewsPagination page={page} totalPages={totalPages} />
          </section>
        </CommentDeletePageMain>
      </Main>
    </>
  );
};

export default CommentDeletePage;
