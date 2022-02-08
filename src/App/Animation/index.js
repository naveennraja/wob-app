import React from "react";
import { gsap } from "gsap";
// import "./index.css"
import "./index.css"

import CloudImage1 from "./Images/Page1/Cloud001.png";
import CloudImage2  from "./Images/Page1/Cloud002.png"
import refImage  from "./Images/Page1/ForReffComplete.jpg"
import cloudImage from "./Images/Page1/Layer001.jpg"
import Layer1 from "./Images/Page2/FullImage.jpg"
import Layer2 from "./Images/Page1/Layer002.png"
import Layer3 from "./Images/Page1/Layer003.png"
import Layer4 from "./Images/Page1/Layer004.png"
import Layer5 from "./Images/Page1/Layer005.png"

export default ()=> {
  const { useEffect, useRef } = React;
  const firstFrameRef = useRef();
  const secondRef1 = useRef();
  const secondRef2 = useRef();
  useEffect(() => {
    gsap.fromTo(firstFrameRef.current, 0.5,{scaleX: 2,scaleY: 2},{scaleX: 1,scaleY: 1,opacity:1},"+=1");
    gsap.fromTo(firstFrameRef.current, 0.5,{scaleX: 1,scaleY: 1},{scaleX: 1.5,scaleY: 1.5,opacity:0},"+=2.5");
    gsap.fromTo(secondRef1.current, 0.4,{left: "-5%",opacity:0},{left: "5%",opacity:1},"+=2.5");
    gsap.fromTo(secondRef2.current, 0.4,{top: "231%",opacity:0},{top: "235%",opacity:1},"+=1");
  })
  return (
  <>
    <div className="cloudImage">
      <img src={refImage} className="refImage"></img>
      <div className="firstText1" ref={firstFrameRef}>WOW</div>
      <img src={Layer1} className="refImage"></img>
      <div className="secondText1" ref={secondRef1}>MISSION</div>
      <div className="secondText2" ref={secondRef2}>Creating Technology to empower {"\n"}consumers for making disceming {"\n"}brand choices in alcobev</div>
    </div>
  </>
  );
};
//export default App;