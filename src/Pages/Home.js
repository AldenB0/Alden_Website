import "../index.css";
import styles from "../style";
import { Hero, Footer, ProjectCard } from "../components";
import mcodeShowcase from "../assets/img/mcodeShowcase.jpg";
import RePictureCover from "../assets/img/RepictureCover.png";
import outsideShowcase from "../assets/video/OutsideShowcase.mp4";

const projects = [
  {
    org: "MITRE",
    title: "mCODE Coverage Checker",
    description:
      "An open-source healthcare dashboard with in-depth and flexible data visualizations.",
    link: "/Coverage_CaseStudy",
    media: { type: "image", src: mcodeShowcase, alt: "mCODE Coverage Checker" },
  },
  {
    org: "UMD",
    title: "Outside",
    description:
      "An app designed to explore fluid interactions and user motivation.",
    link: "/Outside_CaseStudy",
    media: { type: "video", src: outsideShowcase, bg: "bg-Cream" },
  },
  {
    org: "RePicture",
    title: "RePicture",
    description:
      "Redesigning a job search platform to meet the needs of recruiters.",
    link: "/RePicture_CaseStudy",
    media: { type: "image", src: RePictureCover, alt: "RePicture screens" },
  },
];

const Home = () => (
  <div className="bg-Background max-w-[1920px]">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
        <div id="work" className="flex flex-col justify-center items-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
