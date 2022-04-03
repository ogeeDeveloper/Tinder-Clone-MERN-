import Navbar from "../components/Navbar"
import styles from "./Home.module.css"

const Home = () => {
    const auth=false

    const handleClick = ()=>{
        console.log("Button clicked")
    }
  return (
      <div className={styles.overlay}>
        <Navbar minimal={false} authToken={auth}/>
        <div className="home">
            <h1>Swipe Right@</h1>
            <button className="primary-button" onClick={handleClick}>
                {auth ? "Sign out": "Create an Account"}
            </button>
        </div>
      </div>
  )
}

export default Home