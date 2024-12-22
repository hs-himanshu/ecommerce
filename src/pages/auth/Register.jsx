import React, { useState } from 'react'
import styles from "./auth.module.css"
import Card from "../../components/card/Card"
import { Link, useNavigate } from 'react-router-dom'
import registerImg from "../../assets/register.png"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/config"
import { Loader } from '../../components'
import { toast } from 'react-toastify'

const Register = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cPassword,setCPassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  const navigate  = useNavigate();

  const registerUser = (e)=> {
    e.preventDefault();
    console.log(email,password,cPassword);
    if(password !== cPassword){
      toast.error("Password does not match")
    }
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        setIsLoading(false);
        toast.success("Registration successful")
        navigate("/login")
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false)
      });
  }

  return (
    <>
    {isLoading && <Loader />}
    <div className={styles.container}>
      <Card>
      <div className={styles.loginContainer}>
        
        <div className={styles.rightContainer}>
            <h2>Login</h2>
            
            <form onSubmit={registerUser}>
              <input type="text" placeholder='Email' value={email} 
                      onChange={(e)=> setEmail(e.target.value)}
                      required />
              <input type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)} 
                        required 
                      />
              <input type="password"
                        placeholder='Confirm Password'
                        value={cPassword}
                        onChange={(e)=> setCPassword(e.target.value)}
                        required />
              <button type='submit' className={styles.btn}>Register</button>
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
    </>
  )
}

export default Register;
