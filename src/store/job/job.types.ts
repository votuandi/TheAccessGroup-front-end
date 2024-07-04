import { FetchJobsPayload, Job } from "../../api/job/job.types";

export enum JobActionTypes {
  GET_JOBS_REQUESTED = "job/getJobsRequested",
  GET_JOBS_SUCCESSFUL = "job/getJobsSuccessful",
  GET_JOBS_FAILED = "job/getJobsFailed",
  GET_JOBS = "job/getJobs",

  GET_JOB_REQUESTED = "job/getJobRequested",
  GET_JOB_SUCCESSFUL = "job/getJobSuccessful",
  GET_JOB_FAILED = "job/getJobFailed",
  GET_JOB = "job/getJob",
}

export interface JobState {
  jobs: Job[];
  total: number;
  jobsLoading: boolean;
  jobsError: string | null;

  job: Job | null;
  jobLoading: boolean;
  jobError: string | null;
}

export type GetJobsAction = {
  payload: FetchJobsPayload;
  type: JobActionTypes.GET_JOBS;
};

export type GetJobAction = {
  payload: string;
  type: JobActionTypes.GET_JOB;
};
