

import { COLORS, RADIUS, SHADOW } from "../theme";

function RiskCard({ risk, color, confidence }) {
  let description = "Plant operating safely";
  let icon = "🟢";

  if (risk.toUpperCase().includes("CRITICAL")) {
    description = "Emergency response activated";
    icon = "🚨";
  } else if (risk.toUpperCase().includes("HIGH")) {
    description = "Immediate action required";
    icon = "🔴";
  } else if (risk.toUpperCase().includes("MEDIUM")) {
    description = "Attention required";
    icon = "🟡";
  }


  return (
    <div
      style={{
        background: COLORS.panel,
        borderRadius: RADIUS.card,
        padding: "22px",
        border: `1px solid ${color}55`,
        boxShadow: SHADOW,
        transition: "all .3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = `0 12px 35px ${color}33`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = SHADOW;
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: COLORS.textSecondary,
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            AI Risk Assessment
          </div>

          <div
            style={{
              marginTop: "6px",
              color: COLORS.textSecondary,
              fontSize: "12px",
            }}
          >
            Live Industrial Analysis
          </div>
        </div>

        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: `${color}22`,
            border: `1px solid ${color}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            boxShadow: `0 0 18px ${color}33`,
          }}
        >
          ⚠️
        </div>
      </div>

      {/* Risk */}

      <div
        style={{
          marginTop: "20px",
          fontSize: "34px",
          fontWeight: 800,
          color,
          lineHeight: 1.1,
        }}
      >
        {risk}
      </div>

      {/* Status */}

      <div
        style={{
          marginTop: "12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 12px",
          borderRadius: "999px",
          background: `${color}22`,
          color,
          fontWeight: 700,
          fontSize: "13px",
        }}
      >
        <span>{icon}</span>
        <span>{description}</span>
      </div>

      {/* Confidence */}

      <div
        style={{
          marginTop: "22px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            color: COLORS.textSecondary,
            fontSize: "13px",
          }}
        >
          <span>Master AI Confidence</span>
          <span
            style={{
              color: COLORS.text,
              fontWeight: 700,
            }}
          >
            {confidence}%
          </span>
        </div>

        <div
          style={{
            height: "7px",
            background: "#1f2937",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${confidence}%`,
              height: "100%",
              background: color,
              borderRadius: "999px",
            }}
          />
        </div>
      </div>

      {/* Footer */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          color: COLORS.textSecondary,
          fontSize: "12px",
        }}
      >
        <span>🤖 Master AI Engine</span>
        <span>● Live Analysis</span>
      </div>
    </div>
  );
}

export default RiskCard;