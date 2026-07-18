import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "10px 16px",
        minWidth: "180px",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          color: "#22c55e",
          fontSize: "12px",
          fontWeight: 600,
          marginBottom: "4px",
          letterSpacing: "0.5px",
        }}
      >
        🟢 LIVE
      </div>

      <div
        style={{
          color: "#ffffff",
          fontSize: "20px",
          fontWeight: 700,
        }}
      >
        {time.toLocaleTimeString()}
      </div>

      <div
        style={{
          color: "#9CA3AF",
          fontSize: "12px",
          marginTop: "4px",
        }}
      >
        {time.toLocaleDateString(undefined, {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
    </div>
  );
}

export default LiveClock;