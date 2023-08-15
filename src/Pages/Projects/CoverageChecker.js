import "../../index.css";
import styles from "../../style";
import { Icon } from "@iconify/react";
import { Footer } from "../../components";
import { Section, Img, Video } from "../../components/ProjectElements";
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

const useCases = [
  "A way to analyze the transition from an old EHR system to mCODE through the display of general category percentages and longitudinal data (the original goal).",
  "A way to see how mCODE is impacting the clinician workflow through the monitoring and analysis of individual subcategories.",
];

const Coverage = () => {
  return (
    <div className="bg-Background overflow-x-hidden">
      <div className={`${styles.flexStart}`}>
        <div className="md:max-w-[70%] max-w-[90%] w-full">
          <div className="flex flex-col justify-center text-white pt-20">
            <h2 className=" text-lg font-body font-bold text-Blue">
              UX Design
            </h2>
            <h1 className="md:text-6xl text-5xl font-bold font-display">
              mCODE Coverage Checker
            </h1>
            <p className="pt-2 font-body">
              A tool designed to enable a given health system to understand how
              much of the mCODE standard* they support through an intuitive
              dashboard and data upload system. <br /> <br />{" "}
              <span className="opacity-75">
                *An open-source standard for Oncology health data positioning
                itself to replace the current EHR systems{" "}
              </span>
            </p>
            <div>
              <div className="flex sm:flex-row flex-col justify-between gap-x-4 my-12">
                <div className="flex flex-col sm:max-w-[15rem] font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Role
                  </h3>
                  <p>Designer</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Team
                  </h3>
                  <p>Solo</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Duration
                  </h3>
                  <p>February 2021 - June 2022</p>
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
            videoStyle="object-cover mix-blend-lighten md:w-[80%] h-auto min-w-[23rem]"
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

          <Section
            title="Research"
            callout="Findings"
            text={
              <>
                <span className="text-xl">
                  {" "}
                  <strong>Users:</strong>{" "}
                </span>{" "}
                <br />
                Because of the information-gathering interviews I was able to
                identify that our specific user for this tool would be
                <strong> Clinical Informaticists </strong>
                or for smaller hospitals the clinician working on the
              </>
            }
          />

          <Img imgSrc={Persona} />

          <Section
            text={
              <>
                <span className="text-xl">
                  {" "}
                  <strong>Use Cases:</strong>{" "}
                </span>{" "}
                <br />
                After conducting interviews with 3 Clinical Informaticists and 4
                clinicians with the goal of identifying problem areas within the
                current transition workflow. I was able to verify our initial
                use case as well as establish a new use case to improve the
                usefulness of the tool for the user.
              </>
            }
            listItems={useCases}
          />

          <Section
            title="Design"
            callout="Establishing Required Features"
            text="Now with multiple user interviews under our belt, we were able to establish what specific features we needed in order to address the needs of the clinical informaticists as well as satisfy the 3 goals we set out to accomplish in the beginning."
          />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl">
                  Goal 1: Deliver compelling visualizations that support various
                  levels of granularity.
                </span>
              </>
            }
            text="In the overview section, users get an overall view of their coverage, along with details for each of the 6 mCODE resources. Moving on to the analysis section, users can explore each resource's subcategories to identify potential data gaps. This section also offers a space for tracking longitudinal data, helping users monitor progress and identify any issues with clinician input or burden.

            By default, the analysis section displays overall data. However, if the user selects any specific resource, the section will update to show data relevant only to that resource."
          />

          <Img imgSrc={Goal1} />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl">
                  Goal 2: Provide a frictionless method for uploading FHIR
                  bundles and connecting FHIR servers
                </span>
              </>
            }
            text="On the upload page, users are presented with an interface to drag & drop or browse their files for FHIR bundles and a place to input and connect with FHIR servers. Below this, users have the ability to track their past files and connected servers. This section is not only helpful for reconnecting to previous servers and keeping a record of uploaded files but also provides a way to view the raw JSON code. This feature enables users to identify specific files quickly and troubleshoot any potential errors encountered during data analysis."
          />

          <Img imgSrc={Goal2} />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl">
                  Goal 3: If possible, work in additional features that address
                  concerns presented during user interviews.
                </span>
              </>
            }
            text="Finally, we've added a rankings section with detailed filters. This feature helps users identify their most significant problem areas while also addressing concerns about distinguishing errors in mCODE implementation from clinician input errors. Additionally, we've included a file-switching system with a fuzzy search capability, allowing users to easily compare older files with new ones."
          />

          <Img imgSrc={Goal3} />

          <Section
            title="Design"
            callout="Hand-Off"
            text="Now that the design is in a semi-finalized state the development process was ready to begin so in order to catch everyone up to speed and make the transition as simple as possible a style guide was created that outlined simple things like font, color icons, and more complex topics such how the spacing should work and how the page behaves during resizing."
          />

          <Img imgSrc={StyleGuide} />

          <Section
            text="On top of this, I also added a tailwind config file and installed the required plugins to the codebase so we could be confident that all of the plugins met the design requirements and that using the correct colors, fonts, drop shadows, etc…  would be as simple as possible.
            "
          />

          <Section
            title="Research"
            callout="User Testing"
            text={
              <>
                After some time in development, we had a functioning{" "}
                <a
                  href="https://mcode.github.io/mcode-coverage-checker/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline font-bold"
                >
                  web app
                </a>
                . However, before we started finalizing things, we wanted to
                take this tool back to the users to ensure it behaves the way we
                planned when it’s in actual use.
                <br /> <br />
                For this stage, we were only able to secure 2 individual user
                tests and 1 product demo in front of 20 people. Meaning
                unfortunately no usable statistics can be derived, but much of
                the feedback and problem areas identified can be used to
                significant effect.
              </>
            }
          />

          <Img imgSrc={mcodeQuotes} />

          <Section
            title="Design"
            callout="User Requested Features"
            text="From this last round of user testing, we were able to solidify 2 additional changes that needed to be made before the tool could be used in the field."
          />

          <Section
            callout={
              <>
                <span className="md:text-3xl text-xl">
                  1. Advanced options for adding FHIR servers{" "}
                </span>
              </>
            }
            text="Here we added the ability for people to input the server keys through request headers and the ability to query specific patients."
          />

          <Img imgSrc={AdvOptions} />

          <Section
            callout={
              <>
                <span className="md:text-3xl text-xl">
                  2. Users needed a way to filter what data the system did and
                  didn’t scan for.
                </span>
              </>
            }
            text="Lastly, we received feedback about organizations who only partially adopt mCODE. These options allow them to select specific categories for scanning to avoid low percentage values despite having 100% coverage for the parts they use."
          />

          <Img imgSrc={Settings} imgStyle="lg:max-w-[50%] sm:max-w-[80%]" />

          <Section
            title="conclusion"
            callout="Lessons Learned"
            text={
              <>
                In conclusion, the mCODE coverage checker project has been an
                incredibly meaningful journey for me, as it offered a unique
                opportunity to navigate the entire UX process independently.
                From design to research and user testing, I was able to take
                ownership of every decision and aspect of the project. This
                autonomy allowed me to make mistakes and learn from them in
                invaluable ways, contributing to my growth as a designer.
                <br /> <br />
                Furthermore, being actively involved in both the design and
                development aspects of the project provided me with a
                comprehensive understanding of the hand-off process. Witnessing
                firsthand how designs are translated into a functional product
                enabled me to identify potential friction points and
                inefficiencies, strengthening my appreciation for the necessary
                collaboration between designers and developers. This newfound
                insight has equipped me to create more seamless and cohesive
                experiences in future projects, benefiting both sides of the
                hand-off.
                <br /> <br />I am grateful for the opportunity to have taken
                this project from inception to completion, as it has deepened my
                passion for creating meaningful and user-centric solutions. The
                sense of ownership and accomplishment derived from working on an
                open-source health product has amplified the significance of my
                contribution. This experience has not only enriched my
                professional skills but has also left a lasting personal impact,
                solidifying my commitment to pursuing impactful UX design work.
              </>
            }
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
