import React from 'react';

import { useNavigate } from "react-router-dom";
import useAuth from '../../custom_hooks/useAuth';


const IfAuthenticated = ({ children }) => {

    const {
        authed,
        authChecked
    } = useAuth();

    const navigate = useNavigate();

    if (!authChecked) return (<></>);

    if (authed) return navigate(-1);

    return (children);
}

export default IfAuthenticated;