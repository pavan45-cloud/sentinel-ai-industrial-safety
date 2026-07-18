import GeoSafetyHeatmap from "./GeoSafetyHeatmap";
import LiveCCTV from "./LiveCCTV";
import CompoundRiskEngine from "./CompoundRiskEngine";

function ControlCenter({
  sensor,
  worker,
  permit,
  ppe,
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2
        style={{
          color: "white",
          marginBottom: "15px",
          fontSize: "22px",
          fontWeight: "700",
        }}
      >
        🎯 Command & Control Center
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        {/* Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <GeoSafetyHeatmap
            sensor={sensor}
            worker={worker}
            permit={permit}
            ppe={ppe}
          />

          <CompoundRiskEngine
            sensor={sensor}
            worker={worker}
            permit={permit}
            ppe={ppe}
          />
        </div>

        {/* Right */}
        <LiveCCTV />
      </div>
    </section>
  );
}

export default ControlCenter;