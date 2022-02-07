import React from 'react';
import BodyLayout from '../../components/layouts/body-layout';
import ProfileHeader from './partials/profile-header';

const UserProfilePage = () => {
    return (
        <BodyLayout auth={true} >
            <ProfileHeader />
        </BodyLayout>
    );
}

export default UserProfilePage;