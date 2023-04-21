import "../index.css";
import styles from "../style";
import { Hero, Footer, VFC, Outside, Mitre, RePicture } from "../components";

const Home = () => (
  <body className="bg-Background">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
        <div className="flex flex-col justify-center items-center">
          <Mitre />
          <RePicture />
          <Outside />
          <VFC />
          <Footer />
        </div>
      </div>
    </div>
  </body>
);

export default Home;
