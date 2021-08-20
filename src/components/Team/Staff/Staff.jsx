import styles from './styles.module.scss'

function Staff({teams}){
    return(
        <ul className={styles.list}>
            {teams.map(({id, photo, name, location}) => <li key={id} className={styles.items}>
            <img src={require(`../../../images/${photo}.png`).default} alt={name}/> 
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.location}>{location}</p>
            </li>
            
            )}
        </ul>
    )
}

export default Staff