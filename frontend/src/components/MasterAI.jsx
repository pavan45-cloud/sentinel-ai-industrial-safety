import { useEffect, useState } from "react";
import axios from "axios";

import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";

import AIStats from "./masterAI/AIStats";
import AIAgents from "./masterAI/AIAgents";
import AIEvidence from "./masterAI/AIEvidence";
import AIRecommendations from "./masterAI/AIRecommendations";
import EmergencyTeams from "./masterAI/EmergencyTeams";
import DecisionTimeline from "./masterAI/DecisionTimeline";

function MasterAI({
  sensor,
  worker,
  permit,
  ppe,
  result,
  setResult,
}) {
  const [workers, setWorkers] = useState(0);

  useEffect(() => {
    async function fetchDecision() {
      try {
        const workerRes = await axios.get(
          "https://sentinel-ai-industrial-safety.onrender.com/detect-workers"
        );

        setWorkers(workerRes.data.workers);

        const res = await axios.post(
          "https://sentinel-ai-industrial-safety.onrender.com/master-ai",
          {
            sensor,

            permit,
            worker: {
              ...worker,
              count: workerRes.data.workers,
            },
            ppe,
          }
        );

        setResult(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchDecision();
  }, [sensor, worker, permit, ppe]);

  if (!result)
    return (
      <GlassPanel
        style={{
          textAlign: "center",
          padding: "40px 24px",
        }}
      >
        <h2
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          🤖 Initializing Master AI...
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            marginBottom: "18px",
          }}
        >
          Loading AI agents and industrial safety intelligence...
        </p>

        <div
          style={{
            width: "180px",
            height: "6px",
            background: "#1f2937",
            borderRadius: "999px",
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "65%",
              height: "100%",
              background: "#3b82f6",
              borderRadius: "999px",
            }}
          />
        </div>
      </GlassPanel>
    );

  const ppeData = result.ppe ?? {
    Person: 0,
    "NO-Hardhat": 0,
    "NO-Safety Vest": 0,
    "NO-Mask": 0,
  };

  const totalViolations =
    ppeData["NO-Hardhat"] +
    ppeData["NO-Safety Vest"] +
    ppeData["NO-Mask"];

  const compliantWorkers =
    ppeData.Person -
    Math.max(
      ppeData["NO-Hardhat"],
      ppeData["NO-Safety Vest"],
      ppeData["NO-Mask"]
    );

  return (
    <GlassPanel style={{ marginTop: "20px" }}>
      <SectionTitle
        title="🧠 Master AI Coordinator"
        subtitle="Central AI Engine coordinating every industrial safety module"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            color: "#9CA3AF",
            fontSize: "13px",
          }}
        >
          🕒 Last AI Decision: {new Date().toLocaleTimeString()}
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          ● AI ONLINE
        </div>
      </div>

      <AIStats
        result={result}
        workers={workers}
        compliantWorkers={compliantWorkers}
        totalViolations={totalViolations}
      />

      <AIAgents
        agents={result.triggered_agents}
      />

      <AIEvidence
        evidence={result.evidence}
      />

      <AIRecommendations
        recommendations={result.recommendation}
      />

      <EmergencyTeams
        emergency={result.emergency}
      />

      <DecisionTimeline
        result={result}
      />
    </GlassPanel>
  );
}

export default MasterAI;