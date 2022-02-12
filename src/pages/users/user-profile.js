import React, { useState, useEffect } from 'react';
import BodyLayout from '../../components/layouts/body-layout';
import Sh from '../../utility/shared-helper';
import ProfileHeader from './partials/profile-header';
import UserTabs from './partials/user-tabs';

const UserProfilePage = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        if (authUser) return;
        refreshUserData();
    }, [authUser]);

    const refreshUserData = async () => {

        setAuthUser(Sh.getAuthUser());

        await Sh.setAuthUser();

        const user = await Sh.getAuthUser();

        setAuthUser(user);
    }

    return (
        <BodyLayout user={authUser}>
            <ProfileHeader authUser={authUser} refreshUserData={refreshUserData} />

            <UserTabs />


        </BodyLayout>
    );
}

export default UserProfilePage;