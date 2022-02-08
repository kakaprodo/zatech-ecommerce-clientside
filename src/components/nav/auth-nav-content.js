import React from 'react';
import { Link } from 'react-router-dom';
import RouteName from '../../utility/route-names';
import Sh from '../../utility/shared-helper';

const AuthNav = (props) => {

    const { authUser } = props;

    const logout = (e) => {
        e.preventDefault();

        Sh.logoutUser();
    }

    return (
        <>
            <div className="lex-none mx-3 hover:cursor-pointer">
                <Link to={RouteName.INDEX}>Products</Link>
            </div>

            <div className="dropdown dropdown-end flex-none mx-3 hover:cursor-pointer">
                <div tabIndex="0" className="avatar placeholder">
                    <div className="bg-indigo-300 text-neutral-content rounded-full w-10 h-10">
                        <span className="text-3xl">P</span>
                    </div>
                </div>
                <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-40">
                    <li>
                        <Link to={RouteName.USER_PROFILE}>My profile</Link>
                    </li>
                    <li>
                        <a href="a" onClick={logout}>Logout</a>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default AuthNav;