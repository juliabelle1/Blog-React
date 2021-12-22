import { NavLink, Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1><Link to='/' className="nav-link">Blog</Link></h1>
                <ul className="nav-links">
                    <li><NavLink to='/' className="nav-link">Home</NavLink></li>
                    <li><NavLink to='/blog' className="nav-link">Blog</NavLink></li>
                    <li><NavLink to='/blogs' className="nav-link">All blogs</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
