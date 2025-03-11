import "../index.css";
import styles from "../style";
import { RiveTest, RiveStar, RiveButton } from "../assets";

const Test = () => (
  <div className="bg-Background max-w-[1920px]">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div>
          <RiveTest />
          <RiveButton />
        </div>
      </div>
    </div>
  </div>
);

export default Test;
