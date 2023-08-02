import "../../index.css";
import styles from "../../style";
import { Icon } from "@iconify/react";
import { Footer } from "../../components";
import {
  Section,
  Img,
  Highlight,
  Video,
} from "../../components/ProjectElements";
import {
  OldToNew,
  Timeline,
  Persona,
  Goal1,
  Goal2,
  Goal3,
  StyleGuide,
  mcodeQuotes,
  Settings,
  AdvOptions,
} from "../../assets/img";
import mCodeVid from "../../assets/video/mCodeVid.mp4";

const goals = [
  "Deliver compelling visualizations that support various levels of granularity.",
  "Provide a frictionless method for uploading FHIR bundles and connecting FHIR servers.",
  "If possible work in additional features that address concerns presented during user interviews.",
];

const researchGoals = [
  "Within a given team transitioning to mCODE, who specifically would get the most use out of this tool?",
  "Does our existing use case for this tool make sense, and is there more that we should consider?",
];

const Coverage = () => {
  return (
    <div className="bg-Background overflow-x-hidden">
      <div className={`${styles.flexStart}`}>
        <div className="md:max-w-[70%] max-w-[90%] w-full">
          <div className="flex flex-col justify-center text-white pt-20">
            <h2 className=" text-lg font-body font-bold text-Blue">
              Ux Design · Ux Research · Front-end Development
            </h2>
            <h1 className="md:text-6xl text-5xl font-bold font-display">
              mCode Coverage Checker
            </h1>
            <p className="pt-2 font-body">
              The mCode Coverage Checker is a tool designed to enable a given
              health system to understand how much of the mCODE standard they
              support through an intuitive dashboard and data upload system.
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

          <Section
            title="Overview"
            callout="Context"
            text={
              <>
                For this project, I was tasked with turning a bare-bones tech
                demo into a fleshed-out tool by taking it through both the
                research and design stages (as well as playing a role in
                front-end development).{" "}
                <strong>
                  The purpose of this tool is to help health systems understand
                  how much of the mCODE standard they support at any point of
                  the transitionary process from their old EHR system to the new
                  standard.
                </strong>{" "}
                As the soul UX Engineer on a team of 3 developers, this
                presented itself as quite the challenge, but fortunately, this
                provided me with a significant opportunity to broaden my
                expertise and develop my skills at all stages of the UX process.
              </>
            }
          />

          <Img imgSrc={OldToNew} />

          <Section
            title="Overview"
            callout="Goal Setting"
            text="To kick things off, the project team met and solidified a design timeline and 3 primary goals we wanted to satisfy by the end of the design process."
            listItems={goals}
          />

          <Img imgSrc={Timeline} />

          <Section
            title="Research"
            callout="Understanding Our Users"
            text="Starting off there were two main questions we knew we needed to address during the initial research phase."
            listItems={researchGoals}
            text2="These initial questions led us through a round of information-gathering interviews with internal employees and, eventually, more in-depth interviews with external employees from hospitals such as Oncoclínicas. In total, I conducted 12 interviews with individuals involved in various stages of the mCODE transition process. Additionally, we established a cooperative design relationship with 2 of the internal employees, enabling us to check in multiple times throughout the design process, solicit feedback, and make necessary course corrections when needed."
          />

          <Section title="Research" callout="Findings" />

          <Img imgSrc={Persona} />

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
