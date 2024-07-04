import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Container, Box } from "@mui/material";
import { Job } from "../api/job/job.types";

interface JobFormProps {
  initialJob?: Job;
  onSubmit: (job: Job) => void;
}

const JobForm: React.FC<JobFormProps> = (props) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(2, "Title must be at least 2 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(5, "Description must be at least 5 characters"),
    expiryDate: Yup.date()
      .required("Expiry date is required")
      .min(new Date(), "Expiry date must be in the future"),
  });

  const formik = useFormik({
    initialValues: {
      title: props.initialJob?.title || "",
      description: props.initialJob?.description || "",
      expiryDate: props.initialJob?.expiryDate || "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      props.onSubmit({
        ...props.initialJob,
        ...values,
      } as Job);
      setSubmitting(false);
    },
  });

  useEffect(() => {
    if (props.initialJob) {
      // Reset form values to initialJob values
      formik.setValues({
        title: props.initialJob.title || "",
        description: props.initialJob.description || "",
        expiryDate: props.initialJob.expiryDate || "",
      });
    }
  }, [props.initialJob]);

  return (
    <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box mb={3}>
          <TextField
            label="Title"
            id="title"
            name="title"
            variant="outlined"
            fullWidth
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Box mb={3}>
          <TextField
            label="Description"
            id="description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formik.values.description}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Box mb={3}>
          <TextField
            label="Expiry Date"
            id="expiryDate"
            name="expiryDate"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formik.values.expiryDate}
            error={
              formik.touched.expiryDate && Boolean(formik.errors.expiryDate)
            }
            helperText={formik.touched.expiryDate && formik.errors.expiryDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={formik.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default JobForm;
