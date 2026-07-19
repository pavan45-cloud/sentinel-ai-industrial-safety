import LiveCommandCenter from "../components/LiveCommandCenter";
import { useEffect, useState } from "react";
//import SensorCard from "../components/SensorCard";
//import RiskCard from "../components/RiskCard";
//import SafetyScore from "../components/SafetyScore";
import AlertBox from "../components/AlertBox";
//import SensorChart from "../components/SensorChart";
//import CompoundRisk from "../components/CompoundRisk";
//import WorkerTracking from "../components/WorkerTracking";
//import PermitIntelligence from "../components/PermitIntelligence";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
//import AIChat from "../components/AIChat";
import CompoundRiskEngine from "../components/CompoundRiskEngine";
import WorkerStatus from "../components/WorkerStatus";
import PermitStatus from "../components/PermitStatus";
//import AIPermitDecision from "../components/AIPermitDecision";
//import EmergencyOrchestrator from "../components/EmergencyOrchestrator";
//import MasterAI from "../components/MasterAI";
//import LiveCCTV from "../components/LiveCCTV";
import IncidentPattern from "../components/IncidentPattern";
import ShiftIntelligence from "../components/ShiftIntelligence";
import TopSection from "../components/TopSection";
//import ExecutiveSection from "../components/ExecutiveSection";
import ExecutiveKPIs from "../components/ExecutiveKPIs";
import ExecutiveHeader from "../components/ExecutiveHeader";
//import ControlCenter from "../components/ControlCenter";
//import OperationsCenter from "../components/OperationsCenter";
import AIInsights from "../components/AIInsights";
import EmergencyCenter from "../components/EmergencyCenter";
import KnowledgeCenter from "../components/KnowledgeCenter";
import SystemStatusBar from "../components/SystemStatusBar";
import NotificationCenter from "../components/NotificationCenter";
import BusinessImpact from "../components/BusinessImpact";
import AIActionLog from "../components/AIActionLog";

