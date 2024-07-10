import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({});
    const [newVideo, setNewVideo] = useState({});
    const [newCategory, setNewCategory] = useState({})

    useEffect(() => {
        const getData = async () => {
            const resolve = await fetch("https://my-json-server.typicode.com/AbrahamOliden/aluraflix-api/categories");
            const data = await resolve.json();
            setCategories([...data]);
        };

        getData();
    }, []);

    return (
        <GlobalContext.Provider value={{categories, setCategories, formData, setFormData, newVideo, setNewVideo, newCategory, setNewCategory}} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;