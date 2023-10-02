import {Root} from "@/layouts";
import {Home, Reels, SignIn} from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Home/>,            
            },
            {
                path: 'reels',
                element: <Reels/>
            },
        ]
    },
    {
        path: '/sign-in',
        element: <SignIn/>
    }
])