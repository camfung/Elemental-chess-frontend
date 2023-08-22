import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import ResponsiveDrawer from '../../components/ui/navigation/ResponsiveDrawer';

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#fff',
};

const textFieldStyles = {
    marginBottom: '8px',
};

const buttonStyles = {
    marginTop: '8px',
};

const ProfileComponent = () => {
    const [userMetaData, setUserMetadata] = useState();
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const handleMetadataChange = (event) => {
        setUserMetadata(event.target.value);
    };

    const handleSaveMetadata = () => {
        try {
            const parsedMetadata = JSON.parse(userMetaData);
            // onUpdateMetadata(parsedMetadata);
        } catch (error) {
            console.error('Error parsing metadata:', error);
        }
    };
    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "dev-xgayk3inhap4a5pa.us.auth0.com";

            try {
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: `https://${domain}/api/v2/`,
                        scope: "read:current_user",
                    },
                });
                console.log("🚀 ~ file: Profile.jsx:48 ~ getUserMetadata ~ accessToken:", accessToken)

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                console.log("🚀 ~ file: Profile.jsx:51 ~ getUserMetadata ~ user.sub:", user.sub)
                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log("🚀 ~ file: Profile.jsx:58 ~ getUserMetadata ~ metadataResponse.body:", metadataResponse.body)
                console.log("🚀 ~ file: Profile.jsx:58 ~ getUserMetadata ~ metadataResponse:", metadataResponse)

                const { user_metadata } = await metadataResponse.json();
                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);


    const test = () => {
        console.log("🚀 ~ file: Profile.jsx:59 ~ getUserMetadata ~ user_metadata:", userMetaData)
    }
    return (
        <ResponsiveDrawer>
            <div style={containerStyles}>
                <Button onClick={test}>test</Button>
                <Typography variant="h5">Profile Information</Typography>
                <Typography variant="body1">Username: {user.username}</Typography>
                <Typography variant="body1">Email: {user.useremail}</Typography>

                <TextField
                    sx={textFieldStyles}
                    label="Metadata (JSON)"
                    multiline
                    rows={5}
                    fullWidth
                    value={userMetaData}
                    onChange={handleMetadataChange}
                    variant="outlined"
                />

                <Button
                    sx={buttonStyles}
                    variant="contained"
                    color="primary"
                    onClick={handleSaveMetadata}

                >
                    Save Metadata
                </Button>
            </div>
        </ResponsiveDrawer>
    );
};

export default ProfileComponent;
