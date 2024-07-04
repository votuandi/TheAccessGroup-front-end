import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GetJobAction, GetJobsAction, JobActionTypes } from "./job.types";
import {
  getJobFailure,
  getJobRequested,
  getJobsFailure,
  getJobsRequested,
  getJobsSuccess,
  getJobSuccess,
} from "./job.action";
import jobApi from "../../api/job/job.api";

function* getJobs(action: GetJobsAction) {
  yield put(getJobsRequested());
  try {
    const { data: response }: Awaited<ReturnType<typeof jobApi.fetchJobs>> =
      yield call(jobApi.fetchJobs, action.payload);

    if (response) {
      yield put(getJobsSuccess(response ?? { jobs: [], total: 0 }));
    } else {
      yield put(getJobsFailure("Fetch Jobs Failed"));
    }
  } catch (error) {
    if (axios.isCancel(error)) return;
    const message = axios.isAxiosError(error)
      ? (error.response?.data as any)?.message || error.message
      : "";
    yield put(getJobsFailure(message));
  }
}

function* getJob(action: GetJobAction) {
  yield put(getJobRequested());
  try {
    const { data: response }: Awaited<ReturnType<typeof jobApi.fetchJobById>> =
      yield call(jobApi.fetchJobById, action.payload);
    if (response) {
      yield put(getJobSuccess(response ?? null));
    } else {
      yield put(getJobFailure("Fetch Job Failed"));
    }
  } catch (error) {
    if (axios.isCancel(error)) return;
    const message = axios.isAxiosError(error)
      ? (error.response?.data as any)?.message || error.message
      : "";
    yield put(getJobFailure(message));
  }
}

export default function* jobSaga() {
  yield all([
    takeEvery(JobActionTypes.GET_JOBS, getJobs),
    takeEvery(JobActionTypes.GET_JOB, getJob),
  ]);
}
