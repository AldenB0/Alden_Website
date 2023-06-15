import "../../index.css";
import styles from "../../style";
import { Icon } from "@iconify/react";
import { Footer } from "../../components";
import { Video } from "../../components/ProjectElements";
import mCodeVid from "../../assets/video/mCodeVid.mp4";

const Coverage = () => {
  return (
    <div className="bg-Background overflow-x-hidden">
      <div className={`${styles.flexStart}`}>
        <div className="md:max-w-[70%] max-w-[90%] w-full">
          <div className="flex flex-col justify-center text-white pt-20">
            <h2 className=" text-lg font-body font-bold text-Blue">
              Ux Design · Ux Research · Front-end Development
            </h2>
            <p className="md:text-6xl text-5xl font-bold font-display">
              mCode Coverage Checker
            </p>
            <div>
              <div className="flex sm:flex-row flex-col justify-between gap-x-4 my-12">
                <div className="flex flex-col sm:max-w-[15rem] font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Role
                  </h3>
                  <p>Lead Designer, Lead Researcher, Front-end dev</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Team
                  </h3>
                  <p>1 UX Designer, 3 Developers</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Duration
                  </h3>
                  <p>June 2022 - June 2023</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Completed Project
                  </h3>
                  <a
                    href="https://github.com/mcode/mcode-coverage-checker"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center pb-1"
                  >
                    <Icon
                      icon="mdi:github"
                      style={{ width: "30px", height: "30px" }}
                      className="icon pr-2"
                    />
                    Github
                  </a>
                  <a
                    href="https://mcode.github.io/mcode-coverage-checker/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center "
                  >
                    <Icon
                      icon="bi:fire"
                      style={{ width: "30px", height: "30px" }}
                      className="icon pr-2"
                    />
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Video
            src={mCodeVid}
            videoStyle="object-cover mix-blend-lighten md:w-[80%] h-auto min-w-[45rem]"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Coverage;

/*  
Section:
  title,
  callout,
  text,

Img:
  imagSrc,
  altText,
  imgStyle,

Highlight:
  color, 
  title, 
  text
*/
