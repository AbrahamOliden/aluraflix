import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [state, setState] = useState([]);
    const [newVideo, setNewVideo] = useState({});
    const [newCategory, setNewCategory] = useState({});
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [categoryToEdit, setCategoryToEdit] = useState();
    const [videoToEdit, setVideoToEdit] = useState({});

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
        };
    };

    const addVideo = async ({ category, description, id, image, title, video }) => {
        try {
            const response = await fetch(`${connection}?title=${category}`);

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Connection failed: ${errorData}`);
            };

            const data = await response.json();

            const categoryData = data[0] //* If curent data is fetched successfully, then:
            const updatedCategoryData = { //* create an Object with current data and add the new video's data
                ...categoryData,
                videos:
                    [...categoryData.videos, { title, path: video, image, description, id }]
            };

            const updateResponse = await fetch(`${connection}/${updatedCategoryData.id}`, { //* Do a PUT method to upload the new video (important to use category's id)
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCategoryData)
            });

            if (!updateResponse.ok) { //* Show error if PUT method fails
                const updateDataError = await updateResponse.text();
                throw new Error(`Error uploading video: ${updateDataError}`);
            };

            const updatedCategory = await updateResponse.json();
            setState(prevState => {
                const updatedState = prevState.map(category => ( //* map prevState to update only the category of the new video
                    category.id === updatedCategory.id ? updatedCategory : category)
                );
                return updatedState;
            });

        } catch (error) {
            console.error("Error adding video:", error);
        };
    };

    const updateCategory = async (category) => {
        try {
            const response = await fetch(`${connection}/${categoryToEdit}`);
            if ( !response.ok ) {
                const connectionError = response.text();
                throw new Error (`Connection failed: ${connectionError}`);
            };

            const data = await response.json();
            const updateCategory = {
                ...data,
                ...category
            };

            const updatedResponse = await fetch(`${connection}/${categoryToEdit}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateCategory)
            });
            if( !updatedResponse.ok ) {
                const updateCategoryError =  updatedResponse.text();
                throw new Error(`Error updating category: ${updateCategoryError}`);
            };

            const updatedCategory = await updatedResponse.json();


            setState(prevState => {
                const updatedState = prevState.map(category => category.id === categoryToEdit ? updatedCategory : category);
                return updatedState;
            });

        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    const updateVideo = async(video) => {
        const { categoryId, videoId } = videoToEdit;
        try {
            const response = await fetch(`${connection}/${categoryId}`);
            if( !response.ok ) {
                const connectionError = response.text();
                throw new Error(`Connection failed: ${connectionError}`);
            };

            const data = await response.json();
            const updateVideosArray = data.videos.map(arrayVideo => arrayVideo.id === videoId ? {...video, videoId} : arrayVideo);
            const updateVideo = {
                ...data,
                videos: updateVideosArray
            };

            const updatedResponse = await fetch(`${connection}/${categoryId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateVideo)
            });
            if( !updatedResponse.ok) {
                const updateVideoError = updatedResponse.text();
                throw new Error(`Error updating video: ${updateVideoError}`);
            };

            const updatedVideoCategory = await updatedResponse.json();

            setState(prevState => {
                const updatedState = prevState.map(category => category.id === categoryId ? updatedVideoCategory : category );
                console.log(updatedState);
                return updatedState;

            });

        } catch (error) {
            console.error("Error updating video:", error);
        }
    }

    const deleteCategory = async (category) => {
        try {
            const updateResponse = await fetch(`${connection}/${category.id}`, {
                method: 'DELETE'
            });

            if (!updateResponse.ok) {
                const updateDataError = updateResponse.text();
                throw new Error(`Error deleting category: ${updateDataError}`);
            };

            setState(prevState => {
                const filteredCategories = prevState.filter(cat => cat.id !== category.id);
                return filteredCategories;
            });

        } catch (error) {
            console.error("Error removing category:", error);
        };
    };

    const deleteVideo = async (category, id) => {
        try {
            const response = await fetch(`${connection}?title=${category}`);

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Connection failed: ${errorData}`);
            };

            const data = await response.json();
            const categoryData = data[0];

            const updatedCategoryData = {
                ...categoryData,
                videos: categoryData.videos.filter(video => video.id !== id)
            };

            const updatedResponse = await fetch(`${connection}/${updatedCategoryData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedCategoryData)
            });

            if (!updatedResponse.ok) {
                const updateDataError = updatedResponse.text();
                throw new Error(`Error updating data: ${updateDataError}`);
            }

            const updatedCategory = await updatedResponse.json();
            console.log(updatedCategory);
            setState(prevState => {
                const updatedState = prevState.map(
                    category => category.id === updatedCategory.id ? updatedCategory : category
                );
                return updatedState;
            });
        } catch (error) {
            console.error("Error removing video:", error);
        }
    }

    return (
        <GlobalContext.Provider value={
            { state, setState, newVideo, setNewVideo, newCategory, setNewCategory, addCategory, addVideo, deleteVideo, deleteCategory, isDialogOpen, setIsDialogOpen, categoryToEdit, setCategoryToEdit, videoToEdit, setVideoToEdit, updateCategory, updateVideo }
        } >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;