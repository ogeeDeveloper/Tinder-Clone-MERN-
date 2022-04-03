import styles from "./Navbar.module.css"
import white_logo from "./images/tinder_logo_white.png"
import color_logo from "./images/color_logo.png"

const Navbar = ({minimal,authToken,setShowModal,showModal,setIsSignUp}) => {
  const handleAuthClick = ()=>{
    setShowModal(true)
    setIsSignUp(true)
  }

  return (
    <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src={minimal ? color_logo : white_logo} alt="navbar logo"/>
        </div>
        {!authToken && !minimal && <button onClick={handleAuthClick} className={styles.nav_button} disabled={showModal}>Login</button>}
    </nav>
  )
}

export default Navbar