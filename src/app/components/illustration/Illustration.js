import styles from './illustration.module.scss';
import Image from 'next/image';


export default function Quote() {
    return (
        <div className={styles.illustration}>
            <Image
                src="/images/among-us.gif"
                quality={100}
                fill={true}
                alt="Joyeux anniversaire"
                style={{objectFit:"contain"}}
            />
        </div>
    )
}