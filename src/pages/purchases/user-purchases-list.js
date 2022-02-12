import React, { useState, useEffect } from 'react';
import Api from '../../utility/api-helper';

const UserPurchaseList = (props) => {

    const [purchases, setPurchases] = useState([]);

    const [apiWasCalled, setApiWasCalled] = useState(false);

    useEffect(() => {
        if (purchases.length || apiWasCalled) return;

        Api.fetchUserPruchases((purchases) => {
            setPurchases(purchases);
            setApiWasCalled(true);
        }, () => {
            // erroor
            setApiWasCalled(true);
        });

    }, [purchases, apiWasCalled]);

    return (
        <div className='bg-gray-50 p-0 sm:p-5'>
            <div className='divider'>
                <p className="text-xl">All your purchases</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {
                    purchases.map((purchase, index) => {
                        return (
                            <div
                                key={index + 'product'}
                                className="card card-bordered shadow-sm rounded-sm"
                            >
                                <figure>
                                    <img src={purchase.image} alt="product" className="h-56" />
                                </figure>
                                <div className="card-body p-3">
                                    <h2 className="card-title">{purchase.product_name}</h2>
                                    <p>Price: {purchase.price}$</p>
                                    <p>Quantity: {purchase.quantity}</p>
                                    <p>Discount: {purchase.discount}% </p>
                                    <p>Discount amount:{purchase.discount_amount}$</p>
                                    <p>Total: {purchase.total}$</p>
                                    <p>created on: {purchase.created_at}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
}

export default UserPurchaseList;