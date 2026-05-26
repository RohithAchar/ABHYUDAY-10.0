import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const events = [
  {
    slug: "SEARCH FOR WILL",
    id: "01",
    title: "Treasure Hunt",          // shown on card in EventSection
    displayTitle: "SEARCH FOR WILL",   // shown on detail page (change this to real event name)
    subtitle: "CODE. BREAK. BUILD.",
    desc: "48 hours to build the impossible. Push the limits of what you know, and discover what you can create under pressure.",
    date: "15 Feb 2026",
    time: "10:00 AM",
    venue: "Main Auditorium",
    image: "/assets/Dustin.webp",
    rules: [
      "Team size: 2–4 members",
      "Bring your own laptop & charger",
      "No plagiarism or pre-built projects",
      "Submit before the deadline",
      "All tech stacks are welcome",
      "Internet access is permitted",
    ],
    prizes: ["₹10,000 — 1st Place", "₹5,000 — 2nd Place", "₹2,500 — 3rd Place"],
   contact: [
  { name: "Sagar", phone: "+91 9876543210" },
  { name: "Rahul", phone: "+91 9123456780" }
],
  },
  {
    slug: "tech-events",
    id: "02",
    title: "Tech Events",
    displayTitle: "Tech Events",
    subtitle: "LOGIC. STRATEGY. SPEED.",
    desc: "Test your skills. Solve. Outwit. A series of technical challenges designed to push your limits.",
    date: "16 Feb 2026",
    time: "11:00 AM",
    venue: "Lab Block A",
    image: "/assets/Eleven.webp",
    rules: [
      "Individual participation only",
      "No external devices allowed",
      "Results are final",
      "Follow the proctor's instructions",
    ],
    prizes: ["₹5,000 — 1st Place", "₹2,500 — 2nd Place"],
  contact: [
  { name: "Sagar", phone: "+91 9876543210" },
  { name: "Rahul", phone: "+91 9123456780" }
],
  },
  {
    slug: "workshops",
    id: "03",
    title: "Workshops",
    displayTitle: "Workshops",
    subtitle: "LEARN. EXPLORE. EVOLVE.",
    desc: "Hands-on sessions led by industry experts. Walk in curious. Walk out capable.",
    date: "15–16 Feb 2026",
    time: "9:00 AM",
    venue: "Seminar Hall",
    image: "/assets/Lucas.webp",
    rules: [
      "Pre-registration required",
      "Limited seats per session",
      "Bring a notebook",
      "Certificates provided on completion",
    ],
    prizes: ["Certificates for all participants"],
   contact: [
  { name: "Sagar", phone: "+91 9876543210" },
  { name: "Rahul", phone: "+91 9123456780" }
],
  },
  {
    slug: "open-mic",
    id: "04",
    title: "Open Mic",
    displayTitle: "Open Mic",
    subtitle: "YOUR VOICE. THEIR EARS.",
    desc: "Speak your truth. Perform your art. This stage belongs to those who dare.",
    date: "16 Feb 2026",
    time: "6:00 PM",
    venue: "Open Air Theatre",
    image: "/assets/Will.webp",
    rules: [
      "5-minute slot per performer",
      "No offensive content",
      "Sign up at the registration desk",
      "Any language welcome",
    ],
    prizes: ["Audience choice award: ₹3,000"],
   contact: [
  { name: "Sagar", phone: "+91 9876543210" },
  { name: "Rahul", phone: "+91 9123456780" }
],
  },
  {
    slug: "fun-events",
    id: "05",
    title: "Fun Events",
    displayTitle: "Fun Events",
    subtitle: "GAMES. CHAOS. MEMORIES.",
    desc: "Dive into the upside down. Where rules are loose and fun is mandatory.",
    date: "15–16 Feb 2026",
    time: "All Day",
    venue: "College Grounds",
    image: "/assets/Hopper.webp",
    rules: [
      "Open to all",
      "Team or solo participation",
      "Fair play expected",
      "Event coordinators have final say",
    ],
    prizes: ["Goodies & gift vouchers for winners"],
   contact: [
  { name: "Sagar", phone: "+91 9876543210" },
  { name: "Rahul", phone: "+91 9123456780" }
],
  },
];

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.slug === slug);

 const handleBack = () => {
  navigate("/");

  setTimeout(() => {
    const eventsSection = document.querySelector(".events-wrapper");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    tl.fromTo(
      ".ed-back",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        ".ed-id",
        { opacity: 0, scale: 1.4 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        ".ed-title",
        { yPercent: 110, clipPath: "inset(0 0 100% 0)" },
        { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power4.out" },
        "-=0.4"
      )
      .fromTo(
        ".ed-subtitle",
        { opacity: 0, letterSpacing: "0.8em" },
        { opacity: 1, letterSpacing: "0.25em", duration: 0.9, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".ed-meta-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".ed-section",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
        <p
          className="text-red-500 text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-none"
          style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}
        >
          404
        </p>
        <p className="text-white/40 font-mono uppercase tracking-[0.4em] text-xs">
          Event Not Found
        </p>
        <Link
          to="/"
          className="mt-4 border border-red-500/40 px-6 py-3 text-red-500 font-mono text-xs uppercase tracking-[0.3em] hover:bg-red-500 hover:text-black transition-all duration-300"
        >
          ← Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-red-600/8 blur-[200px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[180px]" />
      </div>

      {/* Back button */}
      <div className="relative z-10 px-6 md:px-12 xl:px-20 pt-8">
        <button
          onClick={handleBack}
          className="ed-back inline-flex items-center gap-3 text-red-500 font-mono text-xs uppercase tracking-[0.3em] hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Back to Events
        </button>
      </div>

      {/* Hero image */}
      <div ref={heroRef} className="relative z-10 mt-8 mx-4 md:mx-8 xl:mx-16 h-[45vh] md:h-[55vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover brightness-[0.35] contrast-[1.15] scale-105"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-20 h-px bg-red-500/50" />
        <div className="absolute top-0 left-0 h-20 w-px bg-red-500/50" />
        <div className="absolute top-0 right-0 w-20 h-px bg-red-500/50" />
        <div className="absolute top-0 right-0 h-20 w-px bg-red-500/50" />

        {/* Big ID number */}
        <div className="ed-id absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <p
            className="text-red-500/20 leading-none font-black"
            style={{
              fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              fontSize: "clamp(5rem, 15vw, 12rem)",
            }}
          >
            {event.id}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 px-4 md:px-8 xl:px-16 mt-10 pb-24">

        {/* Title block */}
        <div className="mb-10">
          <div className="overflow-hidden mb-3">
            <p className="ed-subtitle text-red-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em]">
              {event.subtitle}
            </p>
          </div>





          
          <div className="overflow-hidden">
            <h1
              className="ed-title text-white uppercase leading-[0.85] tracking-[-0.04em] font-black"
              style={{
                fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
              }}
            >
              {event.displayTitle}

<p
  className="ed-title text-white leading-tight tracking-normal font-semibold mt-5 ml-1"
  style={{
    fontFamily: '"Cinzel", "Georgia", serif',
    fontSize: "clamp(1.2rem, 3vw, 2.4rem)",
    letterSpacing: "0.08em",
    textTransform: "none",
  }}
>
  {event.title}
</p>

               
            </h1>
          </div>
          <p className="ed-subtitle mt-5 text-white/50 text-base md:text-lg leading-relaxed max-w-[50ch]">
            {event.desc}
          </p>
        </div>




        

        {/* Meta strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-red-500/10 border border-red-500/15 mb-12">
          {[
            { label: "Date", value: event.date },
            { label: "Time", value: event.time },
            { label: "Venue", value: event.venue },
          ].map((item) => (
            <div key={item.label} className="ed-meta-item bg-black px-5 py-5 md:px-8 md:py-6">
              <p className="text-red-500/60 font-mono text-[9px] uppercase tracking-[0.35em] mb-2">
                {item.label}
              </p>
              <p className="text-white font-mono text-sm md:text-base">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">

          {/* Rules */}
          <div className="ed-section border border-red-500/15 bg-black/60 backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px flex-1 bg-red-500/20" />
              <p
                className="text-white text-xl md:text-2xl uppercase tracking-[-0.02em] font-black"
                style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}
              >
                Rules
              </p>
              <div className="h-px flex-1 bg-red-500/20" />
            </div>
            <ul className="space-y-3">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="text-red-500 font-mono text-xs mt-[3px] opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-200">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prizes + Contact */}
          <div className="flex flex-col gap-6">
            {/* Prizes */}
            <div className="ed-section border border-red-500/15 bg-black/60 backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-center gap-4 mb-7">
                <div className="h-px flex-1 bg-red-500/20" />
                <p
                  className="text-white text-xl md:text-2xl uppercase tracking-[-0.02em] font-black"
                  style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}
                >
                  Prizes
                </p>
                <div className="h-px flex-1 bg-red-500/20" />
              </div>
              <ul className="space-y-3">
                {event.prizes.map((prize, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-red-500 flex-shrink-0" />
                    <span className="text-white/70 text-sm md:text-base">{prize}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
   {/* Contact */}
<div className="ed-section border border-red-500/15 bg-black/60 backdrop-blur-sm p-6 md:p-8">
  <p className="text-red-500/60 font-mono text-[9px] uppercase tracking-[0.35em] mb-4">
    Contact
  </p>

  <div className="space-y-4">
    {event.contact.map((person, i) => (
      <div key={i} className="border-l border-red-500/20 pl-4">
        <p className="text-white text-sm md:text-base font-semibold">
          {person.name}
        </p>
        <p className="text-white/60 font-mono text-sm">
          {person.phone}
        </p>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>

        {/* CTA */}
        <div className="ed-section mt-12 ml-1 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <button
            className="
              relative overflow-hidden
              border border-red-500
              px-4 py-2
              text-l uppercase tracking-[0.35em] font-mono
              text-red-500
              hover:text-black
              transition-colors duration-300
              group
            "
          >
            <a
  href="https://forms.gle/6CN6ariPFeE9afqP8"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10"
>
  Register Now
</a>
            <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>

          <p className="text-white/25 font-mono text-[10px] uppercase tracking-[0.25em]">
            Spots are limited — act fast
          </p>
        </div>
      </div>

      {/* Footer line */}
      <div className="relative z-10 pb-10 text-center">
        <div className="mx-auto mb-4 h-px w-32 bg-red-500/20" />
        <p className="text-red-500/40 font-mono text-[9px] uppercase tracking-[0.35em]">
          Stay Tuned. Stay Curious.
        </p>
      </div>
    </div>
  );
}
