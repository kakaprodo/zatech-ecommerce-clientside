import React from 'react';
import { Link } from 'react-router-dom';
import RouteName from '../../utility/route-names';

const ListProduct = (props) => {

    const { products } = props;

    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {
                products.map((product, index) => {
                    return (
                        <div
                            key={index + 'product'}
                            className="card card-bordered shadow-sm rounded-sm"
                        >
                            <figure>
                                <img src={product.image} alt="product" className="h-56" />
                            </figure>
                            <div className="card-body p-3">
                                <h2 className="card-title">{product.name} </h2>
                                <p>Price: {product.price}$</p>
                                <div className="my-3">
                                    <Link
                                        to={`${RouteName.SINGLE_PRODUCT}/${product.id}`}
                                        className="btn btn-primary btn-sm btn-outline"
                                    >
                                        Purchase
                                    </Link>
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