import "../index.css";
import styles from "../style";
import { Hero, Footer, VFC, Outside, Mitre } from "../components";

const Home = () => (
  <body className="bg-Background">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Mitre />
        <VFC />
        <Outside />
        <Footer />
        <div style={{ height: "100vh" }}></div>{" "}
        {/* Add an empty div with 100vh height */}
      </div>
    </div>
  </body>
);

export default Home;
