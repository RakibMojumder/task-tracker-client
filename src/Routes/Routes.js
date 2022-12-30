import AddTask from "../pages/AddTask";
import Login from "../pages/Login";
import MyTask from "../pages/MyTask";
import Register from "../pages/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <MyTask />
            },
            {
                path: '/addTask',
                element: <AddTask />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);


export default router;