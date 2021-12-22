import { NavLink } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <div className="home">
                    <button><NavLink to='/blog' className="nav-link">Write your first blog</NavLink></button>
            </div>
        </div>
    )
}
