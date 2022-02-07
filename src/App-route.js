import React from 'react';
import { Routes, Route } from "react-router-dom";
import RouteName from './utility/route-names';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import WelcomePage from './pages/welcome';

const AppRoute = () => {
    return (
        <Routes>
            <Route path={RouteName.INDEX} element={<WelcomePage />} />
            <Route path={RouteName.LOGIN} element={<LoginPage />} />
            <Route path={RouteName.REGISTER} element={<RegisterPage />} />
        </Routes>
    );
}

export default AppRoute;