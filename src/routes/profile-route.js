import React from 'react';
import { Routes, Route } from "react-router-dom";
import ListTransactionPage from '../pages/transactions/list-transactions';
import RouteName from '../utility/route-names';

const UserProfileRoute = () => {
    return (
        <Routes>
            <Route path={RouteName.USER_TRANSACTIONS} element={<ListTransactionPage />} />
        </Routes>
    );
}

export default UserProfileRoute;