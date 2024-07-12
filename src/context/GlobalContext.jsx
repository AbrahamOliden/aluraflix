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
            // const updatedNewVideo = [...state.newVideo[action.payload,category], {...action.payload}];
            console.log(action.payload);
            break;
            // return {...state, categories: updatedNewVideo};
        case "SET_NEW_CATEGORY":
            const updatedCategories = [...state.categories, {...action.payload, videos: [] }];
            console.log(state.categories);
            return {...state, categories:  updatedCategories};
    };
};

const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [newVideo, setNewVideo] = useState({});
    const [newCategory, setNewCategory] = useState({});

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
        <GlobalContext.Provider value={{ state, dispatch, newVideo, setNewVideo, newCategory, setNewCategory}} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;