import React, { Fragment, useContext, useState } from "react";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import axios from "axios";
import { UserContext } from "../context/UserContextProvider";

const initialStateForm = {
  fullName: "",
  username: "",
  emailId: "",
  password: "",
  confirmPassword: "",
  termsAndCondition: true,
};

const SampleC = () => {
  const { handleSubmit } = useContext(UserContext);
  const [formData, setFormData] = useState(initialStateForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("name, value", name, value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <Fragment>
      <Typography align="center" gutterBottom>
        <a href="" target="_blank">
          Bombay Marilyn
        </a>
      </Typography>

      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            React Hook Form - Material UI - Validation
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="fullname"
                name="fullName"
                label="Full Name"
                fullWidth
                margin="dense"
                onChange={handleChange}
                // {...register("fullname")}
                // error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {/* {errors.fullname?.message} */}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="username"
                name="username"
                label="Username"
                fullWidth
                margin="dense"
                onChange={handleChange}

                // {...register("username")}
                // error={errors.username ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {/* {errors.username?.message} */}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="emailId"
                label="Email"
                fullWidth
                margin="dense"
                onChange={handleChange}

                // {...register("email")}
                // error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {/* {errors.email?.message} */}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                onChange={handleChange}

                // {...register("password")}
                // error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {/* {errors.password?.message} */}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                margin="dense"
                onChange={handleChange}

                // {...register("confirmPassword")}
                // error={errors.confirmPassword ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {/* {errors.confirmPassword?.message} */}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="termsAndCondition"
                    color="primary"
                    onChange={handleChange}
                  />
                }
                label={
                  <Typography>
                    {/* // <Typography color={errors.acceptTerms ? "error" : "inherit"}> */}
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
                {/* {errors.acceptTerms
                  ? "(" + errors.acceptTerms.message + ")"
                  : ""} */}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit(formData)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default SampleC;
