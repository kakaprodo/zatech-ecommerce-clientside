import React from 'react';

import { Navigate } from "react-router-dom";
import useAuth from '../../custom_hooks/useAuth';
import RouteName from "../../utility/route-names";


const RequiredAuth = ({ children }) => {

    const {
        authed,
        authChecked
    } = useAuth();

    if (!authChecked) return (<></>);

    return (
        authed ? children : (
            <Navigate to={RouteName.INDEX} />
        )
    );
}

export default RequiredAuth;