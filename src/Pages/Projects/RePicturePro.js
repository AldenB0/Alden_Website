import "../../index.css";
import styles from "../../style";
import { Footer } from "../../components";
import {
  Section,
  Img,
  Highlight,
  Video,
} from "../../components/ProjectElements";

import {
  Heuristic,
  Affinity,
  UserJ,
  Sketches,
  Wire,
  ProfileOld,
  ProjectOld,
  Refinement,
  Stats,
  Input,
  InputStats,
  Quotes,
  UserFlows,
} from "../../assets/img";
import RePictureP from "../../assets/video/RePictureP.mp4";

const takeaways = [
  "Recruiters make speedy decisions when reviewing applicants, there is room for personality later in the process.",
  "The application process may be overwhelming, but there are certain measures students can take to increase their chances of success.",
  "Existing platforms are non-specific and do not encourage clear communication.",
];

const pros = [
  "Page felt professional and easy to scan",
  "Projects were the central focus, which is good for showing skills, experience, and more",
  "Sections and section headers were helpful for skimming",
];

const cons = [
  "Having two kinds of project pages was not intuitive and required cognitive effort to fully understand the relationship between pages",
  "Some participants were unsure of what the project categories meant",
];

const RePicturePro = () => {
  return (
    <div className="bg-Background overflow-x-hidden">
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
            src={RePictureP}
            videoStyle="object-cover mix-blend-lighten md:w-[80%] h-auto min-w-[45rem]"
          />

          <Section
            title="Overview"
            callout="The Challenge"
            text={
              <>
                Our stakeholders came to us to continue the work on redesigning
                their website, which was started a year ago by another capstone
                group. While last year's group focused on building a design
                system and home pages, our task was to continue the design
                process for the pages untouched by the last group and, more
                importantly,{" "}
                <strong>
                  make sure that RePicture was meeting the needs of recruiters.{" "}
                </strong>
              </>
            }
          />

          <Section
            title="Overview"
            callout="The Solution"
            text="We presented to Repicture the redesign of their profile and project pages from the ground up that took into account the many needs and restrictions that recruiters are dealing with during the application screening process. All the while still keeping the design cohesive to their existing design system as well as adding some additional improvements that will integrate seamlessly with the work done before us."
          />

          <Section
            title="Research"
            callout="Kickoff"
            text="First our team needed to familiarize ourselves with the product. Since this was a continuation of an existing effort to redesign the site. We reviewed all of the existing documents as well as performed a heuristic evaluation to identify any major problem areas."
          />

          <Img imgSrc={Heuristic} />

          <Section
            title="Research"
            callout="Understanding Our Users"
            text="From here, we launched directly into user interviews with an interview script designed to understand recruiters and identify exactly what they are looking for when they land on a profile or project page. Next, we consolidated our findings into an affinity diagram."
          />

          <Img imgSrc={Affinity} imgStyle="mix-blend-lighten" />

          <Section text="Our next step was to take our affinity findings to construct user journeys to help us identify areas of opportunities and pull our stakeholders into the mindset of a recruiter visiting their site which helped us convince them of various design decisions we would make later on." />

          <Img imgSrc={UserJ} />

          <Section
            title="Research"
            callout="Findings"
            text="Through this initial research, we identified that the project and profile pages were the key areas that needed improvement. Not only were these pages untouched by last year's group but they are also the pages that recruiters will be interacting with the most based on our research. Additionally, We also solidified 3 key takeaways to keep in mind as we move on to the design process."
            listItems={takeaways}
          />

          <Section
            title="Design"
            callout="Ideation"
            text="With a solid understanding of RePicture's potential niche and the needs of recruiters, we moved into the ideation phase where as a group, we spent time sketching different ways to highlight the student's profile and projects better and improve the usability of the recruiter flows."
          />

          <Img imgSrc={Sketches} />

          <Section text="Based on the sketches, we then created a few Wireframes to give us a nice starting point and help solidify some of the best Ideas that were generated during sketching." />

          <Img imgSrc={Wire} />

          <Section
            title="Design"
            callout="Iteration #1"
            text={
              <>
                From these sketches and wireframes, we concluded that in order
                to optimize RePicture for recruiters, we needed to
                <strong>
                  &nbsp; completely redesign the way the profile and project
                  pages functioned &nbsp;
                </strong>
                to maximize clarity and make the info recruiters wanted to see
                easily accessible. For this phase, I was in charge of designing
                the new project pages and made sure to support each of my design
                decisions with information gathered from user interviews.
              </>
            }
          />

          <Img imgSrc={ProjectOld} imgStyle="max-w-[75%]" />

          <Img imgSrc={ProfileOld} imgStyle="max-w-[75%]" />

          <Section
            title="Testing"
            callout="A/B Testing"
            text="After this, we wanted to make sure that our design decisions matched up with recruiters' expectations so we did a quick round of concept testing to identify if we were on the right track. Our plan for this round of testing was to have our participants walk through both the old and redesigned versions of the site in a randomized order. Making sure to focus our testing script more on the content and general flow than the nitty gritty of usability. This approach helped us clearly identify the pros and cons of our new designs. "
          />

          <Section
            title="Testing"
            callout="Results"
            protitle="Strengths"
            pros={pros}
            constitle="Weaknesses"
            cons={cons}
            text="
            We concluded that while on the right track in terms of visual design and info presented. We had a few lingering issues with clarity around the different project categories as well as the cognitive load required to parse the difference between the two project pages."
          />

          <Highlight
            color="bg-Rose"
            boxH="md:h-48 h-64"
            title="Design Challenge"
            text="How do we make the project pages less confusing without removing functionality?"
          />

          <Section
            title="Design"
            callout="Refinement"
            text="From the A/B testing insights and feedback, we made various improvements to the designs. Most notably, we consolidated the two types of project pages we had previously into one project page and one project widget drastically reducing the cognitive load while retaining the same functionality."
          />

          <Img imgSrc={Refinement} />

          <Section
            title="Testing"
            callout="Usability testing"
            text="With our newfound confidence in our designs, we took them to a more formal usability testing environment where our testing script prompted them to complete tasks within our prototype that we then timed and analyzed for any flaws in our usability."
          />

          <Section title="Testing" callout="Feedback" />

          <Img imgSrc={Quotes} />

          <Section
            title="Testing"
            callout="Results"
            text={
              <>
                Overall, users experienced no major roadblocks resulting in a
                <strong> 100% success rate </strong> for all tasks. The only
                hiccups experienced were on Tasks 2, 5, and 6, which can be
                identified by their high variability. However these issues were
                easily addressed by simple adjustments to buttons styling and UX
                Writing.
              </>
            }
          />

          <Img imgSrc={Stats} imgStyle="mix-blend-lighten mt-[-60px]" />

          <Section
            title="Design"
            callout="User Input"
            text="It was essential for us that our designs fit in seamlessly with their existing site. So we spent the last few weeks of the project creating Prototypes for how the students would input all of the info contained within the profile and project pages to ensure no design work was left up to RePicture."
          />

          <Img imgSrc={Input} />

          <Section
            title="Testing"
            callout="Student Usability Testing"
            text={
              <>
                And in one last effort to make sure we left no stone unturned,
                we ran these prototypes through 7 participants to make sure the
                usability of these input screens was up to standard with the
                rest of our project.
                <br />
                <br />
                Overall the input pages did remarkably well in the user testing.
                The <strong>average SEQ score being 4.3</strong> and a
                <strong> average SUS score of 4.7 </strong>
                on a scale of 1-5, with 1 meaning very difficult and 5 meaning
                very easy. Some specific positive comments were in regards to
                the clear tips & instructions, easy re-ordering of items on the
                profile, and organized layout.
              </>
            }
          />

          <Img imgSrc={InputStats} imgStyle="mix-blend-lighten max-h-[30rem]" />

          <Section
            title="Handoff"
            callout="Prepping for developers"
            text="We also wanted to ensure that when delivering our designs to RePicture that it was easy for developers to understand and implement. So we not only left detailed annotations alongside our final designs that explain functionality and behavior during any potential edge cases. But we also constructed user flow charts for each major section so the architecture was more apparent and easy to understand."
          />

          <Img imgSrc={UserFlows} />

          <Section
            callout="Reflection"
            text={
              <>
                This project taught me the importance of{" "}
                <strong>understanding your audience </strong> at a deep level
                and how to weave that understanding into what you create
                throughout the design process. This is crucial because in
                projects like this, where the bulk of the aesthetic design work
                has been done for you, the need to problem-solve on behalf of
                the audience you are designing for becomes front and center. Due
                to this, it was quite a complex and exciting challenge to take
                on. However, I was confident in our ability because I knew that
                our team was comprised of people who were willing to communicate
                often and were never afraid to ask for help. This proved to be
                an invaluable quality throughout this project and made me
                realize how important a comfortable and organized working
                environment is to a project's success. I am so thankful to have
                had a team that was so hardworking and great to collaborate
                with.
              </>
            }
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RePicturePro;
