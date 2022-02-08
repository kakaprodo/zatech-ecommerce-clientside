import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyLayout from '../../components/layouts/body-layout';
import http from '../../utility/http-client';
import RouteName from '../../utility/route-names';
import Sh from '../../utility/shared-helper';


const SingleProductPage = () => {

    let { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [apiWasCalled, setApiWasCalled] = useState(false);
    const [quantity, setQuantity] = useState(1);

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

    const getProductDiscountAmount = (price) => {
        return (Number(price) * Number(product.discount)) / 100
    }

    const getNetPrice = () => {
        const grossPrice = product.price * quantity;
        return grossPrice - getProductDiscountAmount(grossPrice);
    }

    const confirmPurchase = async () => {
        const resp = await http.post('purchase-product', {
            product_id: product.id,
            quantity
        });

        if (resp.status !== 200) return;

        setQuantity(1);
        window.location.href = Sh.appBaseUlr() + RouteName.USER_PROFILE;
    }

    return (
        <BodyLayout>
            {!product ? productLodingContent() :
                <div className="card lg:card-side card-bordered shadow-md">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250" alt="single product" />
                    </figure>
                    <div className="card-body space-y-2 py-3">
                        <h2 className="card-title">{product.name} </h2>
                        <p>
                            Price: <span className='text-2xl font-bold'>{product.price}$</span>
                        </p>
                        <p>
                            Quantity:
                            <input
                                type="number"
                                className='input input-sm input-bordered ml-2'
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </p>
                        <p>Gross amount: <span className='line-through'>{product.price * quantity}$</span></p>
                        <p>Discount: {product.discount}% </p>
                        <p>Total: {getNetPrice()} $</p>
                        <div className="card-actions">
                            <button
                                onClick={confirmPurchase}
                                className="btn btn-primary btn-sm btn-outline"
                            >
                                Confirm purchase
                            </button>
                        </div>
                    </div>
                </div>
            }
        </BodyLayout>
    );
}

export default SingleProductPage;