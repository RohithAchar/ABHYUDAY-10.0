import React, { useEffect, useState } from "react";

// Update this to your upcoming event date in the future
const targetDate = new Date("2026-06-12T00:00:00");

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      // If the countdown is finished, lock it at zeros
      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Pad with leading zeros so layout doesn't shift
      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    // Run once immediately on mount to prevent 1-second delay flash
    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-red-500/10
        bg-black
        px-4
        md:px-10
        py-14
        md:py-20
        text-white
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-red-600/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-[2] max-w-7xl mx-auto">
        {/* Top section */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-12
          "
        >
          {/* Left */}
          <div>
            <p
              className="
                text-red-500
                uppercase
                tracking-[0.35em]
                text-[10px]
                md:text-xs
                font-mono
                mb-4
              "
            >
              Transmission Active
            </p>

            <h2
              className="
                text-[clamp(3rem,8vw,7rem)]
                leading-[0.82]
                font-black
                uppercase
                tracking-[-0.06em]
              "
              style={{
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              }}
            >
              ABHYUDAY
            </h2>

            <p
              className="
                mt-5
                max-w-md
                text-base
                md:text-lg
                text-white/60
                leading-relaxed
              "
            >
              Enter the upside down.
              <br />A cinematic technical experience at MCA, RIT.
            </p>
            <br></br>
            <p
              className="
                text-red-500
                uppercase
                tracking-[0.3em]
                text-[10px]
                font-mono
                mb-2
              "
            >
              Faculty Coordinator
            </p>

            <p className="text-base md:text-lg text-white/50"></p>

            <p className="text-base md:text-lg text-white/50">
              Dr. Evangalin Geetha :
            </p>
            <p
              className="
                text-red-500
                uppercase
                tracking-[0.3em]
                text-[10px]
                font-mono
                mb-2
                mt-2
              "
            >
              Student Coordinator
            </p>

            <p className="text-base md:text-lg text-white/50">
              Khusal : +91 8217621915
            </p>
            <p className="text-base md:text-lg text-white/50">
              Shravya : +91 8762723575
            </p>
          </div>

          {/* Countdown */}
          <div
            className="
              w-full
              lg:w-auto
              border
              border-red-500/10
              bg-black/40
              px-5
              md:px-8
              py-5
              md:py-7
            "
          >
            <p
              className="
                text-red-500
                uppercase
                tracking-[0.35em]
                text-[10px]
                md:text-xs
                font-mono
                text-center
                mb-6
              "
            >
              Event Starts In
            </p>

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                md:gap-6
              "
            >
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className="
                      border
                      border-red-500/20
                      min-w-[62px]
                      md:min-w-[100px]
                      px-3
                      md:px-5
                      py-3
                      md:py-5
                    "
                  >
                    <p
                      className="
                        text-2xl
                        md:text-5xl
                        text-red-500
                        leading-none
                        font-black
                        tabular-nums
                      "
                      style={{
                        fontFamily:
                          'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                      }}
                    >
                      {item.value}
                    </p>
                  </div>

                  <p
                    className="
                      mt-3
                      text-[8px]
                      md:text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-white/50
                      font-mono
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-red-500/10 my-10 md:my-14" />

        {/* Developers Section */}
        {/* Developers Section */}
        <div className="mt-14 flex flex-col items-center text-center">
          <p className="text-red-500 uppercase tracking-[0.35em] text-[10px] font-mono mb-6">
            Built By
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                name: "Sagar K",
                initials: "SK",
                github: "https://github.com/DKS2424",
              },
              {
                name: "Rohith Achar",
                initials: "RA",
                github: "https://github.com/RohithAchar",
              },
            ].map((dev) => (
              <a
                key={dev.name}
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-500/15 bg-black/40 px-10 py-7 flex flex-col items-center gap-4 hover:bg-red-500/5 transition-colors duration-300"
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full border border-red-500/40 bg-[#1a0000] flex items-center justify-center">
                  <span className="text-red-400 font-mono font-bold text-xl tracking-wider">
                    {dev.initials}
                  </span>
                </div>

                <p className="text-white font-mono text-base tracking-[0.08em] text-center">
                  {dev.name}
                </p>
                <p className="text-red-500/70 font-mono text-[10px] uppercase tracking-[0.3em] -mt-2 text-center">
                  Developer
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-6
            mt-10
          "
        >
          <div>
            <p
              className="
                text-red-500
                uppercase
                tracking-[0.3em]
                text-[10px]
                font-mono
                mb-2
              "
            >
              MCA, RIT
            </p>

            <p className="text-base md:text-lg text-white/50">
              Signal frequency: 88.6 MHz
            </p>
          </div>

          <div className="text-left md:text-right">
            <p
              className="
                text-white/40
                text-sm
                md:text-base
                uppercase
                tracking-[0.25em]
                font-mono
              "
            >
              © 2026 ABHYUDAY
            </p>

            <p
              className="
                mt-2
                text-white/30
                text-xs
                md:text-sm
                tracking-[0.2em]
                uppercase
                font-mono
              "
            >
              RIT Network [LIVE]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
