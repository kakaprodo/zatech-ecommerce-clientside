import React from 'react';

const ProfileHeader = (props) => {
    const {
        authUser
    } = props;

    return (
        <div>
            <div className="card lg:card-side card-bordered shadow-none ">
                <div className="">
                    <div className="avatar placeholder">
                        <div className="bg-indigo-300 text-neutral-content rounded-full w-32 h-32">
                            <span className="text-3xl">P</span>
                        </div>
                    </div>
                </div>
                <div className="card-body py-3 ">
                    <h2 className="card-title">{authUser?.name} </h2>
                    <p>{authUser?.email}</p>
                    <div>
                        <div className="w-full shadow stats">
                            <div className="stat place-items-center place-content-center">
                                <div className="stat-title">Account Balance</div>
                                <div className="stat-value">{authUser?.balance} $</div>
                            </div>
                            <div className="stat place-items-center place-content-center">
                                <div className="stat-title">Purchases</div>
                                <div className="stat-value">3</div>
                            </div>
                            <div className="stat place-items-center place-content-center">
                                <div className="stat-title">Topup your account</div> <br />
                                <div className="form-control">
                                    <div className="relative">
                                        <input type="numeric" placeholder="Add money" className="w-full pr-16 input input-primary input-bordered" />
                                        <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tabs mt-5">
                <span className="tab tab-lg tab-lifted tab-active">Transactions</span>
                <span className="tab tab-lg tab-lifted">Purchases</span>
            </div>

        </div>
    );
}

export default ProfileHeader;