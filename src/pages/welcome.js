import React from 'react';
import BodyLayout from '../components/layouts/body-layout';
import GuestNav from '../components/nav/guest-nav';
import ListProduct from '../components/products/list-product';

const WelcomePage = () => {
    return (
        <>
            <GuestNav />
            <BodyLayout >
                <ListProduct />
            </BodyLayout>

        </>
    )
}

export default WelcomePage;