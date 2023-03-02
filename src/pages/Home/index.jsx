import { Carousel } from "antd";
import img1 from "../../components/assets/img1.jpg";
import img2 from "../../components/assets/img2.jpg";
import img3 from "../../components/assets/img3.jpg";
import img4 from "../../components/assets/img4.jpg";
import h from "./style.module.scss";

export const Home = () => {
  return (
    <div className={h.home}>
      <h1>Welcome to my website</h1>
      <Carousel autoplay>
        <div>
          <img src={img1} alt="" className={h.img} />
        </div>
        <div>
          <img src={img2} alt="" className={h.img} />
        </div>
        <div>
          <img src={img3} alt="" className={h.img} />
        </div>
        <div>
          <img src={img4} alt="" className={h.img} />
        </div>
      </Carousel>
    </div>
  );
};
