import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { AddItem } from "../pages/AddItem/AddItem";
import AllItems from "../pages/AllItems/AllItems";
import MyItem from "../pages/MyItem/MyItem";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import UpdateItem from "../pages/UpdateItem/UpdateItem";
import CategoryCollection from "../pages/CategoryCollection/CategoryCollection";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/allItems',
                element: <AllItems />,
                loader: () => fetch('http://localhost:5000/items')
            },
            {
                path: '/addItem',
                element: <PrivateRoute><AddItem /></PrivateRoute>
            },
            {
                path: '/myItems',
                element: <PrivateRoute><MyItem /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/items')
            },
            {
                path: '/items/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`),
                element: <PrivateRoute><ItemDetails /></PrivateRoute>
            },
            {
                path: '/updateItem/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`),
                element: <PrivateRoute><UpdateItem /></PrivateRoute>
            },
            {
                path: '/category/:subcategory_name',
                loader: ({ params }) => fetch(`http://localhost:5000/item/${params.subcategory_name}`),
                element: <CategoryCollection />
            }
        ]
    }
])


export default Routes;