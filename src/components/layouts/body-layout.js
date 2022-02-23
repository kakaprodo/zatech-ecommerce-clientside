import React, { useState, useEffect } from 'react';
import useAuth from '../../custom_hooks/useAuth';
import Sh from '../../utility/shared-helper';
import Nav from '../nav/nav';

const BodyLayout = (props) => {

    const {
        children
    } = props;

    const {
        user: authUser
    } = useAuth();

    return (
        <div class="pt-28">
            <Nav auth={authUser} authUser={authUser} />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 bg-white py-10 mb-10">

                {children}
            </div>
        </div>

    );
}

export default BodyLayout;