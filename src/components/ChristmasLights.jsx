import { useEffect, useRef } from "react";

export function ChristmasLights({ active }) {
  const bulbContainerRef = useRef(null);

  useEffect(() => {
    if (!bulbContainerRef.current) return;

    const bulbs = bulbContainerRef.current.querySelectorAll(".bulb");

    bulbs.forEach((bulb) => {
      if (active) {
        bulb.classList.remove("inactive");
      } else {
        bulb.classList.add("inactive");
      }
    });
  }, [active]);

  return (
    <div
      style={{
        position: "fixed",
        top: "4%",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        zIndex: 9999,
        justifyContent: "center",
      }}
      ref={bulbContainerRef}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div
            className="bulb"
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "1.5px solid #444",
            }}
          />
          {i < 15 && (
            <div
              style={{
                width: 20,
                height: 1.5,
                background: "#444",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
