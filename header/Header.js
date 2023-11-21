import React, { useState, useEffect, useMemo } from "react";
import "./Header.css";
import Buttons from "../Buttons";
import Me from "../assets/faisal.png";
import HeaderSocial from "../header/headerSocial";

const Header = () => {
  const textArray = useMemo(
    () => ["Freelancer", "Graphic Designer", "Web Developer"],
    []
  );

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentDisplayText, setCurrentDisplayText] = useState("");

  useEffect(() => {
    const typingInterval = 200;
    const erasingInterval = 100;
    const pauseInterval = 1000;

    let typingTimer;
    let erasingTimer;
    let isUnmounted = false;

    const handleTyping = () => {
      if (isUnmounted) return;

      if (currentDisplayText === textArray[currentTextIndex]) {
        setTimeout(() => {
          setCurrentDisplayText("");
          const nextIndex = (currentTextIndex + 1) % textArray.length;
          setCurrentTextIndex(nextIndex);
        }, pauseInterval);
      } else {
        typingTimer = setTimeout(() => {
          setCurrentDisplayText((prevText) => {
            const nextChar = textArray[currentTextIndex][prevText.length];
            return prevText + nextChar;
          });
        }, typingInterval);
      }
    };

    const handleErasing = () => {
      if (isUnmounted) return;

      if (currentDisplayText === "") {
        setTimeout(() => {
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % textArray.length
          );
        }, pauseInterval);
      } else {
        erasingTimer = setTimeout(() => {
          setCurrentDisplayText((prevText) => prevText.slice(0, -1));
        }, erasingInterval);
      }
    };

    // Start typing
    typingTimer = setInterval(handleTyping, typingInterval);

    // Start erasing when the typing is done
    erasingTimer = setInterval(
      handleErasing,
      textArray.reduce((acc, phrase) => acc + phrase.length, 0) * typingInterval
    );

    // Clear timers when the component unmounts
    return () => {
      isUnmounted = true;
      clearInterval(typingTimer);
      clearInterval(erasingTimer);
    };
  }, [currentTextIndex, currentDisplayText, textArray]);

  return (
    <header id="home">
      <div className="main">
        <div className="container header_container"></div>
        <h5>Hello I'm</h5>
        <h1>Faisal Hayat</h1>
        <h2 className="text-primary">{currentDisplayText}</h2>
        <Buttons></Buttons>
        <div className="main-icons">
        <div className="Scroll_down"> Scroll Down</div>

        <div className="me">
          <div className="icons">
            <HeaderSocial/>
          </div>
          <img src={Me} alt="faisal" />
          
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
