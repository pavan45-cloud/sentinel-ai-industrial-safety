import { useState } from "react";
import axios from "axios";

function PPEDetector() {

    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const detectPPE = async () => {

        if (!image) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append("file", image);

        setLoading(true);

        try {

            const res = await axios.post(
                "https://sentinel-ai-industrial-safety.onrender.com/detect-workers",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            setResult(res.data);

        } catch (err) {
            console.log(err);
            alert("Detection Failed");
        }

        setLoading(false);
    };

    return (

        <div
            style={{
                background: "#111827",
                padding: 20,
                borderRadius: 15,
                color: "white",
                marginTop: 20
            }}
        >

            <h2>🦺 PPE Detection</h2>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />

            <br /><br />

            <button onClick={detectPPE}>
                Detect PPE
            </button>

            <br /><br />

            {loading && <h3>Detecting...</h3>}

            {result && (

                <div>

                    <h3>Detection Result</h3>

                    <p>👷 Workers : {result.workers}</p>

                    <p>⛑ Helmets : {result.helmets}</p>

                    <p>🦺 Vests : {result.vests}</p>

                    <p>❌ Without Helmet : {result.without_helmet}</p>

                    <p>❌ Without Vest : {result.without_vest}</p>

                </div>

            )}

        </div>

    );

}

export default PPEDetector;