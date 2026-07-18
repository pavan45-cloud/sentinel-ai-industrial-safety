function EmergencyResponse({ sensor }) {

  const critical =
    sensor.gas > 70 &&
    sensor.temperature > 55 &&
    sensor.pressure > 130;

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#1f2937",
        padding: "20px",
        borderRadius: "10px",
        color: "white",
      }}
    >
      <h2>🚨 Emergency Response Orchestrator</h2>

      {critical ? (
        <>
          <h1 style={{ color: "red" }}>🔴 Emergency Activated</h1>

          <ul style={{ lineHeight: "2" }}>
            <li>🚨 Factory Alarm Triggered</li>
            <li>👷 Evacuate All Workers</li>
            <li>📞 Notify Safety Officer</li>
            <li>🛑 Shut Down Gas Pipeline</li>
            <li>⚡ Stop High-Risk Equipment</li>
            <li>📄 Generate Incident Report</li>
          </ul>

          <h3>⏱ Estimated Response Time: 12 Seconds</h3>
        </>
      ) : (
        <h3 style={{ color: "lightgreen" }}>
          ✅ No emergency actions required.
        </h3>
      )}
    </div>
  );
}

export default EmergencyResponse;