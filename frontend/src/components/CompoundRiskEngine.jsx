import { useEffect, useState } from "react";
import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";

function CompoundRiskEngine({ sensor, worker, permit, ppe }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/compound-risk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sensor,
        permit,
        worker,
        ppe,
      }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.log(err));
  }, [sensor, worker, permit, ppe]);

  if (!result) {
    return (
      <GlassPanel>
        <h2 style={{ color: "white" }}>Loading...</h2>
      </GlassPanel>
    );
  }

  const levelColor = {
    LOW: "#22c55e",
    MEDIUM: "#eab308",
    HIGH: "#f97316",
    CRITICAL: "#ef4444",
  };

  const color = levelColor[result.level] || "#3b82f6";

  return (
    <GlassPanel>
      <SectionTitle
        title="🧠 Compound Risk Intelligence"
        subtitle="AI correlation across sensors, permits, PPE and workers"
      />

      {/* Top Summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "15px",
            borderRadius: "12px",
            borderLeft: `5px solid ${color}`,
          }}
        >
          <div style={{ color: "#9CA3AF", fontSize: "13px" }}>
            Risk Level
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color,
            }}
          >
            {result.level}
          </div>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          <div style={{ color: "#9CA3AF", fontSize: "13px" }}>
            Risk Score
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "white",
            }}
          >
            {result.score}/100
          </div>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          <div style={{ color: "#9CA3AF", fontSize: "13px" }}>
            AI Confidence
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#38bdf8",
            }}
          >
            {result.confidence}%
          </div>
        </div>
      </div>

      {/* AI Explanation */}
      <div
        style={{
          background: "#0f172a",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "20px",
          border: `1px solid ${color}`,
        }}
      >
        <h3 style={{ marginTop: 0, color }}>AI Explanation</h3>

        <p
          style={{
            color: "#CBD5E1",
            lineHeight: "1.7",
          }}
        >
          {result.explanation}
        </p>
      </div>

      {/* Risk Factors */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "white" }}>Risk Factors</h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {result.reasons.map((item, index) => (
            <span
              key={index}
              style={{
                background: "#1e293b",
                padding: "8px 14px",
                borderRadius: "999px",
                border: `1px solid ${color}`,
                color: "white",
                fontSize: "14px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        {/* Predictive Risk Timeline */}

        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <h3 style={{ color: "white" }}>
            📈 Predictive Risk Timeline
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            {[
              {
                time: "Next 30 Minutes",
                risk:
                  result.level === "LOW"
                    ? "LOW"
                    : result.level === "MEDIUM"
                      ? "MEDIUM"
                      : "HIGH",
                probability:
                  result.level === "LOW"
                    ? "18%"
                    : result.level === "MEDIUM"
                      ? "42%"
                      : "68%",
              },

              {
                time: "Next 1 Hour",
                risk:
                  result.level === "LOW"
                    ? "LOW"
                    : "HIGH",
                probability:
                  result.level === "LOW"
                    ? "25%"
                    : result.level === "MEDIUM"
                      ? "58%"
                      : "82%",
              },

              {
                time: "Next 2 Hours",
                risk:
                  result.level === "LOW"
                    ? "MEDIUM"
                    : "CRITICAL",
                probability:
                  result.level === "LOW"
                    ? "40%"
                    : result.level === "MEDIUM"
                      ? "76%"
                      : "95%",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#111827",
                  borderRadius: "12px",
                  padding: "16px",
                  borderLeft: `5px solid ${levelColor[item.risk] || "#3b82f6"
                    }`,
                }}
              >
                <div
                  style={{
                    color: "#94A3B8",
                    fontSize: "13px",
                  }}
                >
                  {item.time}
                </div>

                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color:
                      levelColor[item.risk] || "#3b82f6",
                    marginTop: "8px",
                  }}
                >
                  {item.risk}
                </div>
                <div
                  style={{
                    color: "#CBD5E1",
                    marginTop: "8px",
                    fontSize: "13px",
                    lineHeight: "1.6",
                  }}
                >
                  <div>
                    📊 Probability: <strong>{item.probability}</strong>
                  </div>

                  <div style={{ marginTop: "6px", color: "#94A3B8" }}>
                    {item.risk === "CRITICAL"
                      ? "Explosion risk rapidly increasing."
                      : item.risk === "HIGH"
                        ? "Sensor trend indicates escalating hazard."
                        : "Plant conditions remain under observation."}
                  </div>
                </div>




              </div>
            ))}
          </div>
        </div>
        <h3 style={{ color: "white" }}>AI Recommendations</h3>

        {result.recommendations.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "10px",
              borderLeft: `5px solid ${color}`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

export default CompoundRiskEngine;