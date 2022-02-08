import Sh from "../utility/shared-helper";

export const userReducerInitialState = {
    authUser: Sh.getAuthUser(),
};

export const UserReducerAction = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}


function userReducer(state, action) {
    switch (action.type) {
        case UserReducerAction.LOGIN:
            return {
                ...state,
                ...{ authUser: action.value.user }
            };
        case UserReducerAction.LOGOUT:
            return {
                ...state,
                ...{ authUser: null }
            };
        default:
            throw new Error();
    }
}

export default userReducer;

