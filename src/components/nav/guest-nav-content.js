import React from 'react';
import { Link } from 'react-router-dom';
import RouteName from '../../utility/route-names';

const GuestNav = (props) => {

    return (
        <>
            <div className="flex-none ">
                <Link to={RouteName.LOGIN} className="btn btn-primary mx-2 btn-sm">
                    Login
                </Link>
            </div>
        </>

    );
}

export default GuestNav;