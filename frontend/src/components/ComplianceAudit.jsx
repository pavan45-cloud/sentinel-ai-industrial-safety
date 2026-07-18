import { useEffect, useState } from "react";
import axios from "axios";

function ComplianceAudit({ sensor }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadCompliance() {
      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/compliance",
          sensor
        );

        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    loadCompliance();
  }, [sensor]);

  if (!data) return null;

  let color = "#22c55e";

  if (data.status === "WARNING") color = "#f59e0b";
  if (data.status === "FAIL") color = "#ef4444";

  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "16px",
        borderRadius: "10px",
        marginTop: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        📋 Quality & Compliance Audit
      </h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          marginTop: "6px",
          marginBottom: "12px",
          lineHeight: 1.4,
        }}
      >
        AI-powered compliance verification based on live operational conditions.
      </p>

      <hr
        style={{
          border: 0,
          borderTop: "1px solid rgba(255,255,255,.08)",
          margin: "12px 0",
        }}
      />

      <h1
        style={{
          color,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: "8px 0",
          fontSize: "30px",
        }}
      >
        {data.status === "PASS"
          ? "🟢 PASS"
          : data.status === "WARNING"
            ? "🟡 WARNING"
            : "🔴 FAIL"}
      </h1>

      <div
        style={{
          background: "#111827",
          padding: "10px",
          borderRadius: "8px",
          margin: "10px 0 14px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#94A3B8",
            fontSize: "12px",
          }}
        >
          Compliance Score
        </div>

        <div
          style={{
            color,
            fontSize: "26px",
            fontWeight: "700",
            marginTop: "4px",
          }}
        >
          {data.score}/100
        </div>
      </div>
      <div
        style={{
          maxHeight: "220px",
          overflowY: "auto",
          paddingRight: "6px",
        }}
      >
        <h3
          style={{
            margin: "10px 0 6px",
            fontSize: "16px",
          }}
        >
          ❌ Violations
        </h3>

        <ul
          style={{
            marginTop: 0,
            paddingLeft: "18px",
            lineHeight: 1.5,
          }}
        >
          {data.violations.length === 0 ? (
            <li style={{ color: "#22c55e" }}>
              ✔ No compliance violations detected
            </li>
          ) : (
            data.violations.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          )}
        </ul>

        <h3
          style={{
            margin: "12px 0 6px",
            fontSize: "16px",
          }}
        >
          ✅ Recommendations
        </h3>

        <ul
          style={{
            marginTop: 0,
            paddingLeft: "18px",
            lineHeight: 1.5,
          }}
        >
          {data.recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>







    </div>
  );
}

export default ComplianceAudit;