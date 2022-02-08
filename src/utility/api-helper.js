import http from "./http-client";

const Api = {
    fetchDiscountSettings: async (onSuccess = () => { }, onError = () => { }) => {
        const resp = await http.get('discounts');

        if (resp.status !== 200) return onError();

        onSuccess(resp.data);
    }
}

export default Api;