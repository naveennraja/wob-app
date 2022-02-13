import React from "react";
import { gsap } from "gsap";
import 'animate.css';
import "./index.css"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, FadeOut } from "react-scroll-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import CloudImage1 from "./Images/Page1/Cloud001.png";
import CloudImage2  from "./Images/Page1/Cloud002.png"
import refImage  from "./Images/Page1/ForReffComplete.jpg"
import cloudImage from "./Images/Page1/Layer001.jpg"
import Layer1 from "./Images/Page2/FullImage.jpg"
import Layer2 from "./Images/Page3/forReff.jpg"
import Layer3 from "./Images/Page4/forReff.jpg"
import Layer4 from "./Images/Page5/Background.jpg"
import animateGif from "./Images/Page5/TestWater002.webp"
import Splash from "./Images/Page5/Splash.png"
import Blockers from "./Images/Page5/Blockers.png"


export default () => {
  const { useEffect, useRef } = React;
  const firstFrameRef = useRef();
  const secondRef1 = useRef();
  const secondRef2 = useRef();
  const thirdRef1 = useRef();
  const thirdRef2 = useRef();
  const fourthRef1 = useRef();
  const fourthRef2 = useRef();
  const fourthRef3 = useRef();
  const fourthRef4 = useRef();
  const fourthRef5 = useRef();
  const fourthRef6 = useRef();
  const fourthRef7 = useRef();
  const fourthRef8 = useRef();
  useEffect(() => {
    gsap.fromTo(firstFrameRef.current, 0.5,{scaleX: 2,scaleY: 2},{scaleX: 1,scaleY: 1,opacity:1},"+=1");
    gsap.fromTo(firstFrameRef.current, 0.5,{scaleX: 1,scaleY: 1},{scaleX: 1.5,scaleY: 1.5,opacity:0},"+=2.5");
    gsap.fromTo(secondRef1.current, 0.4,{left: "-5%",opacity:0},{left: "5%",opacity:1},"+=2");
    gsap.fromTo(secondRef2.current, 0.4,{top: "231%",opacity:0},{top: "235%",opacity:1},"+=1");
    gsap.fromTo(thirdRef1.current, 0.4,{right: "-5%",opacity:0},{right: "5%",opacity:1},"+=2");
    gsap.fromTo(thirdRef2.current, 0.4,{top: "318%",opacity:0},{top: "320%",opacity:1},"+=1");
    gsap.fromTo(fourthRef8.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0,right: "50%"},{scaleX: 1,scaleY: 1,opacity:1,right: "47%"},"+=2");
    gsap.fromTo(fourthRef1.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0},{scaleX: 1,scaleY: 1,opacity:1},"+=1");
    gsap.fromTo(fourthRef3.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0},{scaleX: 1,scaleY: 1,opacity:1},"+=0.1");
    gsap.fromTo(fourthRef5.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0},{scaleX: 1,scaleY: 1,opacity:1},"+=0.1");
    gsap.fromTo(fourthRef4.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0},{scaleX: 1,scaleY: 1,opacity:1},"+=0.1");
    gsap.fromTo(fourthRef7.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0},{scaleX: 1,scaleY: 1,opacity:1},"+=0.1");
    gsap.fromTo(fourthRef2.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0},{scaleX: 1,scaleY: 1,opacity:1},"+=0.1");
    gsap.fromTo(fourthRef6.current, 0.5,{scaleX: 1.5,scaleY: 1.5,opacity:0},{scaleX: 1,scaleY: 1,opacity:1},"+=0.1");
  })
  return (
    <ScrollContainer>
      <ScrollPage page={1}>
      <Animator animation={batch(Fade(), MoveOut(0, -50))}>
        <img src={refImage} className="refImage"></img>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), MoveOut(0, -50))}>
        <img src={Layer1} className="refImage"></img>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={batch(Fade(), MoveOut(0, -50))}>
        <img src={Layer2} className="refImage"></img>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), MoveOut(0, -50))}>
        <img src={Layer3} className="refImage"></img>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={batch(Fade(), MoveOut(0, -50))}>
        <img src={Layer4} className="refImage"></img>
        <img src={animateGif} className="gifImage refImage"></img>
        <img src={Splash} className="Splash refImage"></img>
        <img src={animateGif} className="gifImageRight refImage"></img>
        <img src={Splash} className=" SplashRight refImage"></img>
        <img src={Blockers} className=" Blockers refImage"></img>
        <img src={Blockers} className=" BlockersRight refImage"></img>
        </Animator>
        
      </ScrollPage>
      <div className="firstText1" ref={firstFrameRef}>WOB</div>
      <div className="secondText1" ref={secondRef1}>MISSION</div>
      <div className="secondText2" ref={secondRef2}>Creating Technology to empower {"\n"}consumers for making disceming {"\n"}brand choices in alcobev</div>
      <div className="thirdText1" ref={thirdRef1}>Vision</div>
      <div className="thirdText2" ref={thirdRef2}>We encision a community where consumers{"\n"}will build meaningful relationships with{"\n"}alcobev brands in the real and virtual worlds.{"\n"} Through technology, we aspire to continuously{"\n"} innovate and be the partner of choice for{"\n"} our key stakeholders.</div>
      <div className="forthText1" ref={fourthRef1}>We innovate; {"\n"} therefore, we are</div>
      <div className="forthText2" ref={fourthRef2}>We collabarate and {"\n"} build community</div>
      <div className="forthText3" ref={fourthRef3}>if not now, when?{"\n"} if not we, who?</div>
      <div className="forthText4" ref={fourthRef4}>It's ok to fail, as long {"\n"} as it leads you on a {"\n"} patch to success,</div>
      <div className="forthText5" ref={fourthRef5}>Act like it's your {"\n"} own business</div>
      <div className="forthText6" ref={fourthRef6}>We believe you {"\n"} should treat others {"\n"} the way you {"\n"} expect to be treated</div>
      <div className="forthText7" ref={fourthRef7}>Being every good {"\n"} isn't good enough.</div>
      <div className="forthText8" ref={fourthRef8}>VALUES</div>
    </ScrollContainer>
  );
};