function DemoMode({ setSensor }) {

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
      <h2>🎮 Demo Mode</h2>

      <button
        onClick={() =>
          setSensor({
            gas: 20,
            temperature: 30,
            pressure: 90,
          })
        }
      >
        🟢 Safe
      </button>

      <button
        style={{ marginLeft: 10 }}
        onClick={() =>
          setSensor({
            gas: 55,
            temperature: 45,
            pressure: 120,
          })
        }
      >
        🟡 Medium
      </button>

      <button
        style={{ marginLeft: 10 }}
        onClick={() =>
          setSensor({
            gas: 80,
            temperature: 58,
            pressure: 120,
          })
        }
      >
        🟠 High
      </button>

      <button
        style={{ marginLeft: 10 }}
        onClick={() =>
          setSensor({
            gas: 95,
            temperature: 70,
            pressure: 170,
          })
        }
      >
        🔴 Critical
      </button>

    </div>
  );
}

export default DemoMode;