import React from 'react';
import { Routes, Route } from "react-router-dom";
import RouteName from '../utility/route-names';
import LoginPage from './auth/login';
import RegisterPage from './auth/register';

const AppRoute = () => {
    return (
        <Routes>
            <Route path={RouteName.INDEX} element={<LoginPage />} />
            <Route path={RouteName.REGISTER} element={<RegisterPage />} />
        </Routes>
    );
}

export default AppRoute;