import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyTask from "../Pages/MyTask/MyTask";
import SignUp from "../Pages/SignUp/SignUp";
import TaskEdit from "../Shared/TaskEdit";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/myTask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedTask',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/edit/:id',
                loader: ({params})=> fetch(`https://task-management-server-zeta.vercel.app/task/${params.id}`),
                element: <TaskEdit></TaskEdit>,
            }
        ]
    }
]);

export default router;