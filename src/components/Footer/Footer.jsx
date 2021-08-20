import buttonStyle from '../../res/buttonStyles/button.module.scss'
import styles from './styles.module.scss'

function Footer(){
    return(
        <footer className={styles.footer}>
        <h3 className={styles.title}>Ready to join us?</h3>
        <p className={styles.text}>Oku is the companion app for your bookshelf.</p>
        <p className={styles.quote}>Become a member for free to track, rate & review your favourite books with a <br/> community of others.
        </p>
        <div className={styles.box}>
        <button type="button" className={buttonStyle.button_active}>
            <span className={buttonStyle.text_active}>
            Create your account
            </span>
        </button>
        </div>
        <div className={styles.footer_box}>
        <ul className={styles.list}>
            <li className={styles.item}>Pricing</li>
            <li className={styles.item}>Blog</li>
            <li className={styles.item}>Privacy</li>
            <li className={styles.item}>Contact</li>
            <li className={styles.item}>Twitter</li>
        </ul>
        <p className={styles.copyright}>Copyright © 2020 Readng BV.</p>
        </div>
        </footer>
    )
}

export default Footer