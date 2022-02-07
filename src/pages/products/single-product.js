import React from 'react';
import BodyLayout from '../../components/layouts/body-layout';


const SingleProductPage = () => {
    const product = {
        name: 'Bugger',
        price: 44,
        discount: 1,
        discount_amount: 0.44
    };

    return (
        <BodyLayout>
            <div className="card lg:card-side card-bordered shadow-md">
                <figure>
                    <img src="https://picsum.photos/id/1005/400/250" alt="single product" />
                </figure>
                <div className="card-body py-3">
                    <h2 className="card-title">{product.name} </h2>
                    <p>{product.price}$</p>
                    <p>{product.discount}% of Discount</p>
                    <p>Total: {product.price - product.discount_amount}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-sm btn-outline">Confirm purchase</button>
                    </div>
                </div>
            </div>
        </BodyLayout>
    );
}

export default SingleProductPage;