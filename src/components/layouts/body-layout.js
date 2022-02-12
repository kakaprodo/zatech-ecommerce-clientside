import React, { useState, useEffect } from 'react';
import Sh from '../../utility/shared-helper';
import Nav from '../nav/nav';

const BodyLayout = (props) => {

    const {
        children,
        user: existingUser
    } = props;

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        if (authUser) return;

        setUser();

    }, [authUser]);

    const setUser = async () => {
        const user = await Sh.getAuthUser();

        setAuthUser(user);
    }

    return (
        <>
            <Nav auth={existingUser || authUser} authUser={existingUser || authUser} />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 bg-white py-10 mb-10">

                {children}
            </div>
        </>

    );
}

export default BodyLayout;