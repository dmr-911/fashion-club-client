import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Account/LogIn/LogIn";
import SignUp from "../Pages/Account/SignUp/SignUp";

export const AppRoutes = [
    {
        name : 'Home',
        path : '',
        exact : true,
        component : Home
    },
    // {
    //     name : 'LogIn',
    //     path : '/login',
    //     exact : true,
    //     component : LogIn
    // },
    {
        name : 'Home',
        path : '/signup',
        exact : true,
        component : SignUp
    }
];

