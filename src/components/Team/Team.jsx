import Staff from './Staff'
import styles from './styles.module.scss'

const teams  = [{
    id: 1,
    photo: 'team1',
    name: 'Yavor Punchev & Fuji',
    location: 'Sofia, Bulgaria'
},
{
    id: 2,
    photo: 'team2',
    name: 'Joe Alcorn',
    location: 'London, United Kingdom'
},
{
    id: 3,
    photo: 'team3',
    name: 'Aziz Firat',
    location: 'Oslo, Norway'
},

]
function Team(){ 
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>
            Meet the team
            </h2>
            <p className={styles.text}>As three friends scattered throughout Europe, we were looking for a way to discover books and share our own recommendations. Nothing cut the mustard, so we took the challenge on. We may not have deep pockets or lots of time, but we're willing to bet we can make up for it by working smart and taking pride in our work.
            </p>

            <Staff teams={teams}/>
        </section>
    )
}

export default Team