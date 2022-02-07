import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../../utility/config';
import RouteName from '../../utility/route-names';
import AuthNav from './auth-nav-content';
import GuestNav from './guest-nav-content';

const Nav = (props) => {

    const {
        auth = false
    } = props;

    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className="navbar mb-2 shadow-lg bg-white text-neutral rounded-none">
                <div className="flex-1 px-2 mx-2">
                    <span className="text-lg font-bold">
                        {Config.AppName}
                    </span>
                </div>
                {
                    auth ? <AuthNav /> : <GuestNav />
                }
            </div>
        </div>

    );
}

export default Nav;