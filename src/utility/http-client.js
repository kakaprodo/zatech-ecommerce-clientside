import axios from "axios";
import Config from "./config";
import { AppEvent } from "./event";
import ReducerAction from "./reducer-actions";
import Sh from "./shared-helper";

const http = axios.create({ baseURL: Config.API_BASE_URL })

http.interceptors.request.use(async (config) => {
    const token = await Sh.storageGet('token');

    token && (config.headers.authorization = `Bearer ${token}`);

    return config
})

http.interceptors.response.use(function (response) {
    const msg = response?.data?.message;

    if (msg) {
        AppEvent.axiosResponseStatusDispatch({
            value: {
                successMessage: msg
            },
            type: ReducerAction.AXIOS_SUCCESS,
        });
    }

    return response;
}, function (error) {

    const errorResp = error.response;
    const networkErrorMsg = error.message == 'Network Error' ? error.message : null;

    if (!Sh.isEmpty(errorResp?.data?.message) || !Sh.isEmpty(networkErrorMsg)) {
        AppEvent.axiosResponseStatusDispatch({
            value: {
                errorMessage: errorResp?.data?.message || networkErrorMsg,
                errorResponse: errorResp || null
            },
            type: ReducerAction.AXIOS_ERROR,
        });
    }

    return Promise.resolve(error.response);
});

export default http;
