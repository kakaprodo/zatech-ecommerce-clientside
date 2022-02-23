import React from 'react';
import { Routes, Route } from "react-router-dom";
import RouteName from '../utility/route-names';
import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';
import WelcomePage from '../pages/welcome';
import SingleProductPage from '../pages/products/single-product';
import UserProfilePage from '../pages/users/user-profile';
import RequiredAuth from './middleware/required-auth';
import IfAuthenticated from './middleware/if-unauthenticated';

const AppRoute = () => {
    return (
        <Routes>
            <Route path={RouteName.INDEX} element={<WelcomePage />} />
            <Route
                path={RouteName.LOGIN}
                element={
                    <IfAuthenticated>
                        <LoginPage />
                    </IfAuthenticated>
                }
            />
            <Route
                path={RouteName.REGISTER}
                element={
                    <IfAuthenticated>
                        <RegisterPage />
                    </IfAuthenticated>
                }
            />
            <Route
                path={`${RouteName.SINGLE_PRODUCT}/:productId`}
                element={<SingleProductPage />}
            />
            <Route
                path={RouteName.USER_PROFILE}
                element={
                    <RequiredAuth>
                        <UserProfilePage />
                    </RequiredAuth>
                }
            />
            <Route path="*" element={<p>Route not found</p>} />
        </Routes>
    );
}

export default AppRoute;