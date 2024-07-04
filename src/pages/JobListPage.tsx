import React, { useEffect } from "react";
import JobList from "../components/JobList";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JobListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate("/jobs/new");
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
          <h1>Jobs List</h1>
          <Button
            variant="contained"
            color="primary"
            aria-label="add"
            onClick={handleAddButtonClick}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Container>
      </Box>
      <JobList />;
    </Box>
  );
};

export default JobListPage;
