function KnowledgeGraph() {
  return (
    <div
      style={{
        background: "#1f2937",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2>🧠 AI Knowledge Graph</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >

        <div
          style={{
            background: "#2563eb",
            padding: "15px",
            borderRadius: "10px",
            minWidth: "120px",
            textAlign: "center",
          }}
        >
          Sensor
        </div>

        ➜

        <div
          style={{
            background: "#16a34a",
            padding: "15px",
            borderRadius: "10px",
            minWidth: "120px",
            textAlign: "center",
          }}
        >
          Permit
        </div>

        ➜

        <div
          style={{
            background: "#9333ea",
            padding: "15px",
            borderRadius: "10px",
            minWidth: "120px",
            textAlign: "center",
          }}
        >
          Worker
        </div>

        ➜

        <div
          style={{
            background: "#dc2626",
            padding: "15px",
            borderRadius: "10px",
            minWidth: "120px",
            textAlign: "center",
          }}
        >
          Risk
        </div>

      </div>

      <p style={{ marginTop: "20px" }}>
        AI correlates sensor readings, work permits, worker activity and PPE
        compliance to identify compound risks before an incident occurs.
      </p>
    </div>
  );
}

export default KnowledgeGraph;