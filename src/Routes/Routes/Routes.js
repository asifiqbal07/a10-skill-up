import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Shared/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://skill-up-server-asifiqbal07.vercel.app/courses`)

            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://skill-up-server-asifiqbal07.vercel.app/courses/${params.id}`)

            },
            {
                path: '/faq',
                element: <Blog></Blog>
            },
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])