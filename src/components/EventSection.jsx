import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

  const events = [
    {
      id: "01",
      slug: "SEARCH FOR WILL",
      title: "SEARCH FOR WILL",
      displayTitle: "Treasure Hunt",
      subtitle: "CODE. BREAK. BUILD.",
      desc: "48 hours to build the impossible.",
      date: "15 Feb 2026",
      time: "10:00 AM",
      venue: "Main Auditorium",
      rules: [
        "Team size 2-4",
        "Bring laptop",
        "No plagiarism"
      ],
      image: "/assets/Dustin.webp",
    },
    {
    id: "02",
    slug: "tech-events",
    title: "Tech Events",
    displayTitle: "Treasure Hunt",
    subtitle: "LOGIC. STRATEGY. SPEED.",
    desc: "Test your skills. Solve. Outwit.",
    date: "16 Feb 2026",
    time: "11:00 AM",
    venue: "Seminar Hall",
    rules: [
      "Individual participation",
      "No external help",
      "Time limit applies"
    ],
    image: "/assets/Eleven.webp",
  },
  {
    id: "03",
    slug: "workshops",
    title: "Workshops",
     displayTitle: "Treasure Hunt",
    subtitle: "LEARN. EXPLORE. EVOLVE.",
    desc: "Hands-on sessions by experts.",
    date: "17 Feb 2026",
    time: "2:00 PM",
    venue: "Lab Block",
    rules: [
      "Registration mandatory",
      "Bring laptop",
      "Limited seats"
    ],
    image: "/assets/Lucas.webp",
  },
  {
    id: "04",
    slug: "open-mic",
    title: "Open Mic",
     displayTitle: "Treasure Hunt",
    subtitle: "YOUR VOICE. THEIR EARS.",
    desc: "Speak your truth.",
    date: "18 Feb 2026",
    time: "5:00 PM",
    venue: "Open Stage",
    rules: [
      "Max 5 minutes per participant",
      "No offensive content",
      "Solo performance only"
    ],
    image: "/assets/Will.webp",
  },
  {
    id: "05",
    slug: "fun-events",
    title: "Fun Events",
     displayTitle: "Treasure Hunt",
    subtitle: "GAMES. CHAOS. MEMORIES.",
    desc: "Dive into the upside down.",
    date: "19 Feb 2026",
    time: "1:00 PM",
    venue: "College Ground",
    rules: [
      "Open for all",
      "Team events allowed",
      "Follow event coordinator instructions"
    ],
    image: "/assets/Hopper.webp",
  },
  {
    id: "06",
    slug: "mystery-event-1",
    title: "Mystery Event",
     displayTitle: "Treasure Hunt",
    subtitle: "NOT EVERYTHING IS MEANT TO BE REVEALED.",
    desc: "Something is coming.",
    date: "20 Feb 2026",
    time: "6:00 PM",
    venue: "Secret Location",
    rules: [
      "No spoilers",
      "Follow instructions carefully",
      "Be on time"
    ],
    image: "/assets/Nancy.webp",
  },
  {
    id: "07",
    slug: "mystery-event-2",
    title: "Mystery Event",
     displayTitle: "Treasure Hunt",
    subtitle: "NOT EVERYTHING IS MEANT TO BE REVEALED.",
    desc: "Something is coming.",
    date: "21 Feb 2026",
    time: "4:00 PM",
    venue: "Secret Location",
    rules: [
      "No spoilers",
      "Follow instructions carefully",
      "Be on time"
    ],
    image: "/assets/Steve.webp",
  },
  {
    id: "08",
    slug: "mystery-event-3",
    title: "Mystery Event",
     displayTitle: "Treasure Hunt",
    subtitle: "NOT EVERYTHING IS MEANT TO BE REVEALED.",
    desc: "Something is coming.",
    date: "22 Feb 2026",
    time: "3:00 PM",
    venue: "Secret Location",
    rules: [
      "No spoilers",
      "Follow instructions carefully",
      "Be on time"
    ],
    image: "/assets/Mystery.webp",
  },
  {
    id: "09",
    slug: "mystery-event-4",
    title: "Mystery Event",
     displayTitle: "Treasure Hunt",
    subtitle: "NOT EVERYTHING IS MEANT TO BE REVEALED.",
    desc: "Something is coming.",
    date: "23 Feb 2026",
    time: "7:00 PM",
    venue: "Secret Location",
    rules: [
      "No spoilers",
      "Follow instructions carefully",
      "Be on time"
    ],
    image: "/assets/Mystery.webp",
  },
  {
    id: "10",
    slug: "mystery-event-5",
    title: "Mystery Event",
     displayTitle: "Treasure Hunt",
    subtitle: "NOT EVERYTHING IS MEANT TO BE REVEALED.",
    desc: "Something is coming.",
    date: "24 Feb 2026",
    time: "8:00 PM",
    venue: "Secret Location",
    rules: [
      "No spoilers",
      "Follow instructions carefully",
      "Be on time"
    ],
    image: "/assets/Mystery.webp",
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

        text-[clamp(3rem,8vw,8rem)]

        leading-[0.85]

        uppercase

        tracking-[-0.06em]

        font-black
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

        text-[clamp(3rem,8vw,8rem)]

        leading-[0.85]

        uppercase

        tracking-[-0.06em]

        font-black
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

                  text-4xl
                  md:text-5xl

                  leading-[0.9]

                  uppercase

                  tracking-[-0.04em]

                  font-black
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
