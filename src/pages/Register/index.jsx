import u from "./style.module.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../../utils/AuthContext";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const nav = useNavigate();
  const data = { username: username, password: password };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(data);
    if (user) {
      nav(`/login`);
    } else {
      console.log("error");
    }
    console.log("register", username, password);
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uname">UserName</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
