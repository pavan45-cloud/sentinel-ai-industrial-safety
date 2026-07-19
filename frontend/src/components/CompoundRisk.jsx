

import { COLORS, RADIUS, SHADOW } from "../theme";

function CompoundRisk({ sensor }) {
  let score = 0;

  if (sensor.gas > 70) score += 40;
  if (sensor.temperature > 55) score += 30;
  if (sensor.pressure > 130) score += 30;

  let level = "🟢 Low";
  let color = COLORS.success;
  let description = "Plant conditions are within safe operating limits.";

  if (score >= 80) {
    level = "🔴 Critical";
    color = COLORS.danger;
    description =
      "Immediate intervention is required to prevent a safety incident.";
  } else if (score >= 50) {
    level = "🟠 High";
    color = COLORS.warning;
    description =
      "Multiple risk factors detected. Close monitoring is recommended.";
  } else if (score >= 30) {
    level = "🟡 Medium";
    color = "#eab308";
    description =
      "Moderate risk detected. Preventive actions should be taken.";
  }

  return (
    <div
      style={{
        marginTop: "28px",
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
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          <div
            style={{
              color: COLORS.textSecondary,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: 600,
            }}
          >
            AI Compound Risk Engine
          </div>

          <div
            style={{
              marginTop: "6px",
              color: COLORS.textSecondary,
              fontSize: "12px",
            }}
          >
            Multi-Sensor Risk Fusion
          </div>
        </div>

        <div
          style={{
            padding: "5px 12px",
            borderRadius: "999px",
            background: color,
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          LIVE
        </div>
      </div>

      {/* Risk Level */}

      <div
        style={{
          fontSize: "34px",
          fontWeight: 800,
          color,
          lineHeight: 1.2,
        }}
      >
        {level}
      </div>

      <div
        style={{
          marginTop: "10px",
          color: COLORS.textSecondary,
          lineHeight: 1.6,
        }}
      >
        {description}
      </div>

      {/* Score */}

      <div style={{ marginTop: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            color: COLORS.textSecondary,
            fontSize: "13px",
          }}
        >
          <span>Compound Risk Score</span>

          <span
            style={{
              color: COLORS.text,
              fontWeight: 700,
            }}
          >
            {score}%
          </span>
        </div>

        <div
          style={{
            height: "8px",
            background: "#1f2937",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${score}%`,
              height: "100%",
              background: color,
              borderRadius: "999px",
              transition: "width .5s ease",
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
        <span>🤖 AI Fusion Engine</span>
        <span>● Real-Time Analysis</span>
      </div>
    </div>
  );
}

export default CompoundRisk;