import Navbar from "../components/Navbar"
import styles from "./Home.module.css"
import { useState } from "react"
import AuthModal from "../components/AuthModal"

const Home = () => {
    const auth=false
    const [showModal, setShowModal] = useState(false)
    const [isSignup, setIsSignUp] = useState(false)

    const handleClick = ()=>{
        console.log("Button clicked")
        setShowModal(true)
        // setIsSignUp(true)
    }
  return (
      <div className={styles.overlay}>
        <Navbar minimal={false} authToken={auth} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp}/>
        <div className="home">
            <h1 className="primary-title">Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {auth ? "Sign out": "Create an Account"}
            </button>
            {showModal && (
                <AuthModal setShowModal={setShowModal} isSignup={isSignup}/>
            )}
        </div>
      </div>
  )
}

export default Home