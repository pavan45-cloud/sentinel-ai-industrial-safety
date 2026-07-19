
import MetricCard from "../ui/MetricCard";
import GlassPanel from "../ui/GlassPanel";

function AIStats({
  result,
  workers,
  totalViolations,
}) {
  const risk =
    result.compound_risk?.level || result.final_risk;

  const riskColor =
    risk === "CRITICAL"
      ? "#ef4444"
      : risk === "HIGH"
        ? "#f59e0b"
        : risk === "MEDIUM"
          ? "#eab308"
          : "#22c55e";

  return (
    <>
      {/* Executive Decision */}

      <GlassPanel style={{ marginBottom: 22 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "white",
            }}
          >
            🧠 Executive AI Decision
          </h2>

          <span
            style={{
              background: riskColor,
              color: "white",
              padding: "5px 12px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            {risk}
          </span>
        </div>

        <h1
          style={{
            textAlign: "center",
            color: riskColor,
            fontSize: "42px",
            margin: "6px 0",
            fontWeight: 800,
          }}
        >
          {risk}
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#9CA3AF",
            fontSize: "14px",
            marginTop: "10px",
            lineHeight: 1.6,
          }}
        >
          {result.compound_risk?.explanation}
        </p>
      </GlassPanel>

      {/* KPI Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "16px",
          marginBottom: "22px",
        }}
      >
        <MetricCard
          title="Master AI Confidence"
          value={`${result.confidence}%`}
          color="#3b82f6"
        />

        <MetricCard
          title="Compound Score"
          value={result.compound_risk?.score ?? "-"}
          color="#8b5cf6"
        />

        <MetricCard
          title="Workers"
          value={workers}
          color="#22c55e"
        />

        <MetricCard
          title="Violations"
          value={totalViolations}
          color="#ef4444"
        />
      </div>

      {/* AI Memory */}

      <GlassPanel style={{ marginBottom: 22 }}>
        <h3
          style={{
            marginTop: 0,
            marginBottom: "18px",
            color: "white",
          }}
        >
          🧠 AI Memory & Trend Analysis
        </h3>

        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          <InfoRow
            title="Prediction"
            value={result.memory?.prediction}
          />

          <InfoRow
            title="Risk"
            value={result.memory?.risk}
          />

          <InfoRow
            title="Trend Confidence"
            value={`${result.memory?.confidence}%`}
          />

          <InfoRow
            title="Explanation"
            value={result.memory?.explanation}
          />
        </div>
      </GlassPanel>
    </>
  );
}

function InfoRow({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        padding: "12px 14px",
        background: "#111827",
        borderRadius: "10px",
      }}
    >
      <span
        style={{
          color: "#9CA3AF",
          fontWeight: 600,
        }}
      >
        {title}
      </span>

      <span
        style={{
          color: "white",
          fontWeight: 600,
          textAlign: "right",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default AIStats;