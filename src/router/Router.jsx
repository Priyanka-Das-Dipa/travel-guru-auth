import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Destination from "../components/Destination";



const router  = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch("/data.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/destination",
                element: <Destination></Destination>,
                loader: () => fetch("/data.json")
            }
            
        ]
    }
])
export default router;

