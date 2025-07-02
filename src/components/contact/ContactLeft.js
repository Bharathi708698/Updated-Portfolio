import React from "react";
import { RxResume } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { Contact, Resume } from "../../assets/index";

const ContactLeft = () => {
  const handleMailRedirect = () => {
    console.log("Entered");
    window.location.href =
      "mailto:pmbharathi2000@gmail.com?subject=Job Vacancy&body=Hi Bharathi";
  };
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={Contact}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Bharathi M</h3>
        <p className="text-lightText font-normal text-gray-400">
          MERN Stack Developer
        </p>
        {/*<p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
  </p>*/}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <a
            href="https://wa.me/917806980095"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightText hover:text-designColor"
          >
            +91 78xxx xxx95
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <a
            href="mailto:pmbharathi2000@gmail.com"
            className="text-lightText hover:text-designColor"
          >
            pmxxxxxxxxxxxx@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me In</h2>
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
  );
};

export default ContactLeft;
