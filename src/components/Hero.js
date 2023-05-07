import React from "react";
import "../index.css";
import styles from "../style";
import { Face } from "../assets/";
import { Arrow } from "../assets/";

const Hero = () => (
  <section className="h-screen">
    <div
      className={`flex h-5/6 md:flex-row ${styles.flexCenter} flex-col ${styles.paddingY} `}
    >
      <div className={`flex-col xl:px-0 lg:px-16 px-6`}>
        <div className="flex flex-col w-full">
          <p className="leading-normal font-display font-bold text-3xl text-white xl:text-5xl lg:text-4xl md:text-3xl">
            <span className="inline-block hero-text1">Hello,</span>{" "}
            <span className="inline-block hero-text2">I'm</span>{" "}
            <span className="inline-block hero-text3">Alden.</span> <br />
            <span className="inline-block hero-text4">An</span>{" "}
            <span className="inline-block hero-text5">experience</span>{" "}
            <span className="inline-block hero-text6">designer.</span>
          </p>
          <p className="leading-normal font-display text-white py-3 hero-text7 xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]">
            <span>Recent HCI Masters Graduate with an eye for detail</span>{" "}
            <br />
            <span>and compelling design.</span>
          </p>
        </div>
      </div>
      <div className="hero-text1 relative lg:left-24 md:w-1/2 ">
        <Face />
      </div>
    </div>

    <div className="flex justify-center items-center w-full">
      <div className="absolute bottom-0 arrowFloat">
        <Arrow />
      </div>
    </div>
  </section>
);

export default Hero;
