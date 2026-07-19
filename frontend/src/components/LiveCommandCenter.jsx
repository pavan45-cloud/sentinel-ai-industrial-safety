import GeoSafetyHeatmap from "./GeoSafetyHeatmap";
import LiveCCTV from "./LiveCCTV";
import MasterAI from "./MasterAI";

function LiveCommandCenter({
  sensor,
  worker,
  permit,
  ppe,
  masterAIResult,
  setMasterAIResult,
}) {
  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "6px",
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: "800",
            background: "linear-gradient(90deg,#60A5FA,#22D3EE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: ".3px",
          }}
        >
          🎯 Live Command Center
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "6px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: "#16a34a",
              color: "white",
              padding: "3px 9px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: "700",
              boxShadow: "0 0 10px rgba(34,197,94,.45)",
            }}
          >
            ● LIVE
          </span>

          <span
            style={{
              color: "#9CA3AF",
              fontSize: "12px",
            }}
          >
            AI monitoring industrial operations in real time
          </span>
        </div>

        <p
          style={{
            color: "#9CA3AF",
            marginTop: "4px",
            marginBottom: 0,
            fontSize: "13px",
            lineHeight: 1.4,
          }}
        >
          Real-time monitoring of AI, CCTV, plant safety and operational intelligence.
        </p>
      </div>

      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,.08)",
          margin: "12px 0 16px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "16px",
        }}
      >
        <GeoSafetyHeatmap
          sensor={sensor}
          worker={worker}
          permit={permit}
          ppe={ppe}
        />

        <LiveCCTV />

        <MasterAI
          sensor={sensor}
          worker={worker}
          permit={permit}
          ppe={ppe}
          result={masterAIResult}
          setResult={setMasterAIResult}
        />
      </div>
    </div>
  );
}

export default LiveCommandCenter;