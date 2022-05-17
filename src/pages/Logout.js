import React from "react";
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID;

function Logout() {

    const onSuccess = () => {
        //call logout function
        alert('Logout made successfully');
    };


    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;