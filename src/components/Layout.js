import React from "react";
import Toolbar from "./Toolbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Toolbar/>
            <Outlet/>
        </div>
    )
}

export default Layout;