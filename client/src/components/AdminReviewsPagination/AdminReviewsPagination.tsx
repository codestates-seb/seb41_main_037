import React from "react";
import styled from "styled-components";

const PaginationButton = styled.div`
  /* padding-left: 24px; */
  /* margin: 20px 0; */
  /* display: flex; */

  a {
    height: 30px;
    padding: 2px 8px;
    background-color: #7a7979;
    /* border: 1px solid #d6d9dc; */
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
            ? `/admin/comment/delete`
            : `/admin/comment/delete?page=${page - 1}`
        }
      >
        <span>Prev</span>
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
        href={
          page === arrayTotalPages[arrayTotalPages.length - 1]
            ? `/admin/comment/delete?page=${
                arrayTotalPages[arrayTotalPages.length - 1]
              }`
            : `/admin/comment/delete?page=${page + 1}`
        }
      >
        <span>Next</span>
      </a>
    </PaginationButton>
  );
};

export default AdminReviewsPagination;
