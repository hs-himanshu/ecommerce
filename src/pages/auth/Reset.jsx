import React from 'react'
import styles from "./auth.module.css"
import resetImg from "../../assets/forgot.png"
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
const Reset = () => {
  return (
    <div className={styles.container}>
      <Card>
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <img src={resetImg} width={400} height={"100%"}/>
        </div>
        <div className={styles.rightContainer}>
            <h2>Reset Password</h2>
            
            <form>
              <input type="text" placeholder='Email' required />
              <button className={styles.btn}>Reset Password</button>
            </form>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default Reset
