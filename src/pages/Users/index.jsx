import u from "./style.module.scss";
import { instance } from "../../utils/axiosInstance";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "antd";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    instance.get("/users").then((users) => setUsers(users.data));
  }, []);
  return (
    <div className={u.users}>
      {users?.map((user) => {
        return (
          <Link to={`/users/${user?.id}`} key={user?.id}>
            <div className={u.user}>
              <img src="https://picsum.photos/id/213/300/300" alt="" />
              <h3>{user?.id}</h3>
              <h2>{user?.name}</h2>
              <p>{user?.username}</p>
              <p>{user?.email}</p>
              <p>
                {user?.address?.street}
                {user?.address?.suite}
              </p>
              <p>
                {user?.address?.city}
                {user?.address?.zipcode}
              </p>
              <br />
              <Button type="primary">Add</Button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
