import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const ProfileForm = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
		const [emailError, setEmailError] = useState(false);
		const [userInfo, setUserInfo] = useState({ fullName: '', email: '', password: '' });

		const handleChangeFullName = (event) => {
			setUserInfo({ ...userInfo, fullName: event.target.value });
		};

		const handleChangeEmail = (event) => {
			setUserInfo({ ...userInfo, email: event.target.value });
		};

		const navigate = useNavigate();

    return (
        <>
          <Formik
              initialValues={{
                  email: '',
                  password: '',
                  submit: null
              }}
              validationSchema={Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required')
              })}
              onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                  try {
                      if (scriptedRef.current) {
                          setStatus({ success: true });
                          setSubmitting(false);
                      }
                  } catch (err) {
                      console.error(err);
                      if (scriptedRef.current) {
                          setStatus({ success: false });
                          setErrors({ submit: err.message });
                          setSubmitting(false);
                      }
                  }
              }}
          >
              {({ errors, handleBlur, handleSubmit, handleChange, isSubmitting, touched, values }) => (
                  <form noValidate onSubmit={handleSubmit} {...others}>
                      <Grid container spacing={matchDownSM ? 0 : 3}>
                          <Grid item xs={6} sm={4}>
                              <TextField
                                  fullWidth
                                  label="Full Name"
                                  margin="normal"
                                  name="fname"
                                  type="text"
                                  defaultValue=""
                                  sx={{ ...theme.typography.customInput }}
                                  onChange={handleChangeFullName}
                              />
                          </Grid>
                      </Grid>
                      <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }} >
                        <Grid container spacing={matchDownSM ? 0 : 3}>
                          <Grid item xs={6} sm={4}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
                            <TextField
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                  handleChangeEmail(e);
                                  handleChange(e);
                                }}
                                inputProps={{}}
                                error={emailError}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.email}
                                </FormHelperText>
                            )}
                            </Grid>
                        </Grid>
                      </FormControl>

                      {/* <FormControl
                          fullWidth
                          error={Boolean(touched.password && errors.password)}
                          sx={{ ...theme.typography.customInput }}
                      >
                          <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                          <OutlinedInput
                              id="outlined-adornment-password-register"
                              type={showPassword ? 'text' : 'password'}
                              value={values.password}
                              name="password"
                              label="Password"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                handleChangePassword(e);
                                  handleChange(e);
                                  changePassword(e.target.value);
                              }}
                              endAdornment={
                                  <InputAdornment position="end">
                                      <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                          size="large"
                                      >
                                          {showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                  </InputAdornment>
                              }
                              inputProps={{}}
                          />
                          {touched.password && errors.password && (
                              <FormHelperText error id="standard-weight-helper-text-password-register">
                                  {errors.password}
                              </FormHelperText>
                          )}
                      </FormControl> */}
                  </form>
              )}
          </Formik>
        </>
    );
};

export default ProfileForm;