function Dashboard() {
  const [sensor, setSensor] = useState({

    gas: 0,
    temperature: 0,
    pressure: 0,
  });
  const [demoMode, setDemoMode] = useState(false);
  const [ppe, setPPE] = useState({
    Person: 0,
    Hardhat: 0,
    "Safety Vest": 0,
    Mask: 0,
    "NO-Hardhat": 0,
    "NO-Safety Vest": 0,
    "NO-Mask": 0,
  });
  const [history, setHistory] = useState([]);
  const [worker, setWorker] = useState({
    name: "Worker 01",
    zone: "Boiler Area",
    status: "Working",
    count: 1,
  });

  const [permit, setPermit] = useState({
    type: "Hot Work",
    status: "Active",
    hot_work: true,
  });
  const [masterAIResult, setMasterAIResult] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      if (demoMode) return;
      fetch("http://127.0.0.1:8000/sensors")
        .then((res) => res.json())
        .then((data) => {
          setSensor(data.sensor);
          fetch("http://127.0.0.1:8000/ppe")
            .then((res) => res.json())
            .then((ppeData) => {
              setPPE(ppeData);
            })
            .catch((err) => console.log(err));


          setHistory((prev) => {
            const updated = [
              ...prev,
              {
                time: new Date().toLocaleTimeString(),
                gas: data.sensor.gas,
                temperature: data.sensor.temperature,
                pressure: data.sensor.pressure,
              },
            ];

            return updated.slice(-10);
          });
        })
        .catch((err) => console.log(err));
    };

    fetchData();

    const interval = setInterval(fetchData, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [demoMode]);

  const startDemo = () => {

    setDemoMode(true);

    const scenarios = [
      {
        sensor: { gas: 20, temperature: 30, pressure: 100 },
        worker: {
          name: "Worker 01",
          zone: "Boiler Area",
          status: "Working",
          count: 1,
        },
        permit: {
          type: "Hot Work",
          status: "Active",
          hot_work: true,
        },
      },

      {
        sensor: { gas: 55, temperature: 42, pressure: 120 },
        worker: {
          name: "Worker 01",
          zone: "Boiler Area",
          status: "Monitoring",
          count: 1,
        },
        permit: {
          type: "Hot Work",
          status: "Under Review",
          hot_work: true,
        },
      },

      {
        sensor: { gas: 80, temperature: 58, pressure: 138 },
        worker: {
          name: "Worker 01",
          zone: "Evacuation Route",
          status: "Evacuating",
          count: 1,
        },
        permit: {
          type: "Hot Work",
          status: "Suspended",
          hot_work: false,
        },
      },

      {
        sensor: { gas: 95, temperature: 70, pressure: 150 },
        worker: {
          name: "Worker 01",
          zone: "Safe Zone",
          status: "Evacuated",
          count: 1,
        },
        permit: {
          type: "Hot Work",
          status: "Cancelled",
          hot_work: false,
        },
      },
    ];


    let index = 0;


    setSensor(scenarios[index].sensor);
    setWorker(scenarios[index].worker);
    setPermit(scenarios[index].permit);

    const interval = setInterval(() => {

      index++;



      if (index >= scenarios.length) {
        clearInterval(interval);

        setDemoMode(false);

        // Reset sensor immediately
        setSensor({
          gas: 20,
          temperature: 30,
          pressure: 100,
        });

        // Reset worker
        setWorker({
          name: "Worker 01",
          zone: "Boiler Area",
          status: "Working",
          count: 1,
        });

        // Reset permit
        setPermit({
          type: "Hot Work",
          status: "Active",
          hot_work: true,
        });

        return;
      }
      setSensor(scenarios[index].sensor);
      setWorker(scenarios[index].worker);
      setPermit(scenarios[index].permit);

    }, 5000);

  };
  // ---------- Risk ----------
  // ---------- Risk ----------
  let risk = "🟢 Safe";
  let riskColor = "green";

  if (masterAIResult?.final_risk) {
    switch (masterAIResult.final_risk) {
      case "CRITICAL":
        risk = "🔴 Critical";
        riskColor = "#dc2626";
        break;

      case "HIGH":
        risk = "🔴 High";
        riskColor = "red";
        break;

      case "MEDIUM":
        risk = "🟡 Medium";
        riskColor = "orange";
        break;

      default:
        risk = "🟢 Safe";
        riskColor = "green";
    }
  } else {
    if (sensor.gas > 70 || sensor.temperature > 55) {
      risk = "🔴 High";
      riskColor = "red";
    } else if (sensor.gas > 50 || sensor.temperature > 40) {
      risk = "🟡 Medium";
      riskColor = "orange";
    }
  }

  // ---------- Dynamic AI Safety Score ----------

  let safetyScore = 100;

  // Sensor penalties
  safetyScore -= Math.max(0, sensor.gas - 20) * 0.45;
  safetyScore -= Math.max(0, sensor.temperature - 30) * 0.7;
  safetyScore -= Math.max(0, sensor.pressure - 100) * 0.35;

  // Master AI penalty
  if (masterAIResult?.final_risk === "MEDIUM") {
    safetyScore -= 8;
  }

  if (masterAIResult?.final_risk === "HIGH") {
    safetyScore -= 18;
  }

  if (masterAIResult?.final_risk === "CRITICAL") {
    safetyScore -= 30;
  }


  // PPE violations
  if (ppe["NO-Hardhat"] > 0) safetyScore -= 5;
  if (ppe["NO-Safety Vest"] > 0) safetyScore -= 5;
  if (ppe["NO-Mask"] > 0) safetyScore -= 5;

  // Permit status
  if (!permit.hot_work) safetyScore -= 5;

  // Worker status
  if (worker.status === "Monitoring") safetyScore -= 3;
  if (worker.status === "Evacuating") safetyScore -= 8;
  if (worker.status === "Evacuated") safetyScore -= 10;

  // ===============================================

  // Keep score between 0 and 100
  safetyScore = Math.max(0, Math.min(100, Math.round(safetyScore)));




  // ---------- Alert ----------
  let alertMessage = "✅ Factory Operating Normally";

  let alertColor = "green";

  if (sensor.gas > 70) {
    alertMessage = "🚨 Gas Leakage Detected";
    alertColor = "red";
  } else if (sensor.temperature > 55) {
    alertMessage = "🔥 High Temperature";
    alertColor = "orange";
  } else if (sensor.pressure > 130) {
    alertMessage = "⚠ High Pressure";
    alertColor = "#d97706";
  }




  return (
    <div
      style={{
        display: "flex",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "0px",
          padding: "16px",
          paddingBottom: "20px",
          background: `
      radial-gradient(circle at top, rgba(37,99,235,0.08), transparent 45%),
      linear-gradient(#1f2937 1px, transparent 1px),
      linear-gradient(90deg, #1f2937 1px, transparent 1px),
      #0b1120
    `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px, cover",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div style={{ paddingTop: "12px" }}>

          <ExecutiveHeader />

          <ExecutiveKPIs
            safetyScore={safetyScore}
            risk={risk}
            worker={worker}
            permit={permit}
          />
          <SystemStatusBar
            sensor={sensor}
            risk={risk}
            worker={worker}
            permit={permit}
          />

        </div>
        <TopSection
          sensor={sensor}
          risk={risk}
          riskColor={riskColor}
          safetyScore={safetyScore}
          confidence={masterAIResult?.confidence ?? 98}

        />

        {/* ---------------- TOP PRIORITY ---------------- */}
        <AlertBox
          message={alertMessage}
          color={alertColor}
        />
        {/* ===================== MAIN GRID ===================== */}

        <div
          style={{
            display: "grid",
            gap: "16px",
            marginTop: "16px",
            alignItems: "start",
            gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))"

          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <LiveCommandCenter
              sensor={sensor}
              worker={worker}
              permit={permit}
              ppe={ppe}
              masterAIResult={masterAIResult}
              setMasterAIResult={setMasterAIResult}
            />
            <CompoundRiskEngine
              sensor={sensor}
              worker={worker}
              permit={permit}
              ppe={ppe}
            />

            <IncidentPattern sensor={sensor} />

            <KnowledgeCenter
              sensor={sensor}
              history={history}
            />
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <AIInsights sensor={sensor} />
            <BusinessImpact
              sensor={sensor}
              result={masterAIResult}
            />
            <NotificationCenter sensor={sensor} />
            <AIActionLog sensor={sensor} />

            <EmergencyCenter
              sensor={sensor}
              worker={worker}
              permit={permit}
              ppe={ppe}
              result={masterAIResult}
            />


            <WorkerStatus worker={worker} />

            <PermitStatus permit={permit} />

            <ShiftIntelligence sensor={sensor} />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Dashboard;