import { createContext, useState, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
    categories: [],
    newVideo: {},
    newCategory: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            return {...state, categories: action.payload};
        case "SET_NEW_VIDEO":
            return {...state, newVideo: action.payload};
        case "SET_NEW_CATEGORY":
            return {...state, newCategory: action.payload};
    };
};

const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({});
    const [newVideo, setNewVideo] = useState({});
    const [newCategory, setNewCategory] = useState({})

    useEffect(() => {
        const getData = async () => {
            const resolve = await fetch("https://my-json-server.typicode.com/AbrahamOliden/aluraflix-api/categories");
            const data = await resolve.json();
            // setCategories([...data]);
            dispatch({type: "SET_CATEGORIES", payload: data});
        };

        getData();
    }, []);

    return (
        <GlobalContext.Provider value={{categories, setCategories, formData, setFormData, newVideo, setNewVideo, newCategory, setNewCategory, state, dispatch}} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;