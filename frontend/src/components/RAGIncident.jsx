import { useEffect, useState } from "react";
import axios from "axios";

function RAGIncident({ sensor }) {

  const [data, setData] = useState(null);

  useEffect(() => {

    async function load() {

      const res = await axios.post(
        "http://127.0.0.1:8000/rag",
        sensor
      );

      setData(res.data);
    }

    load();

  }, [sensor]);

  if (!data) return null;

  return (

    <div
      style={{
        background:"#1e293b",
        color:"white",
        padding:"20px",
        borderRadius:"12px",
        marginTop:"20px"
      }}
    >

      <h2>📚 Incident Pattern Intelligence (RAG)</h2>

      <hr/>

      {data.matches.map((item,index)=>(

        <div
          key={index}
          style={{
            background:"#0f172a",
            padding:"12px",
            marginTop:"10px",
            borderRadius:"8px"
          }}
        >
          🚨 {item}
        </div>

      ))}

    </div>

  );

}

export default RAGIncident;