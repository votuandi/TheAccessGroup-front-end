import { createAction } from "@reduxjs/toolkit";
import { JobActionTypes } from "./job.types";
import {
  FetchJobsPayload,
  FetchJobsResponse,
  Job,
} from "../../api/job/job.types";

export const getJobsRequested = createAction<void>(
  JobActionTypes.GET_JOBS_REQUESTED
);
export const getJobsSuccess = createAction<FetchJobsResponse>(
  JobActionTypes.GET_JOBS_SUCCESSFUL
);
export const getJobsFailure = createAction<string>(
  JobActionTypes.GET_JOBS_FAILED
);
export const getJobs = createAction<FetchJobsPayload>(JobActionTypes.GET_JOBS);

export const getJobRequested = createAction<void>(
  JobActionTypes.GET_JOB_REQUESTED
);
export const getJobSuccess = createAction<Job>(
  JobActionTypes.GET_JOB_SUCCESSFUL
);
export const getJobFailure = createAction<string>(
  JobActionTypes.GET_JOB_FAILED
);
export const getJob = createAction<string>(JobActionTypes.GET_JOB);
