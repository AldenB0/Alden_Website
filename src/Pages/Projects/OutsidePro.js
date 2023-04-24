import "../../index.css";
import styles from "../../style";
import { Footer } from "../../components";

const OutsidePro = () => {
  return (
    <div className="bg-Background">
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OutsidePro;
