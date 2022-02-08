import http from "./http-client";

const Sh = {
    saveAuthToken: function (token) {
        this.storageAdd('token', token);
        this.setAuthUser(token);

    },
    setAuthUser: async function () {
        const resp = await http.get('user');

        if (resp.status !== 200) return;

        this.storageAdd('user', JSON.stringify(resp.data.data));
    },
    getAuthUser: function () {
        const user = this.storageGet('user');

        return user ? JSON.parse(user) : null;
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
    }
};

export default Sh;