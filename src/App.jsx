import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { ProfileCard } from "./components/ProfileCard";
import { ChristmasLights } from "./components/ChristmasLights";

import { useState, useEffect, useRef } from "react";

import dustin from "/assets/Dustin.webp";
import eleven from "/assets/Eleven.webp";
import hopper from "/assets/Hopper.webp";
import Jhonathan from "/assets/Jhonathan.webp";
import joyce from "/assets/Joyce.webp";
import lucas from "/assets/Lucas.webp";
import mike from "/assets/Mike.webp";
import nancy from "/assets/Nancy.webp";
import robin from "/assets/Robin.jpg";
import will from "/assets/Will.webp";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventsSection from "./components/EventSection";
import EventDetail from "./components/EventDetail";  // ← make sure this path matches where you put EventDetail

gsap.registerPlugin(ScrollTrigger);

// const totalImages = 5;
const totalImages = location.pathname === "/" ? 5 : 0;

function App() {
  const [numOfImagesLoaded, setNumOfImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const sectionRef = useRef(null);
  const location = useLocation();

  const progress = (numOfImagesLoaded / totalImages) * 100;
  const incrementImagesLoaded = () => {
  setNumOfImagesLoaded((prev) => prev + 1);
};

  // ================= IMAGE LOADER =================

 useEffect(() => {
  if (location.pathname !== "/") {
    setIsLoading(false);
    return;
  }

  if (numOfImagesLoaded >= totalImages) {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }
}, [numOfImagesLoaded, totalImages, location.pathname]);

  // ================= ROUTE CHANGE =================

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolling(false);
    }
  }, [location.pathname]);

  // ================= INITIAL SCROLL =================

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ================= GSAP REFRESH =================

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  // ================= PROFILE CARD ANIMATION =================

  useEffect(() => {
    // Only run the GSAP pin animation on the home route
    if (location.pathname !== "/") return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(".cards", {
        x: -2400,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          onUpdate: () => setIsScrolling(true),
          onScrubComplete: () => setIsScrolling(false),
        },
      });
    });

    mm.add("(max-width: 1023px)", () => {
      const cards = gsap.utils.toArray(".card");

      gsap.set(cards, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cards.length * window.innerHeight * 2}`,
          scrub: 0.5,
          pin: true,
          onUpdate: () => setIsScrolling(true),
          onScrubComplete: () => setIsScrolling(false),
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        tl.fromTo(
          card,
          { y: 300, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.killAll();
      gsap.killTweensOf("*");
      gsap.set(".cards", { clearProps: "all" });
    };
  }, [location.pathname]);

  return (
    <>
      {/* APP ALWAYS MOUNTS */}
      <div
        className={`
          transition-opacity
          duration-700
          ${isLoading ? "opacity-0" : "opacity-100"}
        `}
      >
        <Routes>
          {/* ── Home ── */}
          <Route
            path="/"
            element={
              <div>
                <Hero incrementImagesLoaded={incrementImagesLoaded} />
                <EventsSection />
                <Footer />
              </div>
            }
          />

          {/* ── Event Detail ── */}
          <Route path="/events/:slug" element={<EventDetail />} />
        </Routes>
      </div>

      {/* LOADER OVERLAY */}
      {isLoading && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex flex-col items-center justify-center
            bg-black text-red-500
          "
        >
          {/* Loading Text */}
          <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.45em] font-mono">
            Loading...
          </p>

          {/* Progress Bar */}
          <div className="relative w-[220px] md:w-[320px] h-[2px] bg-red-500/20 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-red-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <p className="mt-5 text-[10px] md:text-xs tracking-[0.3em] font-mono text-white/40">
            {Math.floor(progress)}%
          </p>
        </div>
      )}
    </>
  );
}

export default App;
