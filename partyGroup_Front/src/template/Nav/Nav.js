import React, { useState } from "react";
import { Link } from "react-router-dom"
import styled from "@emotion/styled";

import settingIcon from "../../asset/img/settingIcon.svg";
import homeIcon from "../../asset/img/homeIcon.svg";
import addIcon from "../../asset/img/addIcon.svg";
import editIcon from "../../asset/img/editIcon.svg";
import { NavContainer } from "./NavContainer";

function Nav({path, setPage}) {
    const getPage = (page) => {
        switch(page) {
            case "setting":
                return 0
            
            case "home":
                return 1

            case "add":
                return 2

            case "edit":
                return 2
        }
    }

    return (
        <NavContainer page={getPage(path)}>
            <div id="main">
                <div className="bar"></div>
                <Link to="./setting" replace onClick={() => {setPage("setting")}}>
                    <img src={settingIcon} alt="setting" />
                </Link>  
                <Link to="./home" replace onClick={() => {setPage("home")}}>
                    <img src={homeIcon} alt="home" />
                </Link>  
                {path !== "edit"
                ? (
                    <Link to="./add" replace onClick={() => {setPage("add")}}>
                        <img src={addIcon} alt="add" />
                    </Link>
                ) : (
                    <Link to="./edit" replace onClick={() => {setPage("add")}}>
                        <img src={editIcon} alt="edit" />
                    </Link>
                )
                }
            </div>
        </NavContainer>
    )
}

export default Nav