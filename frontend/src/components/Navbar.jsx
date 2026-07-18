function Navbar() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #1e293b",
      }}
    >
      <h2>🚨SentinelAI Industrial Safety Intelligence Platform</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <span>🏠 Dashboard</span>
        <span>👷 Workers</span>
        <span>📋 Permits</span>
        <span>🤖 AI</span>
        <span>📄 Reports</span>
      </div>
    </div>
  );
}

export default Navbar;