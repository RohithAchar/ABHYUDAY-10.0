import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const events = [
  {
    slug: "shadow-protocol",
    id: "01",
    title: "Cyber Event",
    displayTitle: "SHADOW PROTOCOL",
    subtitle: "HACK. DEFEND. DOMINATE.",
    desc: "Test your cybersecurity skills through intense challenges and real-world scenarios.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "2-4",
    fees: "400",
    image: "/assets/Dustin.webp",
    rules: [
      "Participants may use only the tools and software permitted by the organizers",
      "AI tools and web browsing are restricted unless explicitly allowed for a challenge",
      "Any attempt to attack or disrupt systems outside the event scope is strictly prohibited",
      "Use of malicious payloads or harmful activities that may damage systems, networks, or data is not allowed",
      "Participants must not exploit vulnerabilities on devices belonging to other participants",
      "Participants must bring their own laptops, chargers, and required accessories",
      "Cheating, sharing flags/answers, damaging infrastructure, or violating event policies will result in immediate disqualification",
      "Participants must follow all the instructions given by judges and coordinators. Their decisions will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "V Varun Murthy", phone: "+91 9353751069" },
      { name: "Sinchana Shetty", phone: "+91 8971638535" },
      { name: "Sujith Kumar", phone: "+91 8892712235" },
    ],
  },
  {
    slug: "the-hawkins-design-lab",
    id: "02",
    title: "UI/UX",
    displayTitle: "THE HAWKINS DESIGN LAB",
    subtitle: "DESIGN. CREATE. IMPRESS.",
    desc: "Showcase your creativity and build visually stunning user experiences.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "2",
    fees: "200",
    image: "/assets/Dustin.webp",
    rules: [
      "Participants must bring their own laptops/devices",
      "Designs must be created only using Figma",
      "Use of CSS/UI libraries or frameworks is not permitted",
      "AI tools may be used only during permitted timings",
      "Teams will be judged on creativity, innovation, and presentation",
      "Any unfair means will lead to disqualification",
      "Judges' decisions will be the final and binding",
      "UG and PG participants will compete separately, and winners will be declared independently for each category",
    ],
    prizes: "Exciting Prizes Available for UG & PG Categories",
    contact: {
      UG: [
        { name: "Chandana D", phone: "+91 9686915540" },
        { name: "Bhumika", phone: "+91 8747852889" },
        { name: "Aravind", phone: "+91 6361357174" },
        { name: "Afreed", phone: "+91 9741799939" },
      ],
      PG: [
        { name: "Mayur Joshi", phone: "+91 9741092761" },
        { name: "Bhanupratap Reddy", phone: "+91 6360037717" },
      ],
    },
  },
  {
    slug: "vecnas-arena",
    id: "03",
    title: "BGMI",
    displayTitle: "VECNAS ARENA",
    subtitle: "SURVIVE. FIGHT. WIN.",
    desc: "Battle against top squads and dominate the arena in an intense BGMI showdown.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "4",
    fees: "400",
    image: "/assets/Dustin.webp",
    rules: [
      "The tournament consists of 4 rounds",
      "Participants must report before the scheduled time",
      "All required maps must be downloaded before the event",
      "Use of hacks, cheats, or third-party tools is strictly prohibited",
      "Points will be awarded based on kills and placement",
      "Any misconduct or unfair play will result in disqualification",
      "Participants must follow the coordinators instructions",
      "Organizers' decisions will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "Bala Swamy", phone: "+91 6374262694" },
      { name: "Anush K", phone: "+91 8088718755" },
      { name: "Akshay", phone: "+91 8904443218" },
      { name: "Vishwas M P", phone: "+91 8073338266" },
    ],
  },
  {
    slug: "dustins-desk",
    id: "04",
    title: "IT Quiz",
    displayTitle: "DUSTINS DESK",
    subtitle: "THINK. ANSWER. WIN.",
    desc: "Challenge your technical knowledge and compete in a fast-paced IT quiz battle.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "2",
    fees: "200",
    image: "/assets/Dustin.webp",
    rules: [
      "The quiz consists of 4 rounds",
      "Participants must answer within the given time limit",
      "Mobile phones and electronic gadgets are strictly prohibited",
      "Participants must maintain discipline throughout the event",
      "Any malpractice or misconduct will lead to disqualification",
      "Participants must report before the scheduled time",
      "Judges' decisions will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "Ruchitha Reddy M P", phone: "+91 9535556635" },
      { name: "Shreya Gupta", phone: "+91 7260040597" },
      { name: "Karthik R S", phone: "+91 6361154606" },
      { name: "Navya", phone: "+91 9901921771" },
      { name: "Vaibhav", phone: "+91 9143626262" },
      { name: "Ganesh K", phone: "+91 8310821825" },
    ],
  },
  {
    slug: "the-mind-flayer",
    id: "05",
    title: "Ideathon",
    displayTitle: "THE MIND FLAYER",
    subtitle: "IMAGINE. INNOVATE. PITCH.",
    desc: "Present groundbreaking ideas and compete to build the next big innovation.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "1-2",
    fees: "200",
    image: "/assets/Dustin.webp",
    rules: [
      "Maximum of 4 team registrations per college",
      "Team can consist of minimum 1 and maximum 3 participants",
      "Participants must carry their college ID cards",
      "Participation may be extended based on available slots and time",
      "The idea presented must be original and innovative",
      "Plagiarism of any kind will lead to immediate disqualification",
      "Submissions will be thoroughly checked for authenticity",
      "The decision of the jury will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "Rakshitha S", phone: "+91 8618649029" },
      { name: "Ananya H M", phone: "+91 9019882242" },
      { name: "Ankita", phone: "+91 8088006141" },
    ],
  },
  {
    slug: "search-for-will",
    id: "06",
    title: "Treasure Hunt",
    displayTitle: "SEARCH FOR WILL",
    subtitle: "HUNT. SOLVE. SURVIVE.",
    desc: "Crack clues, solve mysteries, and race against time in the ultimate treasure hunt adventure.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "3-4",
    fees: "400",
    image: "/assets/11.jpg",
    rules: [
      "Participants should not use their mobile phones during the event, until explicitly mentioned by the event volunteers",
      "Participants should not go near the restricted areas",
      "All participants must maintain co-operation, team-spirit, and respect for each other",
      "Participants should take care that college property should not be damaged",
      "If participants indulge in any sort of clashes or fights, it should be reported to the event coordinator",
      "Each team would be assigned with one volunteer",
      "If any team member is found violating the rules, the respective team will be disqualified",
      "Maximum two teams per college is allowed",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "Sai Keerthana", phone: "+91 8050998508" },
      { name: "Anusha", phone: "+91 7019400845" },
      { name: "Mayur H", phone: "+91 8088198131" },
      { name: "Likhitha C S", phone: "+91 7892276105" },
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
    fees: "200",
    image: "/assets/Dustin.webp",
    rules: [
      "The event will be conducted over 2 days",
      "Systems will be provided for participants",
      "Internet usage is allowed only when instructed",
      "Any malpractice or unfair means will lead to disqualification",
      "Teams must submit solutions within the given time limit",
      "Participants must maintain discipline and professionalism",
      "UG and PG participants will compete separately, and winners will be declared independently for each category",
      "Judges' decisions will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for UG & PG Categories",
    contact: {
      UG: [
        { name: "Shiva Prasad", phone: "+91 8762233537" },
        { name: "Shreenivasa", phone: "+91 9916925969" },
        { name: "Dhruvan H", phone: "+91 9480593155" },
      ],
      PG: [
        { name: "Abjeet", phone: "+91 9353266834" },
        { name: "Alfiya", phone: "+91 7676793985" },
        { name: "Adesh", phone: "+91 9136191475" },
      ],
    },
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
    participants: "2",
    fees: "200",
    image: "/assets/Dustin.webp",
    rules: [
      "Reel duration must be between 60–90 seconds in vertical format",
      "The competition consists of 2 rounds",
      "Only original and theme-based content is allowed",
      "Vulgar, offensive, or copied content will lead to disqualification",
      "Basic editing, music, and effects are permitted",
      "Participants must follow event guidelines",
      "Submissions must be completed within the specified time",
      "Organizers' and judges' decisions will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "Anju Shreya K M", phone: "+91 6363740142" },
      { name: "Samskriti Shetty", phone: "+91 8296759865" },
      { name: "Anish Kumar S", phone: "+91 8762575776" },
    ],
  },
  {
    slug: "the-russian-code",
    id: "09",
    title: "Tech Puzzle and Debate",
    displayTitle: "THE RUSSIAN CODE",
    subtitle: "SOLVE. THINK. ESCAPE.",
    desc: "Decode technical mysteries and solve challenging puzzles under pressure.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "2-3",
    fees: "300",
    image: "/assets/Dustin.webp",
    rules: [
      "A maximum of 2 teams per college is allowed",
      "Participants must bring their own devices",
      "Early round scores determine only qualification for finals",
      "Time limits must be strictly followed",
      "Malpractice or unfair means will result in disqualification",
      "Participants must maintain discipline throughout the event",
      "Judges' decisions will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "Raksha", phone: "+91 8073087328" },
      { name: "Meghana Shree K", phone: "+91 7975747738" },
      { name: "Mohammed Yaseen", phone: "+91 9633702159" },
    ],
  },
  {
    slug: "lights-flicker",
    id: "10",
    title: "Photography",
    displayTitle: "LIGHTS FLICKER",
    subtitle: "CAPTURE. CREATE. INSPIRE.",
    desc: "Capture cinematic moments and showcase your storytelling through visuals.",
    date: "12 June 2026",
    time: "10:00 AM",
    participants: "1-2",
    fees: "200",
    image: "/assets/Dustin.webp",
    rules: [
      "A maximum of 2 teams per college is allowed",
      "Participants must bring their own devices",
      "Early round scores determine only qualification for finals",
      "Time limits must be strictly followed",
      "Malpractice or unfair means will result in disqualification",
      "Participants must maintain discipline throughout the event",
      "Judges' decisions will be the final and binding",
    ],
    prizes: "Exciting Prizes Available for Winners!",
    contact: [
      { name: "Anubha V Singh", phone: "+91 9019524631" },
      { name: "Aryan Chaubey", phone: "+91 9044920096" },
      { name: "Mihir A Divakar", phone: "+91 7019010176" },
    ],
  },
];

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.slug === slug);

  const handleBack = () => {
    navigate("/", { state: { scrollToEvents: true } });
  };

  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    tl.fromTo(
      ".ed-back",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
    )
      .fromTo(
        ".ed-id",
        { opacity: 0, scale: 1.4 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2",
      )
      .fromTo(
        ".ed-title",
        { yPercent: 110, clipPath: "inset(0 0 100% 0)" },
        {
          yPercent: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power4.out",
        },
        "-=0.4",
      )
      .fromTo(
        ".ed-subtitle",
        { opacity: 0, letterSpacing: "0.8em" },
        {
          opacity: 1,
          letterSpacing: "0.25em",
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .fromTo(
        ".ed-meta-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        ".ed-section",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out" },
        "-=0.3",
      );
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
        <p
          className="text-red-500 text-[clamp(4rem,12vw,10rem)] font-medium uppercase leading-none"
          style={{
            fontFamily:
              'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
          }}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Events
        </button>
      </div>

      {/* Hero image */}
      <div
        ref={heroRef}
        className="relative z-10 mt-8 mx-4 md:mx-8 xl:mx-16 h-[45vh] md:h-[55vh] overflow-hidden"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover brightness-[1] contrast-[1.15] scale-105"
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
            className="text-red-500/20 leading-none font-medium"
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              fontSize: "clamp(5rem, 15vw, 12rem)",
            }}
          >
            {event.id}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 px-4 md:px-8 xl:px-16 mt-10 pb-24"
      >
        {/* Title block */}
        <div className="mb-10">
          <div className="overflow-hidden mb-3">
            <p className="ed-subtitle text-red-500 font-mono text-xs md:text-sm uppercase tracking-[0.25em]">
              {event.subtitle}
            </p>
          </div>

          <div className="overflow-hidden">
            <h1
              className="ed-title text-white uppercase leading-[0.85] tracking-[-0.04em] font-medium"
              style={{
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
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
          <p className="ed-subtitle mt-5 text-white/50 text-lg md:text-xl leading-relaxed max-w-[50ch]">
            {event.desc}
          </p>
        </div>

        {/* Meta strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-red-500/10 border border-red-500/15 mb-12">
          {[
            {
              label: "Date",
              value: event.date,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              ),
            },
            {
              label: "Time",
              value: event.time,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
            },
            {
              label: "Fees",
              value: event.fees ? `₹${event.fees}` : "",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ),
            },
            {
              label: "Participants",
              value: event.participants,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="ed-meta-item bg-black px-4 py-4 md:px-8 md:py-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500/60">{item.icon}</span>
                <p className="text-red-500/60 font-mono text-[10px] uppercase tracking-[0.35em]">
                  {item.label}
                </p>
              </div>
              <p className="text-white font-mono text-base md:text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Rules */}
          <div className="ed-section border border-red-500/15 bg-black/60 backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px flex-1 bg-red-500/20" />
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-red-500"
                >
                  <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                <p
                  className="text-white text-xl md:text-2xl uppercase tracking-[-0.02em] font-medium"
                  style={{
                    fontFamily:
                      'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                  }}
                >
                  Rules
                </p>
              </div>
              <div className="h-px flex-1 bg-red-500/20" />
            </div>
            <ul className="space-y-3">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="text-red-500 font-mono text-sm mt-[3px] opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/70 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-200">
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
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  <p
                    className="text-white text-xl md:text-2xl uppercase tracking-[-0.02em] font-medium"
                    style={{
                      fontFamily:
                        'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                    }}
                  >
                    Prizes
                  </p>
                </div>
                <div className="h-px flex-1 bg-red-500/20" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border border-red-500/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 md:w-6 md:h-6 text-red-500"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed pt-2 md:pt-3">
                  {event.prizes}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="ed-section border border-red-500/15 bg-black/60 backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-red-500/60"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p className="text-red-500/60 font-mono text-[10px] uppercase tracking-[0.35em]">
                  Contact
                </p>
              </div>

              {/* Normal Contact Array */}
              {Array.isArray(event.contact) ? (
                <div className="space-y-4">
                  {event.contact.map((person, i) => (
                    <div key={i} className="border-l border-red-500/20 pl-4">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5 text-red-500/50"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <p className="text-white text-base md:text-lg font-semibold">
                          {person.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 ml-5.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 text-red-500/50"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <p className="text-white/60 font-mono text-base">
                          {person.phone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* UG / PG Contact Object */
                <div className="space-y-6">
                  {Object.entries(event.contact).map(([category, contacts]) => (
                    <div key={category}>
                      <div className="flex items-center gap-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5 text-red-500"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <h3 className="text-red-500 font-mono text-sm uppercase tracking-[0.3em]">
                          {category}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {contacts.map((person, i) => (
                          <div
                            key={i}
                            className="border-l border-red-500/20 pl-4"
                          >
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3.5 h-3.5 text-red-500/50"
                              >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                              </svg>
                              <p className="text-white text-base md:text-lg font-semibold">
                                {person.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 ml-5.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3 h-3 text-red-500/50"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                              <p className="text-white/60 font-mono text-base">
                                {person.phone}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="ed-section mt-12 ml-1 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="https://forms.gle/6CN6ariPFeE9afqP8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative overflow-hidden inline-flex items-center gap-2
              border border-red-500
              px-4 py-2
              text-l uppercase tracking-[0.35em] font-mono
              text-red-500
              hover:text-black
              transition-colors duration-300
              group
            "
          >
            <span className="relative z-10">Register Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 w-4 h-4"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
            <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

          <p className="text-white/25 font-mono text-xs uppercase tracking-[0.25em]">
            Spots are limited — act fast
          </p>
        </div>
      </div>

      {/* Footer line */}
      <div className="relative z-10 pb-10 text-center">
        <div className="mx-auto mb-4 h-px w-32 bg-red-500/20" />
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3 text-red-500/40"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <p className="text-red-500/40 font-mono text-[10px] uppercase tracking-[0.35em]">
            Stay Tuned. Stay Curious.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3 text-red-500/40"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
