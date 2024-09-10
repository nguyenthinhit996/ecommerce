import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function AdminProfile() {
  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Profile
      </Typography>
      <Grid container spacing={3}>
        {/* Profile Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Profile</Typography>
                <EditIcon color="action" />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src="https://i.pravatar.cc/300"
                  alt="Adrian Allan"
                />
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Adrian Allan
                </Typography>
                <Typography color="textSecondary">
                  24 years, California
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Duis felis ligula, pharetra at nisl sit amet, ullamcorper
                fringilla mi. Cras luctus metus non enim porttitor sagittis.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                <strong>Phone:</strong> 202-555-0174 <br />
                <strong>Email:</strong> adrianallan@gmail.com <br />
                <strong>DOB:</strong> 19/03/1980 <br />
                <strong>Address:</strong> 2734 West Fork Street, EASTON 02334
              </Typography>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6">Payment Method</Typography>
              <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                <CreditCardIcon sx={{ fontSize: 40, color: "#9e9e9e" }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body2">VISA **** **** 7548</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Next billing charged $48 <br />
                    Autopay on July 20, 2021
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Add Payment Info
              </Button>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6">Notification Preferences</Typography>
              <FormControlLabel
                control={<Checkbox defaultChecked color="primary" />}
                label="Activity Notifications"
                sx={{ mt: 1 }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked color="primary" />}
                label="Comment Notifications"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Email Preferences"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Settings Form */}
        <Grid item xs={12} md={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <CardContent>
                <Typography variant="h6">Profile Settings</Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  {/* User Name */}
                  <Grid item xs={6}>
                    <Controller
                      name="userName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="User Name"
                          fullWidth
                          variant="outlined"
                          error={!!errors.userName}
                          helperText={
                            errors.userName ? "User name is required" : ""
                          }
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </Grid>

                  {/* Password */}
                  <Grid item xs={6}>
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Password"
                          fullWidth
                          variant="outlined"
                          type="password"
                          error={!!errors.password}
                          helperText={
                            errors.password ? "Password is required" : ""
                          }
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </Grid>

                  {/* Company Name */}
                  <Grid item xs={6}>
                    <Controller
                      name="companyName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Company Name"
                          fullWidth
                          variant="outlined"
                          required
                        />
                      )}
                    />
                  </Grid>

                  {/* Mobile Number */}
                  <Grid item xs={6}>
                    <Controller
                      name="mobileNumber"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Mobile Number"
                          fullWidth
                          variant="outlined"
                          required
                          error={!!errors.mobileNumber}
                          helperText={
                            errors.mobileNumber
                              ? "Mobile number is required"
                              : ""
                          }
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </Grid>

                  {/* Address */}
                  <Grid item xs={12}>
                    <Controller
                      name="address"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Address"
                          fullWidth
                          variant="outlined"
                          multiline
                          rows={4}
                        />
                      )}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={6}>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email"
                          fullWidth
                          variant="outlined"
                          required
                          error={!!errors.email}
                          helperText={errors.email ? "Email is required" : ""}
                        />
                      )}
                      rules={{ required: true, pattern: /^\S+@\S+$/i }}
                    />
                  </Grid>

                  {/* Website URL */}
                  <Grid item xs={6}>
                    <Controller
                      name="websiteUrl"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Website URL"
                          fullWidth
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>

                  {/* Country */}
                  <Grid item xs={6}>
                    <Controller
                      name="country"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          label="Country"
                          fullWidth
                          SelectProps={{ native: true }}
                          variant="outlined"
                        >
                          <option value="">-- Select Country --</option>
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="in">India</option>
                        </TextField>
                      )}
                    />
                  </Grid>

                  {/* State/Province */}
                  <Grid item xs={6}>
                    <Controller
                      name="state"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="State/Province"
                          fullWidth
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>

                  {/* City */}
                  <Grid item xs={6}>
                    <Controller
                      name="city"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="City"
                          fullWidth
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>

                  {/* Postal Code */}
                  <Grid item xs={6}>
                    <Controller
                      name="postalCode"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Postal Code"
                          fullWidth
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                  type="submit"
                >
                  Save
                </Button>
              </CardContent>
            </Card>
          </form>

          {/* Authentication Details */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Authentication Details</Typography>
                <EditIcon color="action" />
              </Box>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>User Name:</strong> Adrian007
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Login Password:</strong> Abc*******
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Last Login:</strong> 128.456.89 (Apple) Safari
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Last Password Change:</strong> 3 Months Ago
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminProfile;
