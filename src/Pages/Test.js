import "../index.css";
import styles from "../style";
import { RiveTest } from "../assets";

const Test = () => (
  <div className="bg-Background max-w-[1920px]">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="flex flex-col justify-center items-center">
          <RiveTest />
        </div>
      </div>
    </div>
  </div>
);

export default Test;
