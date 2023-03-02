import u from "./style.module.scss";
import { useState, useContext } from "react";
import AuthContext, { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const nav = useNavigate();
  const userHandle = () => {
    nav(`/users`);
    setUser(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login successful");
    // user.map(item)=>(item.username===username && item.password === password ? userHandle():console.log('error'));
    if (user.username === username && user.password === password) {
      nav(`/users`);
      setUser(true);

      setTimeout(() => {
        alert(`Hello user ${user.username}`);
        console.log(user);
      }, 2000);
    } else {
      alert("something wrong");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className={u.login}>
        <label htmlFor="uname">UserName</label>
        <input
          type="text"
          value={username}
          id="uname"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
