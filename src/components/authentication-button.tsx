import React from 'react';
import LoginButton from './login-button';
import AuthNav from './auth-nav';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <AuthNav /> : <LoginButton />;
};

export default AuthenticationButton;
