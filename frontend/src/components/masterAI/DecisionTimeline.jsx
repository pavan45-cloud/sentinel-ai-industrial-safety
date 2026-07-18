

import GlassPanel from "../ui/GlassPanel";
import SectionTitle from "../ui/SectionTitle";

function getStatusColor(status) {
  switch (status) {
    case "CRITICAL":
    case "VIOLATION":
      return "#ef4444";

    case "HIGH":
    case "WARNING":
      return "#f59e0b";

    case "SAFE":
    case "SUCCESS":
      return "#22c55e";

    case "INFO":
      return "#3b82f6";

    default:
      return "#64748b";
  }
}

function Block({ title, color, icon, children }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          color,
          fontWeight: 700,
          fontSize: "13px",
          letterSpacing: ".6px",
          marginBottom: "6px",
        }}
      >
        {icon} {title}
      </div>

      <div
        style={{
          background: "#1f2937",
          borderRadius: "10px",
          padding: "12px 14px",
          color: "#E5E7EB",
          lineHeight: 1.6,
          fontSize: "14px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function DecisionTimeline({ result }) {
  const timeline = result.timeline || [];

  return (
    <GlassPanel>
      <SectionTitle
        title="🧠 Industrial Intelligence Layer"
        subtitle="AI agents collaborate and exchange intelligence before making the final safety decision."
      />
      <div
        style={{
          maxHeight: "700px",   // choose a height that looks good
          overflowY: "auto",
          paddingRight: "6px",
        }}
      ></div>

      {timeline.map((step, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            border: "1px solid #334155",
            borderRadius: "14px",
            padding: "20px",
            background: "#111827",
            transition: "all .25s ease",
          }}
        >
          {/* Header */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <strong
              style={{
                color: "#fff",
                fontSize: "16px",
              }}
            >
              Step {index + 1} • {step.agent}
            </strong>

            <span
              style={{
                fontSize: "12px",
                color: "#94a3b8",
              }}
            >
              {step.time}
            </span>
          </div>

          {/* Status */}

          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "999px",
              background: getStatusColor(step.status),
              color: "white",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            {step.status}
          </div>

          <Block
            title="INPUT"
            color="#38bdf8"
            icon="📥"
          >
            {step.input}
          </Block>

          <Block
            title="ANALYSIS"
            color="#facc15"
            icon="🧠"
          >
            {step.analysis}
          </Block>

          <Block
            title="OUTPUT"
            color="#22c55e"
            icon="📤"
          >
            {step.output}
          </Block>

          {step.next_agent !== "END" && (
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                borderRadius: "10px",
                background: "#0f172a",
                textAlign: "center",
                color: "#60a5fa",
                fontWeight: 600,
              }}
            >
              🔄 Forwarded to <strong>{step.next_agent}</strong>
            </div>
          )}
        </div>
      ))}
    </GlassPanel>
  );
}

export default DecisionTimeline;