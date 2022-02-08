
import React, { useReducer } from 'react';
import httpStatusReducer, { defaultHttpStatusState } from '../reducers/http-status-reducer';
import { AppEvent } from '../utility/event';
import ReducerAction from '../utility/reducer-actions';

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


    const closeAlert = () => {
        dispatch({ type: ReducerAction.INITIALIZE });
    }

    const simpleAlertmessage = () => {
        return (
            <div className="alert alert-error">
                <div className="flex-1">
                    <label>{errorMessage}</label>
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

            <div className="alert alert-success flex justify-between  text-gray-500 max-w-7xl mx-auto sm:px-6 lg:px-8 py-5 mb-2">
                <div className="flex-1">
                    <label>{successMessage}</label>
                </div>
                <div>
                    <button onClick={closeAlert} className="btn btn-ghost btn-sm btn-outline">Close</button>
                </div>
            </div>
        )
    }

    const ErrorContainer = () => {

        if (isSuccess) return successMessageContainer();

        if (!canFireError) return (<></>);

        return (
            <div className='flex justify-between bg-red-100 text-gray-500 max-w-7xl mx-auto sm:px-6 lg:px-8 py-5 mb-2'>
                {errorStatus === 422 ? get422ErrorContent() : simpleAlertmessage()}

                <div>
                    <button onClick={closeAlert} className="btn btn-ghost btn-sm btn-outline">Close</button>
                </div>
            </div>
        );
    }

    return { ErrorContainer };
}

export default useAxiosResponeStatus;