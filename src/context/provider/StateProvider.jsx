import React from "react";
import AppContext from "../store/index";
import { useReducer } from "react";
import reducer, { initialState } from "../reducer/reducer";

const StateProvider = ({ children }) => {
    return (
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    );
};

export default StateProvider;
