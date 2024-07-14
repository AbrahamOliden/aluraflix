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
        case "SET_NEW_VIDEO": //* This kind of works
            const data = action.payload; 
            const matchedCategory = state.categories.filter(category => category.title === action.payload.category);
            const updatedNewVideo = {...matchedCategory[0].videos}
            // [...matchedCategory[0].videos,  {title, image, path: video} = data ];
            console.log(updatedNewVideo);
            return {...state, newVideo: updatedNewVideo};
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

    const addCategory = async (category) => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/AbrahamOliden/aluraflix-api/categories", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });

            if (!response.ok) {
                throw new Error("Connection failed");
            };
        } catch (error) {
            console.error("Error adding category:", error);
        }
    }

    return (
        <GlobalContext.Provider value={{ state, dispatch, newVideo, setNewVideo, newCategory, setNewCategory}} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;