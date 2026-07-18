import AIExecutiveSummary from "./AIExecutiveSummary";
import SensorChart from "./SensorChart";

function ExecutiveSection({
    sensor,
    worker,
    permit,
    ppe,
    history,
}) {

    return (

        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr",
                gap: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                alignItems: "stretch",
            }}
        >

            <AIExecutiveSummary
                sensor={sensor}
                worker={worker}
                permit={permit}
                ppe={ppe}
            />

            <SensorChart
                data={history}
            />

        </div>

    );

}

export default ExecutiveSection;