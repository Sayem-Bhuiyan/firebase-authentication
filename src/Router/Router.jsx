import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Orders from "../components/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
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
                path: '/register',
                element: <Register />
            },
            {
                path: '/orders',
                element: <PrivateRoute ><Orders /></PrivateRoute>
            }
        ]
    }
])