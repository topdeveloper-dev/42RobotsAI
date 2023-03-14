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
    useMediaQuery,
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

		const initState = {
			email: '',
			password: '',
		};

		// const { handleChange, handleBlur, state, errors } = useForm({
		// 	initState,
		// 	validator,
		// });

		// let isValidForm =
    // Object.values(errors).filter((error) => typeof error !== 'undefined')
    //   .length === 0;

		const navigate = useNavigate();

    return (
        <>
          <Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<div>
							<TextField
								id="outlined-multiline-flexible"
								label="Full Name"
								multiline
								maxRows={4}
							/><br/>
							<TextField
								id="outlined-multiline-flexible"
								label="Email Adress"
								multiline
								maxRows={4}
							/>
							<TextField
								id="filled-multiline-flexible"
								label="default1"
								multiline
								maxRows={4}
								variant="filled"
							/>
							<TextField
								id="outlined-multiline-flexible"
								label="Adress1"
								multiline
								maxRows={4}
							/>
							<TextField
								id="filled-multiline-flexible"
								label="default2"
								multiline
								maxRows={4}
								variant="filled"
							/>
							<br/>
							<TextField
								id="outlined-multiline-flexible"
								label="Address2"
								multiline
								maxRows={4}
							/><br/>
							<TextField
								id="outlined-multiline-flexible"
								label="Change Password"
								multiline
								maxRows={4}
							/><br/>
						</div>
					</Box>
        </>
    );
};

export default ProfileForm;
