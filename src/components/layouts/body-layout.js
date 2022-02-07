import React from 'react';
import GuestNav from '../nav/guest-nav';

const BodyLayout = (props) => {

    const { children } = props;
    return (
        <>
            <GuestNav />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white py-10 mb-10 mt-20">

                {children}
            </div>
        </>

    );
}

export default BodyLayout;