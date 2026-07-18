import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";

function Camera({
  title,
  status,
  color,
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: "15px",
        overflow: "hidden",
        border: "1px solid #1f2937",
        transition: "all .25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >

      <div
        style={{
          height: "170px",
          background:
            "linear-gradient(135deg,#111827,#1e293b,#111827)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "70px",
          position: "relative",
          overflow: "hidden",

        }}
      >
        <>
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "#dc2626",
              color: "white",
              padding: "4px 8px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 700,
            }}
          >
            ● REC
          </div>

          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#22c55e",
              fontWeight: 700,
              fontSize: "12px",
            }}
          >
            LIVE
          </div>

          📹
        </>

      </div>

      <div
        style={{
          padding: "15px",
        }}
      >
        <h3
          style={{
            color: "white",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <div
          style={{
            color: "#9CA3AF",
            fontSize: "12px",
            marginTop: "4px",
          }}
        >
          AI Vision • 1080p • 30 FPS
        </div>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >

          <span
            style={{
              color: "white",
              background: color,
              padding: "4px 10px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "12px",
            }}
          >
            {status}
          </span>

          <span
            style={{
              color: "#22c55e",
              fontWeight: "bold",
              animation: "pulse 1.2s infinite",
            }}
          >
            🟢 LIVE
          </span>
        </div>
        <div
          style={{
            marginTop: "8px",
            color: "#6B7280",
            fontSize: "12px",
          }}
        >
          Last Frame: {new Date().toLocaleTimeString()}
        </div>

      </div>
    </div>
  );
}

function LiveCCTV() {
  return (
    <GlassPanel>

      <SectionTitle
        title="🎥 AI Smart CCTV"
        subtitle="Computer Vision Surveillance"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "16px",
        }}
      >
        <Camera
          title="CAM-01 | Boiler Area"
          status="Monitoring"
          color="#22c55e"
        />

        <Camera
          title="Tank Farm"
          status="PPE Violation"
          color="#ef4444"
        />

        <Camera
          title="Assembly Line"
          status="Safe"
          color="#22c55e"
        />

        <Camera
          title="Warehouse"
          status="Smoke Detected"
          color="#f59e0b"
        />
      </div>

    </GlassPanel>
  );
}

export default LiveCCTV;
