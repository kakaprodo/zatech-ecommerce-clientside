import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import http from '../../utility/http-client';
import RouteName from '../../utility/route-names';
import Sh from '../../utility/shared-helper';

const RegisterPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const register = async () => {
        const resp = await http.post('register', {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        })

        if (resp.status !== 200) return;

        Sh.saveAuthToken(resp.data.token);

        navigate(RouteName.USER_PROFILE);
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card w-full max-w-lg card-bordered shadow-md bg-white">
                <div className='card-body'>
                    <span className='card-title'>Register</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
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
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="password"
                            className="input input-bordered"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Confirm password"
                            className="input input-bordered"
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            value={passwordConfirmation}
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={register}
                        >
                            Register
                        </button>
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