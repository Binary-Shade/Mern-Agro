import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scrollAnimation.css";
import {Logo} from '../assets/images/index.js'
import About from "./Content.jsx";
import AnimatedText from "./AnimatedText.jsx";
import Products from "./Product.jsx";
// import CustomerReview from "./CustomerReview.jsx";
import Services from "./Services.jsx";
import Gallery from "./Gallery.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Timeline from "./Timeline.jsx";
import Tours from "./Tours.jsx";
import ContactUs from "./ContactUs.jsx";
gsap.registerPlugin(ScrollTrigger);

const Home = ({ onScrollEnd }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
        onEnter: () => gsap.to(".image-container img", { autoAlpha: 1 }),
        onLeave: () => {
          gsap.to(".image-container img", { autoAlpha: 0 });
          if (onScrollEnd) onScrollEnd();
        },
        onEnterBack: () => gsap.to(".image-container img", { autoAlpha: 1 }),
        onLeaveBack: () => gsap.to(".image-container img", { autoAlpha: 0 })
      },
    });

    timeline
      .to("img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

    return () => {
      timeline.kill();
    };
  }, [onScrollEnd]);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero flex items-center justify-center">
        <div className="absolute top-12 left-28 flex gap-5">
        <img src={Logo} alt="" className="h-10"/>
        <p className="text-white mt-1">Happy nest agro</p>
       </div>
         <AnimatedText />
        </section>
        <About />
        {/* <Gallery /> */}
        <Products />
        <Timeline />
        <Tours />
        <ContactUs />
        <Footer />
      </div>
      <div className="image-container">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
          id="img"
          style={{ opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default Home;
