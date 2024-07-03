import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const resolve = await fetch("http://localhost:5000/categories");
            const data = await resolve.json();
            setCategories([...data]);
        };

        getData();
    }, []);

    return (
        <GlobalContext.Provider value={{categories, setCategories}} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;