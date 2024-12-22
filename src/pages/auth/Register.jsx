import React from 'react'
import styles from "./auth.module.css"
import Card from "../../components/card/Card"
import { Link } from 'react-router-dom'
import registerImg from "../../assets/register.png"
const Register = () => {
  return (
    <div className={styles.container}>
      <Card>
      <div className={styles.loginContainer}>
        
        <div className={styles.rightContainer}>
            <h2>Login</h2>
            
            <form>
              <input type="text" placeholder='Email' required />
              <input type="password" placeholder='Password' required />
              <input type="password" placeholder='Confirm Password' required />
              <button className={styles.btn}>Register</button>
              {/* <div>
                <Link to='/reset' >Reset Password</Link>
              </div> */}
            </form>
            
            <div className={styles.register}>
                <p>Already have an account? <Link to="/login" style={{fontWeight:"900", cursor:"pointer"}}>Login</Link></p>
                
            </div>
        </div>
        <div className={styles.leftContainer}>
          <img src={registerImg} width={450}/>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default Register;
