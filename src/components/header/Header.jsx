import React, { useState } from 'react'
import styles from "./header.module.css"
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const logo = (
    <div className={styles.logo}>
        <Link to="/">
            <h2>
                e<span>Com</span>
            </h2>
        </Link>
    </div>
)
const cart = (
    <span className={styles.cart}>
        <Link className={styles.cartLink} to="/cart">
            <FaShoppingCart size={20}/>
            <p>0</p>
        </Link>
    </span>
)

const Header = () => {
    const [showMenu,setShowMenu] = useState(false);
    const toggleMenu = ()=>{
            setShowMenu((prev)=> !prev);
    }
    const hideMenu = ()=>{
        setShowMenu(false);
    }
  return (
    <header>
        <div className={styles.header}>
            {logo}
            <nav className={showMenu ? `${styles.showNav}`:`${styles.hideNav}`}>
                {/* <div onClick={toggleMenu} className={ showMenu ? styles.navWrapper : ""}></div> */}
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ?`${styles.active}`:"" }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive})=> isActive ?`${styles.active}`:"" }>Contact Us</NavLink>
                    </li>
                </ul>
                <div className={styles.headerRight}>
                    <span className={styles.links}>
                        <Link className={styles.rightLinks}to="/login">Login</Link>
                        <Link className={styles.rightLinks}to="/register">Register</Link>
                        <Link className={styles.rightLinks}to="/order-history">My Orders</Link>
                    </span>
                    {cart}
                </div>
                
            </nav>
            {/* mobile menu */}
            {/* <div className={styles.menuIcon}>
                {cart}
                <GiHamburgerMenu size={28} onClick={toggleMenu} color="black"/>
            </div> */}
        </div>
    </header>
  )
}

export default Header
