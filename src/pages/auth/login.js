import React from 'react';
import { Link } from 'react-router-dom';
import RouteName from '../../utility/route-names';

const LoginPage = () => {

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card w-full max-w-lg card-bordered shadow-md bg-white">
                <div className='card-body'>
                    <span className='card-title'>Login</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="button" value="Login" className="btn btn-primary" />
                    </div>
                    <div className='divider'>Or</div>
                    <div className='flex place-content-center'>
                        <span>You don't have an account, then </span>
                        <Link className="text-primary pl-3" to={RouteName.REGISTER} > Register</Link>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default LoginPage;