import React from 'react'
import styles from "./auth.module.css"
import loginImg from "../../assets/login.png"
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
const Login = () => {
  return (
    <div className={styles.container}>
      <Card>
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <img src={loginImg} width={400}/>
        </div>
        <div className={styles.rightContainer}>
            <h2>Login</h2>
            
            <form>
              <input type="text" placeholder='Email' required />
              <input type="password" placeholder='Password' required />
              <button className={styles.btn}>Login</button>
              <div>
                <Link to='/reset' >Reset Password</Link>
              </div>
            </form>
            
            <div className={styles.register}>
                <p>Don't have an account? <Link to="/register" style={{fontWeight:"900", cursor:"pointer"}}>Register</Link></p>
                
            </div>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default Login
