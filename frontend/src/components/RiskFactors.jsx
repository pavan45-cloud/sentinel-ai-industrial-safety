export default function RiskFactors({ reasons }) {

    return (

        <div className="card">

            <h3>Risk Factors</h3>

            {

                reasons.map((r,index)=>

                    <div key={index}>

                        ⚠ {r}

                    </div>

                )

            }

        </div>

    )

}