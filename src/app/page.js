import Header from "./components/header/Header";
import Quote from "./components/quote/Quote";
import Circle from "./components/circle/Circle";
import Name from "./components/name/Name";
import Illustration from "./components/illustration/Illustration";
import styles from './page.module.scss';


export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.container + " row"}>
        <div className={styles.left + " col3"}>
          <Circle />
          <Name />
        </div>
        <div className={styles.right + " col3"}>
          <Quote />
          <Illustration />
        </div>
      </div>
    </main>
  );
}
