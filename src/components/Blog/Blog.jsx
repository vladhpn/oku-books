/* eslint-disable jsx-a11y/alt-text */
import styles from './styles.module.scss'
   
function Blog(){
    return(
        <section>
            <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}> 
                <h2 className={styles.title}>Track your reading and build <br /> your library</h2> 
                <img className={styles.image} src={require(`../../images/image1.png`).default}/>
                </li>
                <div className={styles.items}>
                <li className={styles.item2}> 
                <img className={styles.image}  src={require(`../../images/image2.png`).default}/>
                <h2 className={styles.title}>Stay on track with a <br/>reading goal</h2> 
                <p className={styles.text}>If you're trying to kickstart a reading habit or just want to challenge <br/> yourself, motivate yourself to stick to it with a <br/> reading goal.</p>
                </li>

                <li className={styles.item2}> 
                <h2 className={styles.title}>Discover your next <br/> favourite book</h2> 
                <p className={styles.text}>Connect with your friends to see what they're reading, or explore <br/>recommendations from the wider community.</p>
                <img className={styles.image}  src={require(`../../images/image3.png`).default}/>
                </li>
                </div>

                <li className={styles.item}> 
                <h2 className={styles.title}>Unlock your personal <br/> statistics</h2> 
                <img className={styles.image}  src={require(`../../images/image4.png`).default}/>
                </li>
                <div className={styles.items}>
                <li className={styles.item2}> 
                <h2 className={styles.title}>Create custom <br /> collections</h2> 
                <img className={styles.image}  src={require(`../../images/image5.png`).default}/>
                </li>

                <li className={styles.item2}> 
                <h2 className={styles.title}>Read community reviews <br/>  or leave one of your own</h2> 
                <img className={styles.image}  src={require(`../../images/image6.png`).default}/>
                </li>
                </div>
            </ul>
           </div>
            
        </section>
    )
}

export default Blog