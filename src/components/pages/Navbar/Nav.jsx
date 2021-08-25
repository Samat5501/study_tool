import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'
import './nav.css'
// import { BiSearch } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import Burger from './Burger';
import DarkModeToggle from '../../DarkMode/DarkModeToggle';


const Nav = () => {

    const state = useSelector(state => state.success)
    return (
            <nav className="navbar navbar__top">
               <div className="navbar__inner">
                  <Link className='home1' to={routes.home}>StudyTool</Link>
               </div>
                <Burger/>
               <div className="navbar_right">
                 {state ? (
                <>
                  <span className="navbar__link1"> <DarkModeToggle/></span>
                       {/* <div to={routes.search} className="navbar__item search"><b><BiSearch/></b>  Search</div> */}
                       <Link className="navbar__link" to='/content'>Getting Started</Link>
                       {/* <Link to={routes.help} className="navbar__link">Need help?</Link> */}
                       <Link className="navbar__link" to={routes.user_profile}>Profile</Link>
                    </>
                 ): (
                   <>
                      <span className="navbar__link1"> <DarkModeToggle/></span>
                      {/* <Link to={routes.help} className="navbar__link">Need help?</Link> */}
                      <Link className="navbar__link" to={routes.login}>Login</Link>
                      <Link className="navbar__link" to={routes.sign_up}>Sign_Up</Link>
                    </> )} 
               </div>
            </nav>
    )
}

export default Nav