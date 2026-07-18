import IncidentPrediction from "./IncidentPrediction";
import ComplianceAudit from "./ComplianceAudit";
import Recommendation from "./Recommendation";

function AIInsights({ sensor }) {
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: "0 0 6px",
          fontWeight: "700",
          fontSize: "22px",
        }}
      >
        🤖 AI Decision Center
      </h2>

      <p
        style={{
          color: "#94A3B8",
          marginBottom: "14px",
          fontSize: "13px",
          lineHeight: 1.5,
        }}
      >
        {sensor.gas > 70 || sensor.temperature > 55 || sensor.pressure > 130
          ? "🔴 Critical condition detected • AI coordinating emergency response."
          : sensor.gas > 50 || sensor.temperature > 45 || sensor.pressure > 115
          ? "🟡 Elevated operational risk • AI increasing monitoring."
          : "🟢 Plant operating normally • AI continuously monitoring all systems."}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          alignItems: "start",
        }}
      >
        <IncidentPrediction sensor={sensor} />
        <ComplianceAudit sensor={sensor} />
        <Recommendation sensor={sensor} />
      </div>
    </div>
  );
}

export default AIInsights;