import axios from "axios";
import { FetchJobsPayload, FormJobPayload } from "./job.types";

const API_URL = "http://localhost:4200/api";

const jobApi = {
  fetchJobs: (payload?: FetchJobsPayload) => {
    return axios.get(
      `${API_URL}/jobs?page[number]=${
        payload?.number ? payload.number : 1
      }&page[size]=${payload?.size ? payload.size : 1}`
    );
  },

  fetchJobById: (id: string) => {
    return axios.get(`${API_URL}/jobs/${id}`);
  },

  createJob: (payload: FormJobPayload) => {
    return axios.post(`${API_URL}/jobs`, {
      ...payload,
    });
  },

  updateJob: (payload: FormJobPayload) => {
    let { id, ...dto } = payload;
    return axios.put(`${API_URL}/jobs/${id}`, {
      ...dto,
    });
  },

  removeJobById: (id: string) => {
    return axios.delete(`${API_URL}/jobs/${id}`);
  },
};

export default jobApi;
