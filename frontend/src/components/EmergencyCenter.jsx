import EmergencyOrchestrator from "./EmergencyOrchestrator";
import AIPermitDecision from "./AIPermitDecision";
import IncidentReport from "./IncidentReport";

function EmergencyCenter({
  sensor,
  worker,
  permit,
  ppe,
}) {
  return (
    <div
      style={{
        marginTop: "14px",
      }}
    >
      <div
        style={{
          marginBottom: "14px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            margin: 0,
            fontSize: "22px",
            fontWeight: "700",
            letterSpacing: "0.3px",
          }}
        >
          🚨 Emergency Operations Center
        </h2>

        <p
          style={{
            margin: "6px 0 0",
            color: "#94A3B8",
            fontSize: "13px",
            lineHeight: 1.4,
          }}
        >
          AI-driven emergency coordination, permit intelligence, and incident reporting.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "16px",
          alignItems: "start",
        }}
      >
        <EmergencyOrchestrator
          sensor={sensor}
          ppe={ppe}
        />

        <AIPermitDecision
          sensor={sensor}
          permit={permit}
          worker={worker}
          ppe={ppe}
        />

        <IncidentReport
          sensor={sensor}
          ppe={ppe}
        />
      </div>
    </div>
  );
}

export default EmergencyCenter;