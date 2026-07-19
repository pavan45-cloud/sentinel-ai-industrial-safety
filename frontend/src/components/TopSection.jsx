import SensorCard from "./SensorCard";
import RiskCard from "./RiskCard";
import SafetyScore from "./SafetyScore";

import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";

function TopSection({
  sensor,
  risk,
  riskColor,
  safetyScore,
  confidence,
}) {
  return (
    <GlassPanel
      style={{
        marginBottom: "25px",
      }}
    >
      <SectionTitle
        title="📡 Live Plant Health Overview"
        subtitle="Real-time monitoring of critical industrial safety parameters"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <SensorCard
          title="Gas Level"
          value={sensor.gas}
          unit="ppm"
          icon="☣️"
        />

        <SensorCard
          title="Temperature"
          value={sensor.temperature}
          unit="°C"
          icon="🌡️"
        />

        <SensorCard
          title="Pressure"
          value={sensor.pressure}
          unit="kPa"
          icon="⚙️"
        />

        <RiskCard
          risk={risk}
          color={riskColor}
          confidence={confidence}
        />

        <SafetyScore
          score={safetyScore}
        />
      </div>
    </GlassPanel>
  );
}

export default TopSection;