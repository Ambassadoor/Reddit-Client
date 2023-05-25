import React from "react";
import logo from "../reddit-logo-2436.png"
import SearchContainer from "./SearchContainer";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const Toolbar = () => {
    return (
        <div>
            <Link to="/">
                 <img src={logo} alt="Reddit Logo"></img>
            </Link>
            <SearchContainer />
            <NavButton />
        </div>
    )
}

export default Toolbar;