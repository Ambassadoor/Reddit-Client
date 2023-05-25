import React, {useState} from "react";
import { Link } from 'react-router-dom';

const NavButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav>
            <div onClick={toggleDropdown}>
                <span>V</span>
                <div></div>
            </div>
            {isOpen && (
                <ul>
                    <li>
                        <Link to="/critical_role">Critical Role</Link>
                    </li>
                    <li>
                        <Link to="/space_engineers">Space Engineers</Link>
                    </li>
                    <li>
                        <Link to="/ninth_house">Ninth House</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default NavButton;