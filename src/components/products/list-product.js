import React from 'react';

const ListProduct = () => {

    let products = [
        {
            name: 'Bugger',
            price: 44,
            discount: 0,
        },
        {
            name: 'COCA',
            price: 200,
            discount: 2,
        },
        {
            name: 'pant',
            price: 112,
            discount: 0,
        },
        {
            name: 'Shoes',
            price: 300,
            discount: 1,
        }
    ];

    products = [...products, ...products];

    return (

        <div className='grid grid-cols-4 gap-5'>
            {
                products.map((product) => {
                    return (
                        <div className="card card-bordered shadow-md">
                            <figure>
                                <img src="https://picsum.photos/id/1005/400/250" alt="product" />
                            </figure>
                            <div className="card-body p-3">
                                <h2 className="card-title">{product.name} </h2>
                                <p>{product.price}$</p>
                                <p>{product.discount}% of Discount</p>
                                <div className="my-3">
                                    <button className="btn btn-primary btn-sm btn-outline">Purchase</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >

    );
}

export default ListProduct;