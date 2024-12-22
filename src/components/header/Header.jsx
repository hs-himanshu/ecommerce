import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { auth } from '../../firebase/config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';

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
    const [userName,setUserName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              if(user.displayName == null){
                const uName = user.email.split('@')[0];
                const userName = uName.charAt(0).toUpperCase() + uName.slice(1);
                setUserName(userName);
              }
              else{
                setUserName(user.displayName);
              }
              dispatch(SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName ? user.displayName: userName,
                userId: user.uid,
              }))
            } else {
                dispatch(REMOVE_ACTIVE_USER())
              setUserName("");
            }
          });
    },[dispatch,userName])

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
            <nav >
                {/* <div onClick={toggleMenu} className={ showMenu ? styles.navWrapper : ""}></div> */}
                <ul className={styles.leftLinks}>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ?`${styles.active}`:"" }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive})=> isActive ?`${styles.active}`:"" }>Contact Us</NavLink>
                    </li>
                </ul>
                <div className={styles.headerRight}>
                    <span className={styles.links}>
                        <ShowOnLogout>
                            <Link className={styles.rightLinks}to="/login">Login</Link>
                        </ShowOnLogout>
                        <ShowOnLogin>
                            <a href='#' style={{marginRight:"2rem"}}>
                                <FaUser size={16}/> Hi,{userName}
                            </a>
                        </ShowOnLogin>
                        <ShowOnLogout>
                            <Link className={styles.rightLinks}to="/register">Register</Link>
                        </ShowOnLogout>
                        <ShowOnLogin>
                            <Link className={styles.rightLinks}to="/order-history">My Orders</Link>
                        </ShowOnLogin>
                        <ShowOnLogin>
                            <Link onClick={logOutUser} to="/">Logout</Link>
                        </ShowOnLogin>
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
