import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LogIn/LogIn/Login";
import SignUp from "../../Pages/LogIn/SignUp/SignUp";
import PremiumVersion from "../../Pages/PremiumVersion/PremiumVersion";
import Profile from "../../Pages/Profile/Profile";
import Blog from "../../Pages/Shared/Blog/Blog";
import FAQ from "../../Pages/Shared/FAQ/FAQ";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/premium',
                element: <PrivateRoute><PremiumVersion></PremiumVersion></PrivateRoute>
            },
            {
                path: 'courses/premium/:id',
                element: <PrivateRoute><PremiumVersion></PremiumVersion></PrivateRoute>,
                loader: ({params}) => fetch(`https://skill-up-server-asifiqbal07.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
        ]
    }
])