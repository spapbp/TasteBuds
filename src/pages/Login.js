import React from 'react';
import { refreshTokenSetup } from '../components/RefreshToken';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID;

function Login() {
    const onSuccess = (res) => {
        // call backend login function
        console.log('[Login Success] currentUser:', res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ margin: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;