import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/logo-small.png'
import Register from './../register/Register';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('successful sign out')
            })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                console.log('failed to sign out .stay here. dont leave me alone')
            })
    }

    const links = <>
        <li><NavLink to="/"><button  className='btn btn-success'>Home</button></NavLink></li>
        <li><NavLink to="/"><button  className='btn btn-secondary'>Home</button></NavLink></li>
        <li><NavLink to="/"><button  className='btn btn-primary'>Home</button></NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-12' src={logo} alt="" />
                    <h3 className="text-3xl">Job Portal</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSignOut} className="btn btn-accent">Sign out</button>
                    </> : <>
                        <Link to="/register">
                            <button className='btn btn-info'>Register</button>
                        </Link>
                        <Link to="/signIn">
                            <button className="btn btn-accent ml-4">Sign In</button>
                        </Link>
                    </>
                }

                {/* <Link to='/register'><button className='btn btn-accent'>Register</button></Link> */}
                {/* <Link to='/signin'><button className='btn btn-info'>Sign in</button></Link> */}

            </div>
        </div>
    );
};

export default Navbar;