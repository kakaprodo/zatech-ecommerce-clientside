import http from "./http-client";
import dateFormat from "dateformat";

const Sh = {
    DISCOUNT_RULE_BETWEEN: 'between',
    DISCOUNT_RULE_ABOVE_MAX: 'above_max',
    saveAuthToken: async function (token) {
        await this.storageAdd('token', token);
        await this.setAuthUser(token);

    },
    setAuthUser: async function () {
        const resp = await http.get('user');

        if (resp.status !== 200) return;

        this.storageAdd('user', JSON.stringify(resp.data.data));
    },
    getAuthUser: function (onExists = () => { }, onNotExists = () => { }) {
        let user = this.storageGet('user');

        user = user ? JSON.parse(user) : null;

        if (!user) return onNotExists();

        onExists(user)

        return user;
    },
    storageAdd: (key, value) => {
        localStorage.setItem(key, value);
    },
    storageGet: (key) => {
        return localStorage.getItem(key);
    },
    storageDelete: (key) => {
        return localStorage.removeItem(key);
    },
    logoutUser: function () {
        this.storageDelete('token');
        this.storageDelete('user');

        window.location.href = '/';
    },
    appBaseUlr: () => {
        return window.location.protocol + '//' + window.location.host;
    },
    dateFormat: (date, format = 'mmm dS yyyy, h:MM TT') => {
        return dateFormat(date, format);
    },
    isEmpty: (value) => {

        if (!value) return true;

        return value.length === 0;
    },
    // Discount in percentage
    findDiscount: function (price, discountSettings = []) {

        const appropriateDiscount = discountSettings.filter((discount) => {
            const priceMatches = this.priceMatchDiscountRule(price, discount);

            return priceMatches;
        }).shift();

        return Number(appropriateDiscount?.value || 0);
    },
    priceMatchDiscountRule: function (price, discount = {}) {
        const minPrice = discount.min_price;
        const maxPrice = discount.max_price;

        return {
            [this.DISCOUNT_RULE_BETWEEN]: () => {
                if (price >= minPrice && price <= maxPrice) return true;

                return false;
            },
            [this.DISCOUNT_RULE_ABOVE_MAX]: () => {

                if (price > maxPrice) return true;

                return false;
            }
        }[discount.rule]();
    },
    redirectTo: (routeName) => {
        window.location.href = Sh.appBaseUlr() + routeName;
    }
};

export default Sh;