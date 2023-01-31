import {
    createBrowserRouter
} from "react-router-dom";
import React from 'react';
import LoadingMovie from '../components/Loading';

// load component theo tung page rieng biet
const SearchPage  = React.lazy(() => import('../pages/Search'));
const DetailPage = React.lazy(() => import('../pages/Detail'));
const LoginPage = React.lazy(() => import('../pages/Login'));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<LoadingMovie/>}>
                <SearchPage/>
            </React.Suspense>
        )
    },
    {
        path:"movie/:slug-:id",
        element: (
            <React.Suspense fallback={<LoadingMovie/>}>
                <DetailPage/>
            </React.Suspense>
        )
    },
    {
        path:"login",
        element: (
            <React.Suspense fallback={<LoadingMovie/>}>
                <LoginPage/>
            </React.Suspense>
        )
    }
]);
export default router;