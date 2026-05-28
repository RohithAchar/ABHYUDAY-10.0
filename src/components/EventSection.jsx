import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

  const events = [
  {
    id: "01",
    slug: "search-for-will",
    title: "SEARCH FOR WILL",
    displayTitle: "Treasure Hunt",
    subtitle: "HUNT. SOLVE. SURVIVE.",
    desc: "Crack clues and race against time.",
    date: "15 Feb 2026",
    time: "10:00 AM",
    image: "/assets/Dustin.webp",
  },

  {
    id: "02",
    slug: "shadow-protocol",
    title: "SHADOW PROTOCOL",
    displayTitle: "Cyber Event",
    subtitle: "HACK. DEFEND. DOMINATE.",
    desc: "Test your cybersecurity skills.",
    date: "15 Feb 2026",
    time: "11:00 AM",
    image: "/assets/Eleven.webp",
  },

  {
    id: "03",
    slug: "the-hawkins-design-lab",
    title: "THE HAWKINS DESIGN LAB",
    displayTitle: "UI / UX",
    subtitle: "DESIGN. CREATE. IMPRESS.",
    desc: "Build stunning user experiences.",
    date: "15 Feb 2026",
    time: "12:00 PM",
    image: "/assets/Lucas.webp",
  },

  {
    id: "04",
    slug: "vecnas-arena",
    title: "VECNAS ARENA",
    displayTitle: "BGMI",
    subtitle: "SURVIVE. FIGHT. WIN.",
    desc: "Dominate the battleground.",
    date: "15 Feb 2026",
    time: "1:00 PM",
    image: "/assets/Will.webp",
  },

  {
    id: "05",
    slug: "dustins-desk",
    title: "DUSTINS DESK",
    displayTitle: "IT Quiz",
    subtitle: "THINK. ANSWER. WIN.",
    desc: "Challenge your technical knowledge.",
    date: "15 Feb 2026",
    time: "2:00 PM",
    image: "/assets/Hopper.webp",
  },

  {
    id: "06",
    slug: "the-mind-flayer",
    title: "THE MIND FLAYER",
    displayTitle: "Ideathon",
    subtitle: "IMAGINE. INNOVATE. PITCH.",
    desc: "Turn ideas into impactful solutions.",
    date: "15 Feb 2026",
    time: "3:00 PM",
    image: "/assets/Nancy.webp",
  },

  {
    id: "07",
    slug: "code-red",
    title: "CODE RED",
    displayTitle: "Coding",
    subtitle: "CODE. DEBUG. CONQUER.",
    desc: "Compete in intense coding battles.",
    date: "15 Feb 2026",
    time: "4:00 PM",
    image: "/assets/Steve.webp",
  },

  {
    id: "08",
    slug: "reel-verse",
    title: "REEL VERSE",
    displayTitle: "Reels Making",
    subtitle: "SHOOT. EDIT. CREATE.",
    desc: "Create cinematic reels.",
    date: "15 Feb 2026",
    time: "5:00 PM",
    image: "/assets/Murray.webp",
  },

  {
    id: "09",
    slug: "the-russian-code",
    title: "THE RUSSIAN CODE",
    displayTitle: "Tech Puzzle",
    subtitle: "SOLVE. THINK. ESCAPE.",
    desc: "Decode puzzles and unlock mysteries.",
    date: "15 Feb 2026",
    time: "6:00 PM",
    image: "/assets/Steve.webp",
  },

  {
    id: "10",
    slug: "lights-flicker",
    title: "LIGHTS FLICKER",
    displayTitle: "Photography & Videography",
    subtitle: "CAPTURE. CREATE. INSPIRE.",
    desc: "Capture moments with cinematic vision.",
    date: "15 Feb 2026",
    time: "7:00 PM",
    image: "/assets/Joyce.webp",
  },
];

