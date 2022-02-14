import React from 'react';
import BodyLayout from '../../components/layouts/body-layout';
import useAuth from '../../custom_hooks/useAuth';
import ProfileHeader from './partials/profile-header';
import UserTabs from './partials/user-tabs';

const UserProfilePage = () => {

    const {
        user: authUser,
        refreshUserData
    } = useAuth();

    return (
        <BodyLayout>
            <ProfileHeader
                authUser={authUser}
                refreshUserData={refreshUserData}
            />

            <UserTabs />


        </BodyLayout>
    );
}

export default UserProfilePage;