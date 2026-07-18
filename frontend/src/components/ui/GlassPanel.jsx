import { COLORS, SHADOW, RADIUS } from "../../theme";

function GlassPanel({ children, style = {} }) {
  return (
    <div
      style={{
        background: COLORS.panel,
        border: `1px solid ${COLORS.border}`,
        borderRadius: RADIUS.card,
        boxShadow: SHADOW.card,
        padding: "20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default GlassPanel;