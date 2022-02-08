import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyLayout from '../../components/layouts/body-layout';
import http from '../../utility/http-client';


const SingleProductPage = () => {

    let { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [apiWasCalled, setApiWasCalled] = useState(false);

    useEffect(() => {
        if (product) return;

        fetchProduct((product) => {
            setProduct(product);
            setApiWasCalled(true);
        }, () => {
            // erroor
            setApiWasCalled(true);
        });

    }, [product]);

    const fetchProduct = async (onSuccess, onError) => {
        const resp = await http.get(`products/${productId}`);

        if (resp.status !== 200) return onError();

        return onSuccess(resp.data.data);
    }

    const productLodingContent = () => {
        return (
            <p>
                {apiWasCalled ? <span>Product Not found</span> : <span>Loading...</span>}
            </p>
        )
    }

    const getProductDiscountNumber = () => {
        return (Number(product.price) * Number(product.discount)) / 100
    }

    return (
        <BodyLayout>
            {!product ? productLodingContent() :
                <div className="card lg:card-side card-bordered shadow-md">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250" alt="single product" />
                    </figure>
                    <div className="card-body py-3">
                        <h2 className="card-title">{product.name} </h2>
                        <p>{product.price}$</p>
                        <p>{product.discount}% of Discount</p>
                        <p>Total: {product.price - getProductDiscountNumber()}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-sm btn-outline">Confirm purchase</button>
                        </div>
                    </div>
                </div>
            }
        </BodyLayout>
    );
}

export default SingleProductPage;