import styles from "./Navbar.module.css"
import white_logo from "./images/tinder_logo_white.png"
import color_logo from "./images/color_logo.png"

const Navbar = ({minimal,authToken}) => {
  return (
    <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src={minimal ? color_logo : white_logo} alt="navbar logo"/>
        </div>
        {!authToken && !minimal && <button className={styles.nav_button}>Login</button>}
    </nav>
  )
}

export default Navbar