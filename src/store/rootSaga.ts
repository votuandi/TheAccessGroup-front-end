import { all, fork } from "redux-saga/effects";
import jobSaga from "./job/job.saga";

export default function* rootSaga() {
  yield all([fork(jobSaga)]);
}
