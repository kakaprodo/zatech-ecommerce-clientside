import React from 'react';
import { Link } from 'react-router-dom';
import RouteName from '../../utility/route-names';

const ListProduct = (props) => {

    const { products } = props;

    return (

        <div className='grid grid-cols-4 gap-5'>
            {
                products.map((product, index) => {
                    return (
                        <div key={index + 'product'} className="card card-bordered shadow-md">
                            <figure>
                                <img src="https://picsum.photos/id/1005/400/250" alt="product" />
                            </figure>
                            <div className="card-body p-3">
                                <h2 className="card-title">{product.name} </h2>
                                <p>{product.price}$</p>
                                <p>{product.discount}% of Discount</p>
                                <div className="my-3">
                                    <Link to={RouteName.SINGLE_PRODUCT} className="btn btn-primary btn-sm btn-outline">Purchase</Link>
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