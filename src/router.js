import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            // Add your routes here
        ]
    }
]);

