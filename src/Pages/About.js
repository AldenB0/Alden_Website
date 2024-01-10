import "../index.css";
import styles from "../style";
import { Footer } from "../components";
import headshot from "../assets/img/headshotc.jpg";

const About = () => {
  return (
    <div id="About" className="bg-Background max-w-[1920px]">
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col lg:flex-row items-center pt-28 pb-10">
            <div className="w-full lg:w-1/2 p-10 text-white">
              <h1 className="lg:text-4xl text-3xl font-bold font-display ">
                A Quick Introduction.
              </h1>
              <p className="font-body font-bold lg:text-lg text:md py-4">
                I'm a recent graduate from UMD's Human-Computer Interaction
                masters program and have spent the past year working at MITRE as
                a User Experience Engineer. There I was involved in all aspects
                of the product design pipeline doing research, design, and
                front-end development for various projects.
              </p>
              <p className="font-body Lgtext-sm py-2">
                Before this, I completed my Bachelor's in psychology with a
                focus on cognitive science at Texas A&M University. While here,
                I worked at A&M's Telebehavioral Care clinic, where free remote
                therapy was available to people in the area. Here I saw
                emotionally raw individuals become frustrated with the
                telehealth software all too often and in some cases, would give
                up therapy altogether. Seeing these potentially life-altering
                decisions made purely out of frustration with navigating a
                program opened my eyes to the importance of interaction design
                and is why I've dedicated myself to learning the ins and outs of
                this field.
              </p>
              <p className="font-body text-sm py-2">
                Outside of class, I've spent the past 10+ years exploring
                various creative and design mediums as a hobby. Initially, my
                passion was filmmaking, which led to the creation of short films
                and music videos focusing on creative editing and visuals.
                However, as my skills developed, I found myself leaning away
                from being behind the camera and gravitating more towards the
                editing room. Here is where I fell in love with the
                problem-solving elements inherent to design as a whole. The
                challenge of taking a design idea and making it a reality within
                your chosen tool is an immensely satisfying task. Having this
                realization started me on the path I'm on today and has
                subsequently resulted in my love for motion and visual design.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="mx-auto max-w-md ">
                <img
                  className="w-full md:h-auto h-[25rem] rounded-3xl md:max-w-md mb-4 md:mb-0 object-cover"
                  src={headshot}
                  alt="Headshot"
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
