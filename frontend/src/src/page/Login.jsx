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
import NextWeekIcon from "@mui/icons-material/NextWeek";
import axiosInstance from "../api/axiosConfig";

function Login() {
  // State to handle user inputs and feedback messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle the login process
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the page from refreshing

    // Reset previous messages
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Make the POST request to login API
      const response = await axiosInstance.post("/login", {
        username: email,
        password: password,
      });

      // Handle successful login
      const {
        accessToken,
        refreshToken,
        username,
        email: userEmail,
        expiresIn,
      } = response.data;
      setSuccessMessage(`Logged in successfully as ${username}`);

      // You can store the tokens in localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Optionally, redirect to another page
      window.location.href = "/dashboard";
    } catch (error) {
      // Handle error responses (e.g., 400 Bad Request)
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid credentials. Please try again.");
      } else {
        setErrorMessage(
          "An error occurred during login. Please try again later."
        );
      }
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
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundSize: "500px 300px",
          backgroundColor: "#f9fbfd",
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
          <NextWeekIcon sx={{ color: "#7258db", fontSize: "7rem" }} />
        </Box>
      </Box>

      {/* Right side of the page with the login form */}
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
            Sign in
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Free access to our dashboard.
          </Typography>

          {/* Display error or success messages */}
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

          {/* Google sign in button */}
          <Button
            variant="outlined"
            startIcon={
              <img
                height={"25px"}
                width={"25px"}
                src="https://pixelwibes.com/template/ebazar/html/dist/assets/images/google.svg"
                alt="Google sign-in"
              />
            }
            sx={{ mt: 2, mb: 2, borderColor: "#ccc", color: "#333" }}
          >
            Sign in with Google
          </Button>

          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            OR
          </Typography>

          {/* Login form */}
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleLogin}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign up here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f9fbfd",
          flex: 2,
        }}
      >
        <span></span>
      </Box>
    </Stack>
  );
}

export default Login;
