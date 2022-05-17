export const refreshTokenSetup = (res) => {
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResonse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', new AuthRes);
        console.log('new auth Token', newAuthRes.id_token);

        // Setup the other timer after the frist one
        setTimeout(refreshToken, refreshTiming);
    };

    // setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
}