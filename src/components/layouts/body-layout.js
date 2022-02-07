import React from 'react';

const BodyLayout = (props) => {

    const { children } = props;
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white py-10 mb-10 mt-20">
            {children}
        </div>
    );
}

export default BodyLayout;