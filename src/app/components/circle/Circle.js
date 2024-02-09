import styles from './circle.module.scss';
import Image from 'next/image';


export default function Circle() {
    return (
        <div className={styles.circle}>
            <Image
                src="/images/circle.png"
                quality={100}
                fill={true}
                alt="Joyeux anniversaire"
                style={{objectFit:"cover"}}
            />
        </div>
    )
}