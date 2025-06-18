import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    if (!email || !password){
      setError("please enter both email and password.nigga");
    } else {
      setError("");
      console.log("login info",{ email, password });
      // backend logic should be added here
    }
  };

  return(
    <div style={StyleSheet.container}>
      <form onSumit={handleSumit} style={styles.form}>
        <h2>login</h2>r

        <input
         type="email"
         placeholder="enter email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         style={styles.input}
        />

        <input
         type={showPassword ? "text" : "password"}
         placeholder="Enter password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         style={styles.input}
        />
        <label>
          <input 
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
        /> {""}
        Show Password
        </label>

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>
          login
        </button>
      </form> 
     </div>  
  );
  }
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f4f4f4",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "40px",
      background: "fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    input: {
      padding: "10px",
      frontSize: "16px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#007bff",
      color: "fff",
      border: "none",
      frontSize: "16px",
      cursor: "pointer",
    },
    error: {
      color: "red",
      frontSize: "14px",
    },
  };

  export default Login;
