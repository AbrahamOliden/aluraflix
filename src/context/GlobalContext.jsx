import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [videos, setVideos] = useState([]);

    
    useEffect(() => {
        const getData = async () => {
            const resolve = await fetch("http://localhost:5000/categories");
            const data = await resolve.json();
            setVideos([...data]);
        };

        setTimeout(() => {
            getData();
            console.log(videos);
        });
    }, []);

    return (
        <GlobalContext.Provider value={videos} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;