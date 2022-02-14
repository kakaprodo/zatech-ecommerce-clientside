import React, { useEffect, useState } from 'react';
import Sh from '../utility/shared-helper';

const useAuth = () => {

    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);


    useEffect(() => {

        if (authChecked) return;

        Sh.getAuthUser(
            (user) => {
                setUser(user);
                setAuthChecked(true);
                refreshUserData();
            },
            () => { setUser(null); setAuthChecked(true) }
        );
    }, [user, authChecked])

    const refreshUserData = async () => {

        await Sh.setAuthUser();

        const user = await Sh.getAuthUser();

        setUser(user);
    }

    if (!authChecked) return (<></>);

    return {
        authed: user !== null,
        user,
        authChecked,
        refreshUserData
    };
}

export default useAuth