import { COLORS, SHADOW, RADIUS } from "../../theme";

function MetricCard({
  title,
  value,
  subtitle,
  color,
  icon,
}) {
  return (
    <div
      style={{
        background: COLORS.panel,
        borderRadius: RADIUS.card,
        padding: "18px",
        borderLeft: `5px solid ${color}`,
        boxShadow: SHADOW.card,
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(0,0,0,0.35)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = SHADOW.card;
      }}

    >
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
            }}
          >
            {title}
          </div>

          <h2
            style={{
              margin: "8px 0",
              color: COLORS.text,
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            {value}
          </h2>

          <div
            style={{
              color: COLORS.textSecondary,
              fontSize: "12px",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: "14px",
            background: color,
            boxShadow: `0 8px 18px ${color}55`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default MetricCard;