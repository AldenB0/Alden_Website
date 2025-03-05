import "../index.css";
import styles from "../style";
import { Hero, Footer, VFC, Outside, Mitre, RePicture } from "../components";
import { RiveTest } from "../assets/";

const Home = () => (
  <body className="bg-Background max-w-[1920px]">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
        <div className="flex flex-col justify-center items-center">
          <RiveTest />
          <Mitre />
          <Outside />
          <RePicture />
          <VFC />
          <Footer />
        </div>
      </div>
    </div>
  </body>
);

export default Home;
