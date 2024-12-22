import React, { useState } from 'react'
import styles from "./auth.module.css"
import loginImg from "../../assets/login.png"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { Loader } from '../../components'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const loginUser = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          toast.success("Login successful");
          setIsLoading(false);
          navigate("/")
        })
        .catch((error) => {
          setIsLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

  return (
    <>
    {isLoading && <Loader />}
    <div className={styles.container}>
      <Card>
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <img src={loginImg} width={400}/>
        </div>
        <div className={styles.rightContainer}>
            <h2>Login</h2>
            
            <form onSubmit={loginUser}>
              <input type="text" placeholder='Email' value={email} 
                      onChange={(e)=> setEmail(e.target.value)} required />
              <input type="password" placeholder='Password' value={password} 
                        onChange={(e)=> setPassword(e.target.value)}  required />
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
    </>
  )
}

export default Login
