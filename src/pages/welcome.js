import React, { useState, useEffect } from 'react';
import BodyLayout from '../components/layouts/body-layout';
import ListProduct from '../components/products/list-product';
import http from '../utility/http-client';

const WelcomePage = () => {
    const [products, setProducts] = useState([]);
    const [apiWasCalled, setApiWasCalled] = useState(false);

    useEffect(() => {
        if (products.length || apiWasCalled) return;

        fetchProducts((products) => {
            setProducts(products);
            setApiWasCalled(true);
        }, () => {
            // erroor
            setApiWasCalled(true);
        });

    }, [products]);

    const fetchProducts = async (onSuccess, onError) => {
        const resp = await http.get('products');

        if (resp.status !== 200) return onError();

        return onSuccess(resp.data.data);
    }

    return (

        <BodyLayout >
            <ListProduct products={products} />
        </BodyLayout>
    )
}

export default WelcomePage;