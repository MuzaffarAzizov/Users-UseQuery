import { NavLink } from "react-router-dom";
import n from "./style.module.scss";
export const Navbar = () => {
  return (
    <div className={n.navbar}>
      <NavLink to={"/"} className={n.child}>
        Home
      </NavLink>
      <NavLink to={"/about"} className={n.child}>
        About
      </NavLink>
      <NavLink to={"/users"} className={n.child}>
        Users
      </NavLink>
      <NavLink to={"/register"} className={n.child}>
        Register
      </NavLink>
      <NavLink to={"/login"} className={n.child}>
        Login
      </NavLink>
    </div>
  );
};
