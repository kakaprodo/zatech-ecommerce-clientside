import axios from "axios";
import Config from "./config";
import Sh from "./shared-helper";

const http = axios.create({ baseURL: Config.API_BASE_URL })

http.interceptors.request.use(async (config) => {
    const token = await Sh.storageGet('token');

    token && (config.headers.authorization = `Bearer ${token}`);
    console.log(config.url);
    return config
})

http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log('***************** REQUEST ERROR ******************')
    console.log(error.message);
    console.warn(error.response);

    return Promise.resolve(error.response);
});

export default http;
