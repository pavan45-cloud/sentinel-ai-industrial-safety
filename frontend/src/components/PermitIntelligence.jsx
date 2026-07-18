import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";

function PermitIntelligence({
  sensor,
  worker,
  permit,
  ppe,
}) {
  let decision = "APPROVED";
  let color = "#22c55e";
  let reason = "All safety conditions satisfied.";

  if (sensor.gas > 70) {
    decision = "REJECTED";
    color = "#ef4444";
    reason = "Gas concentration exceeds safe threshold.";
  } else if (sensor.temperature > 55) {
    decision = "ON HOLD";
    color = "#f59e0b";
    reason = "High temperature detected.";
  }

  const permitInfo = [
    { label: "Permit Type", value: permit.type },
    { label: "Current Status", value: permit.status },
    { label: "Worker Zone", value: worker.zone },
    { label: "Workers Present", value: worker.count },
  ];

  return (
    <GlassPanel>
      <SectionTitle
        title="📄 AI Permit Intelligence"
        subtitle="Real-time permit validation using sensor, worker and safety data"
      />

      <div
        style={{
          background: "#111827",
          borderLeft: `6px solid ${color}`,
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color,
          }}
        >
          {decision}
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            marginTop: "10px",
          }}
        >
          {reason}
        </p>
      </div>

      {permitInfo.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid #1f2937",
          }}
        >
          <span
            style={{
              color: "#9CA3AF",
            }}
          >
            {item.label}
          </span>

          <span
            style={{
              color: "white",
              fontWeight: "600",
            }}
          >
            {item.value}
          </span>
        </div>
      ))}

      <div
        style={{
          marginTop: "20px",
          background: "#0f172a",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h4
          style={{
            marginTop: 0,
            color: "#38bdf8",
          }}
        >
          🤖 AI Decision Factors
        </h4>

        <ul
          style={{
            color: "#CBD5E1",
            lineHeight: "1.8",
            paddingLeft: "20px",
          }}
        >
          <li>Gas Level : {sensor.gas} ppm</li>
          <li>Temperature : {sensor.temperature} °C</li>
          <li>Pressure : {sensor.pressure} kPa</li>
          <li>Workers Inside : {worker.count}</li>
          <li>Permit Category : {permit.type}</li>
        </ul>
      </div>
    </GlassPanel>
  );
}

export default PermitIntelligence;