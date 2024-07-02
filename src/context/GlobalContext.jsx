import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const resolve = await fetch("http://localhost:5000/categories");
            const data = await resolve.json();
            setVideos([...data]);
        };

        getData();
    }, []);

    return (
        <GlobalContext.Provider value={{videos, setVideos}} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;