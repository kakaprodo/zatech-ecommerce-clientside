import http from "./http-client";

const Api = {
    fetchDiscountSettings: async (onSuccess = () => { }, onError = () => { }) => {
        const resp = await http.get('discounts');

        if (resp.status !== 200) return onError();

        onSuccess(resp.data);
    },
    searchProducts: async (searchValue, onSuccess = () => { }, onError = () => { }) => {
        const resp = await http.post('search-products', {
            search_value: searchValue
        });

        if (resp.status !== 200) return onError();

        const products = resp.data.data;

        onSuccess(resp.data.data);

        return products;
    }
}

export default Api;