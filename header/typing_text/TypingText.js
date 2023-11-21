// import React, { useState, useEffect, useRef } from "react";

// const TypingText = () => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentDisplayText, setCurrentDisplayText] = useState("");
//   const isMounted = useRef(true);

//   useEffect(() => {
//     const textArray = ["freelancer", "graphic designer", "web developer"];
//     const typingInterval = 200;
//     const erasingInterval = 100;
//     const pauseInterval = 1000;

//     let typingTimer;
//     let erasingTimer;

//     const handleTyping = () => {
//       if (!isMounted.current) return; // Check if the component is still mounted

//       if (currentDisplayText === textArray[currentTextIndex]) {
//         setTimeout(() => {
//           setCurrentDisplayText("");
//           const nextIndex = (currentTextIndex + 1) % textArray.length;
//           setCurrentTextIndex(nextIndex);
//         }, pauseInterval);
//       } else {
//         typingTimer = setTimeout(() => {
//           setCurrentDisplayText((prevText) => {
//             const nextChar = textArray[currentTextIndex][prevText.length];
//             return prevText + nextChar;
//           });
//         }, typingInterval);
//       }
//     };

//     const handleErasing = () => {
//       if (!isMounted.current) return; // Check if the component is still mounted

//       if (currentDisplayText === "") {
//         setTimeout(() => {
//           setCurrentTextIndex(
//             (prevIndex) => (prevIndex + 1) % textArray.length
//           );
//         }, pauseInterval);
//       } else {
//         erasingTimer = setTimeout(() => {
//           setCurrentDisplayText((prevText) => prevText.slice(0, -1));
//         }, erasingInterval);
//       }
//     };

//     // Start typing
//     typingTimer = setInterval(handleTyping, typingInterval);

//     // Start erasing when the typing is done
//     erasingTimer = setInterval(
//       handleErasing,
//       textArray.reduce((acc, phrase) => acc + phrase.length, 0) * typingInterval
//     );

//     // Clear timers when the component unmounts
//     return () => {
//       isMounted.current = false; // Set the mounted flag to false
//       clearInterval(typingTimer);
//       clearInterval(erasingTimer);
//     };
//   }, [currentTextIndex, currentDisplayText]);

//   return (
//     <div>
//       <p>{currentDisplayText}</p>
//     </div>
//   );
// };

// export default TypingText;
