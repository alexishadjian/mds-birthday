import Header from "./components/header/Header";
import styles from './page.module.scss';


export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.container + " row"}>
        <div className="col3 left">

        </div>
        <div className="col3 right">

        </div>
      </div>
    </main>
  );
}
