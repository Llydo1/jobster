import React from "react";
import Wrapper from "../../assets/wrappers/Job";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { JobInfo } from "..";
import { deleteJob } from "../../features/allJobs/allJobsSlice";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { setEditJob } from "../../features/job/jobSlice";

const SingleJob = ({
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
  _id,
}) => {
  const date = moment(createdAt).format("MMM Do, YYYY");
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.slice(0, 1)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={"status " + status}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              className="btn delete-btn"
              onClick={() => dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default SingleJob;
