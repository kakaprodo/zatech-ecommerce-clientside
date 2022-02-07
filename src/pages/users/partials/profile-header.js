import React from 'react';

const ProfileHeader = () => {
    return (
        <div>
            <div className="card lg:card-side card-bordered shadow-none ">
                <div className="">
                    <div class="avatar placeholder">
                        <div class="bg-indigo-300 text-neutral-content rounded-full w-32 h-32">
                            <span class="text-3xl">P</span>
                        </div>
                    </div>
                </div>
                <div className="card-body py-3 ">
                    <h2 className="card-title">Promesse Kayenga </h2>
                    <p>prodo45@gmail.com</p>
                    <div>
                        <div className="w-full shadow stats">
                            <div class="stat place-items-center place-content-center">
                                <div class="stat-title">Account Balance</div>
                                <div class="stat-value">310 $</div>
                            </div>
                            <div class="stat place-items-center place-content-center">
                                <div class="stat-title">Purchases</div>
                                <div class="stat-value">3</div>
                            </div>
                            <div class="stat place-items-center place-content-center">
                                <div class="stat-title">Topup your account</div> <br />
                                <div class="form-control">
                                    <div class="relative">
                                        <input type="numeric" placeholder="Add money" class="w-full pr-16 input input-primary input-bordered" />
                                        <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabs mt-5">
                <a class="tab tab-lg tab-lifted tab-active">Transactions</a>
                <a class="tab tab-lg tab-lifted">Purchases</a>
            </div>

        </div>
    );
}

export default ProfileHeader;