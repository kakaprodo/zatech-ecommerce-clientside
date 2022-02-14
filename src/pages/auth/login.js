import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import http from '../../utility/http-client';
import RouteName from '../../utility/route-names';
import Sh from '../../utility/shared-helper';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        const resp = await http.post('login', {
            email, password
        })

        if (resp.status !== 200) return;

        await Sh.saveAuthToken(resp.data.token);

        navigate(RouteName.USER_PROFILE);
    }

    return (
        <div className="hero min-h-screen">

            <div className="card w-full max-w-lg card-bordered shadow-md bg-white">
                <div className='card-body'>
                    <span className='card-title'>Login</span>
                    <form onSubmit={login}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="email"
                                className="input input-bordered"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Login
                            </button>
                        </div>
                    </form>
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