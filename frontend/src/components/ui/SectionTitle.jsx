import { COLORS } from "../../theme";

function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <h2
        style={{
          color: COLORS.text,
          margin: 0,
          fontSize: "22px",
          fontWeight: "700",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: COLORS.textSecondary,
            marginTop: "6px",
            marginBottom: 0,
            fontSize: "14px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;