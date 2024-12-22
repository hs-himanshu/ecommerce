import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { auth } from '../../firebase/config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";

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
    const [userName,setUserName] = useState("");
    const navigate = useNavigate();


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUserName(user.displayName);
            } else {
              setUserName("");
            }
          });
    },[])


    const toggleMenu = ()=>{
            setShowMenu((prev)=> !prev);
    }
    const hideMenu = ()=>{
        setShowMenu(false);
    }
    const logOutUser = ()=>{
        
        signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("Successfully Loged Out")
        navigate("/login")
        }).catch((error) => {
        toast.error(error.message);
        });
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
                        <a href='#'>
                            <FaUser size={16}/> Hi,{userName}
                        </a>
                        <Link className={styles.rightLinks}to="/register">Register</Link>
                        <Link className={styles.rightLinks}to="/order-history">My Orders</Link>
                        <Link onClick={logOutUser} to="/">Logout</Link>
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
