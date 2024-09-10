import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  Stack,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import axiosInstance from "../api/axiosConfig";

function SignUp() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Watch for password and confirm password to check for match
  const password = watch("password");

  // Function to handle form submission
  const onSubmit = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");

    // Data to be sent to the API
    const { firstName, lastName, email, password } = data;

    const requestBody = {
      NAME: firstName + " " + lastName,
      MAIL: email,
      USER_NAME: email,
      PASSWORD: password,
    };

    try {
      // API call to create a new staff member
      const response = await axiosInstance.post("/register", requestBody);

      // Handle success response
      setSuccessMessage("Account successfully created!");
      window.location.href = "/login";
    } catch (error) {
      // Handle error response
      setErrorMessage(
        "An error occurred while creating the account. Please try again."
      );
    }
  };

  return (
    <Stack direction={"row"} sx={{ height: "100vh", width: "100%" }}>
      {/* Left side of the page with illustration */}
      <Box
        item
        sx={{
          flex: 5,
          backgroundImage:
            "url(https://pixelwibes.com/template/ebazar/html/dist/assets/images/login-img.svg)", // Placeholder for the image or illustration
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "500px 300px",
          backgroundColor: "#f9fbfd",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          textAlign="center"
          sx={{
            mt: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            A few clicks is all it takes.
          </Typography>
        </Box>
      </Box>

      {/* Right side of the page with the sign-up form */}
      <Box sx={{ flex: 3 }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create your account
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Free access to our dashboard.
          </Typography>

          {/* Feedback Messages */}
          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {successMessage}
            </Alert>
          )}

          {/* Sign-up Form */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="First Name"
                      error={!!errors.firstName}
                      helperText={
                        errors.firstName ? errors.firstName.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last Name"
                      error={!!errors.lastName}
                      helperText={
                        errors.lastName ? errors.lastName.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email Address"
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Password"
                      type="password"
                      error={!!errors.password}
                      helperText={
                        errors.password
                          ? errors.password.message
                          : "8+ characters required"
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      error={!!errors.confirmPassword}
                      helperText={
                        errors.confirmPassword
                          ? errors.confirmPassword.message
                          : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="terms"
                  control={control}
                  defaultValue={false}
                  rules={{
                    required: "You must accept the terms and conditions",
                  }}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} color="primary" />}
                      label={
                        <Typography>
                          I accept the{" "}
                          <Link href="#">Terms and Conditions</Link>
                        </Typography>
                      }
                      error={!!errors.terms}
                    />
                  )}
                />
                {errors.terms && (
                  <Typography color="error">{errors.terms.message}</Typography>
                )}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in here
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

export default SignUp;
