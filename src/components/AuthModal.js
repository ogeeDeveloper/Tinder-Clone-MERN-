import styles from "./AuthModal.module.css"
import { useState } from "react"

const AuthModal = ({setShowModal, isSignUp}) => {
    const [email, setEmail]= useState(null)
    const [password, setPassword]= useState(null)
    const [confirmPassword, setconfirmPassword]= useState(null)
    const [error, setError]= useState(null)

    const handleModalView = ()=>{
        setShowModal(false)
    }

    const handleEmial = (event)=>setEmail(event.target.value)
    const handlePassword = event=>setPassword(event.target.value)
    const handleConfirmPassword = event=>setconfirmPassword(event.target.value)


    const handleFormSubmit=(event)=>{
        event.preventDefault()
        try{
            if(isSignUp && (password !== confirmPassword)){
                setError("Passwords does not match")
            }
            console.log("Make a POST request")
        }catch(error){
            console.log(error.message())
        }
    }
  return (
    <div className={styles.auth_modal}>
        <div className={styles.close_icon} onClick={handleModalView}>X</div>
        <h2>{isSignUp ? "Create Account" : "Sign In"}</h2>
        <p>By clicking Log in, you aggree to our Terms, Learn how we process your data in our Privacy P[olicy and Cookie Policy</p>
        <form onSubmit={handleFormSubmit}>
            <input type="email" id="email" name="email" placeholder="email" required={true} onChange={handleEmial}/>

            <input type="password" id="password" name="password" placeholder="password" required={true} onChange={handlePassword}/>

            {isSignUp && <input type="password" id="password-check" name="password-check" placeholder="confirm password" required={true} onChange={handleConfirmPassword}/>}

            <input className="secondary-button" type="submit"/>
            
            <p>{error}</p>

            <hr/>
            <h2>GET THE APP</h2>
        </form>
    </div>
  )
}

export default AuthModal