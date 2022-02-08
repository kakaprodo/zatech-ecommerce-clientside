import React, { useState, useEffect } from 'react';
import Sh from '../../utility/shared-helper';
import Nav from '../nav/nav';

const BodyLayout = (props) => {

    const {
        children,
    } = props;

    const [authUser, setAuthUser] = useState();

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
            <Nav auth={authUser} authUser={authUser} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white py-10 mb-10">

                {children}
            </div>
        </>

    );
}

export default BodyLayout;