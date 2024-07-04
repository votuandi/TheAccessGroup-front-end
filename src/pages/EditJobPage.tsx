import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobForm from "../components/JobForm";
import { Box, Container, Typography } from "@mui/material";
import { getJob } from "../store/job/job.action";
import { FormJobPayload, Job } from "../api/job/job.types";
import jobApi from "../api/job/job.api";
import { RootState } from "../store/rootReducer";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const EditJobPage: React.FC = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>();
  const [currentJob, setCurrentJob] = useState<Job | null>(null);

  const dispatch = useDispatch();
  const location = useLocation();

  const { job } = useSelector((state: RootState) => state.job);

  useEffect(() => {
    if (id) dispatch(getJob(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (job) setCurrentJob(job);
  }, [job]);

  const handleSubmit = async (job: FormJobPayload) => {
    try {
      let res = await jobApi.updateJob(job);
      if (res.status === 204) {
        alert("Update successfully");
        navigate("/jobs");
      } else {
        alert("Update failed");
      }
    } catch (error) {
      alert("Update failed");
    }
  };

  useEffect(() => {
    if (location.pathname.split("/").length > 2)
      setId(location.pathname.split("/")[2]);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          boxShadow: 1,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Edit Job</h1>
        </Container>
      </Box>
      {currentJob ? (
        <JobForm initialJob={currentJob} onSubmit={handleSubmit} />
      ) : (
        <Typography variant="h6" component="p">
          Loading...
        </Typography>
      )}
    </Box>
  );
};

export default EditJobPage;
