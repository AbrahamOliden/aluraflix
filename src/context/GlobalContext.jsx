import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const getData = async () => {
        const resolve = await fetch("http://localhost:5000/categories");
        const data = await resolve.json();
        console.log(data);
    };

    return (
        <GlobalContext.Provider value={getData} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;