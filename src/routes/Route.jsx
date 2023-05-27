import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home";
import Books from './../pages/Books/Books';
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/books",
                element: <Books></Books>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
])
export default router