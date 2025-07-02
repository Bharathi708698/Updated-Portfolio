import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className="lgl:w-full w-full">
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2023-Present
            </p>
            <h2 className="text-2xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div
            className="mt-14 lgl:mt-1 w-full lgl:w-full h-[400px] border-l-[6px] border-l-black
                 border-opacity-30 flex flex-col gap-10"
          >
            <EducationCard
              title="ZustPe Payments Private Limited"
              subTitle="Fullstack MERN Developer"
              Experience="June 2023 - July 2024"
            />
            <EducationCard
              title="ZustPe Technologies Private Limited"
              subTitle="Fullstack MERN Developer"
              Experience="July 2024 - June 2025"
            />
          </div>
        </div>
        <div className=" lgl:w-full w-full">
          <div className="py-12 font-titleFont">
            {/* <p className="text-sm text-designColor tracking-[4px]">2014-2021</p> */}
            <h2 className="text-2xl md:text-4xl font-bold">
              Technical Knowledge
            </h2>
          </div>
          <div className="mt-14 lgl:mt-1 w-full lgl:w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
            <ExperienceCard subTitle="Built scalable, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js)." />
            <ExperienceCard subTitle="Developed dynamic and responsive front-end interfaces using HTML, CSS, JavaScript, and React.js." />
            <ExperienceCard subTitle="Designed and implemented RESTful APIs with Express.js and Node.js, integrating third-party services where needed." />
            <ExperienceCard subTitle="Managed authentication and authorization flows with JWT and OAuth, using asymmetric encryption for enhanced security." />
            <ExperienceCard subTitle="Designed normalized, efficient database schemas in MongoDB, enforcing constraints to maintain data integrity." />
            <ExperienceCard subTitle="Deployed applications on AWS using EC2 for server hosting, Nginx as a reverse proxy, and S3 for static file storage and delivery." />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