const EventsSection = () => {
  useEffect(() => {
    gsap.utils.toArray(".event-image").forEach((image) => {
      gsap.to(image, {
        yPercent: 12,

        ease: "none",

        scrollTrigger: {
          trigger: image.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    gsap.set(".event-card", {
      opacity: 0,
      y: 120,
      clipPath: "inset(0 0 100% 0)",
    });

    gsap.to(".event-card", {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",

      stagger: 0.12,

      duration: 1.2,

      ease: "power4.out",

      scrollTrigger: {
        trigger: ".events-wrapper",
        start: "top 75%",
      },
    });

    gsap.fromTo(
      ".event-image",
      {
        scale: 1.15,
      },
      {
        scale: 1,

        stagger: 0.08,

        duration: 2,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".events-wrapper",
          start: "top 80%",
        },
      },
    );

    gsap.set(".heading-line", {
      yPercent: 120,
      clipPath: "inset(0 0 100% 0)",
      opacity: 1,
    });

    gsap.to(".heading-line", {
      yPercent: 0,
      clipPath: "inset(0 0 0% 0)",

      stagger: 0.08,

      duration: 2,

      ease: "power4.out",

      scrollTrigger: {
        trigger: ".events-wrapper",
        start: "top 80%",
      },
    });

    gsap.fromTo(
      ".heading-sub",
      {
        opacity: 0,
        letterSpacing: "0.8em",
      },
      {
        opacity: 1,
        letterSpacing: "0.5em",

        duration: 1.2,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".events-wrapper",
          start: "top 82%",
        },
      },
    );
  }, []);

  return (
    <section
      className="
        events-wrapper

        relative

        overflow-hidden

        bg-black

        px-4
        md:px-8
        xl:px-16

        py-20
        md:py-28
      "
    >
      {/* Background glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-1/2

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-red-600/10

            blur-[180px]
          "
        />
      </div>

      {/* Header */}

      <div className="events-heading relative z-[2] text-center mb-14 md:mb-20">
        <div className="overflow-hidden">
          <p
            className="
        heading-sub

        text-red-500

        uppercase

        tracking-[0.5em]

        text-[10px]
        md:text-xs

        font-mono

        mb-5
      "
          >
            EVENTS
          </p>
        </div>

        <div className="overflow-hidden">
          <h2
            className="
       heading-line

      text-white

      text-[clamp(2.4rem,10vw,8rem)]
      sm:text-[clamp(3rem,8vw,8rem)]

      leading-[0.95]

      uppercase

      tracking-[-0.03em]

      font-black

      text-center

      break-words
      "
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            }}
          >
            WHERE TECHNOLOGY
          </h2>
        </div>

        <div className="overflow-hidden">
          <h2
            className="
        heading-line

      text-white

      text-[clamp(2.4rem,10vw,8rem)]
      sm:text-[clamp(3rem,8vw,8rem)]

      leading-[0.95]

      uppercase

      tracking-[-0.03em]

      font-black

      text-center

      break-words
      "
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            }}
          >
            MEETS CHAOS
          </h2>
        </div>

        <div className="mx-auto mt-8 h-px w-32 bg-red-500/30" />
      </div>

      {/* Grid */}

      <div
        className="
          relative
          z-[2]

          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-5
          md:gap-7
        "
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="
              event-card

              group

              relative

              overflow-hidden

              border
              border-red-500/20

              bg-black/60

              backdrop-blur-sm
            "
          >
            
            {/* Image */}

            <div className="relative h-[240px] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="
                  event-image

                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover

                  brightness-[0.45]
                  contrast-[1.1]

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Number */}

              <div
                className="
                  absolute
                  top-4
                  left-4

                  border
                  border-red-500/30

                  bg-black/60

                  px-3
                  py-2
                "
              >
                <p
                  className="
                    text-red-500

                    text-2xl
                    md:text-3xl

                    leading-none

                    font-black
                  "
                  style={{
                    fontFamily:
                      'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                  }}
                >
                  {event.id}
                </p>
              </div>

              {/* Corner line */}

              <div className="absolute top-0 right-0 h-px w-24 bg-red-500/30" />
            </div>

            {/* Content */}

            <div className="p-5 md:p-6">
              <p
                className="
                  text-red-500

                  uppercase

                  tracking-[0.25em]

                  text-[10px]
                  md:text-xs

                  font-mono

                  mb-4
                "
              >
                {event.subtitle}
              </p>

              <h3
                className="
                text-white

    text-[2.1rem]
    sm:text-[2.7rem]
    md:text-5xl

    leading-[1]

    uppercase

    tracking-[-0.02em]

    font-black

    break-words
                "
                style={{
                  fontFamily:
                    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                }}
              >
                {event.title}
              </h3>
{/* ADD THIS ↓ */}
{event.displayTitle && (
  <p className="mt-2 text-white/40 font-mono text-[15px] uppercase tracking-[0.2em]">
    {event.displayTitle}
  </p>
)}
              <p
                className="
                  mt-5

                  text-sm
                  md:text-base

                  leading-relaxed

                  text-white/60

                  max-w-[26ch]
                "
              >
                {event.desc}
              </p>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between">
                <Link
  to={`/events/${event.slug}`}
  className="
    border
    border-red-500/30
    px-4
    py-2
    text-[10px]
    md:text-xs
    uppercase
    tracking-[0.25em]
    text-red-500
    font-mono
    transition-all
    duration-300
    group-hover:bg-red-500
    group-hover:text-black
  "
>
  Enter Event
</Link>

                <div
                  className="
                    text-red-500

                    text-3xl
                    md:text-4xl

                    leading-none

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                >
                  ›
                </div>
              </div>
            </div>

            {/* Border overlay */}

            <div className="pointer-events-none absolute inset-0 border border-red-500/10" />

            {/* Glow */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            >
              <div className="absolute inset-0 bg-red-500/5" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer line */}

      <div className="relative z-[2] mt-16 md:mt-24 text-center">
        <div className="mx-auto mb-5 h-px w-40 bg-red-500/20" />

        <p
          className="
            text-red-500/70

            uppercase

            tracking-[0.35em]

            text-[10px]
            md:text-xs

            font-mono
          "
        >
          Stay Tuned. Stay Curious.
        </p>
      </div>
    </section>
  );
};

export default EventsSection;
