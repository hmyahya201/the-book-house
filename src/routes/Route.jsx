import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home";
import Books from './../pages/Books/Books';
import About from "../pages/About/About";
import BookDetails from './../components/BookDetails/BookDetails';
import WrongPage from "../pages/WrongPage/WrongPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                element: <Books></Books>,
                loader: ()=>fetch("https://api.itbook.store/1.0/new")
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/*",
                element: <WrongPage></WrongPage>
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
                path: "/book/:id",
                element: <BookDetails></BookDetails>,
                loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            },
        ]
    }
])
export default router