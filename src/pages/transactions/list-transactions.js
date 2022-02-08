import React from 'react';

const ListTransactionPage = () => {
    const transactions = [
        {
            id: 1,
            description: 'Topup accoount balance',
            type: 'TOPUP',
            created_at: '2022-02-06b12:00',
            amount: 100
        },
        {
            id: 1,
            description: 'Purchase a banana',
            type: 'PURCHASE',
            created_at: '2022-02-06b12:00',
            amount: 50
        },
        {
            id: 1,
            description: 'PURCHASE Pant',
            type: 'PURCHASE',
            created_at: '2022-02-06b12:00',
            amount: 13
        },
        {
            id: 1,
            description: 'Topup accoount balance',
            type: 'TOPUP',
            created_at: '2022-02-06b12:00',
            amount: 50
        }

    ];

    return (
        <div>
            <div className='py-5'>
                <p className="text-xl">Transaction list</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    transactions.map((transaction, index) => {
                        return (
                            <div key={index + 'transaction'} className="card lg:card-side card-bordered shadow-md">
                                <div className="card-body flex-row justify-between">
                                    <div>
                                        <h2 className="text-lg">{transaction.description}</h2>
                                        <p className='text-md'>{transaction.type}</p>
                                        <small>{transaction.created_at}</small>
                                    </div>
                                    <div>
                                        <p className='text-xl font-bold'>{transaction.amount}$</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}

export default ListTransactionPage;