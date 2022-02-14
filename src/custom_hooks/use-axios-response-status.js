
import React, { useReducer } from 'react';
import httpStatusReducer, { defaultHttpStatusState } from '../reducers/http-status-reducer';
import { AppEvent } from '../utility/event';
import ReducerAction from '../utility/reducer-actions';
import RouteName from '../utility/route-names';
import Sh from '../utility/shared-helper';

const useAxiosResponeStatus = () => {

    const [state, dispatch] = useReducer(httpStatusReducer, defaultHttpStatusState);

    const {
        canFireError,
        errorTitle,
        errorMessage,
        errorStatus,
        errorFields,
        successMessage,
        isSuccess
    } = state;

    AppEvent.axiosResponseStatusDispatch = dispatch;

    const closeAlert = async () => {

        if (errorStatus === 401) {
            await Sh.logoutUser();
            Sh.redirectTo(RouteName.LOGIN);
            return;
        }
        dispatch({ type: ReducerAction.INITIALIZE });
    }

    const simpleAlertmessage = () => {
        return (
            <div className="alert alert-error">
                <div className="flex-1">
                    <label>{
                        errorStatus === 401
                            ? 'Please, you need to login for making this action'
                            : errorMessage
                    }</label>
                </div>
            </div>
        );
    }

    const get422ErrorContent = () => {
        return (
            <div className=''>
                <div>
                    <p>{errorTitle}</p>
                    <ul>
                        {
                            Object.keys(errorFields).map((fieldName, index) => {
                                return (
                                    <li key={index}>
                                        {index + 1}. {errorFields[fieldName][0]}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    const successMessageContainer = () => {
        return (

            <div className="alert alert-success flex justify-between py-5 p-5 w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
                <div className="flex-1">
                    <label>{successMessage}</label>
                </div>
                <div>
                    <button onClick={closeAlert} className="btn btn-ghost btn-sm btn-outline">Close</button>
                </div>
            </div>
        )
    }

    const errorContent = () => {

        if (isSuccess) return successMessageContainer();

        if (!canFireError) return (<></>);

        return (
            <div className='flex justify-between bg-red-100 py-5 p-5 w-full sm:w-4/5 md:w-2/3 lg:w-1/2'>
                {errorStatus === 422 ? get422ErrorContent() : simpleAlertmessage()}

                <div>
                    <button onClick={closeAlert} className={`btn btn-${errorStatus === 401 ? 'error' : 'ghost'} btn-sm btn-outline`}>
                        {errorStatus === 401 ? <span>Login</span> : <span>Close</span>}
                    </button>
                </div>
            </div>
        );
    }

    const ErrorContainer = () => (
        <div className='absolute w-full flex place-content-center place-items-start z-50 top-20 text-gray-500'>
            {errorContent()}
        </div>
    );

    return { ErrorContainer };
}

export default useAxiosResponeStatus;