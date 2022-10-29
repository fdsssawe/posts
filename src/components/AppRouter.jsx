import React, {useContext} from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostsIdPages from "../pages/PostsIdPages";
import {privateRoutes} from "../router/router";
import {publicRoutes} from "../router/router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth , isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((routes)=>
                    <Route
                        element={<routes.element/>}
                        path={routes.path}
                        exact={routes.exact}>
                        key={routes.path}
                    </Route>
                )}
                <Route
                    path="*"
                    element={<Navigate to="/posts" replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((routes)=>
                    <Route
                        element={<routes.element/>}
                        path={routes.path}
                        exact={routes.exact}>
                        key={routes.path}
                    </Route>
                )}
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>

    );
};

export default AppRouter;