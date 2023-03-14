import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, Grid, Stack, Typography, useMediaQuery, Box, TextField } from '@mui/material';
import ProfileForm from '../authentication/auth-forms/ProfileForm';
import { width } from '@mui/system';
import Avatar from '@mui/material/Avatar';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const ProfileDialog = (props) => {
  console.log(props);

  const [profile, setProfile] = props.open;
  const handleClose = () => {
    setProfile(!profile)
  };

  return (
    <div style={{
      width: "100%",
      lineHeight: "0.8rem",
      marginLeft: "2rem",
      marginTop: "2rem",
    }}
    >
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={profile}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Profile
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid item xs={12}>
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
                  required
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default ProfileDialog;