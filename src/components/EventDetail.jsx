import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const events = [
  {
  slug: "search-for-will",
  id: "01",
  title: "Treasure Hunt",
  displayTitle: "SEARCH FOR WILL",
  subtitle: "HUNT. SOLVE. SURVIVE.",
  desc: "Crack clues, solve mysteries, and race against time in the ultimate treasure hunt adventure.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "3-4",
  fees:"600",
  image: "/assets/11.jpg",
  rules: [
    "Participants: 3–4 members per team",
    "Maximum two teams per college",
    "Mobile phones are not allowed unless instructed",
    "Restricted areas must not be entered",
    "Maintain teamwork and discipline",
    "Damage to college property is prohibited",
    "Each team will be assigned one volunteer",
    "Rule violations will lead to disqualification",
  ],
  prizes: [
    "₹10,000 — 1st Place",
    "₹5,000 — 2nd Place",
    "₹2,500 — 3rd Place"
  ],
  contact: [
    { name: "Sai Keerthana", phone: "+91 8050998508" },
    { name: "Anusha", phone: "+91 7019400845" }
  ],
},
  {
  slug: "shadow-protocol",
  id: "02",
  title: "Cyber Event",
  displayTitle: "SHADOW PROTOCOL",
  subtitle: "HACK. DEFEND. DOMINATE.",
  desc: "Test your cybersecurity skills through intense challenges and real-world scenarios.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "2-4",
  fees:"600",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 2–4 members per team",
    "Bring your own laptops and accessories",
    "Only organizer-approved tools are allowed",
    "AI tools and browsing are restricted",
    "No attacks outside event scope",
    "Harmful payloads are prohibited",
    "Cheating will lead to disqualification",
    "Judges’ decisions are final",
  ],
  prizes: [
    "₹12,000 — 1st Place",
    "₹6,000 — 2nd Place",
    "₹3,000 — 3rd Place"
  ],
  contact: [
    { name: "Coordinator 1", phone: "+91 XXXXXXXX" },
    { name: "Coordinator 2", phone: "+91 XXXXXXXX" }
  ],
},
  {
  slug: "the-hawkins-design-lab",
  id: "03",
  title: "UI/UX",
  displayTitle: "THE HAWKINS DESIGN LAB",
  subtitle: "DESIGN. CREATE. IMPRESS.",
  desc: "Showcase your creativity and build visually stunning user experiences.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "2",
  fees:"300",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 2 members per team",
    "Bring your own laptops/devices",
    "Designs must be created using Canva only",
    "CSS/UI libraries are not allowed",
    "AI tools allowed only during permitted timings",
    "Unfair means lead to disqualification",
    "Judges’ decisions are final",
  ],
  prizes: [
    "₹8,000 — 1st Place",
    "₹4,000 — 2nd Place",
    "₹2,000 — 3rd Place"
  ],
  contact: [
    { name: "Coordinator 1", phone: "+91 XXXXXXXX" },
    { name: "Coordinator 2", phone: "+91 XXXXXXXX" }
  ],
},
  {
  slug: "vecnas-arena",
  id: "04",
  title: "BGMI",
  displayTitle: "VECNAS ARENA",
  subtitle: "SURVIVE. FIGHT. WIN.",
  desc: "Battle against top squads and dominate the arena in an intense BGMI showdown.",
 date: "12 June 2026",
  time: "10:00 AM",
  participants: "4",
  fees:"600",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 4 members per team",
    "Tournament consists of 4 rounds",
    "All maps must be downloaded beforehand",
    "No hacks or third-party tools allowed",
    "Points based on kills and placement",
    "Misconduct leads to disqualification",
    "Organizers’ decisions are final",
  ],
  prizes: [
    "₹15,000 — 1st Place",
    "₹8,000 — 2nd Place",
    "₹4,000 — 3rd Place"
  ],
  contact: [
    { name: "Coordinator 1", phone: "+91 XXXXXXXX" },
    { name: "Coordinator 2", phone: "+91 XXXXXXXX" }
  ],
},
 {
  slug: "dustins-desk",
  id: "05",
  title: "IT Quiz",
  displayTitle: "DUSTINS DESK",
  subtitle: "THINK. ANSWER. WIN.",
  desc: "Challenge your technical knowledge and compete in a fast-paced IT quiz battle.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "1-2",
  fees:"300",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 1–2 members per team",
    "Quiz consists of 4 rounds",
    "Answer within the given time limit",
    "Mobile phones are prohibited",
    "Maintain discipline throughout the event",
    "Malpractice leads to disqualification",
    "Report before scheduled time",
    "Judges’ decisions are final",
  ],
  prizes: ["₹7,000 — 1st Place", "₹3,500 — 2nd Place", "₹1,500 — 3rd Place"],
  contact: [
    { name: "Coordinator 1", phone: "+91 XXXXXXXX" },
    { name: "Coordinator 2", phone: "+91 XXXXXXXX" }
  ],
},
{
  slug: "the-mind-flayer",
  id: "06",
  title: "Ideathon",
  displayTitle: "THE MIND FLAYER",
  subtitle: "IMAGINE. INNOVATE. PITCH.",
  desc: "Present groundbreaking ideas and compete to build the next big innovation.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "1-3",
  fees:"400",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 1–3 members per team",
    "Maximum 4 teams per college",
    "Carry valid college ID cards",
    "Ideas must be original and innovative",
    "Plagiarism leads to disqualification",
    "Submissions checked for authenticity",
    "Follow all event guidelines",
    "Jury decisions are final",
  ],
  prizes: ["₹10,000 — 1st Place", "₹5,000 — 2nd Place", "₹2,500 — 3rd Place"],
  contact: [
    { name: "Rakshitha S", phone: "+91 8618649029" },
    { name: "Ananya H M", phone: "+91 9019882242" }
  ],
},
{
  slug: "code-red",
  id: "07",
  title: "Coding",
  displayTitle: "CODE RED",
  subtitle: "CODE. DEBUG. CONQUER.",
  desc: "Compete in intense coding rounds and prove your programming skills.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "1-2",
  fees:"300",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 1–2 members per team",
    "Event conducted over 2 days",
    "Systems will be provided",
    "Internet usage only when instructed",
    "Malpractice leads to disqualification",
    "Submit within the given time limit",
    "Maintain professionalism",
    "Judges’ decisions are final",
  ],
  prizes: ["₹9,000 — 1st Place", "₹4,500 — 2nd Place", "₹2,000 — 3rd Place"],
  contact: [
    { name: "Coordinator 1", phone: "+91 XXXXXXXX" },
    { name: "Coordinator 2", phone: "+91 XXXXXXXX" }
  ],
},
{
  slug: "reel-verse",
  id: "08",
  title: "Reels Making",
  displayTitle: "REEL VERSE",
  subtitle: "SHOOT. EDIT. CREATE.",
  desc: "Create engaging cinematic reels and bring your storytelling skills to life.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "1-2",
  fees:"300",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 2 members per team",
    "Reel duration must be 60–90 seconds",
    "Competition consists of 2 rounds",
    "Only original content is allowed",
    "Copied or offensive content is prohibited",
    "Basic editing and music are permitted",
    "Submit before the deadline",
    "Judges’ decisions are final",
  ],
  prizes: ["₹6,000 — 1st Place", "₹3,000 — 2nd Place", "₹1,500 — 3rd Place"],
  contact: [
    { name: "Coordinator 1", phone: "+91 XXXXXXXX" },
    { name: "Coordinator 2", phone: "+91 XXXXXXXX" }
  ],
},
{
  slug: "the-russian-code",
  id: "09",
  title: "Tech Puzzle",
  displayTitle: "THE RUSSIAN CODE",
  subtitle: "SOLVE. THINK. ESCAPE.",
  desc: "Decode technical mysteries and solve challenging puzzles under pressure.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "2-3",
  fees:"400",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: 2–3 members per team",
    "Maximum 2 teams per college",
    "Bring your own devices",
    "Early round scores determine finalists",
    "Strict time limits must be followed",
    "Malpractice leads to disqualification",
    "Maintain discipline throughout the event",
    "Judges’ decisions are final",
  ],
  prizes: ["₹8,000 — 1st Place", "₹4,000 — 2nd Place", "₹2,000 — 3rd Place"],
  contact: [
    { name: "Coordinator 1", phone: "+91 XXXXXXXX" },
    { name: "Coordinator 2", phone: "+91 XXXXXXXX" }
  ],
},
{
  slug: "lights-flicker",
  id: "10",
  title: "Photography & Videography",
  displayTitle: "LIGHTS FLICKER",
  subtitle: "CAPTURE. CREATE. INSPIRE.",
  desc: "Capture cinematic moments and showcase your storytelling through visuals.",
  date: "12 June 2026",
  time: "10:00 AM",
  participants: "2",
  fees:"300",
  image: "/assets/Dustin.webp",
  rules: [
    "Participants: Solo or up to 2 members",
    "Event has 3 rounds over 2 days",
    "Use your own cameras or smartphones",
    "Drones are strictly prohibited",
    "Editing not allowed in Round 1",
    "Plagiarism or stock footage is prohibited",
    "Submit before the specified deadline",
    "Judges’ decisions are final",
  ],
  prizes: ["₹7,000 — 1st Place", "₹3,500 — 2nd Place", "₹1,500 — 3rd Place"],
  contact: [
    { name: "Aryan Chaubey", phone: "+91 9044920096" },
    { name: "Anubhav Singh", phone: "+91 9019524631" }
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
       <div className="grid grid-cols-4 gap-px bg-red-500/10 border border-red-500/15 mb-12">
          {[
            { label: "Date", value: event.date },
            { label: "Time", value: event.time },
              { label: "Fees", value: event.fees ? `₹${event.fees}` : "" },
            { label: "Participants", value: event.participants },
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
