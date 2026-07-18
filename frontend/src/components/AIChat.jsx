import { useState } from "react";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      // Get live sensor values
      const sensorResponse = await fetch("http://127.0.0.1:8000/sensors");
      const sensor = await sensorResponse.json();

      const prompt = `
      You are SentinelAI's Industrial Safety Intelligence Agent.

      Current Plant Data
      ------------------
      Gas: ${sensor.gas} ppm
      Temperature: ${sensor.temperature} °C
      Pressure: ${sensor.pressure} kPa

      Historical Industrial Incidents

      1. Visakhapatnam Steel Plant
      Cause:
      Gas accumulation during hot work.
      Result:
      Explosion killed multiple workers.

      2. IOCL Refinery
      Cause:
      Hydrocarbon leak + Maintenance.
      Result:
      Fire accident.

      3. Confined Space Accident
      Cause:
      Workers entered tank without gas testing.
      Result:
      Asphyxiation.

      4. Chemical Storage Incident
      Cause:
      Pressure increased beyond limit.
      Result:
      Tank rupture.

      OISD Guidelines

      • Stop Hot Work if gas > 70 ppm
      • Evacuate if explosive gas detected
      • PPE is mandatory
      • High pressure requires inspection
      • High temperature requires maintenance approval

      Current User Question

      ${question}

      Your Job

      Compare current sensor readings with previous incidents.
      Explain similar accidents.
      Mention violated OISD rule.
      Predict what could happen.
      Give preventive actions.
      `;

      const response = await fetch("http://127.0.0.1:8000/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: prompt,
        }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.log(error);
      setAnswer("❌ Failed to contact AI.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        background: "#1f2937",
        borderRadius: "10px",
      }}
    >
      <h2> Incident Pattern Intelligence (RAG AI)</h2>

      <input
        type="text"
        placeholder="Ask about previous industrial incidents..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
        }}
      />

      <button
        onClick={askAI}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Analyzing..." : "Ask AI"}
      </button>

      {answer && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default AIChat;