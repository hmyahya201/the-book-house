import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home";
import Books from './../pages/Books/Books';
import About from "../pages/About/About";
import BookDetails from './../components/BookDetails/BookDetails';

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
                path: "/book/:id",
                element: <BookDetails></BookDetails>,
                loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            },
        ]
    }
])
export default router