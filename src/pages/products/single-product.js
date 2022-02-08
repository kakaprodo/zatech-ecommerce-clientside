import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyLayout from '../../components/layouts/body-layout';
import Api from '../../utility/api-helper';
import http from '../../utility/http-client';
import RouteName from '../../utility/route-names';
import Sh from '../../utility/shared-helper';


const SingleProductPage = () => {

    let { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [apiWasCalled, setApiWasCalled] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [purchaseDiscount, setPurchaseDiscount] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [netPrice, setNetPrice] = useState(null);
    const [discounts, setDiscounts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (product) return;

        fetchProduct((product) => {
            setProduct(product);
            setApiWasCalled(true);
            Api.fetchDiscountSettings(setDiscounts);
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

    const confirmPurchase = async () => {
        setIsLoading(true);
        const resp = await http.post('purchase-product', {
            product_id: product.id,
            quantity
        });

        if (resp.status !== 200) return setIsLoading(false);

        setIsLoading(false);

        window.location.href = Sh.appBaseUlr() + RouteName.USER_PROFILE;
    }

    const onQuantityFieldChange = (e) => {
        const quantity = e.target.value;
        const grossPrice = product.price * quantity;
        const purchaseDiscount = Sh.findDiscount(grossPrice, discounts);
        const discountAmount = (grossPrice * purchaseDiscount) / 100;
        const netPrice = grossPrice - discountAmount;

        setQuantity(quantity);
        setPurchaseDiscount(purchaseDiscount);
        setDiscountAmount(discountAmount);
        setNetPrice(netPrice);
    }

    return (
        <BodyLayout>
            {!product ? productLodingContent() :
                <div className="card lg:card-side card-bordered shadow-md">
                    <figure>
                        <img src={product.image} alt="single product" className='h-64' />
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
                                onChange={onQuantityFieldChange}
                            />
                        </p>
                        <p>Gross amount: <span className='line-through'>{product.price * quantity}$</span></p>
                        <p>Discount Amount {purchaseDiscount}% : {discountAmount} $ </p>
                        <p>Total: {netPrice || product.price} $</p>
                        <div className="card-actions">
                            <button
                                onClick={confirmPurchase}
                                className={`btn btn-primary btn-sm btn-outline ${isLoading && 'loading'}`}
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