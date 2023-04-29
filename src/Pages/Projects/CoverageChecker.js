import "../../index.css";
import styles from "../../style";
import { Footer } from "../../components";
import { Section, Img, Highlight } from "../../components/ProjectElements";

import mcodeShowcase from "../../assets/img/mcodeShowcase.png";

const Coverage = () => {
  return (
    <div className="bg-Background overflow-x-hidden">
      <div className={`${styles.flexStart}`}>
        <div className="md:max-w-[70%] max-w-[90%] w-full">
          <div className="flex flex-col justify-center text-white pt-20">
            <h2 className=" text-lg font-body text-Blue">
              Ux Research · Ux Design · Front-end Development
            </h2>
            <p className="lg:text-6xl md:text-5xl text-3xl font-bold font-display">
              mCode Coverage checker
            </p>
            <div>
              <div className="flex flex-row justify-between gap-x-4 my-12">
                <div className="flex flex-col max-w-[15rem] font-body">
                  <h3 className="text-lg font-bold opacity-50">Role</h3>
                  <p>I did X, Y, and Z.</p>
                </div>
                <div className="flex flex-col max-w-[15rem] font-body">
                  <h3 className="text-lg font-bold opacity-50">Team</h3>
                  <p>It was just me and the product owner.</p>
                </div>
                <div className="flex flex-col max-w-[15rem] font-body">
                  <h3 className="text-lg font-bold opacity-50">Duration</h3>
                  <p>The project lasted 4 months.</p>
                </div>
                <div className="flex flex-col max-w-[15rem] font-body">
                  <h3 className="text-lg font-bold opacity-50">Outcome</h3>
                  <p>The project was a success and achieved its goals.</p>
                </div>
              </div>
            </div>
          </div>
          <Img imgSrc={mcodeShowcase} imgStyle={`${styles.nImg}`} />
          <Highlight
            color="bg-Blue"
            title="Purpose"
            text="lots of cool text and whatnot"
          />
          <Section
            title="I am a title"
            callout="I am a callout I am a callout I am a callout I am a callout"
            text="lots of text about stuff and whatnot lorum ibsum ha ha thats the designer thingg"
            imgSrc={mcodeShowcase}
            imgStyle={`${styles.nImg}`}
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
