import "../../index.css";
import styles from "../../style";
import { Footer } from "../../components";
import { Section, Img, Video } from "../../components/ProjectElements";
import landscape from "../../assets/video/landscape vs T.webm";

const OutsidePro = () => {
  return (
    <div className="bg-Background">
      <div className={`${styles.flexStart}`}>
        <div className="md:max-w-[70%] max-w-[90%] w-full">
          <div className="flex flex-col justify-center text-white pt-20">
            <h2 className=" text-lg font-body font-bold text-Green">
              Ux Design · Ux Research
            </h2>
            <p className="md:text-6xl text-5xl font-bold font-display">
              RePicture
            </p>
            <div>
              <div className="flex sm:flex-row flex-col justify-between gap-x-4 my-12">
                <div className="flex flex-col sm:max-w-[15rem] font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Role
                  </h3>
                  <p>Lead Designer, Researcher</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Team
                  </h3>
                  <p>3 Designers, 2 Researchers</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Duration
                  </h3>
                  <p>Nov 2022 - May 2023</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Outcome
                  </h3>
                  <p>
                    Implemented new Profile and Project pages that significantly
                    improved usability for recruters and students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Video
            src={landscape}
            videoStyle="object-cover mix-blend-lighten md:w-[80%] h-auto min-w-[23rem]"
          />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OutsidePro;
