import React, { useState } from 'react'
import styles from "./auth.module.css"
import resetImg from "../../assets/forgot.png"
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import { auth } from '../../firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Loader } from '../../components'
const Reset = () => {
   const [email,setEmail] = useState("");
   const [isLoading,setIsLoading] = useState(false);

   const resetPassword = (e)=>{
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for reset link")
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.message);
      });
   }
  return (
    <>
    {isLoading && <Loader />}
    <div className={styles.container}>
      <Card>
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <img src={resetImg} width={400} height={"100%"}/>
        </div>
        <div className={styles.rightContainer}>
            <h2>Reset Password</h2>
            
            <form onSubmit={resetPassword}>
              <input type="text" placeholder='Email' value={email} 
                      onChange={(e)=> setEmail(e.target.value)} required />
              <button type='submit' className={styles.btn}>Reset Password</button>
            </form>
        </div>
      </div>
      </Card>
    </div>
    </>
  )
}

export default Reset
