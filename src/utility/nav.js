import React from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../../utility/config';
import RouteName from '../../utility/route-names';
import AuthNav from './auth-nav-content';
import GuestNav from './guest-nav-content';

const Nav = (props) => {

    const {
        auth = false,
        authUser
    } = props;

    const navigate = useNavigate();

    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className="navbar mb-2 shadow-lg bg-white text-neutral rounded-none">
                <div className="flex-1 px-2 mx-2">
                    <span onClick={() => navigate(RouteName.INDEX)} className="text-lg font-bold hover:cursor-pointer">
                        {process.env.REACT_APP_NAME}
                    </span>
                </div>
                {
                    auth ? <AuthNav {...props} /> : <GuestNav {...props} />
                }
            </div>
        </div>

    );
}

export default Nav;