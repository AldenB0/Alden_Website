import "../../index.css";
import styles from "../../style";
import { Footer } from "../../components";
import {
  Section,
  Img,
  Video,
  Highlight,
} from "../../components/ProjectElements";
import landscape from "../../assets/video/landscape vs T.webm";
import Dataviz from "../../assets/video/Dataviz.webm";
import Motion from "../../assets/video/MotionDesign.webm";
import Rec from "../../assets/video/recLoop.webm";
import {
  Mockup,
  Sketches,
  Color,
  Final,
  Font,
  HomePage,
  Insp,
  Old,
} from "../../assets/img/outside";

const OutsidePro = () => {
  return (
    <div className="bg-Background">
      <div className={`${styles.flexStart}`}>
        <div className="md:max-w-[70%] max-w-[90%] w-full">
          <div className="flex flex-col justify-center text-white pt-20">
            <h2 className=" text-lg font-body font-bold text-Rose">
              UX Design
            </h2>
            <p className="md:text-6xl text-5xl font-bold font-display">
              Outside
            </p>
            <div>
              <div className="flex sm:flex-row flex-col justify-between gap-x-4 my-12">
                <div className="flex flex-col sm:max-w-[15rem] font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Project Type
                  </h3>
                  <p>Masters Project</p>
                </div>
                <div className="flex flex-col sm:max-w-[15rem] sm:pt-0 pt-4 font-body">
                  <h3 className="md:text-lg text-md font-bold opacity-50">
                    Role
                  </h3>
                  <p>UX Designer</p>
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
                  <p>Nov 2021 - May 2022</p>
                </div>
              </div>
            </div>
          </div>

          <Img imgSrc={Mockup} imgStyle={"object-cover w-full max-h-[39rem]"} />

          <Highlight
            color="bg-Green"
            boxH="sm:h-56 h-64 opacity-50"
            text="“A detailed, cute, and fun app filled with aesthetic delight and visually compelling information. 👍”"
            quote="- Dr. Jason Alexander"
          />

          <Section
            title="Overview"
            callout="Introduction"
            text={
              <>
                This was for the final project of INST 702 Visual design. The
                class's premise was centered around utilizing visual design to
                inform and ultimately enhance not only the feel of your products
                but their usability as well. We were given free rein for this
                project as long as we adhered to this core premise and met some
                size requirements. <br /> <br />
                As a response to this, I came up with Outside{" "}
                <strong>
                  a motivational app that encourages people to get out of the
                  house by utilizing data visualizations, recommendations, and
                  an adaptive visual design that becomes more beautiful as the
                  user meets their goals.
                </strong>{" "}
              </>
            }
          />

          <Section
            title="Overview"
            callout="Problem Statement"
            text="For this project, I challenged myself to not only create a product that considers users' needs and addresses a real-world problem but also push myself to incorporate my knowledge of motion design to enrich both the aesthetic and functional dimensions of the product. Through this, I hoped to create something that was not just a joy to look at but had aesthetics that supported the product's usability and helped to boost user motivation."
          />

          <Section
            title="Overview"
            callout="Inspiration"
            text="For this project, I challenged myself to not only create a product that considers users' needs and addresses a real-world problem but also push myself to incorporate my knowledge of motion design to enrich both the aesthetic and functional dimensions of the product. Through this, I hoped to create something that was not just a joy to look at but had aesthetics that supported the product's usability and helped to boost user motivation."
          />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl font-normal">
                  Concept:
                </span>
              </>
            }
            text="The “Outside” app stemmed from a personal need to counterbalance the newfound confinement I and everyone else was experiencing due to lockdown. So I wanted to find a way to infuse myself and others with a fresh surge of motivation."
          />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl font-normal">
                  Visual Design:
                </span>
              </>
            }
            text="The visual design was chiefly inspired by monochromatic vector art; however, while it is very appealing, it can end up looking flat on a small screen. So to alleviate some of these issues, I eventually decided to incorporate noise into the main scene to give it some texture and depth. Both of these visual styles were picked because of their ability to instantly convey a soothing yet fresh feeling on the user, which is a crucial element for a motivational app where the visuals play a key role in the motivation incentives."
          />

          <Img imgSrc={Insp} imgStyle="lg:max-w-[60%] sm:max-w-[80%]" />

          <Section
            title="Design"
            callout="Conceptualization"
            text="As I began the design process, I started out with some rough sketches to help kick-start to process of solidifying the layout and features the app was going to use. During the sketching phase, a strong app framework emerged, focusing on visual feedback and engagement. The home page features an evolving landscape that changes as users progress toward their goals. I also designed simple data vis examples to help distill the user's outdoor activities succinctly. This framework also includes personalized suggestions based on the user's area and habits, gently guiding users to enjoyable experiences."
          />

          <Img imgSrc={Sketches} />

          <Section text="Next, I moved into Mid-fidelity prototypes to bring this framework to life, making the concept tangible and strengthening my mental model of the user journey." />

          <Img imgSrc={Old} />

          <Section
            title="Design"
            callout="Color, Typography & Style"
            text="With a solid mental model of how this tool will function, I shifted my focus to creating its visual identity and fleshing out how the home screen landscape scene will look."
          />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl font-normal">
                  Color Palette
                </span>
              </>
            }
            text="The color palette selection was guided by two primary considerations: capturing the essence of the outdoors and cultivating a calming ambiance. The aim was to avoid the stereotypical enthusiasm associated with outdoor enthusiasts, given the app's focus on motivating those less inclined to go outside. By choosing primary colors reminiscent of nature and pairing them with soothing neutrals and highlights, a harmonious balance was achieved. This palette not only evokes the outdoor experience but also ensures a serene user interface."
          />

          <Img imgSrc={Color} />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl font-normal">
                  Typography
                </span>
              </>
            }
            text="Typography played a vital role, and I opted for Nunito as it perfectly matched the app's soothing and fresh vibe. Being sans-serif, it enhanced clarity and simplicity, while the rounded corners of Nunito added a friendly touch. This choice further supported the app's core goal of motivating and engaging users, contributing to an inviting and user-centered experience, complementing the chosen color palette seamlessly."
          />

          <Img imgSrc={Font} />

          <Section
            callout={
              <>
                <span className="md:text-2xl text-xl font-normal">
                  Stylistic Identity
                </span>
              </>
            }
            text={
              <>
                Next, my focus shifted toward crafting a captivating aesthetic
                that resonated with the app's purpose. My methodology for this
                was to ideate and eventually finalize the evolving landscape
                scene on the home page first and then develop the rest of the UI
                around this centerpiece. I did this to establish a cohesive
                visual foundation early on so the other UI elements couldn't
                trap me in stylistically. <br /> <br /> Throughout the iterative
                evolution of the home page landscape, I encountered a pivotal
                realization: monochromatic vector art alone fell short of
                capturing the impactful and lush ambiance I aimed to convey. So
                to enhance the visual depth, I introduced noise elements for
                subtle shading to add some depth and texture. This pivotal shift
                is what led to the app's final aesthetic.
              </>
            }
          />

          <Video
            src={landscape}
            videoStyle="object-cover mix-blend-lighten md:w-[80%] h-auto min-w-[23rem]"
          />

          <Section
            title="Design"
            callout="Home Page"
            text="From here, I began moving all of the mid-fi prototypes into high-fi, starting with the home page. From the start, I knew that the data viz elements were going to be just as crucial for lasting motivation as our evolving landscape, so I made sure they were as easily accessible to the user as possible. I was particularly inspired by Apple's approach with Screen Time, so I used that as a base and expanded upon it for the users who wanted to dive deeper."
          />

          <Video
            src={Dataviz}
            videoStyle="object-cover lg:w-[60%] h-auto min-w-[23rem]"
          />

          <Section text="I also settled on a motivation framework that rewards the user on a week-to-week basis. This ensures that the barrier for a fully grown home page is short enough for easy habit formation." />

          <Img imgSrc={HomePage} imgStyle="lg:max-w-[70%] sm:max-w-[80%]" />

          <Section
            title="Design"
            callout="Recommendation Pages"
            text="Continuing ahead, my focus shifted to the pages hosting the recommendation system. Here, my primary goal was to streamline the process of park selection, making it as smooth and straightforward as possible. I achieved this by thoughtfully organizing essential information and creating screen transitions that felt both seamless and satisfying. These transitions were intentionally designed to help users differentiate between the two distinct sections of the app. To achieve this, I opted for expanding interactions instead of sliding ones (those are used to move between the recommendations and the home page). This choice served as a visual cue, indicating to users that they were still within the same section of the app. This approach not only simplifies the user's interaction with the recommendation system but also ensures a cohesive and intuitive experience."
          />

          <Video
            src={Rec}
            videoStyle="object-cover lg:w-[80%] h-auto min-w-[30rem]"
          />

          <Section text="On top of this, the ability to review a park was included to help feed the recommendation system and improve the user's overall experience." />

          <Section
            title="Design"
            callout={
              <>
                Motion Design{" "}
                <span className="text-sm opacity-75 font-normal">
                  Tools: Smart Animate, Adobe After Effects, Lottie
                </span>
              </>
            }
            text="Now with the core of the design completed, I went about adding motion design to accomplish two essential tasks. The first is increasing screen comprehension by drawing the user to elements that change from one state to the next. This is most obviously seen in the review progress bar, but it is also utilized in the maps animation. The other task is motivating the user through visual appeal. This is most obviously seen on the main screen, where if the user meets their goal for the week, they will be rewarded with specific elements of the landscape beginning to move."
          />

          <Video
            src={Motion}
            videoStyle="object-cover w-full max-h-[41rem]"
            divStyle="max-w-[60rem] mx-auto"
          />

          <Section title="Design" callout="Final Designs" />

          <Img imgSrc={Final} imgStyle="lg:max-w-[70%] sm:max-w-[80%]" />

          <Section
            title="Conclusion"
            callout="Lessons learned"
            text={
              <>
                In bringing the "Outside" app to life, I embarked on a journey
                that went beyond design—it was a blend of purposeful aesthetics
                and intuitive interactions. From the outset, my goal was clear:
                to create an app that motivates users to embrace outdoor
                activities. Starting with a landscape-driven framework, I
                carefully selected soothing colors and welcoming typography,
                crafting an environment that resonates with users. Additionally,
                motion design added depth and engagement, making the user
                experience even more enriching. <br /> <br /> Throughout this
                process, I gained invaluable insights into the synergy between
                visual elements and user engagement. Learning how to strike the
                right balance between aesthetics and functionality was a key
                takeaway. This project also reinforced the importance of
                empathetic design, as I focused on creating an app that not only
                serves its purpose but also connects with users on a personal
                level. The "Outside" app reflects my journey of creative growth
                and the meaningful impact that visual design and interactive
                experiences can have on encouraging positive behavior change.
              </>
            }
          />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OutsidePro;
