import styles from './quote.module.scss';


export default function Quote() {
    return (
        <div className={styles.quote}>
            <p className={styles.content}>I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.</p>
            <p className={styles.author}>- MICHAEL JORDAN</p>
        </div>
    )
}