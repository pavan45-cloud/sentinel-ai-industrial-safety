import KnowledgeGraph from "./KnowledgeGraph";
import RAGIncident from "./RAGIncident";
import AlertTimeline from "./AlertTimeline";
import IncidentHistory from "./IncidentHistory";
import AIChat from "./AIChat";

function KnowledgeCenter({ sensor, history }) {
  return (
    <div
      style={{
        marginTop: "14px",
      }}
    >
      <div
        style={{
          marginBottom: "14px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            margin: 0,
            fontSize: "22px",
            fontWeight: "700",
            letterSpacing: "0.3px",
          }}
        >
          🧠 AI Knowledge Center
        </h2>

        <p
          style={{
            margin: "6px 0 0",
            color: "#94A3B8",
            fontSize: "13px",
            lineHeight: 1.4,
          }}
        >
          AI knowledge graph, incident history, RAG analysis, timeline, and
          conversational assistant.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "16px",
          alignItems: "start",
        }}
      >
        <KnowledgeGraph />

        <RAGIncident sensor={sensor} />

        <AlertTimeline sensor={sensor} />

        <IncidentHistory history={history} />
      </div>

      <div
        style={{
          marginTop: "16px",
        }}
      >
        <AIChat />
      </div>
    </div>
  );
}

export default KnowledgeCenter;