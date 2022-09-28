import React from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect } from "..";
import { useSelector, useDispatch } from "react-redux";
import {
  clearFilters,
  handleChange as handleChange_allJobsSlice,
} from "../../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { search, searchStatus, searchType, sort, sortOptions } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange_allJobsSlice({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>Search form</h4>
        <div className="form-center">
          <FormRow
            name="search"
            type="text"
            value={search}
            handleChange={handleChange}
            label="search"
          />
          <FormRowSelect
            name="searchStatus"
            list={["all", ...statusOptions]}
            value={searchStatus}
            handleChange={handleChange}
            label="Status"
          />
          <FormRowSelect
            name="searchType"
            list={["all", ...jobTypeOptions]}
            value={searchType}
            handleChange={handleChange}
            label="type"
          />
          <FormRowSelect
            name="sort"
            list={sortOptions}
            value={sort}
            handleChange={handleChange}
            label="sort"
          />
          <button className="btn btn-block btn-danger" onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
