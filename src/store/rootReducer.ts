import { combineReducers } from "@reduxjs/toolkit";
import jobReducer from "./job/job.reducer";

const rootReducer = combineReducers({
  job: jobReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
