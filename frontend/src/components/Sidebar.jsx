function MenuItem({ text, active = false }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: "10px",
        marginBottom: "6px",
        cursor: "pointer",
        background: active ? "#1e293b" : "transparent",
        borderLeft: active ? "4px solid #3b82f6" : "4px solid transparent",
        transition: "all 0.25s ease",
        fontSize: "15px",
        fontWeight: active ? "600" : "500",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = "#1e293b";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = "transparent";
        }
      }}
    >
      {text}
    </div>
  );
}

function Sidebar() {
  return (
    <div
      style={{
        width: "190px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "20px 14px",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: "24px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "700",
          letterSpacing: "0.5px",
        }}
      >
        🚨 SentinelAI
      </h2>

      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.12)",
          marginBottom: "22px",
        }}
      />

      <MenuItem text="🏠 Dashboard" active />
      <MenuItem text="📹 Live Monitoring" />
      <MenuItem text="🤖 Master AI" />
      <MenuItem text="⚠️ Risk Engine" />
      <MenuItem text="👷 Workers" />
      <MenuItem text="📋 Permits" />
      <MenuItem text="🗺️ Factory Map" />
      <MenuItem text="🚨 Emergency" />
      <MenuItem text="📄 Reports" />
    </div>
  );
}

export default Sidebar;