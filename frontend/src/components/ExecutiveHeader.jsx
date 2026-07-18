import LiveClock from "./LiveClock";
import GlassPanel from "./ui/GlassPanel";
import { COLORS } from "../theme";

function ExecutiveHeader() {

  return (

    <GlassPanel
      style={{
        marginBottom: "25px",
        padding: "18px 24px",
      }}
    >

      {/* Top Row */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >

        <div>

          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "white",
              fontWeight: "700",
            }}
          >
            🏭 AI Industrial Safety Command Center
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: COLORS.textSecondary,
              fontSize: "15px",
            }}
          >
            Unified AI Platform for Industrial Risk Monitoring,
            Worker Safety, Permit Intelligence and Emergency Response
          </p>

        </div>

        <LiveClock />

      </div>

      {/* Bottom Status */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: "15px",
          marginTop: "18px",
        }}
      >

        <Status
          color="#22c55e"
          title="Plant Status"
          value="🟢 Operational"
        />

        <Status
          color="#3b82f6"
          title="AI Engine"
          value="🟢 Running"
        />

        <Status
          color="#06b6d4"
          title="Monitoring"
          value="🟢 24 / 7"
        />

        <Status
          color="#f59e0b"
          title="Safety System"
          value="🟢 Active"
        />

      </div>

    </GlassPanel>
  );
}

function Status({
  color,
  title,
  value,
}) {

  return (

    <div
      style={{
        background: "#1f2937",
        borderRadius: "14px",
        padding: "14px 16px",
        borderLeft: `5px solid ${color}`,
        transition: "0.25s ease",
      }}
    >

      <div
        style={{
          color: "#9CA3AF",
          fontSize: "13px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {value}
      </div>

    </div>

  );

}

export default ExecutiveHeader;