import React from "react";
import Wrapper from "../../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import { SingleJob, Loading, PageBtnContainer } from "..";
import { getAllJobs, deleteJob } from "../../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllJobs());
    //eslint-disable-next-line
  }, [deleteJob, page, search, searchStatus, searchType, sort]);

  if (isLoading) return <Loading center />;
  if (jobs.length < 1)
    return (
      <Wrapper>
        <h2>No job to display...</h2>
      </Wrapper>
    );

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <SingleJob key={job._id} {...job} />;
        })}
      </div>
      <PageBtnContainer numOfPages={numOfPages} />
    </Wrapper>
  );
};

export default JobsContainer;
