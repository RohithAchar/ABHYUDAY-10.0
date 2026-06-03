import { useRef, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";

export const ProfileCard = memo(function ProfileCard({ id, name, image }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const timerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const scrollParent = card.closest(".overflow-x-auto") || window;
    let isScrolling = false;

    function stopScrolling() {
      if (isScrolling) {
        card.classList.remove("scrolling");
        isScrolling = false;
      }
    }

    function onScroll() {
      // Only add class once when scroll starts
      if (!isScrolling) {
        card.classList.add("scrolling");
        isScrolling = true;
      }

      // Clear previous timeout
      clearTimeout(scrollTimeoutRef.current);

      // Debounce: remove scrolling class after 300ms of no scroll
      scrollTimeoutRef.current = setTimeout(stopScrolling, 300);
    }

    // Use passive listener for better scroll performance
    scrollParent.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      scrollParent.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 flex justify-center items-center"
      onClick={() => {
        console.log("clicked", id);
        navigate(`/event/${id}`);
      }}
    >
      <div
        ref={cardRef}
        className="profile-card w-96 bg-[oklch(21%_0.034_264.665)] rounded-2xl overflow-hidden shadow-xl relative"
      >
        <div className="h-[500px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="text-center py-6">
          <h2 className="custom-fontt">{name}</h2>
        </div>
      </div>
    </div>
  );
});
