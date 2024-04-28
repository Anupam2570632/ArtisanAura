import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";



const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const themeC = document.querySelector('html')
    const [theme, setTheme] = useState(true)
    let themes;

    if (theme) {
        themes = 'light'
    } else {
        themes = 'dark'
    }

    themeC.setAttribute('data-theme', themes)

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
        <div className="w-full shadow-lg fixed top-0 z-10 bg-white">
            <div className="navbar w-11/12 md:w-[85%] mx-auto p-0">
                <div className="navbar-start space-x-4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <h2 className="font-bold text-black text-xl md:text-3xl p-0">Artisan<span className="text-cyan-500">Aura</span></h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div onClick={() => setTheme(!theme)} className="">
                        {
                            theme ? <CiLight className="text-2xl md:text-4xl font-bold text-black" /> : <FaMoon className="text-2xl md:text-4xl font-bold text-black" />
                        }
                    </div>
                    {
                        user ?
                            <>
                                <Tooltip id="my-tooltip" />
                                <div data-tooltip-id="my-tooltip" className="z-10" data-tooltip-content={user.displayName} data-tooltip-place="bottom">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="btn">Log Out</button>
                            </>
                            :
                            <div className="space-x-4">
                                <Link to={'/login'}><button className="btn">Log In</button></Link>
                                <Link to={'/register'}><button className="btn">Register</button></Link>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;