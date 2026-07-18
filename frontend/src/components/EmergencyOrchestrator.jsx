function EmergencyOrchestrator({ sensor, ppe }) {
  let level = "NORMAL";
  let color = "#22c55e";
  let action = "No emergency action required. Plant operations are running normally.";

  if (
    sensor.gas > 70 &&
    sensor.temperature > 55 &&
    sensor.pressure > 130
  ) {
    level = "CRITICAL";
    color = "#ef4444";
    action =
      "🚨 Evacuate workers immediately. Notify the Emergency Response Team and suspend all plant operations.";
  } else if (
    sensor.gas > 60 ||
    sensor.temperature > 50 ||
    ppe["NO-Hardhat"] > 0 ||
    ppe["NO-Safety Vest"] > 0 ||
    ppe["NO-Mask"] > 0
  ) {
    level = "WARNING";
    color = "#f59e0b";
    action =
      "⚠ Safety Officer should inspect the affected area immediately and correct all PPE violations.";
  }

  return (
    <div
      style={{
        background: "#1f2937",
        color: "white",
        padding: "16px",
        borderRadius: "10px",
        marginTop: "12px",
        border: `1px solid ${color}55`,
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          🚨 Emergency Response Orchestrator
        </h2>

        <span
          style={{
            background: color,
            color: "#fff",
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "11px",
            fontWeight: "700",
          }}
        >
          {level}
        </span>
      </div>

      <div
        style={{
          background: "#111827",
          borderLeft: `4px solid ${color}`,
          borderRadius: "8px",
          padding: "12px",
        }}
      >
        <div
          style={{
            color,
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          {level}
        </div>

        <p
          style={{
            margin: 0,
            color: "#E5E7EB",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {action}
        </p>
      </div>
    </div>
  );
}

export default EmergencyOrchestrator;