import React, { useState, useEffect } from 'react';
import Sh from '../../utility/shared-helper';
import Nav from '../nav/nav';

const BodyLayout = (props) => {

    const {
        children
    } = props;

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        if (authUser) return;
        setAuthUser(Sh.getAuthUser());
    }, [authUser]);

    return (
        <>
            <Nav auth={authUser} authUser={authUser} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white py-10 mb-10 mt-20">

                {children}
            </div>
        </>

    );
}

export default BodyLayout;