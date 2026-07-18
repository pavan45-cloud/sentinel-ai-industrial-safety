import WorkerTracking from "./WorkerTracking";
import PermitIntelligence from "./PermitIntelligence";
import SCADAPanel from "./SCADAPanel";

import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";
import { COLORS } from "../theme";

function OperationsCenter({
  sensor,
  worker,
  permit,
  ppe,
}) {
  return (
    <GlassPanel
      style={{
        marginBottom: "24px",
      }}
    >
      {/* Header */}
      <SectionTitle
        title="🏭 Live Plant Operations"
        subtitle="Real-time monitoring of industrial assets, workforce and permit activities"
      />

      {/* Live Status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          padding: "14px 18px",
          background: COLORS.panelLight,
          borderRadius: "12px",
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ color: COLORS.textSecondary, fontSize: 13 }}>
              Temperature
            </div>
            <div style={{ color: COLORS.text, fontWeight: 700 }}>
              🌡 {sensor.temperature} °C
            </div>
          </div>

          <div>
            <div style={{ color: COLORS.textSecondary, fontSize: 13 }}>
              Gas Level
            </div>
            <div style={{ color: COLORS.text, fontWeight: 700 }}>
              🧪 {sensor.gas} ppm
            </div>
          </div>

          <div>
            <div style={{ color: COLORS.textSecondary, fontSize: 13 }}>
              Pressure
            </div>
            <div style={{ color: COLORS.text, fontWeight: 700 }}>
              ⚙ {sensor.pressure} PSI
            </div>
          </div>
        </div>

        <div
          style={{
            color: COLORS.success,
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          ● LIVE
        </div>
      </div>

      {/* Main Panels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        <WorkerTracking sensor={sensor} />

        <PermitIntelligence
          sensor={sensor}
          worker={worker}
          permit={permit}
          ppe={ppe}
        />

        <SCADAPanel sensor={sensor} />
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          color: COLORS.textSecondary,
          fontSize: "13px",
          borderTop: `1px solid ${COLORS.border}`,
          paddingTop: "15px",
        }}
      >
        <span>Plant Monitoring System</span>

        <span>Auto Refresh : Every 2 Seconds</span>
      </div>
    </GlassPanel>
  );
}

export default OperationsCenter;