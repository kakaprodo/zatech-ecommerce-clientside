import React from 'react';
import { Link } from 'react-router-dom';
import RouteName from '../../utility/route-names';

const RegisterPage = () => {

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card w-full max-w-lg card-bordered shadow-md bg-white">
                <div className='card-body'>
                    <span className='card-title'>Register</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input type="text" placeholder="Confirm password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="button" value="Login" className="btn btn-primary" />
                    </div>
                    <div className='divider'>Or</div>
                    <div className='flex place-content-center'>
                        <span>If you have an account, then </span>
                        <Link className="text-primary pl-3" to={RouteName.LOGIN} >Login</Link>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default RegisterPage;