import styles from './styles.module.scss'
import buttonStyle from '../../res/buttonStyles/button.module.scss'

function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.box}>
        <div className={styles.title_box}>
        <h1 className={styles.title}>
            The companion app for your book shelf
        </h1>
        </div>
        <button type="button" className={buttonStyle.button_active}>
            <span className={buttonStyle.text_active}>
            Create your account
            </span>
        </button>

        <p className={styles.p_text}>Already a member? Sign in.</p>
        </div>
        </section>
    )
}

export default Hero