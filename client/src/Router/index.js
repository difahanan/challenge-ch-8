import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import SwaggerPage from "../Pages/SwaggerPage"; 
function Router() {
    return (
        <Routes>
            <Route path="/" Component={MainPage} />
            <Route path="/docs" Component={SwaggerPage} />
        </Routes>
    )
}

export default Router;