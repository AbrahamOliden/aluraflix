import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "SET_CATEGORIES":
//             return {...state, categories: action.payload};
//         case "SET_NEW_VIDEO": //* This kind of works
//             const data = action.payload; 
//             const matchedCategory = state.categories.filter(category => category.title === action.payload.category);
//             const updatedNewVideo = {...matchedCategory[0].videos}
//             [...matchedCategory[0].videos,  {title, image, path: video} = data ];
//             console.log(updatedNewVideo);
//             return {...state, newVideo: updatedNewVideo};
//         case "SET_NEW_CATEGORY":
//             const updatedCategories = [...state.categories, {...action.payload, videos: [] }];
//             console.log(state.categories);
//             return {...state, categories:  updatedCategories};
//     };
// };

const GlobalContextProvider = ({ children }) => {

    const [state, setState] = useState([]); //!This will replace reducer and be renamed as state
    const [newVideo, setNewVideo] = useState({});
    const [newCategory, setNewCategory] = useState({});

    const connection = "https://my-json-server.typicode.com/AbrahamOliden/aluraflix-api/categories";

    useEffect(() => {
        const getData = async () => {
            const resolve = await fetch(connection);
            const data = await resolve.json();
            setState(data);
        };

        getData();
    }, []);

    const addCategory = async (category) => {

        try {
            const response = await fetch(connection, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Connection failed: ${errorData}`);
            };

            const data = await response.json();
            setState(prevState => (
                [...prevState, data]
            ));

        } catch (error) {
            console.error("Error adding category:", error);
        }
    };

    const addVideo = async (video) => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/AbrahamOliden/aluraflix-api/categories`)
        } catch (error) {
            console.error("Error adding video:", error);
        } 
    }

    return (
        <GlobalContext.Provider value={{ state, setState, newVideo, setNewVideo, newCategory, setNewCategory, addCategory, addVideo }} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;