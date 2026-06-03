import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Hero = ({ incrementImagesLoaded, skipIntro }) => {
  const pinContainerRef = useRef(null);
  const heroImageRef = useRef(null);
  const leftTreesRef = useRef(null);
  const rightTreesRef = useRef(null);
  const mainTextRef = useRef(null);
  const kidsRef = useRef(null);
  const revealWrapperRef = useRef(null);
  const abWrapperRef = useRef(null);
  const creepyBgRef = useRef(null);
  const leftTreeWrapperRef = useRef(null);
  const rightTreeWrapperRef = useRef(null);

  const leftHudRef = useRef(null);
  const rightHudRef = useRef(null);
  // const redGlowRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track image loading and defer GSAP setup
  useEffect(() => {
    const img = heroImageRef.current;
    if (!img) return;

    const onLoad = () => {
      // Defer GSAP setup until next frame after image loads
      requestAnimationFrame(() => {
        setImagesReady(true);
      });
    };

    // If image is already loaded (cached), set immediately
    if (img.complete) {
      onLoad();
    } else {
      img.addEventListener("load", onLoad);
      img.addEventListener("error", onLoad); // Set ready even on error
      return () => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      };
    }
  }, []);

  useEffect(() => {
    const container = pinContainerRef.current;

    if (!container || !imagesReady) return;

    /*
  ==========================================
  INTRO
  ==========================================
  */

    let introTl;

    if (!skipIntro) {
      gsap.set([".hero-topline", ".hero-title", ".hero-bottomline"], {
        yPercent: 100,
      });

      gsap.set(leftTreeWrapperRef.current, {
        x: -80,
      });

      gsap.set(rightTreeWrapperRef.current, {
        x: 80,
      });

      gsap.set(kidsRef.current, {
        y: 100,
      });

      gsap.set(heroImageRef.current, {
        scale: 1.15,
        filter: "blur(0px)",
      });

      introTl = gsap.timeline({
        delay: 1,
      });

      introTl
        .to(
          heroImageRef.current,
          {
            scale: 1,
            filter: "blur(0px)",
            duration: 3,
            ease: "power4.out",
          },
          0,
        )
        .to(
          kidsRef.current,
          {
            y: 0,
            duration: 3,
            ease: "power4.out",
          },
          0,
        )
        .to(
          leftTreeWrapperRef.current,
          {
            x: 0,
            duration: 3,
            ease: "power4.out",
          },
          0,
        )
        .to(
          rightTreeWrapperRef.current,
          {
            x: 0,
            duration: 3,
            ease: "power4.out",
          },
          0,
        )
        .to(
          ".hero-topline",
          {
            yPercent: 0,
            duration: 3,
            ease: "power4.out",
          },
          0,
        )
        .to(
          ".hero-title",
          {
            yPercent: 0,
            duration: 3,
            ease: "power4.out",
          },
          0,
        )
        .to(
          ".hero-bottomline",
          {
            yPercent: 0,
            duration: 3,
            ease: "power4.out",
          },
          0,
        );
    } else {
      gsap.set(heroImageRef.current, {
        scale: 1,
        filter: "blur(0px)",
      });
      gsap.set(kidsRef.current, { y: 0 });
      gsap.set(leftTreeWrapperRef.current, { x: 0 });
      gsap.set(rightTreeWrapperRef.current, { x: 0 });
      gsap.set([".hero-topline", ".hero-title", ".hero-bottomline"], {
        yPercent: 0,
      });
    }

    /*
  ==========================================
  PIN
  ==========================================
  */

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=5000",
      pin: true,
    });

    /*
  ==========================================
  OVERWORLD PARALLAX
  ==========================================
  */

    gsap.to(heroImageRef.current, {
      scale: 1.3,
      y: -50,

      immediateRender: false,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 1,
        end: 1000,
        scrub: 0.8,
      },
    });

    gsap.to(leftTreesRef.current, {
      x: -500,
      y: -50,
      scale: 1.45,

      immediateRender: false,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 1,
        end: 1000,
        scrub: 0.8,
      },
    });

    gsap.to(rightTreesRef.current, {
      x: 500,
      y: -50,
      scale: 1.45,

      immediateRender: false,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 1,
        end: 1000,
        scrub: 0.8,
      },
    });

    gsap.to(mainTextRef.current, {
      y: -350,
      opacity: 0,

      immediateRender: false,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 1,
        end: 1000,
        scrub: 0.8,
      },
    });

    gsap.to(kidsRef.current, {
      y: -150,
      scale: 2,

      immediateRender: false,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 1,
        end: 1000,
        scrub: 0.8,
      },
    });

    gsap.to(revealWrapperRef.current, {
      y: "-100vh",

      immediateRender: false,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 500,
        end: 2700,
        scrub: 0.8,
      },
    });

    /*
  ==========================================
  ABHYUDAY REVEAL
  ==========================================
  */

    gsap.set(".metadata-inner", {
      yPercent: 120,
      clipPath: "inset(0 0 100% 0)",
    });

    gsap.to(".metadata-inner", {
      yPercent: 0,
      clipPath: "inset(0 0 0% 0)",

      stagger: {
        each: 0.08,
      },

      immediateRender: false,

      ease: "power4.out",

      scrollTrigger: {
        trigger: container,
        start: 1900,
        end: 2800,
        scrub: 0.8,
      },
    });

    gsap.set(".ab-letter", {
      y: "-60%",
      opacity: 0,
    });

    gsap.to(".ab-letter", {
      y: "0%",
      opacity: 1,

      stagger: {
        each: 0.08,
      },

      ease: "power4.out",

      scrollTrigger: {
        trigger: container,
        start: 1800,
        end: 3200,
        scrub: true,
      },
    });

    // "ENTER THE UNKNOWN" eyebrow reveals just before the letters
    gsap.set(".ab-eyebrow > span", {
      yPercent: 120,
    });

    gsap.to(".ab-eyebrow > span", {
      yPercent: 0,

      ease: "power4.out",

      scrollTrigger: {
        trigger: container,
        start: 1500,
        end: 2200,
        scrub: true,
      },
    });

    // Signal bar wipes in from left, right after the letters settle
    gsap.set(".ab-signal", {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.to(".ab-signal", {
      scaleX: 1,

      ease: "power2.out",

      scrollTrigger: {
        trigger: container,
        start: 2300,
        end: 2900,
        scrub: true,
      },
    });

    // "10.0" version label reveals
    gsap.set(".ab-version > span", {
      yPercent: 120,
    });

    gsap.to(".ab-version > span", {
      yPercent: 0,

      ease: "power4.out",

      scrollTrigger: {
        trigger: container,
        start: 2800,
        end: 3300,
        scrub: true,
      },
    });

    // CTA button fades up at the end of the section
    gsap.set(".ab-cta", {
      opacity: 0,
    });

    gsap.to(".ab-cta", {
      opacity: 1,
      yPercent: 0,

      scrollTrigger: {
        trigger: container,
        start: 2500,
        end: 3000,
        scrub: true,
      },
    });

    /*
  ==========================================
  UPSIDE DOWN REVEAL
  ==========================================
  */

    gsap.set(creepyBgRef.current, {
      // clipPath: "inset(100% 0 0 0)",
      // yPercent: 8,
      filter: "brightness(0) contrast(1)",
    });

    gsap.to(creepyBgRef.current, {
      // clipPath: "inset(0% 0 0 0)",
      // yPercent: 0,
      filter: "brightness(1) contrast(1)",

      immediateRender: false,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 1200,
        end: 2500,
        scrub: 0.8,
      },
    });

    /*
  ==========================================
  EXIT
  ==========================================
  */

    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 4000,
        end: 5000,
        scrub: 0.8,
      },
    });

    exitTl
      .to(
        abWrapperRef.current,
        {
          scale: 0.9,
          opacity: 0,
          yPercent: -10,
        },
        0,
      )
      .to(
        [leftHudRef.current, rightHudRef.current],
        {
          y: -50,
          opacity: 0,
        },
        0,
      )
      .to(
        creepyBgRef.current,
        {
          yPercent: 0,
          opacity: 0,
        },
        0,
      );
    // .to(
    //   [redGlowRef.current, creepyBgRef.current],
    //   {
    //     opacity: 0,
    //   },
    //   0,
    // );

    return () => {
      if (introTl) introTl.kill();
      exitTl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [skipIntro, imagesReady]);

  return (
    <div>
      <div
        ref={pinContainerRef}
        className="relative bg-black" // Added solid black base backing canvas
        style={{
          height: "100dvh",
          width: "100%",
        }}
      >
        {/* --- SCENE 1: OVERWORLD --- */}
        <div
          ref={revealWrapperRef}
          className="absolute inset-0 overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <img
            ref={heroImageRef}
            src="/hero-bg.jpg"
            onLoad={() => incrementImagesLoaded()}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />

          <div
            ref={leftTreeWrapperRef}
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              width: "auto",
              zIndex: 2,
            }}
            className="
    ml-[-650px]
    sm:ml-[-700px]
    md:ml-[-650px]
    lg:ml-[-600px]
    xl:ml-[-500px]
    2xl:ml-[-350px]
  "
          >
            <img
              ref={leftTreesRef}
              src="/trees-left.png"
              onLoad={() => incrementImagesLoaded()}
              alt=""
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "none",
              }}
            />
          </div>

          <div
            ref={rightTreeWrapperRef}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "auto",
              zIndex: 2,
            }}
            className="
    mr-[-650px]
    sm:mr-[-700px]
    md:mr-[-650px]
    lg:mr-[-600px]
    xl:mr-[-500px]
    2xl:mr-[-350px]
  "
          >
            <img
              ref={rightTreesRef}
              src="/trees-right.png"
              onLoad={() => incrementImagesLoaded()}
              alt=""
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "none",
              }}
            />
          </div>

          <div
            ref={mainTextRef}
            className="absolute top-[10%] w-full text-center text-white px-4"
            style={{ zIndex: 3 }}
          >
            <div className="overflow-hidden">
              <p className="hero-topline text-white uppercase tracking-[0.5em] text-[10px] md:text-xs font-mono">
                THE UPSIDE DOWN
              </p>
            </div>

            <div className="overflow-hidden mt-2">
              <h1
                className="hero-title text-white text-[clamp(2.4rem,10vw,8rem)] sm:text-[clamp(3rem,8vw,8rem)] leading-[0.95] uppercase tracking-[-0.03em] font-black text-center"
                style={{
                  fontFamily:
                    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                }}
              >
                JUST WENT <span>ONLINE</span>
              </h1>
            </div>

            <div className="overflow-hidden mt-2">
              <p className="hero-bottomline text-white uppercase tracking-[0.5em] text-[10px] md:text-xs font-mono">
                MCA, RIT PRESENTS
              </p>
            </div>
          </div>

          <img
            onLoad={() => incrementImagesLoaded()}
            ref={kidsRef}
            src="/strange-kids.png"
            alt="Kids"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[1200px]"
            style={{ zIndex: 4 }}
          />
        </div>

        {/* --- SCENE 2: THE UPSIDE DOWN HUD TERMINAL --- */}
        <div
          className="absolute inset-0 overflow-hidden bg-black"
          style={{ zIndex: 0 }}
        >
          <div
            ref={creepyBgRef}
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 0% 0%, rgba(220, 38, 38, 0.55) 0%, transparent 45%),
                radial-gradient(circle at 100% 0%, rgba(185, 28, 28, 0.55) 0%, transparent 45%),
                radial-gradient(circle at 0% 100%, rgba(185, 28, 28, 0.55) 0%, transparent 45%),
                radial-gradient(circle at 100% 100%, rgba(220, 38, 38, 0.55) 0%, transparent 45%),
                #000000
              `,
            }}
          />

          {/* Red atmospheric glow */}
          {/* <div className="absolute inset-0 z-[2] pointer-events-none">
            <div
              ref={redGlowRef}
              className="
                absolute top-1/2 left-1/2
                w-[320px] md:w-[900px]
                h-[220px] md:h-[500px]
                -translate-x-1/2 -translate-y-1/2
                bg-red-600/15
                blur-[70px] md:blur-[140px]
              "
            />
          </div> */}

          {/* Scanlines layer */}
          <div className="scanlines absolute inset-0 z-[3] pointer-events-none opacity-60 md:opacity-100" />

          {/* Corner HUD - Left */}
          <div
            ref={leftHudRef}
            className="
              absolute top-4 md:top-10 left-4 md:left-10 z-[4]
              text-red-500 font-mono uppercase text-[8px] sm:text-[9px] md:text-sm
              tracking-[0.12em] md:tracking-[0.2em] max-w-[140px] md:max-w-none
            "
          >
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 animate-pulse" />
              LIVE
            </div>
            <p>Tech Fest 10.0</p>
            <p className="mt-1">RIT Network [LIVE]</p>
            <p className="mt-1 text-red-300 break-words">
              Feed: ABHYUDAY_SIGNAL
            </p>
          </div>

          {/* Right HUD */}
          <div
            ref={rightHudRef}
            className="
              absolute top-4 md:top-10 right-4 md:right-10 z-[4]
              text-right font-mono uppercase text-[8px] sm:text-[9px] md:text-sm
              tracking-[0.12em] md:tracking-[0.2em] max-w-[120px] md:max-w-none
            "
          >
            <p>UPSIDE DOWN FREQUENCY</p>
            <p className="text-lg md:text-2xl mt-1 md:mt-2 text-red-500">
              0.11 MHz
            </p>
            <p className="mt-1 md:mt-2">CHANNEL v1.0</p>
          </div>

          {/* Main content viewport block */}
          <div
            ref={abWrapperRef}
            className="
    absolute
    inset-x-0
    top-[72px]
    md:top-1/2
    md:-translate-y-1/2
    z-[5]
    px-4 md:px-6
    text-center
    text-white
    flex
    flex-col
    items-center
    max-h-screen
    md:overflow-visible
  "
          >
            <p className="ab-eyebrow overflow-hidden">
              <span className="mt-24 md:mt-0 text-red-500 uppercase tracking-[0.22em] md:tracking-[0.5em] text-[9px] md:text-sm mb-3 md:mb-6 font-mono block">
                ENTER THE UNKNOWN
              </span>
            </p>

            <h1
              className="flex justify-center flex-nowrap whitespace-nowrap text-[clamp(2.9rem,15vw,16rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white select-none"
              style={{
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              }}
            >
              {"ABHYUDAY".split("").map((letter, index) => (
                <span key={index} className="ab-letter inline-block">
                  {letter}
                </span>
              ))}
            </h1>

            {/* Oscilloscope/Signal Bar */}
            <div className="mt-3 md:mt-6 flex justify-center w-full">
              <div className="ab-signal w-[88vw] md:w-[70vw] max-w-[900px] h-[1px] bg-red-500 relative overflow-hidden">
                <div className="absolute inset-0 waveform" />
              </div>
            </div>

            <p className="ab-version overflow-hidden">
              <span className="mt-3 md:mt-5 text-red-500 uppercase tracking-[0.22em] md:tracking-[0.4em] text-[9px] md:text-sm font-mono block">
                10.0
              </span>
            </p>

            {/* Metadata Cluster wrapper */}
            <div className="mt-5 md:mt-14 w-full max-w-6xl mx-auto">
              {/* Mobile View matrix */}
              <div className="flex flex-col gap-3 md:hidden">
                {[
                  { label: "LOCATION", value: "RIT CAMPUS" },
                  { label: "TRANSMISSION", value: "ACTIVE" },
                  { label: "STATUS", value: "OPEN" },
                  { label: "DATE", value: "June 12 2026" },
                  // { label: "CHANNEL", value: "v1.0" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="metadata-item overflow-hidden border border-red-500/10 bg-black/20 px-4 py-3"
                  >
                    <div className="metadata-inner flex items-center justify-between gap-4">
                      <p className="text-[9px] uppercase tracking-[0.22em] text-red-500/60 font-mono shrink-0">
                        {item.label}
                      </p>

                      <p className="text-[11px] tracking-[0.08em] text-white font-mono text-right">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View grid */}
              <div className="hidden md:grid grid-cols-4 gap-6 text-left font-mono">
                {[
                  { label: "Location", value: "RIT CAMPUS" },
                  { label: "Transmission", value: "ACTIVE" },
                  { label: "Status", value: "OPEN" },
                  { label: "Date", value: "JUNE 12 2026" },
                  // { label: "Channel", value: "v1.0" },
                ].map((item, index) => (
                  <div key={index} className="metadata-item overflow-hidden">
                    <div className="metadata-inner">
                      <p className="text-red-500/60 text-[10px] uppercase tracking-[0.3em]">
                        {item.label}
                      </p>

                      <p className="text-white text-lg tracking-[0.15em] mt-2">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive CTA */}
            <button className="ab-cta mt-5 md:mt-14 border border-red-500 px-8 md:px-12 py-3 md:py-4 text-red-500 uppercase tracking-[0.24em] md:tracking-[0.4em] font-mono text-[10px] md:text-sm hover:bg-red-500 hover:text-black transition-all duration-300">
              ENTER EXPERIENCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
