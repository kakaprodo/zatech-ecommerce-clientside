import React, { useState, useEffect } from 'react';
import http from '../../utility/http-client';
import Sh from '../../utility/shared-helper';

const ListTransactionPage = () => {
    const [transactions, setTransactions] = useState([]);

    const [apiWasCalled, setApiWasCalled] = useState(false);

    useEffect(() => {
        if (transactions.length || apiWasCalled) return;

        fetchtransactions((transactions) => {
            setTransactions(transactions);
            setApiWasCalled(true);
        }, () => {
            // erroor
            setApiWasCalled(true);
        });

    }, [transactions]);

    const fetchtransactions = async (onSuccess, onError) => {
        const resp = await http.get('user-transactions');

        if (resp.status !== 200) return onError();

        return onSuccess(resp.data.data);
    }


    return (
        <div>
            <div className='py-5'>
                <p className="text-xl">Transaction list</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    !transactions.length && <span>You haven't yet perform any transaction</span>
                }

                {
                    transactions.map((transaction, index) => {
                        return (
                            <div key={index + 'transaction'} className="card lg:card-side card-bordered shadow-md">
                                <div className="card-body flex-row justify-between">
                                    <div>
                                        <h2 className="text-lg">{transaction.description}</h2>
                                        <p className='text-sm'>{transaction.type}</p>
                                        <small>{Sh.dateFormat(transaction.created_at)}</small>
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