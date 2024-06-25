import { useRouteError } from "react-router-dom";

function NotFound() {
    const error = useRouteError();

    return (
        <>
            <h1>404</h1>
            <p>Page not found</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    );
};

export default NotFound;