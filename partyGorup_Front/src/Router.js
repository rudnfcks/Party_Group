import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import PageRoute from "./Pages/PageRoute";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/page/*" element={<PageRoute />} />
                <Route path="/*" element={<Navigate replace to="/login"/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router