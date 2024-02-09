import styles from './header.module.scss';


export default function Header() {
    return (
        <header className={styles.header}>
            <span>Citation et anniversaire</span>
            <span>Mercredi 8 mars 2023</span>
        </header>
    )
}