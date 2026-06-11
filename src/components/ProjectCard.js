import React from "react";
import { Link } from "react-router-dom";
import { Video } from "./ProjectElements";

const ProjectCard = ({ org, title, description, link, media }) => {
  return (
    <div className="w-5/6 sm:py-16 py-10">
      <Link to={link}>
        <div className="text-white py-3">
          <h3 className="text-white opacity-70 font-body italic text-base">
            {org}
          </h3>
          <h1 className="md:text-4xl text-3xl font-bold font-display">
            {title}
          </h1>
          <h2 className="md:text-base text-sm font-bold font-body opacity-50 pt-2">
            {description}
          </h2>
        </div>

        {media.type === "video" ? (
          <Video
            src={media.src}
            divStyle={`sm:h-[30rem] h-[25rem] video ${media.bg ?? ""}`}
            videoStyle="object-cover w-full h-auto min-w-[60rem] max-w-[76rem]"
          />
        ) : (
          <div className="sm:h-[30rem] h-[25rem] rounded-3xl overflow-hidden flex justify-center video">
            <img
              src={media.src}
              alt={media.alt ?? title}
              className="object-cover w-full h-auto min-w-[60rem]"
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProjectCard;
