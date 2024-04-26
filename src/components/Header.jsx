import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";



const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navList = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/allItems'}>All Art & craft Items</NavLink>
        </li>
        <li>
            <NavLink to={'/addItem'}>Add Craft Item</NavLink>
        </li>
        <li>
            <NavLink to={'/myItems'}>My Art&Craft List</NavLink>
        </li>
    </>

    return (
        <div className="w-full">
            <div className="navbar bg-base-100 w-11/12 md:w-4/5 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ArtisanAura</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <Tooltip id="my-tooltip" />
                                <div  data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="bottom">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="btn">Log Out</button>
                            </>
                            :
                            <div>
                                <Link to={'/login'}><button className="btn">Log In</button></Link>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;