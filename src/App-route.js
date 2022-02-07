import React from 'react';
import { Routes, Route } from "react-router-dom";
import RouteName from './utility/route-names';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import WelcomePage from './pages/welcome';
import SingleProductPage from './pages/products/single-product';
import UserProfilePage from './pages/users/user-profile';

const AppRoute = () => {
    return (
        <Routes>
            <Route path={RouteName.INDEX} element={<WelcomePage />} />
            <Route path={RouteName.LOGIN} element={<LoginPage />} />
            <Route path={RouteName.REGISTER} element={<RegisterPage />} />
            <Route path={RouteName.SINGLE_PRODUCT} element={<SingleProductPage />} />
            <Route path={RouteName.USER_PROFILE} element={<UserProfilePage />} />
        </Routes>
    );
}

export default AppRoute;