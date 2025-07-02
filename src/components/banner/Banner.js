import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { RxResume } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { MyProfile, Resume } from "../../assets/index";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Enthusiastic Developer.",
      "Full Stack Developer.",
      "MERN Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont border-b-[1px]
    border-b-black"
    >
      <div className="w-full lgl:w flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-normal">Welcome</h4>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
            Hi, I'm {"  "}
            <span className="text-designColor ">BHARATHI M</span>
          </h1>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Hi, I'm Bharathi M — a Mechanical Engineering graduate turned Full-Stack
            Developer with 2+ years of professional experience in the MERN Stack
            (MongoDB, Express.js, React, and Node.js). What began as a
            self-taught journey has evolved into a strong foundation in building
            scalable, responsive web applications from the ground up.
          </p>
          <p>
            Over the past two years, I've worked on real-world projects that
            combine performance with user-focused design. From developing
            RESTful APIs and dynamic front-end interfaces to deploying
            applications on the cloud, I take pride in delivering solutions that
            are both functional and impactful.
          </p>
          <p>
            I also bring hands-on experience with server management and cloud
            deployment, including: AWS EC2 for server, hosting and scaling Nginx
            for reverse proxy and load balancing and S3 for static file storage and
            content delivery
          </p>
          <p>
            For me, coding is more than syntax—it's a blend of creativity and
            logic that drives innovation. I'm passionate about writing clean,
            maintainable code and always eager to explore new tools and
            technologies that push boundaries.
          </p>
        </div>
        <div>
          <h2 className="text-base font-titleFont uppercase mb-4">
            Find Me In
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a target="_blank" href={Resume}>
                <RxResume />
              </a>
            </span>
            <span className="bannerIcon">
              <a target="_blank" href="https://github.com/Bharathi708698">
                <BsGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/*<div className="w-full lgl:w-1/2 flex justify-center items-center relative" >
        <img className=" z-10 rounded-3xl" src={MyProfile} alt="MyProfile" />
  </div>*/}
    </section>
  );
};

export default Banner;
