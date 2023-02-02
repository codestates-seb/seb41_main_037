import React from "react";
import styled from "styled-components";

const PaginationButton = styled.div`
  a {
    height: 30px;
    padding: 2px 8px;
    background-color: #7a7979;
    border-radius: 3px;
    color: #fff;
    margin-right: 4px;

    span {
      font-size: 13px;
    }

    &:hover {
      background-color: #383838;
      transition: 0.2s;
      color: #fff;
    }
    .test {
      background-color: transparent;
    }
  }

  .active {
    background-color: #383838;
    box-shadow: 1px 1px 2px #7a7979;
    color: #fff;
  }
`;

interface Props {
  page: number;
  totalPages: number;
}

const AdminReviewsPagination = ({ page, totalPages }: Props) => {
  const search = window.location.search;

  const arrayTotalPages = [];
  for (let i = 1; i <= totalPages; ++i) {
    arrayTotalPages.push(i);
  }

  return (
    <PaginationButton>
      <a
        href={
          page === 1
            ? `/admin/comment/delete?page=1`
            : `/admin/comment/delete?page=${page - 1}`
        }
      >
        <span>이전</span>
      </a>
      {arrayTotalPages.map((el, idx) => {
        return (
          <a
            key={idx}
            href={`/admin/comment/delete?page=${el}`}
            className={search === `?page=${el}` ? "active" : ""}
          >
            <span>{el}</span>
          </a>
        );
      })}
      <a
        className="test"
        href={
          page === arrayTotalPages[arrayTotalPages.length - 1]
            ? `/admin/comment/delete?page=${
                arrayTotalPages[arrayTotalPages.length - 1]
              }`
            : `/admin/comment/delete?page=${page + 1}`
        }
      >
        <span>다음</span>
      </a>
    </PaginationButton>
  );
};

export default AdminReviewsPagination;
