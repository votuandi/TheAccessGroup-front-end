import React from "react";
import { useDispatch } from "react-redux";
import JobForm from "../components/JobForm";
import { Box, Container, Typography } from "@mui/material";
import { FormJobPayload, Job } from "../api/job/job.types";
import jobApi from "../api/job/job.api";
import { useNavigate } from "react-router-dom";

const NewJobPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (job: FormJobPayload) => {
    try {
      let res = await jobApi.createJob(job);
      if (res.status === 201) {
        alert("Create successfully");
        navigate("/jobs");
      } else {
        alert("Create failed");
      }
    } catch (error) {
      alert("Create failed");
    }
  };

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
          <h1>Create New Job</h1>
        </Container>
      </Box>
      <JobForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default NewJobPage;
