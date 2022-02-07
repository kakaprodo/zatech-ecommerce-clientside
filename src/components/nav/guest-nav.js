import React from 'react';
import Config from '../../utility/config';

const GuestNav = () => {
    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className="navbar mb-2 shadow-lg bg-white text-neutral rounded-none">
                <div className="flex-1 px-2 mx-2">
                    <span className="text-lg font-bold">
                        {Config.AppName}
                    </span>
                </div>
                <div className="flex-none ">
                    <button className="btn btn-primary mx-5">
                        Login
                    </button>
                </div>
            </div>
        </div>

    );
}

export default GuestNav;