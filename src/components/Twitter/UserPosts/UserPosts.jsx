import { ReactSVG } from 'react-svg'
import styles from './styles.module.scss'
// className={(id === users.length - 1 ) ? styles.box :  styles.test}
function UserPosts({users}){
    return(
       <div className={styles.ss}>
           {users.map(({id,photo,name,teg, logo,text,date,}) => <div key={id} className={styles.box} >
               <div className={styles.box_container}>
               <div className={styles.box_wrapper}>
                <div className={styles.box_flex}>
               <img src={require(`../../../images/${photo}.png`).default} alt={name} className={styles.image}/>
               <div>
               <p className={styles.name}>{name}</p>
               <p className={styles.teg}>{teg}</p>
               </div>
               </div>
               <div>
               <ReactSVG src={logo}/>
               </div>
               </div>
               <p className={styles.text}>{text}</p>
               <p className={styles.date}>{date}</p>
               </div>
           </div>)}
       </div>
    )
}

export default UserPosts