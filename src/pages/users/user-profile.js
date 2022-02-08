import React, { useState, useEffect } from 'react';
import BodyLayout from '../../components/layouts/body-layout';
import UserProfileRoute from '../../routes/profile-route';
import Sh from '../../utility/shared-helper';
import ProfileHeader from './partials/profile-header';

const UserProfilePage = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        if (authUser) return;
        setAuthUser(Sh.getAuthUser());
        refreshUserData();
    }, [authUser]);

    const refreshUserData = async () => {

        await Sh.setAuthUser();

        const user = await Sh.getAuthUser();

        setAuthUser(user);
    }

    return (
        <BodyLayout>
            <ProfileHeader authUser={authUser} refreshUserData={refreshUserData} />
            <UserProfileRoute />
        </BodyLayout>
    );
}

export default UserProfilePage;