import React from "react";
import Wrapper from "../../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const handlePage = (value) => {
    dispatch(changePage(value));
  };

  const pageButton = () => {
    let pageButtonArray = [];
    for (let i = 1; i <= numOfPages; i++) {
      pageButtonArray.push(
        <button
          key={i}
          type="button"
          className={page === i ? "pageBtn active" : "pageBtn"}
          onClick={() => handlePage(i)}
        >
          {i}
        </button>
      );
    }
    return pageButtonArray;
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="prev-btn"
        disabled={page <= 1}
        style={{ cursor: `${page <= 1 ? "not-allowed" : ""}` }}
        onClick={() => handlePage(page - 1)}
      >
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container">{pageButton()}</div>
      <button
        type="button"
        className="next-btn"
        disabled={page >= numOfPages}
        style={{ cursor: `${page >= numOfPages ? "not-allowed" : ""}` }}
        onClick={() => handlePage(page + 1)}
      >
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
