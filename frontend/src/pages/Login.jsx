import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    if (email === "admin@sentinel.ai" && password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };



  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#1f2937",
          padding: "30px",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          🚨 SentinelAI
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Demo Login
          <br />
          admin@sentinel.ai
          <br />
          admin123
        </p>
      </div>
    </div>
  );
}

export default Login;