import React from "react";
import styled from "styled-components";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const PageButton = styled.div`
  display: flex;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    padding: 2px 8px;
    color: #58419c;
    margin-right: 4px;
    font-family: "Do Hyeon", sans-serif;

    span {
      width: 100%;
      font-size: 15px;
    }
  }

  .active {
    border-radius: 15px;
    background-color: #58419c;
    color: white;
  }
`;

interface Props {
  page: number;
  totalPages: number;
}

const Pagination = ({ page, totalPages }: Props) => {
  const search = window.location.search;

  const arrayTotalPages = [];
  for (let i = 1; i <= totalPages; ++i) {
    arrayTotalPages.push(i);
  }

  return (
    <PageButton>
      <a href={page === 1 ? `/products` : `/products?page=${page - 1}`}>
        <span>
          <IoMdArrowDropleft />
        </span>
      </a>
      {arrayTotalPages.map((el, idx) => {
        return (
          <a
            key={idx}
            href={`/products?page=${el}`}
            className={search === `?page=${el}` ? "active" : ""}>
            <span>{el}</span>
          </a>
        );
      })}
      <a
        href={
          page === arrayTotalPages[arrayTotalPages.length - 1]
            ? `/products?page=${arrayTotalPages[arrayTotalPages.length - 1]}`
            : `/products?page=${page + 1}`
        }>
        <span>
          <IoMdArrowDropright />
        </span>
      </a>
    </PageButton>
  );
};

export default Pagination;
