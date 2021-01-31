import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupButton = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Button
        className="btn btn-primary btn-block"
        onClick={() =>
          loginWithRedirect({
            screen_hint: 'signup',
          })
        }
      >
        Sign Up
      </Button>
    </Container>
  );
};

export default SignupButton;
