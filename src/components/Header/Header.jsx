import logo from '../../images/logo.svg'
import { ReactSVG } from 'react-svg'
import styles from './styles.module.scss'
import buttonStyle from '../../res/buttonStyles/button.module.scss'

function Header(){
    return(
        <header className={styles.header}>
            <div>
        <ReactSVG src={logo} className={styles.logo}/>
        </div>
        <nav>
        <ul className={styles.nav_list}>
            <li className={styles.nav_items}>Pricing</li>
            <li className={styles.nav_items}>Blog</li>
            <li className={styles.nav_items}>Twitter</li>
            <li className={styles.nav_items}>Contact</li>
        </ul>
        </nav>
        <div>
        <button type="button" className={styles.button} >
        <span className={styles.text}>
        Sign in
        </span>
        </button>
        <button type="button" className={buttonStyle.button_active}>
            <span className={buttonStyle.text_active}>
            Join
            </span>
        
        </button>
        </div>
        </header>
    )
}

export default Header;
