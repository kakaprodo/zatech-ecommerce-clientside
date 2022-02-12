import React, { useState } from 'react';
import UserPurchaseList from '../../purchases/user-purchases-list';
import ListTransactionPage from '../../transactions/list-transactions';

const UserTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const tabContent = () => {
        return [
            <ListTransactionPage />,
            <UserPurchaseList />
        ][tabIndex];
    }

    return (
        <div>
            <div className="tabs mt-5">
                <span
                    onClick={() => setTabIndex(0)}
                    className={`tab tab-lg tab-lifted ${tabIndex === 0 && 'tab-active'}`}
                >
                    Transactions
                </span>
                <span
                    onClick={() => setTabIndex(1)}
                    className={`tab tab-lg tab-lifted ${tabIndex === 1 && 'tab-active'}`}
                >
                    Purchases
                </span>
            </div>
            <div>
                {tabContent()}
            </div>
        </div>
    );
}

export default UserTabs;