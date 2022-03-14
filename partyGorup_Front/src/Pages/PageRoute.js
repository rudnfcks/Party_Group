import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "../cookie";
import Nav from "../template/Nav/Nav";
import Add from "./Add/Add";
import Home from "./Home/Home";

function Page() {
    const [page, setPage] = useState(useLocation().pathname.split("/")[2] || "home")

    const navigate = useNavigate()

    useEffect(() => {
        if (!getCookie("name") || !getCookie("code")) {
            navigate("/", {replace: true})
        }
    }, [])

    return (
        <>
            <Nav path={page} setPage={setPage}/>

            <Routes>
                <Route path="/setting" element={<>setting</>} />
                <Route path="/home" element={<Home setPage={setPage} />} />
                <Route path="/add" element={<Add setPage={setPage} />} />
                <Route path="/edit" element={<>edit</>} />
                <Route path="/*" element={<Navigate replace to="./home"/>} />
            </Routes>
        </>
    )
}

export default Page