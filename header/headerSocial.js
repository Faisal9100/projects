import React from "react";
import "./Header.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const headerSocial = () => {
  return (
    <>
    <div className="header-socials">
      <a href="https://linkdin.com" target="#_blank">
        <FaFacebook />
      </a>
      <a href="https://github.com" target="#_blank">
        <FaLinkedin />
      </a>
      <a href="https://facebook.com" target="#_blank">
        <FaGithub />
      </a>

    </div>
    </>
  );
};

export default headerSocial;
