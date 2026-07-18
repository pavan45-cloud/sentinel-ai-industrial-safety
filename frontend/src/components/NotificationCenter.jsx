import { useEffect, useState } from "react";

function NotificationCenter({ sensor }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    let newAlert = null;

    if (sensor.gas >= 90) {
      newAlert = "🚨 Critical Gas Concentration Detected";
    } else if (sensor.temperature >= 70) {
      newAlert = "🔥 Critical Temperature Detected";
    } else if (sensor.pressure >= 150) {
      newAlert = "⚠ Critical Pressure Detected";
    } else if (sensor.gas >= 70) {
      newAlert = "🟠 High Gas Level";
    }

    if (newAlert) {
      setAlerts((prev) => {
        // Prevent duplicate consecutive alerts
        if (prev.length && prev[0].message === newAlert) return prev;

        const updated = [
          {
            time: new Date().toLocaleTimeString(),
            message: newAlert,
          },
          ...prev,
        ];

        return updated.slice(0, 6);
      });
    }
  }, [sensor]);

  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "10px",
        padding: "16px",
        color: "white",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        🔔 Live Alert Center
      </h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          margin: "6px 0 14px",
        }}
      >
        Latest AI-generated safety notifications
      </p>

      {alerts.length === 0 ? (
        <div
          style={{
            background: "#111827",
            borderRadius: "8px",
            padding: "14px",
            textAlign: "center",
            color: "#9CA3AF",
            fontSize: "14px",
          }}
        >
          ✅ No active alerts
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "10px",
          }}
        >
          {alerts.map((alert, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                borderLeft: "4px solid #f59e0b",
                borderRadius: "8px",
                padding: "10px 12px",
                transition: "all .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#94A3B8",
                  marginBottom: "4px",
                  fontWeight: "600",
                }}
              >
                {alert.time}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  lineHeight: 1.4,
                }}
              >
                {alert.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotificationCenter;