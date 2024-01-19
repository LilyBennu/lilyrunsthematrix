import { NavLink, Link, useNavigate } from "react-router-dom";

function NavBar() {

    return(
        <nav>
            <div className="navbar-container"> 
                <ul>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/memes" className="nav-link">
                            Memes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}