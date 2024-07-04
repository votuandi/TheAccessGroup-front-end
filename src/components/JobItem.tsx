import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { Job } from "../api/job/job.types";

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/jobs/${job.id}/edit`);
  };

  const handleDelete = () => {
    try {
    } catch (error) {}
  };

  return (
    <ListItem sx={{ "&:hover": { backgroundColor: "#1a1a1a10" } }}>
      <ListItemText primary={job.title} secondary={job.description} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default JobItem;
