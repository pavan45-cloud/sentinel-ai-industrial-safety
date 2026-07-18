import { COLORS } from "../theme";

function Chip({ title, value, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "#111827",
        padding: "8px 14px",
        borderRadius: "999px",
        border: `1px solid ${color}`,
        transition: "all 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >

      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />

      <span
        style={{
          color: COLORS.textSecondary,
          fontSize: "12px",
        }}
      >
        {title}
      </span>

      <strong
        style={{
          color: "white",
          fontSize: "13px",
          fontWeight: 700,
        }}
      >
        {value}
      </strong>
    </div>
  );
}

function SystemStatusBar({
  sensor,
  risk,
  worker,
  permit,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        marginBottom: "18px",
      }}
    >
      <Chip
        title="Gas"
        value={`${sensor.gas} ppm`}
        color="#3b82f6"
      />

      <Chip
        title="Temperature"
        value={`${sensor.temperature}°C`}
        color="#f97316"
      />

      <Chip
        title="Pressure"
        value={`${sensor.pressure} kPa`}
        color="#8b5cf6"
      />

      <Chip
        title="Risk"
        value={risk}
        color={
          risk.includes("High")
            ? "#ef4444"
            : risk.includes("Medium")
              ? "#f59e0b"
              : "#22c55e"
        }
      />

      <Chip
        title="Workers"
        value={worker.count}
        color="#22c55e"
      />

      <Chip
        title="Permit"
        value={permit.status}
        color="#06b6d4"
      />
    </div>
  );
}

export default SystemStatusBar;