import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await axios.post("http://localhost:8080/register", {
      email,
      password
    });
    alert("Registered Successfully");
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
