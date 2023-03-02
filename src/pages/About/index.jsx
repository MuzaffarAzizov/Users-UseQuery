import a from "./style.module.scss";
import img5 from "../../components/assets/author.jpg";
import img6 from "../../components/assets/qr-code.png";

export const About = () => {
  return (
    <div className={a.about}>
      <img src={img5} alt="" className={a.about__img} />
      <div className={a.about__text}>
        <h2>About the Author</h2>
        <hr />
        <p>
          We believe that bookstores are essential to a healthy culture.
          <br />
          They’re where authors can connect with readers, where we
          <br />
          discover new writers, where children get hooked on the thrill
          <br />
          of reading that can last a lifetime.
        </p>
        <div className={a.numbers}>
          <div className={a.number}>
            02
            <h6>Books Published</h6>
          </div>
          <hr />
          <div className={a.number}>
            4.5
            <h6>User Reviews</h6>
          </div>
          <hr />
          <div className={a.number}>
            04
            <h6>Best Seller Awards</h6>
          </div>
        </div>
        <div className={a.qrcode}>
          <img src={img6} alt="" />
          <div className={a.qrcode__text}>
            <h4>John Abraham , Ph.d</h4>
            <h5>Mail: johnabraham@gmail.com</h5>
            <h5>Phone: (+2) 123 545 9000</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
