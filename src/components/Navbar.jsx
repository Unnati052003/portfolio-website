import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";

const Navbar = () => {
  const socialIcons = [
    { icon: <FaLinkedin />, link: SOCIAL_LINKS[0] },
    { icon: <FaGithub />, link: SOCIAL_LINKS[1] },
    { icon: <FaInstagram />, link: SOCIAL_LINKS[2] },
    { icon: <FaSquareXTwitter />, link: SOCIAL_LINKS[3] },
  ];

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center hover:cursor-pointer hover:text-cyan-900">
        <h3 className="mx-2 w-10 text-3xl">UW</h3>
      </div>
      {/* all social icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    

        {/* new way to represent all icons with links */}
        {socialIcons.map((socialicon, index) => (
          <a
            key={index}
            href={socialicon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:text-cyan-800 transition-all"
          >
            {socialicon.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
