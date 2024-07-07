export let initialState = {
    user: null,
    loading: false,
    access_token: null,
    refresh_token: null,
};

let reducer = (state, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                user: action.user,
            };
        case "LOADING":
            return {
                ...state,
                loading: action.loading,
            };
        case "LOGIN_ACCESS_TOKEN":
            return {
                access_token: action.accessToken,
            };
        case "LOGIN_REFRESH_TOKEN":
            return {
                refresh_token: action.refreshToken,
            };
        default:
            return state;
    }
};

export default reducer;
