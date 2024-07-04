import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { JobState } from "./job.types";
import {
  getJobFailure,
  getJobRequested,
  getJobsFailure,
  getJobsRequested,
  getJobsSuccess,
  getJobSuccess,
} from "./job.action";
import { FetchJobsResponse, Job } from "../../api/job/job.types";

const initialState: JobState = {
  jobs: [],
  total: 0,
  jobsLoading: false,
  jobsError: null,

  job: null,
  jobLoading: false,
  jobError: null,
};

const jobReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getJobsRequested, (state) => {
      state.jobsLoading = true;
      state.jobsError = null;
    })
    .addCase(
      getJobsSuccess,
      (state, action: PayloadAction<FetchJobsResponse>) => {
        state.jobsLoading = false;
        state.jobs = action.payload.jobs;
        state.total = action.payload.total;
      }
    )
    .addCase(getJobsFailure, (state, action: PayloadAction<string>) => {
      state.jobsLoading = false;
      state.jobsError = action.payload;
    })

    .addCase(getJobRequested, (state) => {
      state.jobLoading = true;
      state.jobError = null;
    })
    .addCase(getJobSuccess, (state, action: PayloadAction<Job>) => {
      state.jobLoading = false;
      state.job = action.payload;
    })
    .addCase(getJobFailure, (state, action: PayloadAction<string>) => {
      state.jobLoading = false;
      state.jobError = action.payload;
    });
});

export default jobReducer;
