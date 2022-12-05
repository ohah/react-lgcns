/* eslint-disable no-console */
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const Google = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(jwtDecode(credentialResponse?.credential || ''));
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Google;
