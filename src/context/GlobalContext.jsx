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
        case "SET_NEW_VIDEO": //! This doesnt work yet
            return {...state, newVideo: action.payload};
        case "SET_NEW_CATEGORY":
            const updatedCategories = [...state.categories, {...action.payload, videos: [] }];
            return {...state, categories:  updatedCategories};
    };
};

const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [formData, setFormData] = useState({});

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
        <GlobalContext.Provider value={{ formData, setFormData, state, dispatch}} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;