function AIPermitDecision({ sensor, permit, worker, ppe }) {
  let decision = "✅ APPROVED";
  let color = "#22c55e";
  let reason = "Conditions are safe.";

  if (
    sensor.gas > 70 ||
    sensor.pressure > 130 ||
    ppe["NO-Hardhat"] > 0 ||
    ppe["NO-Safety Vest"] > 0 ||
    ppe["NO-Mask"] > 0
  ) {
    decision = "❌ REJECTED";
    color = "#ef4444";
    reason =
      "Unsafe conditions detected. Permit cannot be approved.";
  } else if (sensor.temperature > 55) {
    decision = "⚠ REVIEW REQUIRED";
    color = "#f59e0b";
    reason =
      "Temperature is high. Safety Officer approval required.";
  }

  return (
    <div
      style={{
        background: "#1f2937",
        padding: "16px",
        borderRadius: "10px",
        marginTop: "12px",
        color: "white",
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
          📄 AI Permit Intelligence
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
          {decision.replace(/^.\s*/, "")}
        </span>
      </div>

      <div
        style={{
          background: "#111827",
          borderLeft: `4px solid ${color}`,
          borderRadius: "8px",
          padding: "12px",
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            color,
            fontSize: "26px",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          {decision}
        </div>

        <div
          style={{
            color: "#E5E7EB",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {reason}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "10px",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              color: "#94A3B8",
              fontSize: "12px",
            }}
          >
            Permit Type
          </div>

          <div
            style={{
              marginTop: "4px",
              fontWeight: "600",
            }}
          >
            {permit.type}
          </div>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              color: "#94A3B8",
              fontSize: "12px",
            }}
          >
            Worker Zone
          </div>

          <div
            style={{
              marginTop: "4px",
              fontWeight: "600",
            }}
          >
            {worker.zone}
          </div>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              color: "#94A3B8",
              fontSize: "12px",
            }}
          >
            Gas Level
          </div>

          <div
            style={{
              marginTop: "4px",
              fontWeight: "600",
            }}
          >
            {sensor.gas} ppm
          </div>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              color: "#94A3B8",
              fontSize: "12px",
            }}
          >
            Temperature
          </div>

          <div
            style={{
              marginTop: "4px",
              fontWeight: "600",
            }}
          >
            {sensor.temperature}°C
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIPermitDecision;