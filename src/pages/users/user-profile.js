import React from 'react';
import BodyLayout from '../../components/layouts/body-layout';
import UserProfileRoute from '../../routes/profile-route';
import ProfileHeader from './partials/profile-header';

const UserProfilePage = () => {
    return (
        <BodyLayout auth={true} >
            <ProfileHeader />
            <UserProfileRoute />
        </BodyLayout>
    );
}

export default UserProfilePage;