import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
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
                path:'/register',
                element:<Register/>
            },
            {
                path: '/allItems',
                element: <div>all item</div>
            },
            {
                path: '/addItem',
                element: <div> add item</div>
            },
            {
                path: 'myItems',
                element: <div>  my items</div>
            }
        ]
    }
])


export default Routes;