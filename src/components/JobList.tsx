import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Container, List } from "@mui/material";
import { RootState } from "../store/rootReducer";
import { getJobs } from "../store/job/job.action";
import { Job } from "../api/job/job.types";
import JobItem from "./JobItem";

const JobList: React.FC = () => {
  const dispatch = useDispatch();
  const LIMIT = 10;
  const { jobs, total, jobsLoading } = useSelector(
    (state: RootState) => state.job
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getJobs({ number: currentPage, size: LIMIT }));
  }, [dispatch, currentPage]);

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
      {jobsLoading ? (
        <p>Loading...</p>
      ) : (
        <List>
          {jobs.map((job: Job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </List>
      )}
      <Pagination
        sx={{ alignSelf: "end" }}
        count={
          total <= LIMIT
            ? 1
            : total % LIMIT === 0
            ? total / LIMIT
            : Math.floor(total / LIMIT) + 1
        }
        page={currentPage}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default JobList;
