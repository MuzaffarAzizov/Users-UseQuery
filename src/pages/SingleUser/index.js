import { instance } from "../../utils/axiosInstance";
import { Tabs } from "antd";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import s from "./style.module.scss";
import { Button } from "antd";
export const SingleUser = () => {
  const [users, setUsers] = useState([{}]);
  const [posts, setPosts] = useState([{}]);
  const [albums, setAlbums] = useState([{}]);
  const [photos, setPhotos] = useState([{}]);
  const { id } = useParams();
  const nav = useNavigate();
  console.log(id, "id");
  useEffect(() => {
    instance.get(`/users/${id}`).then((res) => setUsers(res.data));
    instance.get(`/posts/${id}`).then((res) => setPosts(res.data));
    instance.get(`/albums/${id}`).then((res) => setAlbums(res.data));
    instance.get(`/photos/${id}`).then((res) => setPhotos(res.data));
  }, [id]);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Tab 1`,
      children: (
        <div>
          <img src="https://picsum.photos/seed/picsum/300/300" alt="" />
          <h3>{users?.id}</h3>
          <p>{users?.name}</p>
          <p>{users?.username}</p>
          <p>{users?.email}</p>
          <br />
          <p>
            {users?.address?.street}
            {users?.address?.suite}
          </p>
          <p>
            {users?.address?.city}
            {users?.address?.zipcode}
          </p>
          <h3>
            {users?.address?.geo?.lat}
            {users?.address?.geo?.lng}
          </h3>
          <p>{users?.phone}</p>
          <p>{users?.website}</p>
          <p>{users?.company?.name}</p>
          <h2>{users?.company?.catchPhrase}</h2>
          <h2>{users?.company?.bs}</h2>
          <Link to={`/users`}>
            <Button type="primary" className={s.button}>
              Back
            </Button>
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: `Tab 2`,
      children: (
        <div>
          <img src="https://picsum.photos/seed/picsum/300/300" alt="" />
          <h3>{posts?.id}</h3>
          <p>{posts?.title}</p>
          <p>{posts?.body}</p>
          <Link to={`/users`}>
            <Button type="primary" className={s.button}>
              Back
            </Button>
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      label: `Tab 3`,
      children: (
        <div>
          <img src="https://picsum.photos/300/300" alt="" />
          <h3>{albums?.id}</h3>
          <p>{albums?.title}</p>
          <Link to={`/users`}>
            <Button type="primary" className={s.button}>
              Back
            </Button>
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      label: `Tab 4`,
      children: (
        <div>
          <h3>{photos?.id}</h3>
          <p>{photos?.title}</p>
          <img src="https://picsum.photos/seed/picsum/300/300" alt="" />
          <Link to={`/users`}>
            <Button type="primary" className={s.button}>
              Back
            </Button>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className={s.single}>
      <Tabs
        defaultActiveKey="1"
        centered
        items={items}
        onChange={onChange}
      ></Tabs>
    </div>
  );
};
