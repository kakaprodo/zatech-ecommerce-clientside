import React, { useState, useEffect } from 'react';
import BodyLayout from '../components/layouts/body-layout';
import ListProduct from '../components/products/list-product';
import Api from '../utility/api-helper';
import http from '../utility/http-client';
import Sh from '../utility/shared-helper';

const WelcomePage = () => {
    const [products, setProducts] = useState([]);
    const [apiWasCalled, setApiWasCalled] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [hasSearch, setHasSearch] = useState(false);

    useEffect(() => {
        if (products.length || apiWasCalled) return;

        fetchProducts();

    }, [products]);

    const fetchProducts = async () => {
        const resp = await http.get('products');

        if (resp.status !== 200) return setApiWasCalled(true);

        setProducts(resp.data.data);
        setApiWasCalled(true);
    }

    const searchProduct = (e) => {
        e.preventDefault();

        Api.searchProducts(searchValue, (products) => {
            setProducts(products);
            setHasSearch(true);
        }, () => {
            setHasSearch(true);
        });

    }

    const onSerachFieldChange = (e) => {
        const value = e.target.value;

        if (Sh.isEmpty(value)) {
            setSearchValue(value);
            return fetchProducts();
        }

        setSearchValue(value);
    }

    return (

        <BodyLayout >
            <div className="max-w-xl mx-auto lg:flex-none">
                <form onSubmit={searchProduct}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for a product very quick here"
                                className="w-full pr-16 input input-primary input-bordered"
                                value={searchValue}
                                onChange={onSerachFieldChange}
                            />
                            <button
                                type='submit'
                                className="absolute top-0 right-0 rounded-l-none btn btn-primary"
                            >
                                Find it
                            </button>
                        </div>
                    </div>
                </form>
                {hasSearch && !products.length &&
                    <div className="py-5 text-red-400">
                        No result found for the product : {searchValue}
                    </div>
                }
            </div>
            <div className="divider"> Purchase and get it</div>
            <ListProduct products={products} />
        </BodyLayout>
    )
}

export default WelcomePage;