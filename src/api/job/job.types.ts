export type FetchJobsPayload = {
  number: number;
  size: number;
};

export type FetchJobsResponse = {
  jobs: Job[];
  total: number;
};

export type Job = {
  id: number;
  title: string;
  description: string;
  expiryDate: string;
  createdAt: string;
  updatedAt: string;
};

export type FormJobPayload = {
  id?: number;
  title: string;
  description: string;
  expiryDate: string;
};
