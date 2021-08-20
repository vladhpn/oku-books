import logoTwitter from '../../images/twitter.svg'
import styles from './styles.module.scss'
import UserPosts from './UserPosts/UserPosts'

const users  = [{
    id: 1,
    photo: 'photo1',
    name: 'fem',
    teg: '@femke',
    logo: logoTwitter,
    text: 'i still think @readngco was my favourite new app of 2020. Such a refreshing experience from goodreads.',
    date: '2:48 PM · Mar 23, 2021'
},
{
    id: 2,
    photo: 'photo2',
    name: 'Joe Russell',
    teg: '@Joebob',
    logo: logoTwitter,
    text:'Readng app is really lovely and simple. It works for people who have barely read in years as well as those who consume more pages than food.',
    date: '1:29 PM · Feb 21, 2021'
}
]

function Twitter() {
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
            <h2 className={styles.title}>
            You're in good company
            </h2>
            <p className={styles.text}>53% of our members have imported their historical data from Goodreads. It's time for a change. Don't loathe your reading list –– liberate it.
            </p>
            </div>
            <UserPosts users={users}/>
            </div>
        </section>
    )
}

export default Twitter;